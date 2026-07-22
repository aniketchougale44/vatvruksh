import { useEffect, useState, useSyncExternalStore } from 'react';

export const SLIDE_INTERVAL_MS = 3500;

// A single shared ticker drives every photo slider on the page, so cards
// change photos in the exact same instant instead of drifting apart based
// on when each card's own images happened to finish loading.
let tick = Math.floor(Date.now() / SLIDE_INTERVAL_MS);
let intervalId: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

const advance = () => {
  tick = Math.floor(Date.now() / SLIDE_INTERVAL_MS);
  listeners.forEach((listener) => listener());
};

const startTicker = () => {
  if (intervalId !== null) return;
  const msUntilBoundary = SLIDE_INTERVAL_MS - (Date.now() % SLIDE_INTERVAL_MS);
  const alignTimeout = setTimeout(() => {
    advance();
    intervalId = setInterval(advance, SLIDE_INTERVAL_MS);
  }, msUntilBoundary);
  // Mark as "started" immediately so concurrent subscribers don't schedule
  // a second alignment timeout before this one has fired.
  intervalId = alignTimeout as unknown as ReturnType<typeof setInterval>;
};

const subscribe = (callback: () => void) => {
  startTicker();
  listeners.add(callback);
  return () => listeners.delete(callback);
};

const getTick = () => tick;

/**
 * Returns a slide index for a card with `length` photos, synced to a single
 * shared clock so every slider on the page flips at the same moment.
 * Pass `paused` (e.g. while hovering) to freeze the index until it's
 * released, at which point it snaps back into sync automatically.
 */
export function useSyncedSlideIndex(length: number, paused: boolean): number {
  const currentTick = useSyncExternalStore(subscribe, getTick);
  const [frozenTick, setFrozenTick] = useState<number | null>(null);

  useEffect(() => {
    setFrozenTick(paused ? getTick() : null);
  }, [paused]);

  const effectiveTick = paused && frozenTick !== null ? frozenTick : currentTick;
  return length > 0 ? effectiveTick % length : 0;
}

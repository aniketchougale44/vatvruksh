import { useEffect, useState } from 'react';

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const VIDEO_EXTENSIONS = ['mp4', 'webm'];
const DEFAULT_MAX_SLOTS = 5;

export interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

const probeImage = (src: string) =>
  new Promise<boolean>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });

const probeVideo = (src: string) =>
  new Promise<boolean>((resolve) => {
    const video = document.createElement('video');
    video.onloadedmetadata = () => resolve(true);
    video.onerror = () => resolve(false);
    video.src = src;
  });

const findSlotMedia = async (basePath: string, slug: string, slot: number): Promise<MediaItem | null> => {
  const dir = slug ? `${basePath}/${slug}` : basePath;
  for (const ext of IMAGE_EXTENSIONS) {
    const src = `${dir}/${slot}.${ext}`;
    if (await probeImage(src)) return { src, type: 'image' };
  }
  for (const ext of VIDEO_EXTENSIONS) {
    const src = `${dir}/${slot}.${ext}`;
    if (await probeVideo(src)) return { src, type: 'video' };
  }
  return null;
};

/**
 * Like usePhotoSlots, but also matches numbered video files (1.mp4, 2.webm, ...)
 * so a slider can mix photos and short clips under the same numbered slots.
 */
export function useMediaSlots(basePath: string, slug: string, maxSlots: number = DEFAULT_MAX_SLOTS): MediaItem[] {
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    const slots = Array.from({ length: maxSlots }, (_, i) => i + 1);

    Promise.all(slots.map((slot) => findSlotMedia(basePath, slug, slot))).then((results) => {
      if (!cancelled) setMedia(results.filter((item): item is MediaItem => item !== null));
    });

    return () => {
      cancelled = true;
    };
  }, [basePath, slug, maxSlots]);

  return media;
}

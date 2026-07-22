import { useEffect, useState } from 'react';

const EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const DEFAULT_MAX_SLOTS = 5;

const probeImage = (src: string) =>
  new Promise<string | null>((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });

const findSlotPhoto = async (basePath: string, slug: string, slot: number): Promise<string | null> => {
  for (const ext of EXTENSIONS) {
    const found = await probeImage(`${basePath}/${slug}/${slot}.${ext}`);
    if (found) return found;
  }
  return null;
};

/**
 * Looks for up to `maxSlots` numbered photos under `${basePath}/${slug}/`
 * (e.g. 1.jpg, 2.png, ...), trying a few common extensions per slot so it
 * doesn't matter whether photos were saved as .jpg, .png, etc.
 */
export function usePhotoSlots(basePath: string, slug: string, maxSlots: number = DEFAULT_MAX_SLOTS): string[] {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const slots = Array.from({ length: maxSlots }, (_, i) => i + 1);

    Promise.all(slots.map((slot) => findSlotPhoto(basePath, slug, slot))).then((results) => {
      if (!cancelled) setPhotos(results.filter((src): src is string => src !== null));
    });

    return () => {
      cancelled = true;
    };
  }, [basePath, slug, maxSlots]);

  return photos;
}

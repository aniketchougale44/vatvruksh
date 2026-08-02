import { useEffect, useState } from 'react';
import { getMediaManifest, manifestKey } from './mediaManifest';

/**
 * Looks up the pre-built media manifest for numbered photos under
 * `${basePath}/${slug}/` (e.g. 1.jpg, 2.png, ...) instead of probing
 * extensions at runtime, so it doesn't matter whether photos were saved
 * as .jpg, .png, etc. without generating failed network requests.
 */
export function usePhotoSlots(basePath: string, slug: string): string[] {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    const key = manifestKey(basePath, slug);
    getMediaManifest().then((manifest) => {
      if (cancelled) return;
      const entry = manifest[key];
      setPhotos(Array.isArray(entry) ? (entry as string[]) : []);
    });
    return () => {
      cancelled = true;
    };
  }, [basePath, slug]);

  return photos;
}

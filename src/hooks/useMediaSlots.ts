import { useEffect, useState } from 'react';
import { getMediaManifest, manifestKey } from './mediaManifest';

export interface MediaItem {
  src: string;
  type: 'image' | 'video';
}

/**
 * Looks up the pre-built media manifest for numbered photos/videos under
 * `${basePath}/${slug}/` (e.g. 1.jpg, 2.mp4, ...) instead of probing
 * extensions at runtime, so a slider can mix photos and short clips under
 * the same numbered slots without generating failed network requests.
 */
export function useMediaSlots(basePath: string, slug: string): MediaItem[] {
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    const key = manifestKey(basePath, slug);
    getMediaManifest().then((manifest) => {
      if (cancelled) return;
      const entry = manifest[key];
      setMedia(Array.isArray(entry) ? (entry as MediaItem[]) : []);
    });
    return () => {
      cancelled = true;
    };
  }, [basePath, slug]);

  return media;
}

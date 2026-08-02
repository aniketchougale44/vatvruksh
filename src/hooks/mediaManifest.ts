export type MediaManifest = Record<string, unknown>;

let manifestPromise: Promise<MediaManifest> | null = null;

// Fetched once and shared by every slot hook instance; built by
// scripts/generate-media-manifest.js so slots resolve to files that are
// known to exist instead of being probed one extension at a time.
export function getMediaManifest(): Promise<MediaManifest> {
  if (!manifestPromise) {
    manifestPromise = fetch('/media-manifest.json')
      .then((res) => (res.ok ? res.json() : {}))
      .catch(() => ({}));
  }
  return manifestPromise;
}

export function manifestKey(basePath: string, slug: string): string {
  return (slug ? `${basePath}/${slug}` : basePath).replace(/^\//, '');
}

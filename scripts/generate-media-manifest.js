import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp'];
const VIDEO_EXTENSIONS = ['mp4', 'webm'];
const MAX_SLOTS = 5;
const PUBLIC_DIR = path.resolve(process.cwd(), 'public');

function findSlotFile(dirAbsPath, dirUrlPath, slot, includeVideo) {
  for (const ext of IMAGE_EXTENSIONS) {
    const fname = `${slot}.${ext}`;
    if (fs.existsSync(path.join(dirAbsPath, fname))) {
      return { src: `${dirUrlPath}/${fname}`, type: 'image' };
    }
  }
  if (includeVideo) {
    for (const ext of VIDEO_EXTENSIONS) {
      const fname = `${slot}.${ext}`;
      if (fs.existsSync(path.join(dirAbsPath, fname))) {
        return { src: `${dirUrlPath}/${fname}`, type: 'video' };
      }
    }
  }
  return null;
}

function scanSlots(dirAbsPath, dirUrlPath, includeVideo) {
  const items = [];
  for (let slot = 1; slot <= MAX_SLOTS; slot++) {
    const found = findSlotFile(dirAbsPath, dirUrlPath, slot, includeVideo);
    if (found) items.push(found);
  }
  return items;
}

const manifest = {};

// Gallery: numbered photos/videos directly under public/gallery.
const galleryAbs = path.join(PUBLIC_DIR, 'gallery');
if (fs.existsSync(galleryAbs)) {
  manifest['gallery'] = scanSlots(galleryAbs, '/gallery', true);
}

// Destination sub-folders (one set of numbered photos per slug): image-only slots.
const PHOTO_BASES = ['pickupdrop', 'outstation', 'business', 'airport'];
for (const base of PHOTO_BASES) {
  const baseAbs = path.join(PUBLIC_DIR, base);
  if (!fs.existsSync(baseAbs)) continue;
  const slugs = fs
    .readdirSync(baseAbs, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  for (const slug of slugs) {
    const abs = path.join(baseAbs, slug);
    const items = scanSlots(abs, `/${base}/${slug}`, false);
    manifest[`${base}/${slug}`] = items.map((item) => item.src);
  }
}

const outPath = path.join(PUBLIC_DIR, 'media-manifest.json');
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
console.log(`Wrote media manifest with ${Object.keys(manifest).length} entries to ${outPath}`);

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const MAX_WIDTH = 1200;
const QUALITY = 80;

const folders = ['cupboards', 'mosquito doors', 'aluminium windows', 'shutters', 'partitions', 'shop'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);

  // Skip already optimized files
  if (baseName.endsWith('-opt')) return;

  try {
    const metadata = await sharp(filePath).metadata();
    const needsResize = metadata.width > MAX_WIDTH;

    let pipeline = sharp(filePath);

    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: QUALITY });
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
    }

    const outputPath = path.join(dir, `${baseName}-opt${ext}`);
    await pipeline.toFile(outputPath);

    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(outputPath).size;
    const saved = ((1 - newSize / originalSize) * 100).toFixed(1);

    console.log(`${path.basename(filePath)}: ${(originalSize/1024).toFixed(0)}KB -> ${(newSize/1024).toFixed(0)}KB (${saved}% saved)`);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function processFolder(folderPath) {
  if (!fs.existsSync(folderPath)) return;

  const files = fs.readdirSync(folderPath);
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await optimizeImage(filePath);
      }
    }
  }
}

async function main() {
  console.log('Optimizing images...\n');

  for (const folder of folders) {
    const folderPath = path.join(PUBLIC_DIR, folder);
    if (fs.existsSync(folderPath)) {
      console.log(`Processing: ${folder}`);
      await processFolder(folderPath);
      console.log('');
    }
  }

  console.log('Done!');
}

main().catch(console.error);

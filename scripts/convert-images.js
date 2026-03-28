import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '../public');
const MAX_SIZE_KB = 200;
const TARGET_QUALITY = 80;

async function getAllImageFiles(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await getAllImageFiles(filePath, fileList);
    } else if (['.png', '.jpg', '.jpeg'].includes(extname(file).toLowerCase())) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function convertToWebP(inputPath) {
  const ext = extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');
  
  let quality = TARGET_QUALITY;
  let converted = false;
  
  while (quality >= 20 && !converted) {
    try {
      await sharp(inputPath)
        .webp({ quality })
        .toFile(outputPath);
      
      const stats = await stat(outputPath);
      const sizeKB = stats.size / 1024;
      
      if (sizeKB <= MAX_SIZE_KB) {
        console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)} (${sizeKB.toFixed(1)}KB, quality: ${quality})`);
        converted = true;
      } else if (quality > 20) {
        quality -= 10;
      } else {
        console.log(`⚠ ${basename(inputPath)} → ${basename(outputPath)} (${sizeKB.toFixed(1)}KB) - Could not compress below 200KB`);
        converted = true;
      }
    } catch (error) {
      console.error(`✗ Error converting ${basename(inputPath)}:`, error.message);
      break;
    }
  }
}

async function main() {
  console.log('🔄 Starting image conversion to WebP...\n');
  
  try {
    const imageFiles = await getAllImageFiles(PUBLIC_DIR);
    console.log(`Found ${imageFiles.length} images to convert\n`);
    
    let converted = 0;
    for (const imagePath of imageFiles) {
      await convertToWebP(imagePath);
      converted++;
    }
    
    console.log(`\n✅ Conversion complete! Processed ${converted} images.`);
    console.log('\n📝 Note: Original PNG/JPG files are kept. You can delete them manually after verifying WebP files work correctly.');
  } catch (error) {
    console.error('❌ Error during conversion:', error);
    process.exit(1);
  }
}

main();

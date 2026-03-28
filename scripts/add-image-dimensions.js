import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Get dimensions of an image file
 */
async function getImageDimensions(imagePath) {
  try {
    const fullPath = path.join(process.cwd(), imagePath);
    const metadata = await sharp(fullPath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format
    };
  } catch (error) {
    console.error(`Error reading ${imagePath}:`, error.message);
    return null;
  }
}

/**
 * Get aspect ratio as a string
 */
function getAspectRatio(width, height) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
}

/**
 * Scan directory for images and get their dimensions
 */
async function scanImagesInDirectory(dir) {
  const results = [];
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively scan subdirectories
        const subResults = await scanImagesInDirectory(fullPath);
        results.push(...subResults);
      } else if (entry.isFile() && /\.(webp|png|jpg|jpeg)$/i.test(entry.name)) {
        const relativePath = fullPath.replace(process.cwd(), '').replace(/\\/g, '/');
        const dimensions = await getImageDimensions(fullPath);
        
        if (dimensions) {
          results.push({
            path: relativePath,
            name: entry.name,
            ...dimensions,
            aspectRatio: getAspectRatio(dimensions.width, dimensions.height)
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error scanning ${dir}:`, error.message);
  }
  
  return results;
}

/**
 * Generate a report of all images with their dimensions
 */
async function generateImageDimensionsReport() {
  console.log('📸 Scanning images in public directory...\n');
  
  const images = await scanImagesInDirectory('public');
  
  // Group by directory
  const grouped = images.reduce((acc, img) => {
    const dir = path.dirname(img.path);
    if (!acc[dir]) acc[dir] = [];
    acc[dir].push(img);
    return acc;
  }, {});
  
  // Generate report
  let report = '# Image Dimensions Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n`;
  report += `Total Images: ${images.length}\n\n`;
  
  for (const [dir, imgs] of Object.entries(grouped)) {
    report += `## ${dir}\n\n`;
    report += '| Image | Width | Height | Aspect Ratio | Format |\n';
    report += '|-------|-------|--------|--------------|--------|\n';
    
    for (const img of imgs) {
      report += `| ${img.name} | ${img.width}px | ${img.height}px | ${img.aspectRatio} | ${img.format} |\n`;
    }
    
    report += '\n';
  }
  
  // Save report
  await fs.writeFile('IMAGE_DIMENSIONS.md', report);
  console.log('✅ Report saved to IMAGE_DIMENSIONS.md\n');
  
  // Print summary
  console.log('📊 Summary by Aspect Ratio:');
  const ratios = images.reduce((acc, img) => {
    acc[img.aspectRatio] = (acc[img.aspectRatio] || 0) + 1;
    return acc;
  }, {});
  
  for (const [ratio, count] of Object.entries(ratios)) {
    console.log(`   ${ratio}: ${count} images`);
  }
}

// Run the script
generateImageDimensionsReport().catch(console.error);

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hero images that need optimization
const heroImages = [
  {
    input: 'public/Home/hero.webp',
    outputs: [
      { path: 'public/Home/hero-mobile.webp', width: 768, quality: 85 },
      { path: 'public/Home/hero-tablet.webp', width: 1024, quality: 85 },
      { path: 'public/Home/hero-desktop.webp', width: 1920, quality: 85 },
    ]
  },
  {
    input: 'public/heritage.webp',
    outputs: [
      { path: 'public/heritage-mobile.webp', width: 768, quality: 85 },
      { path: 'public/heritage-tablet.webp', width: 1024, quality: 85 },
      { path: 'public/heritage-desktop.webp', width: 1920, quality: 85 },
    ]
  }
];

async function optimizeImage(input, output, width, quality) {
  try {
    const inputPath = path.join(process.cwd(), input);
    const outputPath = path.join(process.cwd(), output);
    
    // Check if input exists
    await fs.access(inputPath);
    
    console.log(`Optimizing ${input} -> ${output} (${width}px, quality: ${quality})`);
    
    await sharp(inputPath)
      .resize(width, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = await fs.stat(outputPath);
    console.log(`✓ Created ${output} (${(stats.size / 1024).toFixed(2)} KB)`);
  } catch (error) {
    console.error(`✗ Error processing ${input}:`, error.message);
  }
}

async function optimizeAllHeroImages() {
  console.log('🖼️  Starting hero image optimization...\n');
  
  for (const image of heroImages) {
    console.log(`Processing: ${image.input}`);
    
    for (const output of image.outputs) {
      await optimizeImage(
        image.input,
        output.path,
        output.width,
        output.quality
      );
    }
    
    console.log('');
  }
  
  console.log('✅ Hero image optimization complete!');
}

// Run optimization
optimizeAllHeroImages().catch(console.error);

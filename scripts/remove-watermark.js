const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/feed-instagram-mockup.webp');
const outputPath = path.join(__dirname, '../public/images/feed-instagram-mockup-clean.webp');

async function removeWatermark() {
  try {
    const metadata = await sharp(inputPath).metadata();
    const { width, height } = metadata;

    console.log(`Image dimensions: ${width}x${height}`);

    // Paint a rectangle on the bottom right corner
    // Sampled exact color #e7e7e5
    const rectSize = 90;
    const rect = Buffer.from(
      `<svg width="${width}" height="${height}">
        <filter id="blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <rect x="${width - rectSize}" y="${height - rectSize}" width="${rectSize}" height="${rectSize}" fill="#e7e7e5" filter="url(#blur)" />
      </svg>`
    );

    await sharp(inputPath)
      .composite([{ input: rect, top: 0, left: 0 }])
      .webp({ quality: 100 })
      .toFile(outputPath);

    console.log('Successfully created clean image at:', outputPath);
    
    // Now replace the original
    const fs = require('fs');
    fs.renameSync(outputPath, inputPath);
    console.log('Replaced original image.');

  } catch (error) {
    console.error('Error processing image:', error);
  }
}

removeWatermark();

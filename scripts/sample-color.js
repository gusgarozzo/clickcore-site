const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/feed-instagram-mockup.webp');

async function sampleColor() {
  try {
    // Sample a pixel slightly to the left of the watermark area
    const { data, info } = await sharp(inputPath)
      .extract({ left: 1300, top: 750, width: 1, height: 1 })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const [r, g, b] = data;
    const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    console.log(`Sampled color at (1300, 750): ${hex} (RGB: ${r}, ${g}, ${b})`);
  } catch (error) {
    console.error('Error sampling color:', error);
  }
}

sampleColor();

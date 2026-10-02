// Generates public/og-image.png (1200×630), the site-wide default social image.
// Previously og-image.png was a copy of the 500×500 logo while metadata declared
// 1200×630, so link previews were cropped/blurry.
// Usage: node scripts/generate-default-og-image.mjs   (uses sharp, bundled with Next.js)
import { readFileSync } from 'node:fs'
import sharp from 'sharp'

const logo = readFileSync('public/logo.png').toString('base64')
const font = "'Noto Sans', 'DejaVu Sans', Arial, Helvetica, sans-serif"
const arFont = "'Noto Sans Arabic', 'DejaVu Sans', Arial, sans-serif"

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#006630"/><stop offset="0.5" stop-color="#009A44"/><stop offset="1" stop-color="#00b84f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="28" height="630" fill="#CE1126"/>
  <rect x="0" y="606" width="300" height="24" fill="#CE1126"/>
  <rect x="300" y="606" width="300" height="24" fill="#ffffff"/>
  <rect x="600" y="606" width="300" height="24" fill="#111827"/>
  <rect x="900" y="606" width="300" height="24" fill="#007533"/>
  <rect x="910" y="170" width="230" height="230" rx="32" fill="#111827"/>
  <image href="data:image/png;base64,${logo}" x="920" y="180" width="210" height="210"/>
  <text x="90" y="150" fill="#ffffff" font-family="${font}" font-size="30" font-weight="700" opacity="0.9">UAE GRATUITY CHECK · UPDATED 2026</text>
  <text x="90" y="245" fill="#ffffff" font-family="${font}" font-size="62" font-weight="800">UAE Gratuity Calculator</text>
  <text x="90" y="320" fill="#ffffff" font-family="${font}" font-size="36" font-weight="600">Free end-of-service estimate in seconds</text>
  <text x="90" y="400" fill="#ffffff" font-family="${arFont}" font-size="44" font-weight="700">حاسبة مكافأة نهاية الخدمة</text>
  <text x="90" y="490" fill="#ffffff" font-family="${font}" font-size="28" font-weight="600" opacity="0.9">Federal Decree-Law No. 33 of 2021 · Basic salary · 2-year cap</text>
  <text x="90" y="560" fill="#ffffff" font-family="${font}" font-size="30" font-weight="800">uaegratuitycheck.com</text>
</svg>`

await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile('public/og-image.png')
console.log('Generated public/og-image.png')

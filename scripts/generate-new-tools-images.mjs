import { execFileSync } from 'node:child_process'
import { writeFileSync, rmSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

// Tool page OG images — branded green card style, matches generate-seo-og-images.mjs
const ogImages = [
  ['cost-of-living-calculator-uae-og.png', 'UAE Cost of Living Calculator', 'Dubai, Abu Dhabi & Sharjah monthly budgets - 2026'],
  ['currency-converter-uae-og.png', 'UAE Currency Converter', 'AED to 10 currencies - live indicative rates'],
  ['uae-income-tax-calculator-og.png', 'UAE Income Tax Calculator', '0% personal tax - see your full take-home pay'],
  ['uae-visa-cost-calculator-og.png', 'UAE Visa Cost Calculator', 'Employment visa fees, mainland vs free zone - 2026'],
  ['savings-goal-calculator-uae-og.png', 'UAE Savings Goal Calculator', 'Plan any goal with FD, savings & index fund rates'],
  ['dubai-rent-increase-calculator-rera-og.png', 'Dubai Rent Increase Calculator', 'Official RERA rental index brackets - 2026'],
]

// Blog hero placeholders — orange "PLACEHOLDER" style, matches existing
// app/blog SVG placeholders (e.g. uae-gratuity-two-year-cap.svg)
const blogImages = [
  ['uae-cost-of-living-2026-what-expats-actually-spend.svg', 'UAE Cost of Living 2026', 'What Expats Actually Spend', 'Real monthly budgets for Dubai, Abu Dhabi & Sharjah'],
  ['best-way-to-send-money-home-from-uae-2026.svg', 'Best Way to Send Money', 'Home From the UAE (2026)', 'Comparing banks, exchange houses & transfer apps'],
  ['is-there-income-tax-in-dubai-uae-explained.svg', 'Is There Income Tax', 'in Dubai? UAE Tax Explained', '0% personal tax, corporate tax & what expats ask most'],
  ['uae-employment-visa-cost-breakdown-2026.svg', 'UAE Employment Visa Cost', 'Full Breakdown for 2026', 'Entry permit, Emirates ID, medical & PRO fees'],
  ['how-to-save-your-first-aed-100000-in-uae.svg', 'How to Save Your First', 'AED 100,000 in the UAE', 'A practical savings plan for expat salaries'],
  ['rera-rent-increase-rules-dubai-explained.svg', 'RERA Rent Increase Rules', 'Explained for Dubai Tenants', 'Official brackets, notice periods & your rights'],
]

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function ogSvg(title, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff"/>
  <rect width="80" height="630" fill="#009B4D"/>
  <rect y="570" width="1200" height="60" fill="#1A2340"/>
  <text x="120" y="608" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">uaegratuitycheck.com</text>
  <rect x="120" y="305" width="178" height="42" rx="10" fill="#009B4D"/>
  <text x="140" y="332" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700">2026 Updated</text>
  <text x="120" y="210" fill="#1A2340" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="700">${escapeXml(title)}</text>
  <text x="120" y="272" fill="#5C5C5C" font-family="Arial, Helvetica, sans-serif" font-size="24">${escapeXml(subtitle)}</text>
  <circle cx="43" cy="96" r="20" fill="#fff"/>
  <path d="M35 96h16M43 88v16" stroke="#009B4D" stroke-width="4" stroke-linecap="round"/>
</svg>`
}

function blogPlaceholderSvg(line1, line2, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff7ed"/>
  <rect x="0" y="0" width="8" height="630" fill="#ea580c"/>
  <text x="600" y="200" font-family="Arial, sans-serif" font-size="46" font-weight="bold" fill="#7c2d12" text-anchor="middle">${escapeXml(line1)}</text>
  <text x="600" y="265" font-family="Arial, sans-serif" font-size="46" font-weight="bold" fill="#7c2d12" text-anchor="middle">${escapeXml(line2)}</text>
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="26" fill="#c2410c" text-anchor="middle">${escapeXml(subtitle)}</text>
  <text x="600" y="430" font-family="Arial, sans-serif" font-size="22" fill="#9a5730" text-anchor="middle">PLACEHOLDER — replace with final image</text>
  <text x="600" y="580" font-family="Arial, sans-serif" font-size="20" fill="#ea580c" text-anchor="middle">uaegratuitycheck.com</text>
  <rect x="100" y="460" width="1000" height="2" fill="#fed7aa"/>
</svg>`
}

// 1. Tool OG images -> public/<slug>-og.png
for (const [filename, title, subtitle] of ogImages) {
  const svgPath = join('public', `${filename}.tmp.svg`)
  const pngPath = join('public', filename)
  writeFileSync(svgPath, ogSvg(title, subtitle))
  execFileSync('sips', ['-s', 'format', 'png', svgPath, '--out', pngPath], { stdio: 'ignore' })
  rmSync(svgPath)
  console.log(`Generated ${pngPath}`)
}

// 2. Blog hero placeholders -> public/images/blog/<slug>.svg
mkdirSync(join('public', 'images', 'blog'), { recursive: true })
for (const [filename, line1, line2, subtitle] of blogImages) {
  const svgPath = join('public', 'images', 'blog', filename)
  writeFileSync(svgPath, blogPlaceholderSvg(line1, line2, subtitle))
  console.log(`Generated ${svgPath}`)
}

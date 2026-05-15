import { execFileSync } from 'node:child_process'
import { writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const images = [
  ['about-og.png', 'About UAE Gratuity Check', 'Built for UAE employees. Updated 2026.'],
  ['notice-period-og.png', 'UAE Notice Period Calculator', 'Calculate your required notice days - Updated 2026'],
  ['overtime-og.png', 'UAE Overtime Pay Calculator', 'Article 19 Labour Law - 125% and 150% rates'],
  ['visa-cancellation-og.png', 'UAE Visa Cancellation & Gratuity', 'Your rights under UAE Labour Law 2026'],
  ['gcc-comparison-og.png', 'GCC Gratuity Comparison 2026', 'End-of-service rules compared across 6 countries'],
  ['expat-lk-og.png', 'Sri Lankan Expat UAE Gratuity Guide', 'LKR conversion - Tax implications - Remittance tips'],
  ['expat-bd-og.png', 'Bangladeshi Expat UAE Gratuity Guide', 'BDT conversion - Tax implications - Remittance tips'],
  ['expat-np-og.png', 'Nepali Expat UAE Gratuity Guide', 'NPR conversion - Tax implications - Remittance tips'],
  ['expat-eg-og.png', 'Egyptian Expat UAE Gratuity Guide', 'EGP conversion - Tax implications - Remittance tips'],
  ['expat-gb-og.png', 'British Expat UAE Gratuity Guide', 'GBP conversion - Tax implications - Remittance tips'],
  ['blog-visa-cancellation-og.png', 'UAE Gratuity When Visa is Cancelled', 'EOSB rights after visa cancellation'],
  ['blog-probation-og.png', 'UAE Probation Period and Gratuity', 'What counts toward service in 2026'],
  ['blog-settlement-og.png', 'Read Your UAE Final Settlement Sheet', 'Gratuity - notice pay - deductions'],
  ['blog-india-tax-og.png', 'Is UAE Gratuity Taxable in India?', 'NRI tax guide for 2026'],
  ['blog-gcc-og.png', 'GCC Gratuity Rules Compared', 'UAE - Saudi - Kuwait - Oman - Qatar'],
  ['blog-delay-og.png', 'Can Employer Delay UAE Gratuity?', 'Payment rules and MOHRE remedies'],
  ['blog-domestic-og.png', 'UAE Gratuity for Domestic Workers', 'Rights under separate UAE rules'],
]

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function svg(title, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fff"/>
  <rect width="80" height="630" fill="#009B4D"/>
  <rect y="570" width="1200" height="60" fill="#1A2340"/>
  <text x="120" y="608" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">uaegratuitycheck.com</text>
  <rect x="120" y="305" width="178" height="42" rx="10" fill="#009B4D"/>
  <text x="140" y="332" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700">2026 Updated</text>
  <text x="120" y="210" fill="#1A2340" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700">${escapeXml(title)}</text>
  <text x="120" y="272" fill="#5C5C5C" font-family="Arial, Helvetica, sans-serif" font-size="25">${escapeXml(subtitle)}</text>
  <circle cx="43" cy="96" r="20" fill="#fff"/>
  <path d="M35 96h16M43 88v16" stroke="#009B4D" stroke-width="4" stroke-linecap="round"/>
</svg>`
}

for (const [filename, title, subtitle] of images) {
  const svgPath = join('public', `${filename}.tmp.svg`)
  const pngPath = join('public', filename)
  writeFileSync(svgPath, svg(title, subtitle))
  execFileSync('sips', ['-s', 'format', 'png', svgPath, '--out', pngPath], { stdio: 'ignore' })
  rmSync(svgPath)
  console.log(`Generated ${pngPath}`)
}

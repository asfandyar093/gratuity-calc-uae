import type { MetadataRoute } from 'next'
import { AR_PAIRS, EN_PAIRS } from '@/lib/i18nRoutes'

const SITE = 'https://www.uaegratuitycheck.com'
const abs = (p: string) => (p === '/' ? SITE : `${SITE}${p}`)

// Canonical, indexable 200 URLs only. Redirected/merged URLs (see next.config.ts)
// must never be listed here. lastModified only changes when the page content does.
const ROUTES: [path: string, lastModified: string][] = [
  ['/', '2026-10-04'],
  ['/ar', '2026-10-04'],
  ['/gratuity-by-years-of-service', '2026-10-04'],
  ['/final-settlement-calculator-uae', '2026-10-04'],
  ['/ar/final-settlement-calculator-uae', '2026-10-04'],
  ['/how-it-works', '2026-10-04'],
  ['/ar/how-it-works', '2026-10-04'],
  ['/gratuity-calculator/domestic-workers', '2026-10-04'],
  ['/ar/gratuity-calculator/domestic-workers', '2026-10-04'],
  ['/gratuity-calculator', '2026-10-04'],
  ['/calculate-dmcc-gratuity', '2026-10-04'],
  ['/blog', '2026-10-04'],
  ['/about', '2026-10-09'],
  ['/editorial-policy', '2026-10-09'],
  ['/blog/best-way-to-send-money-home-from-uae-2026', '2026-07-09'],
  ['/blog/difc-dews-gratuity-explained', '2026-10-04'],
  ['/blog/end-of-service-benefits-arabic-terms-english', '2026-06-10'],
  ['/blog/how-to-file-mohre-complaint', '2026-10-04'],
  ['/blog/how-to-read-uae-final-settlement-sheet', '2026-05-15'],
  ['/blog/how-to-save-your-first-aed-100000-in-uae', '2026-07-09'],
  ['/blog/i-resigned-without-job-lined-up-uae-gratuity', '2026-06-24'],
  ['/blog/is-there-income-tax-in-dubai-uae-explained', '2026-07-09'],
  ['/blog/is-uae-gratuity-taxable', '2026-04-21'],
  ['/blog/my-gratuity-was-short-what-hr-got-wrong', '2026-06-18'],
  ['/blog/notice-period-deductions-gratuity-uae', '2026-10-09'],
  ['/blog/rera-rent-increase-rules-dubai-explained', '2026-07-09'],
  ['/blog/transferred-same-free-zone-group-gratuity-reset', '2026-06-29'],
  ['/blog/uae-cost-of-living-2026-what-expats-actually-spend', '2026-07-09'],
  ['/blog/uae-employment-visa-cost-breakdown-2026', '2026-07-09'],
  ['/blog/uae-end-of-service-savings-scheme', '2026-10-09'],
  ['/blog/uae-final-settlement-checklist', '2026-10-09'],
  ['/blog/uae-gratuity-allowances-basic-salary', '2026-04-21'],
  ['/blog/uae-gratuity-less-than-1-year', '2026-03-01'],
  ['/blog/uae-gratuity-part-time-workers', '2026-10-04'],
  ['/blog/uae-gratuity-payment-delay-rules', '2026-05-15'],
  ['/blog/uae-gratuity-resignation-vs-termination', '2026-01-15'],
  ['/blog/uae-gratuity-tax-india-nri-guide', '2026-05-15'],
  ['/blog/uae-gratuity-two-year-cap', '2026-10-04'],
  ['/blog/uae-gratuity-visa-cancellation', '2026-10-04'],
  ['/blog/uae-leave-salary-calculation-guide', '2026-06-10'],
  ['/blog/uae-probation-period-gratuity-2026', '2026-05-15'],
  ['/blog/uae-repatriation-ticket-final-settlement', '2026-10-09'],
  ['/blog/unpaid-leave-gratuity-uae', '2026-10-09'],
  ['/calculate-adgm-gratuity', '2026-10-04'],
  ['/calculate-difc-gratuity', '2026-10-04'],
  ['/calculate-jafza-gratuity', '2026-10-04'],
  ['/calculate-sharjah-airport-free-zone-gratuity', '2026-10-04'],
  ['/contact', '2026-06-30'],
  ['/cost-of-living-calculator-uae', '2026-07-09'],
  ['/currency-converter-uae', '2026-07-09'],
  ['/dubai-rent-increase-calculator-rera', '2026-07-09'],
  ['/gcc-gratuity-comparison', '2026-05-15'],
  ['/gratuity-calculator/banking', '2026-05-01'],
  ['/gratuity-calculator/construction', '2026-05-01'],
  ['/gratuity-calculator/education', '2026-05-12'],
  ['/gratuity-calculator/healthcare', '2026-05-01'],
  ['/gratuity-calculator/hospitality', '2026-05-01'],
  ['/gratuity-investment-calculator', '2026-05-01'],
  ['/guides', '2026-07-02'],
  ['/guides/gratuity-calculator-indian-expats', '2026-02-01'],
  ['/guides/uae-gratuity-calculator-bangladesh-expats', '2026-07-02'],
  ['/guides/uae-gratuity-calculator-british-expats', '2026-07-02'],
  ['/guides/uae-gratuity-calculator-egypt-expats', '2026-07-02'],
  ['/guides/uae-gratuity-calculator-nepal-expats', '2026-07-02'],
  ['/guides/uae-gratuity-calculator-pakistan-expats', '2026-03-15'],
  ['/guides/uae-gratuity-calculator-philippines-expats', '2026-04-21'],
  ['/guides/uae-gratuity-calculator-sri-lanka-expats', '2026-07-02'],
  ['/maternity-leave-calculator-uae', '2026-07-02'],
  ['/mohre-annual-leave-calculator', '2026-05-01'],
  ['/notice-period-calculator-uae', '2026-05-15'],
  ['/overtime-calculator-uae', '2026-05-15'],
  ['/privacy-policy', '2026-03-30'],
  ['/salary-calculator', '2026-05-01'],
  ['/savings-goal-calculator-uae', '2026-07-09'],
  ['/sick-leave-calculator-uae', '2026-07-02'],
  ['/terms', '2026-03-30'],
  ['/tools', '2026-07-09'],
  ['/uae-income-tax-calculator', '2026-07-09'],
  ['/uae-labor-law', '2026-10-04'],
  ['/uae-visa-cost-calculator', '2026-07-09'],
]

function languages(path: string) {
  const en = AR_PAIRS[path] ? path : EN_PAIRS[path]
  if (!en) return undefined
  const ar = AR_PAIRS[en]
  return { en: abs(en), ar: abs(ar), 'x-default': abs(en) }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(([path, lastModified]) => {
    const langs = languages(path)
    return {
      url: abs(path),
      lastModified: new Date(lastModified),
      ...(langs ? { alternates: { languages: langs } } : {}),
    }
  })
}

// Contextual "related guides" (SEO audit, Oct 2026). Pages are grouped into topic
// clusters; each page links to the next few members of its cluster (cyclically), so every
// page in a cluster receives the same number of internal links, including the ones that
// previously had only one or two.
export type RelatedLink = { href: string; label: string; blurb: string }

const L: Record<string, RelatedLink> = {
  '/': { href: '/', label: 'UAE gratuity calculator', blurb: 'Work out your end-of-service gratuity from basic salary and service dates.' },
  '/final-settlement-calculator-uae': { href: '/final-settlement-calculator-uae', label: 'Final settlement calculator', blurb: 'Add gratuity, leave, notice and deductions into one total.' },
  '/gratuity-by-years-of-service': { href: '/gratuity-by-years-of-service', label: 'Gratuity by years of service table', blurb: 'See the gratuity after 1, 2, 3, 5 or 10 years.' },
  '/gcc-gratuity-comparison': { href: '/gcc-gratuity-comparison', label: 'GCC gratuity rules compared', blurb: 'How UAE, Saudi, Kuwait, Oman and Qatar gratuity differ.' },
  '/guides': { href: '/guides', label: 'Gratuity guides by nationality', blurb: 'Guides for Indian, Pakistani, Filipino, British and other expats.' },
  '/uae-labor-law': { href: '/uae-labor-law', label: 'UAE labour law explained', blurb: 'The articles that matter for end of service, notice and leave.' },
  '/mohre-annual-leave-calculator': { href: '/mohre-annual-leave-calculator', label: 'MOHRE annual leave calculator', blurb: 'Calculate unused leave pay.' },
  '/notice-period-calculator-uae': { href: '/notice-period-calculator-uae', label: 'Notice period calculator', blurb: 'Notice pay under Article 43.' },
  '/blog/uae-gratuity-two-year-cap': { href: '/blog/uae-gratuity-two-year-cap', label: 'The two-year gratuity cap', blurb: 'Who reaches the cap and how it is applied.' },
  '/blog/uae-gratuity-less-than-1-year': { href: '/blog/uae-gratuity-less-than-1-year', label: 'Gratuity for less than 1 year', blurb: 'What you are owed if you leave before one year.' },
  '/blog/uae-gratuity-part-time-workers': { href: '/blog/uae-gratuity-part-time-workers', label: 'Gratuity for part-time workers', blurb: 'How part-time service is counted.' },
  '/blog/uae-gratuity-allowances-basic-salary': { href: '/blog/uae-gratuity-allowances-basic-salary', label: 'Does gratuity include allowances?', blurb: 'Basic salary vs housing and other allowances.' },
  '/blog/uae-probation-period-gratuity-2026': { href: '/blog/uae-probation-period-gratuity-2026', label: 'Probation and gratuity', blurb: 'What happens to gratuity if you leave during probation.' },
  '/blog/uae-gratuity-resignation-vs-termination': { href: '/blog/uae-gratuity-resignation-vs-termination', label: 'Resignation vs termination', blurb: 'Whether the way you leave changes your gratuity.' },
  '/blog/i-resigned-without-job-lined-up-uae-gratuity': { href: '/blog/i-resigned-without-job-lined-up-uae-gratuity', label: 'Resigning without another job', blurb: 'A walk-through of the gratuity side of resigning.' },
  '/blog/transferred-same-free-zone-group-gratuity-reset': { href: '/blog/transferred-same-free-zone-group-gratuity-reset', label: 'Internal transfer and service reset', blurb: 'Group transfers and continuous service.' },
  '/blog/my-gratuity-was-short-what-hr-got-wrong': { href: '/blog/my-gratuity-was-short-what-hr-got-wrong', label: 'My gratuity was short: what to check', blurb: 'Common calculation mistakes in settlement sheets.' },
  '/blog/uae-final-settlement-checklist': { href: '/blog/uae-final-settlement-checklist', label: 'Final settlement checklist', blurb: 'Items to check before you sign.' },
  '/blog/how-to-read-uae-final-settlement-sheet': { href: '/blog/how-to-read-uae-final-settlement-sheet', label: 'How to read a settlement sheet', blurb: 'A line-by-line guide.' },
  '/blog/uae-repatriation-ticket-final-settlement': { href: '/blog/uae-repatriation-ticket-final-settlement', label: 'Repatriation ticket rules', blurb: 'Who pays for the ticket home.' },
  '/blog/notice-period-deductions-gratuity-uae': { href: '/blog/notice-period-deductions-gratuity-uae', label: 'Notice period deductions', blurb: 'What can and cannot be taken from your dues.' },
  '/blog/uae-gratuity-visa-cancellation': { href: '/blog/uae-gratuity-visa-cancellation', label: 'Visa cancellation and settlement', blurb: 'Settlement timing around cancellation.' },
  '/blog/uae-gratuity-payment-delay-rules': { href: '/blog/uae-gratuity-payment-delay-rules', label: 'Gratuity payment delay rules', blurb: 'The 14-day rule and what to do if it is missed.' },
  '/blog/unpaid-leave-gratuity-uae': { href: '/blog/unpaid-leave-gratuity-uae', label: 'Unpaid leave and gratuity', blurb: 'How unpaid days affect service.' },
  '/blog/uae-leave-salary-calculation-guide': { href: '/blog/uae-leave-salary-calculation-guide', label: 'Leave salary calculation', blurb: 'How leave pay is worked out.' },
  '/blog/how-to-file-mohre-complaint': { href: '/blog/how-to-file-mohre-complaint', label: 'File a MOHRE complaint', blurb: 'If your dues are unpaid.' },
  '/blog/is-uae-gratuity-taxable': { href: '/blog/is-uae-gratuity-taxable', label: 'Is UAE gratuity taxable?', blurb: 'The tax position for expats.' },
  '/blog/uae-gratuity-tax-india-nri-guide': { href: '/blog/uae-gratuity-tax-india-nri-guide', label: 'Gratuity tax for Indian NRIs', blurb: 'Home-country tax questions.' },
  '/blog/is-there-income-tax-in-dubai-uae-explained': { href: '/blog/is-there-income-tax-in-dubai-uae-explained', label: 'Is there income tax in Dubai?', blurb: 'Personal income tax in the UAE.' },
  '/blog/best-way-to-send-money-home-from-uae-2026': { href: '/blog/best-way-to-send-money-home-from-uae-2026', label: 'Sending money home from the UAE', blurb: 'Compare ways to transfer your settlement home.' },
  '/blog/how-to-save-your-first-aed-100000-in-uae': { href: '/blog/how-to-save-your-first-aed-100000-in-uae', label: 'Saving your first AED 100,000', blurb: 'A practical savings plan.' },
  '/blog/uae-cost-of-living-2026-what-expats-actually-spend': { href: '/blog/uae-cost-of-living-2026-what-expats-actually-spend', label: 'UAE cost of living', blurb: 'What expats spend each month.' },
  '/blog/rera-rent-increase-rules-dubai-explained': { href: '/blog/rera-rent-increase-rules-dubai-explained', label: 'RERA rent increase rules', blurb: 'Dubai rent cap rules explained.' },
  '/blog/uae-employment-visa-cost-breakdown-2026': { href: '/blog/uae-employment-visa-cost-breakdown-2026', label: 'Employment visa cost breakdown', blurb: 'What a UAE employment visa costs.' },
  '/blog/uae-end-of-service-savings-scheme': { href: '/blog/uae-end-of-service-savings-scheme', label: 'End-of-service savings scheme', blurb: 'The alternative scheme in Article 51(8).' },
  '/blog/difc-dews-gratuity-explained': { href: '/blog/difc-dews-gratuity-explained', label: 'DIFC DEWS explained', blurb: 'The DIFC savings scheme.' },
  '/blog/end-of-service-benefits-arabic-terms-english': { href: '/blog/end-of-service-benefits-arabic-terms-english', label: 'End-of-service terms in Arabic and English', blurb: 'Terms on a settlement sheet.' },
  '/guides/gratuity-calculator-indian-expats': { href: '/guides/gratuity-calculator-indian-expats', label: 'Gratuity guide for Indian expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-pakistan-expats': { href: '/guides/uae-gratuity-calculator-pakistan-expats', label: 'Gratuity guide for Pakistani expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-philippines-expats': { href: '/guides/uae-gratuity-calculator-philippines-expats', label: 'Gratuity guide for Filipino expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-bangladesh-expats': { href: '/guides/uae-gratuity-calculator-bangladesh-expats', label: 'Gratuity guide for Bangladeshi expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-nepal-expats': { href: '/guides/uae-gratuity-calculator-nepal-expats', label: 'Gratuity guide for Nepali expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-egypt-expats': { href: '/guides/uae-gratuity-calculator-egypt-expats', label: 'Gratuity guide for Egyptian expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-sri-lanka-expats': { href: '/guides/uae-gratuity-calculator-sri-lanka-expats', label: 'Gratuity guide for Sri Lankan expats', blurb: 'A UAE gratuity guide written for these employees.' },
  '/guides/uae-gratuity-calculator-british-expats': { href: '/guides/uae-gratuity-calculator-british-expats', label: 'Gratuity guide for British expats', blurb: 'A UAE gratuity guide written for these employees.' },
}

const CLUSTERS: string[][] = [
  // gratuity rules
  ['/blog/uae-gratuity-two-year-cap', '/blog/uae-gratuity-less-than-1-year', '/blog/uae-gratuity-part-time-workers', '/blog/uae-gratuity-allowances-basic-salary', '/blog/uae-probation-period-gratuity-2026', '/blog/uae-gratuity-resignation-vs-termination', '/blog/i-resigned-without-job-lined-up-uae-gratuity', '/blog/transferred-same-free-zone-group-gratuity-reset', '/blog/my-gratuity-was-short-what-hr-got-wrong', '/gratuity-by-years-of-service'],
  // final settlement
  ['/blog/uae-final-settlement-checklist', '/blog/how-to-read-uae-final-settlement-sheet', '/blog/uae-repatriation-ticket-final-settlement', '/blog/notice-period-deductions-gratuity-uae', '/blog/uae-gratuity-visa-cancellation', '/blog/uae-gratuity-payment-delay-rules', '/blog/unpaid-leave-gratuity-uae', '/blog/uae-leave-salary-calculation-guide', '/blog/how-to-file-mohre-complaint', '/blog/end-of-service-benefits-arabic-terms-english'],
  // money and tax
  ['/blog/is-uae-gratuity-taxable', '/blog/uae-gratuity-tax-india-nri-guide', '/blog/is-there-income-tax-in-dubai-uae-explained', '/blog/best-way-to-send-money-home-from-uae-2026', '/blog/how-to-save-your-first-aed-100000-in-uae', '/blog/uae-cost-of-living-2026-what-expats-actually-spend', '/blog/rera-rent-increase-rules-dubai-explained', '/blog/uae-employment-visa-cost-breakdown-2026'],
  // schemes and comparisons
  ['/blog/uae-end-of-service-savings-scheme', '/blog/difc-dews-gratuity-explained', '/gcc-gratuity-comparison', '/blog/uae-gratuity-two-year-cap', '/uae-labor-law'],
  // expat guides
  ['/guides/gratuity-calculator-indian-expats', '/guides/uae-gratuity-calculator-pakistan-expats', '/guides/uae-gratuity-calculator-philippines-expats', '/guides/uae-gratuity-calculator-bangladesh-expats', '/guides/uae-gratuity-calculator-nepal-expats', '/guides/uae-gratuity-calculator-egypt-expats', '/guides/uae-gratuity-calculator-sri-lanka-expats', '/guides/uae-gratuity-calculator-british-expats', '/gcc-gratuity-comparison', '/blog/uae-gratuity-tax-india-nri-guide', '/blog/best-way-to-send-money-home-from-uae-2026'],
]

const CALC_BY_CLUSTER = [
  ['/', '/gratuity-by-years-of-service'],
  ['/final-settlement-calculator-uae', '/notice-period-calculator-uae'],
  ['/', '/final-settlement-calculator-uae'],
  ['/', '/uae-labor-law'],
  ['/', '/gcc-gratuity-comparison'],
]

/** Up to `n` cluster neighbours (cyclic order) plus a calculator link. */
export function relatedFor(path: string, n = 4): RelatedLink[] {
  const out: RelatedLink[] = []
  const seen = new Set<string>([path])
  CLUSTERS.forEach((cluster, ci) => {
    const i = cluster.indexOf(path)
    if (i < 0) return
    for (let k = 1; k < cluster.length && out.length < n; k++) {
      const p = cluster[(i + k) % cluster.length]
      if (!seen.has(p) && L[p]) { out.push(L[p]); seen.add(p) }
    }
    for (const c of CALC_BY_CLUSTER[ci]) {
      if (!seen.has(c) && L[c]) { out.push(L[c]); seen.add(c) }
    }
  })
  return out.slice(0, n + 2)
}

export function guideLinks(): RelatedLink[] {
  return CLUSTERS[4].filter((p) => p.startsWith('/guides/')).map((p) => L[p])
}

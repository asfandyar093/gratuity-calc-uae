import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/gcc-gratuity-comparison-2026'
const pageImage = '/images/blog/real/gcc-gratuity-rules-comparison-meeting.png'
const pageTitle = 'GCC Gratuity Rules Compared 2026 | UAE, Saudi, Kuwait, Oman, Qatar'
const pageDescription = 'Compare GCC end-of-service gratuity rules for UAE, Saudi Arabia, Kuwait, Oman, and Qatar, including salary basis, resignation impact, service tiers, and caps.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['GCC gratuity comparison 2026', 'UAE Saudi Kuwait Oman Qatar gratuity', 'GCC end of service benefits', 'Saudi vs UAE gratuity', 'Qatar gratuity vs UAE'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'GCC professionals comparing end-of-service gratuity rules across Gulf countries' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return <BlogArticlePage slug="gcc-gratuity-comparison-2026" title="GCC End-of-Service Gratuity Compared — 5 Countries, 2026 Rules" description="How UAE gratuity compares to Saudi, Kuwait, Oman, and Qatar: salary basis, resignation impact, and headline formula differences." badge="GCC COMPARISON" intro="GCC countries all recognise end-of-service benefits, but the wage basis, service tiers, resignation reductions, and caps differ sharply." image={{
    src: '/images/blog/real/gcc-gratuity-rules-comparison-meeting.png',
    alt: 'GCC expatriate employees comparing UAE Saudi Kuwait Oman and Qatar gratuity rules',
    title: 'GCC Gratuity Rules Compared 2026',
    caption: 'GCC end-of-service benefits look similar at a distance, but salary basis, service tiers, caps, and resignation rules vary by country.',
  }} sections={[
    { heading: 'Why GCC gratuity rules are easy to mix up', body: ['Many expatriates move between UAE, Saudi Arabia, Kuwait, Oman, and Qatar during their careers. Because each country uses the language of end-of-service benefits, it is tempting to assume the formula is roughly the same everywhere. It is not.', 'The differences usually sit in four places: which wage is used, how many days or months accrue for each year of service, whether resignation reduces the payout, and whether a maximum cap applies. A job offer that looks stronger on monthly salary may be weaker on end-of-service benefits, or the other way around.', 'This article gives a practical comparison, but it should not replace country-specific advice. The contract, employer type, free-zone rules, and current labour law in the relevant country decide the actual payment.'] },
    { heading: 'UAE versus Saudi Arabia', body: ['The UAE standard private-sector formula uses 21 days of basic salary for each of the first five years and 30 days for each additional year, with an overall cap of two years of basic salary. Under the current UAE framework, resignation by itself does not normally reduce gratuity in the old unlimited-contract way.', 'Saudi Arabia generally uses half-month and full-month tiers for end-of-service awards. Resignation rules can affect the payout depending on service length and circumstances, so an employee resigning after a short period may not receive the same result as an employee whose contract ends differently.', 'The wage basis is also important. UAE employees often focus on basic salary because allowances are usually excluded from gratuity. In Saudi Arabia, the wage concept and contract wording need their own review. Never compare only the headline percentage without checking the salary base.'] },
    { heading: 'Kuwait, Oman, and Qatar in practical terms', body: ['Kuwait can be generous for monthly-paid employees, but its system has its own wage definitions, service thresholds, and resignation treatment. The result can differ sharply from the UAE, especially for employees with long service or a high allowance-heavy package.', 'Oman uses a tiered approach linked to basic wage and service length. For employees comparing a UAE offer with an Oman offer, the basic wage split matters because a lower basic salary can reduce end-of-service value even if the total package sounds attractive.', 'Qatar commonly uses a minimum three-week-per-year approach after one year of service, subject to the employment contract and applicable rules. Some contracts may provide a better benefit, so the written offer should be read carefully before assuming the statutory minimum is the whole story.'] },
    { heading: 'How to compare two GCC job offers', body: ['Start by separating basic salary from allowances in each offer. Then estimate end-of-service value at likely exit points: one year, three years, five years, and ten years. This shows whether the benefit becomes meaningful only after long service or whether it is valuable earlier.', 'Next, check resignation treatment. A formula that looks generous can be less attractive if resignation sharply reduces the award before a certain service period. Also check caps, probation rules, savings schemes, and whether the employer sits inside a special financial free zone or government-related regime.', 'Finally, compare cash timing. Some systems pay only at the end of service, while savings-style schemes may involve periodic contributions. For employees supporting families or planning relocation, timing can matter as much as the final number.'] },
    { heading: 'Why the full comparison matters', body: ['Cross-country comparisons are useful for job offers, relocation planning, and salary negotiation, but they are only a starting point. Local law and the signed contract decide the actual payment, and the rules can change faster than employees expect.', 'If you are moving from one GCC country to another, download your current contract, payslips, settlement sheet, and visa or work permit records before leaving. These documents help you close one employment relationship cleanly and understand the next one.', 'For a deeper country-by-country table, use the GCC comparison page linked from this site. Use this article as the plain-English map, then check the detailed calculator or local guidance for the country that applies to your employment.'] },
  ]} faq={[
    ['Is UAE gratuity better than Saudi?', 'It depends on service length, wage basis, and resignation facts.'],
    ['Do all GCC countries use basic salary?', 'No. Wage basis differs by country.'],
    ['Where is the full table?', 'See /gcc-gratuity-comparison for the detailed comparison.'],
  ]} />
}

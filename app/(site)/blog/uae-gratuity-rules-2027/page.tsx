import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-gratuity-rules-2027'
const pageTitle = 'UAE Gratuity Rules 2027: What Changed and What to Watch'
const pageDescription = 'The Article 51 gratuity formula is unchanged going into 2027. Confirmed rules, the voluntary savings scheme, ILOE, and what to watch.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'uae gratuity rules 2027',
    'uae gratuity calculator 2027',
    'uae labour law 2027',
    'end of service uae 2027',
    'uae gratuity law 2027',
  ],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    heading: 'The short answer',
    body: [
      'As of 10 November 2026, no replacement UAE labour law has been announced for 2027, and no official source has published a new end of service formula. The starting point for a 2027 exit is still Article 51 of Federal Decree Law No. 33 of 2021. The official UAE Government page on end of service benefits, last updated on 15 October 2026, still describes that formula.',
      'That matters because search results and social posts often treat a new calendar year as if the law had changed. A year in a headline is not a legal amendment. Unless the Ministry of Human Resources and Emiratisation (MOHRE) or the Official Gazette publishes a change, plan with the current rules and keep an eye on the official channels listed at the end of this page.',
      'This page is a checklist of what is confirmed, what is still voluntary, and what is worth watching. It is not a prediction of future law. For scenarios and confidence levels, see [UAE gratuity predictions for 2027](/blog/uae-gratuity-predictions-2027). For a practical plan, see [final settlement planning for 2027](/blog/uae-final-settlement-planning-2027).',
    ],
  },
  {
    heading: 'The gratuity rules that still apply',
    body: [
      'For a foreign full time worker in the private sector, Article 51 still works as follows. You need at least one year of continuous service. The first five years earn the wage of 21 days for each year. Each later year earns the wage of 30 days. Parts of a year are paid in proportion once the first year is complete. Days of unpaid absence are left out of the service period. The figure is based on the last basic wage, not on allowances. The total must not exceed two years of wage. The employer must pay wages and other entitlements within 14 days of the contract ending, under Article 53.',
      {
        table: {
          head: ['Topic', 'Current rule', 'Status for 2027 planning'],
          rows: [
            ['Eligibility', 'One year of continuous service for a foreign full time worker', 'Unchanged on the official record'],
            ['First five years', '21 days of basic wage for each year', 'Unchanged on the official record'],
            ['After five years', '30 days of basic wage for each later year', 'Unchanged on the official record'],
            ['Cap', 'Total must not exceed two years of wage', 'Unchanged on the official record'],
            ['Wage used', 'Last basic wage, excluding allowances', 'Unchanged on the official record'],
            ['Payment deadline', '14 days after the contract ends', 'Unchanged on the official record'],
            ['Resignation', 'The current law does not reduce gratuity because you resigned', 'Unchanged on the official record'],
            ['Claim time limit', 'A claim is not heard after two years from the end of employment (Article 54(9), as amended in 2024)', 'Unchanged on the official record'],
          ],
        },
      },
      'The [UAE gratuity calculator](/) and the [how to calculate gratuity](/how-to-calculate-gratuity-uae) guide use this formula. The [labour law reference](/uae-labor-law) lists the articles in one place.',
    ],
  },
  {
    heading: 'A worked example for a 2027 exit',
    body: [
      'Suppose your last monthly basic salary is AED 12,000, you complete six years of continuous service, you have no unpaid absence, and your last working day falls in 2027. The daily wage is 12,000 divided by 30, which is AED 400. The first five years earn 21 days times five, or 105 days. The sixth year earns 30 days. The total is 135 days times AED 400, which is AED 54,000. The cap, read conservatively as 24 months of basic salary, would be AED 288,000, so it does not reduce this result.',
      {
        example: {
          title: 'Six years, AED 12,000 basic, leaving in 2027',
          lines: [
            'Daily wage: 12,000 ÷ 30 = AED 400',
            'Years 1 to 5: 400 × 21 × 5 = AED 42,000',
            'Year 6: 400 × 30 = AED 12,000',
            'Cap check: 24 × 12,000 = AED 288,000 (not reached)',
          ],
          total: 'Gratuity: AED 54,000',
        },
      },
      'Change the dates or the basic salary and the number changes. The method does not change just because the calendar year is 2027. If your employer has enrolled you in the voluntary savings scheme, the example above may apply only to service before the enrolment date. After that date, the scheme contributions replace future traditional accrual for the enrolled employees.',
    ],
  },
  {
    heading: 'The savings scheme is still voluntary',
    body: [
      'Cabinet Resolution No. 96 of 2023 created an alternative end of service benefits system, often called the Savings Scheme. On the official u.ae page updated on 15 October 2026, and on MOHRE’s guidance page, it is still described as a voluntary alternative. An employer that wants to join applies to MOHRE and contracts with an investment fund approved by the Securities and Commodities Authority. The employer may enrol all staff, a group, or selected categories. After enrolment, the traditional lump sum rule stops for those employees, and gratuity already accrued up to the enrolment date must still be calculated and settled in line with the law.',
      'For a full time employee, the employer contribution is 5.83 percent of monthly basic salary if the employee has not completed five years of service, and 8.33 percent after five years. Contributions are to be transferred into the fund within 15 days of the beginning of each calendar month. Employees may add a voluntary amount, subject to a cap of 25 percent of total wage. On termination, the employee is entitled to the basic subscription amounts and any returns, within 14 days, and may also leave the money invested.',
      'MOHRE ran a public consultation on the voluntary scheme. The consultation is listed as ended on 28 February 2026. Completing a consultation is not the same as issuing a new Cabinet resolution or making the scheme mandatory. As of 10 November 2026, no official mandate date or enrolment threshold for 2027 has been published on the official pages reviewed for this article. Our [savings scheme guide](/blog/uae-end-of-service-savings-scheme) explains how the optional model compares with traditional gratuity.',
    ],
  },
  {
    heading: 'Unemployment insurance is still a separate entitlement',
    body: [
      'Involuntary Loss of Employment insurance (ILOE) is not a substitute for gratuity. It is a separate scheme under Federal Decree Law No. 13 of 2022. The official u.ae page, updated on 8 December 2025, still sets the premium at no more than AED 5 a month if basic salary is less than AED 16,000, and no more than AED 10 a month if basic salary is more than AED 16,000. Compensation is 60 percent of the subscription salary for up to three months, capped at AED 10,000 or AED 20,000 a month depending on the category.',
      'The official ILOE site also lists those categories and says a policy period is available for one year or two years, with VAT added. Compensation generally requires 12 continuous months of subscription, payment of premiums, and a job loss that is not a resignation or a disciplinary dismissal. A claim must be filed within 30 days of the end of the employment relationship, and the insured person must be in the country. Use the [ILOE calculator](/iloe-calculator-uae) to see the category and a planning estimate. If your job may end in 2027, check that your policy is actually in force before you need it.',
    ],
  },
  {
    heading: 'Free zones, domestic workers and other exceptions',
    body: [
      'Article 51 is the mainland and most free zone starting point, but it is not universal. DIFC employees use the DEWS workplace savings plan rather than the federal lump sum. ADGM has its own employment regulations. Domestic workers are covered by Federal Decree Law No. 9 of 2022, which does not copy the Article 51 formula into the domestic worker law itself. UAE nationals are generally covered by pensions and social security rules instead.',
      'No official 2027 rewrite of those separate regimes was found on the pages reviewed for this article. If you work in a financial free zone, use the [DIFC DEWS guide](/blog/difc-dews-gratuity-explained), the [DIFC calculator](/calculate-difc-gratuity), or the [ADGM calculator](/calculate-adgm-gratuity). Domestic workers should start with the [domestic worker gratuity page](/gratuity-calculator/domestic-workers) and confirm the current official method with MOHRE, rather than assuming the private sector formula applies.',
    ],
  },
  {
    heading: 'Labour market rules that are easy to mix up with gratuity',
    body: [
      'Some 2026 and 2027 dates in official labour market policy are real, and they still do not rewrite Article 51. Emiratisation targets for private companies with 50 or more workers were set on a path that reaches a 10 percent increase by 2026. The official u.ae page, updated on 15 October 2026, describes that path and the contributions for missed targets up to 2026. It does not publish a 2027 private sector Emiratisation rate in the section reviewed. One programme that does name 2027 is the Teaching Specialists Programme, which aims to reach 4,000 Emiratis in private education by 2027. That is a hiring programme, not a new gratuity formula.',
      'Cabinet Resolution No. 210 of 2025 established an Insurance Benefits Governance Fund for workers in the labour market. It was issued on 22 December 2025 and took effect on 1 January 2026. The existence of that fund is confirmed on the UAE Legislation portal. This article does not treat it as a change to the Article 51 calculation, because no such change was found in the official end of service summary updated in October 2026. If a later resolution ties the fund to worker payouts, that would need to appear in an official text before anyone should plan around it.',
    ],
  },
  {
    heading: 'What to watch in 2027, and how to check a rumour',
    body: [
      'The useful watchlist is short. Look for a Cabinet resolution or ministerial decision that amends end of service benefits, a change to Cabinet Resolution No. 96 of 2023, a MOHRE announcement that the savings scheme is no longer voluntary, a change to ILOE premiums or eligibility, or a free zone circular if you work in DIFC, ADGM or another zone with its own rules.',
      {
        steps: [
          'Read the official u.ae end of service page and the MOHRE savings scheme page, not only a news headline.',
          'If a post cites an article number, open the legislation text on the UAE Legislation portal and read that article.',
          'Check the issue date and the effective date. A 2025 or 2026 instrument can already be in force without being a 2027 rewrite.',
          'Ask HR for the scheme documents if your employer says you have been moved to a savings fund, including the enrolment date and the accrued gratuity up to that date.',
          'Keep using the current formula for planning until an official text says otherwise.',
        ],
      },
      'If a number on a settlement sheet looks wrong under the current rules, use the [final settlement checklist](/blog/uae-final-settlement-checklist) and, if needed, the [MOHRE complaint guide](/blog/how-to-file-mohre-complaint).',
    ],
  },
]

const faq: [string, string][] = [
  [
    'Have UAE gratuity rules changed for 2027?',
    'No replacement labour law and no new official end of service formula had been announced as of 10 November 2026. The official UAE Government page updated on 15 October 2026 still describes the Article 51 formula in Federal Decree Law No. 33 of 2021.',
  ],
  [
    'What is the UAE gratuity formula going into 2027?',
    'For a foreign full time private sector worker with at least one year of service: 21 days of basic wage for each of the first five years and 30 days for each later year, on the last basic wage, capped at two years of wage, paid within 14 days of the contract ending.',
  ],
  [
    'Is the alternative savings scheme mandatory in 2027?',
    'Not on the official record reviewed for this page. Official pages updated in October 2026 still call it a voluntary alternative. A MOHRE consultation ended on 28 February 2026, but that is not the same as a published mandate.',
  ],
  [
    'Does ILOE replace gratuity in 2027?',
    'No. ILOE is unemployment insurance. Gratuity is an end of service labour entitlement. You may have both, depending on how the job ends and whether you meet the ILOE conditions.',
  ],
  [
    'Should I calculate a 2027 exit with a 2027 formula?',
    'Use the current Article 51 formula unless an official source publishes a change. A calendar year in a search query is not a new law.',
  ],
  [
    'Where should I check for a real change?',
    'Start with u.ae, MOHRE, the Official Gazette or the UAE Legislation portal, and any free zone authority that governs your contract. Then compare the effective date with your last working day.',
  ],
]

const internalLinks = [
  { href: '/blog/uae-gratuity-predictions-2027', label: 'UAE gratuity predictions for 2027', description: 'Scenarios and confidence levels, kept separate from confirmed rules.' },
  { href: '/blog/uae-final-settlement-planning-2027', label: 'Final settlement planning for 2027', description: 'A practical guide for employees and employers.' },
  { href: '/how-to-calculate-gratuity-uae', label: 'How to calculate gratuity in the UAE', description: 'The formula and worked examples.' },
  { href: '/uae-labor-law', label: 'UAE labour law gratuity rules', description: 'Articles 51, 53 and 54 in one place.' },
  { href: '/blog/uae-end-of-service-savings-scheme', label: 'Alternative end of service savings scheme', description: 'How the voluntary scheme compares with a lump sum.' },
  { href: '/iloe-calculator-uae', label: 'ILOE calculator', description: 'Unemployment insurance category, cost and payout.' },
]

const externalLinks = [
  { href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', label: 'u.ae: end of service benefits in the private sector', description: 'Official summary of the Article 51 formula and the voluntary savings scheme, updated 15 October 2026.' },
  { href: 'https://uaelegislation.gov.ae/en/legislations/1541', label: 'Federal Decree Law No. 33 of 2021, UAE Legislation portal', description: 'Official labour law text, including Articles 51, 53 and 54.' },
  { href: 'https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/alternative-end-of-service-benefits-system', label: 'MOHRE: Alternative End of Service Benefits System', description: 'Official guidance describing the savings scheme as voluntary.' },
  { href: 'https://u.ae/en/information-and-services/jobs/Workplace-regulations/insurance/unemployment-insurance-scheme', label: 'u.ae: insurance against job loss', description: 'Official ILOE premiums, benefits and claim conditions, updated 8 December 2025.' },
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-gratuity-rules-2027"
      title={pageTitle}
      description={pageDescription}
      badge="2027 RULES"
      intro="As of 10 November 2026, no replacement labour law has been announced for 2027. The Article 51 formula in Federal Decree Law No. 33 of 2021 is still the official starting point for an end of service calculation."
      sections={sections}
      faq={faq}
      note="This page is general information from official sources reviewed on 10 November 2026. Rules can change after that date. Confirm anything that would affect a payment or a resignation with MOHRE, the Official Gazette, or a UAE qualified employment lawyer. It is not legal advice."
      image={{
        src: '/images/blog/photo/uae-gratuity-rules-2027.webp',
        alt: 'Hands sorting a stack of blank papers on a wooden desk beside a notebook, pen and coffee cup',
        title: pageTitle,
        caption: 'A 2027 plan should start with the current official rules, then be updated if MOHRE or the Official Gazette publishes a change.',
      }}
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-11-10"
      dateModified="2026-11-10"
    />
  )
}

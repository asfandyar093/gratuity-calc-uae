import type { Metadata } from 'next'
import BlogArticlePage, { type Block } from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'
import { pairAlternates } from '@/lib/i18nRoutes'
import { gratuityAmount, formatAed } from '@/lib/gratuity'

const path = '/how-to-calculate-gratuity-uae'
const pageTitle = 'How to Calculate Gratuity in UAE 2026: Formula & Examples'
const pageDescription = 'The UAE gratuity formula step by step: daily wage, the 21 and 30 day rule, part years, unpaid leave and the two year cap, with worked examples.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['how to calculate gratuity in uae', 'uae gratuity formula', 'gratuity calculation uae labour law', 'end of service calculation uae'],
  alternates: pairAlternates('/how-to-calculate-gratuity-uae', 'en'),
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, url: `https://www.uaegratuitycheck.com${path}`, type: 'article' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const aed = (n: number, d = 0) => formatAed(n, d)
const dw = (basic: number) => aed(basic / 30, 2)

// Every figure below comes from the same engine as the calculator (lib/gratuity.ts).
const g1 = gratuityAmount(6000, 1.5)
const g5 = gratuityAmount(10000, 5)
const g8days = 40
const years8 = 8 - g8days / 365
const g8 = gratuityAmount(10000, years8)
const g26 = gratuityAmount(10000, 26)

const sections: { heading: string; body: Block[] }[] = [
  {
    heading: 'The UAE gratuity formula',
    body: [
      'Gratuity is calculated on basic salary only. Divide it by 30 to get a daily wage, then multiply by 21 for each of your first five years and by 30 for each year after that. A foreign worker needs one full year of continuous service first.',
      { example: { title: 'Formula', lines: ['Daily wage = monthly basic salary ÷ 30', 'Years 1 to 5: daily wage × 21 × years of service (up to 5)', 'After year 5: daily wage × 30 × years beyond 5', 'Total = both parts added, then checked against the cap'] } },
      'The rule sits in Article 51 of Federal Decree Law No. 33 of 2021 on the regulation of labour relations (see the [UAE labour law gratuity rules](/uae-labor-law)). It applies in every emirate, so there is no separate formula for Dubai, Abu Dhabi or Sharjah. The law says a month counts as 30 days and a year as 365 days (Article 67), which is why the daily wage is basic salary divided by 30. You can skip the arithmetic with the [UAE gratuity calculator](/) and come back here to check how it works.',
    ],
  },
  {
    heading: 'How do I calculate gratuity in five steps?',
    body: [
      'Take your basic salary, turn it into a daily wage, count your service, apply 21 and 30 days, then check the cap. Each step below uses figures you can find on your contract and payslip.',
      {
        steps: [
          'Find your last monthly basic salary. Allowances, overtime, commission and bonuses are not part of it. Article 51(5) uses the last basic wage you were entitled to, so earlier salaries do not matter.',
          'Divide it by 30 to get the daily wage. For AED 9,000 basic the daily wage is AED 300.',
          'Count your service from your first working day to your last, in years and parts of years. Unpaid absence days are removed (Article 51(4)). Part years count in proportion once the first year is complete (Article 51(3)).',
          'Multiply the daily wage by 21 for each year up to five, and by 30 for each year after that. Add the two parts.',
          'Check the cap. Article 51(6) says the total must not exceed two years of wage. This site applies it as 24 months of basic salary. See [the two year cap](/blog/uae-gratuity-two-year-cap).',
        ],
      },
      'If your service is under one year, there is no gratuity under Article 51(2). Your salary, leave pay and other dues are still owed. See [gratuity for less than one year](/blog/uae-gratuity-less-than-1-year) for what applies.',
    ],
  },
  {
    heading: 'Worked examples',
    body: [
      'These examples come from the same engine as the calculator. They are illustrations of the formula, not real cases.',
      { example: { title: 'Example 1: 11 months of service, basic AED 8,000', lines: ['Service is under 1 year', 'Article 51(2) needs a year of continuous service'], total: 'Gratuity: AED 0' } },
      { example: { title: 'Example 2: 1 year 6 months, basic AED 6,000', lines: [`Daily wage: ${dw(6000)}`, `Days earned: 21 × 1.5 = ${g1.days}`, `${dw(6000)} × ${g1.days}`], total: `Gratuity: ${aed(g1.amount)}` } },
      { example: { title: 'Example 3: 5 years, basic AED 10,000', lines: [`Daily wage: ${dw(10000)}`, `Days earned: 21 × 5 = ${g5.days}`, `${dw(10000)} × ${g5.days}`], total: `Gratuity: ${aed(g5.amount)}` } },
      { example: { title: `Example 4: 8 years with ${g8days} unpaid leave days, basic AED 10,000`, lines: [`Counted service: 8 years minus ${g8days} days = ${years8.toFixed(2)} years`, `Days earned: 105 + 30 × ${(years8 - 5).toFixed(2)} = ${g8.days.toFixed(1)}`, `${dw(10000)} × ${g8.days.toFixed(1)}`], total: `Gratuity: ${aed(g8.amount)}` } },
      { example: { title: 'Example 5: 26 years, basic AED 10,000 (cap applies)', lines: [`Days earned: 105 + 30 × 21 = ${g26.days}`, `Formula result: ${aed(g26.raw)}`, `Cap: 24 × 10,000 = ${aed(g26.cap)}`], total: `Gratuity paid: ${aed(g26.amount)}` } },
      'For a ready table of every year from 1 to 30, see [gratuity by years of service](/gratuity-by-years-of-service). For a case with leave and notice pay on top, use the [final settlement calculator](/final-settlement-calculator-uae).',
    ],
  },
  {
    heading: 'What counts as basic salary?',
    body: [
      'The Decree Law defines basic wage as the wage stated in the employment contract for the work, not including any other allowances or benefits in kind. The separate defined term "wage" adds cash allowances and benefits on top. Gratuity under Article 51(2) is calculated on the basic wage.',
      'In practice that means housing, transport, food and phone allowances are out, along with bonuses and overtime. If your contract does not split basic from allowances, ask HR in writing which figure they treat as basic, because the whole result depends on it. The guide on [allowances and basic salary](/blog/uae-gratuity-allowances-basic-salary) covers the grey cases.',
    ],
  },
  {
    heading: 'Common HR mistakes in a gratuity calculation',
    body: [
      'Most disputes come down to one wrong input rather than a different law. Check these before you challenge a figure.',
      {
        list: [
          'Using total salary instead of basic salary.',
          'Applying 30 days to every year instead of only the years after year five.',
          'Counting from the date of the labour card rather than your first working day.',
          'Ignoring part years, or rounding service down to whole years.',
          'Subtracting unpaid leave twice, or subtracting paid leave.',
          'Using an old basic salary rather than the last one.',
          'Deducting notice pay without a basis. Article 51(7) allows deductions of amounts payable under the law or a judgment, in line with the Implementing Regulation.',
        ],
      },
      'Our guide to [a gratuity that looks short](/blog/my-gratuity-was-short-what-hr-got-wrong) shows what each error costs, and the [notice period deductions guide](/blog/notice-period-deductions-gratuity-uae) explains what can be taken from your dues.',
    ],
  },
  {
    heading: 'Does resignation change the calculation?',
    body: [
      'No. Article 51 gives gratuity to a full time foreign worker with one year of continuous service, and the article does not tie it to the way the contract ended. Some older advice online describes a reduced gratuity for resignation under the previous labour law. It does not describe Decree Law 33 of 2021, which replaced that law in 2022.',
      'Article 68 required old unlimited contracts to be converted to fixed term ones. Service from before 2022 can raise transition questions, so ask HR which rule they apply to those years. The [resignation versus termination guide](/blog/uae-gratuity-resignation-vs-termination) and the [limited versus unlimited contract guide](/blog/limited-vs-unlimited-contract-uae-gratuity) go through it.',
    ],
  },
  {
    heading: 'Who does this formula not cover?',
    body: [
      { list: [
        'UAE nationals: Article 51(1) sends them to pension and social security legislation.',
        'Domestic workers: covered by Federal Decree Law No. 9 of 2022. See the [domestic worker gratuity calculator](/gratuity-calculator/domestic-workers).',
        'DIFC employees: they use the DEWS savings scheme. See the [DIFC gratuity calculator](/calculate-difc-gratuity).',
        'ADGM employees: ADGM has its own employment regulations. See the [ADGM gratuity calculator](/calculate-adgm-gratuity).',
        'Part time and other work patterns: Article 52 leaves the method to the Implementing Regulation.',
        'Employers in an approved alternative scheme under Article 51(8).',
      ] },
      'Other free zones, such as [DMCC](/calculate-dmcc-gratuity) and [JAFZA](/calculate-jafza-gratuity), have their own pages. The [free zone and industry calculators hub](/gratuity-calculator) compares them.',
    ],
  },
  {
    heading: 'When is gratuity paid?',
    body: [
      'Article 53 requires the employer to pay wages and all other entitlements within 14 days of the end date of the contract. If that deadline passes, ask in writing, then submit a request to MOHRE under Article 54. The guide on [how to file a MOHRE complaint](/blog/how-to-file-mohre-complaint) walks through it, and the [payment delay rules guide](/blog/uae-gratuity-payment-delay-rules) covers the 14 day deadline. Under Article 54(9), as amended in 2024, a claim is not heard after two years from the end of the employment relationship.',
    ],
  },
]

const faq: [string, string][] = [
  ['What is the UAE gratuity formula?', 'Daily wage is basic salary divided by 30. Gratuity is the daily wage times 21 for each of the first five years, plus the daily wage times 30 for each year after that. It is capped at two years of wage, under Article 51 of Federal Decree Law No. 33 of 2021.'],
  ['Do I use basic salary or total salary?', 'Basic salary. Article 51 uses the basic wage, which the Decree Law defines as the contract wage excluding allowances and benefits in kind.'],
  ['How much gratuity do I get after 5 years?', 'Five years earns 105 days of basic wage, which is 3.5 months of basic salary. With a basic salary of AED 10,000 that is AED 35,000.'],
  ['Does resignation reduce gratuity?', 'No. Article 51 does not reduce gratuity because the worker resigned. A full time foreign worker needs one year of continuous service.'],
  ['Is there a maximum gratuity?', 'Yes. Article 51(6) says the total must not exceed two years of wage. This site applies it as 24 months of basic salary, which is reached after about 25.5 years of service.'],
  ['How long does the employer have to pay?', 'Within 14 days of the end date of the contract, under Article 53.'],
]

const internalLinks = [
  { href: '/', label: 'UAE gratuity calculator', description: 'Enter your basic salary and dates for a result in seconds.' },
  { href: '/gratuity-by-years-of-service', label: 'Gratuity by years of service table', description: 'Every year from 1 to 30 at common salaries.' },
  { href: '/final-settlement-calculator-uae', label: 'Final settlement calculator', description: 'Add leave, notice and deductions to gratuity.' },
  { href: '/uae-labor-law', label: 'UAE labour law gratuity rules', description: 'The articles behind the formula.' },
  { href: '/blog/uae-gratuity-allowances-basic-salary', label: 'Allowances and basic salary', description: 'What counts as basic wage.' },
  { href: '/blog/my-gratuity-was-short-what-hr-got-wrong', label: 'Gratuity looks short? Three common errors', description: 'What each mistake costs.' },
  { href: '/blog/uae-gratuity-resignation-vs-termination', label: 'Resignation vs termination', description: 'Does the way you leave change gratuity.' },
  { href: '/blog/uae-gratuity-two-year-cap', label: 'The two year cap', description: 'When the cap starts to matter.' },
  { href: '/gratuity-calculator/domestic-workers', label: 'Domestic worker gratuity calculator', description: 'The separate rules for domestic workers.' },
  { href: '/calculate-difc-gratuity', label: 'DIFC gratuity calculator', description: 'DEWS contributions for DIFC staff.' },
  { href: '/calculate-adgm-gratuity', label: 'ADGM gratuity calculator', description: 'ADGM employment regulations.' },
  { href: '/ar/how-to-calculate-gratuity-uae', label: 'النسخة العربية', description: 'كيفية حساب نهاية الخدمة في القطاع الخاص.' },
]

const externalLinks = [
  { href: 'https://uaelegislation.gov.ae/en/legislations/1541', label: 'Federal Decree Law No. 33 of 2021, UAE Legislation portal', description: 'Official text of Articles 43, 51, 53, 54, 67 and 68.' },
  { href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', label: 'u.ae: end of service benefits in the private sector', description: 'Government summary of private sector end of service benefits.' },
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="how-to-calculate-gratuity-uae"
      path={path}
      crumbs={[]}
      title="How to Calculate Gratuity in the UAE (2026)"
      description={pageDescription}
      badge="GRATUITY FORMULA"
      intro="Gratuity is 21 days of basic wage for each of your first five years and 30 days for each year after, once you have one full year of continuous service. The steps and examples below turn that into a number."
      sections={sections}
      faq={faq}
      note="This page is general information based on official sources. It is not legal advice and does not replace your contract or a MOHRE decision. For a dispute, contact MOHRE or a UAE qualified employment lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

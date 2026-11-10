import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-final-settlement-planning-2027'
const pageTitle = 'UAE Final Settlement Planning for 2027: A Practical Guide'
const pageDescription = 'A practical 2027 planning guide for employees and employers: the current formula, documents, payment deadlines, ILOE, and tax.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'uae final settlement 2027',
    'end of service planning uae 2027',
    'uae gratuity calculator 2027',
    'uae settlement checklist 2027',
  ],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    heading: 'Start with the current law, then keep a record',
    body: [
      'If your job may end in 2027, the practical starting point is still the current official rule, not a rumour about a new year. As of 10 November 2026, the Article 51 formula in Federal Decree Law No. 33 of 2021 remains the official method for most private sector end of service calculations. The [2027 rules checklist](/blog/uae-gratuity-rules-2027) explains what is confirmed. This page turns that into a plan for employees and employers.',
      'A good plan has three parts. First, an estimate under today’s formula, using your current basic salary and service dates. Second, a file of documents so you are not reconstructing history in a hurry. Third, a short list of things that can change the number: a salary change, unpaid leave, a move onto the voluntary savings scheme, or an official legal amendment. Recalculate when one of those happens.',
    ],
  },
  {
    heading: 'What an employee should estimate now',
    body: [
      'Use your last monthly basic salary, your first working day, and a realistic last working day in 2027. Leave allowances out of the basic figure. Add any unpaid absence days, because those come out of the service period. The [UAE gratuity calculator](/) will give you the Article 51 result. The [final settlement calculator](/final-settlement-calculator-uae) can add unused leave and notice pay, which often matter as much as gratuity when you are budgeting a move.',
      'If your employer has already enrolled you in the voluntary savings scheme, ask for two figures, not one. Ask for the traditional gratuity accrued up to the enrolment date, and ask how to view the fund balance and the employer contributions made after that date. If you work in DIFC, use the [DEWS guide](/blog/difc-dews-gratuity-explained) and the [DIFC calculator](/calculate-difc-gratuity) instead of the federal lump sum. ADGM staff should use the [ADGM calculator](/calculate-adgm-gratuity).',
      'Do not plan a 2027 resignation on the old idea that quitting cuts gratuity. Under the current law, resignation does not reduce the Article 51 figure once you have one year of service. Notice still matters, and so does the way the visa is cancelled. See [resignation versus termination](/blog/uae-gratuity-resignation-vs-termination) and the [visa grace period guide](/blog/uae-visa-grace-period-after-job-loss).',
    ],
  },
  {
    heading: 'Documents worth keeping in one place',
    body: [
      'Most settlement disputes are about inputs, not about a secret formula. If you already have the papers, a later conversation with HR or MOHRE is much shorter.',
      {
        list: [
          'Your signed employment contract and any addenda that change basic salary, allowances or the work pattern.',
          'Payslips that show the basic salary separately from allowances, especially the most recent ones.',
          'A record of your first working day and any unpaid leave or unpaid absence.',
          'If relevant, the savings scheme enrolment notice, the fund name, and any balance statements.',
          'ILOE subscription or renewal confirmations, including the policy end date.',
          'Passport, Emirates ID and, when the time comes, the visa cancellation confirmation and the cancellation date.',
        ],
      },
      'When a settlement sheet arrives, compare it with the [line by line reading guide](/blog/how-to-read-uae-final-settlement-sheet) and the [final settlement checklist](/blog/uae-final-settlement-checklist) before you sign a full and final receipt. If a figure looks short, the [common calculation errors guide](/blog/my-gratuity-was-short-what-hr-got-wrong) is a practical next step.',
    ],
  },
  {
    heading: 'Payment timing, unemployment insurance and the visa clock',
    body: [
      'Article 53 gives the employer 14 days from the end of the contract to pay wages and other entitlements, including gratuity. That deadline is part of the current law, and no official 2027 replacement for it was found in the sources reviewed for the 2027 rules article. If payment is late, ask in writing first, then look at the [payment delay rules](/blog/uae-gratuity-payment-delay-rules) and [how to file a MOHRE complaint](/blog/how-to-file-mohre-complaint). Under Article 54(9), as amended in 2024, a claim is not heard after two years from the end of the employment relationship, so do not sit on an unpaid file.',
      'ILOE is only a possible extra if the job ends in a way the scheme recognises, usually a termination rather than a resignation, and only if you have been subscribed for 12 continuous months and are in the country. The claim window is 30 days from the end of employment. Check the policy before you need it, and use the [ILOE calculator](/iloe-calculator-uae) as a planning estimate. Gratuity and ILOE are not the same payment.',
      'Visa cancellation starts a grace period that depends on your residence category. That period is time to find a new job or leave, not a source of income. Confirm the cancellation date with HR and check the official record. The [visa grace period guide](/blog/uae-visa-grace-period-after-job-loss) sets out the 30, 60, 90 and 180 day categories.',
    ],
  },
  {
    heading: 'Tax and moving the money',
    body: [
      'In the UAE, the Federal Tax Authority has said it is not currently considering personal income taxes. That FAQ was last updated on 22 May 2024, and no later official reversal was found in the sources reviewed on 10 November 2026. That is a planning assumption, not a promise about 2027 tax law. Your home country may still tax a lump sum, depending on residence status and local rules. The [tax overview](/blog/is-uae-gratuity-taxable) and the [Indian NRI guide](/blog/uae-gratuity-tax-india-nri-guide) explain the questions to take to a tax professional, which this page cannot answer for you.',
      'If you will leave the UAE, plan the transfer before the account is hard to use from abroad. Keep copies of the settlement credit and the transfer receipt. The [guide to sending money home](/blog/best-way-to-send-money-home-from-uae-2026) is a starting point for that practical step, not a recommendation of any one provider.',
    ],
  },
  {
    heading: 'What employers should prepare',
    body: [
      'For HR and finance teams, 2027 planning is mostly about accurate inputs and a payment process that can meet the 14 day deadline. The liability should be calculated on basic wage, with unpaid absence removed from service, and with the two year cap applied where it is relevant. If the company is considering the voluntary savings scheme, the work is to model monthly contributions, choose an approved fund, preserve pre enrolment gratuity, and tell enrolled staff what will change and what will not.',
      {
        steps: [
          'Refresh the basic salary and service data used for end of service estimates, and keep it separate from allowances.',
          'Map who is on the traditional lump sum, who is in the federal savings scheme, and who is in a free zone scheme such as DEWS.',
          'Set a checklist so a resignation or termination file includes the contract, the last payslip, leave balances, and any scheme statements.',
          'Time visa cancellation, labour contract cancellation and the settlement payment so the 14 day clock and the employee’s documents are not at odds.',
          'If a rumour of a 2027 legal change reaches staff, check the official source before changing a policy or a template.',
        ],
      },
      'A published 2026 Emiratisation target or a 2027 hiring programme does not, by itself, change how end of service is calculated. Treat those as separate compliance workstreams unless an official text ties them to gratuity.',
    ],
  },
  {
    heading: 'A 2027 planning checklist',
    body: [
      {
        table: {
          head: ['Item', 'Employee', 'Employer'],
          rows: [
            ['Estimate', 'Run the current formula with a 2027 end date', 'Keep a current liability estimate by employee'],
            ['Scheme status', 'Ask if you are on a lump sum, the savings scheme, or DEWS', 'Record enrolment dates and pre enrolment balances'],
            ['Documents', 'Store contracts, payslips and scheme statements', 'Keep a settlement file ready before the last day'],
            ['ILOE', 'Check the policy is active and know the 30 day window', 'Do not treat ILOE as a substitute for gratuity'],
            ['Payment', 'Note the 14 day deadline and the two year claim limit', 'Pay wages and dues within 14 days of the contract ending'],
            ['Official changes', 'Recalculate only after reading an official text', 'Update templates only after an official text'],
          ],
        },
      },
      'For the evidence behind the planning assumptions, see [UAE gratuity predictions for 2027](/blog/uae-gratuity-predictions-2027). Recalculate if your salary, leave or scheme status changes, and again if MOHRE or the Official Gazette publishes a new rule.',
    ],
  },
]

const faq: [string, string][] = [
  [
    'How should I plan a UAE final settlement for 2027?',
    'Estimate the current Article 51 result with your basic salary and a 2027 end date, keep your documents together, and recalculate if your salary, unpaid leave, or scheme status changes, or if an official legal change is published.',
  ],
  [
    'When must a 2027 settlement be paid?',
    'Under the current law, wages and other entitlements are due within 14 days of the contract ending. No official replacement of that deadline was found in the sources reviewed on 10 November 2026.',
  ],
  [
    'Should I wait for a new 2027 law before calculating?',
    'No. Use the current official formula now. If a later official text changes the rule, update the estimate after you have read the effective date.',
  ],
  [
    'What if my company joins the savings scheme before I leave?',
    'Ask for the enrolment date, the gratuity accrued up to that date, and access to the fund balance after that date. Future accrual then follows the scheme, not the old lump sum method, for enrolled staff.',
  ],
  [
    'Can I claim ILOE as well as gratuity?',
    'They are separate. Gratuity is a labour entitlement. ILOE is unemployment insurance and usually applies only after an eligible termination, with a 12 month qualifying period and a 30 day claim window.',
  ],
  [
    'Will the UAE tax my 2027 gratuity?',
    'The Federal Tax Authority has said it is not currently considering personal income taxes, in a FAQ last updated on 22 May 2024. Your home country may still tax the amount. This is not tax advice.',
  ],
]

const internalLinks = [
  { href: '/blog/uae-gratuity-rules-2027', label: 'UAE gratuity rules 2027', description: 'What is confirmed and what to watch.' },
  { href: '/blog/uae-gratuity-predictions-2027', label: 'UAE gratuity predictions for 2027', description: 'Scenarios and confidence levels.' },
  { href: '/blog/uae-final-settlement-checklist', label: 'Final settlement checklist', description: 'What to check before you sign.' },
  { href: '/final-settlement-calculator-uae', label: 'Final settlement calculator', description: 'Gratuity, leave, notice and deductions in one total.' },
  { href: '/blog/how-to-file-mohre-complaint', label: 'How to file a MOHRE complaint', description: 'If dues are unpaid or late.' },
  { href: '/iloe-calculator-uae', label: 'ILOE calculator', description: 'Unemployment insurance cost and payout.' },
]

const externalLinks = [
  { href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', label: 'u.ae: end of service benefits in the private sector', description: 'Official formula, payment timing and voluntary savings scheme, updated 15 October 2026.' },
  { href: 'https://u.ae/en/information-and-services/jobs/Workplace-regulations/insurance/unemployment-insurance-scheme', label: 'u.ae: insurance against job loss', description: 'Official ILOE claim conditions and premiums, updated 8 December 2025.' },
  { href: 'https://tax.gov.ae/en/faq.aspx?keyword=income', label: 'Federal Tax Authority: tax FAQs', description: 'Includes the published position on personal income tax, page updated 22 May 2024.' },
  { href: 'https://uaelegislation.gov.ae/en/legislations/1541', label: 'Federal Decree Law No. 33 of 2021, UAE Legislation portal', description: 'Official labour law text, including Articles 51, 53 and 54.' },
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-final-settlement-planning-2027"
      title={pageTitle}
      description={pageDescription}
      badge="2027 PLANNING"
      intro="Plan a 2027 exit with the current official formula, a complete document file, and a short list of events that should trigger a fresh calculation. Do not wait for a law that has not been published."
      sections={sections}
      faq={faq}
      note="This page is general information based on official sources reviewed on 10 November 2026. It is not legal, tax or financial advice. Confirm payment, visa and tax decisions with official texts or a UAE qualified professional."
      image={{
        src: '/images/blog/photo/uae-final-settlement-planning-2027.webp',
        alt: 'Two colleagues sitting side by side at a table reviewing papers, seen from behind',
        title: pageTitle,
        caption: 'A settlement plan is easier to finish when the documents and the official formula are already in one place.',
      }}
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-11-10"
      dateModified="2026-11-10"
    />
  )
}

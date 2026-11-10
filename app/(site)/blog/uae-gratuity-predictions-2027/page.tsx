import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-gratuity-predictions-2027'
const pageTitle = 'UAE Gratuity Predictions for 2027: Evidence and Scenarios'
const pageDescription = 'What the official record supports for UAE end of service in 2027, with scenarios, confidence levels, and what remains unpublished.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'uae gratuity 2027',
    'uae labour law 2027',
    'end of service predictions uae',
    'uae savings scheme 2027',
    'uae end of service 2027',
  ],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    heading: 'How to read these predictions',
    body: [
      'A prediction is not a rule. This page sets out scenarios for UAE end of service in 2027 and says how strong the official evidence is for each one. Nothing here guarantees a legal change, a payment amount, or a government decision. If a later official text disagrees with a scenario, the official text wins.',
      'The facts underneath the scenarios were checked on 10 November 2026. The main sources are the official UAE Government pages on end of service benefits and unemployment insurance, the labour law on the UAE Legislation portal, MOHRE guidance on the savings scheme, and the Federal Tax Authority FAQ on personal income tax. The companion article [UAE gratuity rules 2027](/blog/uae-gratuity-rules-2027) lists what is already confirmed. This page does not repeat that checklist in full.',
      'Where the official record is silent, the honest answer is that the outcome is unknown. Commentary from law firms or news sites can be useful as a signal of what people are discussing. It is not a substitute for a Cabinet resolution, a ministerial decision, or a MOHRE announcement.',
    ],
  },
  {
    heading: 'Scenario 1: the Article 51 formula stays in force',
    body: [
      'This is the base case for planning. Federal Decree Law No. 33 of 2021 is still the labour law that governs private sector end of service benefits on the mainland and in most free zones. The official u.ae page, updated on 15 October 2026, still describes the 21 day and 30 day formula, the basic wage rule, the two year cap, and the 14 day payment deadline. As of 10 November 2026, no replacement decree law for 2027 had been announced on the official pages reviewed for this article.',
      'Confidence: high that the current formula remains the correct planning method unless and until an official amendment is published. Confidence is not the same as certainty. The Cabinet can approve alternative schemes under Article 51(8), and the legislature can amend the law. The point is that no such 2027 amendment was on the official record at the time of writing.',
      'If you are leaving in 2027 and you are not in an approved savings scheme or a free zone with its own rules, calculate with the [UAE gratuity calculator](/) and read the [formula guide](/how-to-calculate-gratuity-uae).',
    ],
  },
  {
    heading: 'Scenario 2: the savings scheme stays voluntary, with more employers joining',
    body: [
      'The Savings Scheme created by Cabinet Resolution No. 96 of 2023 is still described as voluntary on official pages updated in October 2026. Employers that join pay 5.83 percent or 8.33 percent of monthly basic salary into an approved fund, and employees can add a voluntary amount up to the published cap. That structure already exists. It does not need a 2027 law to continue.',
      'MOHRE invited public feedback on the voluntary scheme and listed the consultation as ended on 28 February 2026. A closed consultation and a policy evaluation can lead to later adjustments, or they can lead to no immediate change. Official pages have not published a 2027 mandate, a start date for compulsory enrolment, or a company size threshold.',
      'Confidence: medium that the scheme remains available and that some additional employers will join it in 2027, because the legal basis and the fund infrastructure already exist. Confidence is lower on the scale of that uptake, because official enrolment numbers for 2027 are not part of the sources used here. If your employer mentions a switch, ask for the enrolment date and the accrued lump sum up to that date. The [savings scheme guide](/blog/uae-end-of-service-savings-scheme) sets out the questions to ask.',
    ],
  },
  {
    heading: 'Scenario 3: a future mandate or a wider savings model',
    body: [
      'This is the scenario people usually mean when they ask whether gratuity will be “replaced” in 2027. Article 51(8) already lets the Cabinet approve alternative end of service schemes. DIFC already uses a savings model (DEWS). The federal scheme already uses similar contribution rates for participating employers. Those facts make a wider savings model possible in principle.',
      'Possible is not the same as scheduled. As of 10 November 2026, no official mandate date, no official 2027 rollout timetable, and no official threshold (for example a company size or a sector) had been published on the official pages reviewed for this article. Some professional commentary has discussed a possible future transition. That commentary is not an official decision, and this page does not treat it as one.',
      'Confidence: low to medium that a mandate could be announced at some point, and low that a specific 2027 start date should be built into a personal or payroll plan today. If a mandate appears, the detail that will matter is the effective date, what happens to gratuity already earned, which employees are included, and whether an employer can stay on the lump sum model. Until those details exist in an official text, plan on the current voluntary basis and watch MOHRE and the Official Gazette.',
    ],
  },
  {
    heading: 'Scenario 4: ILOE terms stay in the same range',
    body: [
      'Unemployment insurance is easier to describe because the current terms are published. The official u.ae page updated on 8 December 2025 still uses the AED 5 and AED 10 monthly premium bands, the 60 percent benefit, the three month limit, and the 12 month qualifying period. The official ILOE site lists one year or two year policy periods and adds VAT. Those are the terms to use for 2027 planning unless the Cabinet or MOHRE publishes a change.',
      'Confidence: medium to high that the scheme remains in place in 2027, because it is already mandatory for eligible private sector and federal workers and is established by decree law. Confidence is slightly lower on the exact premium or benefit figures, which can be adjusted by later decisions. Check your own policy period and keep the 30 day claim window in mind if a termination happens. The [ILOE calculator](/iloe-calculator-uae) is a planning tool, not a claim decision.',
    ],
  },
  {
    heading: 'Scenario 5: no personal income tax on salary or gratuity in the UAE',
    body: [
      'The UAE Federal Tax Authority FAQ still states that the UAE is not currently considering personal income taxes. That FAQ page was last updated on 22 May 2024. A 2024 statement is not a 2027 statute, so the date is part of the evidence, not a footnote. No later official announcement reversing that position was found in the sources reviewed for this article. Corporate tax already exists for businesses and is a separate subject from a tax on an employee’s salary or gratuity in the UAE.',
      'Confidence: medium to high that the UAE does not introduce a personal income tax on employment income in 2027, based on the FTA’s published position and the absence of a later official reversal in the sources used here. Confidence is lower for tax treatment in an employee’s home country, which can change on its own timetable. See [is UAE gratuity taxable?](/blog/is-uae-gratuity-taxable) and, for Indian tax questions, the [NRI guide](/blog/uae-gratuity-tax-india-nri-guide).',
    ],
  },
  {
    heading: 'What this page is not predicting',
    body: [
      {
        list: [
          'A new official Emiratisation percentage for 2027. The published private sector path described on u.ae in October 2026 runs to 2026. The absence of a 2027 figure is not a prediction that targets end, and it is not a prediction of a new number.',
          'A change to domestic worker end of service rules. Those sit in a different decree law, and no 2027 formula was found in the official sources used here.',
          'A 2027 rewrite of DIFC DEWS or ADGM end of service rules. Use the free zone pages if that is your contract.',
          'Visa fee tables, public holiday calendars, or salary inflation figures for 2027. Those need their own official sources and are outside the scope of this page.',
        ],
      },
      'If you need a practical list rather than scenarios, use the [2027 planning guide](/blog/uae-final-settlement-planning-2027). If a settlement is already in front of you, use the [final settlement checklist](/blog/uae-final-settlement-checklist).',
    ],
  },
  {
    heading: 'A simple way to update your own view',
    body: [
      'Treat 2027 planning as a file you can revise, not as a one time guess. Recalculate when your basic salary changes, when unpaid leave is taken, or when your employer enrols people in a savings scheme. Recalculate again if MOHRE or the Official Gazette publishes a new rule, and only after you have read the effective date.',
      {
        table: {
          head: ['Scenario', 'What would confirm it', 'Planning stance'],
          rows: [
            ['Article 51 stays the formula', 'No amending decree or official notice', 'High confidence planning base'],
            ['Savings scheme stays voluntary', 'Official pages still call it voluntary', 'Ask HR if your company is considering it'],
            ['A mandate is announced', 'A Cabinet or MOHRE text with an effective date', 'Do not assume a date until that text exists'],
            ['ILOE terms are adjusted', 'An official change to premiums or benefits', 'Check your policy before you claim'],
            ['A UAE personal income tax is proposed', 'An official FTA or Ministry of Finance text', 'Not supported by the current FTA FAQ'],
          ],
        },
      },
    ],
  },
]

const faq: [string, string][] = [
  [
    'Will UAE gratuity rules change in 2027?',
    'No official replacement law or new formula had been announced as of 10 November 2026. A change is always possible later, but it should be confirmed in an official text before you treat it as a rule.',
  ],
  [
    'Will the savings scheme become mandatory in 2027?',
    'That is not established on the official record reviewed for this page. Official pages still describe the scheme as voluntary. A future mandate is possible under Article 51(8), but no official 2027 start date was published in the sources used here.',
  ],
  [
    'Is this legal advice or a guarantee?',
    'No. These are planning scenarios with stated confidence levels. They can be wrong, and they can be overtaken by a later official decision.',
  ],
  [
    'Can I rely on a news article about a 2027 change?',
    'Use it as a prompt to check the official source. If the article does not point to a Cabinet resolution, a ministerial decision, or a MOHRE announcement, treat the claim as unconfirmed.',
  ],
  [
    'Does a high confidence scenario mean the law cannot change?',
    'No. High confidence means the official record, as reviewed on 10 November 2026, supports that planning assumption. It does not freeze the law.',
  ],
]

const internalLinks = [
  { href: '/blog/uae-gratuity-rules-2027', label: 'UAE gratuity rules 2027', description: 'The confirmed checklist and what to watch.' },
  { href: '/blog/uae-final-settlement-planning-2027', label: 'Final settlement planning for 2027', description: 'Practical steps for employees and employers.' },
  { href: '/blog/uae-end-of-service-savings-scheme', label: 'Alternative end of service savings scheme', description: 'The voluntary scheme compared with traditional gratuity.' },
  { href: '/blog/is-uae-gratuity-taxable', label: 'Is UAE gratuity taxable?', description: 'The UAE position and home country questions.' },
  { href: '/uae-labor-law', label: 'UAE labour law gratuity rules', description: 'Articles 51, 53 and 54.' },
]

const externalLinks = [
  { href: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', label: 'u.ae: end of service benefits in the private sector', description: 'Official formula and voluntary savings scheme summary, updated 15 October 2026.' },
  { href: 'https://www.mohre.gov.ae/en/digital-participation/econsultation-and-decision', label: 'MOHRE: eConsultation and decision', description: 'Lists the voluntary savings scheme consultation as ended on 28 February 2026.' },
  { href: 'https://tax.gov.ae/en/faq.aspx?keyword=income', label: 'Federal Tax Authority: tax FAQs', description: 'Includes the statement that the UAE is not currently considering personal income taxes, page updated 22 May 2024.' },
  { href: 'https://u.ae/en/information-and-services/jobs/Workplace-regulations/insurance/unemployment-insurance-scheme', label: 'u.ae: insurance against job loss', description: 'Official ILOE terms, updated 8 December 2025.' },
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-gratuity-predictions-2027"
      title={pageTitle}
      description={pageDescription}
      badge="2027 PREDICTIONS"
      intro="These are planning scenarios, not promised legal changes. The strongest official evidence still supports using the current Article 51 formula in 2027, unless a later official text says otherwise."
      sections={sections}
      faq={faq}
      note="This page is general information and informed commentary based on official sources reviewed on 10 November 2026. It is not a forecast you can enforce, and it is not legal, tax or investment advice. Confirm any decision with official texts or a UAE qualified professional."
      image={{
        src: '/images/blog/photo/uae-gratuity-predictions-2027.webp',
        alt: 'A closed laptop, a glass of water and a blank open notebook on a wooden desk by a bright window',
        title: pageTitle,
        caption: 'A 2027 view should stay open to revision if an official text is published after this page was written.',
      }}
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-11-10"
      dateModified="2026-11-10"
    />
  )
}

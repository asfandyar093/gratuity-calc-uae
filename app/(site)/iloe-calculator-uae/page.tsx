import type { Metadata } from 'next'
import BlogArticlePage, { type Block } from '@/components/BlogArticlePage'
import IloeCalculator from '@/components/IloeCalculator'
import { baseOpenGraph } from '@/lib/seo'
import { iloeCompensation, iloePremium } from '@/lib/iloe'

const path = '/iloe-calculator-uae'
const pageTitle = 'ILOE Calculator UAE 2026: Cost, Payout & Eligibility'
const pageDescription = 'Work out your ILOE category, the yearly premium and the most you could be paid after job loss. Based on MOHRE and u.ae rules for unemployment insurance.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['iloe calculator uae', 'iloe insurance uae', 'unemployment insurance uae', 'iloe claim', 'involuntary loss of employment'],
  alternates: { canonical: `https://www.uaegratuitycheck.com${path}` },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, url: `https://www.uaegratuitycheck.com${path}`, type: 'article' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const aed = (n: number) => `AED ${n.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
const c1 = iloeCompensation(9000)
const c2 = iloeCompensation(16000)
const c3 = iloeCompensation(40000)
const p1 = iloePremium(9000)
const p2 = iloePremium(25000)

const sections: { heading: string; body: Block[] }[] = [
  {
    heading: 'What ILOE is',
    body: [
      'ILOE stands for Involuntary Loss of Employment. It is the UAE unemployment insurance scheme. If you lose your job because your employer ended it, the scheme pays you a cash amount for a limited time while you look for new work. It is insurance, so it is paid by an insurer and funded by premiums, not by your employer.',
      'The scheme is run with the Ministry of Human Resources and Emiratisation (MOHRE) under Federal Decree Law No. 13 of 2022. It covers private sector employees and federal government employees. It is separate from your end of service gratuity, which your employer owes under the labour law. You can read how gratuity is worked out in [how to calculate gratuity in the UAE](/how-to-calculate-gratuity-uae).',
    ],
  },
  {
    heading: 'Who has to subscribe, and who is excluded',
    body: [
      'Subscription is mandatory for employees in the private sector and the federal government sector. The u.ae portal lists the groups that are outside the scheme:',
      { list: [
        'Investors who own the establishment where they work',
        'Domestic workers',
        'Employees on temporary contracts',
        'Workers under 18',
        'Emirati citizens who meet the retirement conditions, or retirees who draw a pension and then join a new job',
      ] },
      'If you are a domestic worker, other rules apply to you. See the [domestic worker gratuity calculator](/gratuity-calculator/domestic-workers) for that route.',
    ],
  },
  {
    heading: 'ILOE cost: which category are you in?',
    body: [
      'The premium depends on your basic salary. These are the two categories on the official page.',
      { table: { head: ['Category', 'Basic salary', 'Premium', 'Monthly payout cap'], rows: [
        ['Category 1', 'Below AED 16,000', 'No more than AED 5 a month', 'AED 10,000'],
        ['Category 2', 'Above AED 16,000', 'No more than AED 10 a month', 'AED 20,000'],
      ] } },
      `That works out at most ${aed(p1.annual)} a year in category 1 and ${aed(p2.annual)} a year in category 2. The u.ae page words the limits as below and above AED 16,000, so if your basic salary is exactly AED 16,000, check the category on the ILOE portal. This calculator treats it as category 1.`,
      'If you are paid by commission and your contract does not state a basic salary, you can choose either category. Basic salary here means the figure in your contract, not your total package. If you are unsure which part of your pay counts, read [what counts as basic salary](/blog/uae-gratuity-allowances-basic-salary).',
    ],
  },
  {
    heading: 'How much does ILOE pay?',
    body: [
      'The scheme pays 60% of your subscription salary for up to three months, with a monthly cap that depends on your category. The figures below come from the same function the calculator uses.',
      { table: { head: ['Basic salary', '60% of salary', 'Monthly payout', 'Up to 3 months'], rows: [
        ['AED 9,000', aed(c1.uncapped), aed(c1.monthly), aed(c1.total)],
        ['AED 16,000', aed(c2.uncapped), aed(c2.monthly), aed(c2.total)],
        ['AED 40,000', aed(c3.uncapped), `${aed(c3.monthly)} (cap applied)`, aed(c3.total)],
      ] } },
      'The cap only bites in category 2, once 60% of salary passes AED 20,000. Compensation stops if you find a new job during the period you are being paid. The official page says payment is made within two weeks of your claim.',
    ],
  },
  {
    heading: 'Eligibility: when can you claim?',
    body: [
      'You must meet every condition below. The calculator at the top checks the ones you can enter.',
      { steps: [
        'You have been subscribed for at least 12 continuous months.',
        'You have paid all premiums on the schedule you chose.',
        'You can show that you are unemployed for a reason other than resignation.',
        'You were not dismissed for disciplinary reasons under the labour law.',
        'You submit your claim within 30 days of the end of the employment relationship, or of the resolution of the labour dispute.',
        'You do not have an ongoing absconding complaint against you.',
        'The claim is not based on fraud, and your employer is not a fictitious entity.',
        'The job loss is not the result of strikes or non peaceful protests.',
        'You are present in the UAE.',
      ] },
      'The 30 day window is short, so file as soon as your employment ends. Claims go through the ILOE portal, the ILOE app or the call centre. If the job loss is part of a bigger exit, the [final settlement calculator](/final-settlement-calculator-uae) shows the other amounts you should expect from your employer.',
    ],
  },
  {
    heading: 'What happens if you do not subscribe or stop paying',
    body: [
      'The u.ae page says a worker who does not subscribe is fined AED 400, and a worker who does not pay the premiums is fined AED 400. The ILOE FAQ adds that if you fall more than three months behind on the payment plan you chose, the policy is cancelled and you must take a new one. A new policy means the 12 month wait starts again.',
      'Penalty amounts have been amended by ministerial decision before, so confirm the current figure on the ILOE portal or with MOHRE before you pay.',
    ],
  },
  {
    heading: 'How to subscribe and pay',
    body: [
      'The u.ae portal lists nine channels: the ILOE website, the ILOE app, the ILOE contact centre, Tasheel and Tawjeeh business service centres, ATMs and kiosks, exchange companies, some bank apps, SMS through du and Etisalat, and the BOTIM app. You choose how often to pay, for example monthly or yearly. If you cannot see your certificate, the ILOE FAQ explains how to view it with your Emirates ID and mobile number.',
    ],
  },
  {
    heading: 'ILOE and your final pay: what is different',
    body: [
      'ILOE does not replace anything your employer owes you at exit. Wages, unused leave, notice pay and gratuity are separate legal entitlements. If you were let go, check them in the [UAE labour law gratuity rules](/uae-labor-law) and use the [notice period calculator](/notice-period-calculator-uae) for notice dates. Your employer must pay final dues within 14 days of the end date under Article 53 of the labour law. See [how payment delays are handled](/blog/uae-gratuity-payment-delay-rules).',
    ],
  },
]

const faq: [string, string][] = [
  ['What is ILOE in the UAE?', 'ILOE is the Involuntary Loss of Employment scheme, the UAE unemployment insurance. It pays 60% of your subscription salary for up to three months if you lose your job for a reason other than resignation or disciplinary dismissal.'],
  ['How much does ILOE cost?', 'At most AED 5 a month (AED 60 a year) if your basic salary is below AED 16,000, and at most AED 10 a month (AED 120 a year) if it is above that, according to the u.ae portal.'],
  ['Is ILOE mandatory?', 'Yes, for private sector and federal government employees. Investors, domestic workers, temporary contract staff, workers under 18 and some Emirati retirees are excluded.'],
  ['How long must I be subscribed before I can claim?', 'At least 12 continuous months, with all premiums paid on schedule.'],
  ['How long do I have to file a claim?', 'Within 30 days of the end of the employment relationship, or of the resolution of a labour dispute.'],
  ['What is the fine for not subscribing?', 'The u.ae portal lists AED 400 for not subscribing and AED 400 for not paying premiums. Check the portal for the current amount.'],
]

const internalLinks = [
  { href: '/final-settlement-calculator-uae', label: 'Final settlement calculator', description: 'Gratuity, leave and notice in one total.' },
  { href: '/how-to-calculate-gratuity-uae', label: 'How to calculate gratuity in the UAE', description: 'The formula with worked examples.' },
  { href: '/notice-period-calculator-uae', label: 'Notice period calculator', description: 'Notice dates and pay in lieu.' },
  { href: '/blog/how-to-file-mohre-complaint', label: 'How to file a MOHRE complaint', description: 'What to do if dues are unpaid.' },
]

const externalLinks = [
  { href: 'https://u.ae/en/information-and-services/jobs/Workplace-regulations/insurance/unemployment-insurance-scheme', label: 'u.ae: insurance against job loss', description: 'Official categories, premiums, compensation and claim conditions.' },
  { href: 'https://www.iloe.ae/Faq.aspx', label: 'ILOE portal FAQ', description: 'Subscription, claims and policy cancellation.' },
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="iloe-calculator-uae"
      path={path}
      crumbs={[{ name: 'Calculators', path: '/gratuity-calculator' }]}
      title="ILOE Calculator UAE: Cost, Payout and Eligibility"
      description={pageDescription}
      badge="ILOE UNEMPLOYMENT INSURANCE"
      intro="Enter your basic salary to see your ILOE category, the most you pay a year and the most you could be paid if you lose your job. The rules below come from MOHRE and the u.ae portal."
      top={<IloeCalculator />}
      sections={sections}
      faq={faq}
      note="This page is general information from official sources. It is not insurance or legal advice. The insurer decides each claim, so confirm current fees and conditions on the ILOE portal."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

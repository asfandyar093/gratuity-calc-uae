import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import AuthorBox from '@/components/AuthorBox'
import SourcesBox from '@/components/SourcesBox'
import { SOURCES } from '@/lib/sources'
import LastUpdated from '@/components/LastUpdated'
import NoticePeriodCalculator from '@/components/NoticePeriodCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/notice-period-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Notice Period Calculator 2026: Days, Pay & Buyout',
  description: 'Find your UAE notice period (30 to 90 days), last working day and the notice pay owed if you or your employer skip it. Covers resignation and termination.',
  alternates: { canonical: url },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Notice Period Calculator 2026',
    description: 'Calculate your required notice days under UAE Labour Law.',
    url,
    images: ['/notice-period-og.png'],
  },
}

const faq = [
  ['How long is the notice period in the UAE?', 'Article 43 of Federal Decree-Law No. 33 of 2021 says the notice period is agreed in the contract, at least 30 days and no more than 90 days. It does not depend on years of service.'],
  ['Can an employer waive notice period?', 'Yes. The employer and employee can agree to waive all or part of the notice period, but the agreement should be written so the final settlement is clear.'],
  ['Do I get paid during notice?', 'Yes. Notice period is normally paid working time. Salary, benefits, and final settlement accruals continue until the last working day.'],
  ['What if an employer terminates without notice?', 'If termination happens without proper notice, the employee may be owed compensation equal to wages for the missing notice period.'],
  ['What is the notice period for domestic workers?', 'Domestic workers follow a separate legal framework, so check the domestic worker contract and MOHRE guidance rather than applying private-sector notice rules automatically.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Notice Period Calculator',
    url,
    description: 'Free UAE notice period calculator for estimating notice days and earliest last working day under UAE Labour Law.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
      { '@type': 'ListItem', position: 3, name: 'Notice Period Calculator', item: url },
    ],
  },
]

export default function NoticePeriodPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Notice Period</div>
          <h1>UAE Notice Period Calculator 2026</h1>
          <LastUpdated date="2026-10-15" />
          <p>Estimate your notice period, last working day, and the settlement items that should be checked before resignation or termination.</p>
        </div>

        <NoticePeriodCalculator />

        <div className="card">
          <h2>UAE notice period formula</h2>
          <p>Under Article 43 of Federal Decree-Law No. 33 of 2021, employment contracts must include a notice period. The contract sets the notice period, and it must be at least 30 days and no more than 90 days. The law does not link notice length to years of service, so enter the number of days stated in your contract.</p>
          <p>Notice period affects more than your leaving date. It can change final salary, leave encashment, deductions, visa cancellation timing, and the date by which gratuity should be paid. Employees should keep a written resignation or termination notice, a copy of the contract, and the employer&apos;s acceptance or acknowledgement.</p>
          <p>During notice, employees normally continue to work and receive normal pay. If either side ends employment immediately without serving notice, compensation may be due for the unserved days. That amount is separate from gratuity, which is calculated using basic salary and service period under Article 51.</p>
          <p>Article 43 also says the party that does not serve notice pays the other party the wage for the full notice period or the remaining part of it, calculated on the last wage received. If the employer ends the contract, you may be absent one working day a week without pay to look for another job, provided you tell the employer at least 3 days before the day you choose. Notice can be shortened or waived by agreement, and it must be the same for both sides unless a different term favours the worker. See the <Link href="/blog/notice-period-deductions-gratuity-uae">notice period deductions guide</Link>.</p>
        </div>

        <div className="card">
          <h2>UAE notice period rules at a glance</h2>
          <p>A notice period is the time between written notice and the day the contract ends. In the UAE private sector the contract sets it, and the law fixes the range.</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Question</th><th>What the law says</th><th>Source</th></tr></thead>
              <tbody>
                <tr><td>Minimum notice</td><td>30 days</td><td>Article 43(1)</td></tr>
                <tr><td>Maximum notice</td><td>90 days</td><td>Article 43(1)</td></tr>
                <tr><td>Is notice the same for both sides?</td><td>Yes, unless a different period serves the worker&apos;s interest</td><td>Article 43(2)</td></tr>
                <tr><td>Do you work during notice?</td><td>Yes, if the employer asks, and you get your full wage</td><td>Article 43(2)</td></tr>
                <tr><td>Can notice be waived or shortened?</td><td>Yes, by agreement, keeping the worker&apos;s rights for the agreed period</td><td>Article 43(2)</td></tr>
                <tr><td>Time off to find a job</td><td>One working day a week without pay if the employer ended the contract, with 3 days&apos; notice of the day</td><td>Article 43(5)</td></tr>
                <tr><td>Employer ends contract in probation</td><td>Written notice at least 14 days before the end date</td><td>Article 9(1)</td></tr>
                <tr><td>Employee leaves the UAE during probation</td><td>Written notice at least 14 days before the end date</td><td>Article 9(4)</td></tr>
                <tr><td>Employee moves to another UAE employer during probation</td><td>Written notice at least one month ahead</td><td>Article 9(3)</td></tr>
                <tr><td>Notice not given</td><td>The party at fault pays the other the wage for the notice period or the part left</td><td>Articles 9(5) and 43(3)</td></tr>
              </tbody>
            </table>
          </div>
          <p>Probation can last up to 6 months (Article 9(1)). Those months count as service, so they count towards gratuity once you finish one year.</p>
        </div>

        <div className="card">
          <h2>Notice pay in lieu: the formula</h2>
          <p>If notice is not served, the party who skipped it owes a notice period allowance equal to the worker&apos;s wage for the full period or the remaining part of it, worked out on the last wage received (Article 43(3) and 43(4)). The law defines wage as basic salary plus cash allowances and benefits in kind that the contract grants, so use your total monthly wage, not only basic salary.</p>
          <div className="example-box">
            <div className="ex-line">Notice pay = monthly wage ÷ 30 × unserved notice days</div>
            <div className="ex-line">Example: wage AED 12,000, notice 45 days, you work 20 days and leave</div>
            <div className="ex-line">Unserved days: 45 minus 20 = 25</div>
            <div className="ex-total">AED 12,000 ÷ 30 × 25 = AED 10,000 owed to the employer</div>
          </div>
          <p>The same formula applies in reverse if the employer ends your contract without notice: it owes you the wage for the notice days it did not give. A month is counted as 30 days under Article 67. If notice pay is shown on your settlement sheet, check the days and the wage used. See <Link href="/blog/notice-period-deductions-gratuity-uae">can my employer reduce my gratuity for notice</Link> for how notice pay and gratuity interact, and use the <Link href="/final-settlement-calculator-uae">final settlement calculator</Link> to put every item together.</p>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Next steps</h2>
          <p><Link href="/">Calculate your gratuity</Link>, then check your <Link href="/final-settlement-calculator-uae">full final settlement</Link> and read the <Link href="/blog/uae-gratuity-resignation-vs-termination">resignation vs termination guide</Link>.</p>
        </div>
        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />
        <AuthorBox />
        <RelatedCalculators path="/notice-period-calculator-uae" />
        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import AuthorBox from '@/components/AuthorBox'
import SourcesBox from '@/components/SourcesBox'
import { SOURCES } from '@/lib/sources'
import LastUpdated from '@/components/LastUpdated'
import OvertimeCalculator from '@/components/OvertimeCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/overtime-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Overtime Calculator 2026: OT Pay at 125% and 150%',
  description: 'Free UAE OT calculator. Enter basic salary and hours to get your hourly rate and overtime pay at 125%, or 150% for night hours, rest days and holidays.',
  alternates: { canonical: url },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Overtime Calculator 2026: OT Pay at 125% and 150%',
    description: 'Free UAE OT calculator based on Articles 19 and 28: pay at 125%, or 150% for night hours, rest days and holidays.',
    url,
    images: ['/overtime-og.png'],
  },
}

const faq = [
  ['How is UAE overtime pay calculated?', 'Divide your monthly basic salary by 30 for the daily wage, then by 8 for the hourly rate. Overtime is paid at that rate plus at least 25% (Article 19(2)), or plus at least 50% for overtime between 10 pm and 4 am (Article 19(3)).'],
  ['What is the maximum overtime allowed per day in the UAE?', 'Article 19(1) lets an employer instruct overtime of up to two hours a day. Total working hours must not exceed 144 hours in every three weeks. More is allowed only under the conditions in the Implementing Regulation.'],
  ['How is work on a weekly rest day or public holiday paid?', 'The employer must give you another day off, or pay the wage for that day at the normal rate plus an increase of not less than 50% of the basic wage for that day (Articles 19(4) and 28(2)).'],
  ['Does overtime count toward gratuity?', 'No. Gratuity under Article 51 is calculated on basic wage. Overtime pay is not part of basic wage.'],
  ['Can overtime be compensated with time off?', 'For work on a weekend day or public holiday, yes. The law gives the employer the choice between another day off and extra pay. Keep the arrangement in writing.'],
  ['What if my employer will not pay overtime?', 'Ask HR for the overtime record in writing. If it is still unpaid, submit a request to MOHRE under Article 54. Bring your contract, payslips, attendance records and the messages that assigned the extra hours.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Overtime Pay Calculator',
    url,
    description: 'Free UAE overtime calculator using regular and premium overtime rates under UAE Labour Law.',
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
      { '@type': 'ListItem', position: 3, name: 'Overtime Calculator', item: url },
    ],
  },
]

export default function OvertimePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Overtime</div>
          <h1>UAE Overtime (OT) Calculator 2026</h1>
          <LastUpdated date="2026-10-15" />
          <p>Estimate overtime pay from your basic salary, overtime hours and the premium that applies under Articles 19 and 28 of the UAE Labour Law.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <OvertimeCalculator />

        <div className="card">
          <h2>How is overtime calculated in the UAE?</h2>
          <p>Overtime is any work beyond normal hours, which Article 17 of Federal Decree Law No. 33 of 2021 sets at 8 hours a day or 48 hours a week. Article 19 says the excess is paid at the wage for normal hours, calculated on the basic wage, plus an increase of not less than 25%. That is the 125% rate used in the calculator.</p>
          <p>The calculator turns monthly basic salary into an hourly rate by dividing by 30 days and then by 8 hours. If your contract or payroll uses a different divisor, enter your hourly basic rate directly for a closer estimate.</p>
          <p>Overtime pay is separate from gratuity, which uses basic wage only. See <Link href="/how-to-calculate-gratuity-uae">how to calculate gratuity in the UAE</Link> for that formula.</p>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">OVERTIME RATES</div>
            <h2>UAE overtime rates under the labour law</h2>
            <p>Every rate is built from the same hourly base: monthly basic salary ÷ 30 ÷ 8. The minimum premium depends on when the work happens.</p>
            <div className="tbl-wrap" style={{ marginTop: '1rem' }}>
              <table>
                <thead>
                  <tr><th>When the work is done</th><th>Minimum under the law</th><th>Example: AED 9,000 basic</th></tr>
                </thead>
                <tbody>
                  <tr><td>Overtime on a normal working day (Article 19(2))</td><td>Hourly rate plus at least 25%</td><td>AED 37.50 × 125% = AED 46.88 an hour</td></tr>
                  <tr className="hl"><td>Overtime between 10 pm and 4 am (Article 19(3))</td><td>Hourly rate plus at least 50%. Shift workers are excluded from this clause</td><td>AED 37.50 × 150% = AED 56.25 an hour</td></tr>
                  <tr><td>Weekly rest day named in your contract (Article 19(4))</td><td>Another day off, or the day wage plus at least 50% of the basic wage for that day</td><td>Day wage AED 300, premium at least AED 150</td></tr>
                  <tr><td>Public holiday (Article 28(2))</td><td>Another day off, or the day wage plus at least 50% of the basic wage for that day</td><td>Day wage AED 300, premium at least AED 150</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem' }}>The calculator applies 125% for ordinary overtime and 150% for night, rest day and holiday hours. For a full day worked on a rest day or holiday, that matches the day wage plus 50% when your basic wage is the whole daily wage. Your contract or company policy can be more generous than these minimums. See <Link href="/blog/uae-public-holiday-weekend-work-pay">pay for working a public holiday or weekend</Link> for how the day off option works.</p>
            <div className="example-box" style={{ marginTop: '1rem' }}>
              <div className="ex-title">Worked example: 10 hours of ordinary overtime and 4 hours at night</div>
              <div className="ex-line">Hourly rate: AED 9,000 ÷ 30 ÷ 8 = <strong>AED 37.50</strong></div>
              <div className="ex-line">Ordinary overtime: AED 37.50 × 125% × 10 hours = AED 468.75</div>
              <div className="ex-line">Night overtime: AED 37.50 × 150% × 4 hours = AED 225.00</div>
              <div className="ex-total">Total overtime pay: AED 693.75</div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Limits on overtime</h2>
          <ul>
            <li>Overtime of up to two hours a day can be instructed. Total working hours cannot exceed 144 in every three weeks, unless the Implementing Regulation sets other conditions (Article 19(1)).</li>
            <li>A worker may not work more than 5 consecutive hours without a break of at least an hour in total (Article 18).</li>
            <li>A worker cannot be instructed to work more than two consecutive weekend days (Article 19(5)).</li>
            <li>Part time workers cannot be asked to work more than the contracted hours without written consent (Article 17(5)).</li>
            <li>Working hours in Ramadan are set by the Implementing Regulation, so check the current announcement.</li>
          </ul>
          <p>Keep rosters, biometric records, manager messages and payslips. They matter if overtime is missing from your final settlement.</p>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">OVERTIME AND YOUR FINAL SETTLEMENT</div>
            <h2>Where unpaid overtime fits in a final settlement</h2>
            <p>Overtime pay is a separate entitlement from gratuity — it does not increase or decrease your end-of-service gratuity, since gratuity is based on basic salary only. However, if your employer owes you unpaid overtime when your employment ends, that amount should be added to your <Link href="/final-settlement-calculator-uae">final settlement</Link> alongside gratuity, unpaid salary, and leave encashment.</p>
            <p>If overtime is missing from your final settlement sheet, gather your rosters, biometric logs, manager approvals, and payslips before raising the issue. The <Link href="/blog/uae-final-settlement-checklist">final settlement checklist</Link> walks through what to verify line by line, and <Link href="/blog/how-to-file-mohre-complaint">how to file a MOHRE complaint</Link> covers the escalation steps if HR does not correct the calculation.</p>
          </div>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
          <p><Link href="/">Calculate gratuity</Link> or check your <Link href="/final-settlement-calculator-uae">full final settlement</Link>.</p>
        </div>
        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />
        <AuthorBox />
        <RelatedCalculators path="/overtime-calculator-uae" />
        <Footer />
      </main>
    </>
  )
}

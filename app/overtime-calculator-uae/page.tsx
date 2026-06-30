import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import OvertimeCalculator from '@/components/OvertimeCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/overtime-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Overtime Calculator 2026 — Are You Getting Paid 125% or 150%?',
  description: 'Check if your UAE overtime pay is correct. Weekday overtime is 125% of hourly rate, Fridays and holidays 150%. Enter your salary to see what you should earn.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Overtime Pay Calculator 2026',
    description: 'Article 19 Labour Law overtime estimate with 125% and 150% rates.',
    url,
    images: ['/overtime-og.png'],
  },
}

const faq = [
  ['How is UAE overtime pay calculated?', 'Take your monthly basic salary, divide by 30 to get the daily wage, then divide by 8 to get the hourly rate. Regular overtime is paid at 125% of this hourly rate, and overtime on Fridays, weekly rest days, or public holidays is paid at 150%.'],
  ['What is the maximum overtime allowed per day in the UAE?', 'Article 19 generally limits overtime to two extra hours per day, meaning a maximum of 10 working hours in any 24-hour period, except in specific cases allowed under the law.'],
  ['Are managers and supervisors entitled to overtime pay?', 'Employees in senior management, supervisory, or representative positions whose role inherently requires extra hours may be excluded from overtime pay under their contract. Check your employment contract and job title carefully.'],
  ['Does overtime count toward gratuity?', 'No. UAE gratuity is calculated on basic salary only (Article 51). Overtime pay, like other allowances and bonuses, is excluded from the gratuity calculation even if it was paid regularly.'],
  ['Can overtime be compensated with time off?', 'Rest-day work may be compensated with another rest day or premium pay depending on the situation and agreement. Keep written confirmation from HR.'],
  ['What if my employer forces unpaid overtime?', 'Ask for a written overtime record and raise the issue with HR. If unpaid overtime continues, employees can contact MOHRE for guidance or file a complaint.'],
  ['How do I report overtime violations to MOHRE?', 'Use the MOHRE app, website, call centre, or Tasheel service centre. Bring your contract, payslips, attendance records, and messages assigning overtime.'],
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
          <h1>UAE Overtime Pay Calculator 2026</h1>
          <LastUpdated date="May 2026" />
          <p>Estimate overtime pay from your basic salary, overtime hours, and the applicable UAE Labour Law premium.</p>
        </div>

        <OvertimeCalculator />

        <div className="card">
          <h2>How UAE overtime is calculated</h2>
          <p>Article 19 of Federal Decree-Law No. 33 of 2021 sets the overtime framework. Regular overtime is paid at the basic wage plus at least 25%, while night overtime and rest-day or holiday work can attract a higher premium. This page uses 125% for regular overtime and 150% for Fridays, weekly rest days, public holidays, or premium overtime scenarios.</p>
          <p>The calculator converts monthly basic salary to a working hourly rate by dividing monthly basic salary by 30 days and then by 8 hours. If your contract or payroll policy uses a different working-hours divisor, enter your hourly basic rate directly for a closer estimate.</p>
          <p>Overtime should be documented. Keep rosters, biometric records, manager messages, email approvals, and payslips. These records matter if overtime is missing from the final settlement or if your employer treats overtime as unpaid time.</p>
        </div>

        <div className="card">
          <h2>Rules to check before claiming overtime</h2>
          <ul>
            <li>Regular overtime should generally not exceed two hours per day unless exceptional conditions apply.</li>
            <li>Employees should receive required rest periods and weekly rest arrangements.</li>
            <li>Some senior, supervisory, or exempt roles may be treated differently depending on the employment arrangement.</li>
            <li>Overtime is separate from gratuity, but unpaid overtime can be part of a final settlement dispute.</li>
          </ul>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">OVERTIME RATES — معدلات العمل الإضافي</div>
            <h2>UAE overtime pay rates at a glance</h2>
            <p>Every overtime rate is built from the same hourly base rate: monthly basic salary ÷ 30 days ÷ 8 hours. The premium that applies on top depends on when the extra hours are worked.</p>
            <div className="tbl-wrap" style={{ marginTop: '1rem' }}>
              <table>
                <thead>
                  <tr><th>When overtime is worked</th><th>Rate</th><th>Example: AED 9,000 basic salary</th></tr>
                </thead>
                <tbody>
                  <tr><td>Regular weekday overtime</td><td>125% of hourly rate</td><td>AED 37.50/hr × 125% = AED 46.88/hr</td></tr>
                  <tr className="hl"><td>Friday, weekly rest day, or public holiday</td><td>150% of hourly rate</td><td>AED 37.50/hr × 150% = AED 56.25/hr</td></tr>
                  <tr><td>Night shift premium (if applicable under contract)</td><td>Per contract, often 150%</td><td>AED 37.50/hr × 150% = AED 56.25/hr</td></tr>
                </tbody>
              </table>
            </div>
            <div className="example-box" style={{ marginTop: '1rem' }}>
              <div className="ex-title">Worked example: 10 hours regular overtime + 4 hours Friday overtime</div>
              <div className="ex-line">Hourly rate: AED 9,000 ÷ 30 ÷ 8 = <strong>AED 37.50</strong></div>
              <div className="ex-line">Regular overtime: AED 37.50 × 125% × 10 hrs = AED 468.75</div>
              <div className="ex-line">Friday overtime: AED 37.50 × 150% × 4 hrs = AED 225.00</div>
              <div className="ex-total">Total overtime pay: AED 693.75</div>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">OVERTIME AND YOUR FINAL SETTLEMENT</div>
            <h2>Where unpaid overtime fits in a final settlement</h2>
            <p>Overtime pay is a separate entitlement from gratuity — it does not increase or decrease your end-of-service gratuity, since gratuity is based on basic salary only. However, if your employer owes you unpaid overtime when your employment ends, that amount should be added to your <Link href="/final-settlement-calculator-uae">final settlement</Link> alongside gratuity, unpaid salary, and leave encashment.</p>
            <p>If overtime is missing from your final settlement sheet, gather your rosters, biometric logs, manager approvals, and payslips before raising the issue. The <Link href="/blog/uae-final-settlement-checklist">final settlement checklist</Link> walks through what to verify line by line, and <Link href="/blog/how-to-dispute-gratuity-uae">how to dispute gratuity in UAE</Link> covers the escalation steps if HR does not correct the calculation.</p>
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
        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import OvertimeCalculator from '@/components/OvertimeCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/overtime-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Overtime Calculator 2026 — Calculate Overtime Pay Under MOHRE Rules',
  description: 'Calculate UAE overtime pay instantly. Article 19 of UAE Labour Law: 125% rate on weekdays, 150% on Fridays and public holidays. Free calculator, updated 2026.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Overtime Pay Calculator 2026',
    description: 'Article 19 Labour Law overtime estimate with 125% and 150% rates.',
    url,
    images: ['/overtime-og.png'],
  },
}

const faq = [
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

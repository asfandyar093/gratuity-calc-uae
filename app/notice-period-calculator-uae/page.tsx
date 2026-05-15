import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import NoticePeriodCalculator from '@/components/NoticePeriodCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/notice-period-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Notice Period Calculator 2026 — MOHRE Rules & Formula',
  description: 'Calculate your UAE notice period instantly. Enter your contract type and service years to get the required notice days under Federal Decree-Law No. 33 of 2021.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Notice Period Calculator 2026',
    description: 'Calculate your required notice days under UAE Labour Law.',
    url,
    images: ['/notice-period-og.png'],
  },
}

const faq = [
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
          <LastUpdated date="May 2026" />
          <p>Estimate your notice period, last working day, and the settlement items that should be checked before resignation or termination.</p>
        </div>

        <NoticePeriodCalculator />

        <div className="card">
          <h2>UAE notice period formula</h2>
          <p>Under Article 43 of Federal Decree-Law No. 33 of 2021, employment contracts must include a notice period. This calculator follows the implementation brief: 30 days for service under 5 years, 60 days for 5 or more years, and 90 days for 10 or more years. Your employment contract can set a specific period, so always compare the calculator output with the signed contract.</p>
          <p>Notice period affects more than your leaving date. It can change final salary, leave encashment, deductions, visa cancellation timing, and the date by which gratuity should be paid. Employees should keep a written resignation or termination notice, a copy of the contract, and the employer&apos;s acceptance or acknowledgement.</p>
          <p>During notice, employees normally continue to work and receive normal pay. If either side ends employment immediately without serving notice, compensation may be due for the unserved days. That amount is separate from gratuity, which is calculated using basic salary and service period under Article 51.</p>
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
        <Footer />
      </main>
    </>
  )
}

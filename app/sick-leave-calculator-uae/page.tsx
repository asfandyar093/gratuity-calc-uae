import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import SickLeaveCalculator from '@/components/SickLeaveCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/sick-leave-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Sick Leave Calculator 2026 | Full, Half & Unpaid Pay Days',
  description: 'Calculate your UAE sick leave pay. Enter your wage and days taken to see the full-pay, half-pay, and unpaid days under Article 31 of Federal Decree-Law No. 33 of 2021.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Sick Leave Calculator 2026',
    description: 'Calculate your sick leave pay tier under UAE Labour Law — first 15 days full pay, next 30 half pay.',
    url,
  },
}

const faq: [string, string][] = [
  ['Do I get paid sick leave during probation?', 'No. Under Article 31, employees are not entitled to paid sick leave during the probationary period, even with a medical certificate. Unpaid sick days may still be granted at the employer\'s discretion.'],
  ['Does sick leave carry over to the next year?', 'No. The 90-day sick leave entitlement resets at the start of each new service year and unused days do not carry over or get paid out.'],
  ['Is sick pay based on basic salary or full wage?', 'Full wage. Unlike gratuity, which is calculated on basic salary only, sick pay under Article 31 is calculated on the employee\'s full wage, including allowances, unless the contract states otherwise.'],
  ['What happens after 90 sick days in one year?', 'The employer may legally terminate the employment if the employee cannot return to work after exhausting the 90-day sick leave entitlement, subject to due process and any applicable end-of-service payments.'],
  ['Do I need a medical certificate?', 'Yes. A medical certificate from a licensed UAE healthcare provider is normally required to claim paid sick leave, and it should be submitted within the timeframe set by your employer\'s HR policy.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Sick Leave Calculator',
    url,
    description: 'Free UAE sick leave calculator for estimating full-pay, half-pay, and unpaid sick days under Article 31 of Federal Decree-Law No. 33 of 2021.',
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
      { '@type': 'ListItem', position: 3, name: 'Sick Leave Calculator', item: url },
    ],
  },
]

export default function SickLeavePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Sick Leave</div>
          <h1>UAE Sick Leave Calculator 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>Work out how many of your sick days are paid in full, paid at half rate, or unpaid — and the exact amount owed for your current leave.</p>
        </div>

        <SickLeaveCalculator />

        <div className="card">
          <h2>How UAE sick leave pay works</h2>
          <p>Under Article 31 of Federal Decree-Law No. 33 of 2021, employees who have completed the probationary period are entitled to up to 90 days of sick leave (continuous or intermittent) per service year. Pay is tiered: the first 15 days are paid in full, the next 30 days at half pay, and the remaining 45 days are unpaid.</p>
          <p>The tier is based on cumulative sick days taken within the service year, not per sick-leave episode — so if you have already used 10 days this year and take 10 more, only 5 of the new days fall in the full-pay tier and the other 5 move into the half-pay tier.</p>
          <p>Sick pay is calculated on the employee&apos;s full wage rather than basic salary only, which is an important difference from the gratuity formula. Employees on probation are not entitled to paid sick leave under the statutory minimum, though individual employers may choose to be more generous.</p>
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
          <h2>Related calculators</h2>
          <p>Also check your <Link href="/">UAE gratuity calculator</Link>, <Link href="/maternity-leave-calculator-uae">maternity leave calculator</Link>, and <Link href="/mohre-annual-leave-calculator">annual leave calculator</Link> if you are reviewing your full entitlements.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: labour rights</span>
              <small>Official worker-rights information for UAE private-sector employees.</small>
            </a>
            <a className="article-link-item" href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer">
              <span>MOHRE: Ministry of Human Resources and Emiratisation</span>
              <small>Official UAE ministry responsible for labour law, complaints, and private-sector employment regulation.</small>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import MaternityLeaveCalculator from '@/components/MaternityLeaveCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/maternity-leave-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Maternity Leave Calculator 2026 | 60 Days Pay Breakdown',
  description: 'Calculate your UAE maternity leave pay. Enter your wage to see the 45 days full pay plus 15 days half pay under Article 30 of Federal Decree-Law No. 33 of 2021 — no minimum service required.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Maternity Leave Calculator 2026',
    description: 'Calculate your maternity leave pay under UAE Labour Law — 45 days full pay, 15 days half pay.',
    url,
  },
}

const faq: [string, string][] = [
  ['Do I need a minimum length of service to get full maternity pay?', 'No. Under the current law, the 60-day maternity leave (45 days full pay, 15 days half pay) applies regardless of how long you have worked for your employer, unlike the older law which tied full pay to service length.'],
  ['Can I take extra leave if I have pregnancy-related complications?', 'Yes. With a medical certificate, an employee can take up to 45 additional days of unpaid leave for illness arising from pregnancy or childbirth, on top of the standard 60-day paid leave.'],
  ['Do I get paid breaks after returning to work?', 'Yes. For six months after returning from maternity leave, mothers are entitled to two paid nursing breaks of up to half an hour each per working day.'],
  ['Does maternity leave affect my gratuity calculation?', 'No. Maternity leave is paid leave and does not count as unpaid leave, so it does not reduce your service period for gratuity purposes.'],
  ['What if I have a miscarriage or stillbirth?', 'Maternity leave entitlement generally still applies if the pregnancy has passed a set number of months as defined by UAE law and supported by a medical certificate — confirm the specifics with HR or MOHRE for your situation.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Maternity Leave Calculator',
    url,
    description: 'Free UAE maternity leave calculator for estimating the 45-day full-pay and 15-day half-pay periods under Article 30 of Federal Decree-Law No. 33 of 2021.',
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
      { '@type': 'ListItem', position: 3, name: 'Maternity Leave Calculator', item: url },
    ],
  },
]

export default function MaternityLeavePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Maternity Leave</div>
          <h1>UAE Maternity Leave Calculator 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>See the exact pay breakdown for your 60-day UAE maternity leave, plus optional extended unpaid leave for pregnancy-related illness.</p>
        </div>

        <MaternityLeaveCalculator />

        <div className="card">
          <h2>How UAE maternity leave pay works</h2>
          <p>Under Article 30 of Federal Decree-Law No. 33 of 2021, a female employee is entitled to 60 calendar days of maternity leave: the first 45 days at full pay and the next 15 days at half pay. Unlike the earlier law, this full entitlement applies regardless of length of service — there is no minimum service requirement to receive the full 45 days at full pay.</p>
          <p>If pregnancy or childbirth causes an illness that prevents the employee from returning to work, an additional period of up to 45 days of unpaid leave can be taken with a supporting medical certificate. After returning to work, mothers are entitled to two paid half-hour nursing breaks per day for six months.</p>
          <p>Maternity pay, like sick pay, is calculated on the employee&apos;s full wage rather than basic salary only. Because maternity leave is paid leave, it does not reduce the service period used to calculate gratuity.</p>
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
          <p>Also check your <Link href="/">UAE gratuity calculator</Link>, <Link href="/sick-leave-calculator-uae">sick leave calculator</Link>, and <Link href="/mohre-annual-leave-calculator">annual leave calculator</Link> if you are reviewing your full entitlements.</p>
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import VisaCostCalculator from '@/components/VisaCostCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/uae-visa-cost-calculator'

export const metadata: Metadata = {
  title: 'UAE Visa Cost Calculator 2026 | Employment Visa Fees Breakdown',
  description: 'Estimate the total cost of a UAE employment visa in 2026 — mainland vs free zone, entry permit vs inside-country status change, Emirates ID, medical, PRO fees, and dependant sponsorship.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Visa Cost Calculator 2026',
    description: 'Estimate mainland vs free zone UAE employment visa costs, including Emirates ID, medical, PRO fees, and dependant sponsorship.',
    url,
    images: ['/uae-visa-cost-calculator-og.png'],
  },
}

const faq: [string, string][] = [
  ['Does my employer have to pay my visa costs?', 'It is common practice for UAE employers to cover most or all of the employee\'s own employment visa cost, but this is not a blanket legal requirement in every case — it depends on your employment contract and company policy. Always ask for this to be confirmed in writing before accepting an offer.'],
  ['How much does it cost to sponsor my spouse or children?', 'Sponsoring a dependant typically costs roughly AED 2,500–4,500 per person, covering their Emirates ID, medical fitness test, mandatory health insurance, and a sponsorship/NOC-style fee. This is usually paid by the employee, not the employer, since dependant visas fall outside standard employment packages.'],
  ['Is a free zone or mainland visa cheaper?', 'Free zone employment visas are generally cheaper, typically landing around AED 3,500–6,000 for a single employee, while mainland visas usually run AED 5,000–7,000 due to higher stamping fees and PRO/labour card processing costs. Exact figures vary by free zone authority and the agent or typing centre used.'],
  ['How long does UAE employment visa processing take?', 'A typical employment visa — from entry permit issuance to Emirates ID collection and visa stamping — takes roughly 2 to 4 weeks, depending on medical test scheduling, document readiness, and whether you are applying from outside the UAE or changing status inside the country.'],
  ['What happens to visa costs if I change jobs?', 'When you move to a new employer, your new employer typically processes and pays for a fresh employment visa under their company or free zone licence. Your previous visa is usually cancelled by your old employer as part of your exit, and the new visa cost is a separate, new expense.'],
  ['Can I get a refund if I leave before my visa tenure ends?', 'Generally no. Visa, Emirates ID, and stamping fees are one-time government and processing charges, not prepaid subscriptions, so there is normally no refund for the unused portion of a 2- or 3-year visa if you leave the UAE or change jobs early.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Visa Cost Calculator',
    url,
    description: 'Free UAE employment visa cost calculator estimating entry permit, Emirates ID, medical, typing centre, stamping, PRO, and health insurance fees for mainland and free zone visas.',
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
      { '@type': 'ListItem', position: 3, name: 'Visa Cost', item: url },
    ],
  },
]

export default function VisaCostCalculatorPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Visa Cost</div>
          <h1>UAE Visa Cost Calculator 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>Work out what a UAE employment visa actually costs — mainland or free zone, entry permit or inside-country status change, plus dependant sponsorship — before you sign an offer letter.</p>
        </div>

        <VisaCostCalculator />

        <div className="card">
          <h2>What does a UAE employment visa actually cost in 2026?</h2>
          <p>A UAE employment visa is not a single fee — it is a bundle of government and processing charges that stack up across several stages. Whether you are negotiating a job offer from abroad or already inside the UAE changing status, it helps to know each line item before you budget or ask your employer what they are covering.</p>
          <p>For a single employee visa, free zone routes typically land around AED 3,500–6,000 in total, while mainland routes usually run higher, around AED 5,000–7,000, mainly because mainland stamping and PRO/labour-card processing fees tend to be higher than free zone equivalents. Multi-year tenures (2–3 years) raise the Emirates ID and stamping components moderately compared to a 1-year visa.</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Component</th><th>Typical AED range</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Entry permit</td><td>AED 200 – 440</td><td>Only if applying from outside the UAE</td></tr>
                <tr><td>Change-of-status fee</td><td>AED 500 – 650</td><td>Only if switching status while inside the UAE</td></tr>
                <tr><td>Emirates ID</td><td>AED 100 – 370</td><td>Per person, scales with 1–3 year validity</td></tr>
                <tr><td>Medical fitness test</td><td>AED 320 – 620</td><td>Per person, mandatory before Emirates ID</td></tr>
                <tr><td>Typing centre / e-form</td><td>AED 150 – 300</td><td>Processing and data entry charges</td></tr>
                <tr><td>Visa stamping fee</td><td>AED 500 – 800</td><td>Higher for mainland and longer tenures</td></tr>
                <tr><td>PRO / immigration service fee</td><td>AED 500 – 2,000+</td><td>Depends on agent; often bundled by employer</td></tr>
                <tr><td>Health insurance</td><td>AED 600 – 1,200</td><td>Per person per year, mandatory</td></tr>
              </tbody>
            </table>
          </div>
          <p>Many employers cover most or all of these costs for the employee&apos;s own visa as standard practice — but dependant sponsorship (spouse, children) is very often left to the employee, and typically adds roughly AED 2,500–4,500 per dependant on top of the employee&apos;s own visa cost.</p>
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
          <p>Also check the <Link href="/salary-calculator">UAE salary calculator</Link> to understand your package, the <Link href="/">UAE gratuity calculator</Link> for end-of-service benefits, the <Link href="/uae-visa-cancellation-gratuity">visa cancellation and gratuity guide</Link> for what happens when you leave, and the companion post <Link href="/blog/uae-employment-visa-cost-breakdown-2026">UAE employment visa cost: full 2026 breakdown</Link>.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: labour rights</span>
              <small>Official worker-rights information for UAE private-sector employees.</small>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

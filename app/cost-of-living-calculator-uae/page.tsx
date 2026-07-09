import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import CostOfLivingCalculator from '@/components/CostOfLivingCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/cost-of-living-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Cost of Living Calculator 2026 | Dubai, Abu Dhabi & Sharjah Budgets',
  description: 'Estimate your real monthly cost of living in the UAE. Get an AED budget breakdown for rent, DEWA, groceries, transport, and school fees across Dubai, Abu Dhabi, and Sharjah.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Cost of Living Calculator 2026',
    description: 'Get a monthly AED budget estimate for Dubai, Abu Dhabi, Sharjah, or other emirates based on your household and lifestyle.',
    url,
    images: ['/cost-of-living-calculator-uae-og.png'],
  },
}

const faq: [string, string][] = [
  ['Is Dubai or Abu Dhabi cheaper to live in?', 'Abu Dhabi is generally slightly cheaper than Dubai, with an average monthly cost of living around AED 12,618 versus roughly AED 13,610 in Dubai. Rent is the biggest driver — a 1-bedroom city-centre apartment runs AED 5,000-6,800 in Abu Dhabi against AED 5,500-7,500 in Dubai — while groceries, transport, and utility costs are broadly similar between the two.'],
  ['How much salary do I need to live comfortably in Dubai?', 'A common rule of thumb is that rent should not exceed 30-35% of your gross monthly salary. For a comfortable single-income household spending around AED 12,000-14,000 a month, a gross salary in the AED 18,000-22,000 range gives enough headroom for rent, savings, and annual flights home without financial strain.'],
  ['Do I need health insurance separately in the UAE?', 'In most cases your employer is legally required to provide basic health insurance in Dubai and Abu Dhabi, but the coverage is often minimal. Many expats top up with a private plan or family cover for dependants, which is why we include an average monthly health insurance line in the budget estimate above.'],
  ['How much is DEWA per month?', 'DEWA (Dubai Electricity and Water Authority) bills for electricity, water, and district cooling typically run AED 600-1,200 a month for a 1-2 bedroom apartment, depending on air-conditioning usage and unit size. Cooling is usually the largest component in summer months, and older buildings without efficient central cooling can push bills higher.'],
  ['Is Sharjah a cheaper alternative to Dubai for commuters?', 'Yes. Sharjah rents run roughly 25% below comparable Dubai units, which is why many families and budget-conscious professionals commute daily via Sharjah-Dubai routes. The trade-off is commute time and toll/fuel costs, so the savings are usually strongest for households with one or two commuters rather than several.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Cost of Living Calculator',
    url,
    description: 'Free UAE cost of living calculator estimating monthly AED budgets for rent, utilities, groceries, transport, health insurance, and school fees across Dubai, Abu Dhabi, Sharjah, and other emirates.',
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
      { '@type': 'ListItem', position: 3, name: 'Cost of Living', item: url },
    ],
  },
]

export default function CostOfLivingPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Cost of Living</div>
          <h1>UAE Cost of Living Calculator 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>Get a realistic monthly AED budget estimate for living in Dubai, Abu Dhabi, Sharjah, or the other emirates — rent, DEWA utilities, groceries, transport, health insurance, and school fees, scaled to your household and lifestyle.</p>
        </div>

        <CostOfLivingCalculator />

        <div className="card">
          <h2>How much does it cost to live in the UAE?</h2>
          <p>Based on 2026 pricing data, the average total cost of living for a household in Dubai runs around <strong>AED 13,610 a month</strong>, while Abu Dhabi comes in roughly AED 1,000 lower at around <strong>AED 12,618 a month</strong>. Rent is consistently the biggest line item in both cities: a 1-bedroom apartment in a central Dubai neighbourhood typically costs AED 5,500-7,500 a month, compared with AED 5,000-6,800 in central Abu Dhabi.</p>
          <p>Sharjah remains the budget alternative for the wider Dubai-Sharjah-Abu Dhabi corridor, with rents running roughly 25% below equivalent Dubai units. Many commuters and families trade a longer daily commute for meaningfully lower housing costs, especially for larger 2-3 bedroom units.</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Category</th><th>Dubai</th><th>Abu Dhabi</th><th>Sharjah</th></tr></thead>
              <tbody>
                <tr><td>Rent (1-2BR, comfortable)</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>AED 6,000-7,500</td><td>AED 5,500-6,800</td><td>AED 4,200-5,200</td></tr>
                <tr><td>Utilities (DEWA/SEWA)</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>AED 800-1,200</td><td>AED 750-1,100</td><td>AED 650-950</td></tr>
                <tr><td>Groceries (household)</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>AED 1,600-2,200</td><td>AED 1,500-2,000</td><td>AED 1,300-1,700</td></tr>
                <tr><td>Transport</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>AED 1,000-1,500</td><td>AED 900-1,400</td><td>AED 800-1,300</td></tr>
              </tbody>
            </table>
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
        </div>

        <div className="card">
          <h2>Related calculators</h2>
          <p>Also check the <Link href="/salary-calculator">UAE salary calculator</Link> to see if your salary covers UAE living costs, the <Link href="/">UAE gratuity calculator</Link> for your end-of-service estimate, and read <Link href="/blog/uae-cost-of-living-2026-what-expats-actually-spend">UAE Cost of Living 2026: What Expats Actually Spend Each Month</Link> for a deeper breakdown.</p>
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

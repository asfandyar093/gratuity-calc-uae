import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import GratuityYearsTable from '@/components/GratuityYearsTable'
import SourcesBox from '@/components/SourcesBox'
import { baseOpenGraph, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const URL = 'https://www.uaegratuitycheck.com/gratuity-by-years-of-service'

const faqs = [
  { q: 'How many days of gratuity do I get per year in the UAE?', a: 'Under Article 51 of Federal Decree-Law No. 33 of 2021: 21 days of basic wage for each of the first five years, then 30 days for each year after that. You need at least one year of continuous service.' },
  { q: 'How much gratuity for 5 years in the UAE?', a: 'Five years earns 105 days of basic wage (5 × 21), which is 3.5 months of basic salary. With AED 10,000 basic, that is AED 35,000.' },
  { q: 'How much gratuity for 10 years in the UAE?', a: 'Ten years earns 255 days (105 for the first five years + 150 for the next five), which is 8.5 months of basic salary. With AED 10,000 basic, that is AED 85,000.' },
  { q: 'Is there a maximum gratuity in the UAE?', a: 'Yes. Article 51(6) says the total gratuity must not exceed two years\u2019 wage. Using basic salary, the cap is reached after about 25.5 years of service (720 days).' },
  { q: 'Do I get gratuity for part of a year?', a: 'Yes. After the first full year, part years are paid pro rata (Article 51(3)). For example, 3.5 years earns 73.5 days.' },
  { q: 'Is gratuity calculated on basic or total salary?', a: 'On basic salary only. The law defines basic wage as excluding allowances such as housing and transport.' },
]

export const metadata: Metadata = {
  title: 'UAE Gratuity by Years of Service 2026 (1–30 Year Table)',
  description: 'UAE gratuity table by years of service: see the end of service amount for 1 to 30 years at common basic salaries, with the 21/30-day rule and the two-year cap explained.',
  alternates: { canonical: URL },
  openGraph: { ...baseOpenGraph, url: URL, title: 'UAE Gratuity by Years of Service 2026 (1–30 Year Table)' },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([{ name: 'Gratuity by years of service', path: '/gratuity-by-years-of-service' }]),
    faqSchema(faqs, `${URL}#faq`, true),
  ],
}

const ALL_YEARS = Array.from({ length: 30 }, (_, i) => i + 1)

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Article 51 · Federal Decree-Law No. 33 of 2021</div>
          <h1>UAE Gratuity by Years of Service<br /><em>1 to 30 year end-of-service table</em></h1>
          <p className="hero-desc">Look up your end-of-service gratuity by years worked and basic salary. Every figure uses the current UAE Labour Law formula for private-sector employees.</p>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>Gratuity by years of service</span>
        </nav>

        <div className="answer-box">
          <p>
            <strong>Quick answer:</strong> UAE gratuity is <strong>21 days of basic salary per year for years 1–5</strong> and <strong>30 days per year after year 5</strong>, once you complete one year of service. That is 0.7 months of basic salary per year at first and 1 month per year later, up to a maximum of two years&apos; wage. For an exact figure with your dates, use the <Link href="/">UAE gratuity calculator</Link>.
          </p>
        </div>

        <div className="sec">
          <div className="sec-hd">Gratuity days and months by years of service</div>
          <div className="card">
            <div className="tbl-wrap">
              <table className="years-table">
                <thead><tr><th>Years</th><th>Gratuity days</th><th>Months of basic salary</th></tr></thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 26, 30].map((y) => {
                    const days = Math.min(y <= 5 ? 21 * y : 105 + 30 * (y - 5), 720)
                    return <tr key={y}><td>{y}</td><td>{days}{days === 720 ? ' (cap)' : ''}</td><td>{(days / 30).toFixed(1)}</td></tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">Gratuity amount by years and basic salary (AED)</div>
          <div className="card">
            <GratuityYearsTable
              years={ALL_YEARS}
              salaries={[3000, 5000, 8000, 10000, 15000, 20000]}
              caption="Daily wage = monthly basic ÷ 30. Totals are capped at 24 months of basic salary (two years' wage, Article 51(6)), which is reached after about 25.5 years."
            />
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <h2>How to read the table</h2>
            <ul>
              <li><strong>Under 1 year:</strong> no gratuity (Article 51(1) requires one year of continuous service).</li>
              <li><strong>Years 1–5:</strong> 21 days of basic wage per year, so each year adds 70% of a month&apos;s basic salary.</li>
              <li><strong>After year 5:</strong> 30 days per year, so each year adds one full month of basic salary.</li>
              <li><strong>Part years:</strong> paid pro rata after the first year (Article 51(3)). Days of unpaid absence are not counted (Article 51(4)).</li>
              <li><strong>Cap:</strong> total gratuity cannot exceed two years&apos; wage (Article 51(6)).</li>
              <li><strong>Payment:</strong> your employer must pay within 14 days of the contract ending (Article 53).</li>
            </ul>
            <p>Resignation no longer reduces gratuity under the current law. If your employer is in DMCC or ADGM, the daily rate is worked out differently: see the <Link href="/calculate-dmcc-gratuity">DMCC gratuity calculator</Link> and the <Link href="/calculate-adgm-gratuity">ADGM gratuity calculator</Link>. Domestic workers are covered by a different law: see the <Link href="/gratuity-calculator/domestic-workers">domestic worker gratuity page</Link>.</p>
            <p>To add unused leave, notice pay and unpaid salary to your gratuity, use the <Link href="/final-settlement-calculator-uae">UAE final settlement calculator</Link>.</p>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">FAQs</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>

        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />
        <Footer />
      </main>
    </>
  )
}

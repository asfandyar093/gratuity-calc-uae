import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import InvestmentCalculator from '@/components/InvestmentCalculator'

export const metadata: Metadata = {
  title: 'UAE Gratuity Investment Calculator 2026 | Compound Growth, FD vs Index vs Real Estate',
  description:
    'Free UAE gratuity investment projection calculator. See how your end-of-service gratuity grows over time with fixed deposits, index funds, or real estate. Includes inflation-adjusted returns and comparison chart.',
  keywords: [
    'UAE gratuity investment calculator',
    'what to do with UAE gratuity',
    'invest UAE end of service gratuity',
    'compound interest calculator UAE',
    'UAE fixed deposit calculator',
    'Dubai real estate investment calculator',
    'gratuity investment projection UAE',
  ],
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-investment-calculator' },
  openGraph: {
    title: 'UAE Gratuity Investment Calculator 2026 | Project Your EOSB Returns',
    description: 'What will your UAE gratuity be worth in 10, 20, or 30 years? Compare fixed deposits, index funds, and real estate with inflation-adjusted projections.',
    url: 'https://www.uaegratuitycheck.com/gratuity-investment-calculator',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Investment Calculator', item: 'https://www.uaegratuitycheck.com/gratuity-investment-calculator' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Gratuity Investment Projection Calculator 2026',
      url: 'https://www.uaegratuitycheck.com/gratuity-investment-calculator',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity investment calculator. Projects compound growth of end-of-service gratuity across fixed deposits, index funds, and real estate with inflation-adjusted returns.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
      featureList: [
        'Compound interest projection with line chart',
        'Inflation-adjusted (real) return calculation',
        'UAE fixed deposit rate benchmarks',
        'Global index fund historical comparisons',
        'Dubai real estate yield estimates',
        'Year-by-year projection table',
        'Side-by-side asset class comparison',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What should I do with my UAE gratuity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common options for UAE expats include UAE bank fixed deposits (5–6% p.a., guaranteed), global index funds (7–10% historical average), and UAE real estate (5–9% rental yield). The right choice depends on your time horizon, risk tolerance, and whether you plan to stay in the UAE. Consult a licensed financial advisor before investing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much will my UAE gratuity be worth in 10 years?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'At 7% annual return, AED 100,000 grows to approximately AED 196,715 after 10 years. At 5.5% (typical UAE FD), it reaches AED 170,814. At 8% (index fund estimate), it reaches AED 215,892. Use this calculator to project any amount across all investment types.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is UAE gratuity enough to invest in Dubai real estate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A studio or 1-bedroom apartment in affordable areas like JVC starts from AED 600,000–900,000. Gratuity from 5–10 years of mid-level employment (AED 150,000–400,000) can serve as a down payment on an off-plan property with payment plans. However, real estate is illiquid and requires ongoing management.',
          },
        },
      ],
    },
  ],
}

export default function GratuityInvestmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Investment Projection · Compound Growth · Updated 2026</div>
          <h1>UAE Gratuity Investment Calculator 2026<br /><em>What Will Your EOSB Be Worth?</em></h1>
          <p className="hero-desc">
            You calculated your gratuity — now see how it grows. Compare fixed deposits, index funds, and real estate with inflation-adjusted projections up to 30 years.
          </p>
          <div className="pills">
            <span className="pill">📈 Compound growth chart</span>
            <span className="pill">🔵 Inflation-adjusted returns</span>
            <span className="pill">🏦 FD vs Index vs Real Estate</span>
            <span className="pill">✓ No data stored · 100% private</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>Investment Calculator</span>
        </nav>

        <div style={{ marginTop: '1.5rem' }}>
          <InvestmentCalculator />
        </div>

        <Footer />
      </main>
    </>
  )
}

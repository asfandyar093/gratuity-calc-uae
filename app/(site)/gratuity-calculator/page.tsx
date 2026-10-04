import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'UAE Free Zone & Industry Gratuity Calculators',
  description:
    'Gratuity calculators for JAFZA, DMCC, DIFC (DEWS), ADGM and SAIF Zone, plus construction, hospitality, healthcare, education, banking and domestic workers. Free and updated for 2026.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
}

const industries = [
  {
    emoji: '🏢',
    name: 'JAFZA',
    href: '/calculate-jafza-gratuity',
    desc: 'Jebel Ali Free Zone calculator for logistics, trading, warehouse, and industrial company employees.',
    salary: 'AED 5,000 – 80,000',
    contract: 'Federal Labour Law',
    color: '#0f766e',
  },
  {
    emoji: '🏙️',
    name: 'DMCC',
    href: '/calculate-dmcc-gratuity',
    desc: 'DMCC (JLT, Uptown Dubai) companies: federal formula using the DMCC EOSB guide daily rate (basic × 12 ÷ 365).',
    salary: 'AED 5,000 – 100,000',
    contract: 'Federal Labour Law',
    color: '#2563eb',
  },
  {
    emoji: '🏙️',
    name: 'DIFC',
    href: '/calculate-difc-gratuity',
    desc: 'DIFC employees: estimate DEWS employer contributions (5.83% / 8.33% of basic salary) that replaced gratuity.',
    salary: 'AED 12,000 – 150,000',
    contract: 'DIFC Employment Law (DEWS)',
    color: '#334155',
    warning: 'DEWS may apply',
  },
  {
    emoji: '🏛️',
    name: 'ADGM',
    href: '/calculate-adgm-gratuity',
    desc: 'ADGM Employment Regulations 2024: annual basic ÷ 365, 50% basic floor, no two-year cap, paid within 21 days.',
    salary: 'AED 12,000 – 150,000',
    contract: 'ADGM Employment Regulations 2024',
    color: '#b45309',
    warning: 'Own rules: ÷365, no cap',
  },
  {
    emoji: '✈️',
    name: 'Sharjah Airport Free Zone',
    href: '/calculate-sharjah-airport-free-zone-gratuity',
    desc: 'SAIF Zone calculator for trading, aviation-adjacent, logistics, and export company employees.',
    salary: 'AED 4,000 – 70,000',
    contract: 'Federal Labour Law',
    color: '#ce1126',
  },
  {
    emoji: '🏗️',
    name: 'Construction',
    href: '/gratuity-calculator/construction',
    desc: 'Laborers, engineers, supervisors & project managers. WPS-registered workers covered.',
    salary: 'AED 1,500 – 40,000',
    contract: 'Fixed-term (federal law)',
    color: '#b45309',
  },
  {
    emoji: '🏨',
    name: 'Hospitality',
    href: '/gratuity-calculator/hospitality',
    desc: 'Hotel staff, F&B, front desk & management. Service charges and tips excluded from EOSB.',
    salary: 'AED 1,800 – 50,000',
    contract: 'Fixed-term (federal law)',
    color: '#2563eb',
  },
  {
    emoji: '🏥',
    name: 'Healthcare',
    href: '/gratuity-calculator/healthcare',
    desc: 'Nurses, doctors, pharmacists & allied health. DHA, MOH, and DoH licensed roles covered.',
    salary: 'AED 5,000 – 90,000',
    contract: 'Fixed-term (federal law)',
    color: '#0284c7',
  },
  {
    emoji: '🏦',
    name: 'Banking & Finance',
    href: '/gratuity-calculator/banking',
    desc: 'Bank employees, analysts & directors. Important: DIFC employees are under DEWS — not standard gratuity.',
    salary: 'AED 4,500 – 120,000',
    contract: 'Fixed-term (federal law)',
    color: '#1a1a2e',
    warning: 'DIFC employees: DEWS applies',
  },
  {
    emoji: '🏠',
    name: 'Domestic Workers',
    href: '/gratuity-calculator/domestic-workers',
    desc: 'Maids, nannies, drivers & cooks. Governed by Federal Decree-Law No. 9 of 2022. Article 22 sets no fixed formula, so we give an estimate.',
    salary: 'AED 800 – 2,800',
    contract: 'Domestic law',
    color: '#374151',
    warning: 'Separate law: no fixed statutory formula',
  },
]

const calculatorHubSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.uaegratuitycheck.com/gratuity-calculator/#webpage',
      'url': 'https://www.uaegratuitycheck.com/gratuity-calculator',
      'name': 'Gratuity Calculator UAE by Industry',
      'description': 'A hub of UAE gratuity calculator tools for free zones, Dubai employment regimes, and industry-specific end-of-service estimates.',
      'isPartOf': { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      'about': [
        { '@type': 'Thing', 'name': 'UAE gratuity calculator' },
        { '@type': 'Thing', 'name': 'Dubai gratuity calculator' },
        { '@type': 'Thing', 'name': 'UAE end of service calculator' },
      ],
      'mainEntity': {
        '@type': 'ItemList',
        'name': 'UAE gratuity calculators',
        'itemListElement': industries.map((industry, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'name': `${industry.name} gratuity calculator`,
          'url': `https://www.uaegratuitycheck.com${industry.href}`,
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'UAE Gratuity Calculator',
          'item': 'https://www.uaegratuitycheck.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Gratuity Calculator UAE by Industry',
          'item': 'https://www.uaegratuitycheck.com/gratuity-calculator',
        },
      ],
    },
  ],
}

export default function GratuityCalculatorIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorHubSchema).replace(/</g, '\\u003c') }}
      />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Gratuity Calculator UAE · Dubai and Free Zones · Updated 2026</div>
          <h1>UAE Free Zone &amp; Industry Gratuity Calculators<br /><em>Choose the right end-of-service calculator</em></h1>
          <p className="hero-desc">
            Use this hub to find the best UAE gratuity calculator for your situation: Dubai free zones (JAFZA, DMCC, DIFC), ADGM, construction, hospitality, healthcare, banking, and domestic worker gratuity rules.
          </p>
          <div className="pills">
            <span className="pill">UAE gratuity calculator by sector</span>
            <span className="pill">JAFZA · DMCC · DIFC · ADGM · SAIF</span>
            <span className="pill">UAE labor law gratuity notes</span>
            <span className="pill">No data stored · private in browser</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>Industry Calculators</span>
        </nav>

        <div className="sec">
          <div className="card">
            <h2>Find the right UAE end of service calculator</h2>
            <p>
              The main <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE gratuity calculator</Link> is best for standard private-sector employees. Use the tools below when your employment is tied to a free zone, industry pattern, or special rule that may affect your UAE labor law gratuity estimate.
            </p>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3>Start here for standard UAE gratuity</h3>
                <ul>
                  <li><Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE gratuity calculator</Link></li>
                  <li><Link href="/how-it-works" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE gratuity formula guide</Link></li>
                  <li><Link href="/uae-labor-law" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE labor law gratuity rules</Link></li>
                </ul>
              </div>
              <div className="mini-card">
                <h3>Check settlement details</h3>
                <ul>
                  <li><Link href="/final-settlement-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE final settlement calculator</Link></li>
                  <li><Link href="/salary-calculator" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Basic salary calculator for UAE gratuity</Link></li>
                  <li><Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>File a MOHRE complaint for unpaid gratuity</Link></li>
                  <li><Link href="/gratuity-by-years-of-service" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Gratuity by years of service table</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* INDUSTRY CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
          {industries.map(ind => (
            <Link
              key={ind.href}
              href={ind.href}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                background: '#fff',
                borderRadius: '18px',
                padding: '1.75rem',
                boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                border: '2px solid var(--gray-200)',
                borderTop: `5px solid ${ind.color}`,
                transition: 'transform 0.15s, box-shadow 0.15s',
                height: '100%',
                cursor: 'pointer',
              }}
              className="industry-card"
              >
                <div style={{ fontSize: '36px', marginBottom: '0.75rem' }}>{ind.emoji}</div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: 'var(--text)', marginBottom: '0.5rem' }}>{ind.name}</div>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 1rem', fontWeight: 500 }}>{ind.desc}</p>

                {ind.warning && (
                  <div style={{ background: '#fff3cd', border: '1.5px solid #f59e0b', borderRadius: '8px', padding: '7px 12px', fontSize: '13px', fontWeight: 800, color: '#92400e', marginBottom: '1rem' }}>
                    ⚠️ {ind.warning}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
                    💰 Typical basic salary: <span style={{ color: 'var(--green-dark)', fontWeight: 900 }}>{ind.salary}</span>
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700 }}>
                    📄 Common contract: {ind.contract}
                  </div>
                </div>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: ind.color, color: '#fff', padding: '10px 18px', borderRadius: '10px', fontSize: '14px', fontWeight: 800 }}>
                  Calculate {ind.name} Gratuity →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ALSO TRY */}
        <div className="sec">
          <div className="card" style={{ background: 'var(--gray-50)' }}>
            <h2 style={{ fontSize: '18px' }}>Other calculators</h2>
            <div style={{ display: 'grid', gap: '10px', marginTop: '0.75rem' }}>
              <Link href="/final-settlement-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                🧾 UAE Final Settlement Calculator — gratuity, leave salary, notice pay and deductions
              </Link>
              <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                🧮 Full UAE Gratuity Calculator — date-based, unpaid leave, accrual chart
              </Link>
              <Link href="/salary-calculator" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                💰 UAE Salary Breakdown Calculator — gross to basic salary, housing &amp; transport split
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

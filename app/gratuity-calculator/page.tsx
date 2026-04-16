import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculators by Industry 2026 — Construction, Healthcare, Banking & More',
  description:
    'Free UAE end-of-service gratuity calculators for every industry. Pre-filled with sector-specific salary benchmarks for construction, hospitality, healthcare, banking, and domestic workers.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
}

const industries = [
  {
    emoji: '🏗️',
    name: 'Construction',
    href: '/gratuity-calculator/construction',
    desc: 'Laborers, engineers, supervisors & project managers. WPS-registered workers covered.',
    salary: 'AED 1,500 – 40,000',
    contract: 'Limited (project-based)',
    color: '#b45309',
  },
  {
    emoji: '🏨',
    name: 'Hospitality',
    href: '/gratuity-calculator/hospitality',
    desc: 'Hotel staff, F&B, front desk & management. Service charges and tips excluded from EOSB.',
    salary: 'AED 1,800 – 50,000',
    contract: 'Limited (2yr renewable)',
    color: '#2563eb',
  },
  {
    emoji: '🏥',
    name: 'Healthcare',
    href: '/gratuity-calculator/healthcare',
    desc: 'Nurses, doctors, pharmacists & allied health. DHA, MOH, and DoH licensed roles covered.',
    salary: 'AED 5,000 – 90,000',
    contract: 'Limited (2yr, license-tied)',
    color: '#0284c7',
  },
  {
    emoji: '🏦',
    name: 'Banking & Finance',
    href: '/gratuity-calculator/banking',
    desc: 'Bank employees, analysts & directors. Important: DIFC employees are under DEWS — not standard gratuity.',
    salary: 'AED 4,500 – 120,000',
    contract: 'Unlimited / Limited',
    color: '#1a1a2e',
    warning: 'DIFC employees: DEWS applies',
  },
  {
    emoji: '🏠',
    name: 'Domestic Workers',
    href: '/gratuity-calculator/domestic-workers',
    desc: 'Maids, nannies, drivers & cooks. Governed by Federal Law No. 10 of 2017 — 14 days per year formula.',
    salary: 'AED 800 – 2,800',
    contract: 'Limited (2yr)',
    color: '#374151',
    warning: 'Separate law — 14 days/yr (not 21/30)',
  },
]

export default function GratuityCalculatorIndexPage() {
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Industry Calculators · UAE Labour Law · Updated 2026</div>
          <h1>UAE Gratuity Calculators by Industry<br /><em>Pre-filled with Sector-Specific Salary Benchmarks</em></h1>
          <p className="hero-desc">
            Choose your industry for a pre-filled calculator with typical salary ranges, contract types, and sector-specific guidance on what counts toward your EOSB.
          </p>
          <div className="pills">
            <span className="pill">✓ 5 industries covered</span>
            <span className="pill">✓ Pre-filled with real salary data</span>
            <span className="pill">✓ Domestic workers — correct 14-day formula</span>
            <span className="pill">✓ No data stored · 100% private</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>Industry Calculators</span>
        </nav>

        {/* INDUSTRY CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
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

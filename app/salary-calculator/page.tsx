import type { Metadata } from 'next'
import SalaryCalculator from '@/components/SalaryCalculator'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'UAE Salary Calculator 2026 | Basic Salary Breakdown, Allowances and Gratuity-Eligible Amount',
  description: 'Free UAE salary breakdown calculator. Enter your gross monthly salary to see your basic salary, housing allowance, transport allowance, and the gratuity-eligible amount. Updated 2026.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/salary-calculator',
  },
  openGraph: {
    title: 'UAE Salary Calculator 2026 | Basic Salary, Allowances and Gratuity-Eligible Amount',
    description: 'Break down your UAE monthly salary into basic, housing, transport, and other allowances. Instantly see how much is gratuity-eligible.',
    url: 'https://www.uaegratuitycheck.com/salary-calculator',
    type: 'website',
  },
}

export default function SalaryCalculatorPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'UAE Salary Breakdown Calculator 2026',
    url: 'https://www.uaegratuitycheck.com/salary-calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description:
      'Free UAE salary breakdown calculator. Enter gross monthly salary to compute basic salary, housing allowance, transport allowance, and the gratuity-eligible amount under UAE Labour Law.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'AED',
    },
    featureList: [
      'Gross to basic salary conversion',
      'Housing allowance calculation',
      'Transport allowance breakdown',
      'Gratuity-eligible amount display',
      'Package composition chart',
    ],
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.uaegratuitycheck.com/#website',
    },
  }

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Free · Updated 2026 · UAE Labour Law</div>
          <h1>UAE Salary Calculator 2026<br /><em>Basic Salary, Allowances &amp; Gratuity-Eligible Amount</em></h1>
          <p className="hero-desc">
            Enter your gross monthly package to instantly see your basic salary, housing and transport allowances,
            and the exact amount that counts toward your end-of-service gratuity.
          </p>
          <div className="pills">
            <span className="pill">✓ Gratuity is based on basic salary only</span>
            <span className="pill">✓ Housing &amp; transport excluded from EOSB</span>
            <span className="pill">✓ No data stored · 100% private</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">

        {/* BREADCRUMB */}
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link>
          {' › '}
          <span>Salary Calculator</span>
        </nav>

        {/* CALCULATOR */}
        <SalaryCalculator />

        {/* WHY IT MATTERS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WHY THIS MATTERS — لماذا هذا مهم</div>
            <h2>Why does basic salary matter for UAE gratuity?</h2>
            <p>
              Under Federal Decree-Law No. 33 of 2021 (Article 51), end-of-service gratuity in the UAE is
              calculated exclusively on <strong>basic salary</strong> — not total package, not gross pay.
              Housing allowance, transport allowance, food allowances, bonuses, and commissions are all
              excluded from the gratuity formula.
            </p>
            <p>
              This means two employees earning the same total monthly package can receive very different
              gratuity amounts depending on how their salary is structured. An employee with a higher
              basic salary percentage will receive more gratuity — even if their gross pay is identical
              to a colleague.
            </p>
            <div className="comp-grid" style={{ marginTop: '1rem' }}>
              <div className="comp-card comp-included">
                <div className="comp-title">✓ COUNTS TOWARD GRATUITY</div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Basic monthly salary (الراتب الأساسي)</span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Fixed base pay in your employment contract</span></div>
              </div>
              <div className="comp-card comp-excluded">
                <div className="comp-title">✗ EXCLUDED FROM GRATUITY</div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Housing allowance (بدل السكن)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Transport allowance (بدل النقل)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Food, utility, or phone allowances</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Overtime, commissions &amp; bonuses</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* TYPICAL STRUCTURE */}
        <div className="sec">
          <div className="sec-hd">Typical UAE salary structures</div>
          <div className="sec-sd">How employers in Dubai, Abu Dhabi, and Sharjah usually split the package</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Salary Component</th>
                  <th>Typical % of Gross</th>
                  <th>Counts for Gratuity?</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Basic salary</td>
                  <td>40 – 65%</td>
                  <td style={{ color: 'var(--green-dark)', fontWeight: 900 }}>✓ Yes</td>
                  <td>The gratuity-eligible component. Check your contract.</td>
                </tr>
                <tr>
                  <td>Housing allowance</td>
                  <td>20 – 35%</td>
                  <td style={{ color: 'var(--text-muted)' }}>✗ No</td>
                  <td>Often the largest allowance in UAE packages.</td>
                </tr>
                <tr>
                  <td>Transport allowance</td>
                  <td>5 – 15%</td>
                  <td style={{ color: 'var(--text-muted)' }}>✗ No</td>
                  <td>Fixed monthly amount; varies by company policy.</td>
                </tr>
                <tr className="hl">
                  <td>Other allowances</td>
                  <td>0 – 10%</td>
                  <td>✗ No</td>
                  <td>Phone, food, education, medical top-ups, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="warn-box" style={{ marginTop: '1rem' }}>
            <strong>Important:</strong> Some contracts label a large portion as &quot;other allowances&quot; to reduce the basic salary — and therefore reduce the gratuity liability. Always verify your basic salary figure in your signed employment contract.
          </div>
        </div>

        {/* HOW TO USE */}
        <div className="sec">
          <div className="sec-hd">How to use this salary calculator</div>
          <div className="steps-3">
            <div className="step-card">
              <div className="step-n">STEP 01</div>
              <h4>Enter your gross salary</h4>
              <p>Type your total monthly package in AED — this is the sum of all components before any deductions.</p>
            </div>
            <div className="step-card">
              <div className="step-n">STEP 02</div>
              <h4>Set your basic salary %</h4>
              <p>Drag the slider or type the percentage. Default is 60%. Check your employment contract for the exact figure.</p>
            </div>
            <div className="step-card">
              <div className="step-n">STEP 03</div>
              <h4>Add allowances (optional)</h4>
              <p>Enter housing, transport, or other allowance amounts if known. Leave blank for automatic proportional split.</p>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="sec">
          <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #006630 0%, #009A44 100%)', color: '#fff', border: 'none' }}>
            <div style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', opacity: 0.85 }}>Next Step</div>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Now calculate your end-of-service gratuity</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              Once you know your basic salary, use the UAE Gratuity Calculator to compute your full
              end-of-service benefit based on your years of service.
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#fff',
                color: 'var(--green-dark)',
                padding: '16px 36px',
                borderRadius: '14px',
                fontWeight: 900,
                fontSize: '18px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            >
              🧮 Open the UAE Gratuity Calculator
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

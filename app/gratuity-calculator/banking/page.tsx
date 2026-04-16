import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

export const metadata: Metadata = {
  title: 'UAE Banking & Finance Gratuity Calculator 2026 — EOSB for Bank Employees & DIFC Notice',
  description:
    'Free UAE gratuity calculator for banking and finance employees. DIFC employees are covered by DEWS — not standard gratuity. Salary benchmarks for tellers, relationship managers, analysts, and directors.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/banking' },
  openGraph: {
    title: 'UAE Banking & Finance Gratuity Calculator 2026 — EOSB for Bank Employees',
    description: 'Calculate UAE end-of-service gratuity for banking sector employees. Important: DIFC employees are under DEWS, not standard UAE gratuity law.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/banking',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

const roles = [
  { role: 'Teller / Customer Service Representative', basic: [4500, 7500], contract: 'Limited / Unlimited', tenure: '2–4 years', note: '' },
  { role: 'Relationship Manager (Retail / SME)', basic: [9000, 18000], contract: 'Unlimited', tenure: '3–8 years', note: 'Commission excluded from gratuity' },
  { role: 'Financial Analyst / Credit Analyst', basic: [10000, 20000], contract: 'Unlimited', tenure: '3–7 years', note: '' },
  { role: 'Branch Manager', basic: [15000, 30000], contract: 'Unlimited', tenure: '5–12 years', note: 'Bonuses excluded from EOSB' },
  { role: 'Investment Banker / VP / AVP', basic: [22000, 55000], contract: 'Unlimited', tenure: '5–15 years', note: 'DIFC employees: see DEWS note below' },
  { role: 'Managing Director / C-Suite', basic: [45000, 120000], contract: 'Unlimited', tenure: '8–20 years', note: 'DIFC employees: see DEWS note below' },
]

function calcG(salary: number, years: number) {
  const d = salary / 30
  return Math.min(years <= 5 ? d * 21 * years : d * 21 * 5 + d * 30 * (years - 5), salary * 24)
}
function fmtAED(n: number) { return 'AED ' + Math.round(n).toLocaleString('en-AE') }

const examples = [
  { role: 'Relationship Manager', salary: 13000, years: 5 },
  { role: 'Branch Manager', salary: 22000, years: 8 },
  { role: 'Investment Banker (VP)', salary: 38000, years: 7 },
  { role: 'Managing Director', salary: 70000, years: 12 },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Calculator', item: `${BASE}/gratuity-calculator` },
        { '@type': 'ListItem', position: 3, name: 'Banking & Finance', item: `${BASE}/gratuity-calculator/banking` },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Banking & Finance Gratuity Calculator 2026',
      url: `${BASE}/gratuity-calculator/banking`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity calculator for banking and finance employees. Includes DIFC DEWS notice for employees working in the Dubai International Financial Centre.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
  ],
}

export default function BankingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 45%, #0f3460 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Banking &amp; Finance Sector · UAE Labour Law · Updated 2026</div>
          <h1>UAE Banking &amp; Finance Gratuity Calculator 2026<br /><em>EOSB for Bank Employees, Analysts &amp; Finance Professionals</em></h1>
          <p className="hero-desc">
            Pre-filled with typical banking sector salaries. <strong>Important:</strong> DIFC employees are covered by the DEWS scheme — not standard UAE gratuity law.
          </p>
          <div className="pills">
            <span className="pill">✓ Commissions excluded from EOSB</span>
            <span className="pill">⚠️ DIFC = DEWS, not standard gratuity</span>
            <span className="pill">✓ ADGM employees — check your contract</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator/banking">Banking &amp; Finance</Link>
        </nav>

        {/* DIFC WARNING — prominent */}
        <div style={{ background: '#fff3cd', border: '3px solid #f59e0b', borderRadius: '16px', padding: '1.5rem 2rem', marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '32px', flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#92400e', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>DIFC Employees — Different Law Applies</div>
            <p style={{ fontSize: '16px', color: '#78350f', fontWeight: 700, margin: 0, lineHeight: 1.7 }}>
              If you work within the <strong>Dubai International Financial Centre (DIFC)</strong> — including banks, law firms, and financial institutions registered under DIFC — you are covered by the <strong>DEWS (DIFC Employee Workplace Savings) scheme</strong>, not standard UAE Federal Labour Law gratuity. DEWS is a different monthly contribution-based system. Check your employment contract or contact your DIFC employer&apos;s HR for your specific entitlements.
            </p>
            <p style={{ fontSize: '15px', color: '#92400e', marginTop: '0.75rem', marginBottom: 0 }}>
              This calculator applies to <strong>non-DIFC banking and finance employees</strong> governed by Federal Decree-Law No. 33 of 2021.
            </p>
          </div>
        </div>

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="12000"
            defaultYears="3"
            defaultContract="unlimited"
            sectorLabel="Banking & Finance Gratuity Calculator"
            sectorEmoji="🏦"
          />
        </div>

        {/* SALARY BENCHMARKS */}
        <div className="sec">
          <div className="sec-hd">Banking &amp; finance salary benchmarks — UAE 2026</div>
          <div className="sec-sd">Basic salary ranges · Applicable outside DIFC jurisdiction</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Basic Salary (AED/month)</th>
                  <th>Contract Type</th>
                  <th>Average Tenure</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {roles.map(r => (
                  <tr key={r.role}>
                    <td>{r.role}</td>
                    <td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
                      {r.basic[0].toLocaleString()} – {r.basic[1].toLocaleString()}
                    </td>
                    <td>{r.contract}</td>
                    <td>{r.tenure}</td>
                    <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '0.75rem', fontWeight: 600 }}>
            Salary ranges are for UAE mainland-registered banks and financial institutions. Figures vary significantly by institution (global investment bank vs. local retail bank) and emirate.
          </p>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <div className="sec-hd">Gratuity calculation examples — banking roles</div>
          <div className="two-col">
            {examples.map(ex => {
              const g = calcG(ex.salary, ex.years)
              return (
                <div className="example-box" key={ex.role}>
                  <div className="ex-title">{ex.role.toUpperCase()}</div>
                  <div className="ex-line">Basic salary: {fmtAED(ex.salary)}/month</div>
                  <div className="ex-line">Service: {ex.years} years</div>
                  {ex.years <= 5
                    ? <div className="ex-line">21 days × {ex.years} yrs = {Math.round(21 * ex.years)} days</div>
                    : <>
                      <div className="ex-line">Yr 1–5: 105 days</div>
                      <div className="ex-line">Yr 6–{ex.years}: {30 * (ex.years - 5)} days</div>
                    </>
                  }
                  <div className="ex-total">Gratuity: {fmtAED(g)}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* DIFC DEWS DEEP DIVE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-amber">DIFC &amp; DEWS — نظام توفير الموظفين في مركز دبي المالي</div>
            <h2>DIFC DEWS — how it differs from standard UAE gratuity</h2>
            <p>
              The DIFC Employee Workplace Savings (DEWS) scheme replaced the lump-sum gratuity system for DIFC employees in February 2020. Under DEWS, employers make <strong>monthly contributions</strong> to individual employee savings accounts — similar to a pension system.
            </p>
            <div className="tbl-wrap">
              <table>
                <thead>
                  <tr><th>Factor</th><th>Standard UAE Gratuity</th><th>DIFC DEWS</th></tr>
                </thead>
                <tbody>
                  <tr><td>Governing law</td><td>Federal Decree-Law No. 33/2021</td><td>DIFC Employment Law No. 2 of 2019</td></tr>
                  <tr><td>Payment timing</td><td>Lump sum at end of service</td><td>Monthly contributions to savings account</td></tr>
                  <tr><td>Contribution rate</td><td>N/A (formula-based at end)</td><td>5.83% of salary (yr 1–5), 8.33% (yr 5+)</td></tr>
                  <tr><td>Employee access</td><td>Only on leaving</td><td>Portable savings account</td></tr>
                  <tr className="hl"><td>Minimum service</td><td>1 year</td><td>No minimum (contributions from day 1)</td></tr>
                  <tr><td>Investment growth</td><td>No</td><td>Yes — invested in Equiom-managed funds</td></tr>
                  <tr><td>Cap</td><td>24 months basic salary</td><td>No statutory cap</td></tr>
                </tbody>
              </table>
            </div>
            <div className="info-box" style={{ marginTop: '1rem' }}>
              <strong>ADGM employees:</strong> Abu Dhabi Global Market (ADGM) employees also operate under separate ADGM employment regulations. If you work in ADGM, verify your gratuity entitlement under ADGM&apos;s specific employment framework rather than Federal Labour Law.
            </div>
          </div>
        </div>

        {/* COMMISSION & BONUS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">COMMISSION &amp; BONUSES — العمولات والمكافآت</div>
            <h2>Are banking commissions included in gratuity?</h2>
            <p>
              No. Under Federal Decree-Law No. 33 of 2021, commissions, sales bonuses, annual performance incentives, and sign-on bonuses are all <strong>excluded from the gratuity calculation</strong>. Even if commission payments are regular and significant — sometimes exceeding basic salary — only the fixed basic salary stated in your employment contract is used.
            </p>
            <p>
              This is particularly important for relationship managers and investment bankers, where variable compensation can represent 30–150% of basic salary. Your gratuity is calculated solely on the base.
            </p>
            <div className="warn-box">
              <strong>Verify your basic salary:</strong> Some banking contracts state a &quot;consolidated salary&quot; — a single figure combining all fixed elements. If your contract does not separately identify a basic salary, MOHRE may treat the full consolidated figure as the basic salary for gratuity purposes. Seek legal clarification if your contract structure is unclear.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Calculate your exact end-of-service gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Use the full calculator with date-based precision, unpaid leave deduction, and a year-by-year accrual chart.
          </p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Open Full Gratuity Calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

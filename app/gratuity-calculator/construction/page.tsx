import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

export const metadata: Metadata = {
  title: 'UAE Construction Gratuity Calculator 2026 | EOSB for Construction Workers and Engineers',
  description:
    'Free UAE gratuity calculator for construction workers, engineers, and site supervisors. Salary benchmarks by role, WPS compliance notes, and pre-filled calculator for the construction sector.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/construction' },
  openGraph: {
    title: 'UAE Construction Gratuity Calculator 2026 | EOSB for Construction Workers and Engineers',
    description: 'Calculate UAE end-of-service gratuity for construction sector employees. Benchmarks for laborers, engineers, supervisors, and project managers.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/construction',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

const roles = [
  { role: 'General Laborer', basic: [1500, 2500], contract: 'Limited (2yr)', tenure: '2–4 years', note: 'Often includes accommodation (excluded from gratuity)' },
  { role: 'Skilled Tradesperson (electrician, plumber, welder)', basic: [2500, 5000], contract: 'Limited (2yr)', tenure: '3–6 years', note: 'Trade certifications affect salary band' },
  { role: 'Foreman / Site Supervisor', basic: [4000, 8000], contract: 'Limited (2yr)', tenure: '4–8 years', note: 'Site allowances excluded from gratuity' },
  { role: 'Civil / Structural Engineer', basic: [7000, 15000], contract: 'Limited (2yr)', tenure: '3–7 years', note: 'Housing often provided; not counted for gratuity' },
  { role: 'Senior Engineer / Engineering Manager', basic: [12000, 25000], contract: 'Limited / Unlimited', tenure: '5–12 years', note: '' },
  { role: 'Project Manager', basic: [18000, 40000], contract: 'Unlimited', tenure: '5–15 years', note: 'Performance bonuses excluded from gratuity' },
]

function calcG(salary: number, years: number) {
  const d = salary / 30
  return Math.min(years <= 5 ? d * 21 * years : d * 21 * 5 + d * 30 * (years - 5), salary * 24)
}

function fmtAED(n: number) {
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}

const examples = [
  { role: 'Skilled Tradesperson', salary: 3500, years: 5 },
  { role: 'Site Supervisor', salary: 6000, years: 7 },
  { role: 'Civil Engineer', salary: 10000, years: 5 },
  { role: 'Project Manager', salary: 22000, years: 10 },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Calculator', item: `${BASE}/gratuity-calculator` },
        { '@type': 'ListItem', position: 3, name: 'Construction', item: `${BASE}/gratuity-calculator/construction` },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Construction Gratuity Calculator 2026',
      url: `${BASE}/gratuity-calculator/construction`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity calculator for construction sector workers and engineers. Pre-filled with industry-typical salaries.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
  ],
}

export default function ConstructionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #78350f 0%, #b45309 45%, #d97706 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Construction Sector · UAE Labour Law · Updated 2026</div>
          <h1>UAE Construction Gratuity Calculator 2026<br /><em>EOSB for Workers, Engineers &amp; Project Managers</em></h1>
          <p className="hero-desc">
            Pre-filled with typical construction sector salaries. Calculate your end-of-service gratuity across all roles — from laborer to project director.
          </p>
          <div className="pills">
            <span className="pill">✓ WPS-registered employees covered</span>
            <span className="pill">✓ Site allowances excluded from EOSB</span>
            <span className="pill">✓ Project-based limited contracts supported</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator/construction">Construction</Link>
        </nav>

        {/* INDUSTRY NOTE */}
        <div className="warn-box" style={{ marginTop: '1rem' }}>
          <strong>Construction sector note:</strong> UAE construction contracts are almost exclusively <strong>limited (fixed-term)</strong> contracts, often project-based. Site allowances, accommodation, and food benefits provided by the employer are <strong>not counted</strong> toward gratuity — only your basic salary in the employment contract applies.
        </div>

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="5000"
            defaultYears="3"
            defaultContract="limited"
            sectorLabel="Construction Sector Gratuity Calculator"
            sectorEmoji="🏗️"
          />
        </div>

        {/* SALARY BENCHMARKS */}
        <div className="sec">
          <div className="sec-hd">Construction sector salary benchmarks — UAE 2026</div>
          <div className="sec-sd">Basic salary ranges by role · Gratuity is calculated on basic salary only</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Basic Salary (AED/month)</th>
                  <th>Typical Contract</th>
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
          <div className="info-box" style={{ marginTop: '1rem' }}>
            UAE construction employs over 1.2 million workers — the largest sector by workforce. Most workers are registered under the <strong>Wage Protection System (WPS)</strong>, and employers must pay gratuity within 14 days of the last working day under Federal Decree-Law No. 33 of 2021.
          </div>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <div className="sec-hd">Gratuity calculation examples — construction roles</div>
          <div className="two-col">
            {examples.map(ex => {
              const g = calcG(ex.salary, ex.years)
              return (
                <div className="example-box" key={ex.role}>
                  <div className="ex-title">{ex.role.toUpperCase()}</div>
                  <div className="ex-line">Basic salary: {fmtAED(ex.salary)}/month</div>
                  <div className="ex-line">Years of service: {ex.years} years</div>
                  <div className="ex-line">Daily wage: {fmtAED(ex.salary / 30)}</div>
                  {ex.years <= 5
                    ? <div className="ex-line">21 days × {ex.years} yrs = {Math.round(21 * ex.years)} days</div>
                    : <>
                      <div className="ex-line">Yr 1–5: 21 × 5 = 105 days</div>
                      <div className="ex-line">Yr 6–{ex.years}: 30 × {ex.years - 5} = {30 * (ex.years - 5)} days</div>
                    </>
                  }
                  <div className="ex-total">Gratuity: {fmtAED(g)}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CONTRACT TYPES */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-amber">CONTRACT TYPES — عقود قطاع البناء</div>
            <h2>Common contract types in UAE construction</h2>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3>Limited (Fixed-Term) Contract</h3>
                <p>Most common in construction. Typically 2 years, often project-tied. Gratuity is payable at project completion, non-renewal, or early termination by employer. Since the 2022 labour law reform, resignation from a limited contract does not reduce gratuity entitlement.</p>
              </div>
              <div className="mini-card">
                <h3>Unlimited Contract</h3>
                <p>Used for senior roles (engineering managers, project directors). No fixed end date. Gratuity accrues continuously and is paid on termination or resignation after one full year of service.</p>
              </div>
            </div>
            <div className="warn-box" style={{ marginTop: '1rem' }}>
              <strong>Project completion:</strong> When a limited contract ends because the project is complete, this counts as contract expiry — full gratuity is owed after one year of service. Your employer cannot classify it as resignation to avoid paying.
            </div>
          </div>
        </div>

        {/* WPS NOTE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WPS &amp; GRATUITY RIGHTS — نظام حماية الأجور</div>
            <h2>Wage Protection System and gratuity in construction</h2>
            <p>
              All UAE construction companies with 50 or more employees are required to be registered under the <strong>Wage Protection System (WPS)</strong>, administered by MOHRE. WPS ensures salaries are paid on time via bank transfers — creating a payroll record that can support gratuity claims.
            </p>
            <p>
              If your employer fails to pay your gratuity within 14 days of your last working day, you can file a complaint directly at <strong>mohre.gov.ae</strong> or visit any MOHRE Happiness Centre. Construction employers with unresolved gratuity complaints risk trade license suspension and a ban on hiring new employees.
            </p>
            <div className="info-box">
              <strong>Accommodation is not salary:</strong> Many construction employers provide free accommodation on or near the site. This has zero monetary value for gratuity purposes — your gratuity is based only on the basic salary figure in your signed employment contract.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Use the full UAE Gratuity Calculator</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Need more options — date-based calculation, unpaid leave deduction, or accrual chart? Use the full calculator on the homepage.
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

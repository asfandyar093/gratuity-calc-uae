import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

export const metadata: Metadata = {
  title: 'UAE Healthcare Gratuity Calculator 2026 — EOSB for Doctors, Nurses & Allied Health',
  description:
    'Free UAE gratuity calculator for healthcare workers. Salary benchmarks for nurses, doctors, pharmacists, and allied health professionals. DHA, MOH, and DoH licensing context included.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/healthcare' },
  openGraph: {
    title: 'UAE Healthcare Gratuity Calculator 2026 — EOSB for Doctors, Nurses & Allied Health',
    description: 'Calculate UAE end-of-service gratuity for healthcare professionals. Pre-filled with DHA/MOH-licensed role salaries across Dubai and Abu Dhabi.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/healthcare',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

const roles = [
  { role: 'Registered Nurse (DHA/MOH/DoH licensed)', basic: [5000, 8500], contract: 'Limited (2yr)', tenure: '3–8 years', authority: 'DHA / MOH / DoH' },
  { role: 'Allied Health — Physio, OT, Radiographer', basic: [6000, 11000], contract: 'Limited (2yr)', tenure: '3–7 years', authority: 'DHA / MOH / DoH' },
  { role: 'Laboratory Technician / Medical Technologist', basic: [5000, 9000], contract: 'Limited (2yr)', tenure: '3–6 years', authority: 'DHA / MOH' },
  { role: 'Pharmacist', basic: [8000, 14000], contract: 'Limited (2yr)', tenure: '3–7 years', authority: 'DHA / MOH / DoH' },
  { role: 'General Practitioner (GP)', basic: [12000, 22000], contract: 'Limited (2yr)', tenure: '3–8 years', authority: 'DHA / MOH / DoH' },
  { role: 'Specialist / Consultant', basic: [20000, 65000], contract: 'Unlimited / Limited', tenure: '5–15 years', authority: 'DHA / MOH / DoH' },
  { role: 'Medical Director / Department Head', basic: [35000, 90000], contract: 'Unlimited', tenure: '7–20 years', authority: 'DHA / DoH' },
]

function calcG(salary: number, years: number) {
  const d = salary / 30
  return Math.min(years <= 5 ? d * 21 * years : d * 21 * 5 + d * 30 * (years - 5), salary * 24)
}
function fmtAED(n: number) { return 'AED ' + Math.round(n).toLocaleString('en-AE') }

const examples = [
  { role: 'Registered Nurse', salary: 6500, years: 7 },
  { role: 'Pharmacist', salary: 11000, years: 5 },
  { role: 'General Practitioner', salary: 16000, years: 6 },
  { role: 'Specialist Consultant', salary: 35000, years: 10 },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Calculator', item: `${BASE}/gratuity-calculator` },
        { '@type': 'ListItem', position: 3, name: 'Healthcare', item: `${BASE}/gratuity-calculator/healthcare` },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Healthcare Gratuity Calculator 2026',
      url: `${BASE}/gratuity-calculator/healthcare`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity calculator for healthcare professionals. Pre-filled with DHA, MOH, and DoH-licensed role salary benchmarks.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
  ],
}

export default function HealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #0f4c6e 0%, #0284c7 45%, #38bdf8 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Healthcare Sector · DHA / MOH / DoH · Updated 2026</div>
          <h1>UAE Healthcare Gratuity Calculator 2026<br /><em>EOSB for Doctors, Nurses &amp; Allied Health Professionals</em></h1>
          <p className="hero-desc">
            Pre-filled with typical DHA, MOH, and DoH-licensed role salaries. Calculate your end-of-service benefit across all healthcare roles in Dubai, Abu Dhabi, and Northern Emirates.
          </p>
          <div className="pills">
            <span className="pill">✓ DHA / MOH / DoH licensed roles covered</span>
            <span className="pill">✓ 2-year contract renewals supported</span>
            <span className="pill">✓ Housing allowance excluded from EOSB</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator/healthcare">Healthcare</Link>
        </nav>

        {/* SECTOR NOTE */}
        <div className="info-box" style={{ marginTop: '1rem' }}>
          <strong>Healthcare sector note:</strong> Most UAE healthcare contracts are <strong>2-year limited contracts</strong> tied to your DHA, MOH, or DoH professional license. When your contract expires or is not renewed, you are entitled to full gratuity after completing one year of service. License renewal is not the same as contract renewal — always check your employment contract separately.
        </div>

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="7000"
            defaultYears="3"
            defaultContract="limited"
            sectorLabel="Healthcare Sector Gratuity Calculator"
            sectorEmoji="🏥"
          />
        </div>

        {/* SALARY BENCHMARKS */}
        <div className="sec">
          <div className="sec-hd">Healthcare salary benchmarks — UAE 2026</div>
          <div className="sec-sd">Basic salary ranges by role · DHA (Dubai), MOH (Northern Emirates), DoH (Abu Dhabi)</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Basic Salary (AED/month)</th>
                  <th>Contract Type</th>
                  <th>Average Tenure</th>
                  <th>Licensing Authority</th>
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
                    <td style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{r.authority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            UAE employs over 100,000 licensed healthcare professionals in the private sector. Salary ranges vary significantly between Dubai (DHA), Abu Dhabi (DoH), and Northern Emirates (MOH), as well as between hospital groups (private chains vs. single facilities) and specialty.
          </div>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <div className="sec-hd">Gratuity calculation examples — healthcare roles</div>
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

        {/* LICENSING & CONTRACTS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">LICENSING AUTHORITIES — هيئات الترخيص الصحي</div>
            <h2>UAE healthcare licensing authorities and gratuity</h2>
            <p>
              Healthcare professionals in the UAE must hold a valid license from one of the three main regulatory authorities. Your <strong>employment contract is separate from your professional license</strong> — and gratuity rights are governed by your employment contract, not your license.
            </p>
            <div className="steps-3" style={{ marginTop: '1rem' }}>
              <div className="step-card">
                <div className="step-n">DUBAI</div>
                <h4>DHA — Dubai Health Authority</h4>
                <p>Licenses healthcare professionals working in Dubai (excluding DIFC and DHCC). DHA-licensed employees at private hospitals and clinics are covered by standard UAE Labour Law gratuity.</p>
              </div>
              <div className="step-card">
                <div className="step-n">ABU DHABI</div>
                <h4>DoH — Department of Health</h4>
                <p>Formerly HAAD (Health Authority Abu Dhabi). Licenses healthcare workers in Abu Dhabi emirate. SEHA (public hospitals) employees may have different terms — verify your contract type.</p>
              </div>
              <div className="step-card">
                <div className="step-n">NORTHERN EMIRATES</div>
                <h4>MOH — Ministry of Health</h4>
                <p>Covers Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Also licenses professionals in private practice across all emirates outside DHA and DoH jurisdiction.</p>
              </div>
            </div>
            <div className="warn-box" style={{ marginTop: '1rem' }}>
              <strong>Non-renewal ≠ termination:</strong> If your hospital declines to renew your contract (often due to license expiry or restructuring), this is typically treated as <strong>contract expiry</strong> under UAE law — entitling you to full gratuity if you have completed one year of service. Employers cannot withhold gratuity by citing license non-renewal as a pretext for resignation.
            </div>
          </div>
        </div>

        {/* CONTRACT STRUCTURE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">CONTRACT STRUCTURE — هيكل العقد الصحي</div>
            <h2>Typical healthcare salary package structure</h2>
            <p>Healthcare packages in the UAE generally follow a structured split:</p>
            <div className="comp-grid" style={{ marginTop: '1rem' }}>
              <div className="comp-card comp-included">
                <div className="comp-title">✓ COUNTS TOWARD GRATUITY</div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Basic monthly salary</span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Typically 50–65% of total package</span></div>
              </div>
              <div className="comp-card comp-excluded">
                <div className="comp-title">✗ EXCLUDED FROM GRATUITY</div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Housing allowance (25–35% of package)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Transport allowance</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Continuation of medical insurance (employer-provided)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Air ticket allowance (annual)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Performance/productivity bonuses</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>On-call or night shift premiums</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Calculate your exact end-of-service gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Use the full calculator for date-based precision, unpaid leave deduction, and a year-by-year accrual chart.
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

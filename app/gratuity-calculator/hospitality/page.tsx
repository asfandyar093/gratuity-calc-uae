import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

export const metadata: Metadata = {
  title: 'UAE Hospitality Gratuity Calculator 2026 | EOSB for Hotel and F&B Employees',
  description:
    'Free UAE gratuity calculator for hotel staff, F&B employees, and hospitality workers. Service charges and tips are excluded from EOSB. Salary benchmarks and pre-filled calculator for the UAE hospitality sector.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/hospitality' },
  openGraph: {
    title: 'UAE Hospitality Gratuity Calculator 2026 | Hotel and F&B Staff EOSB',
    description: 'Calculate UAE end-of-service gratuity for hospitality sector employees. Service charges, tips, and accommodation are excluded from the gratuity calculation.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/hospitality',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

const roles = [
  { role: 'Housekeeping / Room Attendant', basic: [1800, 2800], contract: 'Limited (2yr)', tenure: '2–4 years', note: 'Accommodation usually provided; not counted for gratuity' },
  { role: 'F&B Service Staff (waiter, bartender)', basic: [2200, 4000], contract: 'Limited (2yr)', tenure: '2–5 years', note: 'Service charges & tips excluded from EOSB' },
  { role: 'Front Desk / Guest Relations', basic: [3000, 5500], contract: 'Limited (2yr)', tenure: '2–5 years', note: '' },
  { role: 'Supervisor / Team Leader', basic: [4000, 7000], contract: 'Limited (2yr)', tenure: '4–8 years', note: '' },
  { role: 'F&B Manager / Restaurant Manager', basic: [7000, 15000], contract: 'Unlimited', tenure: '4–10 years', note: 'Performance bonuses excluded from EOSB' },
  { role: 'Hotel General Manager / Director', basic: [18000, 50000], contract: 'Unlimited', tenure: '5–15 years', note: '' },
]

function calcG(salary: number, years: number) {
  const d = salary / 30
  return Math.min(years <= 5 ? d * 21 * years : d * 21 * 5 + d * 30 * (years - 5), salary * 24)
}

function fmtAED(n: number) { return 'AED ' + Math.round(n).toLocaleString('en-AE') }

const examples = [
  { role: 'F&B Staff', salary: 3000, years: 4 },
  { role: 'Front Desk Agent', salary: 4500, years: 5 },
  { role: 'Supervisor', salary: 6000, years: 7 },
  { role: 'F&B Manager', salary: 10000, years: 8 },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Calculator', item: `${BASE}/gratuity-calculator` },
        { '@type': 'ListItem', position: 3, name: 'Hospitality', item: `${BASE}/gratuity-calculator/hospitality` },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Hospitality Gratuity Calculator 2026',
      url: `${BASE}/gratuity-calculator/hospitality`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity calculator for hospitality sector employees. Service charges, tips, and accommodation are excluded from EOSB calculation.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
  ],
}

export default function HospitalityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #1e3a5f 0%, #2563eb 45%, #3b82f6 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Hospitality Sector · UAE Labour Law · Updated 2026</div>
          <h1>UAE Hospitality Gratuity Calculator 2026<br /><em>EOSB for Hotel, F&amp;B &amp; Guest Services Staff</em></h1>
          <p className="hero-desc">
            Service charges and tips are <strong>not included</strong> in your gratuity. Pre-filled with typical hotel and F&amp;B salaries across Dubai, Abu Dhabi, and Sharjah.
          </p>
          <div className="pills">
            <span className="pill">✓ Service charges excluded from EOSB</span>
            <span className="pill">✓ Tips not counted toward gratuity</span>
            <span className="pill">✓ Accommodation benefit excluded</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator/hospitality">Hospitality</Link>
        </nav>

        {/* KEY WARNING */}
        <div className="warn-box" style={{ marginTop: '1rem' }}>
          <strong>Critical for hospitality workers:</strong> Service charges, tips, gratuities collected from guests, and accommodation provided by the hotel are all <strong>excluded</strong> from your UAE end-of-service gratuity calculation. Only your fixed monthly basic salary in your employment contract counts.
        </div>

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="3500"
            defaultYears="3"
            defaultContract="limited"
            sectorLabel="Hospitality Sector Gratuity Calculator"
            sectorEmoji="🏨"
          />
        </div>

        {/* SALARY BENCHMARKS */}
        <div className="sec">
          <div className="sec-hd">Hospitality salary benchmarks — UAE 2026</div>
          <div className="sec-sd">Basic salary ranges by role · Dubai, Abu Dhabi &amp; Sharjah hotels</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Basic Salary (AED/month)</th>
                  <th>Typical Contract</th>
                  <th>Average Tenure</th>
                  <th>Gratuity Note</th>
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
            UAE hospitality employs over 500,000 workers. Dubai alone has 800+ hotels. Salaries vary by hotel brand (5-star vs. budget), emirate, and years of experience.
          </p>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <div className="sec-hd">Gratuity calculation examples — hospitality roles</div>
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

        {/* SERVICE CHARGE EXPLAINER */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-red">SERVICE CHARGES &amp; TIPS — رسوم الخدمة والإكراميات</div>
            <h2>Are service charges included in UAE gratuity?</h2>
            <p>
              No. Under Federal Decree-Law No. 33 of 2021, <strong>only basic salary</strong> is used for the gratuity calculation. The following are explicitly excluded:
            </p>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3 style={{ color: 'var(--red-dark)' }}>✗ Excluded from gratuity</h3>
                <ul>
                  <li><strong>Service charges</strong> — even if distributed monthly as part of pay</li>
                  <li><strong>Tips</strong> from guests — regardless of how they are paid out</li>
                  <li><strong>Accommodation</strong> — hotel-provided room or staff housing</li>
                  <li><strong>Meal benefits</strong> — staff cafeteria or food allowance</li>
                  <li><strong>Performance bonuses</strong> — seasonal or annual incentive pay</li>
                  <li><strong>Overtime</strong> — extra hours worked beyond contract</li>
                </ul>
              </div>
              <div className="mini-card">
                <h3 style={{ color: 'var(--green-dark)' }}>✓ Included in gratuity</h3>
                <ul>
                  <li><strong>Basic monthly salary</strong> — fixed amount in employment contract</li>
                  <li>This is typically the <em>only</em> component for hospitality workers</li>
                </ul>
                <div className="info-box" style={{ marginTop: '1rem', fontSize: '14px' }}>
                  Your payslip may show multiple components. Your gratuity is calculated only on the line labelled &quot;Basic Salary&quot; or &quot;Basic Pay&quot; in your contract.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTRACT TYPES */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">CONTRACT TYPES — أنواع عقود الضيافة</div>
            <h2>Common contract arrangements in UAE hospitality</h2>
            <p>
              Most hotel and F&amp;B employees in the UAE are on <strong>2-year limited contracts</strong>, renewable annually. International hotel chains (Marriott, Hilton, Accor, IHG) typically offer structured packages with clear basic salary, housing, and transport components. Boutique restaurants and smaller properties may have less structured packages.
            </p>
            <div className="two-col" style={{ marginTop: '0.75rem' }}>
              <div className="step-card">
                <div className="step-n">COMMON STRUCTURE</div>
                <h4>Hotel group employee</h4>
                <p>Basic salary + housing allowance + transport allowance. Accommodation sometimes provided in lieu of housing allowance. Service charge distributed separately as a top-up.</p>
              </div>
              <div className="step-card">
                <div className="step-n">IMPORTANT NOTE</div>
                <h4>All-inclusive contracts</h4>
                <p>Some hospitality contracts list one total &quot;gross salary&quot; figure. Confirm with HR what percentage is designated as basic salary — this directly determines your gratuity amount.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Calculate your exact gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Use the full calculator for date-based precision, unpaid leave deductions, and a year-by-year accrual chart.
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

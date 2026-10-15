import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import IndustryCalculator from '@/components/IndustryCalculator'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hospitality Gratuity Calculator UAE: Hotels & Restaurants',
  description: 'Gratuity calculator for UAE hotel, restaurant and F&B staff: why service charge and tips are excluded, worked examples by role, and settlement checks.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/hospitality' },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Hospitality Gratuity Calculator 2026 | Hotel and F&B Staff EOSB',
    description: 'Calculate UAE end-of-service gratuity for hospitality sector employees. Service charges, tips, and accommodation are excluded from the gratuity calculation.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/hospitality',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

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

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Hospitality Sector · UAE Labour Law · Updated 2026</div>
          <h1>Hospitality Gratuity Calculator UAE<br /><em>EOSB for Hotel, F&amp;B &amp; Guest Services Staff</em></h1>
          <p className="hero-desc">
            Service charges and tips are <strong>not included</strong> in your gratuity. Use the basic salary from your contract.
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

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="3500"
            defaultYears="3"
            sectorLabel="Hospitality Sector Gratuity Calculator"
            sectorEmoji="🏨"
          />
        </div>

        {/* KEY WARNING */}
        <div className="warn-box" style={{ marginTop: '1.5rem' }}>
          <strong>Critical for hospitality workers:</strong> Service charges, tips, gratuities collected from guests, and accommodation provided by the hotel are all <strong>excluded</strong> from your UAE end-of-service gratuity calculation. Only your fixed monthly basic salary in your employment contract counts.
        </div>

        {/* SHIFTS AND SEASONAL */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-amber">SPLIT SHIFTS AND SEASONAL WORK</div>
            <h2>Split shifts, seasonal contracts and continuous service</h2>
            <p>Hotel and restaurant work often runs in split shifts. Article 18 says a worker may not work more than 5 consecutive hours without a break of at least one hour in total, and that establishments working in shifts arrange hours and breaks according to the job category. Overtime under Article 19 is at least 25% on top of the basic wage, and workers on shifts are excluded from the 50% night clause for 10 pm to 4 am. None of that overtime counts towards gratuity.</p>
            <p>Gratuity needs one year of continuous service, and the law defines continuous service as uninterrupted service with the same employer or its legal successor. If a seasonal contract is renewed without a break, service continues. If there is a gap between seasons, ask HR in writing how the gap is treated, and keep every contract and visa page. Days of unpaid absence do not count towards the service period (Article 51(4)).</p>
          </div>
        </div>


        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <h2 className="sec-hd">Gratuity calculation examples, hospitality roles</h2>
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
                      <div className="ex-line">Yr 1 to 5: 105 days</div>
                      <div className="ex-line">Yr 6 to {ex.years}: {30 * (ex.years - 5)} days</div>
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
            <div className="badge bg-red">SERVICE CHARGES &amp; TIPS</div>
            <h2>Are service charges included in UAE gratuity?</h2>
            <p>
              No. Under Federal Decree-Law No. 33 of 2021, gratuity is calculated on the <strong>basic wage</strong>, which the law defines as the wage in the contract excluding allowances and benefits in kind. The law does not mention tips or service charges, but they are not a basic wage stipulated in your contract, so they are left out:
            </p>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3 style={{ color: 'var(--red-dark)' }}>✗ Excluded from gratuity</h3>
                <ul>
                  <li><strong>Service charges</strong>, even if distributed monthly as part of pay</li>
                  <li><strong>Tips</strong> from guests, regardless of how they are paid out</li>
                  <li><strong>Accommodation</strong>, hotel-provided room or staff housing</li>
                  <li><strong>Meal benefits</strong>, staff cafeteria or food allowance</li>
                  <li><strong>Performance bonuses</strong>, seasonal or annual incentive pay</li>
                  <li><strong>Overtime</strong>, extra hours worked beyond contract</li>
                </ul>
              </div>
              <div className="mini-card">
                <h3 style={{ color: 'var(--green-dark)' }}>✓ Included in gratuity</h3>
                <ul>
                  <li><strong>Basic monthly salary</strong>, fixed amount in employment contract</li>
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
            <div className="badge bg-teal">CONTRACT TYPES</div>
            <h2>Common contract arrangements in UAE hospitality</h2>
            <p>
              Every UAE employment contract is fixed term since February 2022 (Article 68), and hospitality contracts are often renewed. Packages usually split pay into basic salary and allowances, and the split decides your gratuity. Smaller venues may state only one total figure, so check how your contract names basic salary.
            </p>
            <div className="two-col" style={{ marginTop: '0.75rem' }}>
              <div className="step-card">
                <div className="step-n">COMMON STRUCTURE</div>
                <h4>Hotel group employee</h4>
                <p>Basic salary plus housing and transport allowances. Accommodation may be provided instead of a housing allowance. A service charge may be paid separately as a top up.</p>
              </div>
              <div className="step-card">
                <div className="step-n">IMPORTANT NOTE</div>
                <h4>All-inclusive contracts</h4>
                <p>Some hospitality contracts list one total &quot;gross salary&quot; figure. Ask HR in writing which part is basic salary, because that part decides your gratuity amount.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="sec">
          <div className="card" style={{ background: 'var(--gray-50)' }}>
            <h2 style={{ fontSize: '18px' }}>Related guides for UAE hospitality workers</h2>
            <div style={{ display: 'grid', gap: '10px', marginTop: '0.75rem' }}>
              <Link href="/gratuity-by-years-of-service" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                📊 UAE gratuity by years of service, 1 to 30 year table
              </Link>
              <Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                💰 Basic Salary vs Allowances, what counts toward your UAE gratuity
              </Link>
              <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                ⚖️ How to File a MOHRE Complaint for Unpaid Gratuity
              </Link>
              <Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                🧾 UAE Final Settlement Checklist, what to verify before signing
              </Link>
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

        <RelatedCalculators path="/gratuity-calculator/hospitality" />
        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import IndustryCalculator from '@/components/IndustryCalculator'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Healthcare Workers 2026 (Free)',
  description:
    'Gratuity estimate for nurses, doctors, pharmacists and allied health staff in the UAE, with notes on shift pay, allowances and licensing authorities.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/healthcare' },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Gratuity Calculator for Healthcare Workers 2026 (Free)',
    description: 'Calculate UAE end of service gratuity for healthcare professionals in Dubai, Abu Dhabi and the Northern Emirates.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/healthcare',
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
      description: 'Free UAE gratuity calculator for healthcare professionals, covering basic salary, shift allowances and licensing authorities.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
  ],
}

export default function HealthcarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Healthcare Sector · DHA / MOH / DoH · Updated 2026</div>
          <h1>UAE Healthcare Gratuity Calculator 2026<br /><em>EOSB for Doctors, Nurses &amp; Allied Health Professionals</em></h1>
          <p className="hero-desc">
            Calculate your end of service benefit for healthcare roles in Dubai, Abu Dhabi and the Northern Emirates, and see how shift pay and allowances are treated.
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

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="7000"
            defaultYears="3"
            sectorLabel="Healthcare Sector Gratuity Calculator"
            sectorEmoji="🏥"
          />
        </div>

        {/* SECTOR NOTE */}
        <div className="info-box" style={{ marginTop: '1.5rem' }}>
          <strong>Healthcare sector note:</strong> Healthcare contracts are fixed term, and many are tied to a professional licence. Under Article 51, gratuity depends on one year of continuous service and on your last basic wage, not on why the contract ended, so non renewal does not remove it. Licence renewal is separate from contract renewal, so check your employment contract on its own.
        </div>

        {/* SHIFTS AND ALLOWANCES */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">SHIFTS AND ALLOWANCES</div>
            <h2>Shift pay, on call pay and allowances in healthcare</h2>
            <p>Gratuity is worked out on your last basic wage. The labour law defines basic wage as the wage stipulated in your contract for the work, which does not include other allowances or benefits in kind (Article 1 and Article 51). In healthcare, a lot of pay sits in allowances, so the split in your contract decides your gratuity.</p>
            <div className="tbl-wrap">
            <table>
              <thead><tr><th>Pay item</th><th>Counts towards gratuity?</th><th>Why</th></tr></thead>
              <tbody>
                <tr><td>Basic wage in the contract</td><td>Yes</td><td>Article 51 uses the last basic wage</td></tr>
                <tr><td>Housing, transport and other allowances</td><td>No</td><td>Excluded by the definition of basic wage</td></tr>
                <tr><td>Shift, night or on call allowance</td><td>No, if the contract lists it as an allowance</td><td>It is an allowance, not basic wage</td></tr>
                <tr><td>Overtime pay</td><td>No</td><td>It is paid for extra hours (Article 19)</td></tr>
                <tr><td>Bonus or share of results</td><td>No</td><td>A percentage of sales or profit is part of wage but not basic wage</td></tr>
              </tbody>
            </table>
          </div>
            <p style={{ marginTop: '1rem' }}>If your contract lists one total figure without naming a basic wage, ask HR in writing which part is basic before you resign or sign a settlement.</p>
            <p>Hours rules matter for shift staff. Article 18 says a worker may not work more than 5 consecutive hours without a break of at least one hour in total, and that establishments working in shifts arrange hours and breaks by job category. Article 19 allows up to 2 hours of overtime a day, paid at the basic wage plus at least 25%. Overtime between 10 pm and 4 am earns at least 50% extra, but workers on shifts are excluded from that night clause. Work on the weekend day set in your contract earns another day off or that day&apos;s wage plus at least 50% of basic wage. Use the <Link href="/overtime-calculator-uae">overtime calculator</Link> to check a pay slip.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">PRIVATE OR GOVERNMENT</div>
            <h2>Private hospital or government hospital?</h2>
            <p>Federal Decree-Law No. 33 of 2021 applies to establishments, employers and workers in the UAE private sector (Article 3). Staff of government hospitals are normally employed under government employment rules instead, so ask HR which rules your contract follows. Your professional licence from DHA, DoH or MOH lets you practise. It does not decide which employment law applies to you.</p>
            <p>If you work for a private hospital or clinic on the mainland, use the calculator above. If your employer is in DIFC or in Dubai Healthcare City, ask which employment rules your contract is under before you rely on the mainland formula. For DIFC the rules are explained in <Link href="/blog/difc-dews-gratuity-explained">what is DEWS</Link>.</p>
          </div>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <h2 className="sec-hd">Gratuity calculation examples, healthcare roles</h2>
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

        {/* LICENSING & CONTRACTS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">LICENSING AUTHORITIES</div>
            <h2>UAE healthcare licensing authorities and gratuity</h2>
            <p>
              Healthcare professionals in the UAE must hold a valid license from one of the three main regulatory authorities. Your <strong>employment contract is separate from your professional license</strong>, and gratuity rights are governed by your employment contract, not your license.
            </p>
            <div className="steps-3" style={{ marginTop: '1rem' }}>
              <div className="step-card">
                <div className="step-n">DUBAI</div>
                <h4>DHA, Dubai Health Authority</h4>
                <p>Licenses healthcare professionals working in Dubai. Employees of private hospitals and clinics on the mainland are covered by the labour law gratuity rules.</p>
              </div>
              <div className="step-card">
                <div className="step-n">ABU DHABI</div>
                <h4>DoH, Department of Health</h4>
                <p>Formerly HAAD (Health Authority Abu Dhabi). Licenses healthcare workers in Abu Dhabi emirate. SEHA (public hospitals) employees may have different terms, verify your contract type.</p>
              </div>
              <div className="step-card">
                <div className="step-n">NORTHERN EMIRATES</div>
                <h4>MOH, Ministry of Health</h4>
                <p>Covers Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.</p>
              </div>
            </div>
            <div className="warn-box" style={{ marginTop: '1rem' }}>
              <strong>Non renewal is not a reason to lose gratuity:</strong> Article 51 gives gratuity to a foreign worker with at least one year of continuous service when service ends. The law does not make it depend on the reason, so a hospital that does not renew your contract still owes it. Keep your contracts and licence letters in case the dates are questioned.</div>
          </div>
        </div>

        {/* CONTRACT STRUCTURE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">CONTRACT STRUCTURE</div>
            <h2>Typical healthcare salary package structure</h2>
            <p>Healthcare packages in the UAE generally follow a structured split:</p>
            <div className="comp-grid" style={{ marginTop: '1rem' }}>
              <div className="comp-card comp-included">
                <div className="comp-title">✓ COUNTS TOWARD GRATUITY</div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Basic monthly salary</span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>The wage your contract states as basic</span></div>
              </div>
              <div className="comp-card comp-excluded">
                <div className="comp-title">✗ EXCLUDED FROM GRATUITY</div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Housing allowance</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Transport allowance</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Continuation of medical insurance (employer-provided)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Air ticket allowance (annual)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Performance/productivity bonuses</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>On-call or night shift premiums</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="sec">
          <div className="card" style={{ background: 'var(--gray-50)' }}>
            <h2 style={{ fontSize: '18px' }}>Related guides for UAE healthcare workers</h2>
            <div style={{ display: 'grid', gap: '10px', marginTop: '0.75rem' }}>
              <Link href="/gratuity-by-years-of-service" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                📊 UAE gratuity by years of service, 1 to 30 year table
              </Link>
              <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                ⚖️ Resignation vs Termination, how each affects your gratuity entitlement
              </Link>
              <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                📋 How to File a MOHRE Complaint for Unpaid Gratuity
              </Link>
              <Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                🧾 UAE Final Settlement Checklist, what to verify before signing
              </Link>
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

        <RelatedCalculators path="/gratuity-calculator/healthcare" />
        <Footer />
      </main>
    </>
  )
}

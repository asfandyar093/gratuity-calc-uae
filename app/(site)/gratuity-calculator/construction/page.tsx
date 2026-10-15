import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import IndustryCalculator from '@/components/IndustryCalculator'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Construction Workers 2026 (Free)',
  description:
    'Gratuity calculator for UAE construction workers, engineers and site supervisors, with notes on daily wages, accommodation and project contracts.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/construction' },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Gratuity Calculator for Construction Workers 2026 (Free)',
    description: 'Calculate UAE end of service gratuity for construction sector employees, from daily wage workers to project managers.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/construction',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

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

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Construction Sector · UAE Labour Law · Updated 2026</div>
          <h1>UAE Construction Gratuity Calculator 2026<br /><em>EOSB for Workers, Engineers &amp; Project Managers</em></h1>
          <p className="hero-desc">
            Pre-filled with typical construction sector salaries. Calculate your end-of-service gratuity across all roles, from laborer to project director.
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

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="5000"
            defaultYears="3"
            sectorLabel="Construction Sector Gratuity Calculator"
            sectorEmoji="🏗️"
          />
        </div>

        {/* INDUSTRY NOTE */}
        <div className="warn-box" style={{ marginTop: '1.5rem' }}>
          <strong>Construction sector note:</strong> Construction contracts are often tied to a project, and since February 2022 every UAE employment contract is fixed term. Site allowances, accommodation and food provided by the employer are <strong>not part of basic wage</strong>, so gratuity is worked out only on the basic wage in your contract.
        </div>

        {/* DAILY WAGE AND ACCOMMODATION */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-amber">DAILY WAGE WORKERS</div>
            <h2>Gratuity for daily wage, weekly wage and piecework workers</h2>
            <p>Article 51(5) says gratuity is calculated on the last basic wage for workers paid monthly, weekly or daily, and on the average daily wage for workers paid by piecework. Article 23 sets that average as what the worker received for actual working days in the 6 months before the claim. The days earned are the same as for monthly workers: 21 days of wage for each of the first 5 years and 30 days for each year after that, once you have one year of continuous service.</p>
            <div className="example-box">
              <div className="ex-title">EXAMPLE: DAILY WAGE WORKER, 4 YEARS</div>
              <div className="ex-line">Basic daily wage in the contract: AED 90</div>
              <div className="ex-line">Days earned: 21 × 4 = 84 days</div>
              <div className="ex-total">Gratuity: 84 × AED 90 = AED 7,560</div>
            </div>
            <p>Days of unpaid absence are not counted in the service period (Article 51(4)), so keep a record of your attendance. Overtime and site allowances are not part of the daily wage used here. Other work patterns, such as part time work, are set by the Implementing Regulation under Article 52, so check the current rules for those.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">ACCOMMODATION AND DEDUCTIONS</div>
            <h2>Labour camp accommodation, food and deductions</h2>
            <p>Article 13(4) requires the employer to provide proper accommodation licensed by the competent authorities, or to pay an accommodation allowance in cash or include it in the wage. If the employer gives you a bed in a camp, that is not basic wage and does not raise your gratuity. If an allowance is paid instead, it is an allowance too.</p>
            <p>Article 51(7) lets an employer deduct from gratuity only amounts payable under the law or a court judgment. Camp charges or a loan are not an automatic deduction, so ask for the legal basis of any line on the settlement sheet. See the <Link href="/blog/uae-salary-deductions-what-employers-can-deduct">guide to salary deductions</Link> and the <Link href="/blog/uae-final-settlement-checklist">final settlement checklist</Link>.</p>
          </div>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <h2 className="sec-hd">Gratuity calculation examples, construction roles</h2>
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
                      <div className="ex-line">Yr 1 to 5: 21 × 5 = 105 days</div>
                      <div className="ex-line">Yr 6 to {ex.years}: 30 × {ex.years - 5} = {30 * (ex.years - 5)} days</div>
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
            <div className="badge bg-amber">CONTRACT TYPES</div>
            <h2>Contracts in UAE construction</h2>
            <p>Since 2 February 2022 every UAE employment contract is fixed term; older unlimited contracts had to be converted (Article 68 of Federal Decree-Law No. 33 of 2021). Construction contracts are often tied to a project. Gratuity is owed after one year of continuous service whether the contract ends, the employer terminates or you resign, and resignation no longer reduces it.</p>
            <div className="warn-box" style={{ marginTop: '1rem' }}>
              <strong>Project completion:</strong> Gratuity under Article 51 depends on one year of continuous service and your last basic wage, not on the reason the contract ended. A project finishing does not remove it, and a contract ending early for that reason should still be settled with gratuity.</div>
          </div>
        </div>

        {/* WPS NOTE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WPS &amp; GRATUITY RIGHTS</div>
            <h2>Wage Protection System and your records</h2>
            <p>
              The Wage Protection System (WPS) is the electronic salary transfer system maintained by MOHRE. Keep your payslips, bank statements and contract, because they show your basic wage and your dates of service if there is a dispute.
            </p>
            <p>
              The u.ae portal says that under Ministerial Resolution No. 340 of 2026, salaries for the previous month are due on the first day of each Gregorian month, and employers must transfer at least 85% of the wages due on time. If wages are late, MOHRE steps up in stages: alerts from the second day, a stop on new work permits from the fifth day, and an automatic labour dispute from the sixteenth day for establishments with 25 or more workers affected. Construction is one of the sectors where unpaid workers across companies owned by the same employer are counted together. See <a href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/payment-of-wages" target="_blank" rel="noopener noreferrer">u.ae: payment of salaries and wages</a> for the full table.
            </p>
            <p>
              If your employer does not pay your gratuity within 14 days of the contract ending (Article 53), submit a request to MOHRE under Article 54. MOHRE first tries to settle the dispute, and refers it to court if that fails. A claim is not heard after 2 years from the end of the employment relationship (Article 54(9) as amended in 2024). Steps are in <Link href="/blog/how-to-file-mohre-complaint">how to file a MOHRE complaint</Link>.
            </p>
            <div className="info-box">
              <strong>Accommodation is not salary:</strong> Free accommodation does not change the basic wage figure in your contract, and gratuity is worked out on that basic wage.
            </div>
          </div>
        </div>

        {/* RELATED READING */}
        <div className="sec">
          <div className="card" style={{ background: 'var(--gray-50)' }}>
            <h2 style={{ fontSize: '18px' }}>Related guides for UAE construction workers</h2>
            <div style={{ display: 'grid', gap: '10px', marginTop: '0.75rem' }}>
              <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                📋 How to File a MOHRE Complaint for Unpaid Gratuity
              </Link>
              <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                ⚖️ Resignation vs Termination, how each affects your gratuity entitlement
              </Link>
              <Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                🧾 UAE Final Settlement Checklist, what to verify before signing
              </Link>
              <Link href="/blog/uae-gratuity-payment-delay-rules" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
                ⏱️ Can Your Employer Delay UAE Gratuity?, payment deadlines and MOHRE escalation
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Use the full UAE Gratuity Calculator</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Need more options, date-based calculation, unpaid leave deduction, or accrual chart? Use the full calculator on the homepage.
          </p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Open Full Gratuity Calculator →
          </Link>
        </div>

        <RelatedCalculators path="/gratuity-calculator/construction" />
        <Footer />
      </main>
    </>
  )
}

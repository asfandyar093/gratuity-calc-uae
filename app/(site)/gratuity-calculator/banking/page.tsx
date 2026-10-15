import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import IndustryCalculator from '@/components/IndustryCalculator'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Bank & Finance Staff 2026 (Free)',
  description:
    'Gratuity calculator for UAE banking and finance employees, with notes on bonuses, notice and garden leave. DIFC staff use DEWS, not mainland gratuity.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/banking' },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Gratuity Calculator for Bank & Finance Staff 2026 (Free)',
    description: 'Calculate UAE end-of-service gratuity for banking sector employees. Important: DIFC employees are under DEWS, not standard UAE gratuity law.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/banking',
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

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Banking &amp; Finance Sector · UAE Labour Law · Updated 2026</div>
          <h1>UAE Banking &amp; Finance Gratuity Calculator 2026<br /><em>EOSB for Bank Employees, Analysts &amp; Finance Professionals</em></h1>
          <p className="hero-desc">
            Pre-filled with typical banking sector salaries. <strong>Important:</strong> DIFC employees are covered by the DEWS scheme, not standard UAE gratuity law.
          </p>
          <div className="pills">
            <span className="pill">✓ Commissions excluded from EOSB</span>
            <span className="pill">⚠️ DIFC = DEWS, not standard gratuity</span>
            <span className="pill">✓ ADGM employees, check your contract</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator/banking">Banking &amp; Finance</Link>
        </nav>

        <p className="difc-note-short"><strong>DIFC employees:</strong> a different scheme (DEWS) applies to you. <a href="#difc-note">See the DIFC note</a>.</p>

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="12000"
            defaultYears="3"
            sectorLabel="Banking & Finance Gratuity Calculator"
            sectorEmoji="🏦"
          />
        </div>

        {/* DIFC WARNING, prominent */}
        <div id="difc-note" style={{ background: '#fff3cd', border: '3px solid #f59e0b', borderRadius: '16px', padding: '1.5rem 2rem', marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '32px', flexShrink: 0 }}>⚠️</span>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 900, color: '#92400e', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>DIFC Employees, Different Law Applies</div>
            <p style={{ fontSize: '16px', color: '#78350f', fontWeight: 700, margin: 0, lineHeight: 1.7 }}>
              If you work within the <strong>Dubai International Financial Centre (DIFC)</strong>, including banks, law firms, and financial institutions registered under DIFC, you are covered by the <strong>DEWS (DIFC Employee Workplace Savings) scheme</strong>, not standard UAE Federal Labour Law gratuity. DEWS is a different monthly contribution-based system. Check your employment contract or contact your DIFC employer&apos;s HR for your specific entitlements.
            </p>
            <p style={{ fontSize: '15px', color: '#92400e', marginTop: '0.75rem', marginBottom: 0 }}>
              This calculator applies to <strong>non-DIFC banking and finance employees</strong> governed by Federal Decree-Law No. 33 of 2021.
            </p>
          </div>
        </div>

        {/* BONUSES AND NOTICE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">BONUSES, NOTICE AND GARDEN LEAVE</div>
            <h2>What bank staff should check before leaving</h2>
            <p>Banking packages often combine a fixed salary with a bonus or a commission. Only the basic wage counts towards gratuity, because Article 51 uses the last basic wage and Article 1 defines basic wage as the wage stipulated in the contract for the work, excluding other allowances and benefits in kind.</p>
            <ul>
              <li><strong>Check where your contract names the basic wage.</strong> If it only gives a total figure, ask HR in writing which part is basic.</li>
              <li><strong>Notice is a fixed range.</strong> Article 43 sets 30 to 90 days, as your contract states, and you receive your full wage for it.</li>
              <li><strong>Garden leave.</strong> If your bank asks you not to work during notice, the contract still runs and Article 43(2) still entitles you to your full wage for the notice period. The period counts as service.</li>
              <li><strong>Non compete clauses.</strong> Article 10 allows one only if your job gives access to clients or work secrets, and it must be limited by time, place and type of work. It cannot run for more than 2 years after the contract ends, and it is void if the employer ends the contract in breach of the law. Read the clause before you sign a new offer.</li>
              <li><strong>Deductions.</strong> Article 51(7) allows deductions from gratuity only for amounts payable under the law or a court judgment. See the <Link href="/blog/uae-salary-deductions-what-employers-can-deduct">deductions guide</Link>.</li>
            </ul>
            <p>Use the <Link href="/notice-period-calculator-uae">notice period calculator</Link> to work out your last day and any pay in lieu, and the <Link href="/final-settlement-calculator-uae">final settlement calculator</Link> for the whole sheet.</p>
          </div>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <h2 className="sec-hd">Gratuity calculation examples, banking roles</h2>
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

        {/* DIFC DEWS DEEP DIVE */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-amber">DIFC &amp; DEWS</div>
            <h2>DIFC DEWS, how it differs from standard UAE gratuity</h2>
            <p>
              The DIFC Employee Workplace Savings (DEWS) plan replaced the lump sum gratuity for DIFC employees from 1 February 2020. Under DEWS, employers make <strong>monthly contributions</strong> to individual employee savings accounts. The full explanation is in <Link href="/blog/difc-dews-gratuity-explained">what is DEWS</Link>.
            </p>
            <div className="tbl-wrap">
              <table>
                <thead>
                  <tr><th>Factor</th><th>Standard UAE gratuity</th><th>DIFC DEWS</th></tr>
                </thead>
                <tbody>
                  <tr><td>Governing law</td><td>Federal Decree-Law No. 33 of 2021</td><td>DIFC Employment Law, DIFC Law No. 2 of 2019</td></tr>
                  <tr><td>Payment timing</td><td>Lump sum when the contract ends</td><td>Employer pays monthly into a savings account in your name</td></tr>
                  <tr><td>Contribution rate</td><td>Formula at the end of service</td><td>5.83% of monthly basic wage for the first 5 years, 8.33% after</td></tr>
                  <tr><td>Access to the money</td><td>On leaving</td><td>Employer contributions on leaving, voluntary savings in part earlier</td></tr>
                  <tr><td>Investment</td><td>None</td><td>The account is invested, so the value can rise or fall</td></tr>
                  <tr><td>Cap</td><td>Two years&apos; wage (Article 51(6))</td><td>No cap in the contribution rule</td></tr>
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
            <div className="badge bg-teal">COMMISSION &amp; BONUSES</div>
            <h2>Are banking commissions included in gratuity?</h2>
            <p>
              No. Gratuity is calculated on the basic wage. Article 1 defines wage to include allowances and a percentage of sales or profits, but basic wage excludes them, so commissions, sales incentives and annual bonuses do not count even when they are regular.
            </p>
            <p>
              This matters most for relationship managers and traders whose variable pay is large. Their gratuity is based on the fixed basic wage only.
            </p>
            <div className="warn-box">
              <strong>Verify your basic salary:</strong> Some banking contracts state one consolidated salary. If your contract does not name a basic wage, ask HR which part is basic and get it in writing. If HR will not clarify, MOHRE can review the dispute under Article 54.
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

        <RelatedCalculators path="/gratuity-calculator/banking" />
        <Footer />
      </main>
    </>
  )
}

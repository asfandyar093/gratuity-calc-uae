import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

export const metadata: Metadata = {
  title: 'UAE Domestic Workers Gratuity Calculator 2026 | Federal Law No. 10 of 2017',
  description:
    'Free UAE gratuity calculator for domestic workers — maids, nannies, drivers, and cooks. Uses the correct 14-days-per-year formula under Federal Law No. 10 of 2017 (not the standard Labour Law).',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/gratuity-calculator/domestic-workers' },
  openGraph: {
    title: 'UAE Domestic Workers Gratuity Calculator 2026 | Federal Law No. 10 of 2017',
    description: 'Domestic workers in UAE are covered by a separate law. This calculator uses the correct 14-days-per-year formula. Covers maids, nannies, drivers, cooks, and gardeners.',
    url: 'https://www.uaegratuitycheck.com/gratuity-calculator/domestic-workers',
    type: 'website',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

const roles = [
  { role: 'Domestic Helper / Maid', wage: [800, 1800], note: 'Accommodation, food & medical provided by employer' },
  { role: 'Nanny / Babysitter', wage: [1200, 2500], note: 'Accommodation & food usually included' },
  { role: 'Driver (private household)', wage: [1200, 2200], note: 'May receive vehicle maintenance allowance' },
  { role: 'Cook / Chef (private household)', wage: [1500, 2800], note: 'Accommodation & food provided' },
  { role: 'Gardener / Maintenance Worker', wage: [1200, 2000], note: 'Accommodation usually provided' },
]

/** Domestic worker formula: 14 days per year of service */
function calcDomesticG(wage: number, years: number) {
  const daily = wage / 30
  return Math.min(daily * 14 * years, wage * 24)
}
function fmtAED(n: number) { return 'AED ' + Math.round(n).toLocaleString('en-AE') }

const examples = [
  { role: 'Domestic Helper (3 yrs)', wage: 1200, years: 3 },
  { role: 'Nanny (5 yrs)', wage: 1800, years: 5 },
  { role: 'Driver (7 yrs)', wage: 1500, years: 7 },
  { role: 'Cook (10 yrs)', wage: 2000, years: 10 },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Calculator', item: `${BASE}/gratuity-calculator` },
        { '@type': 'ListItem', position: 3, name: 'Domestic Workers', item: `${BASE}/gratuity-calculator/domestic-workers` },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Domestic Workers Gratuity Calculator 2026',
      url: `${BASE}/gratuity-calculator/domestic-workers`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity calculator for domestic workers using the correct 14-days-per-year formula under Federal Law No. 10 of 2017.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are domestic workers entitled to gratuity in UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Domestic workers in UAE are entitled to end-of-service gratuity under Federal Law No. 10 of 2017. After completing one year of service, they receive 14 days of wages per year of service — a different formula from the standard 21/30 days under Labour Law No. 33 of 2021.',
          },
        },
        {
          '@type': 'Question',
          name: 'What law governs UAE domestic worker gratuity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UAE domestic workers are governed by Federal Law No. 10 of 2017 on Domestic Workers, not the standard Federal Decree-Law No. 33 of 2021. The gratuity formula is 14 days of wages per year of service, compared to 21 days (first 5 years) and 30 days (after 5 years) under the standard law.',
          },
        },
      ],
    },
  ],
}

export default function DomesticWorkersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #374151 0%, #4b5563 45%, #6b7280 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Domestic Workers · Federal Law No. 10 of 2017 · Updated 2026</div>
          <h1>UAE Domestic Workers Gratuity Calculator 2026<br /><em>14 Days Per Year | Federal Law No. 10 of 2017</em></h1>
          <p className="hero-desc">
            Domestic workers in UAE are covered by a <strong>separate law</strong> with a different gratuity formula. This calculator uses the correct 14-days-per-year rate.
          </p>
          <div className="pills">
            <span className="pill">⚠️ Separate law — not Labour Law 33/2021</span>
            <span className="pill">✓ 14 days per year (not 21/30)</span>
            <span className="pill">✓ Maids, nannies, drivers, cooks covered</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator/domestic-workers">Domestic Workers</Link>
        </nav>

        {/* CRITICAL SEPARATE LAW NOTICE */}
        <div style={{ background: '#fef2f2', border: '3px solid var(--red)', borderRadius: '16px', padding: '1.75rem 2rem', marginTop: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '32px', flexShrink: 0 }}>⚠️</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--red-dark)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                IMPORTANT — Separate Law Applies to Domestic Workers
              </div>
              <p style={{ fontSize: '16px', color: 'var(--red-dark)', fontWeight: 700, margin: 0, lineHeight: 1.7 }}>
                Domestic workers in the UAE are governed by <strong>Federal Law No. 10 of 2017 on Domestic Workers</strong> —
                not Federal Decree-Law No. 33 of 2021 (the standard UAE Labour Law).
              </p>
              <p style={{ fontSize: '15px', color: 'var(--red-dark)', fontWeight: 600, marginTop: '0.75rem', marginBottom: 0, lineHeight: 1.7 }}>
                The gratuity formula is <strong>14 days of wages per year of service</strong> — compared to 21 days (first 5 years) and 30 days (after 5 years) under the standard law.
                Using the standard formula will significantly overestimate domestic worker gratuity. This calculator uses the correct 14-day formula.
              </p>
            </div>
          </div>
        </div>

        {/* LAW COMPARISON BOX */}
        <div className="tbl-wrap" style={{ marginTop: '1.25rem' }}>
          <table>
            <thead>
              <tr>
                <th>Factor</th>
                <th>Domestic Workers (Law 10/2017)</th>
                <th>Standard Employees (Law 33/2021)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Governing law</td>
                <td style={{ fontWeight: 800 }}>Federal Law No. 10 of 2017</td>
                <td>Federal Decree-Law No. 33 of 2021</td>
              </tr>
              <tr className="hl">
                <td>Gratuity formula</td>
                <td style={{ color: 'var(--green-dark)', fontWeight: 900 }}>14 days per year of service</td>
                <td>21 days (yr 1–5) + 30 days (yr 5+)</td>
              </tr>
              <tr>
                <td>Minimum service</td>
                <td>1 year</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>Gratuity cap</td>
                <td>2 years wages (24 months)</td>
                <td>2 years basic salary (24 months)</td>
              </tr>
              <tr>
                <td>Accommodation</td>
                <td>Employer must provide (not counted for gratuity)</td>
                <td>Optional allowance (excluded from gratuity)</td>
              </tr>
              <tr>
                <td>Food &amp; meals</td>
                <td>Employer must provide (not counted for gratuity)</td>
                <td>Optional food allowance (excluded)</td>
              </tr>
              <tr>
                <td>Medical care</td>
                <td>Employer must provide</td>
                <td>Employer-provided health insurance required</td>
              </tr>
              <tr>
                <td>Annual leave</td>
                <td>30 calendar days per year</td>
                <td>30 calendar days per year (after 1 yr)</td>
              </tr>
              <tr>
                <td>Rest day</td>
                <td>1 day per week</td>
                <td>1 day per week minimum</td>
              </tr>
              <tr>
                <td>Dispute resolution</td>
                <td>MOHRE (with employer compliance unit)</td>
                <td>MOHRE</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PRE-FILLED CALCULATOR */}
        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="1500"
            defaultYears="3"
            defaultContract="limited"
            sectorLabel="Domestic Workers Gratuity Calculator (14 days/year)"
            sectorEmoji="🏠"
            formula="domestic"
          />
        </div>

        {/* WAGE BENCHMARKS */}
        <div className="sec">
          <div className="sec-hd">Domestic worker wage benchmarks — UAE 2026</div>
          <div className="sec-sd">Monthly wages by role · Federal Law No. 10 of 2017 applies</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Monthly Wage (AED)</th>
                  <th>In-Kind Benefits</th>
                </tr>
              </thead>
              <tbody>
                {roles.map(r => (
                  <tr key={r.role}>
                    <td>{r.role}</td>
                    <td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
                      {r.wage[0].toLocaleString()} – {r.wage[1].toLocaleString()}
                    </td>
                    <td style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            The UAE does not currently mandate a statutory minimum wage for domestic workers. Wages are set by mutual agreement and vary by nationality, experience, and role. The employer must provide accommodation, food, and medical care — these benefits are not counted toward the cash wage for gratuity purposes.
          </div>
        </div>

        {/* GRATUITY EXAMPLES */}
        <div className="sec">
          <div className="sec-hd">Gratuity calculation examples — domestic workers</div>
          <div className="sec-sd">14 days per year formula · Federal Law No. 10 of 2017</div>
          <div className="two-col">
            {examples.map(ex => {
              const g = calcDomesticG(ex.wage, ex.years)
              return (
                <div className="example-box" key={ex.role}>
                  <div className="ex-title">{ex.role.toUpperCase()}</div>
                  <div className="ex-line">Monthly wage: {fmtAED(ex.wage)}</div>
                  <div className="ex-line">Service: {ex.years} years</div>
                  <div className="ex-line">Daily wage: {fmtAED(ex.wage / 30)}</div>
                  <div className="ex-line">14 days × {ex.years} yrs = {14 * ex.years} days</div>
                  <div className="ex-total">Gratuity: {fmtAED(g)}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHTS & PROTECTIONS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">RIGHTS &amp; PROTECTIONS — حقوق العمالة المنزلية</div>
            <h2>Domestic worker rights under Federal Law No. 10 of 2017</h2>
            <p>
              The 2017 Domestic Workers Law provides domestic workers in the UAE with the following legal protections and entitlements:
            </p>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3 style={{ color: 'var(--green-dark)' }}>Financial rights</h3>
                <ul>
                  <li>Wages paid monthly (or as agreed, but not less than monthly)</li>
                  <li>End-of-service gratuity: 14 days per year after 1 year of service</li>
                  <li>One month wages in lieu of notice if contract terminated early</li>
                  <li>Return air ticket to home country on contract completion</li>
                  <li>Compensation for unused annual leave days</li>
                </ul>
              </div>
              <div className="mini-card">
                <h3 style={{ color: 'var(--green-dark)' }}>Other entitlements</h3>
                <ul>
                  <li>30 calendar days paid annual leave per year</li>
                  <li>1 rest day per week (Friday or another agreed day)</li>
                  <li>12 hours rest per day (minimum 8 consecutive hours)</li>
                  <li>Accommodation, food, and medical care provided by employer</li>
                  <li>Retention of own passport (employer cannot hold it)</li>
                </ul>
              </div>
            </div>
            <div className="warn-box" style={{ marginTop: '1rem' }}>
              <strong>Passport retention is illegal:</strong> Under UAE law, employers <strong>cannot retain a domestic worker&apos;s passport</strong>. If your passport is being held by your employer, this is a violation. You may report this to MOHRE at <strong>mohre.gov.ae</strong> or call the MOHRE helpline at <strong>800-60</strong>.
            </div>
          </div>
        </div>

        {/* COMPLAINTS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">FILING A COMPLAINT — تقديم شكوى</div>
            <h2>How domestic workers can claim unpaid gratuity</h2>
            <p>
              If your employer fails to pay your end-of-service gratuity, you have several options under UAE law:
            </p>
            <div className="steps-3" style={{ marginTop: '1rem' }}>
              <div className="step-card">
                <div className="step-n">STEP 01</div>
                <h4>Contact MOHRE</h4>
                <p>File a complaint at <strong>mohre.gov.ae</strong>, via the MOHRE app, or by calling <strong>800-60</strong>. MOHRE has a dedicated domestic workers unit.</p>
              </div>
              <div className="step-card">
                <div className="step-n">STEP 02</div>
                <h4>Labour complaint &amp; mediation</h4>
                <p>MOHRE will contact your employer and attempt mediation within 2 weeks. Many cases are resolved at this stage without court involvement.</p>
              </div>
              <div className="step-card">
                <div className="step-n">STEP 03</div>
                <h4>Labour court referral</h4>
                <p>If mediation fails, MOHRE refers the case to a labour court. Domestic workers may access free legal aid through the MOHRE legal support unit.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED LINKS */}
        <div className="card" style={{ background: 'var(--gray-50)', marginTop: '1rem' }}>
          <h2 style={{ fontSize: '17px', marginBottom: '0.75rem' }}>Related calculators and guides</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Gratuity Calculator — standard formula for private sector employees
            </Link>
            <Link href="/gratuity-calculator/construction" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → Construction Sector Gratuity Calculator
            </Link>
            <Link href="/gratuity-calculator/hospitality" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → Hospitality Sector Gratuity Calculator
            </Link>
            <Link href="/uae-labor-law" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Labour Law Reference — Articles 51–54 explained
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Full UAE Gratuity Calculator — standard employees</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            For private sector employees outside the domestic worker category — uses the standard 21/30 day formula.
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

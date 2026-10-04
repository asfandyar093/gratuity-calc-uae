import Link from 'next/link'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import GratuityYearsTable from '@/components/GratuityYearsTable'
import SourcesBox from '@/components/SourcesBox'
import { faqsEn } from '@/lib/homeFaqs'
import { SOURCES } from '@/lib/sources'

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

// English homepage body. The Arabic homepage (/ar) has its own Arabic-only
// component (ArHomeContent) so each URL serves exactly one language.
export default function HomePageContent() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Free UAE end of service calculator · Article 51 · Reviewed October 2026</div>
          <h1>
            UAE Gratuity Calculator 2026<br /><em>End of service calculator for UAE private-sector employees</em>
          </h1>
          <p className="hero-desc">
            Work out your end-of-service gratuity in the UAE from your basic salary and service dates. This gratuity calculator applies Article 51 of Federal Decree-Law No. 33 of 2021 for Dubai, Abu Dhabi, Sharjah and the other emirates, including mainland and most free-zone employers.
          </p>
          <p className="hero-lang-link">
            <Link href="/ar" hrefLang="ar" lang="ar">استخدم الحاسبة باللغة العربية ←</Link>
          </p>
          <div className="hero-actions">
            <a className="hero-jump-btn" href="#calculator">Jump to calculator ↓</a>
          </div>
          <div className="pills">
            <span className="pill">Article 51 · Federal Decree-Law No. 33/2021</span>
            <span className="pill">Basic salary only</span>
            <span className="pill">Dates or years input</span>
            <span className="pill">Runs in your browser</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <div className="answer-box">
          <p>
            <strong>UAE gratuity in one line:</strong> 21 days of basic salary for each of your first five years, then 30 days for each year after that, once you have completed one year of continuous service. Part years count pro-rata, unpaid leave does not count, and the total is capped at two years&apos; wage (Article 51). Your employer must pay it within 14 days of the contract ending (Article 53).
          </p>
        </div>

        {/* CALCULATOR + ACCRUAL CHART */}
        <Calculator lang="en" />

        {/* STATS */}
        <div className="stats">
          <div className="stat"><div className="stat-n">1 year</div><div className="stat-l">Minimum continuous service (Art. 51(2))</div></div>
          <div className="stat"><div className="stat-n">21 days</div><div className="stat-l">Basic salary per year, years 1–5</div></div>
          <div className="stat"><div className="stat-n">30 days</div><div className="stat-l">Basic salary per year after year 5</div></div>
          <div className="stat"><div className="stat-n">14 days</div><div className="stat-l">Payment deadline after the contract ends (Art. 53)</div></div>
        </div>

        {/* GRATUITY BY YEARS */}
        <div className="sec">
          <div className="sec-hd">UAE gratuity by years of service</div>
          <div className="sec-sd">How much gratuity you get after 1, 3, 5, 10 or 20 years at common basic salaries. Figures use basic ÷ 30 and the Article 51 rates.</div>
          <GratuityYearsTable years={[1, 2, 3, 5, 7, 10, 15, 20]} salaries={[5000, 10000, 15000]} />
          <p style={{ marginTop: '0.75rem' }}>
            Need another salary or year? See the full <Link href="/gratuity-by-years-of-service" style={linkStyle}>gratuity by years of service table</Link> (1–30 years, AED 3,000–20,000 basic, cap included).
          </p>
        </div>

        {/* WHICH RULES APPLY */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WHICH RULES APPLY TO YOU?</div>
            <h2>Pick the right gratuity calculator for your employer</h2>
            <p>Most UAE employees, on the mainland and in free zones such as JAFZA, DMCC, SAIF Zone and DAFZA, use the federal formula above. A few groups follow different rules:</p>
            <div className="tbl-wrap">
              <table>
                <thead><tr><th>You work…</th><th>Rules</th><th>Use</th></tr></thead>
                <tbody>
                  <tr><td>Mainland private sector or a federal-law free zone</td><td>Federal Decree-Law 33/2021, Art. 51</td><td>This calculator</td></tr>
                  <tr><td>DMCC (Dubai)</td><td>Federal law; DMCC guide uses basic × 12 ÷ 365 for the daily rate</td><td><Link href="/calculate-dmcc-gratuity" style={linkStyle}>DMCC gratuity calculator</Link></td></tr>
                  <tr><td>DIFC</td><td>DIFC Employment Law and the DEWS savings plan</td><td><Link href="/calculate-difc-gratuity" style={linkStyle}>DIFC calculator</Link> · <Link href="/blog/difc-dews-gratuity-explained" style={linkStyle}>what is DEWS?</Link></td></tr>
                  <tr><td>ADGM (Abu Dhabi)</td><td>ADGM Employment Regulations 2024, s.61 (basic ÷ 365, paid within 21 days)</td><td><Link href="/calculate-adgm-gratuity" style={linkStyle}>ADGM gratuity calculator</Link></td></tr>
                  <tr><td>As a housemaid, nanny, driver or other domestic worker</td><td>Federal Decree-Law 9/2022 — no statutory formula yet</td><td><Link href="/gratuity-calculator/domestic-workers" style={linkStyle}>Domestic worker gratuity</Link></td></tr>
                  <tr><td>As a UAE national</td><td>Pensions and social security law (Art. 51(1))</td><td>GPSSA / your emirate&apos;s pension authority</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* HOW TO USE */}
        <div className="sec">
          <div className="sec-hd">How to use the gratuity calculator</div>
          <div className="sec-sd">You only need the details in your employment contract or final settlement sheet.</div>
          <div className="steps-3">
            <div className="step-card"><div className="step-n">STEP 01</div><h4>Enter basic salary only</h4><p>Use the monthly basic salary in your contract. Leave out housing, transport, overtime and bonuses.</p></div>
            <div className="step-card"><div className="step-n">STEP 02</div><h4>Add your service period</h4><p>Use your joining date and last working day, or type the years. 3.5 means three years and six months.</p></div>
            <div className="step-card"><div className="step-n">STEP 03</div><h4>Check the breakdown</h4><p>You get the daily wage, entitled days, unpaid-leave deduction, cap check and the Article 53 payment deadline.</p></div>
          </div>
        </div>

        {/* SALARY COMPONENTS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">SALARY COMPONENTS</div>
            <h2>Use the basic salary, not the full package</h2>
            <p>This is where most final settlement numbers go wrong. Article 51 calculates gratuity on the <strong>basic wage</strong>, which the law defines as the contract wage without allowances or benefits in kind. If your package is AED 15,000 but your basic is AED 9,000, the calculation starts from AED 9,000. More detail: <Link href="/blog/uae-gratuity-allowances-basic-salary" style={linkStyle}>does gratuity include housing allowance?</Link></p>
            <div className="comp-grid">
              <div className="comp-card comp-included">
                <div className="comp-title">INCLUDED</div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Monthly basic salary in the contract</span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Your <em>last</em> basic salary (Art. 51(5))</span></div>
              </div>
              <div className="comp-card comp-excluded">
                <div className="comp-title">EXCLUDED</div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Housing and transport allowances</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Food, phone, utility and other allowances</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Overtime, commission, bonuses and incentives</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* WORKED EXAMPLES */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WORKED EXAMPLES</div>
            <h2>Gratuity examples with real numbers</h2>
            <p>Daily wage is the basic salary divided by 30. Years one to five use 21 days; only the service after year five uses 30 days.</p>
            <div className="examples-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }}>
              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title">2 years · AED 8,000 basic</div>
                <div className="ex-line">Daily wage: 8,000 ÷ 30 = <strong>AED 266.67</strong></div>
                <div className="ex-line">266.67 × 21 days × 2 years</div>
                <div className="ex-total">Gratuity: AED 11,200</div>
              </div>
              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title">5 years, resigned · AED 9,000 basic</div>
                <div className="ex-line">Daily wage: 9,000 ÷ 30 = <strong>AED 300</strong></div>
                <div className="ex-line">300 × 21 days × 5 years</div>
                <div className="ex-total">Gratuity: AED 31,500</div>
              </div>
              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title">6 years · AED 12,000 basic</div>
                <div className="ex-line">Years 1–5: 400 × 21 × 5 = AED 42,000</div>
                <div className="ex-line">Year 6: 400 × 30 × 1 = AED 12,000</div>
                <div className="ex-total">Gratuity: AED 54,000</div>
              </div>
              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title">7 years, terminated · AED 15,000 basic</div>
                <div className="ex-line">Years 1–5: 500 × 21 × 5 = AED 52,500</div>
                <div className="ex-line">Years 6–7: 500 × 30 × 2 = AED 30,000</div>
                <div className="ex-total">Gratuity: AED 82,500</div>
              </div>
            </div>
            <div className="info-box" style={{ marginTop: '1.25rem' }}>
              Resignation or termination does not change these numbers under the current law. Leaving before one year means no gratuity: see <Link href="/blog/uae-gratuity-less-than-1-year" style={linkStyle}>gratuity for less than 1 year</Link> and <Link href="/blog/uae-gratuity-resignation-vs-termination" style={linkStyle}>gratuity on resignation vs termination</Link>.
            </div>
          </div>
        </div>

        {/* FINAL SETTLEMENT */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">BEYOND GRATUITY</div>
            <h2>Gratuity is one line of your final settlement</h2>
            <p>Your full and final settlement also includes unpaid salary, unused annual leave, notice pay if it applies, and your repatriation ticket, minus lawful deductions. Use the <Link href="/final-settlement-calculator-uae" style={linkStyle}>UAE final settlement calculator</Link> to add them up.</p>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3>Leave and notice</h3>
                <ul>
                  <li><Link href="/mohre-annual-leave-calculator" style={linkStyle}>MOHRE annual leave calculator</Link></li>
                  <li><Link href="/blog/uae-leave-salary-calculation-guide" style={linkStyle}>Leave salary calculation in the UAE</Link></li>
                  <li><Link href="/notice-period-calculator-uae" style={linkStyle}>Notice period calculator</Link></li>
                  <li><Link href="/blog/unpaid-leave-gratuity-uae" style={linkStyle}>How unpaid leave affects gratuity</Link></li>
                </ul>
              </div>
              <div className="mini-card">
                <h3>Leaving your job</h3>
                <ul>
                  <li><Link href="/blog/uae-gratuity-visa-cancellation" style={linkStyle}>Visa cancellation and final settlement</Link></li>
                  <li><Link href="/blog/uae-repatriation-ticket-final-settlement" style={linkStyle}>Repatriation ticket rules</Link></li>
                  <li><Link href="/blog/uae-gratuity-payment-delay-rules" style={linkStyle}>What if gratuity is paid late?</Link></li>
                  <li><Link href="/blog/how-to-file-mohre-complaint" style={linkStyle}>File a MOHRE complaint for unpaid gratuity</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* UAE vs KSA */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">GCC COMPARISON — UAE VS KSA</div>
            <h2>UAE and Saudi gratuity are not calculated the same way</h2>
            <p>If you have worked in more than one GCC country, do not assume the same rule applies everywhere. Full comparison: <Link href="/gcc-gratuity-comparison" style={linkStyle}>GCC gratuity rules compared</Link>.</p>
            <div className="tbl-wrap">
              <table>
                <thead><tr><th>Factor</th><th>UAE 🇦🇪</th><th>Saudi Arabia 🇸🇦</th></tr></thead>
                <tbody>
                  <tr><td>Governing law</td><td>Federal Decree-Law No. 33 of 2021</td><td>Saudi Labour Law — Articles 84, 85, 87</td></tr>
                  <tr><td>Wage basis</td><td>Basic salary only</td><td>Actual wage (basic + fixed allowances)</td></tr>
                  <tr><td>First 5 years</td><td>21 days&apos; wage per year</td><td>Half month&apos;s wage per year</td></tr>
                  <tr><td>After 5 years</td><td>30 days&apos; wage per year</td><td>One full month&apos;s wage per year</td></tr>
                  <tr className="hl"><td>Resignation reductions</td><td>None under the current law</td><td>1/3 (2–5 yrs), 2/3 (5–10 yrs), full (10+ yrs)</td></tr>
                  <tr><td>Gratuity cap</td><td>Two years&apos; wage (Art. 51(6))</td><td>No statutory cap</td></tr>
                  <tr className="hl"><td>Payment deadline</td><td>14 days after the contract ends (Art. 53)</td><td>Upon final settlement</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="sec">
          <div className="sec-hd">UAE gratuity FAQs</div>
          <div className="sec-sd">Short answers to the questions people ask before accepting a final settlement.</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqsEn.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>

        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />

        <Footer />
      </main>
    </>
  )
}

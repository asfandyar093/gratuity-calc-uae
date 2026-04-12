import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How UAE Gratuity is Calculated — Formula, Examples & Rules 2026',
  description: 'Complete guide to UAE end-of-service gratuity calculation. Official MOHRE formula, worked examples, contract types, free zone exceptions under Federal Decree-Law No. 33 of 2021.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/how-it-works',
  },
}

export default function HowItWorksPage() {
  return (
    <main>
      <div className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">🇦🇪 GratuityCalc UAE › How UAE Gratuity is Calculated</div>
          <h1>How UAE End-of-Service Gratuity is Calculated</h1>
          <p>A complete guide to the UAE gratuity formula, worked examples, contract type differences, salary components, and MOHRE rules — based on Federal Decree-Law No. 33 of 2021.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">OVERVIEW — نظرة عامة</div>
          <h2>What is UAE end-of-service gratuity?</h2>
          <p>End-of-service gratuity (مكافأة نهاية الخدمة) is a mandatory lump-sum payment that every UAE private sector employer must pay to an eligible employee when their employment ends. Governed by Article 51 of Federal Decree-Law No. 33 of 2021 and supervised by MOHRE, it is one of the most important financial entitlements for the UAE&apos;s 3.5 million+ expatriate workforce.</p>
          <p>Gratuity applies whether the employee resigned, was terminated, or reached contract expiry — provided they have completed at least one full year of continuous service. It applies across all emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">FORMULA — المعادلة الرسمية</div>
          <h2>The official UAE gratuity formula</h2>
          <div className="formula-box">
            <strong>Step 1 — Daily wage</strong>
            <div className="formula-line">Daily wage = Monthly basic salary ÷ 30</div>
            <strong style={{marginTop:'0.75rem'}}>Step 2 — Gratuity by service tier</strong>
            <div className="formula-line">Years 1–5: Daily wage × 21 × years of service</div>
            <div className="formula-line">Years beyond 5: Daily wage × 30 × (total years − 5)</div>
            <strong style={{marginTop:'0.75rem'}}>Step 3 — Apply the cap</strong>
            <div className="formula-line">Total gratuity cannot exceed 24 × monthly basic salary (2 years&apos; salary)</div>
          </div>
          <div className="tbl-wrap" style={{marginTop:'1rem'}}>
            <table>
              <thead><tr><th>Years of service</th><th>Entitlement</th><th>Formula</th></tr></thead>
              <tbody>
                <tr><td>Less than 1 year</td><td>No entitlement</td><td>—</td></tr>
                <tr><td>1 – 5 years</td><td>21 days per year</td><td>Daily wage × 21 × years</td></tr>
                <tr className="hl"><td>Beyond 5 years</td><td>30 days per year (for years beyond 5)</td><td>(21×5) + (30× remaining years)</td></tr>
                <tr><td>Maximum cap</td><td>2 years&apos; basic salary</td><td>24 × monthly basic salary</td></tr>
              </tbody>
            </table>
          </div>
          <h3 style={{marginTop:'1.5rem'}}>Worked example A — AED 15,000 salary, 8 years</h3>
          <div className="example-box">
            <div className="ex-title">UAE employee terminated after 8 years · AED 15,000 basic salary</div>
            <div className="ex-line">Daily wage: AED 15,000 ÷ 30 = AED 500</div>
            <div className="ex-line">Years 1–5: AED 500 × 21 days × 5 years = AED 52,500</div>
            <div className="ex-line">Years 6–8: AED 500 × 30 days × 3 years = AED 45,000</div>
            <div className="ex-line">Cap check: 24 × AED 15,000 = AED 360,000 ✓ not exceeded</div>
            <div className="ex-total">Total gratuity: AED 97,500</div>
          </div>
          <h3 style={{marginTop:'1.25rem'}}>Worked example B — AED 8,000 salary, 3 years (resignation)</h3>
          <div className="example-box">
            <div className="ex-title">UAE employee who resigned after 3 years · AED 8,000 basic salary</div>
            <div className="ex-line">Daily wage: AED 8,000 ÷ 30 = AED 266.67</div>
            <div className="ex-line">Years 1–3: AED 266.67 × 21 days × 3 years = AED 16,800</div>
            <div className="ex-line">Note: Under 2022 law, resignation = full gratuity. No reduction applied.</div>
            <div className="ex-total">Total gratuity: AED 16,800</div>
          </div>
        </div>

        <div className="two-col">
          <div className="mini-card">
            <div className="badge bg-teal" style={{marginBottom:'0.5rem'}}>UNLIMITED CONTRACT</div>
            <h3>عقد غير محدد المدة</h3>
            <p>Open-ended contracts with no fixed end date — the standard before the 2022 labour law reform.</p>
            <ul>
              <li>Full gratuity after 1+ year of service</li>
              <li>Resignation: full entitlement retained (2022 law)</li>
              <li>Termination: full entitlement applies</li>
              <li>21 days/yr for years 1–5, 30 days/yr thereafter</li>
            </ul>
          </div>
          <div className="mini-card">
            <div className="badge bg-blue" style={{marginBottom:'0.5rem'}}>LIMITED CONTRACT</div>
            <h3>عقد محدد المدة</h3>
            <p>Fixed-term contracts — all new UAE employment contracts since February 2022 are limited by law.</p>
            <ul>
              <li>Full gratuity on completion or termination</li>
              <li>Resignation: full gratuity if 1+ year served</li>
              <li>Same calculation formula as unlimited</li>
              <li>Employer may seek compensation for early exit</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-amber">FREE ZONES &amp; EXCEPTIONS</div>
          <h2>DIFC, ADGM, and free zone exceptions</h2>
          <p>Most UAE free zones (JAFZA, DMCC, DIC, Dubai Silicon Oasis, Sharjah Media City) follow the standard UAE labour law gratuity rules. However, two major financial free zones operate under separate frameworks.</p>
          <div className="two-col" style={{marginTop:'0.75rem'}}>
            <div className="mini-card">
              <h3>DIFC — Dubai International Financial Centre</h3>
              <p>DIFC employees are covered by the DEWS (DIFC Employee Workplace Savings) scheme — a mandatory monthly employer contribution to investment funds, replacing traditional lump-sum gratuity.</p>
            </div>
            <div className="mini-card">
              <h3>ADGM — Abu Dhabi Global Market</h3>
              <p>ADGM operates under its own Employment Regulations 2019. End-of-service benefits may differ from mainland UAE calculations and should be verified with the ADGM HR authority directly.</p>
            </div>
          </div>
          <div className="info-box" style={{marginTop:'0.75rem'}}>Always verify your free zone&apos;s specific rules and review your employment contract carefully. When in doubt, consult your free zone authority or a UAE employment lawyer.</div>
        </div>

        <div className="card">
          <div className="badge bg-teal">PART-TIME WORKERS</div>
          <h2>Gratuity for part-time employees</h2>
          <p>Under Cabinet Resolution No. 1 of 2022, part-time employees working under a valid UAE employment contract are entitled to prorated gratuity based on contracted hours compared to a full-time role.</p>
          <div className="formula-box">
            <strong>Part-time gratuity formula</strong>
            <div className="formula-line">Part-time gratuity = (Part-time contracted hours ÷ Full-time hours) × Full-time gratuity amount</div>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-teal">GCC COMPARISON</div>
          <h2>How UAE gratuity differs from Saudi Arabia</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Factor</th><th>UAE 🇦🇪</th><th>KSA 🇸🇦</th></tr></thead>
              <tbody>
                <tr><td>Wage basis</td><td>Basic salary only</td><td>Actual wage (basic + allowances)</td></tr>
                <tr><td>First 5 years</td><td>21 days/year</td><td>Half month/year</td></tr>
                <tr><td>After 5 years</td><td>30 days/year</td><td>One full month/year</td></tr>
                <tr className="hl"><td>Resignation impact</td><td>No reduction — full gratuity</td><td>Tiered reductions (2–10 yrs)</td></tr>
                <tr><td>Gratuity cap</td><td>2 years (24 months)</td><td>No cap</td></tr>
                <tr><td>Payment deadline</td><td>14 days after last working day</td><td>Upon final settlement</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card" style={{background:'var(--bg)'}}>
          <h2 style={{fontSize:'15px'}}>Related searches — UAE gratuity keywords</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px',marginTop:'0.75rem'}}>
            {['UAE gratuity calculator 2026','end of service benefit UAE','EOSB calculator Dubai','gratuity calculator Abu Dhabi','MOHRE gratuity formula','gratuity unlimited contract UAE','Article 51 UAE labour law','JAFZA gratuity calculator','gratuity 21 days 30 days UAE','how to calculate gratuity UAE'].map(k=>(
              <span key={k} style={{fontSize:'12px',background:'var(--white)',color:'var(--text-muted)',padding:'4px 10px',borderRadius:'20px',border:'1.5px solid var(--border)',fontWeight:600}}>{k}</span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

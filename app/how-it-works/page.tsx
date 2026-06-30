import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How UAE Gratuity Is Calculated — The 21/30 Formula Explained (With Examples)',
  description: 'Step-by-step breakdown of UAE gratuity calculation: the 21-day and 30-day formula, the 2-year cap, worked examples for 3, 5, and 10 years of service, and free zone exceptions.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/how-it-works',
  },
}

const BASE = 'https://www.uaegratuitycheck.com'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'How It Works', item: `${BASE}/how-it-works` },
      ],
    },
    {
      '@type': 'HowTo',
      '@id': `${BASE}/how-it-works/#howto`,
      name: 'How to Calculate UAE End-of-Service Gratuity',
      description: 'Step-by-step guide to calculating UAE gratuity under Federal Decree-Law No. 33 of 2021, Article 51.',
      totalTime: 'PT5M',
      supply: [
        { '@type': 'HowToSupply', name: 'Monthly basic salary (AED)' },
        { '@type': 'HowToSupply', name: 'Employment start date' },
        { '@type': 'HowToSupply', name: 'Employment end date or last working day' },
      ],
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify your monthly basic salary',
          text: 'Use only your basic salary — not total package. Exclude housing allowance, transport allowance, performance bonuses, and overtime. Check your employment contract for the "Basic Salary" or "Basic Pay" line.',
          url: `${BASE}/how-it-works/#step1`,
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Calculate your daily wage',
          text: 'Divide your monthly basic salary by 30. For example, AED 15,000 ÷ 30 = AED 500 per day. This is your daily wage for gratuity purposes.',
          url: `${BASE}/how-it-works/#step2`,
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Calculate gratuity for years 1 to 5',
          text: 'Multiply your daily wage by 21 days, then multiply by the number of years served (up to 5). For example: AED 500 × 21 × 5 = AED 52,500 for the first five years.',
          url: `${BASE}/how-it-works/#step3`,
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Calculate gratuity for years beyond 5',
          text: 'For each year of service beyond the first five, multiply your daily wage by 30 days. For example: AED 500 × 30 × 3 (years 6–8) = AED 45,000.',
          url: `${BASE}/how-it-works/#step4`,
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Add both figures and apply the cap',
          text: 'Add the year 1–5 amount and the beyond-5 amount. The total cannot exceed 24 × your monthly basic salary (two years\' pay). If your total exceeds this, reduce it to the cap.',
          url: `${BASE}/how-it-works/#step5`,
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the UAE gratuity formula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Article 51 of Federal Decree-Law No. 33 of 2021: daily wage (basic salary ÷ 30) × 21 days × years served (years 1–5), plus daily wage × 30 days × years beyond 5. Total capped at 24 months\' basic salary.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does resignation affect gratuity in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Since the 2022 UAE labour law reform (Federal Decree-Law No. 33 of 2021), resignation no longer reduces gratuity. Employees who resign are entitled to full gratuity after completing one year of continuous service.',
          },
        },
        {
          '@type': 'Question',
          name: 'What salary is used for UAE gratuity calculation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Only basic salary is used. Housing allowance, transport allowance, commission, tips, service charges, overtime, and performance bonuses are all excluded from the UAE gratuity calculation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a maximum cap on UAE gratuity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. UAE gratuity is capped at 24 months\' basic salary (two years\' pay), regardless of how many years you have worked.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do DIFC and ADGM employees follow the same gratuity rules?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. DIFC employees are covered by the DEWS (DIFC Employee Workplace Savings) scheme — a monthly employer contribution replacing traditional gratuity. ADGM operates under its own Employment Regulations 2019 with different end-of-service benefit rules.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does an employer have to pay gratuity in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UAE employers must pay end-of-service gratuity within 14 days of the employee\'s last working day. Failure to do so allows the employee to file a complaint with MOHRE.',
          },
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE}/how-it-works/#webpage`,
      url: `${BASE}/how-it-works`,
      name: 'How UAE Gratuity is Calculated | Formula, Examples and Rules 2026',
      description: 'Complete guide to UAE end-of-service gratuity calculation under Federal Decree-Law No. 33 of 2021.',
      isPartOf: { '@type': 'WebSite', '@id': `${BASE}/#website` },
      about: { '@type': 'Thing', name: 'UAE gratuity calculation formula' },
    },
  ],
}

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
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

        <div className="card">
          <h2>Related calculators and guides</h2>
          <p style={{color:'var(--text-muted)', marginBottom:'0.75rem'}}>Explore more tools built on the same UAE labour law framework covered on this page.</p>
          <div className="two-col">
            <div className="mini-card">
              <ul>
                <li><Link href="/" style={{color:'var(--green-dark)',fontWeight:700}}>UAE gratuity calculator</Link></li>
                <li><Link href="/final-settlement-calculator-uae" style={{color:'var(--green-dark)',fontWeight:700}}>Final settlement calculator</Link></li>
                <li><Link href="/salary-calculator" style={{color:'var(--green-dark)',fontWeight:700}}>Salary breakdown calculator</Link></li>
              </ul>
            </div>
            <div className="mini-card">
              <ul>
                <li><Link href="/calculate-jafza-gratuity" style={{color:'var(--green-dark)',fontWeight:700}}>JAFZA gratuity calculator</Link></li>
                <li><Link href="/calculate-difc-gratuity" style={{color:'var(--green-dark)',fontWeight:700}}>DIFC gratuity calculator</Link></li>
                <li><Link href="/blog/uae-gratuity-resignation-vs-termination" style={{color:'var(--green-dark)',fontWeight:700}}>Resignation vs termination guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </main>
    </>
  )
}

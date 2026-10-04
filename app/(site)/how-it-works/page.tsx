import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SourcesBox from '@/components/SourcesBox'
import { pairAlternates } from '@/lib/i18nRoutes'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

export const metadata: Metadata = {
  title: 'How to Calculate Gratuity in UAE (2026 Formula + Examples)',
  description: 'How to calculate gratuity in the UAE: basic salary ÷ 30, 21 days a year for years 1–5, 30 days after, part years, unpaid leave and the cap, with examples.',
  alternates: pairAlternates('/how-it-works', 'en'),
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/how-it-works' },
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
          text: 'Add the year 1–5 amount and the beyond-5 amount. The total cannot exceed two years\' wage (Article 51(6)); we apply 24 × your monthly basic salary as the cap.',
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
            text: 'Yes. Article 51(6) says total gratuity cannot exceed two years\' wage. On basic salary, that is 24 months of basic pay, reached after about 25.5 years of service.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do DIFC and ADGM employees follow the same gratuity rules?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. DIFC employees are covered by DEWS, a monthly employer contribution that replaces the traditional gratuity. ADGM uses its own Employment Regulations 2024 (annual basic ÷ 365, no two-year cap, payment within 21 days).',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does an employer have to pay gratuity in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Article 53 requires the employer to pay gratuity and all other dues within 14 days of the employment contract ending. If they do not, the employee can file a complaint with MOHRE.',
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
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › How to calculate gratuity</div>
          <h1>How to Calculate Gratuity in the UAE (2026)</h1>
          <p>The UAE gratuity formula step by step, with worked examples, what salary counts, part years, unpaid leave and the cap, based on Article 51 of Federal Decree-Law No. 33 of 2021.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">OVERVIEW</div>
          <h2>What is UAE end-of-service gratuity?</h2>
          <p>End-of-service gratuity is a mandatory lump-sum payment that every UAE private sector employer must pay to an eligible employee when their employment ends. Governed by Article 51 of Federal Decree-Law No. 33 of 2021 and supervised by MOHRE, it is one of the most important financial entitlements for expatriate employees in the UAE.</p>
          <p>Gratuity applies whether the employee resigned, was terminated, or reached contract expiry — provided they have completed at least one full year of continuous service. It applies across all emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">FORMULA</div>
          <h2>The official UAE gratuity formula</h2>
          <div className="formula-box">
            <strong>Step 1 — Daily wage</strong>
            <div className="formula-line">Daily wage = Monthly basic salary ÷ 30</div>
            <strong style={{marginTop:'0.75rem'}}>Step 2 — Gratuity by service tier</strong>
            <div className="formula-line">Years 1–5: Daily wage × 21 × years of service</div>
            <div className="formula-line">Years beyond 5: Daily wage × 30 × (total years − 5)</div>
            <strong style={{marginTop:'0.75rem'}}>Step 3 — Apply the cap</strong>
            <div className="formula-line">Total gratuity cannot exceed two years&apos; wage (Article 51(6)); we apply 24 × monthly basic salary</div>
          </div>
          <div className="tbl-wrap" style={{marginTop:'1rem'}}>
            <table>
              <thead><tr><th>Years of service</th><th>Entitlement</th><th>Formula</th></tr></thead>
              <tbody>
                <tr><td>Less than 1 year</td><td>No entitlement</td><td>—</td></tr>
                <tr><td>1 – 5 years</td><td>21 days per year</td><td>Daily wage × 21 × years</td></tr>
                <tr className="hl"><td>Beyond 5 years</td><td>30 days per year (for years beyond 5)</td><td>(21×5) + (30× remaining years)</td></tr>
                <tr><td>Maximum cap</td><td>Two years&apos; wage (Art. 51(6))</td><td>24 × monthly basic salary</td></tr>
                <tr><td>Part years</td><td>Pro rata after the first year (Art. 51(3))</td><td>Daily wage × days rate × fraction</td></tr>
                <tr><td>Unpaid absence</td><td>Not counted as service (Art. 51(4))</td><td>Subtract unpaid days from service</td></tr>
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

        <div className="card">
          <div className="badge bg-blue">CONTRACT TYPE</div>
          <h2>Does contract type still matter?</h2>
          <p>Not for new service. Since Federal Decree-Law No. 33 of 2021 took effect on 2 February 2022, every employment contract is fixed-term, and Article 68 required old unlimited contracts to be converted. The formula above applies whether you resign, are terminated or your contract ends.</p>
          <p>The only exception is service from <strong>before February 2022</strong>: Article 68(3) allows gratuity for that period to be calculated under the rules in force at the time, which reduced gratuity for some resignations. See <Link href="/uae-labor-law#what-changed">what changed in the 2022 law</Link> and the <Link href="/blog/uae-gratuity-resignation-vs-termination">resignation vs termination guide</Link>.</p>
          <p>For ready-made numbers for every year of service, use the <Link href="/gratuity-by-years-of-service">gratuity by years of service table</Link>.</p>
        </div>

        <div className="card">
          <div className="badge bg-amber">FREE ZONES &amp; EXCEPTIONS</div>
          <h2>DIFC, ADGM, and free zone exceptions</h2>
          <p>Most UAE free zones, such as JAFZA and DMCC, follow the federal Labour Law gratuity rules (DMCC uses basic × 12 ÷ 365 for the daily rate; see the <Link href="/calculate-dmcc-gratuity">DMCC gratuity calculator</Link>). Two financial free zones have their own frameworks.</p>
          <div className="two-col" style={{marginTop:'0.75rem'}}>
            <div className="mini-card">
              <h3>DIFC — Dubai International Financial Centre</h3>
              <p>DIFC employees are covered by DEWS (DIFC Employee Workplace Savings): employers pay at least 5.83% of basic salary a month (8.33% after five years) instead of a lump-sum gratuity. Use the <Link href="/calculate-difc-gratuity">DIFC DEWS calculator</Link>.</p>
            </div>
            <div className="mini-card">
              <h3>ADGM — Abu Dhabi Global Market</h3>
              <p>ADGM follows its own Employment Regulations 2024: the same 21/30 days, but the daily rate is annual basic ÷ 365, basic wage is treated as at least 50% of total wages, there is no two-year cap, and payment is due within 21 days. Use the <Link href="/calculate-adgm-gratuity">ADGM gratuity calculator</Link>.</p>
            </div>
          </div>
          <div className="info-box" style={{marginTop:'0.75rem'}}>Always verify your free zone&apos;s specific rules and review your employment contract carefully. When in doubt, consult your free zone authority or a UAE employment lawyer.</div>
        </div>

        <div className="card">
          <div className="badge bg-teal">PART-TIME WORKERS</div>
          <h2>Gratuity for part-time employees</h2>
          <p>Part-time employees earn gratuity in proportion to the hours they work compared with a full-time role. The official DMCC EOSB guide uses this hours-based approach. See <Link href="/blog/uae-gratuity-part-time-workers">gratuity for part-time workers</Link>.</p>
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
                <tr><td>Gratuity cap</td><td>Two years&apos; wage (Art. 51(6))</td><td>No cap</td></tr>
                <tr><td>UAE payment deadline</td><td>14 days after the contract ends (Art. 53)</td><td>—</td></tr>
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
        <div className="card">
          <h2>Frequently asked questions about the UAE gratuity formula</h2>
          <h3 style={{ marginTop: '1rem' }}>{"What is the UAE gratuity formula?"}</h3>
          <p>{"Under Article 51 of Federal Decree-Law No. 33 of 2021: daily wage (basic salary ÷ 30) × 21 days × years served (years 1–5), plus daily wage × 30 days × years beyond 5. Total capped at two years' wage (Article 51(6))."}</p>
          <h3 style={{ marginTop: '1.25rem' }}>{"Does resignation affect gratuity in the UAE?"}</h3>
          <p>{"No. Since the 2022 UAE labour law reform (Federal Decree-Law No. 33 of 2021), resignation no longer reduces gratuity. Employees who resign are entitled to full gratuity after completing one year of continuous service."}</p>
          <h3 style={{ marginTop: '1.25rem' }}>{"What salary is used for UAE gratuity calculation?"}</h3>
          <p>{"Only basic salary is used. Housing allowance, transport allowance, commission, tips, service charges, overtime, and performance bonuses are all excluded from the UAE gratuity calculation."}</p>
          <h3 style={{ marginTop: '1.25rem' }}>{"Is there a maximum cap on UAE gratuity?"}</h3>
          <p>{"Yes. Article 51(6) says total gratuity cannot exceed two years' wage. On basic salary, that is 24 months of basic pay, reached after about 25.5 years of service."}</p>
          <h3 style={{ marginTop: '1.25rem' }}>{"Do DIFC and ADGM employees follow the same gratuity rules?"}</h3>
          <p>{"No. DIFC employees are covered by DEWS, a monthly employer contribution that replaces the traditional gratuity. ADGM uses its own Employment Regulations 2024 (annual basic ÷ 365, no two-year cap, payment within 21 days)."}</p>
          <h3 style={{ marginTop: '1.25rem' }}>{"How long does an employer have to pay gratuity in the UAE?"}</h3>
          <p>{"Article 53 requires the employer to pay gratuity and all other dues within 14 days of the employment contract ending. If they do not, the employee can file a complaint with MOHRE."}</p>
        </div>
        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb, SOURCES.adgmGuidance, SOURCES.dewsGuide, SOURCES.dmccEosb]} />
      </div>
      <Footer />
      </main>
    </>
  )
}

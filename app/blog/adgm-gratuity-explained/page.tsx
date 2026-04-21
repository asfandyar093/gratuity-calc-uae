import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ADGM Gratuity Rules Explained 2026 | Abu Dhabi Global Market Guide',
  description:
    'Working in ADGM? End-of-service gratuity rules in Abu Dhabi Global Market differ from UAE mainland law. Complete 2026 guide to ADGM gratuity calculation, eligibility, and how it compares to DIFC DEWS.',
  keywords: [
    'ADGM gratuity',
    'Abu Dhabi Global Market gratuity',
    'ADGM end of service benefits',
    'ADGM labour law gratuity 2026',
    'ADGM vs DIFC gratuity',
    'ADGM employee benefits',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/adgm-gratuity-explained',
  },
  openGraph: {
    images: ['/images/blog/adgm-gratuity-explained.svg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'ADGM Gratuity Rules', item: 'https://www.uaegratuitycheck.com/blog/adgm-gratuity-explained' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'ADGM Gratuity Rules Explained 2026 | Abu Dhabi Global Market Guide',
      description: 'Complete guide to ADGM end-of-service gratuity rules, calculation, and comparison with mainland UAE and DIFC.',
      url: 'https://www.uaegratuitycheck.com/blog/adgm-gratuity-explained',
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/adgm-gratuity-explained',
    },
  ],
}

export default function AdgmGratuityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › ADGM Gratuity
          </div>
          <h1>ADGM Gratuity Rules Explained 2026</h1>
          <p>Abu Dhabi Global Market operates under its own employment framework — here is how gratuity works · 8 min read · <time dateTime="2026-04-21">Last updated: April 2026</time></p>
        </div>

        <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
          <Image
            src="/images/blog/adgm-gratuity-explained.svg"
            alt="ADGM Gratuity Rules Explained 2026"
            width={1200}
            height={630}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>

        {/* Key answer */}
        <div className="card" style={{ borderLeft: '6px solid #ca8a04', background: '#fefce8' }}>
          <h2 style={{ color: '#713f12' }}>ADGM at a glance</h2>
          <p style={{ color: '#854d0e', fontSize: '18px', fontWeight: 700 }}>
            ADGM (Abu Dhabi Global Market) operates under its own Employment Regulations, separate from UAE mainland labour law. ADGM employees are entitled to end-of-service gratuity using a formula broadly similar to — but not identical to — the mainland UAE rules.
          </p>
          <p>If you work within the ADGM free zone on Al Maryah Island, Abu Dhabi, your employment is governed by ADGM Employment Regulations 2019 (as amended), not by Federal Decree-Law No. 33 of 2021. This page covers what that means for your gratuity entitlement.</p>
        </div>

        {/* What is ADGM */}
        <div className="card">
          <div className="badge bg-teal">WHAT IS ADGM</div>
          <h2>About Abu Dhabi Global Market</h2>
          <p>The Abu Dhabi Global Market (ADGM) is an international financial centre and free zone established on Al Maryah Island in Abu Dhabi. It operates under a common law framework based on English law and has its own independent legal and regulatory system including its own employment law.</p>
          <p>ADGM should not be confused with:</p>
          <ul>
            <li><strong>Mainland UAE</strong> — governed by Federal Decree-Law No. 33 of 2021 (MOHRE)</li>
            <li><strong>DIFC</strong> — Dubai International Financial Centre, which has replaced traditional gratuity with the DEWS savings scheme (see our <Link href="/blog/difc-dews-gratuity-explained" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>DIFC DEWS guide</Link>)</li>
            <li><strong>Other free zones</strong> — such as JAFZA, DMCC, DAFZA — which mostly follow mainland UAE labour law for gratuity purposes</li>
          </ul>
        </div>

        {/* ADGM gratuity calculation */}
        <div className="card">
          <div className="badge bg-teal">ADGM GRATUITY CALCULATION</div>
          <h2>How ADGM gratuity is calculated</h2>
          <p>Under ADGM Employment Regulations, end-of-service gratuity is calculated on the employee&apos;s basic salary using a day-rate formula similar to the mainland UAE approach:</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Years of continuous service</th><th>Gratuity rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Less than 1 year</td><td>No entitlement</td></tr>
                <tr className="hl"><td>1 to 5 years</td><td>21 calendar days&apos; basic salary per year</td></tr>
                <tr className="hl"><td>More than 5 years</td><td>30 calendar days&apos; basic salary per year (for years beyond 5)</td></tr>
                <tr><td>Maximum cap</td><td>2 years&apos; total basic salary</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '1rem' }}>This is structurally identical to the mainland UAE formula. The key difference lies in how &ldquo;basic salary&rdquo; is defined in the ADGM context, which employment contract terms govern the calculation, and how disputes are resolved (ADGM Courts rather than MOHRE).</p>
        </div>

        {/* Worked example */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLE</div>
          <h2>ADGM gratuity calculation — example</h2>
          <p><strong>Profile:</strong> Finance analyst at an ADGM-registered firm, basic salary AED 18,000/month, 7 years of service, resigned</p>

          <div className="example-box" style={{ marginTop: '1rem' }}>
            <div className="ex-title">ADGM GRATUITY BREAKDOWN</div>
            <div className="ex-line">Daily rate: AED 18,000 ÷ 30 = AED 600</div>
            <div className="ex-line">First 5 years (21 days each): AED 600 × 21 × 5 = AED 63,000</div>
            <div className="ex-line">Years 6 &amp; 7 (30 days each): AED 600 × 30 × 2 = AED 36,000</div>
            <div className="ex-total">Total gratuity: AED 99,000</div>
          </div>

          <p style={{ marginTop: '1rem' }}>Note: The 2-year cap is AED 18,000 × 24 months = AED 432,000 — well above the calculated amount, so the cap does not apply here.</p>
        </div>

        {/* Key differences from mainland */}
        <div className="card">
          <div className="badge bg-gray">ADGM VS MAINLAND UAE — KEY DIFFERENCES</div>
          <h2>How ADGM employment law differs from mainland UAE</h2>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Feature</th><th>UAE Mainland (MOHRE)</th><th>ADGM</th></tr>
              </thead>
              <tbody>
                <tr><td>Governing law</td><td>Federal Decree-Law No. 33 of 2021</td><td>ADGM Employment Regulations 2019</td></tr>
                <tr><td>Dispute resolution</td><td>MOHRE mediation → Labour Court</td><td>ADGM Courts (common law)</td></tr>
                <tr><td>Gratuity formula</td><td>21 days (yr 1–5) / 30 days (yr 5+)</td><td>Same formula</td></tr>
                <tr><td>Gratuity basis</td><td>Basic salary only</td><td>Basic salary (as defined in contract)</td></tr>
                <tr><td>Maximum cap</td><td>2 years&apos; total basic salary</td><td>2 years&apos; total basic salary</td></tr>
                <tr className="hl"><td>Savings scheme</td><td>Optional voluntary scheme</td><td>ADGM has its own optional savings framework</td></tr>
                <tr><td>Probation period</td><td>Up to 6 months</td><td>Up to 6 months (same)</td></tr>
                <tr><td>Notice period</td><td>Min 30 days (graduated by tenure)</td><td>Contractual — min 30 days typical</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ADGM vs DIFC */}
        <div className="card">
          <div className="badge bg-blue">ADGM VS DIFC COMPARISON</div>
          <h2>ADGM gratuity vs DIFC DEWS — which is better?</h2>
          <p>DIFC replaced traditional gratuity with the DEWS (DIFC Employee Workplace Savings) scheme — a monthly contribution model managed by investment fund operators. ADGM has retained a more traditional gratuity structure, though with a common law contract framework.</p>

          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="mini-card" style={{ borderTop: '4px solid #ca8a04' }}>
              <h3 style={{ color: '#713f12' }}>ADGM (traditional gratuity)</h3>
              <ul>
                <li>Lump-sum payment at end of service</li>
                <li>No monthly employer contributions during employment</li>
                <li>Employee bears credit risk if employer becomes insolvent</li>
                <li>Calculated on basic salary at departure</li>
                <li>Disputes in ADGM Courts (common law process)</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid #2563eb' }}>
              <h3 style={{ color: '#1e3a8a' }}>DIFC (DEWS scheme)</h3>
              <ul>
                <li>Monthly contributions (5.83% yr 1–5 / 8.33% yr 5+)</li>
                <li>Funds held with regulated investment providers</li>
                <li>Portable and protected if employer defaults</li>
                <li>Investment growth potential (and risk)</li>
                <li>Disputes in DIFC Courts</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: '1rem' }}>The DEWS model provides better protection against employer insolvency since funds are held separately. ADGM&apos;s traditional approach means your gratuity depends on your employer&apos;s ability to pay at the time you leave.</p>
        </div>

        {/* Dispute resolution */}
        <div className="card">
          <div className="badge bg-red">DISPUTES AND COMPLAINTS</div>
          <h2>What to do if your ADGM employer does not pay gratuity</h2>
          <p>Unlike mainland UAE where you would file with MOHRE, ADGM disputes are handled through the ADGM Courts — a common law court system operating in English.</p>
          <ol>
            <li style={{ marginBottom: '0.75rem' }}><strong>Contact your employer in writing</strong> — state the amount owed and give a 14-day deadline to pay</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>File a claim with the ADGM Employment Dispute Resolution Authority (EDRA)</strong> — this is the first step for employment disputes under AED 250,000</li>
            <li style={{ marginBottom: '0.75rem' }}><strong>Escalate to ADGM Courts</strong> — if EDRA mediation fails, the matter goes to the ADGM Court of First Instance</li>
            <li><strong>Seek legal advice</strong> — ADGM operates under common law and proceedings are in English; legal representation is often worthwhile</li>
          </ol>
          <div className="warn-box">
            Note: You cannot file a MOHRE complaint for an ADGM employment dispute. MOHRE&apos;s jurisdiction covers mainland UAE companies only. ADGM has an entirely separate regulatory body.
          </div>
        </div>

        {/* FAQs */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions about ADGM gratuity</h2>

          <h3 style={{ marginTop: '1rem' }}>My company is based in Abu Dhabi but not in ADGM — which law applies?</h3>
          <p>If your employer is not registered within the ADGM free zone, mainland UAE federal labour law (Federal Decree-Law No. 33 of 2021) applies, regardless of where in Abu Dhabi the office is located. ADGM jurisdiction is limited to companies registered within the ADGM free zone on Al Maryah Island.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Does ADGM have a minimum wage?</h3>
          <p>ADGM does not have a specific minimum wage regulation for private sector employees, following a similar approach to the UAE mainland which currently has no universal minimum wage for white-collar private sector workers (though there are sector-specific minimums).</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I transfer my ADGM gratuity entitlement if I move to a mainland UAE company?</h3>
          <p>No — gratuity entitlements do not transfer between employers. When you leave your ADGM employer, you receive your full ADGM gratuity payment. When you eventually leave your mainland employer, you start a new gratuity calculation from zero with that employer.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #ca8a04 0%, #713f12 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Estimate your ADGM gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>The gratuity formula is identical to mainland UAE — use the calculator with your basic salary and service years.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

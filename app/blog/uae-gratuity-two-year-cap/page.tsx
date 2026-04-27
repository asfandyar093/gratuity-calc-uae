import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'UAE Gratuity 2 Year Cap Explained 2026 | Maximum Payout Guide',
  description:
    'UAE gratuity cannot exceed two years of basic salary. Learn exactly how the 2-year cap works, which employees hit it, worked examples, and whether it applies to your situation.',
  keywords: [
    'UAE gratuity cap',
    'UAE gratuity maximum',
    'UAE gratuity 2 year limit',
    'gratuity cap UAE 2026',
    'UAE end of service maximum',
    'UAE gratuity ceiling',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-two-year-cap',
  },
  openGraph: {
    images: ['/images/blog/uae-gratuity-two-year-cap.svg'],
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
        { '@type': 'ListItem', position: 3, name: 'UAE Gratuity 2-Year Cap', item: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-two-year-cap' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity 2 Year Cap Explained 2026 | Maximum Payout Guide',
      description: 'How the UAE gratuity two-year maximum cap works, who it affects, and worked examples.',
      url: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-two-year-cap',
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-two-year-cap',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the maximum UAE gratuity payout?',
          acceptedAnswer: { '@type': 'Answer', text: 'The maximum UAE end-of-service gratuity is two years of basic salary. This cap is set by Article 51 of Federal Decree-Law No. 33 of 2021. It only affects employees with very long service (typically 25+ years).' },
        },
      ],
    },
  ],
}

export default function TwoYearCapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › 2-Year Cap
          </div>
          <h1>UAE Gratuity 2-Year Cap Explained 2026</h1>
          <p>The maximum gratuity rule — who hits it and how the cap is calculated · 6 min read · <time dateTime="2026-04-21">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/uae-gratuity-two-year-cap.svg"
          alt="UAE gratuity two-year maximum payout cap explained"
          title="UAE Gratuity 2-Year Cap Explained 2026"
          caption="The UAE gratuity formula is capped at two years of basic salary, mainly affecting very long-service employees."
        />

        {/* Key answer */}
        <div className="card" style={{ borderLeft: '6px solid #ea580c', background: '#fff7ed' }}>
          <h2 style={{ color: '#7c2d12' }}>The 2-year cap — what it means</h2>
          <p style={{ color: '#c2410c', fontSize: '18px', fontWeight: 700 }}>
            UAE law caps total end-of-service gratuity at two years&apos; worth of basic salary. If the formula calculation exceeds this amount, you receive the two-year cap — not the higher formula result.
          </p>
          <p>This limit is set by Article 51 of Federal Decree-Law No. 33 of 2021. In practice, the cap only affects employees with very long service periods — typically 25 years or more — because the standard formula produces less than two years&apos; salary for most service lengths.</p>
          <p>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
              Check whether the cap applies to you →
            </Link>
          </p>
        </div>

        {/* How the formula works */}
        <div className="card">
          <div className="badge bg-teal">UNDERSTANDING THE FORMULA AND THE CAP</div>
          <h2>Step 1 — the standard gratuity formula</h2>
          <p>Before the cap can apply, you calculate gratuity using the standard formula:</p>

          <div className="example-box" style={{ marginTop: '1rem' }}>
            <div className="ex-title">STANDARD FORMULA</div>
            <div className="ex-line">Years 1–5: (Basic salary ÷ 30) × 21 × years served</div>
            <div className="ex-line">Years beyond 5: (Basic salary ÷ 30) × 30 × additional years</div>
            <div className="ex-line">Two-year maximum: Basic salary × 24</div>
          </div>

          <h2 style={{ marginTop: '1.5rem' }}>Step 2 — apply the cap</h2>
          <p>Compare the formula result against the two-year maximum:</p>
          <ul>
            <li>If formula result &lt; (basic salary × 24) → pay the formula result</li>
            <li>If formula result ≥ (basic salary × 24) → pay the cap (basic salary × 24)</li>
          </ul>
        </div>

        {/* When cap kicks in */}
        <div className="card">
          <div className="badge bg-teal">WHEN DOES THE CAP KICK IN?</div>
          <h2>How many years before the 2-year cap is reached?</h2>
          <p>The cap kicks in at approximately <strong>24.9 years of service</strong>. Here is why:</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Years of service</th><th>Formula result (in monthly salaries)</th><th>Cap applied?</th></tr>
              </thead>
              <tbody>
                <tr><td>5 years</td><td>3.5 months</td><td>No</td></tr>
                <tr><td>10 years</td><td>8.5 months</td><td>No</td></tr>
                <tr><td>15 years</td><td>13.5 months</td><td>No</td></tr>
                <tr><td>20 years</td><td>18.5 months</td><td>No</td></tr>
                <tr className="hl"><td>24 years</td><td>22.5 months</td><td>No — close</td></tr>
                <tr className="hl" style={{ background: '#fee2e2' }}><td>25 years</td><td>25.5 months → capped at 24</td><td><strong>Yes ✗</strong></td></tr>
                <tr style={{ background: '#fee2e2' }}><td>30 years</td><td>30.5 months → capped at 24</td><td><strong>Yes ✗</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div className="warn-box" style={{ marginTop: '1rem' }}>
            The formula result in &ldquo;monthly salaries&rdquo;: Years 1–5 contribute (21/30) × years = 3.5 months; Years 5+ each contribute (30/30) = 1 month per year. So 25 years = 3.5 + (25–5) × 1 = 3.5 + 20 = 23.5 months, which is below 24. At approximately 24.9 years the uncapped formula hits 24 months exactly.
          </div>
        </div>

        {/* Worked examples */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLES</div>
          <h2>How the cap affects real calculations</h2>

          <h3 style={{ marginTop: '1rem' }}>Example 1 — 20 years (cap does NOT apply)</h3>
          <p><strong>Profile:</strong> AED 15,000 basic salary, 20 years of service</p>
          <div className="example-box" style={{ marginTop: '0.5rem' }}>
            <div className="ex-line">Daily rate: AED 15,000 ÷ 30 = AED 500</div>
            <div className="ex-line">First 5 years: AED 500 × 21 × 5 = AED 52,500</div>
            <div className="ex-line">Years 6–20 (15 years × 30 days): AED 500 × 30 × 15 = AED 225,000</div>
            <div className="ex-line">Formula total: AED 277,500</div>
            <div className="ex-line">Two-year cap: AED 15,000 × 24 = AED 360,000</div>
            <div className="ex-total">✓ Cap does not apply — gratuity = AED 277,500</div>
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Example 2 — 30 years (cap DOES apply)</h3>
          <p><strong>Profile:</strong> AED 15,000 basic salary, 30 years of service</p>
          <div className="example-box" style={{ marginTop: '0.5rem' }}>
            <div className="ex-line">Daily rate: AED 15,000 ÷ 30 = AED 500</div>
            <div className="ex-line">First 5 years: AED 500 × 21 × 5 = AED 52,500</div>
            <div className="ex-line">Years 6–30 (25 years × 30 days): AED 500 × 30 × 25 = AED 375,000</div>
            <div className="ex-line">Formula total: AED 427,500</div>
            <div className="ex-line">Two-year cap: AED 15,000 × 24 = AED 360,000</div>
            <div className="ex-total">✗ Cap applies — gratuity = AED 360,000 (not AED 427,500)</div>
          </div>

          <p style={{ marginTop: '1rem' }}>In this case, the employee &ldquo;loses&rdquo; AED 67,500 due to the cap. This is the legal maximum — it cannot be challenged unless the employment contract offers a higher contractual gratuity (some do).</p>
        </div>

        {/* Can employer pay more */}
        <div className="card">
          <div className="badge bg-gray">CAN YOU GET MORE THAN THE CAP?</div>
          <h2>When an employer can pay above the 2-year cap</h2>
          <p>The two-year cap is a statutory minimum protection — it prevents employers from paying <em>less</em> than the minimum gratuity. However, it does not prevent employers from being more generous.</p>
          <p>An employment contract or company policy can legally provide for:</p>
          <ul>
            <li>Gratuity exceeding the two-year cap</li>
            <li>Gratuity calculated on total salary rather than basic salary only</li>
            <li>Additional ex-gratia payments on top of statutory gratuity</li>
            <li>A voluntary end-of-service savings scheme with higher contributions</li>
          </ul>
          <div className="success-box">
            If your employment contract states a higher gratuity than what UAE law requires, your employer is bound by the contractual term — not just the statutory minimum. Always read your contract carefully.
          </div>
        </div>

        {/* Cap and salary increases */}
        <div className="card">
          <div className="badge bg-teal">SALARY INCREASES AND THE CAP</div>
          <h2>How salary increases affect the 2-year cap calculation</h2>
          <p>UAE gratuity is always calculated on the <strong>last basic salary</strong> at the time of leaving — not an average of salaries over the years. This means:</p>
          <ul>
            <li>Salary increases during employment improve both the formula result <em>and</em> the cap amount simultaneously</li>
            <li>The two-year cap scales up with salary increases — a higher final salary means a higher cap ceiling</li>
            <li>Employees near the cap threshold should be aware that salary increases in later career years mean they likely still do not exceed the cap</li>
          </ul>
          <p><strong>Example:</strong> If your basic salary has grown from AED 10,000 to AED 20,000 over 30 years, the cap is calculated on AED 20,000 × 24 = AED 480,000 — and the formula also uses AED 20,000. Only the final salary matters.</p>
        </div>

        {/* FAQs */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>Is the 2-year cap based on basic salary or total salary?</h3>
          <p>The cap is based on basic salary only — the same salary component used in the formula calculation. Two years means 24 months of basic salary. Allowances, bonuses, and other elements of total pay are excluded from both the calculation and the cap.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer says my gratuity is capped and I have only 15 years of service. Is this correct?</h3>
          <p>No — the two-year cap does not apply at 15 years of service. At 15 years, the formula produces approximately 13.5 months of basic salary — well below the 24-month cap. If your employer is applying the cap at 15 years, they are miscalculating. File a complaint with MOHRE — see our <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE complaint guide</Link>.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Does the 2-year cap apply in DIFC or ADGM?</h3>
          <p>Yes — both DIFC (under DEWS) and ADGM apply their own equivalent of the two-year cap. In DIFC&apos;s DEWS scheme, there is a monthly contribution cap. In ADGM, the same two-year basic salary cap applies as on the mainland. For DIFC details, see our <Link href="/blog/difc-dews-gratuity-explained" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>DIFC DEWS guide</Link>.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #7c2d12 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Check if the cap applies to your gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>The calculator automatically applies the two-year maximum — enter your salary and service dates.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

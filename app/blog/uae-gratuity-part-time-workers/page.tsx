import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'UAE Gratuity for Part-Time Workers 2026 | Proportional Calculation Guide',
  description:
    'Part-time employees in the UAE are entitled to gratuity on a proportional basis. Learn how the calculation works, the eligibility rules, and see worked examples for different part-time arrangements.',
  keywords: [
    'UAE gratuity part time workers',
    'part time employee gratuity UAE',
    'UAE EOSB part time',
    'flexible work gratuity UAE 2026',
    'part time gratuity calculation Dubai',
    'UAE labour law part time gratuity',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-part-time-workers',
  },
  openGraph: {
    images: ['/images/blog/real/uae-gratuity-part-time-workers.png'],
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
        { '@type': 'ListItem', position: 3, name: 'UAE Gratuity for Part-Time Workers', item: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-part-time-workers' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity for Part-Time Workers 2026 | Proportional Calculation Guide',
      description: 'Part-time employees in the UAE are entitled to proportional gratuity. Full calculation guide with examples.',
      url: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-part-time-workers',
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-part-time-workers',
    },
  ],
}

export default function PartTimeWorkersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Part-Time Workers
          </div>
          <h1>UAE Gratuity for Part-Time Workers 2026</h1>
          <p>Yes, part-time employees are entitled to gratuity — here is how it is calculated · 7 min read · <time dateTime="2026-04-21">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-gratuity-part-time-workers.png"
          alt="UAE gratuity guide for part-time workers using proportional hours"
          title="UAE Gratuity for Part-Time Workers 2026"
          caption="Part-time employees can qualify for proportional UAE gratuity based on their working hours and service period."
        />

        {/* Key answer */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            Yes. Part-time workers in the UAE are entitled to end-of-service gratuity under Federal Decree-Law No. 33 of 2021. The calculation is proportional to working hours compared to a full-time equivalent.
          </p>
          <p>Article 57 of the new labour law explicitly recognises part-time employment and states that end-of-service benefits apply proportionally. After one year of continuous service, part-time employees have the same gratuity rights as full-time staff — scaled to their hours.</p>
          <p>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
              Calculate your gratuity now →
            </Link>
          </p>
        </div>

        {/* What is part time */}
        <div className="card">
          <div className="badge bg-teal">WHAT COUNTS AS PART-TIME IN UAE</div>
          <h2>Part-time employment under UAE law</h2>
          <p>The 2021 UAE Labour Law formally recognised flexible work arrangements including part-time, temporary, and task-based contracts. A part-time employee is defined as someone who works for one or more employers for a specific number of hours, days, or weeks that is less than the normal full-time working hours (48 hours per week under the standard UAE framework, or the employer&apos;s standard hours if lower).</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Work arrangement</th><th>Gratuity entitlement</th></tr>
              </thead>
              <tbody>
                <tr><td>Full-time (48 hrs/week)</td><td>Standard gratuity — full calculation</td></tr>
                <tr className="hl"><td>Part-time (e.g. 24 hrs/week = 50%)</td><td>50% of standard gratuity</td></tr>
                <tr><td>Part-time with multiple employers</td><td>Each employer calculates separately</td></tr>
                <tr><td>Freelance / self-employed</td><td>Not entitled — no employment relationship</td></tr>
                <tr><td>Contractor via agency</td><td>Agency is the employer — entitled from agency</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The formula */}
        <div className="card">
          <div className="badge bg-teal">THE CALCULATION FORMULA</div>
          <h2>How to calculate gratuity for part-time workers</h2>
          <p>The proportional formula works in two steps:</p>
          <ol>
            <li style={{ marginBottom: '0.75rem' }}><strong>Calculate the full-time equivalent gratuity</strong> — using your actual basic salary and years of service, as if you were full-time</li>
            <li><strong>Apply the part-time ratio</strong> — multiply by (your weekly hours ÷ standard full-time hours)</li>
          </ol>

          <div className="example-box" style={{ marginTop: '1rem' }}>
            <div className="ex-title">FORMULA</div>
            <div className="ex-line">Part-time gratuity = Full-time gratuity × (actual hours ÷ FTE hours)</div>
            <div className="ex-line">Where FTE = employer&apos;s standard full-time hours (typically 48 hrs/week)</div>
          </div>
        </div>

        {/* Worked examples */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLES</div>
          <h2>Part-time gratuity — three scenarios</h2>

          <h3 style={{ marginTop: '1rem' }}>Example 1 — 50% part-time, 3 years</h3>
          <p><strong>Profile:</strong> AED 4,000 basic salary (for 24 hrs/week), full-time equivalent is 48 hrs/week, 3 years of service</p>
          <div className="example-box" style={{ marginTop: '0.5rem' }}>
            <div className="ex-line">Daily rate: AED 4,000 ÷ 30 = AED 133.33</div>
            <div className="ex-line">Full-time equivalent gratuity (3 yrs × 21 days): AED 133.33 × 21 × 3 = AED 8,400</div>
            <div className="ex-line">Part-time ratio: 24 hrs ÷ 48 hrs = 0.5</div>
            <div className="ex-total">Part-time gratuity: AED 8,400 × 0.5 = AED 4,200</div>
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Example 2 — 75% part-time, 6 years</h3>
          <p><strong>Profile:</strong> AED 6,000 basic salary (for 36 hrs/week), full-time = 48 hrs/week, 6 years of service</p>
          <div className="example-box" style={{ marginTop: '0.5rem' }}>
            <div className="ex-line">Daily rate: AED 6,000 ÷ 30 = AED 200</div>
            <div className="ex-line">First 5 years (21 days each): AED 200 × 21 × 5 = AED 21,000</div>
            <div className="ex-line">Year 6 beyond 5 years (30 days): AED 200 × 30 × 1 = AED 6,000</div>
            <div className="ex-line">Full-time equivalent total: AED 27,000</div>
            <div className="ex-line">Part-time ratio: 36 hrs ÷ 48 hrs = 0.75</div>
            <div className="ex-total">Part-time gratuity: AED 27,000 × 0.75 = AED 20,250</div>
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Example 3 — working for two employers</h3>
          <p><strong>Profile:</strong> 20 hrs/week with Employer A (basic AED 3,000) and 20 hrs/week with Employer B (basic AED 2,500) — both for 4 years. Full-time = 48 hrs/week.</p>
          <div className="example-box" style={{ marginTop: '0.5rem' }}>
            <div className="ex-line">Employer A: (AED 3,000 ÷ 30) × 21 × 4 × (20÷48) = AED 3,500</div>
            <div className="ex-line">Employer B: (AED 2,500 ÷ 30) × 21 × 4 × (20÷48) = AED 2,917</div>
            <div className="ex-total">Total from both employers: AED 6,417</div>
          </div>
          <p style={{ marginTop: '0.75rem' }}>Each employer calculates and pays their portion independently.</p>
        </div>

        {/* Eligibility rules */}
        <div className="card">
          <div className="badge bg-gray">ELIGIBILITY RULES</div>
          <h2>Eligibility — same rules as full-time</h2>
          <ul>
            <li><strong>Minimum service:</strong> You must have completed at least one year of continuous service with the same employer to be entitled to any gratuity</li>
            <li><strong>Resignation:</strong> Full proportional gratuity after 1+ year — the 2022 law removed all resignation penalties (see our <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>resignation vs termination guide</Link>)</li>
            <li><strong>Misconduct dismissal:</strong> Gratuity can be forfeited under Article 120 — same as full-time employees</li>
            <li><strong>Two-year cap:</strong> Total gratuity cannot exceed the equivalent of two years&apos; basic salary at your part-time rate</li>
            <li><strong>Freelancers:</strong> If you hold a freelance permit and work as an independent contractor, you are not an employee and have no gratuity entitlement</li>
          </ul>
        </div>

        {/* Part time and multiple jobs */}
        <div className="card">
          <div className="badge bg-teal">MULTIPLE JOBS</div>
          <h2>Can you work part-time for multiple UAE employers?</h2>
          <p>Yes. The 2021 UAE Labour Law explicitly allows workers to hold part-time contracts with multiple employers simultaneously, provided this does not violate any non-compete clause and the combined working hours do not affect performance. Each employer issues their own work permit (MOHRE permit) and is independently responsible for calculating and paying their share of your gratuity.</p>
          <div className="success-box">
            Important: Each employer calculates gratuity separately based on their own contract. You cannot combine service years from different employers for a single gratuity calculation — each relationship is treated independently.
          </div>
        </div>

        {/* FAQs */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>My hours vary each week. How is the part-time ratio calculated?</h3>
          <p>If your contracted hours vary, the ratio should be based on the average hours in your employment contract. If your actual hours regularly exceeded your contracted hours, keep payslips as evidence. In disputes, MOHRE and courts typically use the contracted hours unless you can demonstrate a consistent higher pattern.</p>

          <h3 style={{ marginTop: '1.25rem' }}>I transitioned from full-time to part-time mid-employment. How is gratuity calculated?</h3>
          <p>Your gratuity is calculated on the last basic salary at the time of leaving, but the part-time ratio applies only from when you became part-time. The years worked full-time would use a ratio of 1.0, and part-time years would use the lower ratio. It is best to consult HR for the exact breakdown if this applies to you.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Does UAE gratuity apply to domestic workers on part-time arrangements?</h3>
          <p>Domestic workers (housemaids, cleaners, nannies) are covered under a separate framework — Federal Law No. 10 of 2017 on Domestic Workers. Part-time domestic workers are entitled to end-of-service benefits after completing two years of service, calculated proportionally to their working hours. See our <Link href="/gratuity-calculator/domestic-workers" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>domestic workers guide</Link> for full details.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your part-time gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Enter your basic salary and years of service — the calculator handles the proportional step.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

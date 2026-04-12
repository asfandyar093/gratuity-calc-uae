import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity — Resignation vs Termination 2026 | What\'s the Difference?',
  description:
    'Does resignation affect your UAE gratuity in 2026? Complete guide to how resignation and termination affect your end-of-service benefit under the new UAE Labour Law.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-resignation-vs-termination',
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
        { '@type': 'ListItem', position: 3, name: 'Resignation vs Termination', item: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-resignation-vs-termination' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity — Resignation vs Termination 2026',
      description: 'Does resignation affect your UAE gratuity in 2026? Complete guide with worked examples.',
      url: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-resignation-vs-termination',
      datePublished: '2026-01-15',
      dateModified: '2026-01-15',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-resignation-vs-termination',
    },
  ],
}

export default function ResignationVsTerminationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Resignation vs Termination
          </div>
          <h1>UAE Gratuity — Resignation vs Termination 2026</h1>
          <p>Does resigning affect how much gratuity you get? The answer may surprise you · 7 min read · <time dateTime="2026-04-12">Last updated: April 2026</time></p>
        </div>

        {/* Key answer */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            Under the 2022 UAE Labour Law, resignation and termination result in the SAME gratuity amount. There is no reduction for resigning.
          </p>
          <p>Federal Decree-Law No. 33 of 2021 (effective February 2022) eliminated all resignation-based gratuity reductions. If you have completed one or more years of continuous service, you receive full gratuity — whether you resigned or were terminated.</p>
          <p>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
              Calculate your exact gratuity now →
            </Link>
          </p>
        </div>

        {/* Old vs new law */}
        <div className="card">
          <div className="badge bg-teal">OLD LAW VS NEW LAW</div>
          <h2>How the law changed — old rules vs 2022 rules</h2>
          <p>Before February 2022, UAE labour law treated resignation very differently from termination under unlimited contracts. The old sliding scale reduced gratuity significantly for employees who resigned early.</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Scenario</th><th>Old law (before 2022)</th><th>New law (2022 onwards)</th></tr>
              </thead>
              <tbody>
                <tr><td>Resignation — 1 to 3 years</td><td>1/3 of full gratuity only</td><td className="hl">Full gratuity ✓</td></tr>
                <tr><td>Resignation — 3 to 5 years</td><td>2/3 of full gratuity only</td><td className="hl">Full gratuity ✓</td></tr>
                <tr><td>Resignation — 5+ years</td><td>Full gratuity</td><td className="hl">Full gratuity ✓</td></tr>
                <tr><td>Termination — any duration</td><td>Full gratuity</td><td className="hl">Full gratuity ✓</td></tr>
                <tr><td>Misconduct dismissal</td><td>No gratuity</td><td>No gratuity (unchanged)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="success-box" style={{ marginTop: '1rem' }}>
            The 2022 law change was a major win for employees. Anyone who resigned before 2022 under an unlimited contract received significantly less than someone terminated — this unfair distinction no longer exists.
          </div>
        </div>

        {/* Comparison */}
        <div className="card">
          <div className="badge bg-teal">SIDE BY SIDE COMPARISON</div>
          <h2>Resignation vs termination — 2026 comparison</h2>
          <div className="two-col">
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>Resignation</h3>
              <ul>
                <li>Full gratuity after 1+ year of service</li>
                <li>Must serve notice period (typically 30–90 days)</li>
                <li>Failure to serve notice may result in compensation to employer</li>
                <li>Gratuity calculation is identical to termination</li>
                <li>Employer cannot withhold gratuity for resignation alone</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3 style={{ color: 'var(--red-dark)' }}>Termination</h3>
              <ul>
                <li>Full gratuity after 1+ year of service</li>
                <li>Employer must give notice or pay in lieu of notice</li>
                <li>Wrongful termination may entitle additional compensation</li>
                <li>Gratuity calculation is identical to resignation</li>
                <li>Misconduct dismissal under Article 120 may forfeit gratuity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When you lose gratuity */}
        <div className="card">
          <div className="badge bg-red">EXCEPTIONS — WHEN YOU MAY LOSE GRATUITY</div>
          <h2>When can an employer withhold gratuity?</h2>
          <p>While resignation no longer affects gratuity, there are specific circumstances where an employer can legally withhold or reduce it:</p>
          <ul>
            <li><strong>Gross misconduct (Article 120)</strong> — Theft, fraud, physical assault, serious breach of confidentiality, or repeated policy violations after formal warning</li>
            <li><strong>Less than 1 year of service</strong> — No gratuity is owed regardless of reason for leaving</li>
            <li><strong>Abandonment of work</strong> — Leaving without proper notice may allow the employer to claim damages from the gratuity</li>
            <li><strong>DIFC and ADGM employees</strong> — These free zones operate under separate schemes (DEWS) and have different rules</li>
          </ul>
          <div className="warn-box">
            If your employer says your gratuity is reduced because you resigned — under the current law this is incorrect. File a complaint with MOHRE at mohre.gov.ae if this happens.
          </div>
        </div>

        {/* Worked example */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLE</div>
          <h2>Same salary, same years — resignation vs termination</h2>
          <p>To show that the calculation is now identical, here is the same employee under both scenarios:</p>
          <p><strong>Employee:</strong> AED 10,000 basic salary, 4 years of service</p>

          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="example-box">
              <div className="ex-title">IF RESIGNED</div>
              <div className="ex-line">Daily wage: AED 10,000 ÷ 30 = AED 333.33</div>
              <div className="ex-line">Gratuity: AED 333.33 × 21 × 4 years</div>
              <div className="ex-total">Total: AED 28,000</div>
            </div>
            <div className="example-box">
              <div className="ex-title">IF TERMINATED</div>
              <div className="ex-line">Daily wage: AED 10,000 ÷ 30 = AED 333.33</div>
              <div className="ex-line">Gratuity: AED 333.33 × 21 × 4 years</div>
              <div className="ex-total">Total: AED 28,000</div>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>Both scenarios produce exactly the same result — AED 28,000. This is the power of the 2022 law change.</p>
          <p>Want to calculate your own figure? Use the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>free UAE gratuity calculator</Link> — enter your basic salary and service dates for an instant breakdown.</p>
        </div>

        {/* Notice period */}
        <div className="card">
          <div className="badge bg-teal">NOTICE PERIODS</div>
          <h2>Notice periods when resigning or being terminated</h2>
          <p>While gratuity is now equal, notice periods still differ and can affect your final settlement:</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Years of service</th><th>Minimum notice period</th></tr>
              </thead>
              <tbody>
                <tr><td>Less than 6 months (probation)</td><td>14 days minimum</td></tr>
                <tr><td>6 months to 5 years</td><td>30 days minimum</td></tr>
                <tr className="hl"><td>More than 5 years</td><td>60 days minimum</td></tr>
                <tr><td>More than 9 years</td><td>90 days minimum</td></tr>
              </tbody>
            </table>
          </div>
          <p>If you resign without serving your notice period, your employer may deduct compensation for the unserved notice days from your final settlement — but they cannot reduce your gratuity entitlement.</p>
        </div>

        {/* FAQs */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>I resigned — will my employer try to reduce my gratuity?</h3>
          <p>Some employers, especially smaller companies, may not be aware of the 2022 law change or may try to apply the old sliding scale. If your employer reduces your gratuity because you resigned, file a complaint immediately with MOHRE at mohre.gov.ae or call 800 60.</p>

          <h3 style={{ marginTop: '1.25rem' }}>What if I resigned without notice?</h3>
          <p>Your gratuity entitlement is protected. However, your employer may seek compensation for the unserved notice period — either deducting it from your final settlement or pursuing it separately. This compensation is for the notice period, not a reduction of your gratuity.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Does a mutual termination agreement affect gratuity?</h3>
          <p>A mutual agreement to end employment (also called a mutual separation) is treated the same as a termination for gratuity purposes. You receive full gratuity based on your years of service. Ensure any mutual separation agreement clearly states the gratuity amount before signing.</p>

          <h3 style={{ marginTop: '1.25rem' }}>هل الاستقالة تؤثر على مكافأة نهاية الخدمة؟</h3>
          <p>لا، بموجب قانون العمل الإماراتي الجديد 2022، لا تؤثر الاستقالة على مكافأة نهاية الخدمة. يحق للموظف الحصول على كامل المكافأة سواء استقال أو أنهى صاحب العمل عقده، شريطة إتمام سنة خدمة متواصلة.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your gratuity — resignation or termination</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>The amount is the same either way. See exactly what you are owed.</p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
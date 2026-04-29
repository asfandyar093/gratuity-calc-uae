import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'Does UAE Gratuity Include Housing Allowance? Basic Salary Guide 2026',
  description:
    'UAE gratuity is calculated on basic salary only — not housing, transport, or other allowances. Learn exactly what counts, what does not, and how to identify your basic salary on a UAE payslip.',
  keywords: [
    'does UAE gratuity include housing allowance',
    'UAE gratuity basic salary',
    'what counts as basic salary UAE gratuity',
    'UAE gratuity allowances',
    'EOSB basic salary UAE',
    'gratuity housing allowance Dubai',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-allowances-basic-salary',
  },
  openGraph: {
    images: ['/images/blog/real/uae-gratuity-allowances-basic-salary.png'],
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
        { '@type': 'ListItem', position: 3, name: 'UAE Gratuity Basic Salary vs Allowances', item: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-allowances-basic-salary' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'Does UAE Gratuity Include Housing Allowance? Basic Salary Guide 2026',
      description: 'UAE gratuity is calculated on basic salary only. Learn what counts and what does not.',
      url: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-allowances-basic-salary',
      datePublished: '2026-04-21',
      dateModified: '2026-04-21',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-allowances-basic-salary',
    },
  ],
}

export default function AllowancesBasicSalaryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Basic Salary vs Allowances
          </div>
          <h1>Does UAE Gratuity Include Housing Allowance?</h1>
          <p>Gratuity is calculated on basic salary only — what that means for your payout · 6 min read · <time dateTime="2026-04-21">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-gratuity-allowances-basic-salary.png"
          alt="UAE gratuity basic salary versus housing, transport, and other allowances"
          title="Does UAE Gratuity Include Housing Allowance?"
          caption="UAE gratuity is calculated on basic salary only, not total package or housing and transport allowances."
        />

        {/* Key answer */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            No. UAE gratuity is calculated on basic salary only. Housing allowance, transport allowance, medical allowance, and other benefits are excluded from the calculation.
          </p>
          <p>Article 51 of Federal Decree-Law No. 33 of 2021 specifies that end-of-service gratuity is based on the &ldquo;last basic wage.&rdquo; Only the base pay component of your salary package counts — everything else is excluded.</p>
          <p>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
              Calculate your exact gratuity using your basic salary →
            </Link>
          </p>
        </div>

        {/* What counts */}
        <div className="card">
          <div className="badge bg-teal">WHAT COUNTS AS BASIC SALARY</div>
          <h2>Basic salary — included in gratuity calculation</h2>
          <p>Basic salary is the fixed, core component of your pay before any additions. For gratuity purposes, basic salary is what your employment contract specifically labels as &ldquo;basic salary&rdquo; or &ldquo;basic wage.&rdquo;</p>

          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>Included ✓</h3>
              <ul>
                <li><strong>Basic salary</strong> — the fixed base pay in your contract</li>
                <li><strong>Consolidated salary</strong> — if your contract has no separate basic/allowance split, the full amount may be treated as basic</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3 style={{ color: 'var(--red-dark)' }}>Excluded ✗</h3>
              <ul>
                <li>Housing / accommodation allowance</li>
                <li>Transport / car allowance</li>
                <li>Food / meal allowance</li>
                <li>Phone / communication allowance</li>
                <li>Medical / health allowance</li>
                <li>Education / schooling allowance</li>
                <li>Commission and bonuses</li>
                <li>Overtime pay</li>
                <li>Cost of living allowance (COLA)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why this matters */}
        <div className="card">
          <div className="badge bg-teal">WHY THIS MATTERS</div>
          <h2>The impact on your gratuity payout</h2>
          <p>In the UAE, many employers structure salaries with a relatively low basic salary and higher allowances. This directly reduces the gratuity payout because only the basic salary counts. Consider this example:</p>

          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Salary component</th><th>Employee A</th><th>Employee B</th></tr>
              </thead>
              <tbody>
                <tr><td>Basic salary</td><td>AED 5,000</td><td>AED 10,000</td></tr>
                <tr><td>Housing allowance</td><td>AED 4,000</td><td>AED 0</td></tr>
                <tr><td>Transport allowance</td><td>AED 1,000</td><td>AED 0</td></tr>
                <tr><td className="hl"><strong>Total monthly pay</strong></td><td className="hl">AED 10,000</td><td className="hl">AED 10,000</td></tr>
                <tr><td><strong>Gratuity after 5 years</strong></td><td><strong>AED 17,500</strong></td><td><strong>AED 35,000</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div className="warn-box" style={{ marginTop: '1rem' }}>
            Both employees earn the same AED 10,000 per month — but Employee B receives <strong>double the gratuity</strong> because their entire salary is classified as basic. If you are negotiating a package, ask your employer to maximise the basic salary component.
          </div>
        </div>

        {/* Worked example */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLE</div>
          <h2>Gratuity calculation on basic salary only</h2>
          <p><strong>Scenario:</strong> AED 8,000 basic salary, 6 years of continuous service, resignation</p>

          <div className="example-box" style={{ marginTop: '1rem' }}>
            <div className="ex-title">STEP-BY-STEP CALCULATION</div>
            <div className="ex-line">Daily wage: AED 8,000 ÷ 30 = AED 266.67</div>
            <div className="ex-line">First 5 years: AED 266.67 × 21 days × 5 = AED 28,000</div>
            <div className="ex-line">Year 6 (beyond 5 years): AED 266.67 × 30 days × 1 = AED 8,000</div>
            <div className="ex-total">Total gratuity: AED 36,000</div>
          </div>

          <p style={{ marginTop: '1rem' }}>Note: Housing, transport, and other allowances play no role in this calculation. Only the AED 8,000 basic salary is used.</p>
          <p>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>Try the free calculator with your own figures →</Link>
          </p>
        </div>

        {/* Consolidated salary */}
        <div className="card">
          <div className="badge bg-gray">CONSOLIDATED SALARY CONTRACTS</div>
          <h2>What if your contract doesn&apos;t split out a basic salary?</h2>
          <p>Some UAE employment contracts — particularly for senior roles or expat packages — list a single consolidated salary figure with no breakdown into basic and allowances. In this case, MOHRE guidance and courts have generally treated the full consolidated salary as the basic salary for gratuity calculation purposes.</p>
          <p>However, this can be contested if the employer argues that allowances were implicit. If your contract is silent on the basic/allowance split, get written clarification from HR before leaving — or request that a split is formally documented in a contract amendment.</p>
          <div className="success-box">
            <strong>Tip:</strong> When reviewing or signing a new employment contract in the UAE, always negotiate for the highest possible basic salary component — even if total package value is the same. It directly increases your future gratuity entitlement.
          </div>
        </div>

        {/* Employer structuring */}
        <div className="card">
          <div className="badge bg-red">WATCH OUT</div>
          <h2>Can employers manipulate basic salary to reduce gratuity?</h2>
          <p>Yes — and it is common. Some employers deliberately keep basic salary low (sometimes as little as 30–40% of total pay) and inflate allowances. This is technically legal as long as basic salary meets the UAE minimum wage requirements for the role.</p>
          <p>However, if an employer artificially restructures your salary near the end of your employment specifically to reduce gratuity, you may have grounds to challenge this. Courts have ruled in favour of employees where salary restructuring was clearly designed to reduce end-of-service entitlement.</p>
          <ul>
            <li>Keep copies of all historical payslips and your original contract</li>
            <li>If your basic salary was suddenly reduced close to your departure, document it</li>
            <li>File a MOHRE complaint if you believe gratuity was underpaid — see our <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE complaint guide</Link></li>
          </ul>
        </div>

        {/* How to find basic salary */}
        <div className="card">
          <div className="badge bg-teal">FINDING YOUR BASIC SALARY</div>
          <h2>How to identify your basic salary on a UAE payslip</h2>
          <p>Your UAE payslip should itemise each component separately. Look for a line labelled:</p>
          <ul>
            <li><strong>Basic Salary</strong> or <strong>Basic Pay</strong> — this is what counts</li>
            <li><strong>الراتب الأساسي</strong> — Arabic label for basic salary</li>
          </ul>
          <p>Do not confuse basic salary with:</p>
          <ul>
            <li><strong>Gross Salary</strong> — this is the total of basic plus all allowances</li>
            <li><strong>Net Salary</strong> — after any deductions (though UAE has no income tax)</li>
            <li><strong>WPS Transfer Amount</strong> — the total amount deposited via the Wages Protection System</li>
          </ul>
          <p>If your payslip does not separately identify basic salary, ask your HR department for a written breakdown. Your employment contract should also state the basic salary component.</p>
        </div>

        {/* FAQs */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>My employer is calculating gratuity on my total salary. Is this correct?</h3>
          <p>It is actually beneficial to you — as long as it is in your favour. If your employer calculates gratuity on total salary (basic plus allowances), you receive more than the law requires. However, if they are calculating on a figure lower than your true basic salary, that is underpayment and you can file a MOHRE complaint.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Does commission count toward gratuity?</h3>
          <p>No. Commission, bonuses, performance pay, and variable compensation are excluded from gratuity calculations. Only fixed basic salary counts. Some employment contracts include a guaranteed minimum commission — if this is structured as a fixed monthly payment in your contract, consult a UAE labour lawyer about whether it could be argued as part of basic salary.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My basic salary changed during my employment. Which figure is used?</h3>
          <p>Gratuity is calculated on the <strong>last basic salary</strong> at the time of leaving. If you received salary increases over the years, your final, highest basic salary is used for the entire period of service — a favourable rule for long-serving employees.</p>

          <h3 style={{ marginTop: '1.25rem' }}>هل تدخل بدل السكن في حساب مكافأة نهاية الخدمة؟</h3>
          <p>لا. مكافأة نهاية الخدمة في الإمارات تُحسب على الراتب الأساسي فقط وفقاً للمادة 51 من المرسوم بقانون اتحادي رقم 33 لسنة 2021. بدل السكن والمواصلات والبدلات الأخرى لا تُحتسب ضمن مكافأة نهاية الخدمة.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--green) 0%, #14532d 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your gratuity on your basic salary</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Enter your basic salary (not total package) for the correct UAE gratuity figure.</p>
          <Link href="/" style={{ display: 'inline-block', background: '#fff', color: 'var(--green-dark)', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

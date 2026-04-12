import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'DIFC DEWS Gratuity Explained 2026 — How It Differs From UAE Standard Gratuity',
  description:
    'Working in DIFC? The DEWS (Employee Workplace Savings) scheme replaces standard UAE gratuity for DIFC employees. Complete guide to how DEWS works, contribution rates, and what happens to your money.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/difc-dews-gratuity-explained',
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
        { '@type': 'ListItem', position: 3, name: 'DIFC DEWS Gratuity Explained', item: 'https://www.uaegratuitycheck.com/blog/difc-dews-gratuity-explained' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'DIFC DEWS Gratuity Explained 2026 — How It Differs From UAE Standard Gratuity',
      description: 'Complete guide to how the DIFC Employee Workplace Savings (DEWS) scheme works and how it differs from standard UAE gratuity.',
      url: 'https://www.uaegratuitycheck.com/blog/difc-dews-gratuity-explained',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/difc-dews-gratuity-explained',
    },
  ],
}

export default function DifcDewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › DIFC DEWS Gratuity Explained
          </div>
          <h1>DIFC DEWS Gratuity Explained 2026</h1>
          <p>Working in the Dubai International Financial Centre? Here is how your end-of-service savings work. · 9 min read</p>
        </div>

        {/* Key fact */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>DIFC employees are NOT covered by standard UAE gratuity</h2>
          <p style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
            If you work in the Dubai International Financial Centre (DIFC), Federal Decree-Law No. 33 of 2021 does not apply to your end-of-service benefit. Instead, you are covered by the DIFC Employee Workplace Savings (DEWS) scheme.
          </p>
          <p>DEWS is a defined-contribution savings scheme managed by Zurich International Life. It functions more like a pension pot than a traditional gratuity payment, and provides significantly more transparency and investment growth potential.</p>
        </div>

        {/* What is DEWS */}
        <div className="card">
          <div className="badge bg-teal">WHAT IS DEWS</div>
          <h2>What is the DIFC Employee Workplace Savings (DEWS) scheme?</h2>
          <p>DEWS was introduced by the DIFC in 2020 as a mandatory replacement for the traditional end-of-service gratuity system. Instead of a lump-sum payment calculated at the end of employment, DEWS requires employers to make monthly contributions into a personal savings account held on behalf of each employee.</p>
          <p>The scheme is administered by Equiom (DIFC) Ltd as the Qualifying Scheme Administrator (QSA), with Zurich International Life as the default fund manager. Employees can also choose from a list of approved alternative providers.</p>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            <strong>Key difference:</strong> Under standard UAE gratuity, your employer holds the money and pays a lump sum when you leave. Under DEWS, contributions are made monthly into a ring-fenced account that belongs to you — even if your employer goes bankrupt.
          </div>
        </div>

        {/* Contribution rates */}
        <div className="card">
          <div className="badge bg-teal">CONTRIBUTION RATES</div>
          <h2>DEWS contribution rates — how much does your employer pay?</h2>
          <p>Employer contribution rates under DEWS are based on the employee&apos;s qualifying salary (equivalent to basic salary) and years of service:</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Years of service</th><th>Employer contribution (% of qualifying salary per month)</th></tr>
              </thead>
              <tbody>
                <tr><td>0 to 5 years</td><td className="hl">5.83% per month</td></tr>
                <tr><td>5+ years</td><td className="hl">8.33% per month</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>These contribution rates are designed to match the traditional gratuity formula (21 days per year for first 5 years = 5.83%; 30 days per year thereafter = 8.33%). The difference is that contributions are paid monthly and invested, rather than accumulated as an unfunded liability.</p>
          <div className="success-box" style={{ marginTop: '1rem' }}>
            Employees can make additional voluntary contributions on top of the mandatory employer contributions. These can be invested in the same fund range and also benefit from investment returns.
          </div>
        </div>

        {/* DEWS vs standard gratuity comparison */}
        <div className="card">
          <div className="badge bg-blue">COMPARISON</div>
          <h2>DEWS vs standard UAE gratuity — key differences</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Factor</th><th>Standard UAE Gratuity</th><th>DIFC DEWS</th></tr>
              </thead>
              <tbody>
                <tr><td>Governing authority</td><td>Federal Ministry (MOHRE)</td><td>DIFC Authority</td></tr>
                <tr><td>Applicable law</td><td>Federal Decree-Law No. 33/2021</td><td>DIFC Employment Law</td></tr>
                <tr><td>How it works</td><td>Lump sum paid at end of service</td><td className="hl">Monthly contributions to personal account</td></tr>
                <tr><td>Where money is held</td><td>With employer (unfunded liability)</td><td className="hl">Ring-fenced account (protected)</td></tr>
                <tr><td>Investment growth</td><td>None — fixed calculation</td><td className="hl">Can grow with investment returns</td></tr>
                <tr><td>Minimum service</td><td>1 year</td><td className="hl">Vesting starts from month 1</td></tr>
                <tr><td>Employer bankruptcy</td><td>Risk of non-payment</td><td className="hl">Protected — held independently</td></tr>
                <tr><td>Voluntary contributions</td><td>Not applicable</td><td className="hl">Employee can contribute extra</td></tr>
                <tr><td>Calculation basis</td><td>Basic salary at exit</td><td className="hl">Monthly qualifying salary</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Vesting */}
        <div className="card">
          <div className="badge bg-teal">VESTING RULES</div>
          <h2>When do you get your DEWS money?</h2>
          <p>Under DEWS, your entitlement to the employer contributions follows a vesting schedule:</p>
          <ul>
            <li><strong>Less than 1 year of service</strong> — No entitlement to employer contributions (same as standard gratuity)</li>
            <li><strong>1 to 5 years of service</strong> — Entitled to the accumulated employer contributions plus any investment returns</li>
            <li><strong>5+ years of service</strong> — Full entitlement at the higher 8.33% monthly rate</li>
          </ul>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            Your own voluntary contributions are always 100% yours from day one — regardless of how long you work for the employer. Only the employer contributions are subject to vesting.
          </div>
          <p style={{ marginTop: '1rem' }}>When you leave employment, you can typically withdraw your DEWS funds immediately or choose to leave them invested while you look for a new role. If you join a new DIFC employer, your DEWS pot can continue to grow with the new employer&apos;s contributions added.</p>
        </div>

        {/* ADGM */}
        <div className="card">
          <div className="badge bg-blue">ADGM NOTE</div>
          <h2>What about ADGM employees?</h2>
          <p>The Abu Dhabi Global Market (ADGM) financial free zone also has its own employment framework separate from UAE federal labour law. ADGM&apos;s end-of-service benefit follows similar principles to DEWS but is governed by ADGM Employment Regulations rather than DIFC rules.</p>
          <p>Key similarities with DEWS: employer contributions made monthly, ring-fenced accounts, investment options, and protections against employer insolvency. If you work in ADGM, consult the ADGM Employment Regulations or your employer&apos;s HR department for your specific entitlements.</p>
        </div>

        {/* FAQ */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions about DEWS</h2>

          <h3 style={{ marginTop: '1rem' }}>I used to work in DIFC before DEWS was introduced in 2020. What about my pre-DEWS gratuity?</h3>
          <p>Employees who were in DIFC employment before the February 2020 DEWS launch had their accrued gratuity entitlement as of that date calculated and transferred into their DEWS account as an opening balance. You should have received a statement confirming this transfer.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I use the UAE gratuity calculator on this site for DEWS?</h3>
          <p>Our calculator applies the standard UAE Federal Labour Law formula, which does not apply to DIFC employment. However, since the DEWS contribution rates (5.83% and 8.33%) are mathematically equivalent to the UAE gratuity formula, the resulting amounts will be comparable — though the actual DEWS balance will also include any investment returns or losses.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer has a DIFC office but I am not a DIFC-registered employee. Which rules apply to me?</h3>
          <p>The key question is whether your employment contract is issued under the DIFC Employment Law. If you are employed by a DIFC-registered entity and your work permit is issued by the DIFC, DEWS applies. If you have a mainland UAE work permit issued by MOHRE, standard UAE gratuity rules apply regardless of where your office is located.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Who manages my DEWS account and how can I check the balance?</h3>
          <p>DEWS is administered by Equiom (DIFC) Ltd. You can access your account, check your balance, and review investment performance through the Zurich International Life portal or by contacting your plan administrator. Your employer should also provide annual benefit statements.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Not in DIFC? Calculate your standard UAE gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>If you are employed on the UAE mainland or in a standard free zone, use our free calculator for an instant EOSB estimate.</p>
          <Link href="/" style={{ display: 'inline-block', background: '#fff', color: '#1a237e', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free UAE gratuity calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

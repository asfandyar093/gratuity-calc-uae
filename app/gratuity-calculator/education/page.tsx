import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

const BASE = 'https://www.uaegratuitycheck.com'

export const metadata: Metadata = {
  title: 'UAE Teacher Gratuity Calculator 2026 | Education Sector EOSB',
  description:
    'Free UAE gratuity calculator for teachers, teaching assistants and private school staff. Calculate end-of-service benefits using basic salary and school contract dates.',
  alternates: { canonical: `${BASE}/gratuity-calculator/education` },
  openGraph: {
    title: 'UAE Teacher Gratuity Calculator 2026',
    description: 'Calculate gratuity for UAE teachers and education-sector employees.',
    url: `${BASE}/gratuity-calculator/education`,
    type: 'website',
    images: [{ url: '/images/blog/real/uae-teachers-gratuity-calculator.png', width: 1200, height: 630, alt: 'UAE teacher gratuity calculator for private school employees' }],
  },
}

const roles = [
  { role: 'Teaching assistant', basic: 'AED 3,500 - 6,000', service: '2-5 years' },
  { role: 'Primary teacher', basic: 'AED 7,000 - 13,000', service: '3-8 years' },
  { role: 'Secondary subject teacher', basic: 'AED 9,000 - 17,000', service: '3-9 years' },
  { role: 'Head of department', basic: 'AED 14,000 - 24,000', service: '5-12 years' },
  { role: 'School administrator', basic: 'AED 5,000 - 12,000', service: '3-10 years' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Gratuity Calculator', item: `${BASE}/gratuity-calculator` },
        { '@type': 'ListItem', position: 3, name: 'Education', item: `${BASE}/gratuity-calculator/education` },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'UAE Teacher Gratuity Calculator 2026',
      url: `${BASE}/gratuity-calculator/education`,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free UAE gratuity calculator for teachers, teaching assistants and private school employees.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
    },
  ],
}

export default function EducationCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <div className="hero" style={{ background: 'linear-gradient(145deg, #0f766e 0%, #0891b2 52%, #f59e0b 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">Education Sector · Private Schools · Updated 2026</div>
          <h1>UAE Teacher Gratuity Calculator 2026<br /><em>EOSB for teachers and school staff</em></h1>
          <p className="hero-desc">Calculate end-of-service gratuity for teachers, teaching assistants, school administrators and private education employees using basic salary and actual employment dates.</p>
          <div className="pills">
            <span className="pill">Private school contracts</span>
            <span className="pill">Academic year renewal checks</span>
            <span className="pill">Basic salary only</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}><Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator">Industry calculators</Link> › Education</nav>

        <figure className="article-hero-image" style={{ marginTop: '1rem' }}>
          <Image src="/images/blog/real/uae-teachers-gratuity-calculator.png" alt="UAE teacher gratuity calculator for private school employees" title="UAE Teacher Gratuity Calculator" width={1200} height={630} priority />
          <figcaption>SEO image: teacher gratuity calculator for UAE private school employees, showing salary, calendar and final settlement planning.</figcaption>
        </figure>

        <div className="info-box">
          <strong>Education-sector note:</strong> Use the employment start date from your contract, not only the first day of the academic term. If annual contracts were renewed without a true break in employment, the service period may still be continuous.
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="9000"
            defaultYears="5"
            defaultContract="limited"
            sectorLabel="Education Sector Gratuity Calculator"
            sectorEmoji="🎓"
          />
        </div>

        <div className="sec">
          <div className="sec-hd">Education salary benchmarks — UAE 2026</div>
          <div className="sec-sd">Typical basic salary ranges vary by curriculum, school rating, emirate and seniority.</div>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Role</th><th>Typical basic salary</th><th>Common service period</th></tr></thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.role}><td>{role.role}</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>{role.basic}</td><td>{role.service}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">TEACHER CHECKLIST</div>
            <h2>Before you accept a school final settlement</h2>
            <ul>
              <li>Confirm whether your summer break was paid leave, unpaid leave or outside the contract period.</li>
              <li>Ask HR to show the monthly basic salary used in the gratuity calculation.</li>
              <li>Check whether any notice-period deduction is supported by the contract.</li>
              <li>Keep copies of renewed contracts, appointment approvals and WPS salary records.</li>
            </ul>
            <p>For more context, read the <Link href="/blog/uae-teachers-gratuity-calculator" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>teacher gratuity guide</Link> and the <Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE final settlement checklist</Link>.</p>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

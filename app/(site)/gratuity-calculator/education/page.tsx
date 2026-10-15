import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import { gratuityAmount, formatAed } from '@/lib/gratuity'
import IndustryCalculator from '@/components/IndustryCalculator'
import { baseOpenGraph } from '@/lib/seo'

const BASE = 'https://www.uaegratuitycheck.com'

export const metadata: Metadata = {
  title: 'UAE Teacher Gratuity Calculator 2026 | Education Sector EOSB',
  description:
    'Free UAE gratuity calculator for teachers, teaching assistants and private school staff. Work out end of service benefits from basic salary and dates.',
  alternates: { canonical: `${BASE}/gratuity-calculator/education` },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Teacher Gratuity Calculator 2026',
    description: 'Calculate gratuity for UAE teachers and education-sector employees.',
    url: `${BASE}/gratuity-calculator/education`,
    type: 'website',
    images: [{ url: '/images/blog/photo/uae-teachers-gratuity-calculator.webp', width: 1200, height: 630, alt: 'Empty classroom with rows of desks and a whiteboard' }],
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
      <div className="hero">
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

        <div style={{ marginTop: '1.5rem' }}>
          <IndustryCalculator
            defaultSalary="9000"
            defaultYears="5"
            sectorLabel="Education Sector Gratuity Calculator"
            sectorEmoji="🎓"
          />
        </div>

        <div className="info-box" style={{ marginTop: '1.5rem' }}>
          <strong>Education-sector note:</strong> Use the employment start date from your contract, not only the first day of the academic term. If annual contracts were renewed without a true break in employment, the service period may still be continuous.
        </div>

        <figure className="article-hero-image" style={{ marginTop: '1rem' }}>
          <Image src="/images/blog/photo/uae-teachers-gratuity-calculator.webp" alt="Empty classroom with rows of desks and a whiteboard" title="UAE Teacher Gratuity Calculator" width={1200} height={630} />
          <figcaption>Teachers and school staff: gratuity is calculated on basic salary and continuous service.</figcaption>
        </figure>

        <div className="sec">
          <h2 className="sec-hd">Education salary benchmarks, UAE 2026</h2>
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
            <p>For more context, check the <Link href="/gratuity-by-years-of-service" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>gratuity by years of service table</Link> and the <Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE final settlement checklist</Link>.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">ACADEMIC YEAR CONTRACTS</div>
            <h2>How gratuity works when you are on yearly school contracts</h2>
            <p>Many teachers sign a contract for one academic year and renew it each summer. The law does not treat each renewal as a fresh start by itself. Article 51(2) of Federal Decree Law No. 33 of 2021 gives gratuity to a full time foreign worker who completed a year or more of continuous service, calculated on the basic wage: 21 days for each of the first five years and 30 days for each year after that. If your contracts followed each other without a real break in employment, your service can run from your first start date. Keep every renewal letter, because HR may otherwise count only the latest contract.</p>
            <div className="example-box">
              <div className="ex-title">Example: teacher with AED 9,000 basic and 6 years of continuous service</div>
              <div className="ex-line">Daily wage: AED 9,000 ÷ 30 = AED 300</div>
              <div className="ex-line">Days earned: 21 × 5 + 30 × 1 = {gratuityAmount(9000, 6).days} days</div>
              <div className="ex-total">Gratuity: {formatAed(gratuityAmount(9000, 6).amount)}</div>
            </div>
            <p>The figure comes from the same engine as the calculator above. It is an illustration, not a quote for any school.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">SUMMER BREAK AND UNPAID DAYS</div>
            <h2>Does the summer break count towards your service?</h2>
            <p>That depends on how your contract treats it. Article 51(4) says unpaid days of absence are not included when service is calculated. If your contract describes the summer as unpaid leave, those days can be taken out of your service. If the summer is paid leave, or you stay on the payroll, it is service like any other month. Ask HR for a written statement of how your summer break was recorded and check it against your contract before you accept a settlement. The <Link href="/blog/unpaid-leave-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>unpaid leave guide</Link> shows how the deduction works.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">LEAVING MID YEAR</div>
            <h2>Resigning part way through the school year</h2>
            <p>Resigning does not change the gratuity formula under Article 51. What changes is the notice. Article 43 requires written notice of between 30 and 90 days as your contract states, and the party who does not serve it pays the other the wage for the notice period or the part not served. Check your contract for the notice length and for any clause about leaving during term, then use the <Link href="/notice-period-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>notice period calculator</Link> for your dates. The <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>resignation versus termination guide</Link> explains why leaving first or being let go gives the same formula.</p>
            <p>School regulators such as KHDA in Dubai and ADEK in Abu Dhabi set education standards for schools. Your gratuity and notice rights come from the labour law. If your final dues are late, the 14 day payment rule in Article 53 applies, and you can follow the steps in <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>how to file a MOHRE complaint</Link>.</p>
          </div>
        </div>

        <RelatedCalculators path="/gratuity-calculator/education" />
        <Footer />
      </main>
    </>
  )
}

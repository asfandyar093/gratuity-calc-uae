import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const BASE = 'https://www.uaegratuitycheck.com'
const canonical = `${BASE}/blog/uae-teachers-gratuity-calculator`

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Teachers 2026 | Private School EOSB Guide',
  description:
    'Calculate UAE gratuity for private school teachers, teaching assistants and school staff. Includes basic salary checks, summer break contracts, KHDA context and final settlement tips.',  alternates: { canonical },
  openGraph: {
    title: 'UAE Gratuity Calculator for Teachers 2026',
    description: 'Private school teacher gratuity guide for Dubai, Abu Dhabi, Sharjah and the wider UAE.',
    url: canonical,
    type: 'article',
    images: [{ url: '/images/blog/real/uae-teachers-gratuity-calculator.png', width: 1200, height: 630, alt: 'UAE teacher in a classroom with students and gratuity documents' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
        { '@type': 'ListItem', position: 3, name: 'UAE Teacher Gratuity Calculator', item: canonical },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity Calculator for Teachers 2026',
      image: `${BASE}/images/blog/real/uae-teachers-gratuity-calculator.png`,
      url: canonical,
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: BASE },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: BASE, logo: `${BASE}/logo.png` },
      mainEntityOfPage: canonical,
    },
  ],
}

export default function TeachersGratuityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Teachers</div>
          <h1>UAE Gratuity Calculator for Teachers</h1>
          <p>Private school teachers, teaching assistants and school staff · 7 min read · <time dateTime="2026-05-12">Last updated: May 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-teachers-gratuity-calculator.png"
          alt="UAE teacher in a classroom with students and gratuity documents"
          title="UAE Gratuity Calculator for Teachers"
          caption="Teachers should check basic salary, continuous service and whether summer breaks or contract renewals affect the final settlement period."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The short answer for teachers</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            Private school teachers are usually entitled to UAE gratuity after one year of continuous service, calculated from basic salary only.
          </p>
          <p>School breaks do not automatically interrupt service if your employment relationship continues. The key question is whether your contract ended or simply paused for the academic calendar.</p>
          <p><Link href="/gratuity-calculator/education" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Open the education-sector gratuity calculator →</Link></p>
        </div>

        <div className="card">
          <div className="badge bg-teal">TEACHER FINAL SETTLEMENT</div>
          <h2>What to check in a teacher gratuity calculation</h2>
          <ul>
            <li><strong>Basic salary:</strong> do not use total package if housing, transport or tuition support are separated.</li>
            <li><strong>Academic-year contract dates:</strong> verify the actual employment start and end dates, not only school term dates.</li>
            <li><strong>Renewals:</strong> yearly contract renewals normally still count as continuous service when there is no break in employment.</li>
            <li><strong>Summer pay:</strong> check whether July and August are paid leave, unpaid leave or outside the contract period.</li>
            <li><strong>Notice period:</strong> schools may offset valid notice-period amounts, but arbitrary gratuity deductions should be challenged.</li>
          </ul>
        </div>

        <div className="card">
          <div className="badge bg-blue">EXAMPLES</div>
          <h2>Teacher gratuity examples</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Role</th><th>Basic salary</th><th>Service</th><th>Estimated gratuity</th></tr></thead>
              <tbody>
                <tr><td>Teaching assistant</td><td>AED 4,500</td><td>3 years</td><td>AED 9,450</td></tr>
                <tr><td>Primary teacher</td><td>AED 9,000</td><td>5 years</td><td>AED 31,500</td></tr>
                <tr><td>Subject teacher</td><td>AED 12,000</td><td>7 years</td><td>AED 66,000</td></tr>
                <tr><td>Head of department</td><td>AED 18,000</td><td>9 years</td><td>AED 126,000</td></tr>
              </tbody>
            </table>
          </div>
          <p>These figures use the standard 21/30 day formula and do not include unpaid leave deductions. Use the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>main calculator</Link> if you need exact dates.</p>
        </div>

        <div className="card">
          <div className="badge bg-gray">DUBAI SCHOOLS</div>
          <h2>KHDA approvals are not the gratuity formula</h2>
          <p>Dubai private school teachers often deal with school-level approvals and regulator processes. Those education approvals are separate from the gratuity formula under UAE employment law.</p>
          <p>
            For Dubai private-school teacher appointment context, see KHDA&apos;s official{' '}
            <a href="https://web.khda.gov.ae/getattachment/Guides/Educators/Requirements-for-Teacher-Appointment-in-Dubai-Priv/School_Teacher_Recruitment_and_Mobility_Guide_EN.pdf.aspx?lang=en-GB" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>
              teacher recruitment and mobility guide
            </a>. For gratuity entitlement, compare your final settlement with the UAE Government&apos;s{' '}
            <a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>
              private-sector end-of-service benefits summary
            </a>.
          </p>
          <div className="success-box">Keep your first contract, all renewal letters, payslips and school exit clearance. Those documents make it much easier to prove continuous service.</div>
        </div>

        <div className="card">
          <div className="badge bg-teal">RELATED GUIDES</div>
          <h2>Useful next reads for school employees</h2>
          <ul>
            <li><Link href="/blog/notice-period-deductions-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Can notice period deductions reduce gratuity?</Link></li>
            <li><Link href="/mohre-annual-leave-calculator" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>MOHRE annual leave calculator</Link></li>
            <li><Link href="/blog/uae-gratuity-less-than-1-year" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Gratuity for less than one year of service</Link></li>
            <li><Link href="/blog/how-to-dispute-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>How to dispute a gratuity calculation</Link></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

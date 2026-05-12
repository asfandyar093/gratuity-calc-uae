import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const BASE = 'https://www.uaegratuitycheck.com'
const canonical = `${BASE}/blog/uae-healthcare-workers-gratuity`

export const metadata: Metadata = {
  title: 'UAE Gratuity for Healthcare Workers 2026 | Nurses, Doctors and Clinics',
  description:
    'UAE gratuity guide for healthcare workers, nurses, doctors, pharmacists, lab technicians and clinic staff. Learn what salary counts, how licensing affects contracts, and how to check final settlement.',
  keywords: [
    'UAE gratuity for healthcare workers',
    'UAE nurse gratuity calculator',
    'doctor gratuity UAE',
    'DHA nurse end of service gratuity',
    'clinic staff final settlement UAE',
  ],
  alternates: { canonical },
  openGraph: {
    title: 'UAE Gratuity for Healthcare Workers 2026',
    description: 'Calculate end-of-service gratuity for nurses, doctors, pharmacists and UAE clinic staff.',
    url: canonical,
    type: 'article',
    images: [{ url: '/images/blog/real/uae-healthcare-workers-gratuity.png', width: 1200, height: 630, alt: 'UAE healthcare workers in a clinic reviewing gratuity and final settlement documents' }],
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
        { '@type': 'ListItem', position: 3, name: 'UAE Healthcare Worker Gratuity', item: canonical },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity for Healthcare Workers 2026',
      description: 'A practical gratuity and final settlement guide for UAE healthcare employees.',
      image: `${BASE}/images/blog/real/uae-healthcare-workers-gratuity.png`,
      url: canonical,
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: BASE },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: BASE, logo: `${BASE}/logo.png` },
      mainEntityOfPage: canonical,
    },
  ],
}

export default function HealthcareWorkersGratuityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Healthcare Workers</div>
          <h1>UAE Gratuity for Healthcare Workers</h1>
          <p>Nurses, doctors, pharmacists, lab technicians and clinic staff · 7 min read · <time dateTime="2026-05-12">Last updated: May 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-healthcare-workers-gratuity.png"
          alt="UAE healthcare workers in a clinic reviewing gratuity and final settlement documents"
          title="UAE Gratuity for Healthcare Workers"
          caption="Healthcare employees should calculate gratuity from basic salary, not the full package with housing, transport, licensing or shift allowances."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The quick rule</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            Most private healthcare employees in the UAE use the standard labour-law gratuity formula: 21 days of basic salary per year for the first five years, then 30 days per year after that.
          </p>
          <p>Use your last monthly basic salary. Housing allowance, transport allowance, medical benefits, overtime, on-call premiums and performance bonuses usually do not count toward gratuity.</p>
          <p><Link href="/gratuity-calculator/healthcare" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Open the UAE healthcare gratuity calculator →</Link></p>
        </div>

        <div className="card">
          <div className="badge bg-teal">HEALTHCARE CONTRACT CHECKS</div>
          <h2>What healthcare workers should check before accepting final settlement</h2>
          <ul>
            <li><strong>Basic salary:</strong> confirm the basic salary line in your contract or WPS salary certificate.</li>
            <li><strong>Service period:</strong> count continuous service with the same employer, including renewed contracts.</li>
            <li><strong>Unpaid leave:</strong> unpaid absence can be excluded from the service period.</li>
            <li><strong>License status:</strong> DHA, DoH or MOHAP licensing issues do not erase earned gratuity rights.</li>
            <li><strong>Payment date:</strong> final dues are normally due within 14 days after contract termination.</li>
          </ul>
          <p>
            For the official private-sector rule summary, see the UAE Government page on{' '}
            <a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>
              end-of-service benefits
            </a>.
          </p>
        </div>

        <div className="card">
          <div className="badge bg-blue">WORKED EXAMPLES</div>
          <h2>Healthcare gratuity examples</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Role</th><th>Basic salary</th><th>Service</th><th>Estimated gratuity</th></tr></thead>
              <tbody>
                <tr><td>Registered nurse</td><td>AED 6,500</td><td>4 years</td><td>AED 18,200</td></tr>
                <tr><td>Pharmacist</td><td>AED 11,000</td><td>5 years</td><td>AED 38,500</td></tr>
                <tr><td>General practitioner</td><td>AED 16,000</td><td>6 years</td><td>AED 72,000</td></tr>
                <tr><td>Consultant physician</td><td>AED 35,000</td><td>10 years</td><td>AED 297,500</td></tr>
              </tbody>
            </table>
          </div>
          <p>These examples assume standard private-sector employment and no unpaid leave deductions. For date-based precision, use the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>main UAE gratuity calculator</Link>.</p>
        </div>

        <div className="card">
          <div className="badge bg-gray">DHA / DOH / MOHAP</div>
          <h2>Licensing and gratuity are separate</h2>
          <p>Your professional license lets you practise. Your employment contract determines your service period and final settlement. If a facility does not renew your contract, that does not normally cancel gratuity that has already accrued.</p>
          <p>
            Dubai healthcare professionals can check DHA licensing services through the official{' '}
            <a href="https://dha.gov.ae/en/dubai-health-licensing-system-shreyan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>
              DHA Sheryan portal
            </a>, but gratuity should still be checked against your employment contract and UAE labour-law rules.
          </p>
          <div className="warn-box">If HR says gratuity is withheld because a license expired, ask for the written legal basis and a full settlement breakdown before signing a full-and-final receipt.</div>
        </div>

        <div className="card">
          <div className="badge bg-teal">RELATED GUIDES</div>
          <h2>Next checks for healthcare employees</h2>
          <ul>
            <li><Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Basic salary vs allowances for UAE gratuity</Link></li>
            <li><Link href="/blog/unpaid-leave-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Does unpaid leave reduce gratuity?</Link></li>
            <li><Link href="/final-settlement-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE final settlement calculator</Link></li>
            <li><Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>How to file a MOHRE complaint for unpaid gratuity</Link></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

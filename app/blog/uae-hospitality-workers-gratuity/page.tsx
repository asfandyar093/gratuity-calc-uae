import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const BASE = 'https://www.uaegratuitycheck.com'
const canonical = `${BASE}/blog/uae-hospitality-workers-gratuity`

export const metadata: Metadata = {
  title: 'UAE Gratuity for Hotel and Restaurant Workers 2026 | Hospitality EOSB',
  description:
    'UAE gratuity guide for hotel, restaurant, cafe and catering employees. Learn how basic salary, service charge, tips, accommodation, food and notice period affect final settlement.',
  keywords: [
    'UAE gratuity for hotel workers',
    'restaurant worker gratuity UAE',
    'hospitality end of service UAE',
    'Dubai hotel employee gratuity',
    'service charge gratuity UAE',
  ],
  alternates: { canonical },
  openGraph: {
    title: 'UAE Gratuity for Hotel and Restaurant Workers 2026',
    description: 'Hospitality gratuity guide for hotel, restaurant, cafe and catering employees in the UAE.',
    url: canonical,
    type: 'article',
    images: [{ url: '/images/blog/real/uae-hospitality-workers-gratuity.png', width: 1200, height: 630, alt: 'UAE hospitality worker gratuity calculation with hotel desk, calculator, service bell and final settlement worksheet' }],
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
        { '@type': 'ListItem', position: 3, name: 'UAE Hospitality Worker Gratuity', item: canonical },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity for Hotel and Restaurant Workers 2026',
      image: `${BASE}/images/blog/real/uae-hospitality-workers-gratuity.png`,
      url: canonical,
      datePublished: '2026-05-12',
      dateModified: '2026-05-12',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: BASE },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: BASE, logo: `${BASE}/logo.png` },
      mainEntityOfPage: canonical,
    },
  ],
}

export default function HospitalityWorkersGratuityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Hospitality Workers</div>
          <h1>UAE Gratuity for Hotel and Restaurant Workers</h1>
          <p>Hotels, restaurants, cafes, catering and tourism roles · 6 min read · <time dateTime="2026-05-12">Last updated: May 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/uae-hospitality-workers-gratuity.png"
          alt="UAE hospitality worker gratuity calculation with hotel desk, calculator, service bell and final settlement worksheet"
          title="UAE Gratuity for Hotel and Restaurant Workers"
          caption="Hospitality employees should separate basic salary from service charge, tips, food, accommodation and transport allowances before calculating gratuity."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The hospitality rule</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            Hotel and restaurant gratuity is usually calculated from basic salary only. Tips, service charge, meals, staff accommodation and transport benefits are usually excluded.
          </p>
          <p>That makes the basic salary line especially important in hospitality contracts, where the total package can include several non-basic benefits.</p>
          <p><Link href="/gratuity-calculator/hospitality" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Open the UAE hospitality gratuity calculator →</Link></p>
        </div>

        <div className="card">
          <div className="badge bg-teal">WHAT COUNTS</div>
          <h2>Hospitality pay items and gratuity</h2>
          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>Usually included</h3>
              <ul>
                <li>Monthly basic salary</li>
                <li>Any consolidated fixed wage if the contract has no allowance split</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3 style={{ color: 'var(--red-dark)' }}>Usually excluded</h3>
              <ul>
                <li>Tips and cash gratuities from guests</li>
                <li>Service charge distribution</li>
                <li>Staff accommodation and meals</li>
                <li>Transport allowance or shuttle benefit</li>
                <li>Overtime, split-shift pay and holiday premiums</li>
              </ul>
            </div>
          </div>
          <p>See the UAE Government&apos;s official <a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>end-of-service benefits guide</a> for the basic-salary rule.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">EXAMPLES</div>
          <h2>Hospitality gratuity examples</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Role</th><th>Basic salary</th><th>Service</th><th>Estimated gratuity</th></tr></thead>
              <tbody>
                <tr><td>Waiter / server</td><td>AED 2,500</td><td>3 years</td><td>AED 5,250</td></tr>
                <tr><td>Receptionist</td><td>AED 4,000</td><td>4 years</td><td>AED 11,200</td></tr>
                <tr><td>Chef de partie</td><td>AED 6,500</td><td>6 years</td><td>AED 29,250</td></tr>
                <tr><td>Hotel manager</td><td>AED 18,000</td><td>8 years</td><td>AED 111,600</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-gray">FINAL SETTLEMENT RISKS</div>
          <h2>Common hospitality final settlement mistakes</h2>
          <ul>
            <li>Using total package instead of basic salary, then being surprised by a lower gratuity result.</li>
            <li>Ignoring unpaid leave or unauthorized absence that HR deducts from continuous service.</li>
            <li>Signing a full-and-final receipt before checking notice-period deductions.</li>
            <li>Assuming guest tips or service charge must be included in statutory gratuity.</li>
          </ul>
          <div className="warn-box">Before signing, request a settlement sheet that separates final salary, unused leave, gratuity, notice-period deductions and any loans or advances.</div>
        </div>

        <div className="card">
          <div className="badge bg-teal">RELATED GUIDES</div>
          <h2>Next checks for hospitality employees</h2>
          <ul>
            <li><Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Does UAE gratuity include allowances?</Link></li>
            <li><Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE final settlement checklist</Link></li>
            <li><Link href="/blog/notice-period-deductions-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Notice period deductions and gratuity</Link></li>
            <li><Link href="/blog/uae-repatriation-ticket-final-settlement" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Repatriation ticket and final settlement</Link></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

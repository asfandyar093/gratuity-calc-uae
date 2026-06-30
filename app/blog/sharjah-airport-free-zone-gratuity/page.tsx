import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'Sharjah Airport Free Zone Gratuity Guide 2026 | SAIF Zone EOSB',
  description: 'Guide to calculating gratuity for Sharjah Airport Free Zone employees using basic salary, service period, and the UAE 21/30 formula.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/sharjah-airport-free-zone-gratuity' },
  openGraph: {
    images: ['/images/blog/sharjah-airport-free-zone-gratuity.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'SAIF Zone Gratuity', item: 'https://www.uaegratuitycheck.com/blog/sharjah-airport-free-zone-gratuity' },
    ] },
    {
      '@type': 'Article',
      headline: 'Sharjah Airport Free Zone Gratuity Guide 2026',
      description: 'Guide to calculating gratuity for Sharjah Airport Free Zone employees using basic salary, service period, and the UAE 21/30 formula.',
      url: 'https://www.uaegratuitycheck.com/blog/sharjah-airport-free-zone-gratuity',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Person', name: 'Asfandyar Khan', url: 'https://www.uaegratuitycheck.com/about', jobTitle: 'Lead Editor', worksFor: { '@type': 'Organization', '@id': 'https://www.uaegratuitycheck.com/#org' } },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/sharjah-airport-free-zone-gratuity',
    },
  ],
}

export default function Page() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Sharjah Airport Free Zone</div>
        <h1>Sharjah Airport Free Zone Gratuity Guide 2026</h1>
        <p>How SAIF Zone employees can estimate gratuity and check final settlement numbers. · 6 min read</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
      </div>

      <BlogHeroImage
        src="/images/blog/sharjah-airport-free-zone-gratuity.png"
        alt="Sharjah Airport Free Zone gratuity guide with airport cargo workers, plane, employment papers, and calculator"
        title="Sharjah Airport Free Zone Gratuity Guide 2026"
        caption="SAIF Zone employees can estimate gratuity using basic salary, service period, and the standard UAE 21/30 formula."
      />

      <div className="card">
        <div className="badge bg-blue">SAIF ZONE CALCULATOR</div>
        <h2>Use the dedicated calculator</h2>
        <p>Sharjah Airport Free Zone employees generally estimate gratuity using the standard UAE private-sector formula. Open the <Link href="/calculate-sharjah-airport-free-zone-gratuity">Sharjah Airport Free Zone gratuity calculator</Link>, enter your basic salary and service period, then download the PDF result.</p>
      </div>

      <div className="card">
        <div className="badge bg-teal">FORMULA</div>
        <h2>The usual 21/30 gratuity calculation</h2>
        <ul>
          <li>Less than one year: usually no gratuity.</li>
          <li>Years 1 to 5: 21 days of basic salary per year.</li>
          <li>After year 5: 30 days of basic salary per year.</li>
          <li>Maximum: two years of basic salary.</li>
        </ul>
      </div>

      <div className="card">
        <div className="badge bg-amber">FINAL SETTLEMENT</div>
        <h2>Remember the other line items</h2>
        <p>Your gratuity is only one part of final settlement. Also check final salary, unused annual leave, notice period pay or deductions, agreed ticket benefits, and any written loan or advance deductions.</p>
        <div className="info-box">Use the <Link href="/final-settlement-calculator-uae">UAE final settlement calculator</Link> for a wider estimate.</div>
      </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: end-of-service benefits</span>
              <small>Official UAE Government overview of private-sector end-of-service benefit provisions.</small>
            </a>
            <a className="article-link-item" href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer">
              <span>MOHRE: Ministry of Human Resources and Emiratisation</span>
              <small>Official UAE ministry responsible for labour law, complaints, and private-sector employment regulation.</small>
            </a>
          </div>
        </div>

        <Footer />
    </main>
    </>
  )
}

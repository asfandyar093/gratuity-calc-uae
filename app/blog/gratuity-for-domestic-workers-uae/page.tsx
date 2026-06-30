import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'Gratuity for Domestic Workers in UAE 2026 | Housemaids, Drivers, Nannies',
  description: 'Guide to domestic worker gratuity in the UAE, how it differs from standard private-sector gratuity, and how to estimate the amount.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/gratuity-for-domestic-workers-uae' },
  openGraph: {
    images: ['/images/blog/gratuity-for-domestic-workers-uae.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
      { '@type': 'ListItem', position: 3, name: 'Domestic Workers Gratuity', item: 'https://www.uaegratuitycheck.com/blog/gratuity-for-domestic-workers-uae' },
    ] },
    {
      '@type': 'Article',
      headline: 'Gratuity for Domestic Workers in UAE 2026',
      description: 'Guide to domestic worker gratuity in the UAE, how it differs from standard private-sector gratuity, and how to estimate the amount.',
      url: 'https://www.uaegratuitycheck.com/blog/gratuity-for-domestic-workers-uae',
      datePublished: '2026-04-29',
      dateModified: '2026-04-29',
      author: { '@type': 'Person', name: 'Asfandyar Khan', url: 'https://www.uaegratuitycheck.com/about', jobTitle: 'Lead Editor', worksFor: { '@type': 'Organization', '@id': 'https://www.uaegratuitycheck.com/#org' } },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/gratuity-for-domestic-workers-uae',
    },
  ],
}

export default function Page() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Domestic workers</div>
        <h1>Gratuity for Domestic Workers in UAE 2026</h1>
        <p>Housemaids, nannies, drivers, cooks, and household workers are not calculated the same way as standard private-sector employees. · 7 min read</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
      </div>

      <BlogHeroImage
        src="/images/blog/gratuity-for-domestic-workers-uae.png"
        alt="Domestic worker gratuity guide in UAE showing home staff, contract papers, and a family home setting"
        title="Gratuity for Domestic Workers in UAE 2026"
        caption="Domestic worker gratuity follows a separate UAE framework, so families and workers should keep contract and salary records."
      />

      <div className="card">
        <div className="badge bg-red">SEPARATE RULES</div>
        <h2>Domestic workers are not under the standard 21/30 formula</h2>
        <p>Domestic worker end-of-service benefits are handled under a separate UAE domestic worker framework, not the standard mainland private-sector formula used for company employees.</p>
        <p>Because implementation details can depend on the contract and current MOHRE guidance, use our <Link href="/gratuity-calculator/domestic-workers">domestic worker gratuity calculator</Link> as an estimate and confirm final obligations through MOHRE or a legal adviser.</p>
      </div>

      <div className="card">
        <div className="badge bg-teal">WHO THIS COVERS</div>
        <h2>Common domestic worker roles</h2>
        <ul>
          <li>Housemaids and cleaners</li>
          <li>Nannies and childcare workers</li>
          <li>Private drivers</li>
          <li>Cooks and household helpers</li>
          <li>Gardeners, farm workers, and similar household roles</li>
        </ul>
      </div>

      <div className="card">
        <div className="badge bg-amber">DOCUMENTS</div>
        <h2>What families and workers should keep</h2>
        <p>Keep a copy of the MOHRE-registered domestic worker contract, salary payment records, leave records, travel ticket agreements, and written termination or renewal notices. These documents matter if there is a dispute over final settlement.</p>
        <div className="info-box">For dispute steps, read <Link href="/blog/how-to-dispute-gratuity-uae">how to dispute gratuity in the UAE</Link>.</div>
      </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/information-and-services/jobs/employment-in-the-private-sector/domestic-helpers" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: domestic workers</span>
              <small>Official UAE Government overview of domestic worker rights, occupations, and services.</small>
            </a>
            <a className="article-link-item" href="https://www.mohre.gov.ae/en/services/register-a-labor-complaint-domestic-workers" target="_blank" rel="noopener noreferrer">
              <span>MOHRE: domestic worker labour complaint</span>
              <small>Official MOHRE service page for registering domestic worker labour complaints.</small>
            </a>
          </div>
        </div>

        <Footer />
    </main>
    </>
  )
}

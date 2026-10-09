import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'About UAE Gratuity Check — Our Mission & Methodology 2026',
  description:
    'Who runs UAE Gratuity Check, how the calculators and guides are built from official UAE sources, and how to contact us or report a correction.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/about',
  },
  openGraph: {
    ...baseOpenGraph,
    title: 'About UAE Gratuity Check — Our Mission & Methodology 2026',
    description:
      'Free UAE gratuity calculators and guides based on official sources, with a public editorial policy and corrections process.',
    url: 'https://www.uaegratuitycheck.com/about',
    type: 'website',
    images: ['/about-og.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.uaegratuitycheck.com/about' },
      ],
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://www.uaegratuitycheck.com/about',
      url: 'https://www.uaegratuitycheck.com/about',
      name: 'About UAE Gratuity Check',
      description:
        'UAE Gratuity Check is a free end-of-service gratuity calculator and guide site based on Federal Decree-Law No. 33 of 2021.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      publisher: { '@id': 'https://www.uaegratuitycheck.com/#org' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.uaegratuitycheck.com/#author',
      name: 'Asfandyar Khan',
      jobTitle: 'Editor',
      url: 'https://www.uaegratuitycheck.com/about',
      worksFor: { '@id': 'https://www.uaegratuitycheck.com/#org' },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.uaegratuitycheck.com/#org',
      name: 'UAE Gratuity Check',
      url: 'https://www.uaegratuitycheck.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.uaegratuitycheck.com/logo.png',
        width: 320,
        height: 90,
      },
      founder: { '@id': 'https://www.uaegratuitycheck.com/#author' },
      foundingDate: '2024',
      description:
        'Provider of free UAE end-of-service gratuity calculators and guides, based on Federal Decree-Law No. 33 of 2021.',
      areaServed: {
        '@type': 'Country',
        name: 'United Arab Emirates',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@uaegratuitycheck.com',
        contactType: 'customer support',
      },
      knowsAbout: [
        'UAE Labour Law',
        'Federal Decree-Law No. 33 of 2021',
        'End-of-service gratuity calculation',
        'MOHRE regulations',
        'UAE expat employment rights',
      ],
      sameAs: [
        'https://www.linkedin.com/company/uae-gratuity-check',
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">About · Methodology · Editorial policy</div>
          <h1>About UAE Gratuity Check</h1>
          <p className="hero-desc">
            Free end-of-service calculators and guides for people working in the UAE, built from official sources.
          </p>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>About</span>
        </nav>

        <div style={{ maxWidth: '760px', margin: '2rem auto 0', lineHeight: 1.8 }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>What this site is</h2>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              UAE Gratuity Check offers free calculators and plain-English guides on UAE end-of-service gratuity, final settlement, leave and notice. The calculators run in your browser: the salary and dates you type are not sent to our servers.
            </p>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              The main formula is Article 51 of Federal Decree-Law No. 33 of 2021: 21 days of basic wage for each of the first five years and 30 days for each year after that, capped at two years&apos; wage. Domestic workers are covered by a separate law, Federal Decree-Law No. 9 of 2022, which sets no gratuity formula; see our <Link href="/gratuity-calculator/domestic-workers" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>domestic worker page</Link>.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Who writes it</h2>
            <div className="author-box" style={{ marginTop: 0 }}>
              <div className="author-box-mark" aria-hidden="true">AK</div>
              <div>
                <p><strong>Asfandyar Khan</strong>, editor and publisher of UAE Gratuity Check.</p>
                <p>Asfandyar writes and maintains the site and its calculators. He is not a lawyer and does not hold a legal or HR qualification that we claim here. Every legal statement is taken from the official sources listed on the page it appears on, so you can check it yourself.</p>
              </div>
            </div>
            <p className="legal-note">
              Legal review: the content has not been reviewed by a lawyer. It is general information based on official sources, not legal advice. For disputes or unusual cases, contact MOHRE or a UAE-qualified employment lawyer.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>How the site is built and reviewed</h2>
            <ul style={{ paddingInlineStart: '1.25rem', color: 'var(--text-muted)', display: 'grid', gap: '6px' }}>
              <li>Rules and formulas come from the official legislation text and government pages, not from other calculator sites.</li>
              <li>Key pages show a &ldquo;last reviewed&rdquo; date and the sources used. A page only gets a new date when it has actually been rechecked.</li>
              <li>Where the law is silent or unclear (for example the domestic worker gratuity), we say so instead of guessing.</li>
              <li>Read the full <Link href="/editorial-policy" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>editorial policy</Link>.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Official sources we rely on</h2>
            <ul style={{ paddingInlineStart: '1.25rem', display: 'grid', gap: '6px' }}>
              <li><a href="https://uaelegislation.gov.ae/en/legislations/1541" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Federal Decree-Law No. 33 of 2021 (UAE Labour Law)</a></li>
              <li><a href="https://uaelegislation.gov.ae/en/legislations/1593" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Federal Decree-Law No. 9 of 2022 (domestic workers)</a></li>
              <li><a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>u.ae: end of service benefits in the private sector</a></li>
              <li><a href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>MOHRE (Ministry of Human Resources and Emiratisation)</a></li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Limitations</h2>
            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '12px', padding: '1.25rem', color: '#78350f' }}>
              <p style={{ margin: '0 0 0.75rem' }}>Results are estimates for information only. Your actual entitlement can differ because of:</p>
              <ul style={{ margin: 0, paddingInlineStart: '1.25rem', lineHeight: 1.9 }}>
                <li>Free zone rules (DIFC, ADGM and others have their own employment regimes)</li>
                <li>Dismissal cases, deductions allowed by law, or a court judgment</li>
                <li>Contract or company terms more favourable than the statutory minimum</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem' }}>Contact and corrections</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Found a mistake? Email <a href="mailto:contact@uaegratuitycheck.com" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>contact@uaegratuitycheck.com</a> with the page and the official source. See how we handle <Link href="/editorial-policy#corrections" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>corrections</Link>.
            </p>
          </section>
        </div>

        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact UAE Gratuity Check — Questions, Corrections & Feedback',
  description: 'Get in touch with UAE Gratuity Check for gratuity calculation questions, content corrections, partnership enquiries, or general feedback.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/contact',
  },
  openGraph: {
    title: 'Contact UAE Gratuity Check',
    description: 'Reach the UAE Gratuity Check team for questions, corrections, or feedback about UAE end-of-service calculations.',
    url: 'https://www.uaegratuitycheck.com/contact',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.uaegratuitycheck.com/contact' },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://www.uaegratuitycheck.com/contact',
      url: 'https://www.uaegratuitycheck.com/contact',
      name: 'Contact UAE Gratuity Check',
      description: 'Contact UAE Gratuity Check for gratuity questions, content corrections, and feedback.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      publisher: { '@id': 'https://www.uaegratuitycheck.com/#org' },
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="page-wrapper">
        <div className="page-hero">
          <nav className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › Contact
          </nav>
          <h1>Contact Us</h1>
          <p>Have a question about UAE gratuity, found an error in a calculation, or want to suggest a topic? We read every message.</p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
            <h2 style={{ color: 'var(--green-dark)', marginBottom: '0.5rem' }}>Email us directly</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              <a href="mailto:contact@uaegratuitycheck.com" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
                contact@uaegratuitycheck.com
              </a>
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              We typically respond within 1–2 business days.
            </p>
          </div>

          <div className="card">
            <h2>What you can reach us about</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              {[
                {
                  title: 'Calculation questions',
                  desc: 'If a gratuity result looks incorrect, email us with your basic salary, joining date, last working day, and the result you expected. We will check the formula.',
                },
                {
                  title: 'Content corrections',
                  desc: 'Found an outdated law reference, a broken link, or a factual error? Let us know the page URL and what needs fixing. We update within 48 hours.',
                },
                {
                  title: 'Suggestions and feedback',
                  desc: 'Want us to cover a specific industry, free zone, or employment situation? We prioritise topics that help the most people.',
                },
                {
                  title: 'Media and partnerships',
                  desc: 'For press enquiries, content collaboration, or HR platform integrations, email with your organisation name and what you have in mind.',
                },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.4rem' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: '#fef3c7', border: '1px solid #f59e0b' }}>
            <h2 style={{ color: '#92400e' }}>Important note</h2>
            <p style={{ color: '#92400e', margin: 0 }}>
              UAE Gratuity Check is an independent informational resource. We cannot provide legal advice, represent you in disputes, or contact your employer on your behalf. For legal disputes, contact <a href="https://www.mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={{ color: '#92400e', fontWeight: 700 }}>MOHRE</a> or a qualified UAE employment lawyer.
            </p>
          </div>

          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <Link
              href="/"
              style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}
            >
              Use the free gratuity calculator →
            </Link>
          </div>

        </div>

        <Footer />
      </main>
    </>
  )
}

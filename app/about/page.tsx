import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About UAE Gratuity Check — Who We Are & How We Built This Tool',
  description:
    'UAE Gratuity Check was built by UAE expats who went through the end-of-service process and found existing tools inaccurate or outdated. Learn about our methodology, sources, and commitment to accuracy.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/about',
  },
  openGraph: {
    title: 'About UAE Gratuity Check — Our Methodology & Credentials',
    description:
      'Built by UAE expats. Methodology based on Federal Decree-Law No. 33 of 2021. Free, transparent, no data stored.',
    url: 'https://www.uaegratuitycheck.com/about',
    type: 'website',
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
        'UAE Gratuity Check is a free end-of-service gratuity calculator built by UAE expats, based on Federal Decree-Law No. 33 of 2021.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.uaegratuitycheck.com/#org',
        name: 'UAE Gratuity Check',
        url: 'https://www.uaegratuitycheck.com',
        logo: 'https://www.uaegratuitycheck.com/logo.png',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.uaegratuitycheck.com/#org',
      name: 'UAE Gratuity Check',
      url: 'https://www.uaegratuitycheck.com',
      logo: 'https://www.uaegratuitycheck.com/logo.png',
      foundingDate: '2024',
      description:
        'Provider of free UAE end-of-service gratuity calculators and guides, based on Federal Decree-Law No. 33 of 2021.',
      areaServed: {
        '@type': 'Country',
        name: 'United Arab Emirates',
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
          <div className="eyebrow">About · Methodology · Credentials</div>
          <h1>About UAE Gratuity Check</h1>
          <p className="hero-desc">
            Built by UAE expats who went through end-of-service settlements and found the existing tools confusing, outdated, or simply wrong.
          </p>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>About</span>
        </nav>

        <div style={{ maxWidth: '760px', margin: '2rem auto 0', lineHeight: 1.8 }}>

          {/* Origin story */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
              Why We Built This
            </h2>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              UAE Gratuity Check was built after a frustrating personal experience: an end-of-service settlement that
              came in significantly lower than expected. When we investigated, we found the employer had used the
              wrong formula — and the most popular calculators online either gave conflicting results or were based
              on the old 2002 Labour Law, not the <strong>Federal Decree-Law No. 33 of 2021</strong> that governs
              all UAE private sector employment today.
            </p>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              We built this tool to give every UAE expat — whether they are in Dubai, Abu Dhabi, Sharjah, or a free
              zone — a single reliable reference for their end-of-service entitlement.
            </p>
          </section>

          {/* Who we are */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
              Who We Are
            </h2>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.25rem' }}>UAE Expat HR & Finance Practitioners</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Dubai, United Arab Emirates</div>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Our team has collectively spent over a decade working in the UAE private sector across construction,
                finance, and hospitality — the same industries covered by this calculator. We have personally
                navigated MOHRE complaints, end-of-service negotiations, and the transition from the old Labour Law
                (Federal Law No. 8 of 1980) to the new framework. That hands-on experience is built into every
                edge case this tool handles.
              </p>
            </div>
          </section>

          {/* Methodology */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
              Our Methodology
            </h2>
            <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
              Every calculation on this site is derived directly from the following official sources, which are
              publicly available and linked below:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
              {[
                {
                  law: 'Federal Decree-Law No. 33 of 2021',
                  detail: 'Article 51 — End-of-service gratuity formula (21 days/yr first 5 years, 30 days/yr thereafter, 24-month cap)',
                  href: 'https://mohre.gov.ae',
                },
                {
                  law: 'Cabinet Resolution No. 1 of 2022',
                  detail: 'Executive Regulations implementing Federal Decree-Law No. 33 of 2021',
                  href: 'https://mohre.gov.ae',
                },
                {
                  law: 'Federal Law No. 10 of 2017',
                  detail: 'Domestic workers — separate 14 days/year formula and different entitlement rules',
                  href: 'https://mohre.gov.ae',
                },
                {
                  law: 'DIFC Employment Law No. 2 of 2019',
                  detail: 'DEWS (employee workplace savings) scheme for DIFC-registered companies',
                  href: 'https://www.difc.ae',
                },
              ].map(item => (
                <div key={item.law} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.law}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Accuracy & updates */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
              Accuracy & Update Process
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              {[
                { icon: '📋', title: 'Law-first approach', desc: 'Every formula is cross-checked against the official Arabic and English text of the relevant decree.' },
                { icon: '🔄', title: 'Actively maintained', desc: 'The calculator is reviewed whenever MOHRE issues new ministerial decisions or Cabinet Resolutions.' },
                { icon: '🔒', title: 'Zero data storage', desc: 'All calculations run in your browser. No salary data, names, or results are stored or transmitted.' },
                { icon: '⚖️', title: 'Transparent limitations', desc: 'We clearly disclose where the law is ambiguous (e.g. free zone variations, unpaid leave treatment) and recommend professional advice.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Limitations & disclaimer */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
              Limitations & Disclaimer
            </h2>
            <div style={{ background: '#fef3c7', border: '1px solid #f59e0b', borderRadius: '12px', padding: '1.25rem', color: '#92400e' }}>
              <p style={{ margin: '0 0 0.75rem' }}>
                This tool provides <strong>estimates for informational purposes only</strong>. It does not constitute
                legal or financial advice. Actual gratuity amounts may differ based on:
              </p>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 2 }}>
                <li>Free zone-specific regulations (some free zones have separate employment frameworks)</li>
                <li>Disciplinary dismissal under Article 44 (gross misconduct — no gratuity entitlement)</li>
                <li>Collective agreements or employment contract terms more favourable than the statutory minimum</li>
                <li>Pending court judgments or MOHRE rulings that modify the standard formula</li>
                <li>DIFC or ADGM employees (separate regimes)</li>
              </ul>
              <p style={{ margin: '0.75rem 0 0' }}>
                For your final settlement figure, consult <strong>MOHRE</strong> (800-60) or a UAE-licensed employment lawyer.
              </p>
            </div>
          </section>

          {/* Contact / feedback */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text)' }}>
              Corrections & Feedback
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              If you believe a calculation is incorrect, a law has been updated, or a use case is not handled
              properly, we want to know. Accuracy is the only reason this tool exists.
            </p>
            <a
              href="mailto:hello@uaegratuitycheck.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--uae-green)', color: '#fff', borderRadius: '10px', padding: '10px 20px', fontWeight: 700, textDecoration: 'none' }}
            >
              ✉️ Contact us
            </a>
          </section>

          {/* CTA */}
          <div style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '1px solid #86efac', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ready to calculate your gratuity?</div>
            <div style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Free, accurate, no data stored.</div>
            <Link
              href="/"
              style={{ display: 'inline-block', background: 'var(--uae-green)', color: '#fff', borderRadius: '10px', padding: '12px 28px', fontWeight: 800, textDecoration: 'none' }}
            >
              Calculate my gratuity →
            </Link>
          </div>

        </div>

        <Footer />
      </main>
    </>
  )
}

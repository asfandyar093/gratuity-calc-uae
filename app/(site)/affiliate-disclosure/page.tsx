import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import { getActivePartners } from '@/config/affiliates'

const url = 'https://www.uaegratuitycheck.com/affiliate-disclosure'
const title = 'Affiliate Disclosure: How This Site Earns Money'
const description = 'How UAE Gratuity Check handles affiliate links, what we may earn, and why links never change our calculators or our reading of UAE law.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, url, title, description },
}

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

export default function AffiliateDisclosurePage() {
  const active = getActivePartners()
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([{ name: 'About', path: '/about' }, { name: 'Affiliate disclosure', path: '/affiliate-disclosure' }]),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: { '@id': 'https://www.uaegratuitycheck.com/#website' },
        publisher: { '@id': 'https://www.uaegratuitycheck.com/#org' },
      },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/about">About</Link> › Affiliate disclosure</div>
          <h1>Affiliate Disclosure</h1>
          <p>How this site earns money, and what that does and does not change.</p>
        </div>

        <div className="card">
          <h2>The short version</h2>
          <p>
            The calculators and guides on this site are free to use. Some pages may include affiliate links to
            other companies, such as a money transfer service, a flight search site or a CV builder. If you sign up
            or buy through one of those links, we may earn a commission. You pay the same price either way.
          </p>
        </div>

        <div className="card">
          <h2>Which links are affiliate links</h2>
          <p>
            Every affiliate link is labelled &quot;Affiliate link&quot; and sits in a clearly separate box with a
            disclosure line. It is never mixed into the body of an answer. We mark these links with the
            rel attributes <code>sponsored</code> and <code>noopener</code>, which tells search engines the link is commercial.
          </p>
          {active.length === 0 ? (
            <p>At the moment no affiliate links are active on this site.</p>
          ) : (
            <>
              <p>The partners we currently link to with an affiliate link are:</p>
              <ul>
                {active.map((p) => <li key={p.id}>{p.name}</li>)}
              </ul>
            </>
          )}
        </div>

        <div className="card">
          <h2>What affiliate links never change</h2>
          <ul>
            <li>Gratuity, leave, notice period and settlement results come from the calculation rules in the law, not from who pays us.</li>
            <li>We never place affiliate links inside a calculator result or above the answer to a legal question.</li>
            <li>What we write about UAE law is based on official sources such as u.ae and MOHRE, as described in our <Link href="/editorial-policy" style={linkStyle}>editorial policy</Link>.</li>
            <li>We do not promise any exchange rate, saving, approval or outcome. Rates and fees change, and the provider&apos;s own terms apply.</li>
            <li>We do not recommend a company because it pays commission. If a provider is a poor fit for a reader, we leave it out.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Free official help comes first</h2>
          <p>
            If your employer has not paid your dues, you do not need to buy anything to make a claim. The official
            route is free, and our guide on <Link href="/blog/how-to-file-mohre-complaint" style={linkStyle}>how to file a MOHRE complaint</Link> explains it step by step.
          </p>
        </div>

        <div className="card">
          <h2>Not financial or legal advice</h2>
          <p>
            Information on this site is general. It is not financial, tax, insurance or legal advice. Check the
            provider&apos;s own pages for fees, eligibility and licensing before you send money or sign up.
          </p>
        </div>

        <div className="card">
          <h2>Questions</h2>
          <p>
            If an affiliate link looks wrong, or you think a recommendation is not fair to readers, tell us through the <Link href="/contact" style={linkStyle}>contact page</Link>.
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}

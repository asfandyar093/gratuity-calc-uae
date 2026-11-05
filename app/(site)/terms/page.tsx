import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/terms'
const title = 'Terms of Service: Using UAE Gratuity Check'
const description =
  'Terms for using UAE Gratuity Check calculators and guides. Results are estimates for information only and are not legal or financial advice.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, url, title, description },
}

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

export default function TermsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Terms of Service', path: '/terms' }])} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › Terms of Service
          </div>
          <h1>Terms of Service</h1>
          <p>Last updated: 6 November 2026 (Asia/Karachi)</p>
        </div>

        <div className="card">
          <h2>Acceptance</h2>
          <p>
            By using www.uaegratuitycheck.com you agree to these terms and to the{' '}
            <Link href="/privacy-policy" style={linkStyle}>privacy policy</Link>.
            If you do not agree, do not use the site.
          </p>
        </div>

        <div className="card">
          <h2>What the site provides</h2>
          <p>
            UAE Gratuity Check publishes free calculators and written guides about UAE end of service gratuity,
            leave, notice, settlement and related employment topics. Content is general information based on
            official sources cited on each page. It is not a substitute for advice from MOHRE or a UAE qualified lawyer.
          </p>
        </div>

        <div className="card">
          <h2>Estimates only, not advice</h2>
          <p>
            Calculator results are estimates. Your actual entitlement can differ because of free zone rules,
            contract terms, lawful deductions, dismissal findings, court decisions or updates to legislation
            that we have not yet reflected. Always check your final settlement with your employer and, where needed, MOHRE.
          </p>
          <p>
            Nothing on this site creates a lawyer client relationship, an HR representation relationship or any duty
            to contact your employer on your behalf.
          </p>
        </div>

        <div className="card">
          <h2>Accuracy and updates</h2>
          <p>
            We aim to keep formulas and explanations aligned with the official text of UAE labour law and related rules.
            We cannot guarantee that every page is complete or free of error at every moment.
            See the <Link href="/editorial-policy" style={linkStyle}>editorial policy</Link> for how we source, date and correct content.
          </p>
        </div>

        <div className="card">
          <h2>Acceptable use</h2>
          <ul>
            <li>Do not misuse the site, attempt to disrupt it, or scrape it in a way that overloads the service.</li>
            <li>Do not use the site to send spam or to misrepresent your relationship with UAE Gratuity Check.</li>
            <li>Do not copy large portions of the guides for republication without permission, except for brief quotation with a link back.</li>
            <li>The embeddable calculator at <Link href="/embed-gratuity-calculator" style={linkStyle}>/embed-gratuity-calculator</Link> may be framed on other sites under the attribution terms on that page.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Advertising and affiliate links</h2>
          <p>
            The site may show Google AdSense ads. Ads must not be clicked by the publisher or anyone asked to click them.
            Affiliate links, when active, are labelled and described on the{' '}
            <Link href="/affiliate-disclosure" style={linkStyle}>affiliate disclosure</Link> page.
            At the time of this update no affiliate links are active.
          </p>
        </div>

        <div className="card">
          <h2>Intellectual property</h2>
          <p>
            Site design, original wording, calculator interfaces and branding belong to UAE Gratuity Check unless otherwise noted.
            Official legislation text belongs to the UAE authorities that published it.
          </p>
        </div>

        <div className="card">
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, UAE Gratuity Check and its publisher are not liable for any loss
            arising from your use of the site or from reliance on any estimate, article or link, including employment,
            tax, remittance or immigration decisions you make.
          </p>
        </div>

        <div className="card">
          <h2>Changes</h2>
          <p>
            We may update these terms. The date at the top of this page is the date of the current version.
            Continued use after a change means you accept the revised terms.
          </p>
        </div>

        <div className="card">
          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href="mailto:contact@uaegratuitycheck.com" style={linkStyle}>contact@uaegratuitycheck.com</a>.
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}

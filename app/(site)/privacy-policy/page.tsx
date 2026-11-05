import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/privacy-policy'
const title = 'Privacy Policy: Data, Cookies, Analytics and Ads'
const description =
  'How UAE Gratuity Check handles data. Calculators run in your browser, salary details are not stored, and how Google Analytics, AdSense and consent work.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, url, title, description },
}

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Privacy Policy', path: '/privacy-policy' }])} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › Privacy Policy
          </div>
          <h1>Privacy Policy</h1>
          <p>Last updated: 6 November 2026 (Asia/Karachi)</p>
        </div>

        <div className="card">
          <h2>Who we are</h2>
          <p>
            UAE Gratuity Check operates <strong>www.uaegratuitycheck.com</strong>. The publisher is Asfandyar Khan.
            Contact: <a href="mailto:contact@uaegratuitycheck.com" style={linkStyle}>contact@uaegratuitycheck.com</a>.
            See also the <Link href="/about" style={linkStyle}>about</Link> and <Link href="/contact" style={linkStyle}>contact</Link> pages.
          </p>
        </div>

        <div className="card">
          <h2>What this site does with calculator input</h2>
          <p>
            Gratuity, leave, notice, settlement and related calculators run entirely in your browser.
            The salary figures, dates and other numbers you type are not sent to our servers and are not stored by us.
            Closing the tab clears that session state unless your browser keeps a local form restore of its own.
          </p>
        </div>

        <div className="card">
          <h2>Information we do not collect ourselves</h2>
          <ul>
            <li>We do not ask you to create an account.</li>
            <li>We do not run a contact form that stores messages on our servers. Email goes to the address above through your own mail app.</li>
            <li>We do not sell personal data.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Cookies and similar technology</h2>
          <p>
            A small consent choice may be stored in your browser under the key <code>ugc-consent-v1</code> after you accept or reject analytics and advertising cookies.
            Third party services listed below may set their own cookies when allowed.
          </p>
        </div>

        <div className="card">
          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics 4 (measurement ID G-JXB67T29GN) to understand aggregate traffic such as pages viewed, approximate location at city level, device type and referral source.
            We do not send calculator salary fields to Analytics.
          </p>
          <p>
            Consent Mode v2 is configured so that in the EEA, the United Kingdom and Switzerland, ad and analytics storage stay denied until you accept in the cookie notice.
            Elsewhere, storage can run until you reject. You can change your choice by clearing this site&apos;s data for www.uaegratuitycheck.com in your browser.
          </p>
        </div>

        <div className="card">
          <h2>Google AdSense</h2>
          <p>
            We display ads served by Google AdSense under publisher ID <code>pub-8322124399120159</code>.
            The same publisher ID is declared in our <Link href="/ads.txt" style={linkStyle}>ads.txt</Link> file and in the site&apos;s <code>google-adsense-account</code> meta tag.
          </p>
          <p>
            If you accept advertising cookies, Google may use cookies or similar identifiers to show personalised ads based on prior visits to this or other sites.
            If you reject, or if you are in a region where prior consent is required and you have not accepted, ad and analytics storage stay denied and ads are non personalised when shown.
            You can also manage ad personalisation at{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>adssettings.google.com</a>.
          </p>
          <p>
            Ads do not change calculator results or our reading of UAE labour law. See the <Link href="/editorial-policy" style={linkStyle}>editorial policy</Link>.
          </p>
        </div>

        <div className="card">
          <h2>Affiliate links</h2>
          <p>
            Some pages may later include labelled affiliate links. When active, those partners receive a click referral only after you choose to follow the link.
            Details and the current list of partners (if any) are on the <Link href="/affiliate-disclosure" style={linkStyle}>affiliate disclosure</Link> page.
            At the time of this update no affiliate links are active.
          </p>
        </div>

        <div className="card">
          <h2>Children</h2>
          <p>
            This site is aimed at adults dealing with UAE employment matters. It is not directed at children under 13, and we do not knowingly collect personal information from children.
          </p>
        </div>

        <div className="card">
          <h2>External links</h2>
          <p>
            Guides link to official sources such as u.ae, MOHRE and UAE Legislation. Those sites have their own privacy practices. We are not responsible for their content or cookies.
          </p>
        </div>

        <div className="card">
          <h2>Changes</h2>
          <p>
            If this policy changes in a material way, we will update the date at the top of this page. Continued use of the site after that date means you have read the revised policy.
          </p>
        </div>

        <div className="card">
          <h2>Contact</h2>
          <p>
            Privacy questions: <a href="mailto:contact@uaegratuitycheck.com" style={linkStyle}>contact@uaegratuitycheck.com</a>.
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import { LAST_REVIEWED, LAST_REVIEWED_LABEL } from '@/lib/sources'

const url = 'https://www.uaegratuitycheck.com/editorial-policy'
const title = 'Editorial Policy: Sources, Reviews & Corrections'
const description = 'How UAE Gratuity Check chooses sources, reviews and dates its pages, handles legal uncertainty and fixes errors. Includes how to report a correction.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, url, title, description },
}

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

export default function EditorialPolicyPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([{ name: 'About', path: '/about' }, { name: 'Editorial policy', path: '/editorial-policy' }]),
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        dateModified: LAST_REVIEWED,
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
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/about">About</Link> › Editorial policy</div>
          <h1>Editorial Policy</h1>
          <p>How we source, review, date and correct what we publish. Last updated <time dateTime={LAST_REVIEWED}>{LAST_REVIEWED_LABEL}</time>.</p>
        </div>

        <div className="card">
          <h2>Who is responsible</h2>
          <p>UAE Gratuity Check is written and maintained by <Link href="/about" style={linkStyle}>Asfandyar Khan</Link>. There is no separate legal reviewer. The site is general information based on official sources and is not legal advice.</p>
        </div>

        <div className="card">
          <h2 id="sources">Sources we use</h2>
          <ul>
            <li>Primary: the text of UAE federal legislation on the <a href="https://uaelegislation.gov.ae" target="_blank" rel="noopener noreferrer" style={linkStyle}>UAE Legislation portal</a> and the official PDF published by MOHRE.</li>
            <li>Government guidance: <a href="https://u.ae" target="_blank" rel="noopener noreferrer" style={linkStyle}>u.ae</a> and <a href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={linkStyle}>MOHRE</a> service pages.</li>
            <li>Free zone rules: the regulator&apos;s own publications (for example DIFC and DMCC), cited on the relevant page.</li>
            <li>We do not treat other calculator sites, forums or news articles as a source for what the law says. Several of them still repeat rules that were repealed.</li>
          </ul>
        </div>

        <div className="card">
          <h2 id="review">How pages are reviewed and dated</h2>
          <ul>
            <li>Rules are checked against the official text before a page is published, and article numbers are quoted so you can verify them.</li>
            <li>Key pages show a &ldquo;last reviewed&rdquo; date and the sources used. Blog posts show the date they were last updated.</li>
            <li>We only change a date when the page content was actually changed or rechecked. We do not refresh dates to look current.</li>
            <li>When a law changes, we update the affected calculator and pages and note what changed.</li>
          </ul>
        </div>

        <div className="card">
          <h2>When the law is unclear</h2>
          <p>If the official text does not give a rule, we say so. The clearest example is domestic worker gratuity: Federal Decree-Law No. 9 of 2022 leaves the calculation to a future Cabinet decision, so our <Link href="/gratuity-calculator/domestic-workers" style={linkStyle}>domestic worker page</Link> is labelled as an estimate and links to MOHRE&apos;s official calculator.</p>
        </div>

        <div className="card">
          <h2>Calculators</h2>
          <p>Calculators implement the formula in the cited article. They run in your browser and use only the numbers you enter. Results are estimates and may differ from your employer&apos;s or MOHRE&apos;s figure if your contract, a free zone regime or a court decision changes the rules.</p>
        </div>

        <div className="card">
          <h2 id="corrections">Corrections</h2>
          <ol>
            <li>Email <a href="mailto:contact@uaegratuitycheck.com" style={linkStyle}>contact@uaegratuitycheck.com</a> with the page URL, what is wrong and, if possible, the official source.</li>
            <li>We check the claim against the official text.</li>
            <li>If it is an error, we fix the page and update its date. We aim to do this promptly, but we do not promise a fixed turnaround.</li>
            <li>Material changes to a legal explanation are noted on the page.</li>
          </ol>
        </div>

        <div className="card">
          <h2>Advertising and data</h2>
          <p>The site is funded by Google AdSense advertising. Ads do not influence what we write or the calculator results. See the <Link href="/privacy-policy" style={linkStyle}>privacy policy</Link> for cookies and analytics.</p>
        </div>

        <Footer />
      </main>
    </>
  )
}

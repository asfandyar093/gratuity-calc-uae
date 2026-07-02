import Link from 'next/link'
import Footer from './Footer'
import LastUpdated from './LastUpdated'
import SchemaMarkup from './SchemaMarkup'
import FaqItem from './FaqItem'
import ExpatCurrencyCalculator from './ExpatCurrencyCalculator'

interface Faq { q: string; a: string }

interface Props {
  country: string
  nationality: string
  slug: string
  currency: string
  currencyCode: string
  currencySymbol: string
  exchangeRate: number
  rateAsOf: string
  defaultSalary: string
  defaultYears: string
  intro: string
  remittanceIntro: string
  remittanceChannels: string[]
  homeSchemeName: string
  homeSchemeComparison: string
  taxNote: string
  faqs: Faq[]
}

export default function ExpatGuidePage({
  country,
  nationality,
  slug,
  currency,
  currencyCode,
  currencySymbol,
  exchangeRate,
  rateAsOf,
  defaultSalary,
  defaultYears,
  intro,
  remittanceIntro,
  remittanceChannels,
  homeSchemeName,
  homeSchemeComparison,
  taxNote,
  faqs,
}: Props) {
  const url = `https://www.uaegratuitycheck.com/guides/${slug}`
  const title = `${country} Expat UAE Gratuity Guide 2026`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.uaegratuitycheck.com/guides' },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
      {
        '@type': 'Article',
        headline: title,
        description: `UAE gratuity guide for ${nationality} workers: ${currencyCode} conversion, remittance planning, tax notes, and final settlement checks.`,
        datePublished: '2026-05-15',
        dateModified: '2026-07-02',
        author: {
          '@type': 'Person',
          name: 'Asfandyar Khan',
          url: 'https://www.uaegratuitycheck.com/about',
          jobTitle: 'Lead Editor',
          worksFor: { '@type': 'Organization', '@id': 'https://www.uaegratuitycheck.com/#org' },
        },
        publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/guides">Guides</Link> › {country}</div>
          <h1>{title}</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>{intro}</p>
        </div>

        <ExpatCurrencyCalculator
          nationality={nationality}
          currency={currency}
          currencyCode={currencyCode}
          currencySymbol={currencySymbol}
          exchangeRate={exchangeRate}
          rateAsOf={rateAsOf}
          defaultSalary={defaultSalary}
          defaultYears={defaultYears}
        />

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">REMITTANCE PLANNING</div>
            <h2>Sending your gratuity home as {currencyCode}</h2>
            <p>{remittanceIntro}</p>
            <ul>
              {remittanceChannels.map(c => <li key={c}>{c}</li>)}
            </ul>
            <p>Keep proof of salary source, your final settlement sheet, and the transfer receipt — banks in both the UAE and {country} may ask for supporting documents when a large lump sum arrives after visa cancellation or a job change.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">HOME COUNTRY COMPARISON</div>
            <h2>How UAE gratuity compares with {homeSchemeName}</h2>
            <p>{homeSchemeComparison}</p>
            <p>The UAE calculation is usually simpler to verify because it runs on one formula — basic salary, service years, and the two-year cap. The practical work is confirming HR used basic salary (not the full package), applied the right rate for years before and after year five, and paid within 14 days of your last working day.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">TAX &amp; DECLARATION</div>
            <h2>Tax notes for {nationality} workers</h2>
            <p>{taxNote}</p>
            <p>This is general information, not tax advice. Speak with a qualified adviser in {country} before filing a return or moving a large final settlement amount.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">CHECKLIST</div>
            <h2>Before you leave the UAE</h2>
            <ul>
              <li>Download your contract, payslips, visa documents, and Emirates ID records.</li>
              <li>Calculate gratuity using basic salary only, then compare with the employer&apos;s sheet.</li>
              <li>Check unused leave, notice pay, unpaid salary, deductions, and ticket or repatriation items.</li>
              <li>Keep your UAE bank account active until all final payments clear.</li>
              <li>Use a documented, traceable bank transfer channel for the {currencyCode} remittance.</li>
            </ul>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">Questions {nationality} workers ask</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>

        <div className="sec">
          <div className="card article-links-card">
            <h2>Official references</h2>
            <div className="article-link-list">
              <a className="article-link-item" href="https://u.ae/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer">
                <span>UAE Government: end-of-service benefits</span>
                <small>Official UAE Government overview of private-sector end-of-service benefit provisions.</small>
              </a>
              <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
                <span>UAE Government: labour rights</span>
                <small>Official worker-rights information for UAE private-sector employees.</small>
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

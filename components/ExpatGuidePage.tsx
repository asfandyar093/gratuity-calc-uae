import Link from 'next/link'
import Footer from './Footer'
import LastUpdated from './LastUpdated'
import SchemaMarkup from './SchemaMarkup'

interface Props {
  country: string
  nationality: string
  currency: string
  remittance: string
  comparison: string
  slug: string
  taxNote: string
}

export default function ExpatGuidePage({ country, nationality, currency, remittance, comparison, slug, taxNote }: Props) {
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
        description: `UAE gratuity guide for ${nationality} workers: ${currency} conversion, remittance planning, tax notes, and final settlement checks.`,
        datePublished: '2026-05-15',
        dateModified: '2026-05-15',
        author: { '@type': 'Person', name: 'UAE Gratuity Check Editorial Team', url: 'https://www.uaegratuitycheck.com/about' },
        publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
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
          <LastUpdated date="May 2026" />
          <p>End-of-service guidance for {nationality} employees in Dubai, Abu Dhabi, Sharjah, and UAE free zones, including {currency} conversion and remittance planning.</p>
        </div>

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2>Quick answer for {nationality} workers</h2>
          <p>UAE gratuity is calculated in AED on your basic salary, not total package. If you complete at least one eligible year of service, the standard private-sector formula is 21 days of basic salary for each of the first five years and 30 days for each year after that, capped at 24 months of basic salary.</p>
          <p>For {nationality} employees, the extra planning step is converting the expected payout into {currency}, checking bank transfer timing, and deciding whether to remit immediately or keep part of the amount in AED for UAE obligations.</p>
          <p><Link href="/">Calculate your gratuity in AED</Link></p>
        </div>

        <div className="card">
          <h2>{currency} conversion and remittance planning</h2>
          <p>Your employer will normally pay final settlement in AED. Before transferring money home, compare the exchange rate, transfer fee, receiving bank charges, and settlement time. A small exchange-rate difference can matter when the gratuity amount represents several months or years of savings.</p>
          <p>{remittance}</p>
          <p>Keep proof of salary source, final settlement sheet, transfer receipt, and receiving account credit. Banks may ask for supporting documents when a large lump sum arrives after visa cancellation or job change.</p>
        </div>

        <div className="card">
          <h2>How UAE gratuity compares with {country} rules</h2>
          <p>{comparison}</p>
          <p>The UAE system is usually simpler because the main private-sector formula uses basic salary and service years. The hard parts are checking that HR used basic salary correctly, deducted only legitimate amounts, and paid within the required final settlement timeline.</p>
        </div>

        <div className="card">
          <h2>Tax and declaration notes</h2>
          <p>{taxNote}</p>
          <p>This is general information, not tax advice. Speak with a qualified adviser in {country} before filing a return or moving a large final settlement amount.</p>
        </div>

        <div className="card">
          <h2>Checklist before leaving the UAE</h2>
          <ul>
            <li>Download your contract, payslips, visa documents, and Emirates ID records.</li>
            <li>Calculate gratuity using basic salary only, then compare with the employer&apos;s sheet.</li>
            <li>Check unused leave, notice pay, unpaid salary, deductions, and ticket or repatriation items.</li>
            <li>Keep your UAE bank account active until all final payments clear.</li>
            <li>Use a documented bank transfer channel for the {currency} remittance.</li>
          </ul>
        </div>
        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import RentIncreaseCalculator from '@/components/RentIncreaseCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/dubai-rent-increase-calculator-rera'

export const metadata: Metadata = {
  title: 'Dubai Rent Increase Calculator 2026 | RERA Rules & Max % Allowed',
  description: 'Check if your Dubai rent increase is legal under RERA rules. Enter your current rent and the RERA market rent to see the exact maximum percentage your landlord can charge.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Dubai Rent Increase Calculator 2026 (RERA)',
    description: 'Find the legal maximum rent increase for your Dubai lease renewal using the official RERA percentage brackets.',
    url,
    images: ['/dubai-rent-increase-calculator-rera-og.png'],
  },
}

const faq: [string, string][] = [
  ['What happens if my landlord raises rent without giving 90 days notice?', 'Under RERA rules, landlords must give tenants at least 90 days\' written notice before the lease renewal date to apply any rent increase. If proper notice was not given, the increase should not apply for that renewal cycle, and the tenant can dispute it through Dubai\'s Rental Dispute Settlement Centre.'],
  ['How do I find the official RERA market rent for my area?', 'The Dubai Land Department publishes the RERA Rental Index, which shows the average market rent for comparable units by area, building type, and size. You can check it via the Dubai REST app or on dubailand.gov.ae. Always use the figure for a unit genuinely comparable to yours.'],
  ['Does this calculator apply to Abu Dhabi and Sharjah too?', 'This calculator applies the Dubai Land Department (RERA) brackets specifically, since RERA governs rental disputes in Dubai. Abu Dhabi and Sharjah have their own rental dispute committees that follow broadly similar fairness principles, but the exact rules and index can differ — check the relevant local authority before relying on this tool outside Dubai.'],
  ['Can my landlord increase my rent every year?', 'A landlord can only propose an increase at each lease renewal, not mid-contract, and only within the RERA percentage bracket that matches how far your rent sits below the market average — combined with valid 90-day written notice. In practice this means rent should not jump every single year unless the market rent has moved significantly.'],
  ['What can I do if my landlord ignores the legal maximum?', 'You can file a case with Dubai\'s Rental Dispute Settlement Centre (RDSC). Keep your tenancy contract, the increase notice, and any correspondence as evidence — these documents are what the RDSC will use to assess whether the proposed increase exceeds the legal maximum.'],
  ['Is the calculator result a guaranteed legal figure?', 'No. This tool applies the official RERA percentage brackets to the market-rent figure you enter, so the result is only as accurate as the market rent you provide. Always confirm the exact RERA index value for your specific building and area via the Dubai REST app or dubailand.gov.ae before relying on the number for a dispute or negotiation.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dubai Rent Increase Calculator (RERA)',
    url,
    description: 'Free Dubai rent increase calculator applying the official RERA (Dubai Land Department) percentage brackets to determine the legal maximum rent increase.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
      { '@type': 'ListItem', position: 3, name: 'Rent Increase Calculator', item: url },
    ],
  },
]

export default function DubaiRentIncreasePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Rent Increase</div>
          <h1>Dubai Rent Increase Calculator 2026 (RERA)</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>Check whether your Dubai landlord&apos;s proposed rent increase is legal under RERA rules. Enter your current rent and the RERA average market rent to see the exact maximum percentage increase allowed at renewal.</p>
        </div>

        <RentIncreaseCalculator />

        <div className="card">
          <h2>How Dubai&apos;s RERA rent increase rules work</h2>
          <p>The Dubai Land Department&apos;s RERA rental increase calculator sets the <strong>legal maximum percentage</strong> a landlord can raise rent by, based on how far your <strong>current rent</strong> sits below the RERA &quot;average market rent&quot; for a comparable unit (the RERA Rental Index). The further below market your current rent is, the higher the allowed increase — but it is always capped, and landlords cannot simply charge whatever they choose.</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Rent vs Market Rate</th><th>Maximum Legal Increase</th></tr></thead>
              <tbody>
                <tr><td>Rent is within 10% of market average (rent ≥ 90% of market rate)</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>0%</td></tr>
                <tr><td>Rent is 11-20% below market average</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Up to 5%</td></tr>
                <tr><td>Rent is 21-30% below market average</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Up to 10%</td></tr>
                <tr><td>Rent is 31-40% below market average</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Up to 15%</td></tr>
                <tr><td>Rent is more than 40% below market average</td><td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Up to 20%</td></tr>
              </tbody>
            </table>
          </div>
          <div className="warn-box" style={{ marginTop: '1rem' }}>
            ⚠️ Landlords must give tenants at least <strong>90 days&apos; written notice</strong> before the lease renewal date to apply any rent increase. If proper notice was not given, the increase should not apply for that renewal cycle.
          </div>
          <p style={{ marginTop: '1rem' }}>This same percentage-bracket logic applies across the UAE in principle, but RERA (the Real Estate Regulatory Agency, part of the Dubai Land Department) specifically governs Dubai. Abu Dhabi, Sharjah, and other emirates use their own rental dispute committees with broadly similar fairness principles — always check the local authority if you rent outside Dubai.</p>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Related calculators</h2>
          <p>Also check the <Link href="/cost-of-living-calculator-uae">UAE cost of living calculator</Link>, the <Link href="/salary-calculator">salary calculator</Link>, and the <Link href="/">UAE gratuity calculator</Link> if you are planning a lease renewal alongside your wider budget. For the full breakdown of these rules, read our guide: <Link href="/blog/rera-rent-increase-rules-dubai-explained">RERA rent increase rules explained for Dubai tenants</Link>.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://dubailand.gov.ae" target="_blank" rel="noopener noreferrer">
              <span>Dubai Land Department (DLD) — official RERA rental index</span>
              <small>Official Dubai Land Department source for the RERA Rental Index and tenancy regulations.</small>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

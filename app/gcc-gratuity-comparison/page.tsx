import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/gcc-gratuity-comparison'

export const metadata: Metadata = {
  title: 'GCC Gratuity Comparison 2026 — UAE vs Saudi vs Kuwait vs Oman vs Qatar',
  description: 'Compare end-of-service gratuity rules across UAE, Saudi Arabia, Kuwait, Oman, Qatar, and Bahrain. Side-by-side formula, rates, and resignation rules.',
  alternates: { canonical: url },
  openGraph: { title: 'GCC Gratuity Comparison 2026', description: 'End-of-service rules compared across 6 countries.', url, images: ['/gcc-comparison-og.png'] },
}

const rows = [
  ['UAE', 'Basic salary', '21 days/year', '30 days/year', 'No reduction under current law', '24 months basic salary', 'Usually 14 days', 'Federal Decree-Law No. 33 of 2021'],
  ['Saudi Arabia', 'Wage', 'Half-month/year', 'One month/year', 'Can reduce depending on service length', 'No general UAE-style cap', 'At contract end', 'Saudi Labour Law'],
  ['Kuwait', 'Remuneration', '15 days/year for monthly paid staff', 'One month/year', 'Reductions may apply by resignation timing', 'Often capped by wage type and law', 'At contract end', 'Kuwait Labour Law'],
  ['Oman', 'Basic wage', '15 days/year', '30 days/year', 'Generally service-based', 'No simple UAE-style cap', 'At contract end', 'Oman Labour Law'],
  ['Qatar', 'Basic wage', 'At least 3 weeks/year', 'At least 3 weeks/year', 'Generally owed after one year', 'No simple UAE-style cap', 'At contract end', 'Qatar Labour Law'],
  ['Bahrain', 'Wage', 'Half-month/year', 'One month/year', 'Service and reason can affect amount', 'No simple UAE-style cap', 'At contract end', 'Bahrain Labour Law'],
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
    { '@type': 'ListItem', position: 2, name: 'GCC Gratuity Comparison', item: url },
  ],
}

export default function GccComparisonPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › GCC Comparison</div>
          <h1>GCC Gratuity Comparison 2026 — All 6 Countries</h1>
          <LastUpdated date="May 2026" />
          <p>Compare how end-of-service benefits differ across the UAE, Saudi Arabia, Kuwait, Oman, Qatar, and Bahrain.</p>
        </div>

        <div className="card">
          <h2>GCC end-of-service comparison table</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr>{['Country', 'Wage basis', 'First 5 years', 'Beyond 5 years', 'Resignation impact', 'Cap', 'Payment deadline', 'Law'].map(h => <th key={h}>{h}</th>)}</tr></thead>
              <tbody>{rows.map(row => <tr key={row[0]}>{row.map(cell => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>

        {rows.map(([country, wage, first, after, resignation]) => (
          <div className="card" key={country}>
            <h2>{country} gratuity rules</h2>
            <p>{country} calculates end-of-service benefits on a wage basis described here as {wage.toLowerCase()}. The headline formula is {first.toLowerCase()} for the early service period and {after.toLowerCase()} after longer service, but the exact result depends on contract type, local definitions of wage, resignation rules, and any more favourable employer policy.</p>
            <p>For a worker comparing a UAE offer with another GCC offer, the biggest differences are salary basis and resignation treatment. In {country}, resignation impact is summarised as: {resignation}. Always confirm the local law text and contract wording before relying on a cross-country estimate.</p>
          </div>
        ))}

        <div className="card">
          <h2>Worked example: equivalent AED 10,000 salary, 7 years</h2>
          <p>On a simplified basis, UAE gratuity would be AED 10,000 / 30 x (21 x 5 + 30 x 2) = AED 55,000 before any cap check. Saudi-style half-month then one-month tiers would produce roughly AED 45,000. Qatar&apos;s minimum three-weeks-per-year approach would produce roughly AED 49,000. These examples are directional only because wage definitions and local contract rules differ.</p>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          <h3>Which GCC country pays the highest gratuity?</h3>
          <p>It depends on wage basis and service length. Kuwait and UAE can be generous for long service, but caps and resignation rules change the answer.</p>
          <h3>Can I combine GCC service periods?</h3>
          <p>Usually no. Each employer and country calculates end-of-service benefits separately unless a group transfer agreement says otherwise.</p>
          <h3>Can I get double gratuity when working across two GCC countries?</h3>
          <p>You can receive separate benefits for separate employment contracts, but the same service period is not normally counted twice.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}

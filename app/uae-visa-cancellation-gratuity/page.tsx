import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/uae-visa-cancellation-gratuity'

export const metadata: Metadata = {
  title: 'UAE Visa Cancellation and Gratuity 2026 — What Happens to Your EOSB?',
  description: 'Does visa cancellation affect UAE gratuity? Learn what happens to your end-of-service benefits when your UAE residence visa is cancelled. Complete guide 2026.',
  alternates: { canonical: url },
  openGraph: { title: 'UAE Visa Cancellation and Gratuity 2026', description: 'Your EOSB rights when a UAE residence visa is cancelled.', url, images: ['/visa-cancellation-og.png'] },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Visa Cancellation and Gratuity', item: url },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Visa Cancellation and Gratuity 2026',
      description: 'Guide to UAE gratuity rights when a residence visa is cancelled.',
      datePublished: '2026-05-15',
      dateModified: '2026-05-15',
      author: { '@type': 'Person', name: 'UAE Gratuity Check Editorial Team', url: 'https://www.uaegratuitycheck.com/about' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
  ],
}

export default function VisaCancellationPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Visa Cancellation</div>
          <h1>UAE Visa Cancellation and Gratuity — What You Must Know</h1>
          <LastUpdated date="May 2026" />
          <p>Visa cancellation does not automatically cancel your gratuity entitlement. If you have completed one year of service, you are legally entitled to EOSB regardless of visa status.</p>
        </div>

        <div className="card">
          <h2>What happens when a UAE visa is cancelled?</h2>
          <p>For most private-sector employees, visa cancellation happens near the end of employment. The employer initiates the cancellation process, MOHRE employment records are updated, and the employee receives a grace period to leave the UAE, change status, or obtain a new visa. The immigration process is administrative; it does not erase employment entitlements already earned before the last working day.</p>
          <p>The practical risk is timing. Some employees are asked to sign final settlement paperwork before they have seen the actual payment. Others are told the visa must be cancelled first and payment will follow. Before signing a full-and-final receipt, ask for an itemised settlement sheet showing gratuity, unpaid salary, unused leave, notice pay, deductions, and repatriation or ticket items where applicable.</p>
        </div>

        <div className="card">
          <h2>Gratuity protection after visa cancellation</h2>
          <p>UAE gratuity is tied to employment service, not residence visa status. If you completed at least one full year of eligible service, gratuity should be calculated on basic salary under Article 51 and included in the final settlement. The employer should also settle other end-of-service amounts within the statutory timeline.</p>
          <p>If gratuity is withheld, request a written breakdown first. If the employer does not respond, use MOHRE channels and attach your contract, payslips, Emirates ID or passport copy, cancellation notice, resignation or termination letter, and any messages about payment. See the <Link href="/blog/how-to-file-mohre-complaint">MOHRE complaint guide</Link> for the step-by-step process.</p>
        </div>

        <div className="card">
          <h2>Common scenarios</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Scenario</th><th>Gratuity position</th><th>What to check</th></tr></thead>
              <tbody>
                <tr><td>Employee resigned</td><td>Gratuity owed after one year</td><td>Notice period, last salary, unused leave</td></tr>
                <tr><td>Employee terminated</td><td>Gratuity owed after one year</td><td>Termination date and final settlement deadline</td></tr>
                <tr><td>Visa cancelled by employer</td><td>Gratuity still owed if eligible</td><td>Do not sign receipt before checking payment</td></tr>
                <tr><td>Absconding case</td><td>Complicated</td><td>Get advice quickly and resolve MOHRE record issues</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          <h3>Can my employer cancel my visa before paying gratuity?</h3>
          <p>Visa cancellation can happen as part of exit formalities, but it should not be used to avoid paying earned final settlement amounts.</p>
          <h3>Should I sign the settlement before receiving money?</h3>
          <p>Read every line first. If the receipt says you have received all dues, signing before payment can make a dispute harder.</p>
          <h3>Where should I calculate my amount?</h3>
          <p>Use the <Link href="/">UAE gratuity calculator</Link> and then compare it with the employer&apos;s final settlement sheet.</p>
        </div>
        <Footer />
      </main>
    </>
  )
}

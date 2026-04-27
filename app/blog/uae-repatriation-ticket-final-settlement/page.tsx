import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const title = 'UAE Repatriation Ticket and Final Settlement 2026'
const description = 'Guide to repatriation expenses, annual flight tickets, and UAE final settlement. Learn when flight costs are owed, how they differ from gratuity, and what to verify before signing.'
const url = 'https://www.uaegratuitycheck.com/blog/uae-repatriation-ticket-final-settlement'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['UAE repatriation ticket final settlement', 'repatriation expenses UAE labour law', 'annual ticket final settlement UAE', 'flight ticket allowance UAE gratuity'],
  alternates: { canonical: url },
  openGraph: { images: ['/images/blog/uae-repatriation-ticket-final-settlement.svg'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url,
  datePublished: '2026-04-28',
  dateModified: '2026-04-28',
  author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
  publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
  mainEntityOfPage: url,
  image: 'https://www.uaegratuitycheck.com/images/blog/uae-repatriation-ticket-final-settlement.svg',
}

export default function RepatriationTicketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Repatriation Ticket
          </div>
          <h1>UAE Repatriation Ticket and Final Settlement</h1>
          <p>When flight costs, annual tickets, and gratuity appear in your final dues · 6 min read · <time dateTime="2026-04-28">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/uae-repatriation-ticket-final-settlement.svg"
          alt="Airplane graphic for UAE repatriation ticket and final settlement guidance"
          title="UAE Repatriation Ticket and Final Settlement"
          caption="Repatriation expenses, annual flight tickets, and gratuity are separate final settlement items with different rules."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>
            Repatriation expenses are separate from gratuity. They depend on the legal reason for departure, whether you are returning to your place of recruitment, and what your contract says about annual tickets.
          </p>
          <p>Do not mix three different concepts: statutory gratuity, repatriation expenses at the end of employment, and contractual annual flight ticket allowance. Each has a different basis.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">THREE DIFFERENT ITEMS</div>
          <h2>Repatriation ticket vs annual ticket vs gratuity</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Item</th><th>What it means</th><th>Where it comes from</th></tr>
              </thead>
              <tbody>
                <tr><td>Gratuity</td><td>End-of-service benefit calculated on basic salary and service period.</td><td>Federal Decree-Law No. 33 of 2021, Article 51.</td></tr>
                <tr><td>Repatriation expenses</td><td>Cost of returning the worker to the place of recruitment or agreed destination in relevant cases.</td><td>Employer obligations under UAE labour law.</td></tr>
                <tr><td>Annual ticket allowance</td><td>Yearly flight ticket benefit, often used by expat employees for home leave.</td><td>Employment contract or company policy.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-amber">PRACTICAL CHECKLIST</div>
          <h2>What to check before signing</h2>
          <ul>
            <li>Does your contract promise an annual flight ticket or cash allowance?</li>
            <li>Have you completed the service period required for the annual ticket benefit?</li>
            <li>Are you actually leaving the UAE or moving to another UAE employer?</li>
            <li>Did the employer include or exclude unused annual ticket allowance in the settlement sheet?</li>
            <li>Is gratuity calculated separately from travel costs?</li>
          </ul>
          <div className="info-box">
            If the annual ticket is a contractual benefit, ask HR to show the clause and the calculation. If the employer says it is forfeited, ask for the policy wording in writing.
          </div>
        </div>

        <div className="card">
          <div className="badge bg-teal">EXAMPLE</div>
          <h2>Example final settlement with ticket allowance</h2>
          <p><strong>Profile:</strong> AED 7,000 basic salary, 2 years of service, one unused annual ticket allowance worth AED 2,500 under the contract.</p>
          <div className="example-box">
            <div className="ex-line">Gratuity: AED 7,000 / 30 × 21 × 2 = AED 9,800</div>
            <div className="ex-line">Unused annual ticket allowance: AED 2,500</div>
            <div className="ex-total">Total before salary, leave, and deductions: AED 12,300</div>
          </div>
          <p>The ticket allowance is not part of gratuity. It is an additional contractual amount if the employment contract or policy grants it.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">OFFICIAL REFERENCES</div>
          <h2>Sources used for this guide</h2>
          <ul>
            <li><a href="https://www.mohre.gov.ae/assets/download/874ccc3b/federal-decree-law-regarding-the-regulation-of-employment-relationship.aspx" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>Federal Decree-Law No. 33 of 2021</a></li>
            <li><a href="https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/employee-companies/dear-worker-know-your-rights" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE worker rights guidance</a></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

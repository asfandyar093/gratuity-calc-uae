import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

const title = 'Repatriation Ticket Meaning & UAE Labour Law Rules 2026'
const description = 'Who pays your ticket home in the UAE? Article 13(12) explained: when the employer must pay, when you pay, ticket allowance vs repatriation, and your final dues.'
const url = 'https://www.uaegratuitycheck.com/blog/uae-repatriation-ticket-final-settlement'

export const metadata: Metadata = {
  title,
  description,  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/blog/uae-repatriation-ticket-final-settlement', images: ['/images/blog/photo/uae-repatriation-ticket-final-settlement.webp'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url,
  datePublished: '2026-04-28',
  dateModified: '2026-10-09',
  author: {
    '@type': 'Person',
    name: 'Asfandyar Khan',
    url: 'https://www.uaegratuitycheck.com/about',
    jobTitle: 'Editor',
    worksFor: { '@type': 'Organization', '@id': 'https://www.uaegratuitycheck.com/#org' },
  },
  publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
  mainEntityOfPage: url,
  image: 'https://www.uaegratuitycheck.com/images/blog/photo/uae-repatriation-ticket-final-settlement.webp',
}

export default function RepatriationTicketPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: 'UAE Repatriation Ticket and Final Settlement', path: '/blog/uae-repatriation-ticket-final-settlement' }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Repatriation Ticket
          </div>
          <h1>UAE Repatriation Ticket and Final Settlement</h1>
          <p>When flight costs, annual tickets, and gratuity appear in your final dues · 8 min read · <time dateTime="2026-10-09">Last updated: October 2026</time></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <BlogHeroImage
          src="/images/blog/photo/uae-repatriation-ticket-final-settlement.webp"
          alt="Aircraft wing at dusk seen from a passenger window"
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
                <tr><td>Repatriation expenses</td><td>Cost of returning the worker to the place of recruitment or agreed destination in relevant cases.</td><td>Employer obligations: Federal Decree-Law No. 33 of 2021, Article 13(12).</td></tr>
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
          <p>The ticket is one line of your settlement. Add it to gratuity, leave and notice pay with the <Link href="/final-settlement-calculator-uae">UAE final settlement calculator</Link>, then work through the <Link href="/blog/uae-final-settlement-checklist">final settlement checklist</Link> and <Link href="/blog/how-to-read-uae-final-settlement-sheet">how to read your settlement sheet</Link>. If HR is deducting notice from the same settlement, see <Link href="/blog/notice-period-deductions-gratuity-uae">notice period deductions and gratuity</Link>; if your visa is being cancelled, see <Link href="/blog/uae-gratuity-visa-cancellation">visa cancellation and final settlement</Link>.</p>
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

        <div className="card">
          <div className="badge bg-teal">WHAT THE LAW SAYS</div>
          <h2>Article 13(12): who pays for the ticket home</h2>
          <p>Article 13 of Federal Decree-Law No. 33 of 2021 lists the employer&apos;s obligations. Clause 12 says the employer must bear <strong>&ldquo;the repatriation expenses of the worker to his place of recruitment or any other place that both parties had agreed upon&rdquo;</strong>, with two exceptions: the worker has already joined another employer, or the reason for terminating the contract is attributed to the worker, in which case the worker bears those expenses.</p>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Situation</th><th>What the article says</th></tr></thead>
              <tbody>
                <tr><td>Contract ends and you leave the UAE</td><td>The employer bears the repatriation expenses to your place of recruitment or an agreed place.</td></tr>
                <tr><td>You join another employer</td><td>The first employer does not have to pay: the exception applies once you have &ldquo;already joined the service of another employer&rdquo;.</td></tr>
                <tr><td>The termination is attributed to you</td><td>You bear the expenses.</td></tr>
                <tr><td>You and the employer agree another destination</td><td>The employer&apos;s obligation covers &ldquo;any other place that both parties had agreed upon&rdquo;.</td></tr>
              </tbody>
            </table>
          </div>
          <p>What the article does <strong>not</strong> say: it does not define the ticket class, it does not mention cash in place of a ticket, and it refers to &ldquo;the worker&rdquo; rather than family members. It also does not define when a resignation counts as &ldquo;attributed to the worker&rdquo;. If your employer disputes the ticket, ask MOHRE how the article applies to your case.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">RELATED RULES</div>
          <h2>Other articles that affect your ticket and final dues</h2>
          <ul>
            <li><strong>Article 13(2):</strong> the employer must not withhold your official documents or force you to leave the State at the end of the employment relationship.</li>
            <li><strong>Article 53:</strong> the employer must pay your wages and all other entitlements stipulated in the law, the resolutions issued under it, the contract or the establishment&apos;s by-laws within 14 days of the contract ending. A ticket allowance promised in your contract is an entitlement under the contract, so it falls under the same deadline.</li>
            <li><strong>Article 54(1):</strong> if there is a dispute, you submit a request to the Ministry (MOHRE), which tries to settle it amicably before any referral to court. See <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>how to file a MOHRE complaint</Link>.</li>
            <li><strong>Article 15(3):</strong> if a worker dies, the employer bears the costs of preparing and transporting the body to the home country or place of residence if the family requests it.</li>
          </ul>
        </div>

        <div className="card">
          <div className="badge bg-blue">FAQ</div>
          <h2>Repatriation ticket FAQs</h2>
          <h3>Is the repatriation ticket part of my gratuity?</h3>
          <p>No. Gratuity is calculated under Article 51 on basic wage and service. Repatriation expenses come from Article 13(12) and are a separate item.</p>
          <h3>Do I get a ticket if I move to another UAE employer?</h3>
          <p>Under Article 13(12) the employer does not bear repatriation expenses once you have already joined the service of another employer.</p>
          <h3>Is an annual ticket allowance the same as a repatriation ticket?</h3>
          <p>No. An annual ticket allowance is a benefit in your contract or company policy. Because it is a contractual entitlement, Article 53 requires it to be paid within 14 days of the contract ending if it is due.</p>
          <h3>Can my employer pay cash instead of the ticket?</h3>
          <p>Article 13(12) speaks of bearing the repatriation expenses and does not address cash payments. Check your contract and ask MOHRE if the employer offers cash in place of a ticket.</p>
          <h3>What if my employer refuses to pay?</h3>
          <p>Raise it in writing first, then submit a request to MOHRE under Article 54(1). Keep your contract, termination notice and settlement sheet.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official text</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://uaelegislation.gov.ae/en/legislations/1541" target="_blank" rel="noopener noreferrer">
              <span>Federal Decree-Law No. 33 of 2021 — UAE Legislation portal</span>
              <small>The full official text, including the articles quoted above.</small>
            </a>
          </div>
        </div>

        <AuthorBox />
        <RelatedGuides path="/blog/uae-repatriation-ticket-final-settlement" />

        <Footer />
      </main>
    </>
  )
}

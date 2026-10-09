import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'
import { baseOpenGraph } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

const title = 'UAE Final Settlement Checklist 2026: 7 Things to Check First'
const description = 'Check these 7 items before signing your final settlement: gratuity, salary, leave pay, notice pay, deductions, repatriation costs and the 14 day deadline.'
const url = 'https://www.uaegratuitycheck.com/blog/uae-final-settlement-checklist'

export const metadata: Metadata = {
  title,
  description,  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/blog/uae-final-settlement-checklist', images: ['/images/blog/photo/uae-final-settlement-checklist.webp'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'UAE Final Settlement Checklist', item: url },
      ],
    },
    {
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
      image: 'https://www.uaegratuitycheck.com/images/blog/photo/uae-final-settlement-checklist.webp',
    },
  ],
}

export default function FinalSettlementChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Final Settlement Checklist
          </div>
          <h1>UAE Final Settlement Checklist 2026</h1>
          <p>Everything to verify before you sign a full-and-final settlement · 8 min read · <time dateTime="2026-10-09">Last updated: October 2026</time></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <BlogHeroImage
          src="/images/blog/photo/uae-final-settlement-checklist.webp"
          alt="Pen and form being completed at a desk"
          title="UAE Final Settlement Checklist 2026"
          caption="Final settlement checklist for UAE employees: gratuity, unpaid salary, leave encashment, notice pay, and legally supported deductions."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--red)', background: 'var(--red-light)' }}>
          <h2 style={{ color: 'var(--red-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--red-dark)', fontSize: '18px', fontWeight: 700 }}>
            Your UAE final settlement should include more than gratuity: unpaid salary, accrued leave pay, notice pay if applicable, approved reimbursements, and any legally permitted deductions.
          </p>
          <p>Article 53 of Federal Decree-Law No. 33 of 2021 requires the employer to pay wages and other entitlements within 14 days from the end of the contract. Gratuity is the biggest item for many employees, but it is not the whole settlement.</p>
          <p>
            <Link href="/final-settlement-calculator-uae" style={{ color: 'var(--red-dark)', fontWeight: 800 }}>
              Estimate your full final settlement now →
            </Link>
          </p>
        </div>

        <div className="card">
          <div className="badge bg-teal">FINAL SETTLEMENT ITEMS</div>
          <h2>What should be included in your UAE final settlement?</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Item</th><th>What to check</th></tr>
              </thead>
              <tbody>
                <tr><td>End-of-service gratuity</td><td>Calculated on basic salary only, after one year of continuous service, subject to the two-year cap.</td></tr>
                <tr><td>Unpaid salary</td><td>Salary through the last working day, including any approved paid notice period.</td></tr>
                <tr><td>Unused annual leave</td><td>Accrued leave days paid according to the legal and contractual basis.</td></tr>
                <tr><td>Notice pay</td><td>Pay in lieu if either party waived or failed to serve the contractual notice period.</td></tr>
                <tr><td>Reimbursements</td><td>Approved business expenses, commissions, or allowances that are contractually due.</td></tr>
                <tr><td>Deductions</td><td>Only legally supported deductions, such as salary advances or approved loans.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-teal">STEP BY STEP</div>
          <h2>How to audit your settlement before signing</h2>
          <ol>
            <li><strong>Calculate gratuity independently.</strong> Use your last basic salary, not total package, and deduct unpaid leave days from service.</li>
            <li><strong>Compare leave balance.</strong> Ask HR for the leave ledger and check opening balance, earned days, used days, and encashment value.</li>
            <li><strong>Confirm the last salary period.</strong> Make sure the final month is paid through your actual last working day.</li>
            <li><strong>Review every deduction.</strong> Ask for written support for loans, advances, damages, or notice-period compensation.</li>
            <li><strong>Keep proof.</strong> Save the settlement sheet, payslips, contract, resignation or termination letter, and bank transfer records.</li>
          </ol>
          <div className="success-box">
            Tip: calculate your estimated gratuity first with the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>free UAE gratuity calculator</Link>, then compare it line by line with HR&apos;s settlement sheet.
          </div>
        </div>

        <div className="card">
          <div className="badge bg-amber">COMMON DISPUTES</div>
          <h2>Red flags in a final settlement</h2>
          <ul>
            <li>Gratuity calculated on an older basic salary instead of the last basic salary.</li>
            <li>Housing, transport, or allowances included in leave pay but wrongly included in gratuity.</li>
            <li>Unexplained deductions labelled as visa costs, recruitment costs, or “company expenses”.</li>
            <li>A full-and-final form asking you to waive future claims before payment is received.</li>
            <li>Payment delayed beyond 14 days without a written explanation.</li>
          </ul>
          <div className="warn-box">
            If the employer does not pay after the deadline, you can raise a labour complaint with MOHRE. For claims of AED 50,000 or less, MOHRE can issue final executive decisions under the current dispute process.
          </div>
        </div>

        <div className="card">
          <div className="badge bg-blue">OFFICIAL REFERENCES</div>
          <h2>Sources used for this guide</h2>
          <ul>
            <li><a href="https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/employee-companies/dear-worker-know-your-rights" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE worker rights guidance</a></li>
            <li><a href="https://www.mohre.gov.ae/assets/download/950e1120/federal-decree-law-regarding-the-regulation-of-employment-relationship.aspx" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>Federal Decree-Law No. 33 of 2021</a></li>
            <li><a href="https://mohre.gov.ae/en/media-center/news/18/12/2023/mohre-to-resolve-aed50000-or-less-disputes-with-final-executive-decisions-as-of-1-january-2024-aimin" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE AED 50,000 dispute process update</a></li>
          </ul>
        </div>

        <div className="card">
          <div className="badge bg-teal">WHAT THE LAW SAYS</div>
          <h2>The articles behind each checklist item</h2>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Checklist item</th><th>Rule in Federal Decree-Law No. 33 of 2021</th></tr></thead>
              <tbody>
                <tr><td>Deadline for everything</td><td>Article 53: wages and all other entitlements within 14 days from the end date of the contract term.</td></tr>
                <tr><td>Gratuity</td><td>Article 51(2): 21 days&apos; basic wage per year for the first five years, 30 days per year after; 51(3) part years pro rata; 51(4) unpaid absence not counted; 51(6) total capped at two years&apos; wage.</td></tr>
                <tr><td>Notice pay</td><td>Article 43: wage for the notice period; compensation if notice is not respected.</td></tr>
                <tr><td>Deductions</td><td>Article 51(7): amounts payable under the law or a judgment, under the Implementing Regulation conditions.</td></tr>
                <tr><td>Ticket home</td><td>Article 13(12): employer bears repatriation expenses, with two exceptions.</td></tr>
                <tr><td>Experience certificate</td><td>Article 13(11): on request, free of fees, stating dates, service term, job title, last wage and reason for termination.</td></tr>
                <tr><td>Your documents</td><td>Article 13(2): the employer may not withhold your official documents.</td></tr>
                <tr><td>Disputes</td><td>Article 54(1): submit a request to the Ministry (MOHRE) to settle it amicably.</td></tr>
              </tbody>
            </table>
          </div>
          <p>Related guides: <Link href="/blog/uae-repatriation-ticket-final-settlement" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>repatriation ticket rules</Link>, <Link href="/blog/notice-period-deductions-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>notice period deductions</Link> and <Link href="/blog/unpaid-leave-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>unpaid leave and gratuity</Link>.</p>
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
        <RelatedGuides path="/blog/uae-final-settlement-checklist" />

        <Footer />
      </main>
    </>
  )
}

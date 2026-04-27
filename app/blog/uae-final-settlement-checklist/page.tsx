import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const title = 'UAE Final Settlement Checklist 2026 | Gratuity, Leave Pay and Notice'
const description = 'Complete UAE final settlement checklist for employees and HR teams. Covers gratuity, unpaid salary, unused annual leave, notice pay, deductions, repatriation costs, and the 14-day payment deadline.'
const url = 'https://www.uaegratuitycheck.com/blog/uae-final-settlement-checklist'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['UAE final settlement checklist', 'UAE gratuity final settlement', 'end of service settlement UAE', 'unused annual leave final settlement UAE', 'UAE labour law 14 days payment'],
  alternates: { canonical: url },
  openGraph: { images: ['/images/blog/uae-final-settlement-checklist.svg'] },
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
      dateModified: '2026-04-28',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: url,
      image: 'https://www.uaegratuitycheck.com/images/blog/uae-final-settlement-checklist.svg',
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
          <p>Everything to verify before you sign a full-and-final settlement · 8 min read · <time dateTime="2026-04-28">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/uae-final-settlement-checklist.svg"
          alt="UAE final settlement checklist covering gratuity, leave pay, notice pay, deductions, and the 14-day payment deadline"
          title="UAE Final Settlement Checklist 2026"
          caption="Final settlement checklist for UAE employees: gratuity, unpaid salary, leave encashment, notice pay, and legally supported deductions."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--red)', background: 'var(--red-light)' }}>
          <h2 style={{ color: 'var(--red-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--red-dark)', fontSize: '18px', fontWeight: 700 }}>
            Your UAE final settlement should include more than gratuity: unpaid salary, accrued leave pay, notice pay if applicable, approved reimbursements, and any legally permitted deductions.
          </p>
          <p>Article 53 of Federal Decree-Law No. 33 of 2021 requires the employer to pay wages and other entitlements within 14 days from the end of the contract. Gratuity is the biggest item for many employees, but it is not the whole settlement.</p>
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

        <Footer />
      </main>
    </>
  )
}

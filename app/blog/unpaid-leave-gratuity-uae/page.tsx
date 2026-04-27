import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const title = 'Does Unpaid Leave Reduce UAE Gratuity? 2026 Guide'
const description = 'Unpaid leave and absence without pay can reduce the service period used for UAE gratuity. Learn how to count unpaid days, calculate net service, and verify HR calculations.'
const url = 'https://www.uaegratuitycheck.com/blog/unpaid-leave-gratuity-uae'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['unpaid leave gratuity UAE', 'absence without pay gratuity UAE', 'UAE gratuity service period unpaid leave', 'UAE end of service unpaid leave'],
  alternates: { canonical: url },
  openGraph: { images: ['/images/blog/unpaid-leave-gratuity-uae.svg'] },
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
  image: 'https://www.uaegratuitycheck.com/images/blog/unpaid-leave-gratuity-uae.svg',
}

export default function UnpaidLeaveGratuityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Unpaid Leave
          </div>
          <h1>Does Unpaid Leave Reduce UAE Gratuity?</h1>
          <p>How unpaid days change your net service period · 6 min read · <time dateTime="2026-04-28">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/unpaid-leave-gratuity-uae.svg"
          alt="Unpaid leave reducing the net service period used for UAE gratuity calculation"
          title="Does Unpaid Leave Reduce UAE Gratuity?"
          caption="Unpaid absence is deducted from the service period before calculating UAE end-of-service gratuity."
        />

        <div className="card" style={{ borderLeft: '6px solid #f59e0b', background: '#fffbeb' }}>
          <h2 style={{ color: '#92400e' }}>The short answer</h2>
          <p style={{ color: '#92400e', fontSize: '18px', fontWeight: 700 }}>
            Yes. Days of unpaid absence are not counted as service for UAE gratuity. They reduce the net service period used in the calculation.
          </p>
          <p>Article 51 refers to continuous service but excludes days of absence without pay from the gratuity calculation. This matters most when unpaid leave brings you below a full year, below the five-year threshold, or close to a long-service cap.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">HOW TO CALCULATE</div>
          <h2>Net service period formula</h2>
          <div className="formula-box">
            <strong>Unpaid leave adjustment</strong>
            <div className="formula-line">Gross service days = last working date - joining date</div>
            <div className="formula-line">Net service days = gross service days - unpaid leave days</div>
            <div className="formula-line">Net service years = net service days / 365</div>
          </div>
          <p>Paid annual leave, paid sick leave, public holidays, maternity leave, and paid notice normally remain part of service. The deduction is for unpaid absence or leave without pay.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLE</div>
          <h2>Example: 3 years of employment with 45 unpaid days</h2>
          <p><strong>Profile:</strong> AED 9,000 basic salary, 3 calendar years at the company, 45 unpaid leave days.</p>
          <div className="example-box">
            <div className="ex-line">Gross service: 3.00 years</div>
            <div className="ex-line">Unpaid leave: 45 days = 0.123 years</div>
            <div className="ex-line">Net service: 2.877 years</div>
            <div className="ex-line">Daily wage: AED 9,000 / 30 = AED 300</div>
            <div className="ex-total">Gratuity: AED 300 × 21 × 2.877 = AED 18,125</div>
          </div>
          <p>Without deducting unpaid leave, the estimate would be AED 18,900. The 45 unpaid days reduce the gratuity by AED 775 in this example.</p>
        </div>

        <div className="card">
          <div className="badge bg-red">EDGE CASES</div>
          <h2>When unpaid leave can change eligibility</h2>
          <ul>
            <li><strong>Near one year:</strong> 370 calendar days of employment with 10 unpaid days may become 360 net days, which can affect eligibility.</li>
            <li><strong>Near five years:</strong> unpaid leave can keep part of the service in the 21-day formula instead of the 30-day formula.</li>
            <li><strong>Long service:</strong> unpaid leave can slightly delay when the two-year gratuity cap applies.</li>
          </ul>
          <div className="info-box">
            The calculator on this site includes an Advanced Options field for unpaid leave days. Enter the total unpaid days to estimate the net service period more accurately.
          </div>
        </div>

        <div className="card">
          <div className="badge bg-blue">OFFICIAL REFERENCES</div>
          <h2>Sources used for this guide</h2>
          <ul>
            <li><a href="https://www.mohre.gov.ae/en/guidance-and-awareness-portal-new/employee-companies/dear-worker-know-your-rights" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>MOHRE end-of-service benefits guidance</a></li>
            <li><a href="https://www.mohre.gov.ae/assets/download/950e1120/federal-decree-law-regarding-the-regulation-of-employment-relationship.aspx" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>Federal Decree-Law No. 33 of 2021</a></li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

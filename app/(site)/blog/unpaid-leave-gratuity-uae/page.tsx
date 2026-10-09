import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

const title = 'Unpaid Leave Calculation UAE 2026: Salary & Gratuity'
const description = 'How unpaid leave is calculated in the UAE: the daily salary deduction formula, how unpaid days cut your gratuity service period, and worked examples to copy.'
const url = 'https://www.uaegratuitycheck.com/blog/unpaid-leave-gratuity-uae'

export const metadata: Metadata = {
  title,
  description,  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/blog/unpaid-leave-gratuity-uae', images: ['/images/blog/real/unpaid-leave-gratuity-uae.webp'] },
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
  image: 'https://www.uaegratuitycheck.com/images/blog/real/unpaid-leave-gratuity-uae.webp',
}

export default function UnpaidLeaveGratuityPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: 'Does Unpaid Leave Reduce UAE Gratuity?', path: '/blog/unpaid-leave-gratuity-uae' }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Unpaid Leave
          </div>
          <h1>Does Unpaid Leave Reduce UAE Gratuity?</h1>
          <p>How unpaid days change your net service period · 6 min read · <time dateTime="2026-10-09">Last updated: October 2026</time></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/unpaid-leave-gratuity-uae.webp"
          alt="Unpaid leave reducing the net service period used for UAE gratuity calculation"
          title="Does Unpaid Leave Reduce UAE Gratuity?"
          caption="Unpaid absence is deducted from the service period before calculating UAE end of service gratuity."
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

        <div className="card">
          <div className="badge bg-teal">WHAT THE LAW SAYS</div>
          <h2>Article 51: unpaid absence and service time</h2>
          <ul>
            <li><strong>Unpaid days do not count:</strong> Article 51(4) says &ldquo;the unpaid days of absence from work shall not be included in the calculation of the service term&rdquo;. They shorten your counted service, so they reduce gratuity, but they do not cancel it.</li>
            <li><strong>One-year threshold:</strong> a full-time foreign worker needs one year of continuous service for gratuity (Article 51(2)). Part years are paid in proportion once that year is completed (Article 51(3)).</li>
            <li><strong>Formula unchanged:</strong> gratuity is still 21 days&apos; basic wage for each of the first five years and 30 days for each year after that (Article 51(2)), on your last basic wage (Article 51(5)), capped at two years&apos; wage (Article 51(6)).</li>
            <li><strong>Deadline:</strong> your dues are payable within 14 days of the contract ending (Article 53).</li>
          </ul>
          <p>Enter your unpaid days in the advanced options of the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>gratuity calculator</Link> to see the effect on your own figure. Unpaid leave also changes your salary for the month; use the <Link href="/final-settlement-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>final settlement calculator</Link> for the full picture.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">FAQ</div>
          <h2>Unpaid leave and gratuity FAQs</h2>
          <h3>Does unpaid leave reduce my UAE gratuity?</h3>
          <p>Yes, by shortening the service period used in the calculation. Article 51(4) excludes the unpaid days of absence.</p>
          <h3>Does paid annual leave count as service?</h3>
          <p>Article 51(4) excludes only unpaid days of absence, so paid leave is not removed from the service term by that clause.</p>
          <h3>Can unpaid leave take me below the one-year minimum?</h3>
          <p>Gratuity requires one year of continuous service (Article 51(2)). If unpaid days leave you short of a year, ask HR to show the service dates and the days excluded, and check with MOHRE if you disagree.</p>
          <h3>What if HR counted my unpaid days wrongly?</h3>
          <p>Ask for the calculation in writing. If it is not resolved, submit a request to MOHRE (Article 54(1)); see <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>how to file a MOHRE complaint</Link>.</p>
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
        <RelatedGuides path="/blog/unpaid-leave-gratuity-uae" />

        <Footer />
      </main>
    </>
  )
}

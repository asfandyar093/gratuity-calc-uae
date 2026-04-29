import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

const title = 'Can Notice Period Deductions Reduce UAE Gratuity? 2026 Guide'
const description = 'Learn when notice-period compensation can be deducted from a UAE final settlement, what cannot be deducted from gratuity arbitrarily, and how to verify the calculation.'
const url = 'https://www.uaegratuitycheck.com/blog/notice-period-deductions-gratuity-uae'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['notice period deduction UAE gratuity', 'UAE gratuity deductions', 'notice pay final settlement UAE', 'resignation without notice UAE gratuity'],
  alternates: { canonical: url },
  openGraph: { images: ['/images/blog/real/notice-period-deductions-gratuity-uae.png'] },
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
  image: 'https://www.uaegratuitycheck.com/images/blog/real/notice-period-deductions-gratuity-uae.png',
}

export default function NoticeDeductionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Notice Deductions
          </div>
          <h1>Can Notice Period Deductions Reduce UAE Gratuity?</h1>
          <p>What employers can deduct, what they cannot, and how to check your settlement · 6 min read · <time dateTime="2026-04-28">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/real/notice-period-deductions-gratuity-uae.png"
          alt="Notice period clock illustrating deductions from a UAE final settlement"
          title="Can Notice Period Deductions Reduce UAE Gratuity?"
          caption="Notice-period compensation is separate from gratuity, but it can reduce the net final settlement where legally supported."
        />

        <div className="card" style={{ borderLeft: '6px solid var(--black-soft)', background: 'var(--gray-50)' }}>
          <h2>The short answer</h2>
          <p style={{ fontSize: '18px', fontWeight: 700 }}>
            Resigning without serving notice does not erase gratuity, but the employer may claim compensation for the unserved notice period and offset it against the final settlement where legally supported.
          </p>
          <p>The key distinction is important: gratuity entitlement is calculated under Article 51, while notice-period compensation is a separate settlement item. The final paid amount can be lower if a valid deduction applies.</p>
        </div>

        <div className="card">
          <div className="badge bg-teal">VALID VS RISKY DEDUCTIONS</div>
          <h2>What can be deducted from final settlement?</h2>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Deduction</th><th>Usually valid?</th><th>What to ask for</th></tr>
              </thead>
              <tbody>
                <tr><td>Unserved notice compensation</td><td className="hl">Yes, if notice was required</td><td>Contract notice clause and calculation basis.</td></tr>
                <tr><td>Salary advance or approved loan</td><td className="hl">Yes</td><td>Signed agreement and remaining balance.</td></tr>
                <tr><td>Documented damage caused by employee</td><td>Case-specific</td><td>Investigation record and written approval or ruling.</td></tr>
                <tr><td>Visa or recruitment fees</td><td>High risk</td><td>Legal basis. These are often not recoverable from employees.</td></tr>
                <tr><td>Generic “admin fees”</td><td>No</td><td>Challenge if unsupported.</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLE</div>
          <h2>Example: resignation with 15 days of notice not served</h2>
          <p><strong>Profile:</strong> AED 12,000 monthly wage for notice purposes, AED 8,000 basic salary for gratuity, 3 years of service, 15 notice days not served.</p>
          <div className="example-box">
            <div className="ex-line">Gratuity: AED 8,000 / 30 × 21 × 3 = AED 16,800</div>
            <div className="ex-line">Notice compensation: AED 12,000 / 30 × 15 = AED 6,000</div>
            <div className="ex-total">Net before other dues: AED 16,800 - AED 6,000 = AED 10,800</div>
          </div>
          <p>In this example, the gratuity formula did not change. The final settlement was lower because a separate notice deduction was applied.</p>
        </div>

        <div className="card">
          <div className="badge bg-red">RED FLAGS</div>
          <h2>When to challenge a deduction</h2>
          <ul>
            <li>The settlement says “gratuity forfeited” simply because you resigned.</li>
            <li>The employer deducts visa, recruitment, or work permit costs without a clear legal basis.</li>
            <li>The deduction is bigger than the salary value of the unserved notice period.</li>
            <li>HR refuses to provide a written calculation.</li>
          </ul>
          <div className="warn-box">
            Keep your resignation letter, acceptance email, final settlement sheet, and payslips. These documents are useful if you need to file a MOHRE complaint.
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

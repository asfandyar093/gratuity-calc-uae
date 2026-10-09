import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph, breadcrumbSchema } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

const title = 'Notice Period Deductions From UAE Gratuity: What\'s Legal?'
const description = 'Notice pay can reduce your final settlement, but gratuity is a separate item under Article 51. What UAE law says about notice compensation, with examples.'
const url = 'https://www.uaegratuitycheck.com/blog/notice-period-deductions-gratuity-uae'

export const metadata: Metadata = {
  title,
  description,  alternates: { canonical: url },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/blog/notice-period-deductions-gratuity-uae', images: ['/images/blog/photo/notice-period-deductions-gratuity-uae.webp'] },
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
  image: 'https://www.uaegratuitycheck.com/images/blog/photo/notice-period-deductions-gratuity-uae.webp',
}

export default function NoticeDeductionsPage() {
  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: 'Notice Period Deductions and UAE Gratuity', path: '/blog/notice-period-deductions-gratuity-uae' }])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Notice Deductions
          </div>
          <h1>Can Notice Period Deductions Reduce UAE Gratuity?</h1>
          <p>What employers can deduct, what they cannot, and how to check your settlement · 6 min read · <time dateTime="2026-10-09">Last updated: October 2026</time></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        <BlogHeroImage
          src="/images/blog/photo/notice-period-deductions-gratuity-uae.webp"
          alt="Packed cardboard box on a desk at the end of notice"
          title="Can Notice Period Deductions Reduce UAE Gratuity?"
          caption="Notice period compensation is separate from gratuity, but it can reduce the net final settlement where legally supported."
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

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: labour rights</span>
              <small>Official worker-rights information for UAE private-sector employees.</small>
            </a>
            <a className="article-link-item" href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer">
              <span>MOHRE: Ministry of Human Resources and Emiratisation</span>
              <small>Official UAE ministry responsible for labour law, complaints, and private-sector employment regulation.</small>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="badge bg-teal">WHAT THE LAW SAYS</div>
          <h2>Article 43: notice period rules</h2>
          <ul>
            <li><strong>Written notice and length:</strong> either party may end the contract for a legitimate reason by notifying the other in writing. The notice period agreed in the contract must be not less than 30 days and not more than 90 days (Article 43(1)).</li>
            <li><strong>Pay during notice:</strong> the contract continues during the notice period and you are entitled to your full wage for it, based on your last wage (Article 43(2)).</li>
            <li><strong>Compensation if notice is not served:</strong> the party who does not respect the notice period pays the other a &ldquo;notice period allowance&rdquo; equal to the worker&apos;s wage for the full notice period or the remaining part, even if the other side suffered no damage (Article 43(3)). It is calculated on the last wage received (Article 43(4)).</li>
            <li><strong>Job search time:</strong> if the employer ends the contract, you may be absent one working day per week without pay to look for another job, after giving at least three days&apos; notice of the day (Article 43(5)).</li>
            <li><strong>Waiving or shortening notice:</strong> the parties may agree to exempt or shorten the notice period while preserving the worker&apos;s rights for the agreed notice period, and the notice period must be the same for both sides unless a different period serves the worker&apos;s interest (Article 43(2)).</li>
          </ul>
          <p>Article 51(7) separately lets the employer deduct from end-of-service benefits amounts payable under the law or a judgment, under the conditions in the Implementing Regulation. Article 53 sets the 14-day deadline to pay your dues after the contract ends. To estimate notice pay on your own numbers, use the <Link href="/notice-period-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>notice period calculator</Link>.</p>
        </div>

        <div className="card">
          <div className="badge bg-blue">FAQ</div>
          <h2>Notice period deduction FAQs</h2>
          <h3>Can my employer cancel my gratuity if I resign without notice?</h3>
          <p>The law gives the other party compensation for unserved notice (Article 43(3)). It does not remove your gratuity under Article 51. The two are separate items on the settlement sheet.</p>
          <h3>How is the notice allowance calculated?</h3>
          <p>It equals your wage for the full notice period or the remaining part, calculated on your last wage (Article 43(3) and (4)). The example above uses the full monthly wage for notice and the basic salary for gratuity.</p>
          <h3>What if I am the one dismissed without proper notice?</h3>
          <p>Article 43(3) applies to whichever party fails to respect the notice period, so an employer who does not give notice owes the worker the allowance as well.</p>
          <h3>Is notice period pay the same as gratuity?</h3>
          <p>No. Notice pay is wage for the notice period; gratuity is the end-of-service benefit under Article 51.</p>
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
        <RelatedGuides path="/blog/notice-period-deductions-gratuity-uae" />

        <Footer />
      </main>
    </>
  )
}

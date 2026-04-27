import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogHeroImage from '@/components/BlogHeroImage'

export const metadata: Metadata = {
  title: 'UAE Gratuity for Less Than 1 Year of Service 2026 | What Are You Owed?',
  description:
    'Do you get gratuity if you leave before completing one year in the UAE? Full guide to partial-year entitlements, exceptions, and what the law says under Federal Decree-Law No. 33 of 2021.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-less-than-1-year',
  },
  openGraph: {
    images: ['/images/blog/uae-gratuity-less-than-1-year.svg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Gratuity for Less Than 1 Year', item: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-less-than-1-year' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity for Less Than 1 Year of Service 2026 | What Are You Owed?',
      description: 'Complete guide to UAE gratuity entitlement when you leave before completing one year of service.',
      url: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-less-than-1-year',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/blog/uae-gratuity-less-than-1-year',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you get gratuity if you leave before 1 year in UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Under Federal Decree-Law No. 33 of 2021, the minimum service period to qualify for end-of-service gratuity is one full year of continuous employment. Employees who leave before completing one year are not entitled to gratuity.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I am terminated before 1 year in UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you are terminated by the employer before completing one year, you are generally not entitled to gratuity under the standard UAE labour law. However, you may be entitled to notice pay or arbitrary dismissal compensation depending on your contract terms and the circumstances of termination.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an employer pay gratuity for less than 1 year voluntarily?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. An employer can voluntarily pay gratuity for a partial year as a goodwill gesture or as stated in the employment contract. However, this is not legally required. Some contracts include more generous provisions than the statutory minimum.',
          },
        },
      ],
    },
  ],
}

export default function LessThan1YearPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › Gratuity for Less Than 1 Year
          </div>
          <h1>UAE Gratuity for Less Than 1 Year of Service 2026</h1>
          <p>What are you owed if you leave before completing one year? · 6 min read · <time dateTime="2026-04-12">Last updated: April 2026</time></p>
        </div>

        <BlogHeroImage
          src="/images/blog/uae-gratuity-less-than-1-year.svg"
          alt="UAE gratuity eligibility guide for employees with less than one year of service"
          title="UAE Gratuity for Less Than 1 Year of Service"
          caption="Standard UAE gratuity generally starts after one full year of continuous service, but other final dues may still apply."
        />

        {/* Key answer */}
        <div className="card" style={{ borderLeft: '6px solid var(--red)', background: 'var(--red-light)' }}>
          <h2 style={{ color: 'var(--red-dark)' }}>The short answer</h2>
          <p style={{ color: 'var(--red-dark)', fontSize: '18px', fontWeight: 700 }}>
            Under UAE law, you are not entitled to gratuity if you leave before completing one full year of continuous service.
          </p>
          <p>Federal Decree-Law No. 33 of 2021 sets a hard minimum of one year. Employees who resign, are terminated, or whose contracts expire before this threshold has been reached receive no statutory gratuity — regardless of how long they worked.</p>
          <p>
            <Link href="/" style={{ color: 'var(--red-dark)', fontWeight: 700 }}>
              Calculate your gratuity if you have completed 1+ years →
            </Link>
          </p>
        </div>

        {/* The legal basis */}
        <div className="card">
          <div className="badge bg-teal">LEGAL BASIS</div>
          <h2>What the law says — Article 51 of Federal Decree-Law No. 33 of 2021</h2>
          <p>Article 51 of the UAE Labour Law is explicit: end-of-service gratuity is calculated for each year of service completed. The word &quot;completed&quot; is the key — the law does not provide for pro-rated entitlement in the first partial year.</p>
          <div className="info-box">
            <strong>Article 51 states:</strong> &quot;The worker shall be entitled to end-of-service gratuity at the end of the service, calculated on the basis of 21 days&apos; wage for each year of the first five years of service, and 30 days&apos; wage for each subsequent year, provided the total gratuity shall not exceed the wage of two years.&quot;
          </div>
          <p style={{ marginTop: '1rem' }}>The phrase &quot;for each year of service&quot; means no gratuity accrues until the first full year is completed. This interpretation has been consistently upheld by UAE courts.</p>
        </div>

        {/* What you ARE owed */}
        <div className="card">
          <div className="badge bg-teal">WHAT YOU ARE OWED</div>
          <h2>Even without gratuity — what are your rights?</h2>
          <p>Even if you leave before one year and are not owed gratuity, you are still entitled to other payments under UAE law:</p>
          <div className="two-col">
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>You are owed:</h3>
              <ul>
                <li>All outstanding salary up to the last working day</li>
                <li>Payment in lieu of accrued but unused annual leave</li>
                <li>Notice pay if terminated without proper notice</li>
                <li>Repatriation ticket (if applicable under your contract)</li>
                <li>Any contractual bonuses earned up to termination date</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3 style={{ color: 'var(--red-dark)' }}>You are NOT owed:</h3>
              <ul>
                <li>Statutory end-of-service gratuity (less than 1 year)</li>
                <li>Gratuity for partial year of first year</li>
              </ul>
              <div style={{ marginTop: '1rem', fontSize: '14px', color: 'var(--text-muted)' }}>
                Note: Your employment contract may grant more generous terms. Always check your contract.
              </div>
            </div>
          </div>
        </div>

        {/* Exceptions */}
        <div className="card">
          <div className="badge bg-blue">EXCEPTIONS — WHEN YOU MAY STILL RECEIVE PAYMENT</div>
          <h2>When can you receive a gratuity-like payment for less than 1 year?</h2>
          <p>There are limited circumstances where you might receive a payment resembling gratuity even before completing one year:</p>
          <ul>
            <li>
              <strong>Contractual provisions</strong> — Your employment contract may explicitly grant gratuity or a severance payment for any period of service. Contracts can always be more generous than the statutory minimum.
            </li>
            <li>
              <strong>Company policy</strong> — Some large employers, particularly multinationals, have internal HR policies that provide partial gratuity after 6 months as a retention or goodwill measure.
            </li>
            <li>
              <strong>Arbitrary dismissal compensation</strong> — If terminated unlawfully or without proper notice, a court may award compensation equivalent to gratuity entitlement as damages — even for partial years.
            </li>
            <li>
              <strong>DIFC and ADGM</strong> — These financial free zones have their own regulations. DIFC employees under the DEWS scheme may have different entitlement structures.
            </li>
          </ul>
        </div>

        {/* The leave accrual point */}
        <div className="card">
          <div className="badge bg-teal">ANNUAL LEAVE — A DIFFERENT RULE</div>
          <h2>Annual leave is different — you can get a payout in less than 1 year</h2>
          <p>It is important not to confuse gratuity with annual leave. While gratuity requires one full year, annual leave accrues from day one under UAE law:</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Entitlement</th><th>Minimum service required</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>End-of-service gratuity</td><td className="hl">1 full year</td><td>No pro-rating for partial first year</td></tr>
                <tr><td>Annual leave payout</td><td>Any duration</td><td>Accrues from day one, paid out on exit</td></tr>
                <tr><td>Notice pay</td><td>6 months+</td><td>Minimum 30 days after 6-month probation</td></tr>
                <tr><td>Sick leave pay</td><td>3 months+</td><td>First 15 days paid in full after 3 months</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>If you leave before one year, always request a calculation of your unused leave. For employees with 30 days&apos; annual leave entitlement, up to a month&apos;s additional salary may be owed on departure.</p>
        </div>

        {/* Worked examples */}
        <div className="card">
          <div className="badge bg-teal">WORKED EXAMPLES</div>
          <h2>How much will you receive leaving at 6 months vs 13 months?</h2>
          <p><strong>Employee:</strong> AED 8,000 basic salary, 30 days annual leave entitlement</p>

          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="example-box">
              <div className="ex-title">LEAVING AT 6 MONTHS</div>
              <div className="ex-line">Gratuity: AED 0 (less than 1 year)</div>
              <div className="ex-line">Accrued leave: 15 days × (8,000÷30) = AED 4,000</div>
              <div className="ex-line">Notice pay: 30 days × (8,000÷30) = AED 8,000</div>
              <div className="ex-total">Total: AED 12,000</div>
            </div>
            <div className="example-box">
              <div className="ex-title">LEAVING AT 13 MONTHS</div>
              <div className="ex-line">Gratuity (1 year): 21 × (8,000÷30) = AED 5,600</div>
              <div className="ex-line">Accrued leave: ~32.5 days × (8,000÷30) = AED 8,667</div>
              <div className="ex-line">Notice pay: 30 days × (8,000÷30) = AED 8,000</div>
              <div className="ex-total">Total: AED 22,267</div>
            </div>
          </div>
          <p style={{ marginTop: '1rem' }}>The difference is significant — completing one full year before leaving adds gratuity entitlement on top of your leave payout. If you are close to the one-year mark, it is often worth serving out the remaining days.</p>
          <p>Use the <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>free UAE gratuity calculator</Link> to see exactly what you will be owed once you cross the one-year threshold.</p>
        </div>

        {/* FAQ */}
        <div className="card">
          <div className="badge bg-teal">COMMON QUESTIONS</div>
          <h2>Frequently asked questions</h2>

          <h3 style={{ marginTop: '1rem' }}>My employer terminated me at 11 months. Can I claim anything?</h3>
          <p>You cannot claim statutory gratuity. However, you should claim: all outstanding salary, unused annual leave payout, and notice pay (if terminated without adequate notice). If the termination was arbitrary or without cause, you may be entitled to additional compensation — consult a UAE labour lawyer or file with MOHRE.</p>

          <h3 style={{ marginTop: '1.25rem' }}>I resigned at 10 months — my contract says I get gratuity after 6 months. Is that valid?</h3>
          <p>Yes. Employment contracts can grant more generous benefits than the statutory minimum. If your contract specifies gratuity entitlement after 6 months, your employer is bound by that contractual obligation and must pay accordingly.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Do probation months count toward the 1-year threshold?</h3>
          <p>Yes. The one-year minimum is calculated from your employment start date, including any probation period. Probation months are continuous service. If your probation is 3 months and you work for 9 more months after probation, you have completed exactly one year.</p>

          <h3 style={{ marginTop: '1.25rem' }}>هل أستحق مكافأة نهاية الخدمة إذا عملت أقل من سنة؟</h3>
          <p>لا، بموجب القانون الاتحادي رقم 33 لسنة 2021، يشترط إتمام سنة كاملة من الخدمة المتواصلة لاستحقاق مكافأة نهاية الخدمة. من يغادر قبل اكتمال السنة لا يحق له الحصول على مكافأة. غير أنه يحق له استلام راتبه المستحق وأجر الإجازة السنوية غير المستخدمة وبدل الإشعار إن وجد.</p>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--green) 0%, #1a5c2a 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Completed 1 year? Calculate exactly what you are owed.</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>Use the free UAE gratuity calculator — shows daily wage, entitled days, cap status, and payment deadline.</p>
          <Link href="/" style={{ display: 'inline-block', background: '#fff', color: 'var(--green-dark)', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

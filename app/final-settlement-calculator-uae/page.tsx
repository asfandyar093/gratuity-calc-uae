import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FinalSettlementCalculator from '@/components/FinalSettlementCalculator'

export const metadata: Metadata = {
  title: 'UAE Final Settlement Calculator 2026 | Gratuity, Leave and Notice Pay',
  description:
    'Free UAE final settlement calculator. Estimate gratuity, unpaid salary, unused annual leave, notice pay or deduction, ticket allowance, reimbursements, loans, and total final payout.',
  keywords: [
    'UAE final settlement calculator',
    'final settlement calculator UAE',
    'Dubai final settlement calculator',
    'UAE gratuity and leave salary calculator',
    'UAE notice period deduction calculator',
    'end of service settlement UAE',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/final-settlement-calculator-uae',
  },
  openGraph: {
    title: 'UAE Final Settlement Calculator 2026',
    description: 'Calculate gratuity, leave encashment, unpaid salary, notice pay, additions, deductions, and total UAE final settlement.',
    url: 'https://www.uaegratuitycheck.com/final-settlement-calculator-uae',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.uaegratuitycheck.com/final-settlement-calculator-uae#calculator',
      name: 'UAE Final Settlement Calculator 2026',
      url: 'https://www.uaegratuitycheck.com/final-settlement-calculator-uae',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
      description: 'Free UAE final settlement calculator for gratuity, unpaid salary, unused annual leave, notice pay, additions, deductions, and total payout.',
      featureList: [
        'End-of-service gratuity calculation',
        'Unpaid salary calculation',
        'Unused annual leave encashment',
        'Notice pay and notice deduction',
        'Air ticket and reimbursement additions',
        'Loan and advance deductions',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is included in a UAE final settlement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A UAE final settlement can include end-of-service gratuity, unpaid salary, unused annual leave, notice pay, contractual ticket allowance, reimbursements, and legally permitted deductions such as loans or advances.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is final settlement the same as gratuity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Gratuity is one part of final settlement. Final settlement is the wider calculation that may also include salary, leave encashment, notice pay, additions, and deductions.',
          },
        },
      ],
    },
  ],
}

export default function FinalSettlementCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Final Settlement · UAE Labour Law · Updated 2026</div>
          <h1>UAE Final Settlement Calculator 2026<br /><em>Gratuity, Leave Salary and Notice Pay</em></h1>
          <p className="hero-desc">
            Estimate your full end-of-employment payout in one place: gratuity, unpaid salary, unused annual leave,
            notice pay or deduction, ticket allowance, reimbursements, loans, and total final settlement.
          </p>
          <div className="pills">
            <span className="pill">✓ Gratuity included</span>
            <span className="pill">✓ Leave encashment</span>
            <span className="pill">✓ Notice pay or deduction</span>
            <span className="pill">✓ No data stored</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>Final Settlement Calculator</span>
        </nav>

        <FinalSettlementCalculator />

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WHAT THIS CALCULATOR INCLUDES</div>
            <h2>Final settlement is bigger than gratuity</h2>
            <p>Your final settlement is the total amount payable when employment ends. UAE gratuity is usually the largest item, but HR should also account for salary earned up to your last working day, unused annual leave, notice pay or notice deduction, contractual ticket allowance, approved reimbursements, and legally supported deductions.</p>
            <div className="two-col">
              <div className="mini-card">
                <h3>Common additions</h3>
                <ul>
                  <li>End-of-service gratuity</li>
                  <li>Unpaid salary days</li>
                  <li>Unused annual leave cash value</li>
                  <li>Notice pay owed by employer</li>
                  <li>Ticket allowance or reimbursements</li>
                </ul>
              </div>
              <div className="mini-card">
                <h3>Common deductions</h3>
                <ul>
                  <li>Salary advances</li>
                  <li>Approved employee loans</li>
                  <li>Notice period not served</li>
                  <li>Documented deductions supported by law or agreement</li>
                </ul>
              </div>
            </div>
            <div className="warn-box">
              This tool gives an estimate for planning and checking HR calculations. Your signed contract, company policy, free-zone rules, and MOHRE or court decisions can affect the final amount.
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">RELATED GUIDES</div>
            <h2>Check the details behind each line item</h2>
            <div style={{ display: 'grid', gap: '10px' }}>
              <Link href="/blog/uae-final-settlement-checklist" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
                UAE final settlement checklist →
              </Link>
              <Link href="/blog/unpaid-leave-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
                Does unpaid leave reduce gratuity? →
              </Link>
              <Link href="/blog/notice-period-deductions-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
                Notice period deductions and gratuity →
              </Link>
              <Link href="/blog/uae-repatriation-ticket-final-settlement" style={{ color: 'var(--green-dark)', fontWeight: 700, textDecoration: 'none' }}>
                Repatriation ticket and final settlement →
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

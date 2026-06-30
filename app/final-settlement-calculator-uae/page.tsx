import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FinalSettlementCalculator from '@/components/FinalSettlementCalculator'
import FaqItem from '@/components/FaqItem'

export const metadata: Metadata = {
  title: 'UAE Final Settlement Calculator 2026 — See Your Total Payout Before You Sign',
  description:
    'Free UAE final settlement calculator. Add up gratuity, unpaid salary, leave encashment, notice pay, deductions, and ticket allowance to see the exact amount your employer owes you.',  alternates: {
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
        {
          '@type': 'Question',
          name: 'How do I calculate my final settlement in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Add up your end-of-service gratuity, any unpaid salary days up to your last working day, the cash value of unused annual leave, and any notice pay owed to you. Then subtract legally permitted deductions such as loans, advances, or notice not served. The result is your total final settlement.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is an end of service calculator in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An end of service calculator estimates the gratuity owed when a UAE employment contract ends, based on basic salary, service period, and the statutory two-year cap. A final settlement calculator goes further and adds unpaid salary, leave encashment, notice pay, and deductions to give the full payout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does an employer have to pay the final settlement in the UAE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under UAE Labour Law, the final settlement — including gratuity, unpaid salary, and leave encashment — should generally be paid within 14 days of the employee’s last working day.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does unused annual leave get added to the final settlement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Any unused annual leave days must be paid out in cash as part of the final settlement. The cash value is the basic daily wage (basic salary divided by 30) multiplied by the number of unused leave days.',
          },
        },
      ],
    },
  ],
}

const settlementFaqs: [string, string][] = [
  ['How do I calculate my final settlement in the UAE?', 'Add together your end-of-service gratuity, unpaid salary up to your last working day, the cash value of unused annual leave, and any notice pay owed to you. Then subtract legally permitted deductions such as loans, salary advances, or notice you did not serve. The total is your final settlement.'],
  ['What is the difference between an end of service calculator and a final settlement calculator?', 'An end of service calculator (or gratuity calculator) only estimates the statutory gratuity payment. A final settlement calculator is broader — it adds unpaid salary, unused annual leave, notice pay, ticket allowance, reimbursements, and deductions to show your full payout.'],
  ['How is settlement calculation done if I resign before completing my notice period?', 'If you leave before serving your full notice period, your employer may deduct an amount equal to the unserved notice days from your final settlement. Gratuity itself is not reduced for resignation, but the notice deduction is applied separately as a line item.'],
  ['Is the final settlement calculation different for limited and unlimited contracts?', 'The gratuity formula (21 days for the first 5 years, 30 days after) is the same for both contract types under Federal Decree-Law No. 33 of 2021. The main difference can be in notice period length and any early-termination terms specified in the contract.'],
  ['What happens if my final settlement is delayed beyond 14 days?', 'If your employer delays payment beyond the standard 14-day window without a valid reason, you can raise the issue through MOHRE. See the guide on how to file a MOHRE complaint for the steps involved.'],
  ['Does the final settlement calculator include air ticket allowance?', 'Yes, if your contract includes a repatriation or annual air ticket allowance, you can add it as an addition in the calculator. Whether it is owed depends on your contract terms and whether it was already used during employment.'],
]

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
            <div className="badge bg-teal">STEP BY STEP — كيفية الحساب</div>
            <h2>How a UAE final settlement calculation works</h2>
            <p>A final settlement adds together everything owed to you on your last day, then subtracts anything you owe your employer. Here is a worked example for an employee with 4 years of service, AED 10,000 basic salary, 12 unused leave days, and a 30-day notice period of which only 15 days were served.</p>
            <div className="example-box">
              <div className="ex-title">4 years service · AED 10,000 basic salary · resigned with 15 of 30 notice days served</div>
              <div className="ex-line">Daily wage: AED 10,000 ÷ 30 = <strong>AED 333.33</strong></div>
              <div className="ex-line">Gratuity (4 years × 21 days): AED 333.33 × 21 × 4 = AED 28,000</div>
              <div className="ex-line">Unused leave (12 days): AED 333.33 × 12 = AED 4,000</div>
              <div className="ex-line">Unpaid salary (10 days worked in final month): AED 3,333</div>
              <div className="ex-line">Notice period not served (15 days): − AED 5,000</div>
              <div className="ex-total">Total final settlement: AED 28,000 + 4,000 + 3,333 − 5,000 = AED 30,333</div>
            </div>
            <p>This is the same logic the calculator above applies automatically: gratuity and leave encashment are calculated first, then unpaid salary and any agreed additions are added, and finally deductions such as unserved notice or loans are subtracted to reach the total payout.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">GRATUITY VS FINAL SETTLEMENT VS LEAVE PAYOUT</div>
            <h2>How these three calculators are different</h2>
            <p>Searches for an "end of service calculator", "settlement calculation", and "leave salary calculation" often mean slightly different things. Use this table to find the right tool.</p>
            <div className="tbl-wrap" style={{ marginTop: '1rem' }}>
              <table>
                <thead>
                  <tr><th>Tool</th><th>What it covers</th><th>Best for</th></tr>
                </thead>
                <tbody>
                  <tr><td><Link href="/">Gratuity / end of service calculator</Link></td><td>Statutory gratuity only, based on basic salary, service years, and the two-year cap</td><td>Quick gratuity estimate</td></tr>
                  <tr className="hl"><td>Final settlement calculator (this page)</td><td>Gratuity + unpaid salary + leave encashment + notice pay + additions − deductions</td><td>Full payout on resignation, termination, or contract end</td></tr>
                  <tr><td><Link href="/mohre-annual-leave-calculator">MOHRE annual leave calculator</Link></td><td>Annual leave entitlement, balance, and cash value of unused days</td><td>Checking your leave balance and leave salary</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">Common questions about final settlement</div>
          <div className="sec-sd">Short answers to the most common UAE final settlement and end-of-service settlement questions.</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {settlementFaqs.map((f, i) => <FaqItem key={i} q={f[0]} a={f[1]} />)}
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FinalSettlementCalculator from '@/components/FinalSettlementCalculator'
import FaqItem from '@/components/FaqItem'
import SchemaMarkup from '@/components/SchemaMarkup'
import GratuityYearsTable from '@/components/GratuityYearsTable'
import SourcesBox from '@/components/SourcesBox'
import { pairAlternates } from '@/lib/i18nRoutes'
import { baseOpenGraph, breadcrumbSchema, faqSchema } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const PAGE_URL = 'https://www.uaegratuitycheck.com/final-settlement-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Final Settlement Calculator 2026 (Full & Final)',
  description: 'Calculate your UAE full and final settlement: gratuity, leave salary, notice pay, unpaid salary, air ticket and deductions, itemised, with the 14-day rule.',
  alternates: pairAlternates('/final-settlement-calculator-uae', 'en'),
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Final Settlement Calculator 2026 (Full & Final)',
    description: 'Calculate gratuity, leave encashment, unpaid salary, notice pay, additions, deductions, and total UAE final settlement.',
    url: PAGE_URL,
    type: 'website',
  },
}

const settlementFaqs: { q: string; a: string }[] = [
  { q: 'How do I calculate my final settlement in the UAE?', a: 'Add together your end-of-service gratuity, unpaid salary up to your last working day, the cash value of unused annual leave, and any notice pay owed to you. Then subtract legally permitted deductions such as loans, salary advances, or notice you did not serve. The total is your final settlement.' },
  { q: 'What is included in a UAE final settlement?', a: 'A UAE final settlement can include end-of-service gratuity, unpaid salary, unused annual leave, notice pay, a contractual ticket allowance, reimbursements, and deductions permitted by law, such as loans or advances.' },
  { q: 'Is final settlement the same as gratuity?', a: 'No. Gratuity is one part of the final settlement. The final settlement is the wider calculation that also includes salary, leave encashment, notice pay, additions, and deductions.' },
  { q: 'What is the difference between an end of service calculator and a final settlement calculator?', a: 'An end of service calculator (gratuity calculator) only estimates the statutory gratuity under Article 51. A final settlement calculator adds unpaid salary, unused annual leave, notice pay, ticket allowance, reimbursements and deductions to show your full payout.' },
  { q: 'How long does an employer have to pay the final settlement in the UAE?', a: 'Article 53 of Federal Decree-Law No. 33 of 2021 requires the employer to pay wages and all other dues, including gratuity, within 14 days of the employment contract ending.' },
  { q: 'What if I resign before completing my notice period?', a: 'Your employer may deduct an amount equal to the notice days you did not serve. Gratuity itself is not reduced because you resigned; the notice deduction is a separate line item.' },
  { q: 'Does unused annual leave get added to the final settlement?', a: 'Yes. Unused annual leave is paid in cash when the contract ends. It is usually calculated on basic salary ÷ 30 per day. The calculator lets you choose basic or gross if your contract says otherwise.' },
  { q: 'What happens if my final settlement is delayed beyond 14 days?', a: 'You can file a complaint with MOHRE. MOHRE can decide claims up to AED 50,000 (Article 54), and labour claims must be brought within two years. See the guide on how to file a MOHRE complaint.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    breadcrumbSchema([{ name: 'Calculators', path: '/tools' }, { name: 'UAE Final Settlement Calculator', path: '/final-settlement-calculator-uae' }]),
    {
      '@type': 'SoftwareApplication',
      '@id': `${PAGE_URL}#calculator`,
      name: 'UAE Final Settlement Calculator 2026',
      url: PAGE_URL,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
      description: 'Free UAE final settlement calculator for gratuity, unpaid salary, unused annual leave, notice pay, additions, deductions, and total payout.',
      featureList: [
        'End-of-service gratuity calculation (Article 51)',
        'Unpaid salary calculation',
        'Unused annual leave encashment',
        'Notice pay and notice deduction',
        'Air ticket and reimbursement additions',
        'Loan and advance deductions',
        'Article 53 payment due date',
      ],
    },
    faqSchema(settlementFaqs, `${PAGE_URL}#faq`, true),
  ],
}

export default function FinalSettlementCalculatorPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Final Settlement · UAE Labour Law · Updated 2026</div>
          <h1>UAE Final Settlement Calculator 2026<br /><em>Full &amp; final settlement: gratuity, leave salary and notice pay</em></h1>
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

        <div className="answer-box">
          <p><strong>UAE final settlement = gratuity + unpaid salary + unused leave + notice pay + other dues − lawful deductions.</strong> Gratuity is 21 days of basic salary per year for the first 5 years and 30 days per year after that (Article 51). Your employer must pay the full amount within 14 days of the contract ending (Article 53). Enter your figures below to see every line item.</p>
        </div>

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
            <div className="badge bg-teal">STEP BY STEP</div>
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
            <p>Searches for an &quot;end of service calculator&quot;, &quot;settlement calculation&quot;, and &quot;leave salary calculation&quot; often mean slightly different things. Use this table to find the right tool.</p>
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
          <div className="card">
            <div className="badge bg-blue">GRATUITY PART OF YOUR SETTLEMENT</div>
            <h2>Gratuity by years of service (quick reference)</h2>
            <p>The gratuity line in your settlement depends only on your basic salary and service. For every year from 1 to 30, see the <Link href="/gratuity-by-years-of-service">full gratuity by years of service table</Link>.</p>
            <GratuityYearsTable years={[1, 2, 3, 5, 7, 10, 15, 20]} salaries={[5000, 10000, 15000]} caption="Daily wage = basic ÷ 30; capped at two years' wage (Article 51(6))." />
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">BEFORE YOU SIGN</div>
            <h2>Check these before signing a full and final settlement</h2>
            <ul>
              <li><strong>Basic salary used:</strong> gratuity must use your last basic salary, not an older figure (Article 51(5)).</li>
              <li><strong>Service dates:</strong> only days of unpaid absence may be excluded from service (Article 51(4)). Check that no other days were removed.</li>
              <li><strong>Deductions:</strong> only amounts you owe under the law or a court judgment can come out of gratuity (Article 51(7)). Ask for documents for every deduction.</li>
              <li><strong>Leave balance:</strong> compare with the <Link href="/mohre-annual-leave-calculator">MOHRE annual leave calculator</Link> and the <Link href="/blog/uae-leave-salary-calculation-guide">leave salary calculation guide</Link>.</li>
              <li><strong>Ticket home:</strong> check whether a <Link href="/blog/uae-repatriation-ticket-final-settlement">repatriation ticket</Link> is owed.</li>
              <li><strong>Payment date:</strong> within 14 days of the contract ending (Article 53). If it is late, read the <Link href="/blog/uae-gratuity-payment-delay-rules">payment delay rules</Link>.</li>
            </ul>
            <p>Not sure what each line on your employer&apos;s sheet means? Read <Link href="/blog/how-to-read-uae-final-settlement-sheet">how to read a UAE final settlement sheet</Link>. If your visa is being cancelled at the same time, see <Link href="/blog/uae-gratuity-visa-cancellation">visa cancellation and final settlement</Link>.</p>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">Common questions about final settlement</div>
          <div className="sec-sd">Short answers to the most common UAE final settlement and end-of-service settlement questions.</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {settlementFaqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
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

        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />
        <Footer />
      </main>
    </>
  )
}

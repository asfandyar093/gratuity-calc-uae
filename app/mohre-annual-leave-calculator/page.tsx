import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnnualLeaveCalculator from '@/components/AnnualLeaveCalculator'

export const metadata: Metadata = {
  title: 'MOHRE Annual Leave Calculator UAE 2026 | Free Leave Balance and Cash Value Tool',
  description:
    'Free MOHRE annual leave calculator for UAE employees 2026. Calculate your leave entitlement (30 days/year), unused leave balance, and cash payout on resignation or termination. Based on Federal Decree-Law No. 33 of 2021.',
  keywords: [
    'MOHRE annual leave calculator',
    'UAE annual leave calculator',
    'annual leave calculator UAE 2026',
    'UAE leave entitlement calculator',
    'how many annual leave days UAE',
    'unused annual leave UAE payout',
    'حاسبة الإجازة السنوية',
    'الإجازة السنوية في الإمارات',
  ],
  alternates: { canonical: 'https://www.uaegratuitycheck.com/mohre-annual-leave-calculator' },
  openGraph: {
    title: 'MOHRE Annual Leave Calculator UAE 2026 | Leave Balance and Cash Payout',
    description: 'Calculate your UAE annual leave entitlement, unused days, and cash value on leaving. Based on MOHRE rules under Federal Decree-Law No. 33 of 2021.',
    url: 'https://www.uaegratuitycheck.com/mohre-annual-leave-calculator',
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'MOHRE Annual Leave Calculator', item: 'https://www.uaegratuitycheck.com/mohre-annual-leave-calculator' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'MOHRE Annual Leave Calculator UAE 2026',
      url: 'https://www.uaegratuitycheck.com/mohre-annual-leave-calculator',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description: 'Free MOHRE annual leave calculator for UAE employees. Calculates leave entitlement, balance, and cash payout under Federal Decree-Law No. 33 of 2021.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
      featureList: [
        'Annual leave entitlement calculation (30 days/year)',
        'Prorated leave for less than 1 year of service',
        'Unused leave cash value on termination or resignation',
        'Date-based or manual service period input',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many annual leave days are UAE employees entitled to?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under Federal Decree-Law No. 33 of 2021 (Article 29), UAE private sector employees are entitled to 30 calendar days of paid annual leave per year after completing one year of service. For service between 6 months and 1 year, employees earn 2 days per completed month.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does MOHRE require employers to pay unused annual leave?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Under UAE Labour Law, any unused annual leave must be paid out in full as a cash equivalent when an employee leaves — whether by resignation, termination, or contract expiry. The cash value is calculated based on the basic daily wage (basic salary ÷ 30) multiplied by unused days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can my employer deny my annual leave?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Employers can schedule when leave is taken but cannot deny the entitlement itself. If your employer continuously postpones your leave, the unused days accumulate and must be paid out on your last day. You can file a complaint with MOHRE at mohre.gov.ae if your leave rights are violated.',
          },
        },
      ],
    },
  ],
}

export default function AnnualLeaveCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">MOHRE Approved · Federal Decree-Law No. 33/2021 · Updated 2026</div>
          <h1>MOHRE Annual Leave Calculator UAE 2026<br /><em>Leave Balance, Entitlement &amp; Cash Payout</em></h1>
          <p className="hero-desc">
            Calculate your UAE annual leave entitlement, remaining balance, and the cash value of unused leave on resignation or termination. Based on MOHRE rules.
          </p>
          <div className="ar-hero">حاسبة الإجازة السنوية — وزارة الموارد البشرية والتوطين</div>
          <div className="ar-sub">احسب أيام الإجازة المستحقة والرصيد المتبقي مجاناً</div>
          <div className="pills">
            <span className="pill">✓ 30 days/year after 1st year (Article 29)</span>
            <span className="pill">✓ 2 days/month for first 6–12 months</span>
            <span className="pill">✓ Unused leave paid out on leaving</span>
            <span className="pill">✓ No data stored · 100% private</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <span>MOHRE Annual Leave Calculator</span>
        </nav>

        <div style={{ marginTop: '1.5rem' }}>
          <AnnualLeaveCalculator />
        </div>

        {/* LEAVE RULES */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">UAE ANNUAL LEAVE RULES — قواعد الإجازة السنوية</div>
            <h2>How MOHRE calculates annual leave in UAE — Article 29</h2>
            <p>
              Under <strong>Article 29 of Federal Decree-Law No. 33 of 2021</strong>, every private sector employee in the UAE is entitled to paid annual leave as follows:
            </p>
            <div className="tbl-wrap" style={{ marginTop: '1rem' }}>
              <table>
                <thead>
                  <tr><th>Length of Service</th><th>Annual Leave Entitlement</th><th>Calculation</th></tr>
                </thead>
                <tbody>
                  <tr><td>Less than 6 months</td><td>None</td><td>No leave entitlement in first 6 months</td></tr>
                  <tr><td>6 months to 1 year</td><td>2 days per completed month</td><td>Prorated monthly accrual</td></tr>
                  <tr className="hl"><td>1 year or more</td><td><strong>30 calendar days per year</strong></td><td>Full entitlement — standard UAE allowance</td></tr>
                  <tr><td>On termination / resignation</td><td>Unused days paid as cash</td><td>Daily wage × unused leave days</td></tr>
                </tbody>
              </table>
            </div>
            <div className="info-box" style={{ marginTop: '1rem' }}>
              <strong>Calendar days, not working days:</strong> UAE annual leave is counted in <strong>calendar days</strong>, including weekends and public holidays that fall within the leave period. This differs from some countries that count only business days.
            </div>
          </div>
        </div>

        {/* UNUSED LEAVE ON EXIT */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">UNUSED LEAVE ON LEAVING — الإجازة غير المستخدمة عند ترك العمل</div>
            <h2>What happens to unused annual leave when you leave?</h2>
            <p>
              When an employee leaves — whether by resignation, termination, or contract expiry — any accrued but unused annual leave <strong>must be paid in cash</strong> by the employer. This is a legal obligation under Article 29, not a discretionary benefit.
            </p>
            <div className="formula-box">
              <strong>Cash value of unused leave:</strong>
              <div className="formula-line">Daily wage = Monthly basic salary ÷ 30</div>
              <div className="formula-line">Leave payout = Daily wage × Unused leave days</div>
            </div>
            <div className="example-box" style={{ marginTop: '1rem' }}>
              <div className="ex-title">EXAMPLE — 3 YEARS SERVICE, 15 UNUSED DAYS</div>
              <div className="ex-line">Basic salary: AED 9,000/month</div>
              <div className="ex-line">Daily wage: AED 9,000 ÷ 30 = AED 300</div>
              <div className="ex-line">Total entitlement: 30 days × 3 years = 90 days</div>
              <div className="ex-line">Leave taken: 75 days</div>
              <div className="ex-line">Unused: 90 − 75 = 15 days</div>
              <div className="ex-total">Leave payout: 15 × AED 300 = AED 4,500</div>
            </div>
            <div className="warn-box" style={{ marginTop: '1rem' }}>
              <strong>Important:</strong> Leave payout and gratuity are two separate entitlements. Your employer must pay both — you cannot waive either under UAE law. If your employer combines or deducts one from the other, file a complaint with MOHRE.
            </div>
          </div>
        </div>

        {/* LEAVE VS GRATUITY */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">ANNUAL LEAVE vs GRATUITY — الإجازة مقابل مكافأة نهاية الخدمة</div>
            <h2>Annual leave payout vs end-of-service gratuity — key differences</h2>
            <div className="tbl-wrap">
              <table>
                <thead>
                  <tr><th>Factor</th><th>Annual Leave Payout</th><th>End-of-Service Gratuity</th></tr>
                </thead>
                <tbody>
                  <tr><td>Legal basis</td><td>Article 29, FDL No. 33/2021</td><td>Article 51, FDL No. 33/2021</td></tr>
                  <tr><td>Minimum service</td><td>6 months (prorated)</td><td>1 full year</td></tr>
                  <tr><td>Salary basis</td><td>Basic salary ÷ 30 per day</td><td>Basic salary ÷ 30 per day</td></tr>
                  <tr><td>Formula</td><td>30 days/year (1 yr+)</td><td>21 days/yr (first 5), 30 days/yr (after 5)</td></tr>
                  <tr className="hl"><td>Cap</td><td>No statutory cap</td><td>24 months basic salary</td></tr>
                  <tr><td>Paid on resignation?</td><td>Yes — unused days always paid</td><td>Yes — full entitlement after 1 year</td></tr>
                  <tr><td>Affects by DIFC/DEWS?</td><td>No — leave rules same in DIFC</td><td>Yes — DEWS replaces gratuity in DIFC</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="sec">
          <div className="sec-hd">Frequently asked questions — MOHRE annual leave</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {[
              {
                q: 'Can my employer force me to take annual leave?',
                a: 'Yes — under UAE law, the employer may schedule when annual leave is taken, taking into account operational requirements. However, the employer cannot deny the entitlement altogether. If your leave is continuously postponed, unused days accumulate and must be paid on exit.',
              },
              {
                q: 'Is annual leave in UAE 30 working days or calendar days?',
                a: 'Calendar days. UAE annual leave entitlement is 30 calendar days — this includes weekends and any public holidays that fall within the leave period. This is different from some countries that grant 30 working days.',
              },
              {
                q: 'Do I get annual leave if I resign before completing 1 year?',
                a: 'Yes, provided you have completed at least 6 months of service. For service between 6 and 12 months, you accrue 2 days of leave per completed month. These days must be paid out as cash on your last day.',
              },
              {
                q: 'Can my employer deduct annual leave from my gratuity?',
                a: 'No. Annual leave payout and end-of-service gratuity are separate legal entitlements. An employer cannot offset unused leave against gratuity, or vice versa. Both must be paid in full.',
              },
              {
                q: 'How do I file a complaint if my employer doesn\'t pay my leave balance?',
                a: 'File a complaint at mohre.gov.ae or call the MOHRE helpline at 800-60. You can also submit via the MOHRE smart app. Employers who fail to pay leave balances face fines, trade license issues, and a ban on hiring new employees.',
              },
              {
                q: 'كم يوم إجازة سنوية مستحقة لي في الإمارات؟',
                a: '30 يوماً في السنة بعد إتمام سنة خدمة كاملة، و2 يوم عن كل شهر مكتمل إذا كانت مدة خدمتك بين 6 أشهر وسنة كاملة. وذلك وفق المادة 29 من المرسوم بقانون اتحادي رقم 33 لسنة 2021.',
              },
            ].map((faq, i) => (
              <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--gray-200)', padding: '1.2rem 0' }}>
                <div style={{ fontWeight: 800, fontSize: '17px', marginBottom: '0.4rem' }}>{faq.q}</div>
                <div style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8 }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center', marginTop: '1rem' }}>
          <h2 style={{ color: '#fff' }}>Also calculate your end-of-service gratuity</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            Annual leave payout and gratuity are both owed on your last day. Calculate your full EOSB now.
          </p>
          <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
            Open UAE Gratuity Calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}

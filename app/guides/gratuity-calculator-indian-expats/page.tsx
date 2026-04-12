import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator for Indian Expats 2026 — INR, NRI Tax & Remittance Guide',
  description:
    'Complete UAE gratuity guide for Indian expats 2026. Calculate your EOSB in INR, understand NRI tax rules, compare UAE vs Indian gratuity, and get remittance tips for sending money to India.',
  keywords: [
    'UAE gratuity calculator Indian expats',
    'UAE gratuity in INR',
    'NRI gratuity UAE',
    'UAE end of service benefit India',
    'gratuity calculator Dubai Indians',
    'UAE EOSB NRI tax India',
    'how to send gratuity to India from UAE',
    'UAE gratuity vs Indian PF',
  ],
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.uaegratuitycheck.com/guides' },
        { '@type': 'ListItem', position: 3, name: 'UAE Gratuity for Indian Expats', item: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats' },
      ],
    },
    {
      '@type': 'Article',
      headline: 'UAE Gratuity Calculator for Indian Expats 2026 — INR, NRI Tax & Remittance Guide',
      description: 'Complete UAE gratuity guide for Indian expats: INR conversion, NRI tax rules, UAE vs Indian PF comparison, and remittance tips.',
      url: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats',
      datePublished: '2026-02-01',
      dateModified: '2026-02-01',
      author: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com' },
      publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com', logo: 'https://www.uaegratuitycheck.com/logo.png' },
      mainEntityOfPage: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats',
    },
  ],
}

const AED_TO_INR = 23.2

function fmtAED(n: number) {
  return 'AED ' + n.toLocaleString('en-AE', { maximumFractionDigits: 0 })
}

function fmtINR(n: number) {
  return '₹' + Math.round(n * AED_TO_INR).toLocaleString('en-IN')
}

export default function IndianExpatsPage() {
  const examples = [
    { role: 'IT Engineer', salary: 15000, years: 5 },
    { role: 'Nurse / Healthcare', salary: 6000, years: 7 },
    { role: 'Accountant', salary: 8000, years: 4 },
    { role: 'Construction Supervisor', salary: 5000, years: 3 },
    { role: 'Teacher', salary: 7000, years: 6 },
  ]

  function calcGratuity(salary: number, years: number) {
    const daily = salary / 30
    let g = years <= 5 ? daily * 21 * years : daily * 21 * 5 + daily * 30 * (years - 5)
    return Math.min(g, salary * 24)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="page-wrapper">
        {/* BREADCRUMB + HERO */}
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> ›{' '}
            <Link href="/guides">Guides</Link> › UAE Gratuity for Indian Expats
          </div>
          <h1>UAE Gratuity Calculator for Indian Expats 2026</h1>
          <p>
            Everything Indians working in Dubai, Abu Dhabi, and Sharjah need to know about UAE end-of-service gratuity — including INR conversion, NRI tax rules, and how to send the money home.
          </p>
        </div>

        {/* QUICK ANSWER */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>Quick answer for Indian expats</h2>
          <ul style={{ color: 'var(--green-dark)', paddingLeft: '1.25rem', display: 'grid', gap: '6px' }}>
            <li>UAE gratuity is <strong>completely tax-free in the UAE</strong> — no income tax in UAE</li>
            <li>As an NRI, your UAE gratuity is <strong>not taxable in India</strong> either</li>
            <li>You can transfer the full amount to India via NRE account — <strong>fully repatriable</strong></li>
            <li>UAE gratuity is based on <strong>basic salary only</strong> — not your total package</li>
            <li>You need <strong>minimum 1 year</strong> of service to qualify</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
              Calculate your UAE gratuity in AED and INR →
            </Link>
          </p>
        </div>

        {/* HOW MANY INDIANS */}
        <div className="card">
          <div className="badge bg-teal">INDIAN EXPATS IN UAE — الهنود في الإمارات</div>
          <h2>Indians in UAE — the largest expat community</h2>
          <p>
            With over 3.5 million Indian nationals, Indians form the largest expatriate workforce in the UAE. They work across every sector — from IT and finance in Dubai to healthcare across Abu Dhabi, from teaching in Sharjah to engineering on major construction projects.
          </p>
          <p>
            For most Indian families, UAE end-of-service gratuity (مكافأة نهاية الخدمة) is one of the most significant lump-sum payments they will ever receive — often representing years of careful service and financial discipline. Yet surveys show that many Indian workers in the UAE underestimate their gratuity, calculate it on their gross salary instead of basic salary, or are unaware that resignation no longer reduces their entitlement under the updated 2022 labour law.
          </p>
          <p>
            This guide is specifically written for Indian nationals working in the UAE private sector, covering the unique financial, tax, and remittance considerations that apply when sending your gratuity back to India.
          </p>
        </div>

        {/* UAE GRATUITY FORMULA */}
        <div className="card">
          <div className="badge bg-teal">UAE GRATUITY FORMULA 2026</div>
          <h2>How UAE gratuity is calculated — formula for Indians</h2>
          <p>
            UAE gratuity is governed by{' '}
            <a href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              Federal Decree-Law No. 33 of 2021
            </a>{' '}
            and supervised by{' '}
            <a href="https://www.mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              MOHRE
            </a>
            . The formula is straightforward:
          </p>

          <div className="formula-box">
            <strong>Step 1 — Daily wage = Monthly basic salary ÷ 30</strong>
            <div className="formula-line">Step 2 — Years 1 to 5: Daily wage × 21 × years of service</div>
            <div className="formula-line">Step 3 — Years beyond 5: Daily wage × 30 × (years − 5)</div>
            <div className="formula-line">Step 4 — Cap: Cannot exceed 24 × monthly basic salary</div>
          </div>

          <div className="warn-box">
            <strong>Most common mistake by Indian workers:</strong> Calculating gratuity on total salary (basic + HRA + transport + food allowance). UAE law uses <strong>basic salary only</strong>. If your pay slip shows AED 12,000 total but basic is AED 7,000, your gratuity is based on AED 7,000.
          </div>
        </div>

        {/* INR CONVERSION TABLE */}
        <div className="card">
          <div className="badge bg-teal">GRATUITY IN INR — मकाफ़ात का रुपयों में मूल्य</div>
          <h2>UAE gratuity converted to Indian Rupees — real examples by sector</h2>
          <p>
            Based on approximate exchange rate of <strong>1 AED ≈ ₹{AED_TO_INR}</strong>. Use{' '}
            <a href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=AED&To=INR" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              XE.com
            </a>{' '}
            for live rates before transferring.
          </p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Job role</th>
                  <th>Basic salary</th>
                  <th>Years</th>
                  <th>Gratuity (AED)</th>
                  <th>Gratuity (INR ₹)</th>
                </tr>
              </thead>
              <tbody>
                {examples.map(e => {
                  const g = calcGratuity(e.salary, e.years)
                  return (
                    <tr key={e.role}>
                      <td>{e.role}</td>
                      <td>{fmtAED(e.salary)}</td>
                      <td>{e.years} yrs</td>
                      <td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>{fmtAED(g)}</td>
                      <td style={{ color: 'var(--red-dark)', fontWeight: 700 }}>{fmtINR(g)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '14px', color: 'var(--text-muted)' }}>
            Want your exact figure?{' '}
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 700 }}>
              Use our free calculator →
            </Link>
          </p>
        </div>

        {/* UAE VS INDIA GRATUITY */}
        <div className="card">
          <div className="badge bg-teal">UAE VS INDIA — दो देशों में ग्रेच्युटी का अंतर</div>
          <h2>UAE gratuity vs Indian gratuity — key differences</h2>
          <p>
            Many Indian professionals coming to the UAE are already familiar with gratuity under the{' '}
            <a href="https://labour.gov.in/payment-gratuity-act-1972" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              Indian Payment of Gratuity Act, 1972
            </a>
            . The UAE system works very differently:
          </p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Factor</th><th>UAE</th><th>India</th></tr>
              </thead>
              <tbody>
                <tr><td>Governing law</td><td>Federal Decree-Law No. 33/2021</td><td>Payment of Gratuity Act 1972</td></tr>
                <tr><td>Minimum service</td><td>1 year</td><td>5 years (private sector)</td></tr>
                <tr><td>Salary basis</td><td>Basic salary only</td><td>Basic + DA (Dearness Allowance)</td></tr>
                <tr><td>Formula</td><td>21 days/yr (first 5 yrs), 30 days/yr thereafter</td><td>15/26 × last salary × years</td></tr>
                <tr className="hl"><td>Tax in UAE</td><td>Zero — no income tax</td><td>N/A</td></tr>
                <tr><td>Tax in India (as NRI)</td><td>Not taxable in India</td><td>Exempt up to ₹20 lakh</td></tr>
                <tr><td>Maximum cap</td><td>2 years basic salary</td><td>₹20 lakh</td></tr>
                <tr><td>Resignation impact</td><td>No reduction (2022 law)</td><td>Not applicable (5 yr minimum)</td></tr>
                <tr><td>Monthly PF contribution</td><td>No PF system</td><td>12% of basic + DA</td></tr>
              </tbody>
            </table>
          </div>

          <div className="info-box" style={{ marginTop: '1rem' }}>
            <strong>Important for returning Indians:</strong> UAE gratuity replaces the PF + gratuity system you had in India. Since UAE has no monthly provident fund contribution, your end-of-service gratuity is often your largest financial benefit from your UAE employment — plan accordingly.
          </div>
        </div>

        {/* NRI TAX SECTION */}
        <div className="card">
          <div className="badge bg-teal">NRI TAX RULES — भारतीय NRI कर नियम</div>
          <h2>Is UAE gratuity taxable in India for NRIs?</h2>
          <p>
            This is the most frequently asked question by Indian expats — and the answer is good news.
          </p>

          <h3>Short answer: No tax on UAE gratuity for NRIs</h3>
          <p>
            As an NRI (Non-Resident Indian), your UAE gratuity is <strong>not taxable in India</strong> because:
          </p>
          <ul>
            <li>The UAE has no income tax — gratuity is received tax-free at source</li>
            <li>As an NRI, income earned outside India is not subject to Indian income tax</li>
            <li>The{' '}
              <a href="https://www.incometaxindia.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
                India-UAE Double Taxation Avoidance Agreement (DTAA)
              </a>{' '}
              further protects you from double taxation</li>
          </ul>

          <h3 style={{ marginTop: '1.25rem' }}>When could it become taxable?</h3>
          <p>
            Your UAE gratuity could become taxable in India only if you have <strong>already returned to India and become a resident</strong> before receiving the payment. If you receive gratuity while still an NRI (living abroad for more than 182 days in a financial year), it remains non-taxable in India.
          </p>

          <div className="warn-box">
            <strong>If you are returning to India permanently:</strong> Try to receive your UAE gratuity <em>before</em> you complete 182 days of residence in India in a financial year. Once you become a tax resident of India, foreign income rules change. Consult a CA or tax advisor for your specific situation.
          </div>

          <h3 style={{ marginTop: '1.25rem' }}>RNOR status — a useful window</h3>
          <p>
            Indians returning after long UAE stints may qualify for <strong>RNOR (Resident but Not Ordinarily Resident)</strong> status for 1–3 years after returning. During RNOR, foreign income remains generally non-taxable in India. If you worked in UAE for 8+ continuous years, you likely qualify. See{' '}
            <a href="https://www.incometaxindia.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              Income Tax India
            </a>{' '}
            or consult a chartered accountant for your specific situation.
          </p>
        </div>

        {/* REMITTANCE SECTION */}
        <div className="card">
          <div className="badge bg-teal">SENDING MONEY TO INDIA — भारत पैसे भेजना</div>
          <h2>How to send UAE gratuity to India — best options 2026</h2>
          <p>
            Once you receive your gratuity, you have several options to transfer it to India. The right choice depends on the amount, timing, and your bank accounts.
          </p>

          <h3>1. NRE Account — best for most Indians</h3>
          <p>
            Transfer your gratuity directly to your{' '}
            <strong>NRE (Non-Resident External) account</strong> in India. Benefits:
          </p>
          <ul>
            <li>Fully repatriable — can be sent back to UAE if needed</li>
            <li>Interest earned is <strong>tax-free in India</strong></li>
            <li>No restrictions on how much you can deposit</li>
            <li>Current NRE FD rates: 6–7.5% per annum</li>
          </ul>

          <h3 style={{ marginTop: '1.25rem' }}>2. Best transfer services — avoid bank rates</h3>
          <p>Banks offer poor exchange rates. Use these services for better AED to INR conversion:</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Service</th><th>Typical fee</th><th>Speed</th><th>Best for</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://wise.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Wise (formerly TransferWise)</a></td>
                  <td>0.5–1%</td>
                  <td>1–2 days</td>
                  <td>Any amount</td>
                </tr>
                <tr>
                  <td><a href="https://www.remitly.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Remitly</a></td>
                  <td>Low fixed fee</td>
                  <td>Minutes–1 day</td>
                  <td>Smaller amounts</td>
                </tr>
                <tr>
                  <td>UAE Exchange / Al Ansari</td>
                  <td>Varies</td>
                  <td>Same day</td>
                  <td>Cash transfers</td>
                </tr>
                <tr>
                  <td>Bank wire (ADCB, Emirates NBD)</td>
                  <td>AED 25–50 flat</td>
                  <td>2–3 days</td>
                  <td>Large amounts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="info-box" style={{ marginTop: '1rem' }}>
            <strong>Pro tip for large gratuities:</strong> If your gratuity exceeds AED 50,000 (approx ₹11.5 lakh), split transfers into 2–3 parts over a few weeks to take advantage of exchange rate fluctuations. A 0.5% rate difference on AED 100,000 saves you AED 500.
          </div>

          <h3 style={{ marginTop: '1.25rem' }}>3. TCS on remittances — know the rule</h3>
          <p>
            India charges 5% TCS (Tax Collected at Source) on remittances exceeding <strong>₹7 lakh per year</strong> under the Liberalised Remittance Scheme (LRS). However, this is <strong>not an extra tax</strong> — it is collected upfront and can be claimed as credit when filing your Indian income tax return. For NRIs sending gratuity via NRE accounts, this typically does not apply as NRE transfers are treated differently. Consult your bank for specifics.
          </p>
        </div>

        {/* SECTOR EXAMPLES */}
        <div className="card">
          <div className="badge bg-teal">SECTOR-SPECIFIC GUIDE — क्षेत्र-विशिष्ट मार्गदर्शिका</div>
          <h2>UAE gratuity by job sector — Indian worker examples</h2>
          <p>Different sectors in UAE have distinct salary structures, contract types, and gratuity implications for Indian workers.</p>

          <h3 style={{ marginTop: '1rem' }}>IT and Technology</h3>
          <p>
            Indian IT professionals are the highest-earning Indian expat group in UAE. Typical basic salaries range from AED 10,000–25,000 per month. Many IT contracts include significant allowances (housing, transport) which are excluded from gratuity calculation. An IT engineer earning AED 15,000 basic after 6 years would receive approximately <strong>AED 73,500 (₹17 lakh)</strong> in gratuity.
          </p>
          <div className="example-box">
            <div className="ex-title">IT ENGINEER EXAMPLE</div>
            <div className="ex-line">Basic salary: AED 15,000/month</div>
            <div className="ex-line">Years of service: 6 years</div>
            <div className="ex-line">Years 1–5: AED 500 × 21 × 5 = AED 52,500</div>
            <div className="ex-line">Year 6: AED 500 × 30 × 1 = AED 15,000</div>
            <div className="ex-total">Total: AED 67,500 ≈ ₹{Math.round(67500 * AED_TO_INR).toLocaleString('en-IN')}</div>
          </div>

          <h3 style={{ marginTop: '1.25rem' }}>Healthcare and Nursing</h3>
          <p>
            Indian nurses and healthcare workers form the backbone of UAE's hospital sector. Many work under DHA (Dubai Health Authority) or MOH licensed roles with basic salaries between AED 5,000–8,000. Healthcare contracts are often 2-year limited contracts, renewable. A nurse with AED 6,000 basic after 7 years would receive approximately <strong>AED 42,000 (₹9.7 lakh)</strong> — a life-changing amount for many Indian families.
          </p>
          <div className="example-box">
            <div className="ex-title">NURSE / HEALTHCARE EXAMPLE</div>
            <div className="ex-line">Basic salary: AED 6,000/month</div>
            <div className="ex-line">Years of service: 7 years</div>
            <div className="ex-line">Years 1–5: AED 200 × 21 × 5 = AED 21,000</div>
            <div className="ex-line">Years 6–7: AED 200 × 30 × 2 = AED 12,000</div>
            <div className="ex-total">Total: AED 33,000 ≈ ₹{Math.round(33000 * AED_TO_INR).toLocaleString('en-IN')}</div>
          </div>

          <h3 style={{ marginTop: '1.25rem' }}>Construction and Engineering</h3>
          <p>
            Indian engineers and supervisors in construction often have basic salaries between AED 4,000–10,000 with separate site allowances. Site allowances are excluded from gratuity. Many construction contracts are project-based limited contracts — gratuity is paid at project completion or termination.
          </p>

          <h3 style={{ marginTop: '1.25rem' }}>Teaching and Education</h3>
          <p>
            Indian teachers at UAE schools and universities typically earn AED 5,000–9,000 in basic salary. School contracts are usually 2-year limited contracts with annual renewal. Housing is often provided as a non-monetary benefit and does not count toward gratuity.
          </p>

          <h3 style={{ marginTop: '1.25rem' }}>Finance and Accounting</h3>
          <p>
            Indian chartered accountants and finance professionals are in high demand across Dubai and Abu Dhabi. Basic salaries range AED 8,000–20,000. DIFC-based employees should note they are covered by the{' '}
            <a href="https://www.difc.ae/business/operating/dews/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              DEWS scheme
            </a>{' '}
            instead of standard UAE gratuity.
          </p>
        </div>

        {/* WHAT TO DO WITH GRATUITY */}
        <div className="card">
          <div className="badge bg-teal">INVESTMENT IDEAS — निवेश के विकल्प</div>
          <h2>What should Indian expats do with UAE gratuity?</h2>
          <p>Your UAE gratuity is a tax-free lump sum — arguably the best financial opportunity of your UAE career. Here are the most popular options for Indian NRIs:</p>

          <div className="two-col">
            <div className="mini-card" style={{ borderTop: '4px solid var(--green)' }}>
              <h3 style={{ color: 'var(--green-dark)' }}>Conservative options</h3>
              <ul>
                <li><strong>NRE Fixed Deposit</strong> — 6–7.5% p.a., tax-free interest in India, fully repatriable</li>
                <li><strong>GIFT City USD FD</strong> — keep in USD, avoid rupee depreciation risk</li>
                <li><strong>PPF (if already open)</strong> — top up your existing PPF account</li>
              </ul>
            </div>
            <div className="mini-card" style={{ borderTop: '4px solid var(--red)' }}>
              <h3>Growth options</h3>
              <ul>
                <li><strong>Indian mutual funds via NRE</strong> — equity funds for 10+ year horizon</li>
                <li><strong>Property down payment</strong> — many Indians use gratuity for home purchase</li>
                <li><strong>Children&apos;s education fund</strong> — start a dedicated corpus</li>
              </ul>
            </div>
          </div>

          <div className="info-box" style={{ marginTop: '1rem' }}>
            Financial advisors recommend splitting: 50–60% in safe NRE FDs, 30–40% in mutual funds, and the remainder for immediate needs or property goals. Never invest your entire gratuity in a single asset.
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="card">
          <div className="badge bg-teal">FAQs — भारतीय प्रवासियों के सामान्य प्रश्न</div>
          <h2>Frequently asked questions — Indian expats in UAE</h2>

          <h3 style={{ marginTop: '1rem' }}>Do I get UAE gratuity even if I resigned?</h3>
          <p>Yes. Under the 2022 UAE Labour Law, resignation no longer reduces your gratuity. You get the same amount whether you resigned or were terminated, as long as you have completed one year of continuous service. See our <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>resignation vs termination guide</Link> for full details.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer said my gratuity is reduced because I resigned — is this correct?</h3>
          <p>Under the current law, no. Some employers may still apply the old pre-2022 rules — this is incorrect. File a complaint with <a href="https://www.mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>MOHRE</a> if your employer reduces your gratuity for resignation.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I use my UAE gratuity to buy property in India?</h3>
          <p>Yes. As an NRI you can buy residential and commercial property in India. Transfer via your NRE account for easy repatriation later. Capital gains tax applies when you sell — LTCG at 12.5% for properties held over 2 years (without indexation from 2024 budget).</p>

          <h3 style={{ marginTop: '1.25rem' }}>I work in DIFC Dubai — do I get gratuity?</h3>
          <p>DIFC employees are covered by the <a href="https://www.difc.ae/business/operating/dews/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>DEWS (DIFC Employee Workplace Savings) scheme</a> — a different system from standard UAE gratuity. Check your DIFC employment contract for specific terms.</p>

          <h3 style={{ marginTop: '1.25rem' }}>How does UAE gratuity differ from Indian PF (Provident Fund)?</h3>
          <p>UAE has no monthly PF system. Instead, your entire service benefit comes as a lump sum at the end. Indian PF gives you monthly contributions (12% of basic) throughout employment plus gratuity after 5 years. UAE compensates with higher tax-free salaries and a generous end-of-service payment.</p>

          <h3 style={{ marginTop: '1.25rem' }}>मेरी UAE ग्रेच्युटी भारत में कर योग्य है क्या?</h3>
          <p>नहीं। NRI के रूप में, UAE में अर्जित ग्रेच्युटी भारत में कर-योग्य नहीं है। UAE में कोई आयकर नहीं है, और NRI के लिए विदेश में अर्जित आय पर भारत में कर नहीं लगता। अपने CA से अपनी विशेष परिस्थितियों के बारे में सलाह लें।</p>
        </div>

        {/* INTERNAL LINKS */}
        <div className="card" style={{ background: 'var(--gray-50)' }}>
          <h2 style={{ fontSize: '17px' }}>Related guides on UAE Gratuity Check</h2>
          <div style={{ display: 'grid', gap: '10px', marginTop: '0.75rem' }}>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → Free UAE Gratuity Calculator — calculate your exact EOSB in AED and INR
            </Link>
            <Link href="/how-it-works" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → How UAE Gratuity is Calculated — complete formula guide
            </Link>
            <Link href="/uae-labor-law" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Labor Law Reference — Articles 51–54 explained
            </Link>
            <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → Resignation vs Termination — does it affect your gratuity?
            </Link>
            <Link href="/blog/uae-labour-law-2026-gratuity-changes" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Labour Law 2026 Changes — what changed and what stayed the same
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>Calculate your UAE gratuity in AED and INR</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
            Enter your basic salary and years of service. See your exact gratuity amount in both AED and convert to INR instantly.
          </p>
          <Link
            href="/"
            style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}
          >
            Use the free calculator →
          </Link>
        </div>

        <Footer />
      </main>
    </>
  )
}
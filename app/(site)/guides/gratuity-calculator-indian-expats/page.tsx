import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { baseOpenGraph } from '@/lib/seo'
import RelatedGuides from '@/components/RelatedGuides'
import AuthorBox from '@/components/AuthorBox'

export const metadata: Metadata = {
  title: 'UAE Gratuity for Indian Expats 2026: Calculator & India Tax',
  description:
    'Calculate your UAE gratuity in AED and INR, see whether it is taxed in India as an NRI, and how to send it home.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats',
  },
  openGraph: { ...baseOpenGraph, type: 'article', url: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats' },
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
      headline: 'UAE Gratuity Calculator for Indian Expats 2026 | INR, NRI Tax and Remittance Guide',
      description: 'Complete UAE gratuity guide for Indian expats: INR conversion, NRI tax rules, UAE vs Indian PF comparison, and remittance tips.',
      url: 'https://www.uaegratuitycheck.com/guides/gratuity-calculator-indian-expats',
      datePublished: '2026-02-01',
      dateModified: '2026-10-15',
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
    const g = years <= 5 ? daily * 21 * years : daily * 21 * 5 + daily * 30 * (years - 5)
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
            Everything Indians working in Dubai, Abu Dhabi, and Sharjah need to know about UAE end-of-service gratuity, including INR conversion, NRI tax rules, and how to send the money home.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '0.5rem' }}><time dateTime="2026-10-15">Last updated: October 2026</time> · 12 min read</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
        </div>

        {/* QUICK ANSWER */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <h2 style={{ color: 'var(--green-dark)' }}>Quick answer for Indian expats</h2>
          <ul style={{ color: 'var(--green-dark)', paddingLeft: '1.25rem', display: 'grid', gap: '6px' }}>
            <li>The UAE has <strong>no personal income tax</strong>, and your employer can deduct only what the law allows</li>
            <li>Whether India taxes it depends on your <strong>residential status</strong>: a non resident is generally taxed only on Indian income</li>
            <li>Send it through a <strong>bank or licensed provider</strong> so you hold a record, and ask your bank which account type suits you</li>
            <li>UAE gratuity is based on <strong>basic salary only</strong>, not your total package</li>
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
          <div className="badge bg-teal">INDIAN EXPATS IN UAE</div>
          <h2>Gratuity for Indian nationals working in the UAE</h2>
          <p>
            Indians form one of the largest expatriate workforces in the UAE, working in every sector from IT and finance to healthcare, teaching and engineering.
          </p>
          <p>
            For most Indian families, UAE end of service gratuity (مكافأة نهاية الخدمة) is one of the larger lump sums they will receive. A common mistake is to work it out on gross salary instead of basic salary, or to assume that resigning reduces it. Under the current law it does not.
          </p>
          <p>
            This guide is written for Indian nationals working in the UAE private sector. It covers the calculation in AED and rupees, the Indian tax position at a general level, and what to check before you send your gratuity back to India.
          </p>
        </div>

        {/* UAE GRATUITY FORMULA */}
        <div className="card">
          <div className="badge bg-teal">UAE GRATUITY FORMULA 2026</div>
          <h2>How UAE gratuity is calculated, formula for Indians</h2>
          <p>
            UAE gratuity is governed by{' '}
            <a href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              Federal Decree-Law No. 33 of 2021
            </a>{' '}
            and supervised by{' '}
            <a href="https://www.mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>
              MOHRE
            </a>
            . The formula is straightforward:
          </p>

          <div className="formula-box">
            <strong>Step 1, Daily wage = Monthly basic salary ÷ 30</strong>
            <div className="formula-line">Step 2, Years 1 to 5: Daily wage × 21 × years of service</div>
            <div className="formula-line">Step 3, Years beyond 5: Daily wage × 30 × (years − 5)</div>
            <div className="formula-line">Step 4, Cap: Cannot exceed 24 × monthly basic salary</div>
          </div>

          <div className="warn-box">
            <strong>Most common mistake by Indian workers:</strong> Calculating gratuity on total salary (basic + HRA + transport + food allowance). UAE law uses <strong>basic salary only</strong>. If your pay slip shows AED 12,000 total but basic is AED 7,000, your gratuity is based on AED 7,000.
          </div>
        </div>

        {/* INR CONVERSION TABLE */}
        <div className="card">
          <div className="badge bg-teal">GRATUITY IN INR, मकाफ़ात का रुपयों में मूल्य</div>
          <h2>UAE gratuity converted to Indian Rupees, real examples by sector</h2>
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
          <div className="badge bg-teal">UAE VS INDIA, दो देशों में ग्रेच्युटी का अंतर</div>
          <h2>UAE gratuity vs Indian gratuity, key differences</h2>
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
                <tr className="hl"><td>Tax in UAE</td><td>No personal income tax</td><td>Not applicable</td></tr>
                <tr><td>Tax in India</td><td>Depends on your residential status (see below)</td><td>Rules under Indian income tax law for gratuity from an Indian employer</td></tr>
                <tr><td>Maximum cap</td><td>2 years basic salary</td><td>₹20 lakh under the Act</td></tr>
                <tr><td>Resignation impact</td><td>No reduction (2022 law)</td><td>Not applicable (5 yr minimum)</td></tr>
                <tr><td>Monthly PF contribution</td><td>No PF system</td><td>12% of basic + DA</td></tr>
              </tbody>
            </table>
          </div>

          <div className="info-box" style={{ marginTop: '1rem' }}>
            <strong>Important for returning Indians:</strong> The UAE has no monthly provident fund system for private sector expats, so your end of service gratuity is often the main lump sum from your UAE employment. Plan for it, and check whether your employer offers any savings scheme on top.
          </div>
        </div>

        {/* NRI TAX SECTION */}
        <div className="card">
          <div className="badge bg-teal">NRI TAX RULES</div>
          <h2>Is UAE gratuity taxable in India for NRIs?</h2>
          <p>
            This is the question Indian expats ask most. The answer depends on your residential status for the Indian tax year in which you receive the money. The Income-tax Act, 2025 applies from 1 April 2026 and replaces the 1961 Act, so check old articles and videos against the current text.
          </p>

          <h3>How residential status is decided</h3>
          <ul>
            <li>Under section 6 of the Income-tax Act, 2025, an individual is resident in India in a tax year if present for 182 days or more in that year.</li>
            <li>The second test (60 days in the year plus 365 days over the previous four years) does not apply to an Indian citizen who leaves India for employment outside India.</li>
            <li>An Indian citizen can also be treated as resident, but not ordinarily resident, if Indian source income exceeds ₹15 lakh in the year and the person is not liable to tax in any other country because of residence or similar criteria. This can apply to someone based in the UAE with significant income in India.</li>
          </ul>

          <h3 style={{ marginTop: '1.25rem' }}>What that means for your gratuity</h3>
          <ul>
            <li><strong>Non resident:</strong> A non resident is generally taxed in India only on income received in India or accruing there. Gratuity for UAE service, paid in the UAE, is generally not taxed in India on that basis.</li>
            <li><strong>Resident but not ordinarily resident (RNOR):</strong> Income from outside India is generally not taxed unless it comes from a business controlled in India or a profession set up in India. Section 6(13) lists who qualifies, including people who were non resident in nine of the previous ten tax years.</li>
            <li><strong>Resident and ordinarily resident:</strong> World income can be taxed in India. Foreign gratuity is then treated under the normal rules, and the India UAE tax treaty may matter. Take advice before you receive the payment.</li>
          </ul>

          <div className="warn-box">
            <strong>If you are returning to India for good:</strong> the order of dates matters. Your days in India in the tax year, and the date you actually receive the gratuity, can change your status. Ask a chartered accountant to confirm before you move back or before you receive a large payment.
          </div>

          <p style={{ marginTop: '1rem' }}>
            Read the law yourself: <a href="https://indiacode.ecourtsindia.com/income-tax-act-2025/section/6/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Income-tax Act, 2025, section 6 (Residence in India)</a>. For the Indian tax department&apos;s guidance, see <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>incometax.gov.in</a>. Our <Link href="/blog/uae-gratuity-tax-india-nri-guide" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>India tax guide for NRIs</Link> adds a document checklist.
          </p>
        </div>

        {/* REMITTANCE SECTION */}
        <div className="card">
          <div className="badge bg-teal">SENDING MONEY TO INDIA</div>
          <h2>How to send UAE gratuity to India</h2>
          <p>
            Once you receive your gratuity, the right route depends on the amount, your Indian bank accounts and your residential status. What stays the same is that a bank or a licensed provider leaves a record, and that record is useful if anyone asks where the money came from.
          </p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Option</th><th>What to check</th></tr>
              </thead>
              <tbody>
                <tr><td>Bank transfer to your Indian account</td><td>Fees at both ends, the exchange rate applied, and which account type your bank recommends for your status</td></tr>
                <tr><td>Licensed exchange house</td><td>The rate quoted on the day, the fee, and the amount in rupees that will arrive</td></tr>
                <tr><td>Online transfer service</td><td>The final amount in rupees shown before you confirm, and whether large transfers carry extra charges</td></tr>
              </tbody>
            </table>
          </div>
          <h3 style={{ marginTop: '1.25rem' }}>NRE, NRO and your status</h3>
          <p>
            Indian banks offer NRE and NRO accounts for non residents, and the tax treatment of the interest and the rules for sending money abroad differ between them. If you move back and become resident, accounts have to be redesignated. Ask your bank which account fits your situation, and check the details on the Reserve Bank of India website.
          </p>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            <strong>For a large gratuity:</strong> ask two or three providers for the exact rupee amount for the same AED amount on the same day, in writing, and pick the best. The rate difference usually matters more than the flat fee. You can check the indicative rate on the <Link href="/currency-converter-uae" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>currency converter</Link>.
          </div>
        </div>

        <div className="card">
          <div className="badge bg-amber">GETTING HELP</div>
          <h2>If your gratuity is not paid: who to contact</h2>
          <p>
            Write to your employer first, then submit a request to MOHRE (call 80084, or use the app or website). Indian nationals can also ask the <a href="https://www.indembassyuae.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Embassy of India in Abu Dhabi</a> or the <a href="https://www.cgidubai.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Consulate General of India in Dubai</a> for help, including through the MADAD grievance portal listed on their websites. Our <Link href="/blog/how-to-file-mohre-complaint" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>MOHRE complaint guide</Link> explains the steps and documents.
          </p>
        </div>

        {/* SECTOR EXAMPLES */}
        <div className="card">
          <div className="badge bg-teal">SECTOR-SPECIFIC GUIDE, क्षेत्र-विशिष्ट मार्गदर्शिका</div>
          <h2>UAE gratuity by job sector, Indian worker examples</h2>
          <p>Different sectors in UAE have distinct salary structures, contract types, and gratuity implications for Indian workers.</p>

          <h3 style={{ marginTop: '1rem' }}>IT and Technology</h3>
          <p>
            Many IT contracts split pay into basic salary and allowances such as housing and transport. Only basic salary counts for gratuity, so check the split in your offer letter. An engineer on AED 15,000 basic salary with 6 years of service would receive:
          </p>
          <div className="example-box">
            <div className="ex-title">IT ENGINEER EXAMPLE</div>
            <div className="ex-line">Basic salary: AED 15,000/month</div>
            <div className="ex-line">Years of service: 6 years</div>
            <div className="ex-line">Years 1 to 5: AED 500 × 21 × 5 = AED 52,500</div>
            <div className="ex-line">Year 6: AED 500 × 30 × 1 = AED 15,000</div>
            <div className="ex-total">Total: AED 67,500 ≈ ₹{Math.round(67500 * AED_TO_INR).toLocaleString('en-IN')}</div>
          </div>

          <h3 style={{ marginTop: '1.25rem' }}>Healthcare and Nursing</h3>
          <p>
            Nurses and other healthcare staff are often on limited term contracts that are renewed. Gratuity is based on total continuous service, so a renewal should not restart the count. A nurse on AED 6,000 basic salary with 7 years of service would receive:
          </p>
          <div className="example-box">
            <div className="ex-title">NURSE / HEALTHCARE EXAMPLE</div>
            <div className="ex-line">Basic salary: AED 6,000/month</div>
            <div className="ex-line">Years of service: 7 years</div>
            <div className="ex-line">Years 1 to 5: AED 200 × 21 × 5 = AED 21,000</div>
            <div className="ex-line">Years 6 to 7: AED 200 × 30 × 2 = AED 12,000</div>
            <div className="ex-total">Total: AED 33,000 ≈ ₹{Math.round(33000 * AED_TO_INR).toLocaleString('en-IN')}</div>
          </div>
          <p style={{ marginTop: '0.75rem' }}>See the <Link href="/gratuity-calculator/healthcare" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>healthcare gratuity page</Link> for shift pay and licensing points.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Construction and Engineering</h3>
          <p>
            Site allowances and camp accommodation are not part of basic salary, so they do not count for gratuity. If you are paid daily or weekly, see how the <Link href="/gratuity-calculator/construction" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>construction page</Link> treats the wage.
          </p>

          <h3 style={{ marginTop: '1.25rem' }}>Teaching and Education</h3>
          <p>
            School contracts often include housing, flights or fee discounts. These benefits are generally not part of basic salary for gratuity. See the <Link href="/gratuity-calculator/education" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>education page</Link> for details.
          </p>

          <h3 style={{ marginTop: '1.25rem' }}>Finance and Accounting</h3>
          <p>
            Staff of firms based in DIFC are covered by the DIFC Employee Workplace Savings plan (DEWS) rather than the mainland gratuity formula. Read <Link href="/blog/difc-dews-gratuity-explained" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>what DEWS means</Link>.
          </p>
        </div>

        {/* WHAT TO DO WITH GRATUITY */}
        <div className="card">
          <div className="badge bg-teal">BEFORE YOU TRANSFER</div>
          <h2>What to settle before you move your gratuity</h2>
          <p>A lump sum is easier to plan around if you decide a few things first.</p>
          <ul>
            <li><strong>Get the settlement in writing.</strong> The final settlement statement should show the gratuity, leave pay and every deduction. Keep it with your transfer receipts.</li>
            <li><strong>Confirm your Indian tax status</strong> for the year you will receive the money, as explained above.</li>
            <li><strong>Choose the account type with your bank.</strong> NRE, NRO and resident accounts have different rules.</li>
            <li><strong>Plan the next step.</strong> Whether the money goes to a home loan, education costs or savings, a licensed adviser can fit it to your goals. The <Link href="/savings-goal-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>savings goal calculator</Link> helps you set a target.</li>
          </ul>
        </div>

        {/* FAQ SECTION */}
        <div className="card">
          <div className="badge bg-teal">FAQs, भारतीय प्रवासियों के सामान्य प्रश्न</div>
          <h2>Frequently asked questions, Indian expats in UAE</h2>

          <h3 style={{ marginTop: '1rem' }}>Do I get UAE gratuity even if I resigned?</h3>
          <p>Yes. Under the 2022 UAE Labour Law, resignation no longer reduces your gratuity. You get the same amount whether you resigned or were terminated, as long as you have completed one year of continuous service. See our <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>resignation vs termination guide</Link> for full details.</p>

          <h3 style={{ marginTop: '1.25rem' }}>My employer said my gratuity is reduced because I resigned, is this correct?</h3>
          <p>Under the current law, no. Some employers may still apply the old pre-2022 rules, this is incorrect. File a complaint with <a href="https://www.mohre.gov.ae" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>MOHRE</a> if your employer reduces your gratuity for resignation.</p>

          <h3 style={{ marginTop: '1.25rem' }}>Can I use my UAE gratuity to buy property in India?</h3>
          <p>Yes. As an NRI you can buy residential and commercial property in India. Ask your bank which account to use for the purchase. Tax on any later sale depends on how long you hold the property, and foreign exchange rules apply, so check both with your bank and a chartered accountant before you commit.</p>

          <h3 style={{ marginTop: '1.25rem' }}>I work in DIFC Dubai, do I get gratuity?</h3>
          <p>DIFC employers pay into the DIFC Employee Workplace Savings plan (DEWS), which works differently from the mainland gratuity formula. Read <Link href="/blog/difc-dews-gratuity-explained" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>what DEWS means</Link>, and check your contract for the terms.</p>

          <h3 style={{ marginTop: '1.25rem' }}>How does UAE gratuity differ from Indian PF (Provident Fund)?</h3>
          <p>UAE has no monthly PF system. Instead, your entire service benefit comes as a lump sum at the end. Indian PF gives you monthly contributions (12% of basic) throughout employment plus gratuity after 5 years. The UAE system pays the end of service benefit as a lump sum instead.</p>

          <h3 style={{ marginTop: '1.25rem' }}>मेरी UAE ग्रेच्युटी भारत में कर योग्य है क्या?</h3>
          <p>यह भारत में आपके कर निवासी दर्जे पर निर्भर करता है। अगर आप गैर निवासी (NRI) हैं, तो विदेश में अर्जित और वहीं प्राप्त ग्रेच्युटी पर सामान्यतः भारत में कर नहीं लगता। अगर आप भारत लौटकर निवासी बन चुके हैं, तो नियम अलग हो सकते हैं। निर्णय से पहले अपने CA से पुष्टि करें।</p>
        </div>

        {/* INTERNAL LINKS */}
        <div className="card" style={{ background: 'var(--gray-50)' }}>
          <h2 style={{ fontSize: '17px' }}>Related guides on UAE Gratuity Check</h2>
          <div style={{ display: 'grid', gap: '10px', marginTop: '0.75rem' }}>
            <Link href="/" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → Free UAE Gratuity Calculator, calculate your exact EOSB in AED and INR
            </Link>
            <Link href="/how-to-calculate-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → How UAE Gratuity is Calculated, complete formula guide
            </Link>
            <Link href="/uae-labor-law" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Labor Law Reference, Articles 51 to 54 explained
            </Link>
            <Link href="/blog/uae-gratuity-resignation-vs-termination" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → Resignation vs Termination, does it affect your gratuity?
            </Link>
            <Link href="/uae-labor-law#what-changed" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Labour Law 2026 Changes, what changed and what stayed the same
            </Link>
            <Link href="/currency-converter-uae" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → AED Currency Converter, check today&apos;s indicative INR rate
            </Link>
            <Link href="/uae-income-tax-calculator" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Income Tax Calculator, see your full take-home pay vs Indian tax slabs
            </Link>
            <Link href="/cost-of-living-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
              → UAE Cost of Living Calculator, real monthly budgets for Dubai, Abu Dhabi &amp; Sharjah
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

        <AuthorBox />
        <RelatedGuides path="/guides/gratuity-calculator-indian-expats" />

        <Footer />
      </main>
    </>
  )
}

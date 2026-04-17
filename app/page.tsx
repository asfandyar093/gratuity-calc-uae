import type { Metadata } from 'next'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator 2026 — Free End-of-Service EOSB Calculator',
  description: 'Calculate your UAE end-of-service gratuity (EOSB) instantly. Based on Federal Decree-Law No. 33 of 2021, MOHRE approved formula. Covers unlimited and limited contracts. Free tool.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com',
    languages: {
      'en-AE': 'https://www.uaegratuitycheck.com',
      'ar-AE': 'https://www.uaegratuitycheck.com',
      'x-default': 'https://www.uaegratuitycheck.com',
    },
  },
}

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.uaegratuitycheck.com/#calculator',
      'name': 'UAE Gratuity Calculator 2026',
      'url': 'https://www.uaegratuitycheck.com',
      'applicationCategory': 'FinanceApplication',
      'operatingSystem': 'Web',
      'description': 'Free UAE end-of-service gratuity calculator based on Federal Decree-Law No. 33 of 2021. MOHRE approved formula. Covers unlimited and limited contracts.',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'AED' },
      'featureList': [
        'UAE gratuity calculation based on Article 51',
        'Date-based or manual service period input',
        'Unpaid leave deduction',
        'Year-by-year accrual projection chart',
        'Limited and unlimited contract support',
        'Two-year cap enforcement',
        'Payment due date calculation',
      ],
      'isPartOf': { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Who is eligible for gratuity in the UAE?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Any private sector employee in the UAE who completes at least one year of continuous service is entitled to end-of-service gratuity — regardless of nationality or reason for leaving. Exceptions include dismissal for gross misconduct (Article 120), Emirati nationals on pension schemes, DIFC employees under DEWS, and domestic workers under separate regulation.' },
        },
        {
          '@type': 'Question',
          'name': 'Does housing or transport allowance count toward gratuity in UAE?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Under Federal Decree-Law No. 33 of 2021, gratuity is calculated on basic salary only. Housing, transport, food allowances, overtime, bonuses, and commissions are all excluded. Only the fixed base salary stated in your employment contract counts.' },
        },
        {
          '@type': 'Question',
          'name': 'Is there a maximum cap on UAE gratuity?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. The total gratuity cannot exceed two years of basic salary (24 monthly payments). This is a hard statutory limit under UAE law. Our calculator automatically checks and applies this cap in the results.' },
        },
        {
          '@type': 'Question',
          'name': 'What happens to gratuity if I resign in UAE?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Under the 2022 UAE Labour Law, resignation does not reduce your gratuity entitlement. If you have completed one or more years of continuous service, you receive the full calculated amount — whether you resigned or were terminated.' },
        },
        {
          '@type': 'Question',
          'name': 'When must the employer pay gratuity in UAE?',
          'acceptedAnswer': { '@type': 'Answer', 'text': "The employer must pay gratuity within 14 days of the employee's last working day. Late payment can result in MOHRE complaints, administrative fines, trade license suspension, and restrictions on hiring new employees." },
        },
        {
          '@type': 'Question',
          'name': 'Are unpaid leave days excluded from the UAE gratuity service period?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Days of absence without pay are not counted toward the total service period for gratuity calculation. Use the Advanced Options in this calculator to enter your unpaid leave days — they will be automatically deducted from the net service period.' },
        },
        {
          '@type': 'Question',
          'name': 'Is UAE gratuity taxable?',
          'acceptedAnswer': { '@type': 'Answer', 'text': "The UAE does not impose personal income tax, so your gratuity is received tax-free in the UAE. However, if you're a tax resident of another country such as India, UK, or US, you may need to declare it under your home country's tax laws." },
        },
        {
          '@type': 'Question',
          'name': 'Does gratuity apply in DIFC and UAE free zones?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Most UAE free zones (JAFZA, DMCC, DIC) follow standard UAE labour law for gratuity. The Dubai International Financial Centre (DIFC) is an exception — covered by the DEWS scheme instead of standard gratuity. ADGM also has its own regulations.' },
        },
        {
          '@type': 'Question',
          'name': 'Can my employer deduct money from my UAE gratuity?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, within legal limits. Employers may deduct outstanding salary advances, approved loans, or compensation for documented damages. Arbitrary deductions are prohibited and can be challenged through MOHRE.' },
        },
        {
          '@type': 'Question',
          'name': 'How is UAE gratuity calculated?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'UAE gratuity is calculated as: Step 1 — Daily wage = monthly basic salary ÷ 30. Step 2 — For the first 5 years: daily wage × 21 × years of service. Step 3 — For service beyond 5 years: add daily wage × 30 × (years − 5). Step 4 — Cap at 24 months basic salary. Only basic salary is used; all allowances are excluded.' },
        },
      ],
    },
  ],
}

const faqs = [
  { q: 'Who is eligible for gratuity in the UAE?', a: 'Any private sector employee in the UAE who completes at least one year of continuous service is entitled to end-of-service gratuity — regardless of nationality or reason for leaving. Exceptions include dismissal for gross misconduct (Article 120), Emirati nationals on pension schemes, DIFC employees under DEWS, and domestic workers under separate regulation.' },
  { q: 'Does housing or transport allowance count toward gratuity?', a: 'No. Under Federal Decree-Law No. 33 of 2021, gratuity is calculated on basic salary only. Housing, transport, food allowances, overtime, bonuses, and commissions are all excluded. Only the fixed base salary stated in your employment contract counts.' },
  { q: 'Is there a maximum cap on gratuity?', a: 'Yes. The total gratuity cannot exceed two years of basic salary (24 monthly payments). This is a hard statutory limit under UAE law. Our calculator automatically checks and applies this cap in the results.' },
  { q: 'What happens to gratuity if I resign?', a: 'Under the 2022 UAE Labour Law, resignation does not reduce your gratuity entitlement. If you have completed one or more years of continuous service, you receive the full calculated amount — whether you resigned or were terminated.' },
  { q: 'When must the employer pay the gratuity?', a: "The employer must pay gratuity within 14 days of the employee's last working day. Late payment can result in MOHRE complaints, administrative fines, trade license suspension, and restrictions on hiring new employees." },
  { q: 'Are unpaid leave days excluded from the service period?', a: 'Yes. Days of absence without pay are not counted toward the total service period. Use the Advanced Options in this calculator to enter your unpaid leave days — they will be automatically deducted from the net service period.' },
  { q: 'Is UAE gratuity taxable?', a: "The UAE does not impose personal income tax, so your gratuity is received tax-free in the UAE. However, if you're a tax resident of another country such as India, UK, or US, you may need to declare it under your home country's tax laws." },
  { q: 'هل تشمل المكافأة بدل السكن والنقل؟', a: 'لا، تُحتسب مكافأة نهاية الخدمة على أساس الراتب الأساسي فقط. — No, gratuity is based on basic salary only, not total package or any allowances.' },
  { q: 'Does gratuity apply in DIFC and free zones?', a: 'Most UAE free zones (JAFZA, DMCC, DIC) follow standard UAE labour law. The Dubai International Financial Centre (DIFC) is an exception — covered by the DEWS scheme. ADGM also has its own regulations.' },
  { q: 'Can my employer deduct money from my gratuity?', a: 'Yes, within legal limits. Employers may deduct outstanding salary advances, approved loans, or compensation for documented damages. Arbitrary deductions are prohibited and can be challenged through MOHRE.' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      {/* ── HERO — full width, outside page-wrapper ── */}
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">Free · MOHRE Approved Formula · Updated 2026</div>
          <h1>UAE Gratuity Calculator 2026<br /><em>Free EOSB End-of-Service Calculator</em></h1>
          <p className="hero-desc">
            Instantly calculate your end-of-service benefit (EOSB) under Federal Decree-Law No. 33 of 2021.
            Trusted by employees and HR teams across Dubai, Abu Dhabi, and Sharjah.
          </p>
          <div className="ar-hero">حاسبة مكافأة نهاية الخدمة في الإمارات 2026</div>
          <div className="ar-sub">احسب مكافأة نهاية خدمتك مجاناً — دبي · أبوظبي · الشارقة · عجمان</div>
          <div className="pills">
            <span className="pill">✓ Article 51 — Federal Decree-Law No. 33/2021</span>
            <span className="pill">✓ Unlimited &amp; limited contracts</span>
            <span className="pill">✓ Date-based or manual input</span>
            <span className="pill">✓ No data stored · 100% private</span>
          </div>
        </div>
      </div>

      {/* ── REST OF PAGE inside page-wrapper ── */}
      <main className="page-wrapper">

        {/* CALCULATOR + ACCRUAL CHART */}
        <Calculator />

        {/* STATS */}
        <div className="stats">
          <div className="stat"><div className="stat-n">3.5M+</div><div className="stat-l">Expat workers in UAE private sector</div></div>
          <div className="stat"><div className="stat-n">21 days</div><div className="stat-l">Per year for first 5 years of service</div></div>
          <div className="stat"><div className="stat-n">30 days</div><div className="stat-l">Per year for service beyond 5 years</div></div>
          <div className="stat"><div className="stat-n">14 days</div><div className="stat-l">Employer must pay after last working day</div></div>
        </div>

        {/* WHAT IS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">WHAT IS AN EOSB CALCULATOR</div>
            <h2>What is a UAE End-of-Service Gratuity Calculator?</h2>
            <p>A UAE End-of-Service Gratuity Calculator (also known as an EOSB Calculator or Gratuity Settlement Calculator) is a financial planning tool that calculates the severance pay owed to a private sector employee upon termination, resignation, or contract expiry — based on Federal Decree-Law No. 33 of 2021 and MOHRE guidelines.</p>
            <p>This calculator accepts your monthly basic salary, contract type, reason for leaving, and length of service. It applies the MOHRE-approved formula to produce an instant, transparent breakdown including daily wage, entitled days, the applicable gratuity cap, and the employer&apos;s legal payment deadline.</p>
            <p>Whether you are an employee planning your exit or an HR team preparing a final settlement, this free tool ensures full compliance with UAE labour law — eliminating the risk of manual calculation errors.</p>
          </div>
        </div>

        {/* HOW TO USE */}
        <div className="sec">
          <div className="sec-hd">How to use this calculator</div>
          <div className="sec-sd">Five simple steps to calculate your UAE end-of-service gratuity accurately and instantly</div>
          <div className="steps-3">
            <div className="step-card"><div className="step-n">STEP 01</div><h4>Enter your basic salary</h4><p>Use only your basic monthly salary as stated in your contract. Do not include housing, transport, or any allowances — excluded under UAE law.</p></div>
            <div className="step-card"><div className="step-n">STEP 02</div><h4>Choose input method</h4><p>Enter your joining and last working dates for automatic calculation, or manually enter total years in decimal format (e.g. 3.5 = 3 years 6 months).</p></div>
            <div className="step-card"><div className="step-n">STEP 03</div><h4>Select contract type</h4><p>Choose unlimited or limited. All new UAE contracts since February 2022 are issued as fixed-term limited contracts by law.</p></div>
          </div>
          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="step-card"><div className="step-n">STEP 04</div><h4>Choose reason for leaving</h4><p>Select termination, contract expiry, or resignation. Under the 2022 law, the reason no longer reduces your gratuity entitlement.</p></div>
            <div className="step-card"><div className="step-n">STEP 05</div><h4>Review your results</h4><p>See your full gratuity breakdown including daily wage, entitled days, payment due date, and a year-by-year accrual projection chart.</p></div>
          </div>
        </div>

        {/* ELIGIBILITY */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">ELIGIBILITY — من يستحق المكافأة</div>
            <h2>Who qualifies for UAE end-of-service gratuity?</h2>
            <p>Under Federal Decree-Law No. 33 of 2021, every employee in the UAE private sector who completes at least one full year of continuous service is entitled to end-of-service gratuity — regardless of nationality, emirate, or reason for leaving.</p>
            <div className="two-col" style={{ marginTop: '0.75rem' }}>
              <div className="mini-card">
                <div className="badge bg-teal" style={{ marginBottom: '0.5rem' }}>✓ Eligible employees</div>
                <ul>
                  <li>Expatriate workers in the UAE private sector</li>
                  <li>Employees with 1+ year of continuous service</li>
                  <li>Employees across all 7 UAE emirates</li>
                  <li>Part-time employees (prorated calculation)</li>
                  <li>All reasons for leaving (termination, resignation, expiry)</li>
                </ul>
              </div>
              <div className="mini-card">
                <div className="badge bg-gray" style={{ marginBottom: '0.5rem' }}>✗ Exceptions &amp; exclusions</div>
                <ul>
                  <li>Employees with less than 1 year of service</li>
                  <li>Dismissed for gross misconduct (Article 120)</li>
                  <li>Emirati nationals (covered by pension scheme)</li>
                  <li>DIFC employees (covered by DEWS scheme)</li>
                  <li>Domestic workers (governed by separate law)</li>
                  <li>Freelancers without employment contracts</li>
                </ul>
              </div>
            </div>
            <div className="info-box" style={{ marginTop: '0.75rem' }}>
              Key 2022 change: Resignation no longer reduces gratuity entitlement. All eligible employees receive full gratuity regardless of how they left.
            </div>
          </div>
        </div>

        {/* SALARY COMPONENTS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">SALARY COMPONENTS — مكونات الراتب</div>
            <h2>What salary is included in the gratuity calculation?</h2>
            <p>One of the most common misconceptions is that gratuity is based on total package. Under UAE law, <strong>only the basic salary</strong> is used. If your total monthly pay is AED 15,000 but your basic salary is AED 9,000, your gratuity is calculated on AED 9,000 only.</p>
            <div className="comp-grid">
              <div className="comp-card comp-included">
                <div className="comp-title">✓ INCLUDED IN CALCULATION</div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Basic monthly salary (الراتب الأساسي)</span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span>Fixed base pay as per employment contract</span></div>
              </div>
              <div className="comp-card comp-excluded">
                <div className="comp-title">✗ EXCLUDED FROM CALCULATION</div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Housing allowance (بدل السكن)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Transport allowance (بدل النقل)</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Food or utility allowances</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Overtime pay</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Commissions and bonuses</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span>Performance incentives</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="sec">
          <div className="sec-hd">Why use this gratuity calculator?</div>
          <div className="sec-sd">Trusted by employees and HR teams across Dubai, Abu Dhabi, and Sharjah</div>
          <div className="benefit-grid">
            <div className="benefit-item"><h4>✓ Regulatory compliance</h4><p>Applies the exact MOHRE-approved formula under Article 51 of Federal Decree-Law No. 33 of 2021.</p></div>
            <div className="benefit-item"><h4>📊 Transparent breakdown</h4><p>Shows daily wage, entitled days, cap status, and payment deadline — so you know exactly how every dirham is calculated.</p></div>
            <div className="benefit-item"><h4>📅 Date-based accuracy</h4><p>Enter your joining date and last working day for automatic, precise service period calculation including partial years.</p></div>
            <div className="benefit-item"><h4>⏳ Unpaid leave deduction</h4><p>Automatically deducts unpaid leave days from the service period as required by UAE labour law.</p></div>
            <div className="benefit-item"><h4>📈 Accrual projection chart</h4><p>Visual chart shows how your gratuity grows year by year — helping you plan your exit timing and finances.</p></div>
            <div className="benefit-item"><h4>🔒 100% private</h4><p>All calculations run in your browser. No salary data is stored, transmitted, or shared with anyone.</p></div>
          </div>
        </div>

        {/* UAE vs KSA */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">GCC COMPARISON — UAE VS KSA</div>
            <h2>UAE vs Saudi Arabia gratuity — key differences</h2>
            <p>Employers and employees operating across the GCC must understand the distinct gratuity frameworks in the UAE and Saudi Arabia. The two countries differ significantly in wage basis, resignation rules, and calculation methods.</p>
            <div className="tbl-wrap">
              <table>
                <thead><tr><th>Factor</th><th>UAE 🇦🇪</th><th>Saudi Arabia 🇸🇦</th></tr></thead>
                <tbody>
                  <tr><td>Governing law</td><td>Federal Decree-Law No. 33 of 2021</td><td>Saudi Labour Law — Articles 84, 85, 87</td></tr>
                  <tr><td>Wage basis</td><td>Basic salary only</td><td>Actual wage (basic + fixed allowances)</td></tr>
                  <tr><td>First 5 years</td><td>21 days&apos; wage per year</td><td>Half month&apos;s wage per year</td></tr>
                  <tr><td>After 5 years</td><td>30 days&apos; wage per year</td><td>One full month&apos;s wage per year</td></tr>
                  <tr><td>Minimum service</td><td>1 year (all scenarios)</td><td>1 year (termination) / 2 years (resignation)</td></tr>
                  <tr className="hl"><td>Resignation reductions</td><td>None — full gratuity under 2022 law</td><td>1/3 (2–5 yrs), 2/3 (5–10 yrs), full (10+ yrs)</td></tr>
                  <tr><td>Gratuity cap</td><td>2 years&apos; basic salary (24 months)</td><td>No statutory cap</td></tr>
                  <tr className="hl"><td>Payment deadline</td><td>Within 14 days of last working day</td><td>Upon final settlement</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ARABIC BLOCK */}
        <div className="ar-block">
          <h2>معلومات مكافأة نهاية الخدمة في الإمارات العربية المتحدة 2026</h2>
          <p>مكافأة نهاية الخدمة هي حق قانوني لكل موظف في القطاع الخاص بدولة الإمارات العربية المتحدة، وذلك وفقاً للمرسوم بقانون الاتحادي رقم 33 لسنة 2021. تُحتسب المكافأة على أساس الراتب الأساسي فقط، ولا تشمل البدلات أو العمولات أو المكافآت.</p>
          <p>يستحق الموظف الذي أتم سنة واحدة أو أكثر مكافأة بواقع 21 يوماً عن كل سنة خلال السنوات الخمس الأولى، و30 يوماً بعد ذلك. لا تتجاوز المكافأة الإجمالية ما يعادل راتب سنتين. يجب على صاحب العمل دفع المكافأة خلال 14 يوماً من آخر يوم عمل.</p>
          <p>يشمل هذا الحق جميع الموظفين في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين. يمكن تقديم شكوى عبر mohre.gov.ae في حالة التأخر في السداد.</p>
          <p>طريقة حساب مكافأة نهاية الخدمة: اليومية = الراتب الأساسي ÷ 30، ثم اليومية × 21 يوماً عن كل سنة في السنوات الخمس الأولى، و× 30 يوماً بعد ذلك. كيف يتم احتساب مكافأة نهاية الخدمة في القطاع الخاص؟ — يُطبَّق نفس المعدل على جميع موظفي القطاع الخاص المسجلين في وزارة الموارد البشرية والتوطين. كيفية حساب نهاية الخدمة في القطاع الخاص تخضع للمرسوم بقانون اتحادي رقم 33 لسنة 2021.</p>
          <div className="ar-tags">
            <span className="ar-tag">حساب مكافأة نهاية الخدمة</span>
            <span className="ar-tag">نهاية الخدمة الامارات</span>
            <span className="ar-tag">حاسبة مكافأة نهاية الخدمة mohre</span>
            <span className="ar-tag">حساب مكافأة نهاية الخدمة في القطاع الخاص</span>
            <span className="ar-tag">طريقة حساب مكافأة نهاية الخدمة</span>
            <span className="ar-tag">كيف يتم احتساب مكافأة نهاية الخدمة</span>
            <span className="ar-tag">كيفية حساب نهاية الخدمة في القطاع الخاص</span>
            <span className="ar-tag">مكافأة نهاية الخدمة الإمارات 2026</span>
            <span className="ar-tag">قانون العمل الإماراتي</span>
            <span className="ar-tag">وزارة الموارد البشرية والتوطين</span>
            <span className="ar-tag">المرسوم بقانون رقم 33 لسنة 2021</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="sec">
          <div className="sec-hd">Frequently asked questions</div>
          <div className="sec-sd">الأسئلة الشائعة حول مكافأة نهاية الخدمة في الإمارات العربية المتحدة</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

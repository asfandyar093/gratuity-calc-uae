import type { Metadata } from 'next'
import Link from 'next/link'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'

export const metadata: Metadata = {
  title: 'UAE Gratuity Calculator 2026 | Free End of Service Calculator',
  description: 'Use our free UAE gratuity calculator to estimate end-of-service pay under UAE labor law. Calculate basic salary gratuity for Dubai, Abu Dhabi, Sharjah and UAE free zones.',
  keywords: [
    'UAE gratuity calculator',
    'gratuity calculator UAE',
    'UAE end of service calculator',
    'Dubai gratuity calculator',
    'UAE labor law gratuity',
    'end of service calculator UAE',
    'MOHRE gratuity calculator',
  ],
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
      'name': 'UAE Gratuity Calculator',
      'alternateName': [
        'Gratuity Calculator UAE',
        'UAE End of Service Calculator',
        'Dubai Gratuity Calculator',
      ],
      'url': 'https://www.uaegratuitycheck.com',
      'applicationCategory': 'FinanceApplication',
      'applicationSubCategory': 'End of service gratuity calculator',
      'operatingSystem': 'Web',
      'description': 'Free UAE gratuity calculator and end-of-service calculator based on Federal Decree-Law No. 33 of 2021. Estimate gratuity using basic salary, service period, unpaid leave, and the UAE two-year cap.',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'AED' },
      'featureList': [
        'UAE gratuity calculation based on UAE labor law gratuity rules',
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
      '@type': 'WebPage',
      '@id': 'https://www.uaegratuitycheck.com/#webpage',
      'url': 'https://www.uaegratuitycheck.com',
      'name': 'UAE Gratuity Calculator',
      'description': 'Free UAE gratuity calculator for estimating end-of-service gratuity in Dubai, Abu Dhabi, Sharjah, and other UAE emirates.',
      'isPartOf': { '@type': 'WebSite', '@id': 'https://www.uaegratuitycheck.com/#website' },
      'mainEntity': { '@id': 'https://www.uaegratuitycheck.com/#calculator' },
      'about': [
        { '@type': 'Thing', 'name': 'UAE gratuity calculator' },
        { '@type': 'Thing', 'name': 'UAE labor law gratuity' },
        { '@type': 'Thing', 'name': 'UAE end of service calculator' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.uaegratuitycheck.com/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'How do I use the UAE gratuity calculator?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Enter your monthly basic salary, joining date or service years, last working day, and any unpaid leave days. The UAE gratuity calculator estimates the end-of-service gratuity using the standard private-sector formula: 21 days of basic salary per year for the first five years, then 30 days per year after five years, subject to the two-year basic salary cap.' },
        },
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
          'name': 'Can I use this as a Dubai gratuity calculator?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. For standard private-sector employment in Dubai, the same UAE labor law gratuity formula normally applies. DIFC employees should check the DEWS scheme separately, because DIFC has its own employment framework.' },
        },
        {
          '@type': 'Question',
          'name': 'Does gratuity apply in UAE free zones?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Most UAE free zones such as JAFZA, DMCC, and DIC use the standard UAE labor law gratuity approach. DIFC is a major exception because DEWS applies, and ADGM also has its own regulations.' },
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

const faqsEn = [
  { q: 'How do I use the UAE gratuity calculator?', a: 'Enter your monthly basic salary, service period or employment dates, and any unpaid leave days. The calculator applies the UAE end-of-service gratuity formula and shows the daily wage, entitled days, cap check, and estimated amount.' },
  { q: 'Who can receive UAE gratuity?', a: 'Most private-sector employees become eligible after one full year of continuous service. The rule applies across Dubai, Abu Dhabi, Sharjah, and the other emirates, subject to a few exceptions such as Emirati pension schemes, DIFC/ADGM arrangements, and domestic worker rules.' },
  { q: 'Do allowances count?', a: 'Usually no. UAE gratuity is calculated on basic salary only: الراتب الأساسي. Housing, transport, food allowance, overtime, bonuses, and commissions are normally left out.' },
  { q: 'Can I use this as a Dubai gratuity calculator?', a: 'Yes. Standard private-sector employees in Dubai normally use the same UAE labor law gratuity formula. DIFC employees should check DEWS separately because DIFC has its own employment framework.' },
  { q: 'Is there a maximum amount?', a: 'Yes. The gratuity cannot be more than two years of basic salary. The calculator checks that cap automatically before showing your result.' },
  { q: 'Do I lose gratuity if I resign?', a: 'For standard UAE private-sector employment under the current law, resignation no longer reduces the gratuity amount once you are eligible. The same formula is used whether you resign or your employer ends the contract.' },
  { q: 'When should the employer pay?', a: "The final settlement, including gratuity, should normally be paid within 14 days from the employee's last working day." },
  { q: 'What about unpaid leave?', a: 'Unpaid leave days are not counted as service days for gratuity. Add them under Advanced options and the calculator will deduct them from the service period.' },
  { q: 'Is gratuity taxed in the UAE?', a: 'The UAE does not charge personal income tax on gratuity. If you are tax resident somewhere else, check the rules in that country before moving or declaring the money.' },
  { q: 'Can an employer deduct money from gratuity?', a: 'Some deductions may be allowed, such as documented loans or approved advances. If a deduction looks unfair, ask for the written breakdown and consider checking with MOHRE.' },
]

const faqsAr = [
  { q: 'من يستحق مكافأة نهاية الخدمة في الإمارات؟', a: 'غالباً يستحق موظفو القطاع الخاص المكافأة بعد إكمال سنة خدمة مستمرة. وينطبق ذلك في دبي وأبوظبي والشارقة وباقي الإمارات، مع بعض الاستثناءات مثل أنظمة التقاعد للمواطنين وبعض مناطق مثل DIFC وADGM والعمالة المساعدة.' },
  { q: 'هل تدخل البدلات في حساب المكافأة؟', a: 'عادة لا. يتم حساب مكافأة نهاية الخدمة على الراتب الأساسي فقط: الراتب الأساسي. بدل السكن وبدل النقل والعمولات والمكافآت والعمل الإضافي لا تدخل غالباً في الحساب.' },
  { q: 'هل يوجد حد أقصى للمكافأة؟', a: 'نعم. لا يجوز أن تتجاوز مكافأة نهاية الخدمة ما يعادل راتب سنتين من الراتب الأساسي. الحاسبة تطبق هذا الحد تلقائياً.' },
  { q: 'هل تقل المكافأة عند الاستقالة؟', a: 'في عقود القطاع الخاص الخاضعة للقانون الحالي، الاستقالة لا تخفض المكافأة بعد تحقق شرط الأهلية. يتم استخدام نفس طريقة الحساب في الاستقالة أو إنهاء العقد.' },
  { q: 'متى يجب دفع مستحقات نهاية الخدمة؟', a: 'عادة يجب دفع التسوية النهائية، بما فيها مكافأة نهاية الخدمة، خلال 14 يوماً من آخر يوم عمل للموظف.' },
  { q: 'ماذا عن أيام الإجازة بدون راتب؟', a: 'أيام الإجازة بدون راتب لا تُحسب ضمن مدة الخدمة لأغراض المكافأة. يمكنك إدخالها في الخيارات المتقدمة ليتم خصمها من مدة الخدمة.' },
  { q: 'هل مكافأة نهاية الخدمة خاضعة للضريبة في الإمارات؟', a: 'لا توجد ضريبة دخل شخصية في الإمارات على مكافأة نهاية الخدمة. إذا كنت مقيماً ضريبياً في دولة أخرى، تحقق من قواعد تلك الدولة.' },
  { q: 'هل يستطيع صاحب العمل الخصم من المكافأة؟', a: 'قد تكون بعض الخصومات مسموحة، مثل قرض موثق أو سلفة معتمدة. إذا كان الخصم غير واضح، اطلب كشفاً مكتوباً ويمكنك مراجعة MOHRE.' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema).replace(/</g, '\\u003c') }}
      />
      {/* ── HERO — full width, outside page-wrapper ── */}
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">
            <span className="lang-en">Free UAE gratuity calculator · UAE labor law · Updated 2026</span>
            <span className="lang-ar">حاسبة مجانية · قانون العمل الإماراتي · تحديث 2026</span>
          </div>
          <h1>
            <span className="lang-en">UAE Gratuity Calculator 2026<br /><em>Calculate your end-of-service pay in minutes</em></span>
            <span className="lang-ar lang-block">حاسبة مكافأة نهاية الخدمة في الإمارات 2026<br /><em>اعرف تقدير مستحقات نهاية الخدمة بسهولة</em></span>
          </h1>
          <p className="hero-desc">
            <span className="lang-en">Use this UAE gratuity calculator to estimate your end-of-service gratuity from basic salary, service period, unpaid leave, and the UAE labor law gratuity cap. It works for most private-sector employees in Dubai, Abu Dhabi, Sharjah, and the other emirates.</span>
            <span className="lang-ar">أدخل الراتب الأساسي ومدة الخدمة وسبب ترك العمل. سنعرض لك تقديراً لمكافأة نهاية الخدمة حسب معادلة القطاع الخاص في الإمارات، مع شرح واضح لكل خطوة.</span>
          </p>
          <div className="ar-hero lang-en">مكافأة نهاية الخدمة · الراتب الأساسي · التسوية النهائية</div>
          <div className="ar-sub">
            <span className="lang-en">Built for employees, HR teams, and anyone comparing a UAE end-of-service calculator result with a final settlement sheet.</span>
            <span className="lang-ar">مناسبة للموظفين وفرق الموارد البشرية ولكل من يريد مراجعة التسوية النهائية في الإمارات.</span>
          </div>
          <div className="hero-actions">
            <a className="hero-jump-btn" href="#calculator">
              <span className="lang-en">Jump to calculator ↓</span>
              <span className="lang-ar">انتقل إلى الحاسبة ↓</span>
            </a>
          </div>
          <div className="pills">
            <span className="pill"><span className="lang-en">Article 51 · Federal Decree-Law No. 33/2021</span><span className="lang-ar">المادة 51 · المرسوم بقانون اتحادي رقم 33 لسنة 2021</span></span>
            <span className="pill"><span className="lang-en">Basic salary: الراتب الأساسي</span><span className="lang-ar">الحساب على الراتب الأساسي</span></span>
            <span className="pill"><span className="lang-en">Manual or date-based input</span><span className="lang-ar">إدخال يدوي أو حسب التواريخ</span></span>
            <span className="pill"><span className="lang-en">Private browser calculation</span><span className="lang-ar">الحساب يتم داخل المتصفح</span></span>
          </div>
        </div>
      </div>

      {/* ── REST OF PAGE inside page-wrapper ── */}
      <main className="page-wrapper">

        {/* CALCULATOR + ACCRUAL CHART */}
        <Calculator />

        {/* STATS */}
        <div className="stats">
          <div className="stat"><div className="stat-n">1 year</div><div className="stat-l"><span className="lang-en">Minimum service for most gratuity claims</span><span className="lang-ar">الحد الأدنى للخدمة في أغلب الحالات</span></div></div>
          <div className="stat"><div className="stat-n">21 days</div><div className="stat-l"><span className="lang-en">For each year in the first 5 years</span><span className="lang-ar">عن كل سنة خلال أول 5 سنوات</span></div></div>
          <div className="stat"><div className="stat-n">30 days</div><div className="stat-l"><span className="lang-en">For each year after year 5</span><span className="lang-ar">عن كل سنة بعد السنة الخامسة</span></div></div>
          <div className="stat"><div className="stat-n">14 days</div><div className="stat-l"><span className="lang-en">Typical deadline for final settlement payment</span><span className="lang-ar">المدة المعتادة لدفع التسوية النهائية</span></div></div>
        </div>

        <div className="sec">
          <div className="sec-hd"><span className="lang-en">Popular free-zone calculators</span><span className="lang-ar">حاسبات المناطق الحرة</span></div>
          <div className="sec-sd"><span className="lang-en">These related tools help searchers who need a Dubai gratuity calculator or a UAE end of service calculator for a special employment zone.</span><span className="lang-ar">حاسبات مرتبطة للمناطق الحرة والحالات الخاصة.</span></div>
          <div className="three-col">
            <Link className="mini-card" href="/calculate-jafza-gratuity" style={{ textDecoration: 'none', color: 'inherit' }}><h3>JAFZA gratuity calculator</h3><p>Jebel Ali Free Zone employees and logistics companies.</p></Link>
            <Link className="mini-card" href="/calculate-difc-gratuity" style={{ textDecoration: 'none', color: 'inherit' }}><h3>DIFC gratuity calculator</h3><p>DEWS notes and legacy gratuity comparisons.</p></Link>
            <Link className="mini-card" href="/calculate-adgm-gratuity" style={{ textDecoration: 'none', color: 'inherit' }}><h3>ADGM gratuity calculator</h3><p>Abu Dhabi Global Market employees and settlement checks.</p></Link>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal"><span className="lang-en">UAE GRATUITY CALCULATOR GUIDE</span><span className="lang-ar">دليل الحاسبة</span></div>
            <h2><span className="lang-en">Calculate UAE gratuity using the right salary and service period</span><span className="lang-ar">احسب مكافأة نهاية الخدمة بالراتب ومدة الخدمة الصحيحة</span></h2>
            <div className="lang-en">
              <p>The most reliable way to use any gratuity calculator UAE employees search for is to start with the monthly basic salary in the employment contract, not the total package. Housing, transport, commission, bonuses, and overtime usually sit outside the UAE labor law gratuity calculation.</p>
              <p>This UAE end of service calculator then applies the standard private-sector formula: 21 days of basic salary for each year in the first five years, then 30 days for each additional year after year five. The final amount cannot exceed two years of basic salary.</p>
              <p>If you are searching for a Dubai gratuity calculator, the same mainland UAE formula normally applies unless you work in DIFC, ADGM, a domestic worker arrangement, or another special regime.</p>
            </div>
            <div className="lang-ar ar-copy">
              <p>ابدأ دائماً بالراتب الأساسي الشهري المذكور في عقد العمل، وليس الراتب الشامل. غالباً لا تدخل بدلات السكن والنقل والعمولات والمكافآت والعمل الإضافي في حساب مكافأة نهاية الخدمة.</p>
            </div>
            <div className="two-col" style={{ marginTop: '1rem' }}>
              <div className="mini-card">
                <h3>Essential UAE gratuity rules</h3>
                <ul>
                  <li><Link href="/uae-labor-law" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE labor law gratuity guide</Link></li>
                  <li><Link href="/how-it-works" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>How the UAE gratuity formula works</Link></li>
                  <li><Link href="/blog/uae-gratuity-allowances-basic-salary" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Basic salary vs allowances for UAE gratuity</Link></li>
                  <li><Link href="/blog/uae-gratuity-two-year-cap" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE gratuity two-year cap explained</Link></li>
                </ul>
              </div>
              <div className="mini-card">
                <h3>Final settlement checks</h3>
                <ul>
                  <li><Link href="/final-settlement-calculator-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE final settlement calculator</Link></li>
                  <li><Link href="/salary-calculator" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>UAE salary breakdown calculator</Link></li>
                  <li><Link href="/blog/unpaid-leave-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>Unpaid leave and UAE gratuity</Link></li>
                  <li><Link href="/blog/how-to-dispute-gratuity-uae" style={{ color: 'var(--green-dark)', fontWeight: 800 }}>How to dispute a UAE gratuity calculation</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT IS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal"><span className="lang-en">WHAT THIS TOOL DOES</span><span className="lang-ar">ماذا تفعل هذه الحاسبة؟</span></div>
            <h2><span className="lang-en">A simple way to check your UAE gratuity</span><span className="lang-ar">طريقة بسيطة لمراجعة مكافأة نهاية الخدمة</span></h2>
            <div className="lang-en">
              <p>This UAE gratuity calculator gives you a practical estimate of the end-of-service gratuity that may be due when a UAE private-sector job ends. It uses your basic salary, length of service, unpaid leave days, and the statutory two-year cap.</p>
              <p>It is built for real situations: checking an HR calculation, planning a resignation, comparing a final settlement, or understanding what the Arabic term مكافأة نهاية الخدمة actually means in dirhams.</p>
              <p>The result is still an estimate, not legal advice, but it gives you a clean starting point before speaking with your employer, HR team, MOHRE, or a legal adviser.</p>
            </div>
            <div className="lang-ar ar-copy">
              <p>تعطيك هذه الحاسبة تقديراً عملياً لمكافأة نهاية الخدمة عند انتهاء العمل في القطاع الخاص داخل الإمارات. تعتمد على الراتب الأساسي، مدة الخدمة، أيام الإجازة بدون راتب، والحد الأقصى القانوني.</p>
              <p>يمكن استخدامها لمراجعة حساب الموارد البشرية، التخطيط للاستقالة، مقارنة التسوية النهائية، أو فهم قيمة مكافأة نهاية الخدمة بالأرقام وبالدرهم.</p>
              <p>النتيجة تقديرية وليست استشارة قانونية، لكنها نقطة بداية واضحة قبل التواصل مع صاحب العمل أو قسم الموارد البشرية أو MOHRE أو مستشار قانوني.</p>
            </div>
          </div>
        </div>

        {/* HOW TO USE */}
        <div className="sec">
          <div className="sec-hd"><span className="lang-en">How to use it</span><span className="lang-ar">طريقة الاستخدام</span></div>
          <div className="sec-sd"><span className="lang-en">You only need the details usually found in your contract or final settlement sheet.</span><span className="lang-ar">كل ما تحتاجه موجود غالباً في عقد العمل أو كشف التسوية النهائية.</span></div>
          <div className="steps-3 lang-en lang-grid">
            <div className="step-card"><div className="step-n">STEP 01</div><h4>Use basic salary only</h4><p>Enter the monthly basic salary from your contract. Leave out housing, transport, overtime, and bonuses.</p></div>
            <div className="step-card"><div className="step-n">STEP 02</div><h4>Add your service period</h4><p>Use start and end dates, or type years manually. Decimal years work too: 3.5 means three years and six months.</p></div>
            <div className="step-card"><div className="step-n">STEP 03</div><h4>Check the result</h4><p>You will see the daily wage, entitled days, any unpaid leave deduction, the cap check, and an estimated payment due date.</p></div>
          </div>
          <div className="steps-3 lang-ar lang-grid ar-copy">
            <div className="step-card"><div className="step-n">الخطوة 01</div><h4>استخدم الراتب الأساسي فقط</h4><p>أدخل الراتب الأساسي الشهري المذكور في العقد. لا تضف بدل السكن أو النقل أو المكافآت أو العمل الإضافي.</p></div>
            <div className="step-card"><div className="step-n">الخطوة 02</div><h4>أضف مدة الخدمة</h4><p>يمكنك إدخال تاريخ بداية العمل وآخر يوم عمل، أو إدخال عدد السنوات يدوياً. مثال: 3.5 تعني ثلاث سنوات ونصف.</p></div>
            <div className="step-card"><div className="step-n">الخطوة 03</div><h4>راجع النتيجة</h4><p>ستظهر لك اليومية، عدد الأيام المستحقة، خصم الإجازة بدون راتب، فحص الحد الأقصى، وتاريخ الدفع المتوقع.</p></div>
          </div>
        </div>

        {/* ELIGIBILITY */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal"><span className="lang-en">ELIGIBILITY — من يستحق المكافأة</span><span className="lang-ar">الأهلية — من يستحق المكافأة؟</span></div>
            <h2><span className="lang-en">Who usually qualifies?</span><span className="lang-ar">من يستحق مكافأة نهاية الخدمة عادة؟</span></h2>
            <p className="lang-en">In most UAE private-sector jobs, gratuity starts after one full year of continuous service. Nationality and emirate usually do not matter; the key details are the contract, service period, salary structure, and whether a special regime applies.</p>
            <p className="lang-ar ar-copy">في أغلب وظائف القطاع الخاص في الإمارات، يبدأ استحقاق مكافأة نهاية الخدمة بعد إكمال سنة خدمة مستمرة. الجنسية أو الإمارة لا تغير القاعدة غالباً، لكن المهم هو نوع العقد ومدة الخدمة وهيكل الراتب وما إذا كان هناك نظام خاص مطبق.</p>
            <div className="two-col" style={{ marginTop: '0.75rem' }}>
              <div className="mini-card">
                <div className="badge bg-teal" style={{ marginBottom: '0.5rem' }}><span className="lang-en">Usually eligible</span><span className="lang-ar">غالباً مؤهلون</span></div>
                <ul>
                  <li><span className="lang-en">Private-sector employees with 1+ year of service</span><span className="lang-ar">موظفو القطاع الخاص بعد سنة خدمة أو أكثر</span></li>
                  <li><span className="lang-en">Workers in Dubai, Abu Dhabi, Sharjah, and other emirates</span><span className="lang-ar">العاملون في دبي وأبوظبي والشارقة وباقي الإمارات</span></li>
                  <li><span className="lang-en">Resignation, termination, or contract expiry cases</span><span className="lang-ar">حالات الاستقالة أو الإنهاء أو انتهاء العقد</span></li>
                  <li><span className="lang-en">Some part-time roles, calculated proportionally</span><span className="lang-ar">بعض الوظائف الجزئية حسب النسبة</span></li>
                </ul>
              </div>
              <div className="mini-card">
                <div className="badge bg-gray" style={{ marginBottom: '0.5rem' }}><span className="lang-en">Check separately</span><span className="lang-ar">تحقق منها بشكل منفصل</span></div>
                <ul>
                  <li><span className="lang-en">Less than one year of service</span><span className="lang-ar">خدمة أقل من سنة</span></li>
                  <li><span className="lang-en">Emirati nationals covered by pension rules</span><span className="lang-ar">المواطنون المشمولون بأنظمة التقاعد</span></li>
                  <li><span className="lang-en">DIFC, ADGM, or DEWS arrangements</span><span className="lang-ar">أنظمة DIFC أو ADGM أو DEWS</span></li>
                  <li><span className="lang-en">Domestic workers and freelancers</span><span className="lang-ar">العمالة المساعدة والمستقلون</span></li>
                </ul>
              </div>
            </div>
            <div className="info-box" style={{ marginTop: '0.75rem' }}>
              <span className="lang-en">Practical note: under the current UAE private-sector rules, resignation does not reduce the gratuity formula once the employee is eligible.</span>
              <span className="lang-ar">ملاحظة عملية: وفق القواعد الحالية للقطاع الخاص في الإمارات، الاستقالة لا تخفض طريقة حساب المكافأة بعد تحقق شرط الأهلية.</span>
            </div>
          </div>
        </div>

        {/* SALARY COMPONENTS */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal"><span className="lang-en">SALARY COMPONENTS — مكونات الراتب</span><span className="lang-ar">مكونات الراتب</span></div>
            <h2><span className="lang-en">Use the basic salary, not the full package</span><span className="lang-ar">استخدم الراتب الأساسي وليس الراتب الشامل</span></h2>
            <p className="lang-en">This is where many final settlement numbers go wrong. UAE gratuity is normally calculated on basic salary only. If your total monthly package is AED 15,000 but your basic salary is AED 9,000, the gratuity calculation starts from AED 9,000.</p>
            <p className="lang-ar ar-copy">هنا يحدث الكثير من اللبس في التسويات النهائية. تُحسب مكافأة نهاية الخدمة في الإمارات عادة على الراتب الأساسي فقط. إذا كان راتبك الشامل 15,000 درهم لكن الراتب الأساسي 9,000 درهم، فالحساب يبدأ من 9,000 درهم.</p>
            <div className="comp-grid">
              <div className="comp-card comp-included">
                <div className="comp-title"><span className="lang-en">INCLUDED</span><span className="lang-ar">يدخل في الحساب</span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span><span className="lang-en">Basic monthly salary (الراتب الأساسي)</span><span className="lang-ar">الراتب الأساسي الشهري</span></span></div>
                <div className="comp-item"><span className="comp-dot dot-green" /><span><span className="lang-en">Fixed base pay shown in the employment contract</span><span className="lang-ar">الأجر الأساسي الثابت المذكور في عقد العمل</span></span></div>
              </div>
              <div className="comp-card comp-excluded">
                <div className="comp-title"><span className="lang-en">USUALLY EXCLUDED</span><span className="lang-ar">لا يدخل عادة في الحساب</span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span><span className="lang-en">Housing allowance (بدل السكن)</span><span className="lang-ar">بدل السكن</span></span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span><span className="lang-en">Transport allowance (بدل النقل)</span><span className="lang-ar">بدل النقل</span></span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span><span className="lang-en">Food, utility, or other allowances</span><span className="lang-ar">بدل الطعام أو الخدمات أو البدلات الأخرى</span></span></div>
                <div className="comp-item"><span className="comp-dot dot-gray" /><span><span className="lang-en">Overtime, commissions, bonuses, and incentives</span><span className="lang-ar">العمل الإضافي والعمولات والمكافآت والحوافز</span></span></div>
              </div>
            </div>
          </div>
        </div>

        {/* WORKED EXAMPLES */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-teal"><span className="lang-en">WORKED EXAMPLES — مثال على الحساب</span><span className="lang-ar">أمثلة حسابية</span></div>
            <h2><span className="lang-en">Examples with real numbers</span><span className="lang-ar">أمثلة بأرقام واضحة</span></h2>
            <p className="lang-en">These examples show the usual pattern: daily wage is basic salary divided by 30, then the service years are split between the 21-day rate and the 30-day rate after year five.</p>
            <p className="lang-ar ar-copy">توضح هذه الأمثلة الطريقة المعتادة: اليومية تساوي الراتب الأساسي ÷ 30، ثم يتم حساب السنوات الأولى على أساس 21 يوماً، وما بعد السنة الخامسة على أساس 30 يوماً.</p>
            <div className="examples-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }}>

              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title"><span className="lang-en">2 years of service · AED 8,000 basic salary</span><span className="lang-ar">سنتان خدمة · راتب أساسي 8,000 درهم</span></div>
                <div className="ex-line"><span className="lang-en">Daily wage: AED 8,000 ÷ 30 = <strong>AED 266.67</strong></span><span className="lang-ar">اليومية: 8,000 ÷ 30 = <strong>266.67 درهم</strong></span></div>
                <div className="ex-line"><span className="lang-en">AED 266.67 × 21 days × 2 years = AED 11,200</span><span className="lang-ar">266.67 × 21 يوم × سنتين = 11,200 درهم</span></div>
                <div className="ex-total"><span className="lang-en">Estimated gratuity: AED 11,200</span><span className="lang-ar">التقدير: 11,200 درهم</span></div>
              </div>

              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title"><span className="lang-en">3 years of service · AED 10,000 basic salary</span><span className="lang-ar">ثلاث سنوات خدمة · راتب أساسي 10,000 درهم</span></div>
                <div className="ex-line"><span className="lang-en">Daily wage: AED 10,000 ÷ 30 = <strong>AED 333.33</strong></span><span className="lang-ar">اليومية: 10,000 ÷ 30 = <strong>333.33 درهم</strong></span></div>
                <div className="ex-line"><span className="lang-en">AED 333.33 × 21 days × 3 years = AED 21,000</span><span className="lang-ar">333.33 × 21 يوم × 3 سنوات = 21,000 درهم</span></div>
                <div className="ex-total"><span className="lang-en">Estimated gratuity: AED 21,000</span><span className="lang-ar">التقدير: 21,000 درهم</span></div>
              </div>

              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title">Gratuity after 5 years — resign · AED 9,000 basic salary</div>
                <div className="ex-line">Daily wage: AED 9,000 ÷ 30 = <strong>AED 300</strong></div>
                <div className="ex-line">Years 1–5: AED 300 × 21 days × 5 years = AED 31,500</div>
                <div className="ex-line">Cap check: 24 × AED 9,000 = AED 216,000 ✓ not exceeded</div>
                <div className="ex-total">Total gratuity: AED 31,500</div>
              </div>

              <div className="example-box" style={{ margin: 0 }}>
                <div className="ex-title">Crossing 5-year threshold · AED 12,000 basic · 6 years service</div>
                <div className="ex-line">Daily wage: AED 12,000 ÷ 30 = <strong>AED 400</strong></div>
                <div className="ex-line">Years 1–5: AED 400 × 21 days × 5 years = AED 42,000</div>
                <div className="ex-line">Year 6: AED 400 × 30 days × 1 year = AED 12,000</div>
                <div className="ex-total">Total gratuity: AED 54,000</div>
              </div>

              <div className="example-box" style={{ margin: 0, gridColumn: '1 / -1' }}>
                <div className="ex-title">Gratuity after 7 years — terminated · AED 15,000 basic salary</div>
                <div className="ex-line">Daily wage: AED 15,000 ÷ 30 = <strong>AED 500</strong></div>
                <div className="ex-line">Years 1–5: AED 500 × 21 days × 5 years = AED 52,500</div>
                <div className="ex-line">Years 6–7: AED 500 × 30 days × 2 years = AED 30,000</div>
                <div className="ex-line">Cap check: 24 × AED 15,000 = AED 360,000 ✓ not exceeded</div>
                <div className="ex-total">Total gratuity: AED 82,500</div>
              </div>

            </div>
            <div className="info-box" style={{ marginTop: '1.25rem' }}>
              <span className="lang-en">Key rule: after five years, only the service beyond year five uses the 30-day rate. Years one to five still use the 21-day rate.</span>
              <span className="lang-ar">قاعدة مهمة: بعد خمس سنوات، يتم حساب المدة التي تزيد عن خمس سنوات فقط على أساس 30 يوماً. أما أول خمس سنوات فتبقى على أساس 21 يوماً.</span>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="sec">
          <div className="sec-hd"><span className="lang-en">Why people use it</span><span className="lang-ar">لماذا يستخدمها الناس؟</span></div>
          <div className="sec-sd"><span className="lang-en">It is meant to help you understand the number before you have a difficult HR conversation.</span><span className="lang-ar">الهدف هو فهم الرقم قبل الدخول في نقاش مع الموارد البشرية أو صاحب العمل.</span></div>
          <div className="benefit-grid">
            <div className="benefit-item"><h4><span className="lang-en">Clear formula</span><span className="lang-ar">معادلة واضحة</span></h4><p><span className="lang-en">Uses the common UAE private-sector gratuity approach: basic salary, daily wage, service years, and statutory cap.</span><span className="lang-ar">تعتمد على طريقة القطاع الخاص في الإمارات: الراتب الأساسي، اليومية، مدة الخدمة، والحد الأقصى القانوني.</span></p></div>
            <div className="benefit-item"><h4><span className="lang-en">Readable breakdown</span><span className="lang-ar">تفصيل مفهوم</span></h4><p><span className="lang-en">Shows how the amount is built instead of giving you one unexplained final number.</span><span className="lang-ar">تعرض كيف تم الوصول إلى المبلغ بدلاً من إظهار رقم نهائي بدون شرح.</span></p></div>
            <div className="benefit-item"><h4><span className="lang-en">Date or manual input</span><span className="lang-ar">إدخال بالتاريخ أو يدوياً</span></h4><p><span className="lang-en">Use joining and last working dates, or enter the service years yourself if that is easier.</span><span className="lang-ar">استخدم تاريخ بدء العمل وآخر يوم عمل، أو أدخل عدد سنوات الخدمة يدوياً.</span></p></div>
            <div className="benefit-item"><h4><span className="lang-en">Unpaid leave option</span><span className="lang-ar">خيار الإجازة بدون راتب</span></h4><p><span className="lang-en">Add unpaid leave days so they are deducted from the service period.</span><span className="lang-ar">أضف أيام الإجازة بدون راتب ليتم خصمها من مدة الخدمة.</span></p></div>
            <div className="benefit-item"><h4><span className="lang-en">Planning view</span><span className="lang-ar">نظرة للتخطيط</span></h4><p><span className="lang-en">The accrual chart helps you see how gratuity changes as your service years increase.</span><span className="lang-ar">يساعدك مخطط التراكم على معرفة كيف تتغير المكافأة مع زيادة سنوات الخدمة.</span></p></div>
            <div className="benefit-item"><h4><span className="lang-en">Private by design</span><span className="lang-ar">خصوصية أفضل</span></h4><p><span className="lang-en">The calculator runs in your browser. You do not need to create an account or send us salary details.</span><span className="lang-ar">تعمل الحاسبة داخل المتصفح. لا تحتاج إلى حساب ولا ترسل لنا تفاصيل راتبك.</span></p></div>
          </div>
        </div>

        {/* UAE vs KSA */}
        <div className="sec">
          <div className="card">
            <div className="badge bg-blue"><span className="lang-en">GCC COMPARISON — UAE VS KSA</span><span className="lang-ar">مقارنة خليجية — الإمارات والسعودية</span></div>
            <h2><span className="lang-en">UAE and Saudi gratuity are not calculated the same way</span><span className="lang-ar">حساب نهاية الخدمة في الإمارات والسعودية ليس متطابقاً</span></h2>
            <p className="lang-en">If you have worked in more than one GCC country, do not assume the same rule applies everywhere. The UAE and Saudi Arabia use different wage bases and different resignation rules.</p>
            <p className="lang-ar ar-copy">إذا عملت في أكثر من دولة خليجية، لا تفترض أن نفس القاعدة تنطبق في كل مكان. تختلف الإمارات والسعودية في أساس الأجر وطريقة التعامل مع الاستقالة.</p>
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
          <h2><span className="lang-en">Arabic summary: مكافأة نهاية الخدمة</span><span className="lang-ar">ملخص عربي: مكافأة نهاية الخدمة</span></h2>
          <p><span className="lang-en">In Arabic, UAE gratuity is called مكافأة نهاية الخدمة. The most important phrase to know is الراتب الأساسي, because the basic salary is the starting point for the calculation.</span><span className="lang-ar">مكافأة نهاية الخدمة هي مبلغ يستحقه الموظف عند انتهاء علاقة العمل في القطاع الخاص، إذا استوفى شروط الأهلية. أهم مصطلح هنا هو الراتب الأساسي لأنه أساس الحساب.</span></p>
          <p><span className="lang-en">For most eligible private-sector employees, the first five years are calculated at 21 days per year. Service after five years is calculated at 30 days per year. The total gratuity is capped at two years of basic salary.</span><span className="lang-ar">في أغلب حالات القطاع الخاص، تُحسب أول خمس سنوات على أساس 21 يوماً عن كل سنة. وما يزيد عن خمس سنوات يُحسب على أساس 30 يوماً عن كل سنة. ولا تتجاوز المكافأة إجمالاً ما يعادل راتب سنتين من الراتب الأساسي.</span></p>
          <p><span className="lang-en">If your employer gives you a final settlement sheet, compare the basic salary, service dates, unpaid leave, and deductions before signing.</span><span className="lang-ar">إذا استلمت كشف التسوية النهائية، راجع الراتب الأساسي وتواريخ الخدمة والإجازات بدون راتب وأي خصومات قبل التوقيع.</span></p>
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
          <div className="sec-hd"><span className="lang-en">Common questions</span><span className="lang-ar">أسئلة شائعة</span></div>
          <div className="sec-sd"><span className="lang-en">Short answers to the questions people usually ask before accepting a final settlement.</span><span className="lang-ar">إجابات مختصرة على الأسئلة التي يطرحها الموظفون قبل قبول التسوية النهائية.</span></div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            <div className="lang-en">
              {faqsEn.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
            <div className="lang-ar ar-copy">
              {faqsAr.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'UAE Labor Law Gratuity Reference 2026 | Articles 51 to 54 and MOHRE Rules',
  description: 'Comprehensive reference to UAE Federal Decree-Law No. 33 of 2021 governing end-of-service gratuity. Covers Articles 51 to 54, 120, 121, 132, MOHRE complaint process, and 2023 alternative EOSB scheme.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com/uae-labor-law',
  },
}

export default function LaborLawPage() {
  return (
    <main>
      <div className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › UAE Labor Law Gratuity Reference 2026</div>
          <h1>UAE Labor Law Gratuity Reference 2026</h1>
          <p>Comprehensive reference to Federal Decree-Law No. 33 of 2021 and MOHRE regulations governing end-of-service gratuity for UAE private sector employees. Updated for 2026.</p>
        </div>

        <div className="info-box" style={{marginBottom:'1.5rem'}}>⚖️ This guide is for informational purposes. Federal Decree-Law No. 33 of 2021 is effective from 2 February 2022. For legal advice on your specific situation, consult MOHRE or a qualified UAE employment lawyer.</div>

        <div className="sec-title">Key articles governing gratuity</div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 51</span><h3>End-of-service gratuity entitlement</h3></div>
          <p>Every worker who completes one or more years of continuous service is entitled to an end-of-service gratuity upon termination. The gratuity is calculated on basic wage only and must be paid regardless of whether the employee resigned or was terminated — provided no misconduct dismissal applies. This right cannot be waived or reduced by contract.</p>
          <div className="success-box">🔑 Key 2022 change: The new law eliminated all resignation-based reductions. Full gratuity is now owed to all eligible employees regardless of how they left.</div>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 52</span><h3>Calculation of gratuity — the official formula</h3></div>
          <ul>
            <li>For the first five years: 21 working days of basic wage per completed year</li>
            <li>For each year beyond five years: 30 calendar days of basic wage per year</li>
            <li>Partial years beyond the first complete year: calculated on a pro-rata basis</li>
            <li>Days of absence without pay: excluded from the total service period</li>
          </ul>
          <div className="formula-box" style={{marginTop:'0.75rem'}}>
            <strong>Daily wage = Monthly basic salary ÷ 30</strong>
            <div className="formula-line">Gratuity (1–5 yrs) = Daily wage × 21 × years served</div>
            <div className="formula-line">Gratuity (5+ yrs) = [Daily wage × 21 × 5] + [Daily wage × 30 × (years − 5)]</div>
            <div className="formula-line">Maximum total = 24 × monthly basic salary</div>
          </div>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 53</span><h3>Gratuity cap and payment deadline</h3></div>
          <p>The total end-of-service gratuity shall not exceed two years of basic salary (24 monthly payments). This is a hard statutory maximum that cannot be exceeded regardless of years served. Gratuity rights are protected even in cases of employer insolvency.</p>
          <p>The employer must pay the full gratuity within 14 days of the employee&apos;s last working day. This is a strict legal deadline.</p>
          <div className="warn-box">⚠️ Delayed payment beyond 14 days can result in administrative fines, trade license suspension, restrictions on hiring new staff, and MOHRE legal proceedings.</div>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 54</span><h3>Permissible deductions from gratuity</h3></div>
          <p>An employer may deduct documented amounts legally owed by the employee: outstanding salary advances, employer-approved loans, and compensation for damages directly caused by the employee — within limits set by UAE labour law. Arbitrary or undocumented deductions are prohibited and can be challenged through MOHRE or the labour courts.</p>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 120</span><h3>Dismissal for gross misconduct — effect on gratuity</h3></div>
          <p>An employer may dismiss an employee without notice and without gratuity payment in cases of serious misconduct:</p>
          <ul>
            <li>Fraud, theft, or embezzlement of company assets</li>
            <li>Physical assault on the employer, managers, or coworkers</li>
            <li>Disclosure of confidential business information</li>
            <li>Repeated violation of workplace policies after formal written warning</li>
            <li>Gross negligence causing significant financial loss to the employer</li>
            <li>Being found in a state of intoxication during working hours</li>
          </ul>
          <div className="warn-box">⚖️ Employees who believe they were wrongfully dismissed under Article 120 can contest the decision through MOHRE. The burden of proof lies with the employer.</div>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 121</span><h3>Resignation — gratuity entitlement</h3></div>
          <p>Under the 2022 UAE Labour Law, an employee who resigns after completing one or more years retains full gratuity entitlement — regardless of contract type. This is one of the most significant improvements introduced by Federal Decree-Law No. 33 of 2021, which eliminated the tiered resignation reductions that previously existed under unlimited contracts.</p>
        </div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">ARTICLE 132</span><h3>Service continuity and breaks</h3></div>
          <p>Authorised leave (annual leave, sick leave, maternity leave) is included in the service period. Days of unpaid absence are excluded and do not count toward total service for gratuity purposes. Approved career breaks: specific terms of the written agreement determine whether the period counts toward gratuity.</p>
        </div>

        <div className="sec-title">Alternative End-of-Service Benefit Scheme 2023</div>

        <div className="law-card">
          <div className="law-card-hd"><span className="art-badge">CABINET RESOLUTION 96 / 2023</span><h3>Voluntary investment-based savings scheme</h3></div>
          <p>Cabinet Resolution No. 96 of 2023 introduced a voluntary Alternative EOSB Scheme coordinated by MOHRE and the Securities and Commodities Authority (SCA). Participating employers contribute monthly to approved investment funds, replacing traditional lump-sum gratuity with a growing investment portfolio.</p>
          <p>As of 2026, participation remains voluntary for employers. Traditional gratuity rules under Federal Decree-Law No. 33 of 2021 continue to apply to all employees not covered by the alternative scheme.</p>
          <div className="info-box">The two systems operate independently. Employees covered by the alternative scheme do not receive traditional gratuity — they receive fund-based end-of-service benefits instead.</div>
        </div>

        <div className="sec-title">Gratuity payment timeline and employer obligations</div>

        <div className="law-card">
          <div className="timeline-steps">
            <div className="tl-step"><div className="tl-num">1</div><div className="tl-body"><h4>Last working day</h4><p>The employee completes their notice period. The 14-day payment clock starts from this date.</p></div></div>
            <div className="tl-step"><div className="tl-num">2</div><div className="tl-body"><h4>Within 14 days — payment due</h4><p>The employer must pay the full gratuity. Any permissible deductions must be documented in the final settlement breakdown.</p></div></div>
            <div className="tl-step"><div className="tl-num">3</div><div className="tl-body"><h4>If delayed — MOHRE complaint</h4><p>The employee may file a formal complaint at mohre.gov.ae or any Tasheel service centre. Free of charge.</p></div></div>
            <div className="tl-step"><div className="tl-num">4</div><div className="tl-body"><h4>Mediation &amp; labour court</h4><p>If mediation fails, MOHRE refers the case to the labour courts. Legal aid available for eligible employees.</p></div></div>
          </div>
          <div className="warn-box" style={{marginTop:'1rem'}}>🛡️ Employer insolvency does not cancel gratuity rights. UAE law protects earned gratuity as a priority claim — it must be settled before other creditors.</div>
        </div>

        <div className="ar-block">
          <h2>قانون العمل الإماراتي ومكافأة نهاية الخدمة 2026</h2>
          <p>يُنظّم مكافأة نهاية الخدمة في الإمارات المرسوم بقانون الاتحادي رقم 33 لسنة 2021 الذي دخل حيز التنفيذ في الثاني من فبراير 2022. يُلزم هذا القانون جميع أصحاب العمل في القطاع الخاص بدفع مكافأة نهاية الخدمة للموظفين المؤهلين.</p>
          <p>يُشرف على تطبيق القانون وزارة الموارد البشرية والتوطين، ويحق لكل موظف أتم سنة خدمة متواصلة المطالبة بحقوقه. في حالة التأخر في السداد، يحق للموظف تقديم شكوى رسمية عبر mohre.gov.ae أو مراكز تسهيل. مكافأة نهاية الخدمة في الإمارات معفاة من الضرائب.</p>
          <div className="ar-tags">
            <span className="ar-tag">المرسوم بقانون رقم 33 لسنة 2021</span>
            <span className="ar-tag">وزارة الموارد البشرية والتوطين</span>
            <span className="ar-tag">المادة 51 قانون العمل</span>
            <span className="ar-tag">شكوى عمالية الإمارات</span>
            <span className="ar-tag">حقوق العمال الإمارات</span>
            <span className="ar-tag">قرار مجلس الوزراء رقم 96 لسنة 2023</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

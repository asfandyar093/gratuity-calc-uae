import Link from 'next/link'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import GratuityYearsTable from '@/components/GratuityYearsTable'
import SourcesBox from '@/components/SourcesBox'
import { faqsAr } from '@/lib/homeFaqs'
import { SOURCES } from '@/lib/sources'

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

// Arabic homepage body (/ar). Arabic only: rendered inside the Arabic root
// layout (<html lang="ar" dir="rtl">).
export default function ArHomeContent() {
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">حاسبة مجانية · المادة 51 من قانون العمل · مراجعة أكتوبر 2026</div>
          <h1>
            حاسبة نهاية الخدمة الإمارات 2026<br /><em>احسب مكافأة نهاية الخدمة في القطاع الخاص</em>
          </h1>
          <p className="hero-desc">
            احسب مكافأة نهاية الخدمة في الإمارات من الراتب الأساسي ومدة الخدمة. تطبق الحاسبة المادة 51 من المرسوم بقانون اتحادي رقم 33 لسنة 2021 بشأن تنظيم علاقات العمل، وتصلح للعاملين في دبي وأبوظبي والشارقة وباقي الإمارات وأغلب المناطق الحرة.
          </p>
          <p className="hero-lang-link">
            <Link href="/" hrefLang="en" lang="en">English version of this calculator →</Link>
          </p>
          <div className="hero-actions">
            <a className="hero-jump-btn" href="#calculator">انتقل إلى الحاسبة ↓</a>
          </div>
          <div className="pills">
            <span className="pill">المادة 51 · المرسوم بقانون اتحادي رقم 33 لسنة 2021</span>
            <span className="pill">الحساب على الراتب الأساسي</span>
            <span className="pill">إدخال بالتواريخ أو بعدد السنوات</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <div className="answer-box">
          <p>
            <strong>باختصار:</strong> يستحق العامل الأجنبي بدوام كامل بعد إكمال سنة خدمة مستمرة أجر 21 يوماً من الراتب الأساسي عن كل سنة من السنوات الخمس الأولى، و30 يوماً عن كل سنة بعدها، مع احتساب كسور السنة بالتناسب. لا تُحسب أيام الغياب بدون أجر، ولا يزيد مجموع المكافأة على أجر سنتين (المادة 51)، ويجب دفعها خلال 14 يوماً من انتهاء العقد (المادة 53).
          </p>
        </div>

        <Calculator lang="ar" />

        <div className="stats">
          <div className="stat"><div className="stat-n">سنة</div><div className="stat-l">الحد الأدنى للخدمة المستمرة</div></div>
          <div className="stat"><div className="stat-n">21 يوماً</div><div className="stat-l">عن كل سنة من السنوات 1–5</div></div>
          <div className="stat"><div className="stat-n">30 يوماً</div><div className="stat-l">عن كل سنة بعد السنة الخامسة</div></div>
          <div className="stat"><div className="stat-n">14 يوماً</div><div className="stat-l">موعد دفع المستحقات بعد انتهاء العقد</div></div>
        </div>

        <div className="sec">
          <div className="sec-hd">مكافأة نهاية الخدمة حسب سنوات الخدمة</div>
          <div className="sec-sd">أمثلة جاهزة لرواتب أساسية شائعة، محسوبة بقسمة الراتب الأساسي على 30 ووفق نسب المادة 51.</div>
          <GratuityYearsTable lang="ar" years={[1, 2, 3, 5, 7, 10, 15, 20]} salaries={[5000, 10000, 15000]} />
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">طريقة الحساب</div>
            <h2>كيفية حساب نهاية الخدمة في القطاع الخاص الإمارات</h2>
            <ol>
              <li>الأجر اليومي = الراتب الأساسي الشهري ÷ 30.</li>
              <li>السنوات من 1 إلى 5: الأجر اليومي × 21 يوماً × عدد السنوات.</li>
              <li>بعد السنة الخامسة: الأجر اليومي × 30 يوماً عن كل سنة إضافية.</li>
              <li>اطرح أيام الغياب بدون أجر من مدة الخدمة، وطبّق الحد الأقصى (أجر سنتين).</li>
            </ol>
            <p>
              مثال: راتب أساسي 10,000 درهم وخدمة 7 سنوات = 333.33 × (105 + 60) يوماً = 55,000 درهم. للشرح الكامل مع الأمثلة راجع <Link href="/ar/how-it-works" style={linkStyle}>طريقة حساب مكافأة نهاية الخدمة</Link>.
            </p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">الراتب الأساسي</div>
            <h2>ما الذي يدخل في حساب المكافأة؟</h2>
            <p>تُحسب المكافأة على <strong>الأجر الأساسي</strong> الأخير، وهو الأجر المحدد في العقد دون البدلات أو المزايا العينية. لا يدخل بدل السكن أو النقل أو الطعام، ولا العمل الإضافي أو العمولات أو المكافآت التشجيعية.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">حالات خاصة</div>
            <h2>متى لا تنطبق هذه المعادلة؟</h2>
            <ul>
              <li><strong>المواطنون:</strong> يستحقون مكافأتهم وفق تشريعات المعاشات والتأمينات الاجتماعية (المادة 51 البند 1).</li>
              <li><strong>العمالة المساعدة (الخدم والسائقون والمربيات):</strong> يخضعون للمرسوم بقانون اتحادي رقم 9 لسنة 2022، ولم تصدر بعد قواعد حساب المكافأة. راجع <Link href="/ar/gratuity-calculator/domestic-workers" style={linkStyle}>مكافأة نهاية الخدمة للعمالة المساعدة</Link>.</li>
              <li><strong>مركز دبي المالي العالمي DIFC وسوق أبوظبي العالمي ADGM:</strong> لكل منهما قانون توظيف خاص.</li>
            </ul>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">التسوية النهائية</div>
            <h2>المكافأة جزء من التسوية النهائية</h2>
            <p>تشمل مستحقات نهاية الخدمة أيضاً الراتب غير المدفوع وبدل الإجازة السنوية غير المستخدمة وبدل الإنذار إن وُجد وتذكرة العودة، بعد خصم المبالغ المسموح بها قانوناً. احسبها كاملة عبر <Link href="/ar/final-settlement-calculator-uae" style={linkStyle}>حاسبة التسوية النهائية</Link>.</p>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">أسئلة شائعة عن مكافأة نهاية الخدمة</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqsAr.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>

        <SourcesBox lang="ar" sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />

        <Footer lang="ar" />
      </main>
    </>
  )
}

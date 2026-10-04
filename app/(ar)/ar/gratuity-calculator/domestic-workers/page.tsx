import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import DomesticEstimator from '@/components/DomesticEstimator'
import SourcesBox from '@/components/SourcesBox'
import { baseOpenGraph, faqSchema } from '@/lib/seo'
import { pairAlternates } from '@/lib/i18nRoutes'
import { domesticFaqsAr } from '@/lib/domesticFaqs'
import { MOHRE_DOMESTIC_DUES_URL, SOURCES, LAST_REVIEWED } from '@/lib/sources'

const EN_PATH = '/gratuity-calculator/domestic-workers'
const URL = `https://www.uaegratuitycheck.com/ar${EN_PATH}`
const title = 'مكافأة نهاية الخدمة للعمالة المساعدة في الإمارات 2026'
const description =
  'هل تستحق العمالة المنزلية مكافأة نهاية الخدمة في الإمارات؟ ماذا يقول المرسوم بقانون رقم 9 لسنة 2022، وخدمة احتساب المستحقات من الوزارة، وحاسبة تقديرية حسب العقد.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: pairAlternates(EN_PATH, 'ar'),
  openGraph: { ...baseOpenGraph, locale: 'ar_AE', alternateLocale: ['en_AE'], title, description, url: URL },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'حاسبة نهاية الخدمة', item: 'https://www.uaegratuitycheck.com/ar' },
        { '@type': 'ListItem', position: 2, name: 'العمالة المساعدة', item: URL },
      ],
    },
    { '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: title, description, inLanguage: 'ar', dateModified: LAST_REVIEWED },
    faqSchema(domesticFaqsAr, `${URL}#faq`, true),
  ],
}

const linkStyle = { color: 'var(--green-dark)', fontWeight: 800 } as const

export default function ArabicDomesticWorkersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      <div className="hero" style={{ background: 'linear-gradient(145deg, #374151 0%, #4b5563 45%, #6b7280 100%)' }}>
        <div className="hero-inner">
          <div className="eyebrow">العمالة المساعدة · المرسوم بقانون اتحادي رقم 9 لسنة 2022 · مراجعة 4 أكتوبر 2026</div>
          <h1>مكافأة نهاية الخدمة للعمالة المساعدة في الإمارات<br /><em>حاسبة تقديرية والقانون الحالي</em></h1>
          <p className="hero-desc">
            تخضع العمالة المنزلية، مثل العاملات المنزليات والمربيات والسائقين الخاصين والطهاة، لقانون العمالة المساعدة وليس لقانون العمل الخاص بموظفي الشركات. نوضح هنا ما يقوله القانون الحالي عن مكافأة نهاية الخدمة، وكيف تحصل على الرقم الرسمي من وزارة الموارد البشرية والتوطين.
          </p>
          <p className="hero-lang-link"><Link href={EN_PATH} hrefLang="en" lang="en">English version of this page →</Link></p>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/ar">حاسبة نهاية الخدمة</Link> › العمالة المساعدة
        </nav>

        <div className="answer-box">
          <p>
            <strong>الخلاصة:</strong> وفق القانون الحالي، المرسوم بقانون اتحادي رقم 9 لسنة 2022، <strong>لا توجد معادلة قانونية محددة لمكافأة نهاية الخدمة للعمالة المساعدة</strong>. تترك المادة 22 قواعد الاحتساب لقرار يصدره مجلس الوزراء، ولم يُنشر هذا القرار حتى تاريخ مراجعتنا في 4 أكتوبر 2026. يعتمد المبلغ على العقد المعتمد من الوزارة، وللحصول على رقم رسمي استخدم <a href={MOHRE_DOMESTIC_DUES_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>خدمة احتساب المستحقات للعمالة المساعدة</a>. أما قاعدة &laquo;14 يوماً عن كل سنة&raquo; فمصدرها القانون الاتحادي رقم 10 لسنة 2017 الملغى.
          </p>
        </div>

        <DomesticEstimator lang="ar" />

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">ماذا يقول القانون الآن</div>
            <h2>المادة 22: قواعد المكافأة تصدر بقرار من مجلس الوزراء</h2>
            <p>تنص المادة 22 من المرسوم بقانون اتحادي رقم 9 لسنة 2022 (النافذ منذ 15 ديسمبر 2022)، بعنوان &laquo;مكافأة نهاية الخدمة&raquo;، على أن يصدر مجلس الوزراء، بناءً على اقتراح الوزير، قرار أنظمة وآليات احتساب وسداد مكافأة نهاية الخدمة للعمالة المساعدة.</p>
            <p>لا تحدد المادة عدد الأيام ولا الحد الأدنى للخدمة ولا الحد الأقصى، ولا تتناول اللائحة التنفيذية (قرار مجلس الوزراء رقم 106 لسنة 2022) المكافأة. وقد ألغت المادة 31 من المرسوم بقانون القانون الاتحادي رقم 10 لسنة 2017 بشأن عمال الخدمة المساعدة.</p>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">حقوق محددة في القانون</div>
            <h2>ما الذي تستحقه العمالة المساعدة؟</h2>
            <ul>
              <li>دفع جميع المستحقات المالية خلال <strong>10 أيام</strong> من انتهاء العقد (المادة 19).</li>
              <li>تعويض نقدي عن الإجازة السنوية غير المستخدمة يُحسب على <strong>آخر أجر</strong> (المادة 10).</li>
              <li>إجازة سنوية مدفوعة لا تقل عن <strong>30 يوماً</strong>، ويومان عن كل شهر إذا كانت الخدمة بين 6 أشهر وسنة (المادة 10).</li>
              <li>تذكرة عودة إلى البلد مرة كل سنتين عند قضاء الإجازة فيه (المادة 10).</li>
              <li>إجازة مرضية حتى 30 يوماً في السنة: 15 يوماً بأجر كامل و15 يوماً بنصف أجر (المادة 10).</li>
              <li>يوم راحة أسبوعي مدفوع وراحة يومية لا تقل عن 12 ساعة منها 8 ساعات متصلة (المادة 9).</li>
              <li>السكن والطعام والعلاج أو التأمين الصحي، والاحتفاظ بوثائقه الثبوتية (المادة 11).</li>
              <li>تذكرة العودة إذا أنهى صاحب العمل العقد لسبب لا يعود إلى العامل (المادة 20).</li>
            </ul>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">النزاعات</div>
            <h2>إذا لم تُدفع المستحقات</h2>
            <ol>
              <li><strong>تقديم شكوى إلى الوزارة</strong> التي تسعى إلى التسوية الودية (المادة 23).</li>
              <li><strong>قرار الوزارة:</strong> تفصل الوزارة في النزاعات التي لا تتجاوز قيمتها <strong>50,000 درهم</strong>، وتحيل ما يزيد على ذلك إلى المحكمة (المادة 23).</li>
              <li><strong>خلال 3 أشهر:</strong> لا تُسمع الدعوى بعد مرور 3 أشهر من انتهاء علاقة العمل، والعمال معفون من الرسوم القضائية (المادة 26).</li>
            </ol>
            <p>رقم الوزارة: <strong>600590000</strong>.</p>
            <div className="warn-box">لا توقّع على مخالصة نهائية بلغة لا تفهمها. اطلب ترجمة أولاً واحتفظ بنسخة.</div>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">أسئلة شائعة</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {domesticFaqsAr.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>

        <SourcesBox lang="ar" sources={[SOURCES.domesticLaw, SOURCES.domesticRegs, SOURCES.uaeDomestic, SOURCES.mohreServices]} />

        <Footer lang="ar" />
      </main>
    </>
  )
}

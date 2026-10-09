import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import FinalSettlementCalculator from '@/components/FinalSettlementCalculator'
import GratuityYearsTable from '@/components/GratuityYearsTable'
import SourcesBox from '@/components/SourcesBox'
import { pairAlternates } from '@/lib/i18nRoutes'
import { baseOpenGraph, faqSchema } from '@/lib/seo'
import { LAST_REVIEWED, SOURCES } from '@/lib/sources'

const EN_PATH = '/final-settlement-calculator-uae'
const URL = `https://www.uaegratuitycheck.com/ar${EN_PATH}`
const title = 'حاسبة التسوية النهائية ومستحقات نهاية الخدمة الإمارات'
const description =
  'احسب مستحقات نهاية الخدمة والتسوية النهائية في الإمارات: المكافأة والراتب وبدل الإجازات وبدل الإنذار والخصومات، مع موعد السداد خلال 14 يوماً وفق المادة 53.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: pairAlternates(EN_PATH, 'ar'),
  openGraph: { ...baseOpenGraph, locale: 'ar_AE', alternateLocale: ['en_AE'], title, description, url: URL },
}

const faqs = [
  { q: 'ما الذي تشمله التسوية النهائية في الإمارات؟', a: 'تشمل عادةً مكافأة نهاية الخدمة، والراتب المستحق حتى آخر يوم عمل، وبدل الإجازات السنوية غير المستخدمة، وبدل الإنذار إن وُجد، وبدل التذكرة أو المبالغ المستردة حسب العقد، مطروحاً منها الخصومات المسموح بها قانوناً مثل القروض والسلف.' },
  { q: 'هل التسوية النهائية هي نفسها مكافأة نهاية الخدمة؟', a: 'لا. مكافأة نهاية الخدمة جزء واحد من التسوية النهائية. التسوية النهائية هي المبلغ الكامل الذي يشمل المكافأة وباقي المستحقات والخصومات.' },
  { q: 'متى يجب على صاحب العمل دفع مستحقات نهاية الخدمة؟', a: 'تنص المادة 53 من المرسوم بقانون اتحادي رقم 33 لسنة 2021 على أن يدفع صاحب العمل الأجر وجميع المستحقات خلال 14 يوماً من تاريخ انتهاء عقد العمل.' },
  { q: 'هل تُخصم المكافأة إذا استقلت؟', a: 'لا. في القانون الحالي لا تُخفّض المكافأة بسبب الاستقالة بعد إتمام سنة خدمة. لكن إذا لم تكمل فترة الإنذار قد يُخصم بدل الأيام غير المقضية كبند منفصل.' },
  { q: 'ماذا أفعل إذا تأخر صاحب العمل في الدفع؟', a: 'يمكنك تقديم شكوى إلى وزارة الموارد البشرية والتوطين. تفصل الوزارة في المطالبات حتى 50,000 درهم (المادة 54)، ولا تُسمع الدعوى بعد مرور سنتين من تاريخ استحقاق الحق.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'حاسبة نهاية الخدمة', item: 'https://www.uaegratuitycheck.com/ar' },
        { '@type': 'ListItem', position: 2, name: 'التسوية النهائية', item: URL },
      ],
    },
    { '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: title, description, inLanguage: 'ar', dateModified: LAST_REVIEWED },
    faqSchema(faqs, `${URL}#faq`, true),
  ],
}

export default function ArabicFinalSettlementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">التسوية النهائية · قانون العمل الإماراتي · محدّث 2026</div>
          <h1>حاسبة التسوية النهائية في الإمارات 2026<br /><em>مستحقات نهاية الخدمة كاملة</em></h1>
          <p className="hero-desc">احسب كل ما يستحق لك عند انتهاء العمل في مكان واحد: مكافأة نهاية الخدمة، والراتب المتأخر، وبدل الإجازات غير المستخدمة، وبدل الإنذار أو خصمه، والتذكرة، والقروض والسلف.</p>
          <p className="hero-lang-link"><Link href={EN_PATH} hrefLang="en" lang="en">English version of this page →</Link></p>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/ar">حاسبة نهاية الخدمة</Link> › التسوية النهائية
        </nav>

        <FinalSettlementCalculator lang="ar" />

        <div className="answer-box">
          <p><strong>التسوية النهائية = مكافأة نهاية الخدمة + الراتب المتأخر + بدل الإجازات + بدل الإنذار + المستحقات الأخرى − الخصومات المسموح بها.</strong> المكافأة 21 يوماً من الأجر الأساسي عن كل سنة من السنوات الخمس الأولى، و30 يوماً عن كل سنة بعدها (المادة 51)، ويجب الدفع خلال 14 يوماً من انتهاء العقد (المادة 53).</p>
        </div>

        <div className="sec">
          <div className="card">
            <h2>كيف تُحسب التسوية النهائية؟ مثال عملي</h2>
            <p>موظف خدم 4 سنوات براتب أساسي 10,000 درهم، ولديه 12 يوم إجازة غير مستخدمة، وقضى 15 يوماً فقط من فترة إنذار مدتها 30 يوماً:</p>
            <div className="example-box">
              <div className="ex-line">الأجر اليومي: 10,000 ÷ 30 = 333.33 درهم</div>
              <div className="ex-line">المكافأة: 333.33 × 21 × 4 = 28,000 درهم</div>
              <div className="ex-line">بدل الإجازات (12 يوماً): 4,000 درهم</div>
              <div className="ex-line">راتب 10 أيام عمل في الشهر الأخير: 3,333 درهم</div>
              <div className="ex-line">خصم الإنذار غير المقضي (15 يوماً): − 5,000 درهم</div>
              <div className="ex-total">الإجمالي: 30,333 درهم</div>
            </div>
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <h2>مكافأة نهاية الخدمة حسب سنوات الخدمة</h2>
            <GratuityYearsTable lang="ar" years={[1, 2, 3, 5, 7, 10, 15, 20]} salaries={[5000, 10000, 15000]} caption="الأجر اليومي = الراتب الأساسي ÷ 30، بحد أقصى أجر سنتين (المادة 51)." />
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <h2>تحقق من هذه البنود قبل التوقيع</h2>
            <ul>
              <li><strong>الراتب الأساسي:</strong> تُحسب المكافأة على آخر راتب أساسي (المادة 51).</li>
              <li><strong>مدة الخدمة:</strong> لا يُستبعد منها إلا أيام الغياب بدون أجر.</li>
              <li><strong>الخصومات:</strong> لا يُخصم من المكافأة إلا ما يستحق على العامل بموجب القانون أو حكم قضائي. اطلب مستنداً لكل خصم.</li>
              <li><strong>موعد الدفع:</strong> خلال 14 يوماً من انتهاء العقد (المادة 53).</li>
            </ul>
            <p>لحساب المكافأة وحدها استخدم <Link href="/ar">حاسبة نهاية الخدمة</Link>، وللتفاصيل خطوة بخطوة راجع <Link href="/ar/how-it-works">كيفية حساب نهاية الخدمة</Link>.</p>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">أسئلة شائعة عن التسوية النهائية</div>
          <div className="card" style={{ padding: '0.5rem 2rem' }}>
            {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>

        <SourcesBox lang="ar" sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />
        <Footer lang="ar" />
      </main>
    </>
  )
}

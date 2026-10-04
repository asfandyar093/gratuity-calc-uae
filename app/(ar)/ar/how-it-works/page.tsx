import type { Metadata } from 'next'
import Link from 'next/link'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import GratuityYearsTable from '@/components/GratuityYearsTable'
import SourcesBox from '@/components/SourcesBox'
import { pairAlternates } from '@/lib/i18nRoutes'
import { baseOpenGraph, faqSchema } from '@/lib/seo'
import { LAST_REVIEWED, SOURCES } from '@/lib/sources'

const EN_PATH = '/how-it-works'
const URL = `https://www.uaegratuitycheck.com/ar${EN_PATH}`
const title = 'كيفية حساب نهاية الخدمة في القطاع الخاص الإمارات'
const description =
  'طريقة حساب مكافأة نهاية الخدمة في الإمارات خطوة بخطوة: الراتب الأساسي ÷ 30، و21 يوماً عن كل سنة لأول 5 سنوات ثم 30 يوماً، مع أمثلة والحد الأقصى وفق المادة 51.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: pairAlternates(EN_PATH, 'ar'),
  openGraph: { ...baseOpenGraph, locale: 'ar_AE', alternateLocale: ['en_AE'], title, description, url: URL },
}

const faqs = [
  { q: 'كيف أحسب مكافأة نهاية الخدمة في القطاع الخاص؟', a: 'اقسم الراتب الأساسي الشهري على 30 لتحصل على الأجر اليومي، ثم اضربه في 21 يوماً عن كل سنة من السنوات الخمس الأولى، وفي 30 يوماً عن كل سنة بعد ذلك. يشترط إتمام سنة خدمة متصلة على الأقل.' },
  { q: 'هل تُحسب المكافأة على الراتب الإجمالي؟', a: 'لا. تُحسب على الراتب الأساسي فقط دون البدلات مثل السكن والمواصلات، وعلى آخر راتب أساسي تقاضاه العامل.' },
  { q: 'ما الحد الأقصى لمكافأة نهاية الخدمة؟', a: 'لا يجوز أن يزيد مجموع المكافأة على أجر سنتين (المادة 51). وبحساب الراتب الأساسي يُبلغ الحد بعد نحو 25.5 سنة خدمة.' },
  { q: 'هل تُحسب كسور السنة؟', a: 'نعم. بعد إتمام السنة الأولى يستحق العامل مكافأة عن كسور السنة بنسبة ما قضاه منها في العمل.' },
  { q: 'هل تؤثر الإجازة بدون راتب على المكافأة؟', a: 'نعم. لا تدخل أيام الغياب بدون أجر في حساب مدة الخدمة.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'حاسبة نهاية الخدمة', item: 'https://www.uaegratuitycheck.com/ar' },
        { '@type': 'ListItem', position: 2, name: 'كيفية الحساب', item: URL },
      ],
    },
    { '@type': 'WebPage', '@id': `${URL}#webpage`, url: URL, name: title, description, inLanguage: 'ar', dateModified: LAST_REVIEWED },
    faqSchema(faqs, `${URL}#faq`, true),
  ],
}

export default function ArabicHowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <div className="hero">
        <div className="hero-inner">
          <div className="eyebrow">المادة 51 · المرسوم بقانون اتحادي رقم 33 لسنة 2021</div>
          <h1>كيفية حساب نهاية الخدمة في القطاع الخاص بالإمارات<br /><em>المعادلة خطوة بخطوة مع أمثلة</em></h1>
          <p className="hero-desc">شرح مبسّط لطريقة حساب مكافأة نهاية الخدمة لموظفي القطاع الخاص في الإمارات وفق قانون العمل الحالي، مع حاسبة مجانية وأمثلة بالأرقام.</p>
          <p className="hero-lang-link"><Link href={EN_PATH} hrefLang="en" lang="en">English version of this page →</Link></p>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/ar">حاسبة نهاية الخدمة</Link> › كيفية الحساب
        </nav>

        <div className="answer-box">
          <p><strong>المعادلة:</strong> الأجر اليومي = الراتب الأساسي الشهري ÷ 30. المكافأة = الأجر اليومي × 21 يوماً عن كل سنة من السنوات الخمس الأولى + الأجر اليومي × 30 يوماً عن كل سنة بعدها، بشرط إتمام سنة خدمة، وبحد أقصى أجر سنتين.</p>
        </div>

        <div className="sec">
          <div className="card">
            <h2>خطوات الحساب</h2>
            <ol>
              <li><strong>تحقق من الأهلية:</strong> يجب إتمام سنة خدمة متصلة على الأقل (المادة 51).</li>
              <li><strong>حدد الراتب الأساسي:</strong> آخر راتب أساسي دون البدلات.</li>
              <li><strong>احسب مدة الخدمة:</strong> من تاريخ الالتحاق حتى انتهاء العقد، مع استبعاد أيام الغياب بدون أجر.</li>
              <li><strong>احسب الأجر اليومي:</strong> الراتب الأساسي ÷ 30.</li>
              <li><strong>احسب أيام المكافأة:</strong> 21 يوماً × السنوات حتى 5، ثم 30 يوماً × كل سنة إضافية، وكسور السنة بالتناسب.</li>
              <li><strong>طبّق الحد الأقصى:</strong> لا تتجاوز المكافأة أجر سنتين.</li>
            </ol>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">أمثلة محلولة</div>
          <div className="two-col">
            <div className="example-box">
              <div className="ex-title">3 سنوات · راتب أساسي 6,000 درهم</div>
              <div className="ex-line">الأجر اليومي: 6,000 ÷ 30 = 200 درهم</div>
              <div className="ex-line">الأيام: 21 × 3 = 63 يوماً</div>
              <div className="ex-total">المكافأة: 12,600 درهم</div>
            </div>
            <div className="example-box">
              <div className="ex-title">8 سنوات · راتب أساسي 12,000 درهم</div>
              <div className="ex-line">الأجر اليومي: 12,000 ÷ 30 = 400 درهم</div>
              <div className="ex-line">الأيام: (21 × 5) + (30 × 3) = 195 يوماً</div>
              <div className="ex-total">المكافأة: 78,000 درهم</div>
            </div>
          </div>
        </div>

        <Calculator lang="ar" />

        <div className="sec">
          <div className="card">
            <h2>جدول المكافأة حسب سنوات الخدمة</h2>
            <GratuityYearsTable lang="ar" caption="الأجر اليومي = الراتب الأساسي ÷ 30، بحد أقصى أجر سنتين (المادة 51)." />
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <h2>ملاحظات مهمة</h2>
            <ul>
              <li>لا تُخفَّض المكافأة بسبب الاستقالة في القانون الحالي.</li>
              <li>يجب دفع جميع المستحقات خلال 14 يوماً من انتهاء العقد (المادة 53).</li>
              <li>العمالة المساعدة تخضع لقانون مختلف: راجع <Link href="/ar/gratuity-calculator/domestic-workers">مكافأة نهاية الخدمة للعمالة المساعدة</Link>.</li>
              <li>لحساب كل المستحقات استخدم <Link href="/ar/final-settlement-calculator-uae">حاسبة التسوية النهائية</Link>.</li>
            </ul>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">أسئلة شائعة</div>
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

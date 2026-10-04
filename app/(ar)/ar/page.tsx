import type { Metadata } from 'next'
import ArHomeContent from '@/components/ArHomeContent'
import { faqsAr } from '@/lib/homeFaqs'
import { baseOpenGraph, faqSchema } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/ar'
const title = 'حاسبة نهاية الخدمة الإمارات 2026 – القطاع الخاص'
const description =
  'احسب مكافأة نهاية الخدمة في الإمارات للقطاع الخاص مجاناً: 21 يوماً عن كل سنة لأول 5 سنوات ثم 30 يوماً، على الراتب الأساسي وفق المادة 51.'

// Arabic homepage. Served by the Arabic root layout (<html lang="ar" dir="rtl">)
// with Arabic-only content; hreflang pairs it with the English homepage.
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: url,
    languages: {
      en: 'https://www.uaegratuitycheck.com',
      ar: url,
      'x-default': 'https://www.uaegratuitycheck.com',
    },
  },
  openGraph: {
    ...baseOpenGraph,
    locale: 'ar_AE',
    alternateLocale: ['en_AE'],
    url,
    title,
    description,
  },
}

const arSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: 'ar',
      isPartOf: { '@id': 'https://www.uaegratuitycheck.com/#website' },
      mainEntity: { '@id': 'https://www.uaegratuitycheck.com/#calculator' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'حاسبة مكافأة نهاية الخدمة', item: url }],
    },
    faqSchema(faqsAr, `${url}#faq`, true),
  ],
}

export default function ArabicHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arSchema).replace(/</g, '\\u003c') }}
      />
      <ArHomeContent />
    </>
  )
}

import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'
import { faqsAr } from '@/lib/homeFaqs'
import { baseOpenGraph, faqSchema } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/ar'
const title = 'حاسبة مكافأة نهاية الخدمة في الإمارات 2026 — مجانية وفق قانون العمل'
const description =
  'احسب مكافأة نهاية الخدمة في الإمارات مجاناً وفق المرسوم بقانون اتحادي رقم 33 لسنة 2021: الراتب الأساسي، مدة الخدمة، الإجازة بدون راتب، والحد الأقصى بما يعادل راتب سنتين.'

// Arabic version of the homepage calculator. Same calculator and content as /,
// rendered with the Arabic copy visible on the server so it can rank for Arabic searches.
export const metadata: Metadata = {
  title: { absolute: `${title} | UAE Gratuity Check` },
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
      <HomePageContent variant="ar" />
    </>
  )
}

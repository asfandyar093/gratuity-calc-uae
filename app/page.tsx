import type { Metadata } from 'next'
import HomePageContent from '@/components/HomePageContent'
import { faqsEn } from '@/lib/homeFaqs'
import { baseOpenGraph, faqSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: { absolute: 'UAE Gratuity Calculator 2026 — Exact Payout in 30 Seconds' },
  description: 'Free UAE gratuity calculator. Enter your basic salary and dates to see exactly how much end-of-service pay you are owed under UAE labour law. Works for Dubai, Abu Dhabi, Sharjah and free zones.',
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com',
    languages: {
      en: 'https://www.uaegratuitycheck.com',
      ar: 'https://www.uaegratuitycheck.com/ar',
      'x-default': 'https://www.uaegratuitycheck.com',
    },
  },
  openGraph: {
    ...baseOpenGraph,
    url: 'https://www.uaegratuitycheck.com',
    title: 'UAE Gratuity Calculator 2026 — Free End-of-Service Calculator',
    description: 'Calculate UAE end-of-service gratuity instantly using basic salary, service period, unpaid leave, and the UAE two-year cap.',
    alternateLocale: ['ar_AE'],
  },
}

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'UAE Gratuity Calculator', item: 'https://www.uaegratuitycheck.com' },
      ],
    },
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
    faqSchema(faqsEn, 'https://www.uaegratuitycheck.com/#faq', true),
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema).replace(/</g, '\\u003c') }}
      />
      <HomePageContent variant="en" />
    </>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'UAE Gratuity Calculator 2026 — Free End-of-Service Calculator',
    template: '%s | UAE Gratuity Check',
  },
  description:
    'Free UAE gratuity calculator 2026. Estimate end-of-service gratuity under UAE labor law using basic salary, service period, unpaid leave, and the two-year cap.',
  keywords: [
    'UAE gratuity calculator',
    'gratuity calculator UAE',
    'UAE end of service calculator',
    'Dubai gratuity calculator',
    'UAE labor law gratuity',
    'UAE gratuity calculator 2026',
    'end of service calculator UAE',
    'EOSB calculator Dubai',
    'gratuity calculator Abu Dhabi',
    'gratuity calculator Sharjah',
    'MOHRE gratuity formula',
    'UAE labour law gratuity',
    'end of service benefit UAE',
    'gratuity calculator for Indian expats UAE',
    'مكافأة نهاية الخدمة',
    'حاسبة مكافأة نهاية الخدمة',
    'نهاية الخدمة الامارات',
    'حساب مكافأة نهاية الخدمة في القطاع الخاص',
    'طريقة حساب مكافأة نهاية الخدمة',
    'كيف يتم احتساب مكافأة نهاية الخدمة',
    'كيفية حساب نهاية الخدمة في القطاع الخاص',
    'حاسبة مكافأة نهاية الخدمة mohre',
    'uae new labour law 2022 gratuity',
    'gratuity UAE 2026',
  ],
  authors: [{ name: 'UAE Gratuity Check' }],
  metadataBase: new URL('https://www.uaegratuitycheck.com'),
  alternates: {
    canonical: 'https://www.uaegratuitycheck.com',
    languages: {
      'en-AE': 'https://www.uaegratuitycheck.com',
      'ar-AE': 'https://www.uaegratuitycheck.com',
      'x-default': 'https://www.uaegratuitycheck.com',
    },
  },
  openGraph: {
    title: 'UAE Gratuity Calculator 2026 — Free End-of-Service Calculator',
    description:
      'Calculate UAE end-of-service gratuity instantly using basic salary, service period, unpaid leave, and the UAE two-year cap.',
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.uaegratuitycheck.com',
    siteName: 'UAE Gratuity Check',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UAE Gratuity Calculator 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Gratuity Calculator 2026 — Free End-of-Service Calculator',
    description: 'Calculate UAE end-of-service gratuity instantly. Free, private, and updated for 2026.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://www.uaegratuitycheck.com/#website",
          "url": "https://www.uaegratuitycheck.com",
          "name": "UAE Gratuity Check",
          "description": "Free UAE gratuity calculator and UAE end-of-service calculator updated for 2026",
          "inLanguage": ["en-AE", "ar"]
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://www.uaegratuitycheck.com/#calculator",
          "name": "UAE Gratuity Calculator",
          "alternateName": [
            "Gratuity Calculator UAE",
            "UAE End of Service Calculator",
            "Dubai Gratuity Calculator"
          ],
          "url": "https://www.uaegratuitycheck.com",
          "applicationCategory": "FinanceApplication",
          "applicationSubCategory": "End of service gratuity calculator",
          "operatingSystem": "Web",
          "description": "Free UAE gratuity calculator based on Federal Decree-Law No. 33 of 2021. Estimate end-of-service gratuity using basic salary, service period, unpaid leave, and the UAE two-year cap.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "AED"
          },
          "featureList": [
            "UAE gratuity calculation",
            "UAE labor law gratuity estimate",
            "Dubai gratuity calculator",
            "Date-based service period input",
            "Unpaid leave deduction",
            "Accrual projection chart",
            "Limited and unlimited contract support"
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://www.uaegratuitycheck.com/#org",
          "name": "UAE Gratuity Check",
          "url": "https://www.uaegratuitycheck.com",
          "logo": "https://www.uaegratuitycheck.com/logo.png",
          "foundingDate": "2024",
          "description": "Provider of free UAE end-of-service gratuity calculators and guides, based on Federal Decree-Law No. 33 of 2021.",
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
          "knowsAbout": [
            "UAE Labour Law",
            "Federal Decree-Law No. 33 of 2021",
            "End-of-service gratuity calculation",
            "MOHRE regulations",
            "UAE expat employment rights"
          ]
        },
      ]
    }).replace(/</g, '\\u003c')
  }}
/>


        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JXB67T29GN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JXB67T29GN');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <Nav />
        {children}
      </body>
    </html>
  )
}

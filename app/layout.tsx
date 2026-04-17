import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'UAE Gratuity Calculator 2026 — Free EOSB End-of-Service Calculator',
    template: '%s | UAE Gratuity Check',
  },
  description:
    'Free UAE gratuity calculator 2026. Calculate your end-of-service benefit (EOSB) instantly based on Federal Decree-Law No. 33 of 2021. Covers unlimited & limited contracts. MOHRE approved formula. حاسبة مكافأة نهاية الخدمة',
  keywords: [
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
    },
  },
  openGraph: {
    title: 'UAE Gratuity Calculator 2026 — Free EOSB End-of-Service Calculator',
    description:
      'Calculate your UAE end-of-service gratuity instantly. MOHRE approved formula, updated for 2026. Free, accurate, no data stored.',
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
    title: 'UAE Gratuity Calculator 2026 — Free EOSB Calculator',
    description: 'Calculate your UAE end-of-service gratuity instantly. Free, accurate, MOHRE approved.',
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
          "description": "Free UAE end-of-service gratuity calculator updated for 2026",
          "inLanguage": ["en-AE", "ar"]
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://www.uaegratuitycheck.com/#calculator",
          "name": "UAE Gratuity Calculator 2026",
          "url": "https://www.uaegratuitycheck.com",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Web",
          "description": "Free UAE end-of-service gratuity calculator based on Federal Decree-Law No. 33 of 2021. Covers unlimited and limited contracts. MOHRE approved formula.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "AED"
          },
          "featureList": [
            "UAE gratuity calculation",
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
          "logo": "https://www.uaegratuitycheck.com/logo.png"
        },
      ]
    })
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
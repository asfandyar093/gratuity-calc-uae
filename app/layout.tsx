import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Script from 'next/script'
import { baseOpenGraph } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    default: 'UAE Gratuity Calculator 2026 — Exact Payout in 30 Seconds',
    template: '%s | UAE Gratuity Check',
  },
  description:
    'Free UAE gratuity calculator 2026. Estimate end-of-service gratuity under UAE labor law using basic salary, service period, unpaid leave, and the two-year cap.',
  authors: [{ name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com/about' }],
  metadataBase: new URL('https://www.uaegratuitycheck.com'),
  // No site-wide canonical / og:url / og:title here: pages that did not set their
  // own inherited the homepage values (wrong canonical, wrong social title).
  // Next fills og:title/og:description from each page's title/description, and
  // twitter:* from the resolved Open Graph data.
  openGraph: baseOpenGraph,
  twitter: {
    card: 'summary_large_image',
  },
  applicationName: 'UAE Gratuity Check',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    other: {
      'google-adsense-account': 'ca-pub-8322124399120159',
    },
  },
  // app/favicon.ico is picked up automatically by Next.js
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Pinch-zoom stays enabled (accessibility). Horizontal drift is fixed in CSS.
  themeColor: '#111827',
  colorScheme: 'light',
}

// Runs before first paint so Arabic visitors don't see English first and then a
// full-page reflow when React hydrates. /ar is always Arabic.
const languageBootstrap = `(function(){try{var d=document.documentElement,p=location.pathname,ar=p==='/ar'||p.indexOf('/ar/')===0,l=ar?'ar':(localStorage.getItem('site-lang')==='ar'?'ar':'en');if(ar)localStorage.setItem('site-lang','ar');d.setAttribute('data-site-lang',l);if(l==='ar'){d.lang='ar-AE';d.dir='rtl'}}catch(e){}})();`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AE" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageBootstrap }} />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8322124399120159"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
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
          "inLanguage": ["en-AE", "ar"],
          "publisher": { "@id": "https://www.uaegratuitycheck.com/#org" }
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
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.uaegratuitycheck.com/logo.png",
            "width": 500,
            "height": 500
          },
          "foundingDate": "2024",
          "description": "Provider of free UAE end-of-service gratuity calculators and guides, based on Federal Decree-Law No. 33 of 2021.",
          "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@uaegratuitycheck.com",
            "contactType": "customer support"
          },
          "sameAs": [
            "https://www.linkedin.com/company/uae-gratuity-check"
          ],
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
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        <Nav />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}

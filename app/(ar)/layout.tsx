import type { Metadata, Viewport } from 'next'
import '../globals.css'
import Nav from '@/components/Nav'
import Script from 'next/script'
import { baseOpenGraph } from '@/lib/seo'
import { siteSchema } from '@/lib/siteSchema'

// Arabic root layout: every page under /ar is served as <html lang="ar" dir="rtl">
// with Arabic-only navigation and footer. English pages use app/(site)/layout.tsx.
export const metadata: Metadata = {
  title: {
    default: 'حاسبة نهاية الخدمة الإمارات 2026',
    template: '%s',
  },
  description:
    'حاسبة مجانية لمكافأة نهاية الخدمة في الإمارات وفق المرسوم بقانون اتحادي رقم 33 لسنة 2021: الراتب الأساسي ومدة الخدمة والإجازة بدون راتب.',
  authors: [{ name: 'UAE Gratuity Check', url: 'https://www.uaegratuitycheck.com/about' }],
  metadataBase: new URL('https://www.uaegratuitycheck.com'),
  // No site-wide canonical / og:url / og:title here: pages that did not set their
  // own inherited the homepage values (wrong canonical, wrong social title).
  // Next fills og:title/og:description from each page's title/description, and
  // twitter:* from the resolved Open Graph data.
  openGraph: { ...baseOpenGraph, locale: 'ar_AE' },
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
  // Lets the fixed mobile header use env(safe-area-inset-*) on notched phones.
  viewportFit: 'cover',
  // No maximum-scale/user-scalable=no: pinch-zoom stays available (WCAG 1.4.4).
  // Automatic zooming is prevented at the source instead: the document is never
  // wider than the screen (globals.css) and form fields are >= 16px (no iOS focus zoom).
  themeColor: '#111827',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" data-site-lang="ar">
      <head>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema).replace(/</g, '\\u003c') }}
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
      <body>
        <a href="#main-content" className="skip-to-content">تخطَّ إلى المحتوى</a>
        <Nav lang="ar" />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  )
}

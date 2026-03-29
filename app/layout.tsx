import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'UAE Gratuity Calculator 2026 — Free End-of-Service EOSB Calculator',
    template: '%s | UAEGratuityCheck',
  },
  description:
    'Calculate your UAE end-of-service gratuity (EOSB) instantly. Based on Federal Decree-Law No. 33 of 2021 and MOHRE approved formula. Free, accurate, and updated for 2026.',
  keywords: [
    'UAE gratuity calculator',
    'end of service calculator UAE',
    'EOSB calculator',
    'gratuity calculator Dubai',
    'gratuity calculator Abu Dhabi',
    'MOHRE gratuity',
    'UAE labour law gratuity',
    'مكافأة نهاية الخدمة',
    'حاسبة مكافأة نهاية الخدمة',
  ],
  authors: [{ name: 'UAEGratuityCheck' }],
  openGraph: {
    title: 'UAE Gratuity Calculator 2026 — Free End-of-Service EOSB Calculator',
    description: 'Instantly calculate your UAE end-of-service benefit. MOHRE approved formula, updated for 2026.',
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.uaegratuitycheck.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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

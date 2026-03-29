import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: { default: 'UAE Gratuity Calculator 2026 — Free End-of-Service EOSB Calculator', template: '%s | GratuityCalc UAE' },
  description: 'Calculate your UAE end-of-service gratuity (EOSB) instantly. Based on Federal Decree-Law No. 33 of 2021 and MOHRE approved formula. Free, accurate, updated for 2026.',
  keywords: ['UAE gratuity calculator', 'end of service calculator UAE', 'EOSB calculator', 'gratuity calculator Dubai', 'MOHRE gratuity', 'مكافأة نهاية الخدمة'],
  openGraph: { title: 'UAE Gratuity Calculator 2026 — Free EOSB Calculator', description: 'Instantly calculate your UAE end-of-service benefit. MOHRE approved formula.', type: 'website', locale: 'en_AE' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><Nav />{children}</body>
    </html>
  )
}

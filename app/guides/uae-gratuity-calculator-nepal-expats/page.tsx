import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Nepali Expat UAE Gratuity Guide 2026 | NPR Conversion and Remittance',
  description: 'UAE gratuity guide for Nepali workers with NPR conversion, remittance planning, and labour-rights checklist.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-nepal-expats' },
  openGraph: { images: ['/expat-np-og.png'] },
}

export default function Page() {
  return <ExpatGuidePage country="Nepali" nationality="Nepali" currency="NPR" remittance="Nepali workers should compare formal remittance channels, bank transfer limits, and receiving account requirements before moving a final settlement amount. Keep documents ready in case the bank asks for source-of-funds evidence." comparison="Nepal employment protections and social security rules differ from UAE gratuity. For UAE private-sector work, the UAE employer calculates EOSB under UAE law for the period worked in the Emirates." slug="uae-gratuity-calculator-nepal-expats" taxNote="Nepali workers should confirm any declaration duties and keep final settlement records, especially when returning home permanently." />
}

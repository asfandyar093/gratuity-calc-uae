import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Egyptian Expat UAE Gratuity Guide 2026 | EGP Conversion and Final Settlement',
  description: 'UAE gratuity guide for Egyptian expats with EGP conversion, remittance planning, and comparison with Egyptian labour law.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-egypt-expats' },
  openGraph: { images: ['/expat-eg-og.png'] },
}

export default function Page() {
  return <ExpatGuidePage country="Egyptian" nationality="Egyptian" currency="EGP" remittance="Egyptian employees should compare UAE exchange houses, bank transfers, and Egyptian receiving-bank fees. If you plan to use Nasser Social Bank or another local account, check account limits and documentation before the final payroll date." comparison="Egyptian labour rules and social insurance are separate from UAE EOSB. UAE private-sector gratuity remains based on UAE basic salary, service period, and the statutory cap." slug="uae-gratuity-calculator-egypt-expats" taxNote="Egyptian tax residency can be fact-specific. Keep UAE contract, visa, settlement, and remittance records for any declaration question." />
}

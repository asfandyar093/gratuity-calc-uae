import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Bangladeshi Expat UAE Gratuity Guide 2026 | BDT Conversion and Wage Earner Account',
  description: 'UAE gratuity guide for Bangladeshi expats with BDT conversion, Wage Earner Account notes, and Bangladesh gratuity law comparison.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-bangladesh-expats' },
  openGraph: { images: ['/expat-bd-og.png'] },
}

export default function Page() {
  return <ExpatGuidePage country="Bangladeshi" nationality="Bangladeshi" currency="BDT" remittance="Bangladeshi employees should compare exchange-house routes, bank transfers, and Wage Earner Account options. Confirm the incentive or documentation requirements before transferring a large end-of-service amount." comparison="Bangladesh gratuity and provident-fund arrangements can depend on the employer and local law, while UAE gratuity is a statutory end-of-service payment based on basic salary and service period." slug="uae-gratuity-calculator-bangladesh-expats" taxNote="Bangladesh tax and declaration rules may depend on residence status and whether income is treated as foreign employment income." />
}

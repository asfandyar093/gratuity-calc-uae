import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Sri Lankan Expat UAE Gratuity Guide 2026 | LKR Conversion and Remittance',
  description: 'UAE gratuity guide for Sri Lankan expats with LKR conversion, NRFC account remittance notes, and comparison with EPF/ETF in Sri Lanka.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-sri-lanka-expats' },
  openGraph: { images: ['/expat-lk-og.png'] },
}

export default function Page() {
  return <ExpatGuidePage country="Sri Lankan" nationality="Sri Lankan" currency="LKR" remittance="Sri Lankan workers often compare bank remittance rates with exchange houses and NRFC or foreign-currency account options. Check whether you need the funds in rupees immediately or whether keeping part of the amount in foreign currency better fits your plans." comparison="Sri Lanka has EPF and ETF concepts that feel different from the UAE gratuity model. UAE gratuity is paid by the employer at the end of service as a lump sum, while Sri Lankan retirement-related systems can involve recurring contributions." slug="uae-gratuity-calculator-sri-lanka-expats" taxNote="Sri Lankan tax treatment can depend on residency and source of income, so keep your UAE employment documents and transfer records." />
}

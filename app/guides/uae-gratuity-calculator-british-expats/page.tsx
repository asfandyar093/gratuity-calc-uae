import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'British Expat UAE Gratuity Guide 2026 | GBP, HMRC and Pension Notes',
  description: 'UAE gratuity guide for British expats with GBP conversion, UAE EOSB vs UK pension notes, NI contributions, and HMRC declaration considerations.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-british-expats' },
  openGraph: { images: ['/expat-gb-og.png'] },
}

export default function Page() {
  return <ExpatGuidePage country="British" nationality="British" currency="GBP" remittance="British expats should compare AED-to-GBP bank rates, specialist FX providers, and timing if they are returning to the UK. Avoid closing the UAE bank account before the final settlement and visa cancellation process is complete." comparison="UAE gratuity is not a pension contribution. It is closer to an employer-funded end-of-service lump sum, while UK pension planning depends on workplace pensions, private pensions, and National Insurance contribution history." slug="uae-gratuity-calculator-british-expats" taxNote="HMRC treatment depends on UK tax residence, domicile, and timing. British expats should obtain advice before assuming a UAE gratuity lump sum is outside UK reporting." />
}

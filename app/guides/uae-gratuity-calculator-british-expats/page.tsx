import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'British Expat UAE Gratuity Guide 2026 | GBP Rate, HMRC & Pension Notes',
  description: 'UAE gratuity guide for British expats: convert your gratuity to GBP, understand HMRC residence rules, and see how UAE gratuity compares with a UK workplace pension.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-british-expats' },
  openGraph: { images: ['/expat-gb-og.png'] },
}

export default function Page() {
  return (
    <ExpatGuidePage
      country="British"
      nationality="British"
      slug="uae-gratuity-calculator-british-expats"
      currency="Pound Sterling"
      currencyCode="GBP"
      currencySymbol="£"
      exchangeRate={0.2035}
      rateAsOf="July 2026"
      defaultSalary="20000"
      defaultYears="4"
      intro="British professionals in the UAE are concentrated in finance, DIFC-based roles, education, and construction management. Because the UK has no equivalent lump-sum gratuity system, this guide focuses on converting your payout to sterling, understanding how UAE gratuity differs from a UK workplace pension, and the residence questions that determine whether HMRC has any interest in the payment."
      remittanceIntro="For most British expats, the transfer itself is straightforward — the bigger cost is usually the exchange-rate spread on a large one-off transfer rather than the transfer fee."
      remittanceChannels={[
        'Specialist FX providers (rather than a UAE or UK high-street bank) typically offer a tighter spread on large AED-to-GBP transfers',
        'Lock in a rate ahead of time with a forward contract if you know the transfer date in advance and want to avoid last-minute currency swings',
        'Keep your UAE bank account open until final settlement, visa cancellation, and any residual payments have fully cleared',
        'For very large amounts, some providers offer better rates in tranches rather than a single transfer — compare before committing to one method',
      ]}
      homeSchemeName="a UK workplace pension"
      homeSchemeComparison="The UK has no statutory end-of-service gratuity for private-sector employees; the closest equivalent most British workers have at home is a workplace pension, built from ongoing employer and employee contributions and invested over time, or statutory redundancy pay in specific dismissal situations. UAE gratuity is structurally different: no monthly contribution comes out of your UAE salary, there is no investment growth, and the entire entitlement is calculated once — from your basic salary and total service years — and paid as a single lump sum when your UAE employment ends. It should be treated as a one-off benefit to plan around, not as a pension replacement."
      taxNote="Whether UK tax applies to your UAE gratuity depends on your UK tax residence status under the Statutory Residence Test, not on where the money is paid. If you have remained non-UK tax resident throughout your UAE employment, gratuity earned from UAE work is generally outside UK tax; if your residence position is mixed (for example a partial UK tax year, or domicile considerations), HMRC treatment can vary."
      faqs={[
        { q: 'Do I need to declare UAE gratuity to HMRC?', a: 'It depends on your UK tax residence status, which HMRC determines using the Statutory Residence Test rather than where the payment originates. Non-UK tax residents generally do not need to declare foreign employment income, but anyone with a mixed or uncertain residence position for the relevant tax year should get advice before assuming otherwise.' },
        { q: 'Does UAE gratuity count toward my UK State Pension?', a: 'No. UAE gratuity has no connection to UK National Insurance contributions or the State Pension. If you want to protect your NI record while working abroad, look into voluntary Class 2 or Class 3 NI contributions separately.' },
        { q: 'Is UAE gratuity treated like a pension lump sum for tax purposes?', a: 'No. It is an employer-paid end-of-service benefit under UAE labour law, not a registered pension scheme payment, so UK pension lump-sum tax rules do not apply to it directly. Treat it as one-off foreign employment income for residence purposes instead.' },
        { q: 'What if I return to the UK before receiving my gratuity?', a: 'Timing matters for residence tests. If you become UK tax resident again before the gratuity is paid, your position can change. Speak with a tax adviser about split-year treatment if your return date is close to when the payment is due.' },
        { q: 'Can I keep my gratuity in AED instead of converting to GBP?', a: 'Yes, some British expats hold part of the amount in AED or USD if they plan to return to the region or want currency diversification, and convert to sterling gradually rather than all at once.' },
      ]}
    />
  )
}

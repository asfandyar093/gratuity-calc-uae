import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Bangladeshi Expat UAE Gratuity Guide 2026 | BDT Rate & Remittance',
  description: 'UAE gratuity guide for Bangladeshi expats: convert your gratuity to BDT, compare Wage Earner Account options, and see how it differs from Bangladesh Labour Act gratuity.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-bangladesh-expats' },
  openGraph: { images: ['/expat-bd-og.png'] },
}

export default function Page() {
  return (
    <ExpatGuidePage
      country="Bangladeshi"
      nationality="Bangladeshi"
      slug="uae-gratuity-calculator-bangladesh-expats"
      currency="Bangladeshi Taka"
      currencyCode="BDT"
      currencySymbol="৳"
      exchangeRate={33.56}
      rateAsOf="July 2026"
      defaultSalary="4500"
      defaultYears="4"
      intro="Bangladeshi nationals make up one of the largest expat workforces in the UAE, working across construction, retail, logistics, and domestic service. This guide covers converting your UAE gratuity to taka, choosing a remittance channel, and understanding how it compares with gratuity rules back home."
      remittanceIntro="Bangladesh Bank requires remittances to come through formal banking or licensed exchange-house channels to qualify for the government's 2.5% cash incentive on inward remittances — informal hundi transfers do not qualify and carry legal risk."
      remittanceChannels={[
        'Sonali Exchange and other licensed exchange houses with same-day BDT payout to a Bangladeshi bank branch',
        'Bank-to-bank wire transfer into your own or a family member’s Wage Earner Account (foreign currency account for non-resident Bangladeshis)',
        'Mobile-linked transfer services that deposit directly into bKash or Nagad wallets for smaller, faster transfers',
        'Compare the total cost (fee plus exchange-rate spread), not just the advertised fee — a slightly worse rate on a large gratuity payout can cost more than the transfer fee itself',
      ]}
      homeSchemeName="Bangladesh Labour Act gratuity"
      homeSchemeComparison="The Bangladesh Labour Act 2006 also provides for employer-paid gratuity in the private sector, generally scaled to length of service, and separately allows employers to run provident fund schemes with matching contributions. UAE gratuity is a single lump-sum formula (basic salary only, 21 days per year for the first five years, 30 days per year after) with no monthly employee contribution — so unlike a Bangladeshi provident fund, nothing is deducted from your UAE salary along the way; the full amount accrues and is paid by the employer at the end of service."
      taxNote="Foreign remittances sent home through official banking channels are not treated as taxable income for the recipient in Bangladesh, and your UAE gratuity itself is untaxed because the UAE has no personal income tax. If you have significant income or assets inside Bangladesh as well, keep your UAE employment and remittance records in case the National Board of Revenue asks about the source of funds."
      faqs={[
        { q: 'Do I need a Wage Earner Account to receive my UAE gratuity?', a: 'No, but it is one of the most convenient options. A Wage Earner Account lets non-resident Bangladeshis hold and remit foreign currency with fewer restrictions than a standard resident account, and some accounts offer preferential rates on inward transfers.' },
        { q: 'Is my UAE gratuity affected by Bangladesh’s provident fund rules?', a: 'No. UAE gratuity is calculated entirely under UAE law based on your UAE basic salary and service period. Any Bangladeshi provident fund from earlier domestic employment is a separate, unrelated benefit.' },
        { q: 'What happens if my UAE employer pays gratuity late?', a: 'UAE law requires payment within 14 days of your last working day. If payment is delayed, you can file a free complaint with MOHRE — see our guide on how to file a MOHRE complaint for unpaid gratuity.' },
        { q: 'Should I convert my whole gratuity to BDT immediately?', a: 'Not necessarily. If you are not returning to Bangladesh right away, some workers keep part of the amount in AED or USD to avoid taka depreciation risk, and convert in stages. This is a personal financial decision, not tax advice.' },
        { q: 'Do domestic workers from Bangladesh get the same gratuity formula?', a: 'Domestic workers are covered under Federal Law No. 10 of 2017, which uses a different flat 14-day-per-year formula rather than the standard 21/30 formula. See our dedicated domestic workers gratuity calculator for that case.' },
      ]}
    />
  )
}

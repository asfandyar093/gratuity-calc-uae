import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Sri Lankan Expat UAE Gratuity Guide 2026 | LKR Rate & Remittance',
  description: 'UAE gratuity guide for Sri Lankan expats: convert your gratuity to LKR, use NRFC accounts, and see how it compares with Sri Lanka\'s EPF and ETF.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-sri-lanka-expats' },
  openGraph: { images: ['/expat-lk-og.png'] },
}

export default function Page() {
  return (
    <ExpatGuidePage
      country="Sri Lankan"
      nationality="Sri Lankan"
      slug="uae-gratuity-calculator-sri-lanka-expats"
      currency="Sri Lankan Rupee"
      currencyCode="LKR"
      currencySymbol="Rs"
      exchangeRate={91.4}
      rateAsOf="July 2026"
      defaultSalary="4200"
      defaultYears="4"
      intro="Sri Lankans working in the UAE are concentrated in domestic work, hospitality, healthcare, and skilled trades, many recruited through the Sri Lanka Bureau of Foreign Employment (SLBFE). This guide covers converting your UAE gratuity to rupees, using NRFC accounts, and how the payout compares with Sri Lanka's EPF and ETF system."
      remittanceIntro="Sri Lanka has actively encouraged formal banking channels for worker remittances in recent years, including preferential rates for inward transfers — informal channels give up these benefits and offer no protection."
      remittanceChannels={[
        'Bank of Ceylon or People\'s Bank exchange services with direct LKR payout to a Sri Lankan account',
        'An NRFC (Non-Resident Foreign Currency) account, which lets you hold part of the gratuity in AED or USD rather than converting everything to rupees immediately',
        'Licensed money-transfer operators for smaller, faster transfers to family members',
        'Check whether your transfer qualifies for any government remittance incentive scheme currently in effect before choosing a channel',
      ]}
      homeSchemeName="Sri Lanka's EPF and ETF"
      homeSchemeComparison="Sri Lanka's Employees' Provident Fund (EPF) and Employees' Trust Fund (ETF) are contributory schemes — a percentage of salary is deducted monthly from the employee and matched by the employer, building up over the length of employment. UAE gratuity works on a completely different model: nothing is deducted from your UAE salary each month, and the entire benefit is calculated once, from your basic salary and total service period, then paid as a single lump sum by your employer when your UAE job ends. If you also have an EPF/ETF balance from earlier employment in Sri Lanka, it is entirely separate from your UAE gratuity."
      taxNote="Sri Lanka does not generally tax remittances sent home by migrant workers through official channels, and your UAE gratuity itself is untaxed because the UAE has no personal income tax. If you plan to invest the funds inside Sri Lanka, keep your UAE employment contract, final settlement sheet, and transfer receipts as proof of the source of funds."
      faqs={[
        { q: 'Does my UAE gratuity affect my Sri Lankan EPF or ETF balance?', a: 'No. They are unrelated systems. Your UAE gratuity depends only on your UAE basic salary and service period; any EPF or ETF balance from Sri Lankan employment is unaffected and remains separately claimable under its own rules.' },
        { q: 'What is an NRFC account and do I need one?', a: 'An NRFC account lets Sri Lankan migrant workers hold foreign currency in a Sri Lankan bank without immediately converting to rupees. It is optional, but useful if you want to delay conversion or plan to return abroad.' },
        { q: 'I registered through SLBFE — does that change my gratuity?', a: 'No. SLBFE registration relates to your recruitment and welfare protections as a migrant worker, not to how UAE gratuity is calculated. Your gratuity is governed entirely by UAE labour law based on your UAE basic salary and service period.' },
        { q: 'Do domestic workers from Sri Lanka get the standard 21/30 formula?', a: 'No — domestic workers are covered under Federal Law No. 10 of 2017, which uses a flat 14-day-per-year formula rather than the standard private-sector formula. Use our dedicated domestic workers calculator for that case.' },
        { q: 'What if my employer\'s final settlement figure looks too low?', a: 'Recalculate independently using your basic salary (not total package) and exact service dates with the calculator on this page or the main UAE gratuity calculator, then raise any discrepancy with HR before signing. If unresolved, MOHRE accepts free complaints.' },
      ]}
    />
  )
}

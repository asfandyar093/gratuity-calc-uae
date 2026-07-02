import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Nepali Expat UAE Gratuity Guide 2026 | NPR Rate & Remittance',
  description: 'UAE gratuity guide for Nepali workers: convert your gratuity to NPR, use formal remittance channels, and compare with Nepal\'s own gratuity fund rules.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-nepal-expats' },
  openGraph: { images: ['/expat-np-og.png'] },
}

export default function Page() {
  return (
    <ExpatGuidePage
      country="Nepali"
      nationality="Nepali"
      slug="uae-gratuity-calculator-nepal-expats"
      currency="Nepalese Rupee"
      currencyCode="NPR"
      currencySymbol="रु"
      exchangeRate={41.46}
      rateAsOf="July 2026"
      defaultSalary="3800"
      defaultYears="3"
      intro="Nepali migrant workers form a significant share of the UAE's construction, hospitality, and security workforce, most arriving through government-registered manpower agencies. This guide covers converting your UAE gratuity to Nepalese rupees, using formal remittance channels, and how it compares with Nepal's own gratuity and provident fund system."
      remittanceIntro="Nepal Rastra Bank requires that remittances be sent through licensed banks or remittance companies to be legally recognised — informal 'hundi' transfers are illegal in Nepal and offer no protection if money goes missing."
      remittanceChannels={[
        'Licensed remittance companies such as IME or Prabhu Money Transfer with direct payout to Nepali bank branches or mobile wallets',
        'Bank-to-bank wire transfer from your UAE account to a Nepali bank account in your own name',
        'Confirm your recruiting agency or manpower company has no claim on your end-of-service payment — legitimate UAE gratuity belongs entirely to you, not the agency',
        'Keep the transfer receipt and your final settlement sheet together; some Nepali banks request proof of the source of a large lump-sum deposit',
      ]}
      homeSchemeName="Nepal's Gratuity and Provident Fund under the Labour Act 2017"
      homeSchemeComparison="Nepal's Labour Act 2017 requires many employers to contribute to a Social Security Fund covering provident fund and gratuity, funded partly by monthly employer and employee contributions rather than a single lump-sum formula. UAE gratuity has no monthly contribution from either side — it is calculated once, from your UAE basic salary and total service period, and paid as a single lump sum at the end of your UAE employment. Nothing you earned or contributed toward Nepal's Social Security Fund affects your UAE gratuity calculation."
      taxNote="Nepal does not generally tax remittances that Nepali migrant workers send home through official channels, and the UAE itself has no personal income tax on gratuity. Keep your labour permit, UAE contract, and transfer records — Nepali banks and the Department of Foreign Employment can request these for large inward transfers."
      faqs={[
        { q: 'Can my recruiting agency in Nepal take a cut of my UAE gratuity?', a: 'No. Your UAE gratuity is a legal entitlement paid directly by your UAE employer and belongs entirely to you. Recruiting or manpower agencies have no legal claim on it.' },
        { q: 'Is it safe to use hundi to send my gratuity home faster?', a: 'No — hundi transfers are illegal under Nepali law and offer no recourse if the money is lost or a dispute arises. Always use a licensed bank or remittance company, even if it takes slightly longer.' },
        { q: 'Do I lose my gratuity if I leave before my contract ends?', a: 'Not automatically. If you have completed at least one year of continuous service, resignation does not reduce your UAE gratuity under the current law. Contract-specific penalties for early termination are a separate matter from gratuity.' },
        { q: 'How do I know if my employer calculated gratuity on the right salary?', a: 'Ask for a breakdown showing your basic salary separately from allowances. UAE gratuity uses only the basic salary figure in your labour contract, not your total monthly package.' },
        { q: 'What should I do if my employer refuses to pay?', a: 'File a free complaint with MOHRE, either through their hotline, app, or a service centre. You can also contact the Nepali Embassy in Abu Dhabi or the Consulate in Dubai for labour dispute support before you leave the country.' },
      ]}
    />
  )
}

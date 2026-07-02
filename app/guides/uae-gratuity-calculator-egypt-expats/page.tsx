import type { Metadata } from 'next'
import ExpatGuidePage from '@/components/ExpatGuidePage'

export const metadata: Metadata = {
  title: 'Egyptian Expat UAE Gratuity Guide 2026 | EGP Rate & Settlement',
  description: 'UAE gratuity guide for Egyptian expats: convert your gratuity to EGP, compare remittance options, and see how it differs from Egyptian social insurance end-of-service pay.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/guides/uae-gratuity-calculator-egypt-expats' },
  openGraph: { images: ['/expat-eg-og.png'] },
}

export default function Page() {
  return (
    <ExpatGuidePage
      country="Egyptian"
      nationality="Egyptian"
      slug="uae-gratuity-calculator-egypt-expats"
      currency="Egyptian Pound"
      currencyCode="EGP"
      currencySymbol="£"
      exchangeRate={13.36}
      rateAsOf="July 2026"
      defaultSalary="6000"
      defaultYears="5"
      intro="Egyptians are one of the fastest-growing expat communities in the UAE, working heavily in construction, retail, hospitality, and professional services. This guide covers converting your UAE gratuity to Egyptian pounds, remittance planning given EGP's exchange-rate volatility, and how UAE gratuity compares with Egypt's own end-of-service system."
      remittanceIntro="The EGP has moved sharply against major currencies in recent years, so timing and channel matter more for Egyptian workers than for most other nationalities — a transfer delayed by a few weeks can land a materially different pound amount."
      remittanceChannels={[
        'InstaPay and other Central Bank of Egypt-linked instant transfer rails for direct bank-to-bank delivery',
        'Licensed exchange houses in the UAE offering same-day EGP payout through partner banks such as Banque Misr or the National Bank of Egypt',
        'Traditional SWIFT bank wire for large lump sums where traceability matters more than speed',
        'Check the live interbank rate before transferring — quoted street or exchange-house rates can lag the official rate during periods of high EGP volatility',
      ]}
      homeSchemeName="Egyptian Social Insurance Law end-of-service pay"
      homeSchemeComparison="Egypt's Social Insurance and Pensions Law (Law No. 148 of 2019) centers on compulsory, contributory social insurance rather than a single employer-paid lump sum — both employer and employee contribute monthly toward pension and end-of-service benefits. UAE gratuity works differently: there are no monthly contributions from your salary, no separate insurance authority, and the entire amount is calculated once, by the employer, from your basic salary and service period, then paid out at the end of your UAE employment."
      taxNote="Egypt does not generally tax remittances sent home by Egyptians working abroad, and the UAE itself charges no personal income tax on your gratuity. If you also earn income inside Egypt or plan to invest the remitted amount there, keep your UAE contract, final settlement sheet, and transfer receipts in case the Egyptian Tax Authority asks about the source of funds."
      faqs={[
        { q: 'Why does the EGP amount in my calculation change so quickly?', a: 'The Egyptian pound has been more volatile than most currencies in this guide, so the AED-to-EGP rate can shift meaningfully within days. Always check a live rate immediately before transferring rather than relying on a rate you saw earlier.' },
        { q: 'Is UAE gratuity linked to Egyptian social insurance contributions?', a: 'No. They are entirely separate systems. Your UAE gratuity depends only on your UAE basic salary and UAE service period; any Egyptian social insurance record from domestic employment is unaffected.' },
        { q: 'What if my employer says gratuity is optional for foreign hires?', a: 'It is not optional for eligible private-sector employees regardless of nationality. If you have completed at least one year of continuous service, you are entitled to gratuity under Federal Decree-Law No. 33 of 2021. File a MOHRE complaint if it is refused.' },
        { q: 'Should I transfer my gratuity in one go or in parts?', a: 'Many Egyptian workers split large transfers over a few weeks to average out EGP exchange-rate movements rather than converting the full amount on a single day. This is a personal risk decision, not financial advice.' },
        { q: 'Does DIFC or ADGM employment change anything for Egyptian workers?', a: 'Yes, if you work in DIFC your end-of-service benefit runs through the DEWS savings scheme instead of standard gratuity, and ADGM has its own framework. Check our DIFC and ADGM calculators if either applies to you.' },
      ]}
    />
  )
}

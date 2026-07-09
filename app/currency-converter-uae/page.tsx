import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import CurrencyConverterCalculator from '@/components/CurrencyConverterCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'
import { CURRENCIES, RATES_AS_OF } from '@/lib/exchangeRates'

const url = 'https://www.uaegratuitycheck.com/currency-converter-uae'

export const metadata: Metadata = {
  title: 'AED Currency Converter 2026 | UAE Dirham to 10 Currencies',
  description: 'Convert AED to INR, PKR, PHP, GBP, and 6 more currencies. Free UAE dirham converter for comparing salary offers, remittances, and budgeting — updated for July 2026.',
  alternates: { canonical: url },
  openGraph: {
    title: 'AED Currency Converter 2026',
    description: 'Convert UAE dirhams to INR, PKR, PHP, GBP, EUR and more — built for expats comparing salary offers and sending money home.',
    url,
    images: ['/currency-converter-uae-og.png'],
  },
}

const faq: [string, string][] = [
  ['Is the UAE dirham (AED) pegged to a currency?', 'Yes. The UAE Central Bank has pegged the dirham to the US dollar at a fixed rate of 1 USD = 3.6725 AED since November 1997. The peg does not move day to day, which is why AED/USD is always the same rate while AED against other currencies like INR or PKR still fluctuates as those currencies move against the dollar.'],
  ['How often should I check the rate before sending money home?', 'Check the live rate right before you send, not days in advance. Exchange rates for currencies like INR, PKR, and PHP can move meaningfully within a single week, so a rate you saw on Monday may not match what your bank or exchange house offers on Friday.'],
  ['What is the cheapest way to send money from the UAE?', 'There is no single cheapest option for everyone — it depends on the amount, the destination, and how fast you need it there. In general, exchange houses tend to offer more competitive exchange rates than bank wires for cash pickup, while transfer apps (such as Wise, Remitly, or similar fintech services) often combine a competitive rate with lower fixed fees for bank-to-bank transfers. Compare the total amount the recipient gets, not just the advertised fee.'],
  ['Does my UAE bank give a worse rate than exchange houses?', 'Typically, yes. UAE banks usually build a wider margin into their exchange rate for international transfers compared to dedicated exchange houses or remittance apps, even when the bank advertises "no transfer fee". Always compare the exchange rate itself, not just the fee, since the rate margin is often where most of the cost is hidden.'],
  ['Why did my remittance amount change between visits to this page?', 'The rates on this page are indicative and updated periodically — they are not a live feed. Real exchange rates move throughout the trading day, so the amount your bank or exchange house actually offers at the time of transfer will differ slightly from what you saw here earlier.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Currency Converter',
    url,
    description: 'Free AED currency converter for UAE expats — convert dirhams to INR, PKR, PHP, BDT, LKR, NPR, EGP, GBP, EUR, and USD for salary comparisons, remittances, and budgeting.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
      { '@type': 'ListItem', position: 2, name: 'Calculators', item: 'https://www.uaegratuitycheck.com/gratuity-calculator' },
      { '@type': 'ListItem', position: 3, name: 'Currency Converter', item: url },
    ],
  },
]

export default function CurrencyConverterPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Currency Converter</div>
          <h1>AED Currency Converter 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>Convert UAE dirhams to and from 10 major currencies — useful for comparing salary offers, budgeting, or checking how far a remittance home will stretch.</p>
        </div>

        <CurrencyConverterCalculator />

        <div className="card">
          <h2>Why the UAE Dirham (AED) is a stable currency</h2>
          <p>The UAE Central Bank has pegged the dirham to the US dollar at a fixed rate of 1 USD = 3.6725 AED since November 1997. Unlike a floating currency, this peg does not move with daily market trading — the AED/USD rate is always the same, which is one reason the UAE is seen as a financially stable place to earn and hold savings.</p>
          <p>That stability against the dollar does not mean stability against every other currency. Because the dirham tracks the dollar, AED still moves against currencies like the Indian rupee, Pakistani rupee, or Philippine peso whenever those currencies strengthen or weaken against the US dollar. So while your AED salary itself does not lose value against the dollar, what it converts to in your home currency can still shift from month to month.</p>
          <p>The table below shows the approximate rate for 1 AED against each currency as of {RATES_AS_OF}, based on the same reference rates used in the converter above.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Code</th>
                  <th>Approx. rate per 1 AED</th>
                </tr>
              </thead>
              <tbody>
                {CURRENCIES.map((c) => (
                  <tr key={c.code}>
                    <td>{c.flag} {c.name}</td>
                    <td>{c.code}</td>
                    <td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>{c.symbol} {c.perAed.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>

        <div className="card">
          <h2>Related calculators</h2>
          <p>Also check the <Link href="/salary-calculator">UAE salary calculator</Link>, the <Link href="/">UAE gratuity calculator</Link>, the <Link href="/cost-of-living-calculator-uae">cost of living calculator</Link>, and read <Link href="/blog/best-way-to-send-money-home-from-uae-2026">best way to send money home from the UAE in 2026</Link>.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: labour rights</span>
              <small>Official worker-rights information for UAE private-sector employees.</small>
            </a>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

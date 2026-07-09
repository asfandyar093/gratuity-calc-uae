import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import SavingsGoalCalculator from '@/components/SavingsGoalCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'

const url = 'https://www.uaegratuitycheck.com/savings-goal-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Savings Goal Calculator 2026 | How Long to Reach Any Target',
  description: 'Free UAE savings goal calculator. Plan a home down payment, car, or emergency fund — see exactly how long it takes to hit your target using real UAE bank rates.',
  alternates: { canonical: url },
  openGraph: {
    title: 'UAE Savings Goal Calculator 2026',
    description: 'See how long it takes to reach any savings goal in the UAE — down payment, car, emergency fund — using real 2026 bank and fund rates.',
    url,
    images: ['/savings-goal-calculator-uae-og.png'],
  },
}

const faq: [string, string][] = [
  ['What is a realistic savings timeline for a home down payment in Dubai?', 'A 20% down payment on a JVC studio around AED 700,000 is roughly AED 140,000. Saving AED 3,000/month in a 4.5% fixed deposit gets you there in a little under 4 years; AED 5,000/month in a 6% high-yield salary-linked account gets you there in around 2 years and a few months. Use the calculator above with your own numbers for an exact figure.'],
  ['Is a UAE fixed deposit better than a savings account?', 'It depends on how soon you need the money. Fixed deposits lock your funds for a set term (often 3–24 months) in exchange for a higher, guaranteed rate — typically 2.75–4.75% p.a. A flexible savings account gives instant access with a lower rate around 4%, or up to 6.25% if it is salary-linked. If you will not touch the money before the term ends, the FD usually wins.'],
  ['How much of my UAE salary should I save each month?', 'A common rule of thumb is 20–30% of take-home pay, adjusted for your rent and family situation. If that feels out of reach, start with a fixed amount you can automate on salary day — even AED 500–1,000/month compounds meaningfully over a few years, and you can raise the amount at your next salary review.'],
  ['Can I keep my UAE savings after I leave the country?', 'In many cases, yes. UAE banks generally allow non-resident accountholders to keep existing savings accounts, fixed deposits, and similar products open and manage them online after moving away, though rules and required documentation vary by bank. Confirm your specific bank\'s non-resident policy before you relocate, and update your address and contact details.'],
  ['Does the UAE tax interest on my savings?', 'No. The UAE does not levy personal income tax, so interest, profit, or investment returns earned by individuals are not taxed. This applies to savings accounts, fixed deposits, and personal investment gains — one of the genuine financial advantages of living and saving in the UAE compared with many home countries.'],
  ['Should I use this calculator or the gratuity investment calculator?', 'Use this Savings Goal Calculator when you are building toward a specific target from monthly contributions — a down payment, car, or emergency fund. If you already have a lump sum, such as an end-of-service gratuity payout, and want to project how it grows over time, use the gratuity investment calculator instead.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Savings Goal Calculator',
    url,
    description: 'Free UAE savings goal calculator for planning how long it takes to reach any savings target using real UAE bank and fund rates.',
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
      { '@type': 'ListItem', position: 3, name: 'Savings Goal Calculator', item: url },
    ],
  },
]

export default function SavingsGoalPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Savings Goal</div>
          <h1>UAE Savings Goal Calculator 2026</h1>
          <LastUpdated date="July 2026" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>Set a savings goal — a home down payment, a car, an emergency fund — and see exactly how many months it will take to get there based on your starting amount, monthly contribution, and real UAE savings rates.</p>
        </div>

        <SavingsGoalCalculator />

        <div className="card">
          <h2>Where should UAE expats keep savings in 2026?</h2>
          <p>Where you park your savings while working toward a goal has a real effect on how fast you get there — and the UAE offers several options, most of which are effectively risk-free compared to markets. Fixed deposits at UAE banks currently pay roughly 2.75–4.75% p.a. depending on the bank and tenure. As examples, Sharjah Islamic Bank&apos;s MaxPlus product has offered up to around 4.25–4.4% for an 18-month term, while Dubai Islamic Bank has offered around 3.95% for a 12-month term — rates move with the market, so always check the current published rate before committing.</p>
          <p>High-yield savings accounts sit at the other end: many UAE banks offer salary-linked savings products paying up to around 6–6.25% p.a. when your monthly salary is transferred into that account, versus roughly 4% on the same account with no salary-transfer condition. If your salary is already going into a UAE bank, a salary-linked saver is usually the easiest upgrade available with zero extra effort.</p>
          <p>Global index funds have historically returned around 7–10% p.a. over long periods, well above any bank product — but unlike a fixed deposit, that return is not guaranteed and your balance can fall in bad years. Index funds suit longer time horizons (5+ years) where you can ride out volatility, not a goal you need to hit by a fixed date next year.</p>
          <p>One advantage applies to all of these: the UAE has no personal income tax, so 100% of the interest, profit, or investment return you earn stays yours. There is no tax deduction to plan around, which is a genuine edge over saving the same amount in many expats&apos; home countries.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Option</th><th>Typical Rate</th><th>Risk</th><th>Liquidity</th></tr>
              </thead>
              <tbody>
                <tr><td>Flexible savings account</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~4% p.a.</td><td>None — capital guaranteed</td><td>Instant access</td></tr>
                <tr><td>Salary-linked high-yield savings</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~6–6.25% p.a.</td><td>None — capital guaranteed</td><td>Instant access, salary transfer required</td></tr>
                <tr><td>Fixed deposit (12–18 months)</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~2.75–4.75% p.a.</td><td>None — capital guaranteed</td><td>Locked for term, early-exit penalty</td></tr>
                <tr className="hl"><td>Global index fund / ETF</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~7–10% p.a. (historical avg)</td><td>Market risk — value can fall</td><td>High, but best for 5+ year goals</td></tr>
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
          <p>Already have a gratuity lump sum? Use the <Link href="/gratuity-investment-calculator">gratuity investment calculator</Link> instead to project its growth. Otherwise, check your <Link href="/salary-calculator">UAE salary calculator</Link> to see your take-home pay, your <Link href="/">UAE gratuity calculator</Link> to estimate your end-of-service benefit, or read <Link href="/blog/how-to-save-your-first-aed-100000-in-uae">how to save your first AED 100,000 in the UAE</Link> for a practical step-by-step plan.</p>
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

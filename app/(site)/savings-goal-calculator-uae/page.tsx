import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import LastUpdated from '@/components/LastUpdated'
import SavingsGoalCalculator from '@/components/SavingsGoalCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/savings-goal-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Savings Goal Calculator 2026: Time to Reach a Target',
  description: 'Free UAE savings goal calculator. Plan a home down payment, car or emergency fund and see how many months it takes to reach your target.',
  alternates: { canonical: url },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Savings Goal Calculator 2026',
    description: 'See how long it takes to reach any savings goal in the UAE, down payment, car, emergency fund, using your own monthly savings and an example return.',
    url,
    images: ['/savings-goal-calculator-uae-og.png'],
  },
}

const faq: [string, string][] = [
  ['Is a UAE fixed deposit better than a savings account?', 'It depends on how soon you need the money. A fixed deposit locks your money for a set term in exchange for a fixed rate, and breaking it early usually costs you some of the return. A savings account lets you take money out at any time but its rate can change. If you might need the money before the term ends, flexibility is usually worth more than a slightly higher rate.'],
  ['How much of my UAE salary should I save each month?', 'A common rule of thumb is 20 to 30% of take-home pay, adjusted for your rent and family situation. If that feels out of reach, start with a fixed amount you can automate on salary day, even AED 500 to 1,000/month compounds meaningfully over a few years, and you can raise the amount at your next salary review.'],
  ['Can I keep my UAE savings after I leave the country?', 'In many cases, yes. UAE banks generally allow non-resident accountholders to keep existing savings accounts, fixed deposits, and similar products open and manage them online after moving away, though rules and required documentation vary by bank. Confirm your specific bank\'s non-resident policy before you relocate, and update your address and contact details.'],
  ['Does the UAE tax interest on my savings?', 'No. The UAE does not levy personal income tax, so interest, profit, or investment returns earned by individuals are not taxed. This applies to savings accounts, fixed deposits, and personal investment gains, one of the genuine financial advantages of living and saving in the UAE compared with many home countries.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Savings Goal Calculator',
    url,
    description: 'Free UAE savings goal calculator for planning how long it takes to reach any savings target from monthly contributions.',
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
          <p>Set a savings goal (a home down payment, a car, an emergency fund) and see exactly how many months it will take to get there based on your starting amount, monthly contribution, and the return you expect.</p>
        </div>

        <SavingsGoalCalculator />

        <div className="card">
          <h2>How the calculator works</h2>
          <p>Each month the calculator grows the balance by one twelfth of the annual return you chose, then adds your monthly contribution. It repeats this until the balance reaches your goal, so the result is the number of months of steady saving at that rate. It does not include fees, and real returns change from month to month.</p>
          <p>The return options are example rates, not quotes from any bank or fund. Savings accounts, fixed deposits and investment products in the UAE all set their own rates, and those rates move with interest rates. Before you rely on a figure, check the rate the provider publishes on the day you open the account, and type it into the custom rate box.</p>
          <h3>A worked example</h3>
          <p>Say you want an emergency fund of AED 30,000, you already have AED 5,000 and you can save AED 1,500 a month. At 0% the gap of AED 25,000 takes 17 months (16 full months leaves you AED 1,000 short). A small positive return shortens that by a little: the higher the return and the longer the timeline, the bigger the effect. For short goals, the monthly amount matters far more than the rate.</p>
          <p>The UAE has no personal income tax, so interest or profit on personal savings is not taxed in the UAE. Your home country may see it differently if you are still tax resident there.</p>
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
          <p>Already have a gratuity lump sum? Read how the <Link href="/blog/uae-end-of-service-savings-scheme">UAE end of service savings scheme</Link> works before deciding where to keep it. You can also check the <Link href="/salary-calculator">UAE salary calculator</Link> to see your take-home pay and the <Link href="/">UAE gratuity calculator</Link> to estimate your end of service benefit.</p>
        </div>

        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
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

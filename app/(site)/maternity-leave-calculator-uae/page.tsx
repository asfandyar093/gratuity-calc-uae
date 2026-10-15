import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedCalculators from '@/components/RelatedCalculators'
import AuthorBox from '@/components/AuthorBox'
import SourcesBox from '@/components/SourcesBox'
import { SOURCES } from '@/lib/sources'
import LastUpdated from '@/components/LastUpdated'
import MaternityLeaveCalculator from '@/components/MaternityLeaveCalculator'
import SchemaMarkup from '@/components/SchemaMarkup'
import { baseOpenGraph } from '@/lib/seo'

const url = 'https://www.uaegratuitycheck.com/maternity-leave-calculator-uae'

export const metadata: Metadata = {
  title: 'UAE Maternity Leave Calculator 2026 | 60 Days Pay Breakdown',
  description: 'Calculate UAE maternity leave pay: 45 days at full pay plus 15 days at half pay under Article 30. See your daily rate, total pay and return dates.',
  alternates: { canonical: url },
  openGraph: {
    ...baseOpenGraph,
    title: 'UAE Maternity Leave Calculator 2026',
    description: 'Calculate your maternity leave pay under UAE Labour Law, 45 days full pay, 15 days half pay.',
    url,
  },
}

const faq: [string, string][] = [
  ['Do I need a minimum length of service to get full maternity pay?', 'No. Under the current law, the 60-day maternity leave (45 days full pay, 15 days half pay) applies regardless of how long you have worked for your employer, unlike the older law which tied full pay to service length.'],
  ['Can I take extra leave if I have pregnancy-related complications?', 'Yes. With a medical certificate, an employee can take up to 45 additional days of unpaid leave for illness arising from pregnancy or childbirth, on top of the standard 60-day paid leave.'],
  ['Do I get paid breaks after returning to work?', 'Yes. For six months after returning from maternity leave, mothers are entitled to two paid nursing breaks of up to half an hour each per working day.'],
  ['Does maternity leave affect my gratuity calculation?', 'No. Maternity leave is paid leave and does not count as unpaid leave, so it does not reduce your service period for gratuity purposes.'],
  ['What if I have a miscarriage or stillbirth?', 'Maternity leave entitlement generally still applies if the pregnancy has passed a set number of months as defined by UAE law and supported by a medical certificate, confirm the specifics with HR or MOHRE for your situation.'],
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'UAE Maternity Leave Calculator',
    url,
    description: 'Free UAE maternity leave calculator for estimating the 45-day full-pay and 15-day half-pay periods under Article 30 of Federal Decree-Law No. 33 of 2021.',
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
      { '@type': 'ListItem', position: 3, name: 'Maternity Leave Calculator', item: url },
    ],
  },
]

export default function MaternityLeavePage() {
  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › Calculators › Maternity Leave</div>
          <h1>UAE Maternity Leave Calculator 2026</h1>
          <LastUpdated date="2026-10-15" />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>By <Link href="/about" style={{ color: 'var(--green-dark)', fontWeight: 600 }}>Asfandyar Khan</Link>, UAE Gratuity Check</p>
          <p>See the pay breakdown for your 60 day UAE maternity leave, plus the unpaid extension for pregnancy related illness.</p>
        </div>

        <MaternityLeaveCalculator />

        <div className="card">
          <h2>How UAE maternity leave pay works</h2>
          <p>Under Article 30 of Federal Decree-Law No. 33 of 2021, a female employee is entitled to 60 days of maternity leave: the first 45 days at full wage and the next 15 days at half wage. Article 30 sets no minimum length of service for this leave. The leave is available if the delivery takes place six months or more after the start of pregnancy, whether the baby is born alive or not, and it can start from the last day of the month before the expected birth, with a medical certificate.</p>
          <p>If sickness caused by pregnancy or childbirth, in the mother or the child, stops her returning to work, she may be absent without pay for up to 45 more days, continuous or intermittent, with a medical certificate. That unpaid period is not counted in the service used for gratuity. For a sick child who needs a constant companion, Article 30(4) gives 30 days at full pay after maternity leave, and she may extend it by 30 days unpaid.</p>
          <p>After returning, and for up to six months from delivery, she is entitled to one or two breaks a day to breastfeed, not exceeding an hour in total. Article 30(8) says an employer cannot end her service because of pregnancy, maternity leave or absence under the article. Ask HR which wage figure your company uses for the paid days, since gratuity uses basic wage only. The <Link href="/how-to-calculate-gratuity-uae">gratuity formula page</Link> shows how service is counted.</p>
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


        <div className="card article-links-card">
          <h2>Official references</h2>
          <div className="article-link-list">
            <a className="article-link-item" href="https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-rights" target="_blank" rel="noopener noreferrer">
              <span>UAE Government: labour rights</span>
              <small>Official worker-rights information for UAE private-sector employees.</small>
            </a>
            <a className="article-link-item" href="https://mohre.gov.ae" target="_blank" rel="noopener noreferrer">
              <span>MOHRE: Ministry of Human Resources and Emiratisation</span>
              <small>Official UAE ministry responsible for labour law, complaints, and private-sector employment regulation.</small>
            </a>
          </div>
        </div>

        <SourcesBox sources={[SOURCES.labourLaw, SOURCES.uaeEosb]} />
        <AuthorBox />
        <RelatedCalculators path="/maternity-leave-calculator-uae" />
        <Footer />
      </main>
    </>
  )
}

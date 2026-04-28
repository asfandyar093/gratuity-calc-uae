import Link from 'next/link'
import Footer from '@/components/Footer'
import IndustryCalculator from '@/components/IndustryCalculator'

export interface FreeZonePageData {
  name: string
  shortName: string
  href: string
  badge: string
  title: string
  description: string
  defaultSalary: string
  defaultYears: string
  theme: string
  formulaNote: string
  rules: string[]
  examples: { role: string; salary: number; years: number }[]
  warning?: string
}

function fmtAED(value: number) {
  return 'AED ' + Math.round(value).toLocaleString('en-AE')
}

function calcStandard(salary: number, years: number) {
  const daily = salary / 30
  const days = years <= 5 ? 21 * years : 21 * 5 + 30 * (years - 5)
  return Math.min(daily * days, salary * 24)
}

const freeZoneLinks = [
  { label: 'JAFZA gratuity calculator', href: '/calculate-jafza-gratuity' },
  { label: 'DIFC gratuity / DEWS calculator', href: '/calculate-difc-gratuity' },
  { label: 'ADGM gratuity calculator', href: '/calculate-adgm-gratuity' },
  { label: 'Sharjah Airport Free Zone gratuity calculator', href: '/calculate-sharjah-airport-free-zone-gratuity' },
]

export default function FreeZoneCalculatorPage({ data }: { data: FreeZonePageData }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
          { '@type': 'ListItem', position: 2, name: data.shortName, item: `https://www.uaegratuitycheck.com${data.href}` },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: data.title,
        url: `https://www.uaegratuitycheck.com${data.href}`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="hero" style={{ background: data.theme }}>
        <div className="hero-inner">
          <div className="eyebrow">{data.badge}</div>
          <h1>{data.title}<br /><em>{data.shortName} End-of-Service Calculator</em></h1>
          <p className="hero-desc">{data.description}</p>
          <div className="pills">
            <span className="pill">Basic salary only</span>
            <span className="pill">PDF result download</span>
            <span className="pill">Updated 2026</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator">Calculators</Link> › <span>{data.shortName}</span>
        </nav>

        {data.warning && <div className="warn-box">{data.warning}</div>}

        <IndustryCalculator
          defaultSalary={data.defaultSalary}
          defaultYears={data.defaultYears}
          defaultContract="limited"
          sectorLabel={`${data.shortName} Gratuity Calculator`}
          sectorEmoji="🏢"
        />

        <div className="sec">
          <div className="card">
            <div className="badge bg-blue">FREE ZONE RULES</div>
            <h2>How gratuity works in {data.name}</h2>
            <p>{data.formulaNote}</p>
            <ul>
              {data.rules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </div>
        </div>

        <div className="sec">
          <div className="sec-hd">Example {data.shortName} gratuity calculations</div>
          <div className="two-col">
            {data.examples.map((example) => (
              <div className="example-box" key={example.role}>
                <div className="ex-title">{example.role.toUpperCase()}</div>
                <div className="ex-line">Basic salary: {fmtAED(example.salary)}/month</div>
                <div className="ex-line">Service period: {example.years} years</div>
                <div className="ex-line">Formula: {example.years <= 5 ? '21 days per year' : '21 days for first 5 years + 30 days after'}</div>
                <div className="ex-total">Estimated gratuity: {fmtAED(calcStandard(example.salary, example.years))}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">INTERNAL LINKS</div>
            <h2>Compare other UAE free-zone gratuity calculators</h2>
            <div className="three-col" style={{ marginTop: '1rem' }}>
              {freeZoneLinks.filter((link) => link.href !== data.href).map((link) => (
                <Link className="mini-card" href={link.href} key={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3>{link.label}</h3>
                  <p>Open the dedicated calculator and compare the notes before you sign a final settlement.</p>
                </Link>
              ))}
            </div>
            <div className="info-box" style={{ marginTop: '1rem' }}>
              For dispute steps, read <Link href="/blog/how-to-dispute-gratuity-uae">how to dispute a gratuity calculation</Link> or <Link href="/blog/how-to-file-mohre-complaint">how to file a MOHRE complaint</Link>.
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

import type { ReactNode } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import FaqItem from '@/components/FaqItem'
import IndustryCalculator from '@/components/IndustryCalculator'
import SourcesBox from '@/components/SourcesBox'
import { breadcrumbSchema, faqSchema } from '@/lib/seo'
import { calcByMethod, type GratuityMethod } from '@/lib/gratuityMethods'
import type { Source } from '@/lib/sources'

export interface FreeZonePageData {
  name: string
  shortName: string
  href: string
  badge: string
  /** Visible H1 (first line). */
  title: string
  description: string
  defaultSalary: string
  defaultYears: string
  theme: string
  formulaNote: string
  rules: string[]
  examples: { role: string; salary: number; years: number }[]
  warning?: string
  method?: GratuityMethod
  sources?: Source[]
  faqs?: { q: string; a: string }[]
  /** Optional answer box shown under the breadcrumb. */
  answer?: string
}

function fmtAED(value: number) {
  return 'AED ' + Math.round(value).toLocaleString('en-US')
}

const freeZoneLinks = [
  { label: 'JAFZA gratuity calculator', href: '/calculate-jafza-gratuity' },
  { label: 'DMCC gratuity calculator', href: '/calculate-dmcc-gratuity' },
  { label: 'DIFC gratuity & DEWS calculator', href: '/calculate-difc-gratuity' },
  { label: 'ADGM gratuity calculator', href: '/calculate-adgm-gratuity' },
  { label: 'Sharjah Airport Free Zone gratuity calculator', href: '/calculate-sharjah-airport-free-zone-gratuity' },
]

export default function FreeZoneCalculatorPage({ data, children, calculator }: { data: FreeZonePageData; children?: ReactNode; calculator?: ReactNode }) {
  const method = data.method ?? 'federal'
  const url = `https://www.uaegratuitycheck.com${data.href}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Gratuity calculators', path: '/gratuity-calculator' },
        { name: data.shortName, path: data.href },
      ]),
      {
        '@type': 'SoftwareApplication',
        name: `${data.shortName} Gratuity Calculator`,
        url,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description: data.description,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'AED' },
      },
      ...(data.faqs?.length ? [faqSchema(data.faqs, `${url}#faq`, true)] : []),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      <div className="hero" style={{ background: data.theme }}>
        <div className="hero-inner">
          <div className="eyebrow">{data.badge}</div>
          <h1>{data.title}<br /><em>{data.shortName} end-of-service calculator</em></h1>
          <p className="hero-desc">{data.description}</p>
          <div className="pills">
            <span className="pill">Basic salary only</span>
            <span className="pill">PDF result download</span>
            <span className="pill">Reviewed October 2026</span>
          </div>
        </div>
      </div>

      <main className="page-wrapper">
        <nav className="breadcrumb" style={{ marginTop: '1.5rem' }}>
          <Link href="/">UAE Gratuity Calculator</Link> › <Link href="/gratuity-calculator">Calculators</Link> › <span>{data.shortName}</span>
        </nav>

        {data.answer && <div className="answer-box"><p>{data.answer}</p></div>}
        {data.warning && <div className="warn-box">{data.warning}</div>}

        {calculator ?? (
          <IndustryCalculator
            defaultSalary={data.defaultSalary}
            defaultYears={data.defaultYears}
            sectorLabel={`${data.shortName} Gratuity Calculator`}
            sectorEmoji="🏢"
            method={method}
          />
        )}

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

        {data.examples.length > 0 && (
          <div className="sec">
            <div className="sec-hd">Example {data.shortName} gratuity calculations</div>
            <div className="two-col">
              {data.examples.map((example) => {
                const g = calcByMethod(method, example.salary, example.years)
                return (
                  <div className="example-box" key={example.role}>
                    <div className="ex-title">{example.role.toUpperCase()}</div>
                    <div className="ex-line">Basic salary: {fmtAED(example.salary)}/month</div>
                    <div className="ex-line">Service period: {example.years} years</div>
                    <div className="ex-line">Daily wage: AED {g.daily.toFixed(2)} × {Math.round(g.days)} days</div>
                    <div className="ex-total">Estimated gratuity: {fmtAED(g.amount)}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {children}

        {data.faqs && data.faqs.length > 0 && (
          <div className="sec">
            <div className="sec-hd">{data.shortName} gratuity FAQs</div>
            <div className="card" style={{ padding: '0.5rem 2rem' }}>
              {data.faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        )}

        {data.sources && data.sources.length > 0 && <SourcesBox sources={data.sources} />}

        <div className="sec">
          <div className="card">
            <div className="badge bg-teal">OTHER FREE ZONES</div>
            <h2>Compare other UAE free-zone gratuity calculators</h2>
            <div className="three-col" style={{ marginTop: '1rem' }}>
              {freeZoneLinks.filter((link) => link.href !== data.href).map((link) => (
                <Link className="mini-card" href={link.href} key={link.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3>{link.label}</h3>
                  <p>Open the dedicated calculator and compare the rules before you sign a final settlement.</p>
                </Link>
              ))}
            </div>
            <div className="info-box" style={{ marginTop: '1rem' }}>
              Unpaid or short-paid? Read <Link href="/blog/how-to-file-mohre-complaint">how to file a MOHRE complaint</Link> (mainland and federal-law free zones).
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

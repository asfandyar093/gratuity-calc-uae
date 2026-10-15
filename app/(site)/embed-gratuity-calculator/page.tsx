import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CopySnippet from '@/components/CopySnippet'
import { baseOpenGraph, breadcrumbSchema, faqSchema } from '@/lib/seo'

const URL_ = 'https://www.uaegratuitycheck.com/embed-gratuity-calculator'

export const metadata: Metadata = {
  title: 'Embed the UAE Gratuity Calculator on Your Website',
  description:
    'Add a free UAE end of service gratuity calculator to your site with one line of code. No sign up, no ads, responsive, with a simple attribution link.',
  alternates: { canonical: URL_ },
  openGraph: { ...baseOpenGraph, url: URL_ },
}

const snippet = `<iframe src="https://www.uaegratuitycheck.com/embed/gratuity" title="UAE gratuity calculator" width="100%" height="620" style="border:0;max-width:520px" loading="lazy"></iframe>
<p>Gratuity calculator by <a href="https://www.uaegratuitycheck.com/">UAE Gratuity Check</a></p>`

const faqs = [
  {
    q: 'Is the embed free?',
    a: 'Yes. There is no sign up and no fee. The only condition is that you leave the attribution link in place, both the one inside the calculator and the line under the code.',
  },
  {
    q: 'What does the embedded calculator cover?',
    a: 'It estimates private sector gratuity on the mainland from basic salary and length of service, using the Article 51 formula of Federal Decree-Law No. 33 of 2021. It does not handle unpaid leave, free zone rules or the DIFC savings plan. The full calculator on this site covers more.',
  },
  {
    q: 'Does the embedded calculator track my visitors?',
    a: 'The frame has no analytics, no ads and no cookies, and the numbers your visitors type stay in their own browser. It makes no calculation requests to a server.',
  },
  {
    q: 'Will my page speed suffer?',
    a: 'The frame is small and the code above loads it lazily, so it only downloads when a visitor scrolls near it.',
  },
]

export default function EmbedPage() {
  const schema = [
    breadcrumbSchema([{ name: 'Embed the calculator', path: '/embed-gratuity-calculator' }]),
    faqSchema(faqs),
  ]
  return (
    <>
      {schema.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb">
            <Link href="/">UAE Gratuity Check</Link> › Embed the calculator
          </div>
          <h1>Embed the UAE Gratuity Calculator on Your Website</h1>
          <p>
            Give your readers, employees or clients a working end of service gratuity calculator without building one. Paste two lines of code into your page and it appears at the right size on phones and desktops.
          </p>
        </div>

        <div className="card">
          <h2>1. Copy the code</h2>
          <p>Paste this where you want the calculator to appear, in the HTML view of your page or in a custom HTML block.</p>
          <CopySnippet code={snippet} />
          <p style={{ marginTop: '1rem' }}>
            The calculator is at most 520 pixels wide and fills the space you give it on small screens. A height of 620 pixels fits the result box without an inner scroll bar. If your page template is narrower, raise the height a little.
          </p>
        </div>

        <div className="card">
          <h2>2. What your visitors will see</h2>
          <p>This is the live version of the code above.</p>
          <div style={{ marginTop: '0.75rem', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', maxWidth: '540px' }}>
            <iframe src="/embed/gratuity" title="UAE gratuity calculator preview" width="100%" height="620" style={{ border: 0, display: 'block' }} loading="lazy" />
          </div>
        </div>

        <div className="card">
          <h2>What the embedded calculator does</h2>
          <ul>
            <li>It takes monthly basic salary, years of service and extra months.</li>
            <li>It applies 21 days of basic wage per year for the first five years and 30 days per year after that, with part years counted pro rata once one full year of service is complete.</li>
            <li>It applies the two year wage cap and shows the daily wage and the number of gratuity days behind the answer.</li>
            <li>It states that the figure is an estimate for the standard mainland case.</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            The rules behind it are explained on the <Link href="/how-to-calculate-gratuity-uae">how gratuity is calculated</Link> page, with worked examples. For free zones, final settlement and DIFC, send readers to the full <Link href="/">UAE gratuity calculator</Link>.
          </p>
        </div>

        <div className="card">
          <h2>Who it is for</h2>
          <p>
            HR teams who want an intranet or careers page calculator, payroll and PRO companies, recruiters, relocation advisers, and bloggers writing for expats in the UAE. If you need a different layout or a version in Arabic, <Link href="/contact">get in touch</Link>.
          </p>
        </div>

        <div className="card">
          <h2>Questions about embedding</h2>
          {faqs.map(f => (
            <div key={f.q} style={{ marginTop: '1rem' }}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </>
  )
}

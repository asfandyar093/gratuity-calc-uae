import Link from 'next/link'
import Footer from './Footer'
import LastUpdated from './LastUpdated'
import SchemaMarkup from './SchemaMarkup'

interface Section {
  heading: string
  body: string[]
}

interface Props {
  slug: string
  title: string
  description: string
  badge: string
  intro: string
  sections: Section[]
  faq: [string, string][]
  note?: string
}

export default function BlogArticlePage({ slug, title, description, badge, intro, sections, faq, note }: Props) {
  const url = `https://www.uaegratuitycheck.com/blog/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.uaegratuitycheck.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.uaegratuitycheck.com/blog' },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ],
      },
      {
        '@type': 'Article',
        headline: title,
        description,
        image: 'https://www.uaegratuitycheck.com/og-image.png',
        datePublished: '2026-05-15',
        dateModified: '2026-05-15',
        author: { '@type': 'Person', name: 'UAE Gratuity Check Editorial Team', url: 'https://www.uaegratuitycheck.com/about' },
        publisher: { '@type': 'Organization', name: 'UAE Gratuity Check', logo: { '@type': 'ImageObject', url: 'https://www.uaegratuitycheck.com/logo.png' } },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
      },
    ],
  }

  return (
    <>
      <SchemaMarkup schema={schema} />
      <main className="page-wrapper">
        <div className="page-hero">
          <div className="breadcrumb"><Link href="/">UAE Gratuity Check</Link> › <Link href="/blog">Blog</Link> › {badge}</div>
          <h1>{title}</h1>
          <LastUpdated date="May 2026" />
          <p>{description}</p>
        </div>

        <div className="card" style={{ borderLeft: '6px solid var(--green)', background: 'var(--green-light)' }}>
          <div className="badge bg-teal">{badge}</div>
          <p style={{ color: 'var(--green-dark)', fontSize: '18px', fontWeight: 700 }}>{intro}</p>
          <p><Link href="/">Calculate your gratuity now</Link></p>
        </div>

        {sections.map((section) => (
          <div className="card" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        ))}

        {note && (
          <div className="card" style={{ borderLeft: '6px solid var(--red)', background: 'var(--red-light)' }}>
            <h2>Important note</h2>
            <p>{note}</p>
          </div>
        )}

        <div className="card">
          <h2>FAQ</h2>
          {faq.map(([q, a]) => (
            <div key={q} style={{ marginBottom: '1rem' }}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </>
  )
}

export const SITE_URL = 'https://www.uaegratuitycheck.com'

export function absoluteUrl(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

/** BreadcrumbList JSON-LD. `items` excludes the home crumb, which is added first. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** FAQPage JSON-LD built from the same Q&A array rendered on the page, so the two never drift apart. */
export function faqSchema(faqs: { q: string; a: string }[], id?: string, inGraph = false) {
  return {
    ...(inGraph ? {} : { '@context': 'https://schema.org' }),
    '@type': 'FAQPage',
    ...(id ? { '@id': id } : {}),
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'UAE Gratuity Check: free UAE end of service gratuity calculator',
}

/**
 * Site-wide Open Graph defaults. Next.js replaces (does not merge) `openGraph`
 * when a page defines it, so pages spread this in and add their own `url`.
 */
export const baseOpenGraph = {
  type: 'website' as const,
  locale: 'en_AE',
  siteName: 'UAE Gratuity Check',
  images: [DEFAULT_OG_IMAGE],
}

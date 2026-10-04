// English ↔ Arabic page pairs. Used for hreflang alternates, the sitemap, the
// language switcher and Arabic navigation. Only list pages that have a real
// Arabic translation; everything else stays English-only.
export const AR_PAIRS: Record<string, string> = {
  '/': '/ar',
  '/how-it-works': '/ar/how-it-works',
  '/final-settlement-calculator-uae': '/ar/final-settlement-calculator-uae',
  '/gratuity-calculator/domestic-workers': '/ar/gratuity-calculator/domestic-workers',
}

export const EN_PAIRS: Record<string, string> = Object.fromEntries(
  Object.entries(AR_PAIRS).map(([en, ar]) => [ar, en]),
)

const SITE = 'https://www.uaegratuitycheck.com'
const abs = (p: string) => (p === '/' ? SITE : `${SITE}${p}`)

/** `alternates` block (canonical + hreflang) for a page that has an Arabic twin. */
export function pairAlternates(enPath: string, lang: 'en' | 'ar') {
  const arPath = AR_PAIRS[enPath]
  return {
    canonical: abs(lang === 'ar' ? arPath : enPath),
    languages: { en: abs(enPath), ar: abs(arPath), 'x-default': abs(enPath) },
  }
}

/** Arabic URL for an English path when a translation exists. */
export function arHref(enPath: string): string {
  return AR_PAIRS[enPath] ?? enPath
}

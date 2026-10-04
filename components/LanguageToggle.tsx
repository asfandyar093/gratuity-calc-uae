'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AR_PAIRS, EN_PAIRS } from '@/lib/i18nRoutes'

// Each language has its own URLs (English pages under /, Arabic under /ar), so
// the switcher is a plain link to the translated page, or to the other
// language's homepage when the current page has no translation.
export default function LanguageToggle({ lang }: { lang: 'en' | 'ar' }) {
  const path = usePathname() || '/'
  if (lang === 'ar') {
    const target = EN_PAIRS[path] ?? '/'
    return (
      <Link className="language-toggle" href={target} hrefLang="en" lang="en" aria-label="English version">
        English
      </Link>
    )
  }
  const target = AR_PAIRS[path] ?? '/ar'
  return (
    <Link className="language-toggle" href={target} hrefLang="ar" lang="ar" aria-label="النسخة العربية">
      العربية
    </Link>
  )
}

'use client'

import { usePathname, useRouter } from 'next/navigation'

type Lang = 'en' | 'ar'

function applyLanguage(nextLang: Lang) {
  const root = document.documentElement
  root.dataset.siteLang = nextLang
  root.lang = nextLang === 'ar' ? 'ar-AE' : 'en-AE'
  root.dir = nextLang === 'ar' ? 'rtl' : 'ltr'
  try {
    window.localStorage.setItem('site-lang', nextLang)
  } catch {
    // storage can be unavailable (private mode); the toggle still works for this page view
  }
}

// The initial language is applied before first paint by the inline script in
// app/layout.tsx (no flash of English then a jump to Arabic). This button only
// reads the current state at click time, so server and client markup match.
export default function LanguageToggle() {
  const path = usePathname()
  const router = useRouter()

  function toggleLanguage() {
    const current: Lang = document.documentElement.dataset.siteLang === 'ar' ? 'ar' : 'en'
    const nextLang: Lang = current === 'en' ? 'ar' : 'en'
    applyLanguage(nextLang)
    // The homepage has a dedicated, indexable Arabic URL.
    if (nextLang === 'ar' && path === '/') router.push('/ar')
    else if (nextLang === 'en' && path === '/ar') router.push('/')
  }

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={toggleLanguage}
      aria-label="Switch language / تغيير اللغة"
    >
      <span className="lang-en" lang="ar">العربية</span>
      <span className="lang-ar" lang="en">English</span>
    </button>
  )
}

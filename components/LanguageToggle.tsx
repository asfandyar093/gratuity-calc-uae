'use client'

import { useEffect, useState } from 'react'

type Lang = 'en' | 'ar'

export default function LanguageToggle() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem('site-lang') === 'ar' ? 'ar' : 'en'
  })

  function applyLanguage(nextLang: Lang) {
    document.documentElement.dataset.siteLang = nextLang
    document.documentElement.lang = nextLang === 'ar' ? 'ar-AE' : 'en-AE'
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem('site-lang', nextLang)
  }

  useEffect(() => {
    applyLanguage(lang)
  }, [lang])

  function toggleLanguage() {
    const nextLang = lang === 'en' ? 'ar' : 'en'
    setLang(nextLang)
  }

  return (
    <button
      className="language-toggle"
      type="button"
      onClick={toggleLanguage}
      aria-label={lang === 'en' ? 'View website in Arabic' : 'View website in English'}
    >
      <span className="lang-en">العربية</span>
      <span className="lang-ar">English</span>
    </button>
  )
}

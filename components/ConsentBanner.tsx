'use client'

import { useSyncExternalStore } from 'react'
import Link from 'next/link'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const KEY = 'ugc-consent-v1'

const COPY = {
  en: {
    text: 'We use Google Analytics to measure traffic and Google AdSense to show ads that keep this calculator free. You can accept or reject cookies for these purposes.',
    more: 'Privacy policy',
    accept: 'Accept',
    reject: 'Reject',
    label: 'Cookie notice',
    href: '/privacy-policy',
  },
  ar: {
    text: 'نستخدم Google Analytics لقياس الزيارات وGoogle AdSense لعرض إعلانات تُبقي هذه الحاسبة مجانية. يمكنك قبول أو رفض ملفات تعريف الارتباط لهذه الأغراض.',
    more: 'سياسة الخصوصية',
    accept: 'قبول',
    reject: 'رفض',
    label: 'إشعار ملفات تعريف الارتباط',
    href: '/privacy-policy',
  },
} as const

function update(value: 'granted' | 'denied') {
  window.gtag?.('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  })
}

const listeners = new Set<() => void>()
function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => { listeners.delete(cb) }
}
let memChoice = '' // fallback when localStorage is unavailable
function readChoice(): string {
  try { return localStorage.getItem(KEY) ?? memChoice } catch { return memChoice }
}

export default function ConsentBanner({ lang }: { lang: 'en' | 'ar' }) {
  const c = COPY[lang]
  // Server snapshot is 'granted' so nothing renders during SSR/hydration; the client then
  // shows the banner only when no choice has been stored. Analytics.tsx re-applies a stored choice.
  const choice = useSyncExternalStore(subscribe, readChoice, () => 'granted')
  const visible = choice !== 'granted' && choice !== 'denied'

  function choose(value: 'granted' | 'denied') {
    memChoice = value
    try { localStorage.setItem(KEY, value) } catch {}
    update(value)
    listeners.forEach((l) => l())
  }

  if (!visible) return null
  return (
    <div className="consent-banner" role="region" aria-label={c.label}>
      <p>
        {c.text} <Link href={c.href}>{c.more}</Link>
      </p>
      <div className="consent-actions">
        <button type="button" className="consent-btn" onClick={() => choose('denied')}>{c.reject}</button>
        <button type="button" className="consent-btn primary" onClick={() => choose('granted')}>{c.accept}</button>
      </div>
    </div>
  )
}

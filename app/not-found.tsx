import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This page does not exist. Use the free UAE gratuity calculator or browse our UAE labour law guides.',
  robots: { index: false, follow: true },
}

const links = [
  { href: '/', en: 'UAE gratuity calculator', ar: 'حاسبة مكافأة نهاية الخدمة' },
  { href: '/final-settlement-calculator-uae', en: 'Final settlement calculator', ar: 'حاسبة التسوية النهائية' },
  { href: '/how-it-works', en: 'How gratuity is calculated', ar: 'طريقة حساب المكافأة' },
  { href: '/uae-labor-law', en: 'UAE labour law gratuity rules', ar: 'قانون العمل الإماراتي' },
  { href: '/tools', en: 'All calculators', ar: 'جميع الحاسبات' },
  { href: '/blog', en: 'Blog and guides', ar: 'المدونة والأدلة' },
]

export default function NotFound() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <h1>
          <span className="lang-en">Page not found</span>
          <span className="lang-ar" lang="ar">الصفحة غير موجودة</span>
        </h1>
        <p>
          <span className="lang-en">The page you were looking for may have moved. These pages are the most useful starting points:</span>
          <span className="lang-ar" lang="ar">ربما تم نقل الصفحة التي تبحث عنها. يمكنك البدء من إحدى هذه الصفحات:</span>
        </p>
      </div>
      <div className="card">
        <div className="article-link-list">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="article-link-item">
              <strong className="lang-en">{l.en}</strong>
              <strong className="lang-ar" lang="ar">{l.ar}</strong>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

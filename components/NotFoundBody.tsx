import Link from 'next/link'
import Footer from '@/components/Footer'

const notFoundLinks = [
  { href: '/', label: 'UAE gratuity calculator' },
  { href: '/final-settlement-calculator-uae', label: 'Final settlement calculator' },
  { href: '/how-it-works', label: 'How gratuity is calculated' },
  { href: '/gratuity-by-years-of-service', label: 'Gratuity by years of service table' },
  { href: '/uae-labor-law', label: 'UAE labour law gratuity rules' },
  { href: '/blog', label: 'Guides and articles' },
  { href: '/ar', label: 'حاسبة نهاية الخدمة بالعربية' },
]

export default function NotFoundBody() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <h1>Page not found</h1>
        <p>The page you were looking for may have moved. These pages are the most useful starting points:</p>
      </div>
      <div className="card">
        <div className="article-link-list">
          {notFoundLinks.map((l) => (
            <Link key={l.href} href={l.href} className="article-link-item">
              <strong>{l.label}</strong>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

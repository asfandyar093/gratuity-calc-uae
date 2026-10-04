import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import NotFoundBody from '@/components/NotFoundBody'

// 404 for URLs that match no route. The app has two root layouts (English in
// app/(site), Arabic in app/(ar)), so the global 404 renders its own <html>.
export const metadata: Metadata = {
  title: 'Page not found | UAE Gratuity Check',
  description: 'This page does not exist. Use the free UAE gratuity calculator or browse our UAE labour law guides.',
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return (
    <html lang="en-AE" dir="ltr" data-site-lang="en">
      <body>
        <Nav lang="en" />
        <div id="main-content">
          <NotFoundBody />
        </div>
      </body>
    </html>
  )
}

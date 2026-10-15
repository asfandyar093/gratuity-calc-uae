import type { Metadata, Viewport } from 'next'
import './embed.css'

// Root layout for the embeddable calculator frame. It is deliberately bare: no site navigation,
// no consent banner, no analytics and no ads. The frame stores nothing and sets no cookies.
export const metadata: Metadata = {
  metadataBase: new URL('https://www.uaegratuitycheck.com'),
  title: 'UAE Gratuity Calculator Widget',
  description: 'Embeddable UAE end of service gratuity calculator from UAE Gratuity Check.',
  // The frame is a duplicate of the calculator in a bare shell, so it stays out of search results.
  // "follow" keeps the attribution link counted. The same directive is sent as an X-Robots-Tag header.
  robots: { index: false, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
}

export default function EmbedRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AE" dir="ltr">
      <body>{children}</body>
    </html>
  )
}

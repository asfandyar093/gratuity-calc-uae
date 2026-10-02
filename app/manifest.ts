import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'UAE Gratuity Check — End-of-Service Calculator',
    short_name: 'Gratuity Check',
    description:
      'Free UAE end-of-service gratuity calculator based on Federal Decree-Law No. 33 of 2021, in English and Arabic.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f3f4f6',
    theme_color: '#111827',
    lang: 'en-AE',
    dir: 'ltr',
    categories: ['finance', 'business', 'utilities'],
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}

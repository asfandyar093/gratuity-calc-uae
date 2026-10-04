import type { Metadata } from 'next'
import NotFoundBody from '@/components/NotFoundBody'

export const metadata: Metadata = {
  title: 'Page not found | UAE Gratuity Check',
  description: 'This page does not exist. Use the free UAE gratuity calculator or browse our UAE labour law guides.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return <NotFoundBody />
}

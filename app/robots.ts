import type { MetadataRoute } from 'next'

// Explicit allows for AdSense crawlers (Mediapartners-Google and Google-Display-Ads-Bot)
// per https://support.google.com/adsense/answer/10532 and https://support.google.com/adsense/answer/99376
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'Google-Display-Ads-Bot',
        allow: '/',
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
    ],
    sitemap: 'https://www.uaegratuitycheck.com/sitemap.xml',
  }
}

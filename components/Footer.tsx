import Link from 'next/link'
import { arHref } from '@/lib/i18nRoutes'

// One language per page: English pages render the English footer, Arabic pages
// (app/(ar)) pass lang="ar". Links point to Arabic pages where a translation exists.
export default function Footer({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar'
  const t = (en: string, ar: string) => (isAr ? ar : en)
  const href = (p: string) => (isAr ? arHref(p) : p)
  return (
    <footer className="site-footer">
      <div className="footer-logo">UAE Gratuity <span>Check</span></div>
      <div className="footer-desc">
        {t(
          'Free UAE end-of-service gratuity calculator · Updated 2026 · Based on Federal Decree-Law No. 33 of 2021',
          'حاسبة مجانية لمكافأة نهاية الخدمة في الإمارات · تحديث 2026 · وفق المرسوم بقانون اتحادي رقم 33 لسنة 2021',
        )}
      </div>
      <div className="uae-divider" style={{ maxWidth: '400px', margin: '1.5rem auto' }}>
        <span /><span /><span /><span />
      </div>
      <div className="footer-links">
        <Link href={href('/')}>{t('Gratuity calculator', 'حاسبة نهاية الخدمة')}</Link>
        <Link href={href('/how-it-works')}>{t('How gratuity is calculated', 'طريقة الحساب')}</Link>
        <Link href={href('/final-settlement-calculator-uae')}>{t('Final settlement', 'التسوية النهائية')}</Link>
        <Link href={href('/gratuity-calculator/domestic-workers')}>{t('Domestic workers', 'العمالة المساعدة')}</Link>
        <Link href="/gratuity-by-years-of-service">{t('Gratuity by years table', 'جدول المكافأة حسب السنوات')}</Link>
        <Link href="/uae-labor-law">{t('UAE labour law', 'قانون العمل')}</Link>
        <Link href="/mohre-annual-leave-calculator">{t('Annual leave', 'الإجازة السنوية')}</Link>
        <Link href="/sick-leave-calculator-uae">{t('Sick leave', 'الإجازة المرضية')}</Link>
        <Link href="/maternity-leave-calculator-uae">{t('Maternity leave', 'إجازة الأمومة')}</Link>
        <Link href="/gratuity-calculator">{t('Free zone calculators', 'حاسبات المناطق الحرة')}</Link>
        <Link href="/calculate-jafza-gratuity">JAFZA</Link>
        <Link href="/calculate-dmcc-gratuity">DMCC</Link>
        <Link href="/calculate-difc-gratuity">DIFC</Link>
        <Link href="/blog/difc-dews-gratuity-explained">DEWS</Link>
        <Link href="/calculate-adgm-gratuity">ADGM</Link>
        <Link href="/gratuity-calculator/education">{t('Teacher gratuity', 'مكافأة المعلمين')}</Link>
        <Link href="/gratuity-calculator/healthcare">{t('Healthcare gratuity', 'القطاع الصحي')}</Link>
        <Link href="/gratuity-calculator/hospitality">{t('Hospitality gratuity', 'قطاع الضيافة')}</Link>
        <Link href="/blog/how-to-file-mohre-complaint">{t('MOHRE complaint', 'شكوى وزارة الموارد البشرية')}</Link>
        <Link href="/blog">{t('Blog', 'المدونة')}</Link>
        <Link href="/tools">{t('All calculators', 'كل الحاسبات')}</Link>
        <Link href="/uae-visa-cost-calculator">{t('Visa cost', 'تكلفة التأشيرة')}</Link>
        <Link href="/uae-income-tax-calculator">{t('Income tax', 'ضريبة الدخل')}</Link>
        <Link href="/about">{t('About', 'من نحن')}</Link>
        <Link href="/contact">{t('Contact', 'اتصل بنا')}</Link>
        <Link href="/privacy-policy">{t('Privacy Policy', 'سياسة الخصوصية')}</Link>
        <Link href="/terms">{t('Terms of Service', 'الشروط')}</Link>
      </div>
      <p className="footer-featured">
        {t('Featured on ', 'ظهرنا في ')}
        <a href="https://me-hrl.com/free-uae-end-of-service" target="_blank" rel="noopener">ME HR &amp; Learning</a>
      </p>
      <div className="footer-copy">
        {t(
          '© 2026 UAE Gratuity Check — For informational purposes only. Not legal advice.',
          '© 2026 UAE Gratuity Check — معلومات عامة وليست استشارة قانونية.',
        )}
      </div>
    </footer>
  )
}

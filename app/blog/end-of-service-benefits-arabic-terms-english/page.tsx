import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/end-of-service-benefits-arabic-terms-english'
const pageImage = '/og-image.png'
const pageTitle = 'End of Service Benefits in the UAE: Arabic Terms in English'
const pageDescription = 'مستحقات نهاية الخدمة بالانجليزي — a plain-English glossary of UAE end-of-service Arabic terms: مكافأة نهاية الخدمة, الراتب الأساسي, التسوية النهائية, and more, with links to free calculators.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['مستحقات نهاية الخدمة بالانجليزي', 'end of service benefits english', 'UAE gratuity Arabic terms', 'مكافأة نهاية الخدمة meaning', 'UAE labour law glossary'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE end of service benefits Arabic to English glossary' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return (
    <BlogArticlePage
      slug="end-of-service-benefits-arabic-terms-english"
      title="End of Service Benefits in the UAE: Arabic Terms Explained in English"
      description="مستحقات نهاية الخدمة بالانجليزي — if you've seen these Arabic terms on a payslip, contract, or MOHRE document and want the English meaning, this glossary covers the most important ones."
      badge="GLOSSARY · المصطلحات"
      intro="مستحقات نهاية الخدمة means 'end-of-service entitlements' — the full set of payments due when a UAE employment contract ends, including gratuity, leave salary, and unpaid wages."
      sections={[
        {
          heading: 'Why these Arabic terms matter even if you work in English',
          body: [
            'Many UAE employment contracts, MOHRE documents, payslips, and final settlement letters use Arabic legal terminology even when the rest of the document is in English, or are issued in Arabic only. Knowing the English meaning of these terms helps you check that your settlement is calculated correctly and matches what the law requires.',
            'Below is a glossary of the most common Arabic terms related to end-of-service benefits (مستحقات نهاية الخدمة), with a short explanation of what each one means and a link to a calculator or guide where relevant.',
          ],
        },
        {
          heading: 'Core glossary: مستحقات نهاية الخدمة (end-of-service entitlements)',
          body: [
            'مكافأة نهاية الخدمة — "End-of-service gratuity." The statutory lump-sum payment based on basic salary and years of service, capped at two years of basic salary. Use the UAE gratuity calculator to estimate this.',
            'الراتب الأساسي — "Basic salary." The fixed base pay in your contract, excluding allowances. This is the figure used for both gratuity and leave salary calculations — not your total monthly package.',
            'التسوية النهائية — "Final settlement." The total amount payable when employment ends: gratuity + unpaid salary + leave salary + notice pay/deductions + any contractual additions.',
            'الإجازة السنوية — "Annual leave." Paid leave entitlement, normally 30 calendar days per year after one year of service under Article 29.',
            'بدل تذكرة العودة — "Repatriation ticket allowance." A contractual benefit covering a flight ticket to the employee\'s home country, often paid or reimbursed at the end of service.',
            'فترة الإشعار — "Notice period." The period an employee or employer must give before ending the contract, typically 30–90 days depending on the contract.',
            'الفصل التعسفي — "Arbitrary dismissal." Termination without a legitimate reason, which can entitle the employee to compensation under UAE Labour Law.',
            'وزارة الموارد البشرية والتوطين (MOHRE) — "Ministry of Human Resources and Emiratisation." The government body that regulates private-sector employment and handles labour complaints.',
          ],
        },
        {
          heading: 'How to use this glossary with your documents',
          body: [
            'If your final settlement letter lists مكافأة نهاية الخدمة, الإجازة السنوية, and التسوية النهائية as separate line items, that matches the standard structure: gratuity, leave salary, and the combined total. Compare each Arabic line item against the corresponding section of the UAE final settlement calculator to verify the numbers.',
            'If a document refers only to الراتب الأساسي for your gratuity calculation but your payslip shows a higher total salary, remember that allowances (housing, transport, etc.) are correctly excluded — this is not necessarily an error.',
            'For a full bilingual breakdown of how the gratuity formula works, see the homepage Arabic summary, which explains مكافأة نهاية الخدمة and الراتب الأساسي with worked examples in both languages.',
          ],
        },
      ]}
      faq={[
        ['What does مستحقات نهاية الخدمة mean in English?', 'It translates to "end-of-service entitlements" — the full set of payments owed to an employee when their UAE employment ends, including gratuity, unused leave salary, unpaid wages, and any contractual additions.'],
        ['What is the English term for مكافأة نهاية الخدمة?', '"End-of-service gratuity" or "end-of-service benefit" (EOSB). It is a statutory lump-sum payment based on basic salary and years of service.'],
        ['What does الراتب الأساسي mean and why does it matter?', 'It means "basic salary" — the fixed base pay in your contract, excluding allowances. It is the figure used to calculate both gratuity and leave salary, so it is the most important number to verify on your payslip.'],
        ['Is التسوية النهائية the same as مكافأة نهاية الخدمة?', 'No. التسوية النهائية ("final settlement") is the total payout, which includes مكافأة نهاية الخدمة (gratuity) as one component along with leave salary, unpaid wages, and other items.'],
      ]}
      internalLinks={[
        { href: '/', label: 'UAE gratuity calculator', description: 'Calculate مكافأة نهاية الخدمة (end-of-service gratuity) with a bilingual English/Arabic interface.' },
        { href: '/final-settlement-calculator-uae', label: 'UAE final settlement calculator', description: 'Calculate التسوية النهائية — the full final settlement including gratuity and leave salary.' },
        { href: '/mohre-annual-leave-calculator', label: 'MOHRE annual leave calculator', description: 'Calculate الإجازة السنوية entitlement and unused leave cash value.' },
        { href: '/blog/uae-leave-salary-calculation-guide', label: 'Leave salary calculation guide', description: 'Step-by-step guide to calculating the cash value of unused annual leave.' },
      ]}
    />
  )
}

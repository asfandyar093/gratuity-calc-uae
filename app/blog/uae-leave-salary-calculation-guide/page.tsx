import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-leave-salary-calculation-guide'
const pageImage = '/og-image.png'
const pageTitle = 'Leave Salary Calculation in UAE: 2026 Step-by-Step Guide'
const pageDescription = 'Leave salary in the UAE is your basic daily wage multiplied by your unused annual leave days. See the exact MOHRE formula, worked examples, and how it differs from gratuity and final settlement.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['leave salary calculation in uae', 'annual leave salary uae', 'uae leave encashment calculation', 'mohre leave salary', 'end of service calculator uae'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'UAE leave salary calculation guide' }],
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
      slug="uae-leave-salary-calculation-guide"
      title="Leave Salary Calculation in UAE — 2026 Step-by-Step Guide"
      description="Leave salary is the cash value of your unused annual leave days, paid out when your UAE employment ends. Here is the exact formula, worked examples, and how it fits into your final settlement."
      badge="LEAVE SALARY"
      intro="Leave salary = basic daily wage × unused annual leave days. It is calculated on basic salary only, the same wage base used for gratuity."
      sections={[
        {
          heading: 'What does "leave salary calculation" mean in the UAE?',
          body: [
            'In the UAE, "leave salary" usually refers to one of two things: the salary you continue to receive while you are on approved annual leave, or — more commonly in final settlement searches — the cash value MOHRE requires employers to pay for any annual leave days you have not used by the time your employment ends.',
            'Under Federal Decree-Law No. 33 of 2021 (Article 29), private-sector employees earn 30 calendar days of paid annual leave per year after completing one year of service, or 2 days per completed month during the 6–12 month period. If you leave the company with unused days remaining, those days must be paid out in cash as part of your final settlement.',
            'This leave salary payout is separate from, and in addition to, your end-of-service gratuity. Many employees searching for an "end of service calculator" or "settlement calculation in UAE" are really looking for the combination of gratuity plus this leave salary payout — which is exactly what a final settlement calculator covers.',
          ],
        },
        {
          heading: 'The leave salary formula',
          body: [
            'Step 1 — Daily wage = monthly basic salary ÷ 30. This is the same daily wage figure used for gratuity, and it is based on basic salary only — housing, transport, and other allowances are excluded.',
            'Step 2 — Leave salary = daily wage × number of unused annual leave days at the date of leaving.',
            'Step 3 — Add this amount to your final settlement alongside gratuity, any unpaid salary for days worked in your final month, and notice pay or deductions.',
          ],
        },
        {
          heading: 'Worked example: leave salary calculation',
          body: [
            'Profile: AED 9,000 monthly basic salary, 18 unused annual leave days at the time of resignation.',
            'Daily wage = AED 9,000 ÷ 30 = AED 300.',
            'Leave salary = AED 300 × 18 days = AED 5,400.',
            'This AED 5,400 is added to gratuity and any other final settlement items — it is not a substitute for gratuity, and it is not reduced by the gratuity two-year cap, which applies only to the gratuity portion.',
          ],
        },
        {
          heading: 'How to calculate your unused leave balance',
          body: [
            'Your unused leave balance is your total accrued entitlement (30 days per completed year, or 2 days per month for partial years) minus any days you have already taken. If your employer carries leave forward across years under company policy, include those carried-forward days in the balance before applying the formula.',
            'Employers cannot lawfully deny the cash payout for accrued, unused leave when employment ends — whether you resign, are terminated, or your contract expires. If your final settlement sheet shows zero leave salary but you know you had unused days, ask HR for your leave ledger before signing.',
          ],
        },
        {
          heading: 'Leave salary vs gratuity vs final settlement — what is the difference?',
          body: [
            '"Leave salary" is the cash value of unused annual leave days — one line item in your final settlement.',
            '"Gratuity" or "end of service benefit" is a separate statutory payment based on your years of service and basic salary, capped at two years of basic salary.',
            '"Final settlement" (sometimes searched as "settlement calculation in UAE" or "end of service calculator UAE") is the total of everything owed to you on exit: gratuity + leave salary + unpaid salary + notice pay/deductions + any contractual additions like ticket allowance.',
          ],
        },
      ]}
      faq={[
        ['How is leave salary calculated in the UAE?', 'Leave salary = basic daily wage (basic salary ÷ 30) × number of unused annual leave days. It is based on basic salary only, the same wage base used for gratuity calculations.'],
        ['Is leave salary the same as gratuity?', 'No. Leave salary is the cash value of unused annual leave days. Gratuity is a separate end-of-service payment based on years of service. Both are typically paid together as part of your final settlement.'],
        ['Do I lose unused leave days if I resign?', 'No. Under UAE Labour Law, any unused annual leave you have accrued must be paid out in cash when your employment ends, regardless of whether you resign, are terminated, or your contract expires.'],
        ['Where can I calculate my full settlement including leave salary?', 'Use the UAE final settlement calculator, which combines gratuity, leave salary, unpaid salary, notice pay, and deductions into a single total.'],
        ['Does leave salary count toward the gratuity two-year cap?', 'No. The two-year (24-month) cap applies only to the gratuity portion of your settlement. Leave salary is calculated and paid separately and is not limited by the gratuity cap.'],
      ]}
      internalLinks={[
        { href: '/mohre-annual-leave-calculator', label: 'MOHRE annual leave calculator', description: 'Calculate your accrued annual leave entitlement and unused leave balance.' },
        { href: '/final-settlement-calculator-uae', label: 'UAE final settlement calculator', description: 'Combine gratuity, leave salary, unpaid salary, and notice pay into one total.' },
        { href: '/', label: 'UAE gratuity calculator', description: 'Estimate your end-of-service gratuity using basic salary and service period.' },
        { href: '/blog/uae-final-settlement-checklist', label: 'UAE final settlement checklist', description: 'Check every line item, including leave salary, before signing your settlement.' },
      ]}
      datePublished="2026-06-10"
      dateModified="2026-06-10"
    />
  )
}

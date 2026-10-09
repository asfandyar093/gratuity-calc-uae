import type { Metadata } from 'next'
import Link from 'next/link'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import DewsCalculator from '@/components/DewsCalculator'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  name: 'Dubai International Financial Centre',
  shortName: 'DIFC',
  href: '/calculate-difc-gratuity',
  badge: 'DIFC · DEWS · Workplace Savings',
  title: 'DIFC Gratuity & DEWS Calculator 2026',
  description: 'Estimate DIFC DEWS employer contributions (5.83% of basic salary up to 5 years, 8.33% after) and understand how DEWS replaced the traditional gratuity.',
  defaultSalary: '25000',
  defaultYears: '5',
  theme: 'linear-gradient(145deg, #111827 0%, #334155 48%, #0f766e 100%)',
  answer: 'In DIFC, most employers no longer pay a lump-sum gratuity at the end of service for service covered by DEWS. Instead they pay at least 5.83% of your monthly basic salary into the DIFC Employee Workplace Savings (DEWS) plan for up to five years of service, and 8.33% after five years. Your DEWS balance, including investment returns, is your end-of-service benefit for that period.',
  formulaNote: 'DIFC has its own employment law. Since DEWS launched in 2020, employers make monthly defined contributions instead of accruing a final-salary gratuity (unless they use another approved Qualifying Scheme). The DEWS minimum rates were designed to broadly match the old gratuity accrual: 5.83% of basic is about 21 days a year, and 8.33% is about 30 days a year.',
  warning: 'DIFC is not a MOHRE mainland case. Check your DEWS statement for the real balance. Disputes go through DIFC processes and the DIFC Courts, not MOHRE.',
  rules: [
    'Minimum employer contribution: 5.83% of monthly basic salary for up to 5 years of service.',
    'Minimum employer contribution: 8.33% of monthly basic salary for service beyond 5 years.',
    'Contributions are paid by the employer and are not deducted from your salary. You can add voluntary contributions.',
    'Your benefit is the DEWS account value, which includes investment returns and fees, not a final-salary formula.',
    'Gratuity accrued for service before DEWS may be handled separately from DEWS contributions.',
  ],
  examples: [],
  sources: [SOURCES.dewsGuide, SOURCES.dewsLaunch],
  faqs: [
    { q: 'How much does my employer pay into DEWS?', a: 'At least 5.83% of your monthly basic salary for up to five years of service, and 8.33% after five years, according to the DIFC DEWS Employer Executive Guide. Employers can pay more.' },
    { q: 'Do DIFC employees still get gratuity?', a: 'For service covered by DEWS, the monthly contributions replace the end-of-service gratuity. Gratuity accrued before DEWS can be handled separately, so check your settlement and DEWS statement.' },
    { q: 'Is the DEWS contribution deducted from my salary?', a: 'No. The minimum contributions are paid by the employer on top of salary. Only voluntary contributions you choose to make are deducted from pay.' },
  ],
}

export const metadata: Metadata = {
  title: 'DIFC Gratuity & DEWS Calculator 2026',
  description: 'DIFC DEWS calculator 2026: estimate employer contributions at 5.83% of basic salary (up to 5 years) and 8.33% (after 5 years), and how DEWS replaced gratuity.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-difc-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-difc-gratuity' },
}

export default function Page() {
  return (
    <FreeZoneCalculatorPage data={data} calculator={<DewsCalculator />}>
      <div className="sec">
        <div className="card">
          <h2>DEWS vs a mainland gratuity</h2>
          <p>
            A mainland employee&apos;s gratuity is worked out from the last basic salary when the job ends (see the <Link href="/">UAE gratuity calculator</Link>). DEWS builds up month by month from the salary in each month. For a full explanation, read <Link href="/blog/difc-dews-gratuity-explained">DIFC DEWS gratuity explained</Link>, then compare free-zone rules on the <Link href="/gratuity-calculator">free zone calculators hub</Link>.
          </p>
        </div>
      </div>
    </FreeZoneCalculatorPage>
  )
}

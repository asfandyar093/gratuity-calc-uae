import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'

const data: FreeZonePageData = {
  name: 'Dubai International Financial Centre',
  shortName: 'DIFC',
  href: '/calculate-difc-gratuity',
  badge: 'DIFC · DEWS · Workplace Savings',
  title: 'DIFC Gratuity Calculator 2026',
  description: 'Estimate a legacy DIFC end-of-service amount and understand how DIFC DEWS changes the payout for post-2020 service.',
  defaultSalary: '25000',
  defaultYears: '5',
  theme: 'linear-gradient(145deg, #111827 0%, #334155 48%, #0f766e 100%)',
  formulaNote: 'DIFC employees are under a separate employment regime. Since DEWS, many employees receive employer-funded workplace savings contributions instead of a traditional UAE mainland gratuity for post-scheme service. Use this calculator for rough comparisons or legacy service checks, then compare it with your DEWS statement.',
  warning: 'Important: DIFC is not a standard MOHRE mainland gratuity case. Check your DEWS account, employment contract, and DIFC employment rules before relying on a standard gratuity figure.',
  rules: [
    'DIFC DEWS generally replaced traditional end-of-service gratuity for covered employees from 2020 onward.',
    'Pre-DEWS accrued gratuity may be handled separately from post-DEWS monthly contributions.',
    'Your DEWS statement is the key document for post-scheme savings value.',
    'Use basic salary for any legacy comparison calculation.',
    'For disputes, DIFC procedures and courts may apply rather than MOHRE.',
  ],
  examples: [
    { role: 'Finance analyst', salary: 18000, years: 3 },
    { role: 'Compliance manager', salary: 30000, years: 6 },
    { role: 'Legal counsel', salary: 45000, years: 8 },
    { role: 'Operations associate', salary: 14000, years: 2 },
  ],
}

export const metadata: Metadata = {
  title: 'DIFC Gratuity Calculator 2026 | DEWS and End of Service Estimate',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-difc-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}

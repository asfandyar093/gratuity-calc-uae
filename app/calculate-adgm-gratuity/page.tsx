import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'

const data: FreeZonePageData = {
  name: 'Abu Dhabi Global Market',
  shortName: 'ADGM',
  href: '/calculate-adgm-gratuity',
  badge: 'ADGM · Abu Dhabi Global Market · Updated 2026',
  title: 'ADGM Gratuity Calculator 2026',
  description: 'Estimate end-of-service gratuity for ADGM employees and compare the result with ADGM employment regulation notes.',
  defaultSalary: '22000',
  defaultYears: '4',
  theme: 'linear-gradient(145deg, #7c2d12 0%, #b45309 48%, #0f766e 100%)',
  formulaNote: 'ADGM has its own employment regulations. The practical gratuity pattern is similar enough for an estimate, but ADGM-specific rules, contracts, and any qualifying savings arrangement can change the final result.',
  warning: 'Important: ADGM is not a standard MOHRE mainland case. Treat this as an estimate and check ADGM employment regulations or legal advice for final settlement disputes.',
  rules: [
    'Check whether your employer is an ADGM entity and whether ADGM employment regulations apply.',
    'Use basic salary for the estimate unless your contract defines a different calculation basis.',
    'Service is normally counted across continuous employment with the same employer.',
    'Pro-rated service can matter when termination occurs partway through a year.',
    'Disputes may follow ADGM processes rather than a standard MOHRE route.',
  ],
  examples: [
    { role: 'Investment associate', salary: 24000, years: 3 },
    { role: 'Risk manager', salary: 36000, years: 6 },
    { role: 'Corporate services officer', salary: 16000, years: 4 },
    { role: 'Senior executive', salary: 60000, years: 9 },
  ],
}

export const metadata: Metadata = {
  title: 'ADGM Gratuity Calculator 2026 | Abu Dhabi Global Market EOSB',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-adgm-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}

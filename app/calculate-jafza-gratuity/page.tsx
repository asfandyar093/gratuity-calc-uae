import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'

const data: FreeZonePageData = {
  name: 'Jebel Ali Free Zone',
  shortName: 'JAFZA',
  href: '/calculate-jafza-gratuity',
  badge: 'JAFZA · Jebel Ali Free Zone · Updated 2026',
  title: 'JAFZA Gratuity Calculator 2026',
  description: 'Calculate end-of-service gratuity for employees of JAFZA companies using the standard UAE private-sector formula and a downloadable PDF result.',
  defaultSalary: '9000',
  defaultYears: '4',
  theme: 'linear-gradient(145deg, #0f766e 0%, #0ea5a3 48%, #22c55e 100%)',
  formulaNote: 'JAFZA-registered companies generally follow UAE labour law for end-of-service benefits. Use the standard 21/30 gratuity formula unless your written contract or a valid savings scheme gives you a better benefit.',
  rules: [
    'Use the basic salary in the employment contract, not total salary with allowances.',
    'Employees with less than one year of continuous service usually do not receive gratuity.',
    'For years 1 to 5, gratuity is 21 days of basic salary per year.',
    'After year 5, gratuity is 30 days of basic salary per additional year.',
    'The total gratuity cannot exceed 24 months of basic salary.',
  ],
  examples: [
    { role: 'Logistics coordinator', salary: 7000, years: 3 },
    { role: 'Warehouse manager', salary: 14000, years: 7 },
    { role: 'Operations director', salary: 28000, years: 10 },
    { role: 'Admin executive', salary: 5000, years: 2 },
  ],
}

export const metadata: Metadata = {
  title: 'JAFZA Gratuity Calculator 2026 | Calculate Jebel Ali Free Zone EOSB',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-jafza-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}

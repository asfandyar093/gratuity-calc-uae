import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'

const data: FreeZonePageData = {
  name: 'Sharjah Airport International Free Zone',
  shortName: 'Sharjah Airport Free Zone',
  href: '/calculate-sharjah-airport-free-zone-gratuity',
  badge: 'SAIF Zone · Sharjah Airport Free Zone · Updated 2026',
  title: 'Sharjah Airport Free Zone Gratuity Calculator 2026',
  description: 'Calculate gratuity for Sharjah Airport Free Zone employees using the standard UAE private-sector 21/30 formula.',
  defaultSalary: '8000',
  defaultYears: '3',
  theme: 'linear-gradient(145deg, #991b1b 0%, #ce1126 48%, #15803d 100%)',
  formulaNote: 'Sharjah Airport Free Zone employment usually follows the UAE private-sector gratuity framework for end-of-service benefits. This calculator applies the standard 21/30 formula to your basic salary.',
  rules: [
    'Enter monthly basic salary only; allowances are normally excluded.',
    'One full year of continuous service is usually required before gratuity is due.',
    'Years 1 to 5 accrue at 21 days of basic salary per year.',
    'Service after year 5 accrues at 30 days of basic salary per additional year.',
    'The statutory cap is two years of basic salary.',
  ],
  examples: [
    { role: 'Trading company admin', salary: 5500, years: 2 },
    { role: 'Logistics supervisor', salary: 9000, years: 5 },
    { role: 'Export manager', salary: 16000, years: 8 },
    { role: 'Operations head', salary: 26000, years: 10 },
  ],
}

export const metadata: Metadata = {
  title: 'Sharjah Airport Free Zone Gratuity Calculator 2026 | SAIF Zone EOSB',
  description: data.description,
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-sharjah-airport-free-zone-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}

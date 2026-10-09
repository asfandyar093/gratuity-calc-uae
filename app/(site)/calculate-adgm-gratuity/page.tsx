import type { Metadata } from 'next'
import FreeZoneCalculatorPage, { FreeZonePageData } from '@/components/FreeZoneCalculatorPage'
import { baseOpenGraph } from '@/lib/seo'
import { SOURCES } from '@/lib/sources'

const data: FreeZonePageData = {
  sources: [SOURCES.adgmFaq, SOURCES.adgmGuidance],
  faqs: [
    { q: 'How is ADGM gratuity calculated?', a: 'Under section 61 of the ADGM Employment Regulations 2024, you get 21 days of basic wage per year for the first five years and 30 days per year after that, once you have one year of continuous service. The daily rate is the annual basic wage divided by 365.' },
    { q: 'Is there a two-year cap on ADGM gratuity?', a: 'Section 61 does not contain the two-year cap from the federal Labour Law. This calculator applies no cap for ADGM.' },
    { q: 'When must an ADGM employer pay gratuity?', a: 'Within 21 calendar days after employment ends, according to the ADGM EAO guidance.' },
    { q: 'What if my basic salary is less than half my package?', a: 'ADGM treats basic wage as at least 50% of total wages for gratuity. Enter your total monthly wage in the calculator and it applies the 50% floor automatically.' },
  ],
  name: 'Abu Dhabi Global Market',
  shortName: 'ADGM',
  href: '/calculate-adgm-gratuity',
  badge: 'ADGM · Abu Dhabi Global Market · Updated 2026',
  title: 'ADGM Gratuity Calculator 2026',
  description: 'Calculate ADGM gratuity under the ADGM Employment Regulations 2024: 21 days per year for the first five years, 30 days after, using annual basic wage ÷ 365.',
  defaultSalary: '22000',
  defaultYears: '4',
  theme: 'linear-gradient(145deg, #7c2d12 0%, #b45309 48%, #0f766e 100%)',
  method: 'adgm',
  answer: 'ADGM gratuity = 21 days of basic wage per year for the first 5 years + 30 days per year after that, once you complete one year of continuous service. ADGM divides the annual basic wage by 365 to get the daily rate, treats basic wage as at least 50% of total wages, and requires payment within 21 calendar days of employment ending.',
  formulaNote: 'ADGM entities follow the ADGM Employment Regulations 2024, not the federal Labour Law. Section 61 sets the gratuity, and the ADGM Employment Affairs Office (EAO) FAQs show how to calculate it. This calculator applies the ADGM method: annual basic wage ÷ 365 for the daily rate, a minimum basic wage of 50% of total wages, and no two-year cap.',
  warning: 'ADGM is not a MOHRE case. Disputes go through ADGM processes (the ADGM Courts), not the MOHRE complaint route used for mainland employers.',
  rules: [
    'You need at least one year of continuous service with the employer.',
    '21 days of basic wage for each of the first five years, then 30 days for each year after that.',
    'Daily rate = annual basic wage ÷ 365 (ADGM EAO FAQs). Example: AED 100,000 annual basic for 3 years = AED 17,260.',
    'Basic wage is treated as at least 50% of total wages, even if the contract states a lower figure.',
    'Part years are paid pro rata after the first year, and gratuity is due whatever the reason employment ends.',
    'Section 61 does not apply the federal two-year cap.',
    'Gratuity and other final payments are due within 21 calendar days after employment ends.',
  ],
  examples: [
    { role: 'Investment associate', salary: 24000, years: 3 },
    { role: 'Risk manager', salary: 36000, years: 6 },
    { role: 'Corporate services officer', salary: 16000, years: 4 },
    { role: 'Senior executive', salary: 60000, years: 9 },
  ],
}

export const metadata: Metadata = {
  title: 'ADGM Gratuity Calculator 2026 | Employment Regs 2024',
  description: 'ADGM gratuity calculator 2026: 21/30 days per year, annual basic ÷ 365, 50% basic floor, no two-year cap, paid within 21 days (ADGM Regulations 2024).',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/calculate-adgm-gratuity' },
  openGraph: { ...baseOpenGraph, url: 'https://www.uaegratuitycheck.com/calculate-adgm-gratuity' },
}

export default function Page() {
  return <FreeZoneCalculatorPage data={data} />
}

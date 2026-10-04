// Gratuity calculation methods by regime. Each was checked against the official text:
// - federal: Federal Decree-Law 33/2021 Art. 51 (daily = monthly basic ÷ 30; Art. 67 month = 30 days),
//   cap "two years' wage" applied conservatively as 24 × basic; paid within 14 days (Art. 53).
// - dmcc: DMCC EOSB Calculation guide V3 (12 Dec 2022): daily = monthly basic × 12 ÷ 365, total not
//   to exceed two years' pay; DMCC follows the federal Labour Law, so the 14-day rule applies.
// - adgm: ADGM Employment Regulations 2024 s.61 per ADGM EAO FAQs/Guidance: daily = annual basic ÷ 365,
//   basic wage deemed at least 50% of total wages, no two-year cap in s.61, paid within 21 calendar days.

export type GratuityMethod = 'federal' | 'dmcc' | 'adgm'

export const METHOD_INFO: Record<GratuityMethod, { dailyLabel: string; capLabel: string; deadlineDays: number; deadlineLabel: string; legalNote: string }> = {
  federal: {
    dailyLabel: 'Daily wage (basic ÷ 30)',
    capLabel: 'Two-year cap applied? (Art. 51(6))',
    deadlineDays: 14,
    deadlineLabel: 'Payment due by (Art. 53: 14 days)',
    legalNote: 'Federal Decree-Law No. 33 of 2021, Article 51',
  },
  dmcc: {
    dailyLabel: 'Daily wage (basic × 12 ÷ 365, DMCC guide)',
    capLabel: 'Two-year cap applied?',
    deadlineDays: 14,
    deadlineLabel: 'Payment due by (Art. 53: 14 days)',
    legalNote: 'Federal Decree-Law No. 33 of 2021, as interpreted in the DMCC EOSB guide',
  },
  adgm: {
    dailyLabel: 'Daily wage (annual basic ÷ 365)',
    capLabel: 'Cap',
    deadlineDays: 21,
    deadlineLabel: 'Payment due by (ADGM: 21 calendar days)',
    legalNote: 'ADGM Employment Regulations 2024, section 61',
  },
}

export function calcByMethod(method: GratuityMethod, monthlyBasic: number, years: number, monthlyTotalWage?: number) {
  let basic = monthlyBasic
  if (method === 'adgm' && monthlyTotalWage && monthlyTotalWage > 0) {
    // s.61(3)(c): basic wage must not be less than 50% of the employee's wages.
    basic = Math.max(monthlyBasic, monthlyTotalWage * 0.5)
  }
  const daily = method === 'federal' ? basic / 30 : (basic * 12) / 365
  const days = years < 1 ? 0 : years <= 5 ? 21 * years : 21 * 5 + 30 * (years - 5)
  const raw = daily * days
  const cap = method === 'adgm' ? Infinity : monthlyBasic * 24
  return { basicUsed: basic, daily, days, raw, cap, capped: raw > cap, amount: Math.min(raw, cap) }
}

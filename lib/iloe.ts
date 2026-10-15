// ILOE (Involuntary Loss of Employment) insurance, UAE.
// Source: u.ae "Insurance against job loss" (MOHRE), Federal Decree-Law No. 13 of 2022,
// Cabinet Resolution No. 97 of 2022, Ministerial Decision No. 604 of 2022.
// Category 1: basic salary below AED 16,000, premium of no more than AED 5 a month.
// Category 2: basic salary above AED 16,000, premium of no more than AED 10 a month.
// Compensation: 60% of the subscription salary for up to 3 months, capped at
// AED 10,000 a month (category 1) or AED 20,000 a month (category 2).
// Eligibility needs 12 continuous months of subscription and a claim within 30 days.

export const ILOE_THRESHOLD = 16000
export const ILOE_RATE = 0.6
export const ILOE_MAX_MONTHS = 3
export const ILOE_FINE = 400

export type IloeCategory = 1 | 2

export function iloeCategory(basicSalary: number): IloeCategory {
  return basicSalary > ILOE_THRESHOLD ? 2 : 1
}

export function iloePremium(basicSalary: number) {
  const category = iloeCategory(basicSalary)
  const monthly = category === 1 ? 5 : 10
  return { category, monthly, annual: monthly * 12 }
}

export function iloeCompensation(subscriptionSalary: number) {
  const category = iloeCategory(subscriptionSalary)
  const cap = category === 1 ? 10000 : 20000
  const uncapped = subscriptionSalary * ILOE_RATE
  const monthly = Math.min(uncapped, cap)
  return { category, cap, uncapped, monthly, capped: uncapped > cap, total: monthly * ILOE_MAX_MONTHS }
}

export type IloeExit = 'terminated' | 'resigned' | 'disciplinary' | 'contract_end'

export interface IloeCheckInput {
  monthsSubscribed: number
  premiumsUpToDate: boolean
  exit: IloeExit
  daysSinceEnd: number
  absconding: boolean
  inUae: boolean
}

/** Returns the list of reasons a claim would not meet the published conditions (empty means it looks eligible). */
export function iloeBlockers(i: IloeCheckInput): string[] {
  const out: string[] = []
  if (i.monthsSubscribed < 12) out.push('You need at least 12 continuous months of subscription before a claim.')
  if (!i.premiumsUpToDate) out.push('All premiums must be paid on the schedule you chose.')
  if (i.exit === 'resigned') out.push('Job loss must be for a reason other than resignation.')
  if (i.exit === 'disciplinary') out.push('A dismissal for disciplinary reasons is not covered.')
  if (i.exit === 'contract_end') out.push('The scheme is for job loss through termination. Check the policy terms for how a contract ending is treated.')
  if (i.daysSinceEnd > 30) out.push('The claim must be submitted within 30 days of the end of the employment relationship.')
  if (i.absconding) out.push('You must not have an ongoing absconding complaint against you.')
  if (!i.inUae) out.push('You must be present in the UAE.')
  return out
}

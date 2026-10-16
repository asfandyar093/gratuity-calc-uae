// Single place to switch affiliate partners on or off.
//
// HOW TO TURN A PARTNER ON
//   1. Sign up and get approved in the partner's network (see the notes on each entry).
//   2. Paste your tracking link into `url` (it must start with https://).
//   3. Change `enabled` to true.
//   4. Commit and deploy.
//
// A partner shows on the site only when `enabled` is true AND `url` is a
// valid https link. Otherwise every placement renders nothing, so the
// pages look exactly as they do today.

export type AffiliateCategory = 'remittance' | 'travel' | 'esim' | 'career'

export interface AffiliatePartner {
  id: string
  name: string
  category: AffiliateCategory
  /** One neutral sentence shown in the card. No savings, speed or approval claims. */
  blurb: string
  ctaLabel: string
  enabled: boolean
  /** Your tracking link from the network. Leave empty until you have it. */
  url: string
  /** Notes for the site owner. Never rendered on the site. */
  note: string
}

export const AFFILIATE_PARTNERS: AffiliatePartner[] = [
  {
    id: 'worldremit',
    name: 'WorldRemit',
    category: 'remittance',
    blurb: 'A money transfer service with bank deposit and other payout options. Check the rate, the fee and the exact amount received on the transfer screen before you confirm.',
    ctaLabel: 'See WorldRemit',
    enabled: false,
    url: '',
    note: 'Network: Impact.com. Join from https://www.worldremit.com/en/partners-and-affiliates. Default commission GBP 30 per new customer after a transfer of at least GBP 50. New customers only.',
  },
  {
    id: 'remitly',
    name: 'Remitly',
    category: 'remittance',
    blurb: 'A money transfer app that serves senders in the UAE. Compare the total your family receives, not only the advertised rate, and read the offer terms for new customers.',
    ctaLabel: 'See Remitly',
    enabled: false,
    url: '',
    note: 'Network: Impact.com. Apply at https://app.impact.com/campaign-promo-signup/Remitly.brand. Commission is not published, confirm it after approval.',
  },
  {
    id: 'aviasales',
    name: 'Aviasales',
    category: 'travel',
    blurb: 'A flight search site that lists fares from many airlines and booking agents. Compare the total price, baggage allowance and change rules before you book.',
    ctaLabel: 'Search flights on Aviasales',
    enabled: false,
    url: '',
    note: 'Network: Travelpayouts. Register at https://travelpayouts.com. Pakistan payout method must be checked inside Finance, Payout methods before you rely on it.',
  },
  {
    id: 'airalo',
    name: 'Airalo',
    category: 'esim',
    blurb: 'An eSIM provider with prepaid data plans for many countries. Check that your phone supports eSIM and compare plan size and validity for your destination.',
    ctaLabel: 'See Airalo eSIMs',
    enabled: false,
    url: '',
    note: 'Network: Impact.com. Apply at https://partners.airalo.com/apply. Standard commission 10 percent of the sale value after discounts.',
  },
  {
    id: 'zety',
    name: 'Zety',
    category: 'career',
    blurb: 'An online CV builder with templates. Check current pricing and what is free before you subscribe.',
    ctaLabel: 'See Zety',
    enabled: false,
    url: '',
    note: 'Network: Trace Advertising. Apply from https://zety.com/affiliates. USD 12 per new subscriber. Pakistan payout route is not confirmed, check during signup.',
  },
]

export const CATEGORY_COPY: Record<AffiliateCategory, { badge: string; heading: string; intro: string }> = {
  remittance: {
    badge: 'MONEY TRANSFER',
    heading: 'Sending money home after you leave',
    intro: 'If you plan to move your settlement abroad, compare providers on the amount that actually arrives. Banks, exchange houses and apps differ on rate, fee and speed, and these change often.',
  },
  travel: {
    badge: 'TRAVEL',
    heading: 'Booking a flight home',
    intro: 'If your employer does not provide your ticket, or you want a different date, you can compare fares yourself. Keep your employer\u2019s written position on the ticket in your records either way.',
  },
  esim: {
    badge: 'TRAVEL',
    heading: 'Mobile data when you land',
    intro: 'A prepaid eSIM can give you data on arrival. It is optional and only works on eSIM compatible phones.',
  },
  career: {
    badge: 'JOB SEARCH',
    heading: 'Updating your CV after a job ends',
    intro: 'If you are job hunting after leaving, an up to date CV helps. A builder is optional, and many people use a plain document instead.',
  },
}

export function isPartnerActive(p: AffiliatePartner): boolean {
  return p.enabled && /^https:\/\/\S+$/.test(p.url.trim())
}

export function getActivePartners(category?: AffiliateCategory): AffiliatePartner[] {
  return AFFILIATE_PARTNERS.filter((p) => isPartnerActive(p) && (!category || p.category === category))
}

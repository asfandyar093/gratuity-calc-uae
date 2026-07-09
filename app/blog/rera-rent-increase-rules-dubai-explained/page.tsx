import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/rera-rent-increase-rules-dubai-explained'
const pageImage = '/images/blog/rera-rent-increase-rules-dubai-explained.png'
const pageTitle = 'RERA Rent Increase Rules Explained for Dubai Tenants (2026)'
const pageDescription = 'A plain-English breakdown of the Dubai Land Department (RERA) rent increase brackets, the 90-day notice rule, and exactly what to do if your landlord asks for more than the legal maximum.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['RERA rent increase rules', 'Dubai rent increase calculator', 'RERA rental index', 'Dubai tenant rights', 'Rental Dispute Settlement Centre Dubai'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'RERA rent increase rules explained for Dubai tenants' }],
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
      slug="rera-rent-increase-rules-dubai-explained"
      title={pageTitle}
      description={pageDescription}
      badge="HOUSING & TENANCY — 2026"
      intro="A renewal notice with a bigger number on it is one of the most stressful emails a Dubai tenant can get — but RERA sets a hard legal ceiling on how much your rent can actually go up, and it is easy to check."
      image={{
        src: '/images/blog/rera-rent-increase-rules-dubai-explained.png',
        alt: 'RERA rent increase rules explained for Dubai tenants',
        title: 'RERA Rent Increase Rules Explained',
        caption: 'Official Dubai Land Department brackets, notice periods, and tenant rights.',
      }}
      sections={[
        {
          heading: 'What RERA is and why it exists',
          body: [
            'RERA — the Real Estate Regulatory Agency — is the regulatory arm of the Dubai Land Department (DLD). One of its core jobs is keeping the rental market fair for both landlords and tenants by publishing an official Rental Index: a database of average market rents for comparable units, broken down by area, building, and unit size.',
            'Before RERA\'s bracket system existed, rent increases in Dubai could be applied almost arbitrarily at renewal time, which made budgeting difficult for tenants and created a steady stream of disputes. The bracket rules fix a maximum legal increase tied directly to how far a tenant\'s current rent sits below the market average for their specific type of unit — so a landlord cannot simply ask for whatever the market will bear in one jump.',
            'This matters for the same reason a gratuity or salary calculation matters: it is a number most expats in Dubai will personally deal with, usually once a year, and getting it wrong in either direction — accepting an illegal increase, or assuming you have no room to negotiate — has a real cost to your household budget.',
          ],
        },
        {
          heading: 'The exact bracket rules, with a worked example',
          body: [
            'The RERA formula compares your current annual rent to the RERA average market rent for a comparable unit, and maps the gap into one of five brackets:',
            'Rent within 10% of market average (i.e. your rent is at least 90% of the market rate): 0% increase allowed. Rent 11-20% below market average: up to 5% increase allowed. Rent 21-30% below market average: up to 10% increase allowed. Rent 31-40% below market average: up to 15% increase allowed. Rent more than 40% below market average: up to 20% increase allowed.',
            'Worked example: say your current annual rent is AED 60,000, and the RERA average market rent for a comparable unit in your building or area is AED 80,000. The gap is (80,000 − 60,000) ÷ 80,000 = 25%, which falls in the 21-30% bracket. That caps the legal increase at 10%, so the maximum new rent your landlord can legally ask for is AED 60,000 × 1.10 = AED 66,000 — an increase of AED 6,000, not a penny more, no matter what figure appears on the renewal notice.',
            'Notice that the percentage is always calculated against the market rent, not your current rent, and that it is a maximum, not a guaranteed increase. A landlord can renew at your existing rent, or anywhere up to the capped figure — but never above it.',
          ],
        },
        {
          heading: 'The 90-day notice requirement, in detail',
          body: [
            'Even a rent increase that falls squarely inside the correct bracket is not automatically valid. RERA also requires landlords to give tenants at least 90 days\' written notice before the Ejari lease renewal date if they intend to apply any increase at all.',
            'Valid notice generally means a clear, dated, written communication — commonly sent via registered mail, notarized letter, or through the Ejari/RERA-recognized renewal notice process — specifying the new rent amount, delivered at least 90 days before your current contract expires. A verbal mention in passing, a WhatsApp message sent with 30 days\' notice, or a notice that arrives after the renewal date does not meet the requirement.',
            'If you receive less than 90 days\' notice, the increase should not apply for that renewal cycle — you are generally entitled to renew at your existing rent for that year, and the landlord would need to give proper notice ahead of the following renewal to apply an increase then. Keep the notice itself (with its received date, e.g. a courier or email timestamp) as your primary evidence if this becomes a dispute.',
          ],
        },
        {
          heading: 'How to check the official RERA index yourself',
          body: [
            'Do not take a landlord\'s stated "market rate" at face value — check it yourself before responding to a renewal notice. The two official channels are the Dubai REST app (search "Dubai REST" from the Dubai Land Department, then use the Rental Index / Rent Calculator feature) and the DLD website, dubailand.gov.ae, which hosts the same rental index tool online.',
            'In either tool, you will typically select your area, building or building type, unit type (studio, 1BR, 2BR, etc.), and sometimes number of years since your last increase — the tool then returns the current average market rent RERA has on file for that combination. Use the closest match to your actual unit; a villa and an apartment in the same community, for example, will have very different index values.',
            'Once you have that figure, you have everything this calculator needs: your current rent and the RERA market rent. Run both through the bracket rules (or use our calculator directly) to see your exact legal maximum before you reply to any renewal notice.',
          ],
        },
        {
          heading: 'What to do if you believe an increase is illegal',
          body: [
            'If your landlord\'s proposed increase is above the bracket maximum, or notice was given with less than 90 days to spare, you have a real path to dispute it: Dubai\'s Rental Dispute Settlement Centre (RDSC), which handles exactly this category of landlord-tenant disagreement.',
            'Before filing, gather your documentation: the current tenancy contract (Ejari), the renewal notice (with proof of when it was received), your rent payment history, and — ideally — a screenshot or printout of the RERA market rent figure you checked via the Dubai REST app or dubailand.gov.ae. Clean, dated paperwork is what turns a dispute into a straightforward case rather than a drawn-out argument.',
            'Many disputes never reach a hearing — simply presenting the correct bracket calculation and the notice timeline to the landlord or property manager in writing resolves a large share of cases before filing is even necessary.',
          ],
        },
        {
          heading: 'Using the calculator as negotiation leverage',
          body: [
            'Even when an increase is technically within the legal bracket, tenants still have room to negotiate — landlords generally prefer a renewal over a vacancy, and a tenant who can cite the exact RERA figure and bracket percentage is a harder conversation to push back against with an inflated number.',
            'A practical approach: run your numbers through the calculator before your landlord or agent sends a renewal notice, so you already know your ceiling. If the notice comes in above that ceiling, reply in writing citing the RERA bracket and the specific market-rent figure you checked, and ask for a revised notice. If it comes in below the ceiling but still feels steep, you can reasonably point out that you are aware of the maximum and are choosing to discuss it rather than simply accepting the first number offered.',
            'Whatever the outcome, keep every exchange in writing. A polite, factual paper trail referencing the official RERA index is consistently the strongest position a Dubai tenant can be in at renewal time.',
          ],
        },
      ]}
      faq={[
        ['Is the RERA rent increase calculator legally binding?', 'The bracket percentages are the official rule set by the Dubai Land Department, but any calculator (including ours) is only as accurate as the market-rent figure you enter — always verify that figure via the Dubai REST app or dubailand.gov.ae before relying on the result.'],
        ['Can my landlord increase rent more than once a year?', 'No. An increase can only be proposed at lease renewal, following the correct bracket and with at least 90 days\' written notice — not mid-contract and not more than once per renewal cycle.'],
        ['Does RERA apply if I rent in Abu Dhabi or Sharjah?', 'RERA specifically governs Dubai. Other emirates have their own rental dispute committees that follow broadly similar fairness principles, but the exact rules and rental index differ, so check the relevant local authority if you rent outside Dubai.'],
        ['What if my landlord refuses to accept the RERA figure?', 'You can file a case with the Rental Dispute Settlement Centre (RDSC), bringing your tenancy contract, the renewal notice, and evidence of the official RERA market rent as supporting documentation.'],
        ['Does the 90-day notice apply to every renewal, even with no increase?', 'The 90-day notice requirement specifically concerns applying a rent increase. If a landlord is renewing at the same rent with no change, the strict 90-day increase notice rule is not the relevant trigger, though standard lease renewal communication still applies.'],
      ]}
      internalLinks={[
        { href: '/dubai-rent-increase-calculator-rera', label: 'Dubai Rent Increase Calculator (RERA)', description: 'Enter your current rent and the RERA market rent to see your exact legal maximum increase.' },
        { href: '/cost-of-living-calculator-uae', label: 'UAE cost of living calculator', description: 'Plan your full monthly budget, including rent, alongside your renewal decision.' },
        { href: '/salary-calculator', label: 'UAE salary calculator', description: 'Check your take-home pay to see how much rent headroom you realistically have.' },
      ]}
      externalLinks={[
        { href: 'https://dubailand.gov.ae', label: 'Dubai Land Department (DLD) — official RERA rental index', description: 'Official Dubai Land Department source for the RERA Rental Index and tenancy regulations.' },
      ]}
      datePublished="2026-07-09"
      dateModified="2026-07-09"
    />
  )
}

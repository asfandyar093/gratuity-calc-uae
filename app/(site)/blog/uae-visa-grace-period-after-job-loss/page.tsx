import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-visa-grace-period-after-job-loss'
const pageTitle = "UAE Visa Grace Period After Job Loss: 30 to 180 Days"
const pageDescription = "How long you can stay in the UAE after your residence permit is cancelled or expires: the 30, 60, 90 and 180 day grace periods, fines and what to do first."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["uae visa grace period", "grace period after visa cancellation uae", "job loss uae visa", "residence permit cancelled uae"],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "The short answer",
    "body": [
      "After your residence permit is cancelled or expires, you get a grace period before overstay fines start. The Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) sets the length by category. Skilled workers at MOHRE levels 1 to 3 get 90 days, and a permit that does not fit any of the other groups falls into the 30 day category, so check which one applies to you before you plan your timeline.",
      {
        "table": {
          "head": [
            "Grace period",
            "Who it applies to"
          ],
          "rows": [
            [
              "180 days",
              "Golden, Green and Blue residence holders and their families, widows and divorcees of residents, students after their studies end, and foreign passport relatives of UAE citizens"
            ],
            [
              "90 days",
              "Skilled occupations at MOHRE levels 1, 2 and 3, and property owners"
            ],
            [
              "60 days",
              "Residence permits issued with a guarantor or host"
            ],
            [
              "30 days",
              "All other categories"
            ]
          ]
        }
      },
      "These periods come from the ICP residence permit cancellation service page. The u.ae portal also describes grace periods of up to 6 months depending on the resident category. If you live in Dubai, also check what the General Directorate of Residency and Foreigners Affairs (GDRFA) shows for your own file, because that is the record that matters for your exit date."
    ]
  },
  {
    "heading": "When the grace period starts",
    "body": [
      "The period runs after the residence permit is cancelled or expires, not from the day you stop working. That difference matters. An employer has to finish the work permit and visa steps before your cancellation is complete, so the dates can be a few days apart. Ask HR for the cancellation date and keep a copy of the confirmation.",
      "The sequence for an employer led cancellation is set out on u.ae. The company first applies to the Ministry of Human Resources and Emiratisation (MOHRE) to cancel the labour contract and labour card, and you sign that application. The employer then applies to ICP to cancel the residence visa. For the work permit, the employer must give MOHRE a letter signed by you stating that you have received all your wages and end of service benefits. Read that letter carefully before you sign it. If your gratuity or leave pay has not arrived, ask for it first. The [final settlement checklist](/blog/uae-final-settlement-checklist) lists what to confirm.",
      "Under Article 53 of Federal Decree Law No. 33 of 2021, your employer must pay your wages and other entitlements within 14 days of the end date of the contract. You can work out the amount with the [UAE gratuity calculator](/) and the [final settlement calculator](/final-settlement-calculator-uae)."
    ]
  },
  {
    "heading": "What happens after the grace period ends",
    "body": [
      "ICP charges a fine of AED 50 for every day you stay in the country after the grace period for your permit type has ended. The u.ae portal states the same overstay rate for residence visas. The fine counts from the day after the grace period ends, so the safest approach is to treat the last day of the grace period as a hard deadline for either leaving or having a new permit in place.",
      "You can use the time in two ways. You can stay and look for a new employer, who will apply for a new work permit. Or you can leave the country. The u.ae termination page notes that after a contract ends you may remain in the UAE for the grace period to search for a new job and obtain a new work permit, or leave within that period."
    ]
  },
  {
    "heading": "Can you work for a new employer during the grace period?",
    "body": [
      "The law allows a worker to move to another employer when the contract ends in the ways the labour law recognises. The u.ae page lists these: the agreed term expired and was not renewed, the contract was ended during its term under the termination rules, or the employer ended it without any fault on your part.",
      "There is an important exception. Under Ministerial Resolution No. 47 of 2022, a worker cannot get a new work permit for one year from the date of leaving the UAE if the worker ended the job during the probation period without the employer breaching the contract, or if a work abandonment report against the worker was proven true. See [what happens in an absconding case](/blog/absconding-case-uae-employee-guide) for how that works.",
      "If you are in the middle of a dispute about unpaid pay, the [MOHRE complaint guide](/blog/how-to-file-mohre-complaint) explains the process. A complaint does not by itself extend your visa, so ask MOHRE or your employer how your visa status will be handled while it is open."
    ]
  },
  {
    "heading": "What to do in the first week after losing your job",
    "body": [
      {
        "steps": [
          "Ask for your termination or end of contract notice in writing and note the last working day.",
          "Calculate your gratuity, unused leave pay and notice pay so you know what to expect. The [how to calculate gratuity guide](/how-to-calculate-gratuity-uae) shows the formula.",
          "Ask HR for the visa cancellation date, then check your grace period on ICP Smart Services or the ICP app.",
          "Check whether you are subscribed to unemployment insurance. If you are, you have 30 days from the end of employment to file a claim. See the [ILOE calculator](/iloe-calculator-uae).",
          "Cancel the visas of any dependants you sponsor before your own is cancelled. The ICP service page says the residence permits of family members under a foreign worker's sponsorship must be cancelled first, or placed on hold for a set period with the fees paid.",
          "Start your job search straight away and tell prospective employers your grace period end date."
        ]
      }
    ]
  },
  {
    "heading": "Dependants and family visas",
    "body": [
      "If you sponsor a spouse or children, their residence is tied to yours. The u.ae portal says an individual sponsoring a spouse, children or other dependants must cancel the dependants visas before cancelling his or her own. The ICP page adds that the family permits can instead be placed on hold for a specified period with the due fees paid. Their grace period is set by their own category, so look at each permit rather than assuming the same date as yours.",
      "If you plan to stay and find a new job, a new employer will usually need to sponsor you again. Dependants can then be sponsored on the new permit if you meet the salary and occupation conditions for your category. The ICP service page mentions those salary and occupation conditions when a sponsor moves to a new employer, so ask the new employer to confirm them before you resign yourself to leaving."
    ]
  },
  {
    "heading": "How the grace period fits with gratuity and your savings",
    "body": [
      "A grace period gives you time, not income. Your gratuity, leave pay and any notice pay are the money you can rely on, so check them early. If your employer is late, you can ask MOHRE to help settle it. The [payment delay rules guide](/blog/uae-gratuity-payment-delay-rules) explains your options, and the [notice period calculator](/notice-period-calculator-uae) can confirm the notice figure.",
      "If you plan to stay for a while, a rough monthly budget helps. The [cost of living calculator](/cost-of-living-calculator-uae) lets you test different rent and spending levels. If you are leaving, plan how you will move your money home. See [the best way to send money home from the UAE](/blog/best-way-to-send-money-home-from-uae-2026)."
    ]
  }
]

const faq: [string, string][] = [
  [
    "How long is the grace period after a UAE visa is cancelled?",
    "It depends on your category. ICP lists 180 days for Golden, Green and Blue residence holders and some other groups, 90 days for skilled occupations at levels 1 to 3 and property owners, 60 days for permits issued with a guarantor or host, and 30 days for all other categories."
  ],
  [
    "What is the fine for overstaying after the grace period?",
    "ICP charges AED 50 for each day you stay after the grace period for your permit type has ended."
  ],
  [
    "When does the grace period start?",
    "It runs after the residence permit is cancelled or expires. It is not counted from your last working day, so ask HR for the cancellation date."
  ],
  [
    "Can I join a new employer during the grace period?",
    "Often yes, if your contract ended through expiry, a recognised termination, or an employer termination without fault on your part. A new work permit is not available for one year after leaving the UAE if you ended the job in probation without an employer breach or an absconding report was proven true."
  ],
  [
    "Do I still get gratuity after my visa is cancelled?",
    "Yes. Gratuity is a labour entitlement. Your employer must pay wages and other dues within 14 days of the end date of the contract under Article 53."
  ],
  [
    "Should my family visas be cancelled first?",
    "The u.ae portal says a sponsor must cancel dependants visas before cancelling his or her own. ICP also allows family permits to be placed on hold for a set period with the fees paid."
  ]
]

const internalLinks = [
  {
    "href": "/blog/uae-gratuity-visa-cancellation",
    "label": "What happens to gratuity when your visa is cancelled",
    "description": "Why visa cancellation does not cancel your dues."
  },
  {
    "href": "/blog/uae-final-settlement-checklist",
    "label": "Final settlement checklist",
    "description": "What to confirm before you sign anything."
  },
  {
    "href": "/iloe-calculator-uae",
    "label": "ILOE calculator",
    "description": "Unemployment insurance cost and payout."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "Steps if your dues are unpaid."
  }
]

const externalLinks = [
  {
    "href": "https://icp.gov.ae/services-details/?serviceid=64afe3c1035448005bd52e68",
    "label": "ICP: cancelling residence permits",
    "description": "Official grace periods, fees and overstay fines."
  },
  {
    "href": "https://u.ae/en/information-and-services/visa-and-emirates-id/Visa-information/general-provisions-for-the-residence-visa",
    "label": "u.ae: general provisions for the residence visa",
    "description": "Cancellation steps and overstay fines."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-visa-grace-period-after-job-loss"
      title="UAE Visa Grace Period After Job Loss: How Long Can You Stay?"
      description="How long you can stay in the UAE after your residence permit is cancelled or expires: the 30, 60, 90 and 180 day grace periods, fines and what to do first."
      badge="VISA GRACE PERIOD"
      intro="If your job ends and your residence permit is cancelled, the UAE gives you a grace period to find a new job or leave. How long it lasts depends on your residence category: 30, 60, 90 or 180 days."
      sections={sections}
      faq={faq}
      note="This page is general information from official sources. Grace periods and fines can change, so confirm your own dates with ICP or GDRFA before you rely on them. It is not legal advice."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/domestic-worker-annual-leave-ticket-uae'
const pageTitle = "Domestic Worker Annual Leave and Ticket Rules in the UAE"
const pageDescription = "Domestic workers in the UAE get at least 30 days paid annual leave and a round trip ticket home every 2 years. Rest, sick leave and wage rules explained."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["domestic worker annual leave uae", "domestic worker ticket every two years", "uae domestic workers law", "maid leave rules uae"],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "Which law applies to domestic workers",
    "body": [
      "Domestic workers are not covered by the main private sector labour law. They are governed by Federal Decree Law No. 9 of 2022 Concerning Domestic Workers, as amended by Federal Decree Law No. 21 of 2023. The u.ae portal says the law applies to 19 occupations, including housemaids, nannies, cooks, personal drivers, gardeners, home nurses, private tutors and guards.",
      "That is why end of service rules for these workers are different from those in the private sector formula. For gratuity, use the [domestic worker gratuity calculator](/gratuity-calculator/domestic-workers). For leave and travel, use this guide."
    ]
  },
  {
    "heading": "What the law gives a domestic worker",
    "body": [
      "The u.ae portal summarises the entitlements as follows.",
      {
        "table": {
          "head": [
            "Entitlement",
            "What the law provides"
          ],
          "rows": [
            [
              "Wages",
              "Paid as set in the standard contract, within 10 days from the due date"
            ],
            [
              "Weekly rest",
              "One day of paid rest each week"
            ],
            [
              "Daily rest",
              "12 hours of rest per day, including at least 8 consecutive hours"
            ],
            [
              "Annual leave",
              "Paid annual leave of no less than 30 days"
            ],
            [
              "Travel home",
              "A round trip ticket home every 2 years"
            ],
            [
              "Sick leave",
              "No more than 30 days of sick leave a year"
            ],
            [
              "Documents",
              "The worker keeps his or her own identity papers, such as passport and ID"
            ]
          ]
        }
      },
      "The employer must also provide suitable accommodation, appropriate meals and clothing, and medical care or health insurance. The employer cannot collect payments from the worker, directly or indirectly, except where the law, regulations or the approved contract form allow it."
    ]
  },
  {
    "heading": "Annual leave: how it works",
    "body": [
      "The minimum is 30 days of paid leave. The key word is paid: the worker receives wages for the leave period. The portal states the minimum as \"no less than 30 days\", so a contract can offer more but not less. The law and its executive rules cover how leave is scheduled and how part years are handled, so check your contract and the executive regulation for those details rather than relying on a general summary.",
      "In practice, annual leave and the ticket are often connected, because many workers use the leave to travel home. The law gives the ticket on a two year cycle, not every year. If a worker takes a long trip home every second year, the leave and the ticket can be planned together, but they are separate entitlements: the leave is paid time off, and the ticket is a travel cost the employer bears.",
      {
        "example": {
          "title": "Example: planning a two year cycle",
          "lines": [
            "Year 1: the worker takes part of the leave locally on dates agreed in writing",
            "Year 2: worker takes the full 30 days at home, with the round trip ticket paid by the employer",
            "Year 4: the next ticket falls due, two years after the last one",
            "This is only an example of how a cycle can work. The contract sets the actual arrangement, within the legal minimum"
          ]
        }
      }
    ]
  },
  {
    "heading": "The ticket home every 2 years",
    "body": [
      "The law says a domestic worker is entitled to a round trip ticket home every 2 years. Two details are worth confirming in your contract: which airport and class of travel the ticket covers, and what happens if the contract ends before the two years pass. The portal separately says the employer must bear the cost of returning the worker to their country in accordance with the law and its executive regulations. The first is about leave travel during employment, and the second is about the end of the contract.",
      "Do not confuse these with the repatriation ticket in a private sector final settlement. For that, see [repatriation ticket and final settlement](/blog/uae-repatriation-ticket-final-settlement)."
    ]
  },
  {
    "heading": "Rest, sick leave and wages",
    "body": [
      "Annual leave is not the only time off. A domestic worker has one day of paid rest each week and 12 hours of rest each day, with at least 8 of those hours consecutive. Sick leave is capped at 30 days a year, according to the u.ae summary. The portal does not say how much of that is paid, so check the executive regulation or ask MOHRE before you assume a figure.",
      "Wages must be paid within 10 days of the due date. If a wage is late, that is already a breach you can report. The employer is also required to let the worker keep personal identification papers. Taking a passport or ID card is not allowed under the law."
    ]
  },
  {
    "heading": "If leave or the ticket is not given",
    "body": [
      {
        "steps": [
          "Write down what was agreed and what was refused, with dates. Keep the contract and any messages.",
          "Ask the employer to confirm the leave dates and the ticket arrangements in writing.",
          "If it is still refused, submit a labour complaint to MOHRE. The portal says either party may do this and that the ministry will try to resolve it amicably within two weeks.",
          "If there is no settlement, the matter is referred to the competent court with the ministry's recommendation."
        ]
      },
      "Two protections are worth knowing. Domestic workers are exempt from litigation fees at all stages of the proceedings, and cases involving them must be expedited. Also, the portal says claims about rights arising from the law are inadmissible after three months from the date of termination of employment. That is a short window, so raise any unpaid leave or ticket claim early."
    ]
  },
  {
    "heading": "Notes for employers",
    "body": [
      "If you employ a domestic worker, put leave dates and ticket arrangements in the contract using the approved template. The portal says the contract must include entitled leaves, rest periods and conditions for termination, among other terms. A written plan avoids most disputes. It also helps to keep a record of wage payments through an approved channel, since wage payment evidence is the first thing asked for in a complaint.",
      "If the worker leaves the contract, the final dues may include unused leave, wages and the cost of returning the worker home as set out in the law. Use the [domestic worker gratuity calculator](/gratuity-calculator/domestic-workers) for the end of service amount, and the [final settlement calculator](/final-settlement-calculator-uae) as a checklist of the other items for private sector staff. Workers in the domestic category are outside unemployment insurance, so the [ILOE calculator](/iloe-calculator-uae) does not apply to them."
    ]
  }
]

const faq: [string, string][] = [
  [
    "How many days of annual leave does a domestic worker get in the UAE?",
    "No less than 30 days of paid annual leave, according to the u.ae portal summary of Federal Decree Law No. 9 of 2022."
  ],
  [
    "Does the employer pay for the flight home?",
    "The law gives a domestic worker a round trip ticket home every 2 years. The employer also bears the cost of returning the worker to their home country at the end, as the law and its regulations set out."
  ],
  [
    "How much rest does a domestic worker get?",
    "One day of paid rest per week and 12 hours of rest per day, including at least 8 consecutive hours."
  ],
  [
    "How much sick leave is allowed?",
    "No more than 30 days of sick leave a year. Check the executive regulation for how much is paid."
  ],
  [
    "Can an employer keep a domestic worker's passport?",
    "No. The worker has the right to keep personal identification papers such as passport and ID."
  ],
  [
    "How long do I have to claim unpaid leave?",
    "The u.ae portal says claims about rights arising from the law are inadmissible after three months from the date of termination of employment."
  ]
]

const internalLinks = [
  {
    "href": "/gratuity-calculator/domestic-workers",
    "label": "Domestic worker gratuity calculator",
    "description": "End of service amount for domestic workers."
  },
  {
    "href": "/blog/uae-repatriation-ticket-final-settlement",
    "label": "Repatriation ticket and final settlement",
    "description": "The private sector rules for return tickets."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "Steps to take if leave is refused."
  },
  {
    "href": "/mohre-annual-leave-calculator",
    "label": "Annual leave calculator",
    "description": "For private sector annual leave."
  }
]

const externalLinks = [
  {
    "href": "https://u.ae/en/information-and-services/jobs/workplace-regulations/domestic-helpers",
    "label": "u.ae: domestic workers",
    "description": "Official entitlements, employer obligations and disputes."
  },
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1593",
    "label": "Federal Decree Law No. 9 of 2022 on the UAE legislation portal",
    "description": "Official text of the domestic workers law."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="domestic-worker-annual-leave-ticket-uae"
      title="Domestic Worker Annual Leave and Ticket Rules in the UAE"
      description="Domestic workers in the UAE get at least 30 days paid annual leave and a round trip ticket home every 2 years. Rest, sick leave and wage rules explained."
      badge="DOMESTIC WORKERS"
      intro="Under the UAE domestic workers law, a domestic worker is entitled to paid annual leave of no less than 30 days and a round trip ticket home every 2 years. This guide covers those rights, daily and weekly rest, sick leave and what to do if they are not given."
      sections={sections}
      faq={faq}
      note="This page is general information from the u.ae portal summary of Federal Decree Law No. 9 of 2022. Read the full law and executive regulation for details such as scheduling and part years. It is not legal advice."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

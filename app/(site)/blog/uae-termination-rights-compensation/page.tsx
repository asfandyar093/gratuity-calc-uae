import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-termination-rights-compensation'
const pageTitle = "Terminated in the UAE? Notice, Pay and Gratuity"
const pageDescription = "Fired or made redundant in the UAE? How notice, dismissal without notice, unlawful termination compensation and gratuity work under the Labour Law in 2026."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["uae termination compensation gratuity"],
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: '/images/blog/photo/uae-termination-rights-compensation.webp', width: 1200, height: 630, alt: "Cardboard box with a plant and mug on an office desk after a job ends" }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: ['/images/blog/photo/uae-termination-rights-compensation.webp'] },
}

const sections = [
  {
    "heading": "How a contract ends",
    "body": [
      "Article 42 of Federal Decree Law No. 33 of 2021 lists the ways an employment contract ends. The common ones are a written agreement of both sides, expiry of the contract term, and the wish of either party after notice. The list also covers the death of the employer if the contract is tied to them, the death or full permanent inability of the worker, a final prison sentence of at least three months, permanent closure of the business, bankruptcy or economic reasons that stop the project, and a worker failing to meet the conditions to renew the work permit for reasons outside the employer's control.",
      "Why this matters: the reason a contract ended changes which later articles apply. A redundancy through closure is not handled the same way as a dismissal for misconduct."
    ]
  },
  {
    "heading": "Termination with notice",
    "body": [
      "Article 43 is the standard route. The party ending the contract must notify the other in writing. The notice period agreed in the contract must be at least 30 days and at most 90. The contract stays in force during the notice period, and the worker is entitled to full wage for it, based on the last wage received.",
      "Article 43(3) says the party who does not respect the notice period pays the other a notice period allowance, equal to the worker's wage for the full period or the remaining part, even if no damage was caused. That runs in both directions. An employer who dismisses someone on the spot without a reason covered by Article 44 owes the allowance.",
      "If the employer is the one ending the contract, Article 43(5) gives you one working day a week off, without pay, to look for another job. You pick the day, and you must tell the employer at least three days before."
    ]
  },
  {
    "heading": "Dismissal without notice: Article 44",
    "body": [
      "Article 44 lets the employer dismiss without notice in listed cases, but only after a written investigation with the worker, and the dismissal decision must be in writing and give reasons. The listed cases include:",
      {
        "list": [
          "Impersonation or forged certificates or documents.",
          "A mistake that caused gross physical losses, or deliberate damage to property that the worker acknowledged, if the employer reports it to the Ministry within seven working days.",
          "Breaching written safety instructions that are displayed and known to the worker.",
          "Failing to perform basic duties and continuing after a written investigation and two warnings of dismissal.",
          "Disclosing a work secret that causes loss or gives a personal benefit.",
          "Being drunk or under the influence of drugs during working hours, or breaching public morals at work.",
          "Assaulting the employer, manager, superior or a colleague at work.",
          "Absence without a legitimate reason for more than 20 intermittent days in a year or more than seven consecutive days.",
          "Using the position illegally for personal gain.",
          "Joining another establishment without following the prescribed procedure."
        ]
      },
      "If a dismissal letter relies on Article 44, check that there was a written investigation and that the stated reason matches one of these cases. A letter that cites no reason is a weak sign.",
      {
        "callout": "Gratuity after an Article 44 dismissal: the text of Article 44 does not itself say what happens to end of service benefits, and Article 51 sets one condition for a full time foreign worker, one year of continuous service. If an employer withholds gratuity after a dismissal, ask for the legal basis in writing and raise it with MOHRE."
      }
    ]
  },
  {
    "heading": "When the worker leaves without notice: Article 45",
    "body": [
      "Article 45 goes the other way. A worker can quit without notice and keep their end of service rights in four situations: the employer's breach of obligations, if the worker notifies the Ministry 14 working days beforehand and the employer does not fix it; assault, violence or harassment by the employer or their representative, reported within five working days; grave danger at the workplace that the employer knows about and does not address; and being told to do fundamentally different work without written consent.",
      "The conditions matter. Quitting because of unpaid salary without first notifying the Ministry is not covered in the way the article describes."
    ]
  },
  {
    "heading": "Unlawful termination and compensation",
    "body": [
      "Article 47 deals with termination that is unlawful because it was caused by the worker filing a serious complaint with the Ministry or a lawsuit against the employer, where the claim is proven valid. In that case the worker is awarded fair compensation, estimated by the competent court, taking into account the type of work, the damage and the length of service. The compensation cannot exceed three months of wage, calculated on the last wage.",
      "Article 47(3) says this does not affect your right to a notice period allowance and end of service benefits. Compensation is on top of, not instead of, your other dues.",
      "Article 46 adds a protection: an employer may not terminate someone for lack of health fitness before they have used their legally accrued leave."
    ]
  },
  {
    "heading": "What you are owed when you are terminated",
    "body": [
      {
        "table": {
          "head": [
            "Item",
            "Where it comes from"
          ],
          "rows": [
            [
              "Wage up to the end of the notice period",
              "Article 43(2)"
            ],
            [
              "Notice period allowance, if the employer did not give notice and no Article 44 case applies",
              "Article 43(3)"
            ],
            [
              "Gratuity, after one year of continuous service",
              "Article 51"
            ],
            [
              "Pay for unused annual leave",
              "Article 29(9)"
            ],
            [
              "Ticket home or return expenses, with exceptions",
              "Article 13(12)"
            ],
            [
              "Payment of all of the above within 14 days of the contract ending",
              "Article 53"
            ]
          ]
        }
      },
      "Use the final settlement calculator to put numbers on each line.",
      {
        "example": {
          "title": "Illustration: employer ends the contract without notice",
          "lines": [
            "Basic wage AED 10,000, total monthly wage AED 12,000",
            "Service: 4 years",
            "Gratuity: 333.33 × 21 × 4 = AED 28,000",
            "Notice allowance for a 30 day notice period not given: 12,000",
            "Unused annual leave, 10 days: 333.33 × 10 = AED 3,333"
          ],
          "total": "Total before other items: AED 43,333"
        }
      },
      "The figures show how the lines add up. They are not a prediction for any case, and the notice allowance depends on the wage definition in your contract."
    ]
  },
  {
    "heading": "Steps to take after you are terminated",
    "body": [
      {
        "steps": [
          "Ask for the termination in writing, with the reason and the date.",
          "Request the final settlement as an itemised sheet.",
          "Check the 14 day deadline in Article 53 and note the date it falls.",
          "Do not sign a statement that all dues are received until you have been paid.",
          "If the employer will not engage, submit a request to MOHRE under Article 54.",
          "Keep your contract, payslips, bank statements and all messages about the termination."
        ]
      },
      "Under Article 13(2), your employer may not withhold your official documents or force you to leave the country when the relationship ends. Under Article 13(11) you can ask for an experience certificate, free of charge."
    ]
  },
  {
    "heading": "Time limits for claims",
    "body": [
      "Article 54, as amended by Federal Decree Law No. 9 of 2024, says a claim for rights under the Labour Law is not heard after two years from the date the employment relationship ended. Do not wait until the end of that period. Evidence and bank records are easier to gather early."
    ]
  }
]

const faq: [string, string][] = [
  [
    "How much notice must my employer give me?",
    "The notice period is the one in your contract. Article 43 requires it to be at least 30 days and at most 90 days, in writing."
  ],
  [
    "Can I be dismissed without notice?",
    "Only in the cases listed in Article 44, after a written investigation, with a written and reasoned decision."
  ],
  [
    "Do I still get gratuity if I am terminated?",
    "Article 51 gives gratuity to a full time foreign worker with at least one year of continuous service. The article does not make gratuity depend on who ended the contract. If your employer disagrees, ask for the legal basis in writing."
  ],
  [
    "What if I was fired for complaining to MOHRE?",
    "Article 47 covers this where the complaint or lawsuit is proven valid. A court sets fair compensation, capped at three months of wage, and your notice allowance and gratuity are unaffected."
  ],
  [
    "How long do I have to claim?",
    "Under Article 54(9) as amended in 2024, two years from the end of the employment relationship."
  ]
]

const internalLinks = [
  {
    "href": "/blog/uae-gratuity-resignation-vs-termination",
    "label": "Resignation vs termination",
    "description": "What changes when you are the one who leaves."
  },
  {
    "href": "/notice-period-calculator-uae",
    "label": "Notice period calculator",
    "description": "Work out notice pay under Article 43."
  },
  {
    "href": "/final-settlement-calculator-uae",
    "label": "Final settlement calculator",
    "description": "Add up every line of your settlement."
  },
  {
    "href": "/blog/uae-gratuity-payment-delay-rules",
    "label": "Gratuity payment delay rules",
    "description": "What to do if payment is late."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "Submit a request step by step."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021, UAE Legislation portal",
    "description": "Official text of Articles 13, 29, 42 to 47, 51, 53 and 54."
  },
  {
    "href": "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-dispute",
    "label": "u.ae: resolving labour disputes",
    "description": "Government guidance on submitting a labour dispute to MOHRE."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-termination-rights-compensation"
      title={pageTitle}
      description={pageDescription}
      badge="TERMINATION RIGHTS"
      intro="Termination is not one thing in the UAE Labour Law. The notice you are owed, the compensation you might claim and the gratuity you receive depend on why and how the contract ended. This guide walks through the articles."
      image={{ src: '/images/blog/photo/uae-termination-rights-compensation.webp', alt: "Cardboard box with a plant and mug on an office desk after a job ends", title: pageTitle, caption: "Cardboard box with a plant and mug on an office desk after a job ends" }}
      sections={sections}
      faq={faq}
      note="This guide is general information based on official sources. Termination cases turn on facts and documents, so it is not legal advice. For a specific case, contact MOHRE or a UAE qualified employment lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-10"
      dateModified="2026-10-10"
    />
  )
}

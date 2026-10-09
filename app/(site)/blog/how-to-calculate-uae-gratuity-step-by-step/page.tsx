import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/how-to-calculate-uae-gratuity-step-by-step'
const pageTitle = "How to Calculate UAE Gratuity Step by Step (2026)"
const pageDescription = "How to calculate UAE gratuity step by step in 2026: basic salary, daily wage, years of service, the 21 and 30 day rule, the two year cap and worked examples."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["how to calculate gratuity in uae"],
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "What you need before you start",
    "body": [
      "You do not need a payslip full of figures. Four things are enough, and most of them are on your contract or your last payslip.",
      {
        "list": [
          "Your monthly basic salary, not the full package.",
          "Your joining date and your last working day.",
          "Any days of unpaid absence during your service.",
          "Your nationality and sector, because the standard rule only covers private sector foreign workers on the mainland."
        ]
      },
      "If one of those is missing, ask HR for it in writing before you try to check a settlement. A calculation built on a guessed basic salary is the most common reason two people get two different answers."
    ]
  },
  {
    "heading": "Step 1: find your basic salary",
    "body": [
      "Article 51 of Federal Decree Law No. 33 of 2021 says end of service benefits are calculated on the basic wage. Housing, transport, food and phone allowances are not part of it, and neither are overtime, commission or bonuses.",
      "Look at your contract or offer letter. It usually splits the package into basic salary and allowances. If your package is AED 15,000 and the contract says basic AED 9,000, the calculation starts from AED 9,000.",
      "Article 51(5) also says the benefit is worked out on the last basic wage you were entitled to. So the salary you earned in year one does not matter. What counts is the basic wage at the end. Our guide on allowances and basic salary goes into the grey cases."
    ]
  },
  {
    "heading": "Step 2: turn it into a daily wage",
    "body": [
      "The law speaks in days of wage: 21 days, or 30 days. To price one day you need a daily wage. Article 67 says a month counts as 30 days, which is where the usual method comes from: basic salary divided by 30. Our calculator uses it.",
      "A basic salary of AED 9,000 gives a daily wage of AED 300. If your employer uses a different divisor, ask them to show the formula on the settlement sheet."
    ]
  },
  {
    "heading": "Step 3: count your service",
    "body": [
      "Count from your joining date to your last working day. Gratuity needs at least one year of continuous service for a full time foreign worker (Article 51(2)). If you leave before that, there is no gratuity, although other dues such as salary and leave pay still apply.",
      "After the first year, part years count in proportion (Article 51(3)). Three years and six months is 3.5 years. Three years and three months is 3.25.",
      "Unpaid days of absence are not counted as service (Article 51(4)). If you took 30 days of unpaid leave, your counted service is 30 days shorter. Paid leave does not reduce it. If your contract was renewed or extended, the new term is added to the old one when your continuous service is counted (Article 8(4))."
    ]
  },
  {
    "heading": "Step 4: apply 21 days and 30 days",
    "body": [
      "Split your service at the five year mark.",
      {
        "table": {
          "head": [
            "Service",
            "Days of basic wage per year"
          ],
          "rows": [
            [
              "Years 1 to 5",
              "21 days"
            ],
            [
              "Every year after year 5",
              "30 days"
            ]
          ]
        }
      },
      "Only the years after year five earn 30 days. Your first five years stay at 21 days even if you stay for twenty. People often apply 30 days to the whole period, which overstates the result.",
      {
        "example": {
          "title": "Formula",
          "lines": [
            "Years 1 to 5: daily wage × 21 × number of years (up to 5)",
            "Years after 5: daily wage × 30 × number of years after 5"
          ],
          "total": "Add the two lines together"
        }
      }
    ]
  },
  {
    "heading": "Step 5: check the cap",
    "body": [
      "Article 51(6) says the total gratuity for a foreign worker must not exceed two years of wage. In practice that means 24 months of basic salary. You only reach it after about 25.5 years of service, so most people never see it, but long serving staff should check.",
      "The cap is worth a look because it can quietly make a large result smaller. If the formula gives more than 24 months of basic pay, the cap is what you receive."
    ]
  },
  {
    "heading": "Worked examples",
    "body": [
      {
        "example": {
          "title": "Example 1: 3 years, basic AED 8,000",
          "lines": [
            "Daily wage: 8,000 ÷ 30 = AED 266.67",
            "Years 1 to 3: 266.67 × 21 × 3 = AED 16,800"
          ],
          "total": "Gratuity: AED 16,800"
        }
      },
      {
        "example": {
          "title": "Example 2: 3 years 6 months, basic AED 6,000",
          "lines": [
            "Daily wage: 6,000 ÷ 30 = AED 200",
            "Service: 3.5 years",
            "200 × 21 × 3.5 = AED 14,700"
          ],
          "total": "Gratuity: AED 14,700"
        }
      },
      {
        "example": {
          "title": "Example 3: 7 years, basic AED 15,000",
          "lines": [
            "Daily wage: 15,000 ÷ 30 = AED 500",
            "Years 1 to 5: 500 × 21 × 5 = AED 52,500",
            "Years 6 and 7: 500 × 30 × 2 = AED 30,000"
          ],
          "total": "Gratuity: AED 82,500"
        }
      },
      {
        "example": {
          "title": "Example 4: 26 years, basic AED 10,000 (cap applies)",
          "lines": [
            "Daily wage: 10,000 ÷ 30 = AED 333.33",
            "Years 1 to 5: 333.33 × 21 × 5 = AED 35,000",
            "Years 6 to 26: 333.33 × 30 × 21 = AED 210,000",
            "Formula result: AED 245,000",
            "Cap: two years of basic wage = 24 × 10,000 = AED 240,000"
          ],
          "total": "Gratuity paid: AED 240,000"
        }
      },
      "These are illustrations built from the formula, not statements about any real person. Put your own salary and dates into the gratuity calculator to get a figure you can compare with your settlement sheet."
    ]
  },
  {
    "heading": "Step 6: look at deductions",
    "body": [
      "Article 51(7) lets the employer deduct amounts payable under the law or under a court judgment, using the conditions in the Implementing Regulation. A loan agreement you signed or compensation for unserved notice (Article 43) are the usual ones. A deduction with no document behind it deserves a question.",
      "Gratuity is also only one line of a settlement. Unpaid salary, unused annual leave, notice pay and a ticket home may sit beside it. The final settlement calculator adds them together."
    ]
  },
  {
    "heading": "Step 7: know the payment deadline",
    "body": [
      "Article 53 requires the employer to pay your wages and all other entitlements within 14 days of the contract ending. If the date passes, ask in writing first. If that fails, you can submit a request to MOHRE under Article 54. Our guide on how to file a MOHRE complaint walks through the process."
    ]
  },
  {
    "heading": "When this formula does not apply",
    "body": [
      {
        "list": [
          "UAE nationals: Article 51(1) sends them to the pension and social security legislation.",
          "Domestic workers: covered by Federal Decree Law No. 9 of 2022, which does not set a gratuity formula. See the domestic worker page.",
          "DIFC and ADGM employees: these free zones run their own employment regimes. DIFC uses the DEWS savings scheme.",
          "Part time and other work patterns: Article 52 leaves the method to the Implementing Regulation, so check it for your pattern.",
          "Employers in an approved alternative scheme: Article 51(8) lets the Cabinet approve other end of service schemes."
        ]
      }
    ]
  },
  {
    "heading": "Mistakes that change the answer",
    "body": [
      {
        "list": [
          "Using the gross package instead of basic salary.",
          "Applying 30 days to all years instead of only the years after year five.",
          "Forgetting that unpaid absence shortens counted service.",
          "Using the first salary instead of the last basic wage.",
          "Ignoring the two year cap on very long service.",
          "Rounding service down to whole years when part years count."
        ]
      },
      "If your employer's number is far from yours, the difference usually comes from one of these. The blog post on what HR sometimes gets wrong in a settlement shows how to trace it."
    ]
  }
]

const faq: [string, string][] = [
  [
    "How do I calculate gratuity in the UAE?",
    "Divide your basic salary by 30 to get a daily wage. Multiply by 21 for each of your first five years and by 30 for each year after that, counting part years in proportion. The total cannot exceed two years of wage."
  ],
  [
    "Do I use basic salary or total salary?",
    "Basic salary. Article 51 uses the basic wage, so allowances, overtime and bonuses are left out."
  ],
  [
    "Is there a minimum service period?",
    "Yes. A full time foreign worker needs one year of continuous service before gratuity is due under Article 51(2)."
  ],
  [
    "Does unpaid leave reduce gratuity?",
    "Yes. Article 51(4) says unpaid days of absence are not counted in the service term, so they shorten the period used in the calculation."
  ],
  [
    "When must gratuity be paid?",
    "Within 14 days of the end date of the contract, under Article 53."
  ]
]

const internalLinks = [
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Check your own figure with dates and unpaid leave."
  },
  {
    "href": "/gratuity-by-years-of-service",
    "label": "Gratuity by years of service table",
    "description": "See typical amounts after 1 to 30 years."
  },
  {
    "href": "/final-settlement-calculator-uae",
    "label": "Final settlement calculator",
    "description": "Add salary, leave and notice to gratuity."
  },
  {
    "href": "/blog/uae-gratuity-allowances-basic-salary",
    "label": "Allowances and basic salary",
    "description": "What counts as basic wage."
  },
  {
    "href": "/blog/uae-gratuity-two-year-cap",
    "label": "The two year cap",
    "description": "How and when the cap applies."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021, UAE Legislation portal",
    "description": "Official text of Articles 8, 43, 51, 53 and 54."
  },
  {
    "href": "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector",
    "label": "u.ae: end of service benefits in the private sector",
    "description": "Government summary of private sector end of service benefits."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="how-to-calculate-uae-gratuity-step-by-step"
      title={pageTitle}
      description={pageDescription}
      badge="STEP BY STEP"
      intro="Gratuity is 21 days of basic wage for each of your first five years and 30 days for each year after that, once you have completed one year of continuous service. The steps below turn that sentence into a number."
      sections={sections}
      faq={faq}
      note="This guide is general information based on official sources. It is not legal advice and it does not replace your contract or a MOHRE decision. For a dispute, contact MOHRE or a UAE qualified employment lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-10"
      dateModified="2026-10-10"
    />
  )
}

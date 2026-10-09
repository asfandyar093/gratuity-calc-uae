import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-annual-leave-rules-unused-leave-pay'
const pageTitle = "UAE Annual Leave Rules and Unused Leave Pay"
const pageDescription = "How many annual leave days do you get in the UAE, how does it accrue in the first year, can you carry it over, and how is unused leave paid when you leave?"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["uae annual leave rules unused leave pay"],
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
    "heading": "How many days you are entitled to",
    "body": [
      "Article 29(1) of Federal Decree Law No. 33 of 2021 sets the minimum annual leave at full wage as follows.",
      {
        "table": {
          "head": [
            "Situation",
            "Minimum paid leave"
          ],
          "rows": [
            [
              "Each year of service",
              "30 days"
            ],
            [
              "Service of more than six months and less than a year",
              "2 days for each month"
            ],
            [
              "Service ends before you used your balance",
              "Leave for the part of the last year you worked"
            ]
          ]
        }
      },
      "Your contract can give more than the minimum but not less. Article 29(6) confirms you are paid your wage during the leave. Article 29(7) adds that public holidays that fall during your leave are counted as part of it, unless your contract or company rules give you something better."
    ]
  },
  {
    "heading": "First year and part years",
    "body": [
      "The law does not give you a full 30 days on day one. In your first year, once you have worked more than six months, you accrue 2 days for each month. During probation, Article 29(3) lets an employer agree to grant leave from your balance, and if you do not pass probation you keep the right to be compensated for the rest of your balance.",
      "After that, leave builds with service. When a contract ends part way through a year, Article 29(9) gives you leave pay for parts of the year in proportion to the time you worked, calculated on the basic wage."
    ]
  },
  {
    "heading": "When you can take it and when the employer decides",
    "body": [
      "Article 29(4) says you should take your leave in the year it is earned. The employer may set the dates according to work needs, in agreement with you, or rotate leave between staff. They must tell you the date with enough time, not less than a month.",
      "Article 29(5) allows you to carry forward some or all of your balance to the next year, with your employer's approval and in line with the company's regulations. Article 29(8) adds that an employer cannot stop you using leave that has built up for more than two years, unless you want to carry it forward or take a cash allowance instead, in line with company regulations and the Implementing Regulation.",
      {
        "callout": "If your employer refuses leave for years in a row, keep the emails. Unused leave is paid when you leave, so the record shows the balance you are owed."
      }
    ]
  },
  {
    "heading": "What you are paid for unused leave when you leave",
    "body": [
      "Article 29(9) says you are entitled to wage for accrued leave days if you quit before using them, regardless of the leave duration, for the period you did not obtain leave. You also receive leave pay for parts of the year in proportion to the period worked. It is calculated on the basic wage.",
      "That gives a simple method for estimating the payout.",
      {
        "steps": [
          "Work out your total leave entitlement for the period you have not been paid for.",
          "Subtract leave you took.",
          "Divide your monthly basic salary by 30 for the daily wage.",
          "Multiply the daily wage by the unused days."
        ]
      }
    ]
  },
  {
    "heading": "Worked examples",
    "body": [
      {
        "example": {
          "title": "Example 1: full year, 12 days unused",
          "lines": [
            "Basic salary AED 9,000, daily wage AED 300",
            "Entitlement for the year: 30 days; taken: 18 days",
            "Unused: 12 days",
            "12 × 300 = AED 3,600"
          ],
          "total": "Leave pay: AED 3,600"
        }
      },
      {
        "example": {
          "title": "Example 2: leaving 8 months into the year",
          "lines": [
            "Basic salary AED 6,000, daily wage AED 200",
            "Proportional entitlement: 8 ÷ 12 × 30 = 20 days",
            "Taken: 6 days, unused: 14 days",
            "14 × 200 = AED 2,800"
          ],
          "total": "Leave pay: AED 2,800"
        }
      },
      "The first example matches the method used by our MOHRE annual leave calculator. These are illustrations of how the lines add up, not real cases."
    ]
  },
  {
    "heading": "How leave connects to your final settlement",
    "body": [
      "Leave pay is a separate line from gratuity. Gratuity is calculated under Article 51 on basic wage and service. Leave pay is calculated under Article 29 on basic wage and unused days. Both are due within 14 days of the contract ending under Article 53. If you only check the gratuity line on your settlement sheet, you may miss a leave balance that is thousands of dirhams.",
      "If you are resigning, the notice period also matters. Article 35 says that if either party gives notice while you are on leave, the notice period does not start until the day after your scheduled return, unless both agree otherwise."
    ]
  },
  {
    "heading": "Leave during notice and at the end of a contract",
    "body": [
      "Many people ask whether they can use their leave balance as part of their notice period. The Decree Law does not give a blanket rule in the articles quoted here, so the answer depends on your contract and on what your employer agrees. If you plan to do it, ask for the arrangement in writing, including whether the leave days run inside the notice period or are paid out on top of it.",
      "Also check how your last day is recorded. If leave is taken before the end date, the contract end date moves later, and that moves the 14 day payment deadline in Article 53. A clear written last working day and contract end date avoids arguments about when the money was due.",
      "Finally, remember that leave and gratuity are different tests. Leave starts to accrue from the first month. Gratuity does not begin until you have completed one year of continuous service. Someone leaving after ten months has no gratuity but may well have leave pay due."
    ]
  },
  {
    "heading": "Common problems",
    "body": [
      {
        "list": [
          "The employer says unused leave was forfeited. Article 29(9) says you are entitled to the wage for accrued days when you quit.",
          "The settlement pays leave on the total package. The article says to calculate on basic wage, so check which base was used, in both directions.",
          "Leave is counted in working days when the contract is in calendar days. Compare the unit in your contract with the unit on the sheet.",
          "The balance on HR's system does not match your own record. Ask for the ledger and compare it with your leave approvals."
        ]
      },
      "If the difference is not resolved in writing, you can submit a request to MOHRE under Article 54."
    ]
  }
]

const faq: [string, string][] = [
  [
    "How many days of annual leave do I get in the UAE?",
    "At least 30 days with full wage for each year of service, under Article 29(1). In the first year, once you have worked more than six months, it is 2 days for each month."
  ],
  [
    "Can I carry leave over to next year?",
    "Yes, with your employer's approval and in line with company regulations, under Article 29(5)."
  ],
  [
    "Will I be paid for unused leave when I leave?",
    "Yes. Article 29(9) entitles you to the wage for accrued leave days, including parts of the last year in proportion to your service, calculated on the basic wage."
  ],
  [
    "Do public holidays reduce my annual leave?",
    "Public holidays that fall during your leave are counted as part of it, unless your contract or company rules give you something more favourable (Article 29(7))."
  ],
  [
    "How much notice must my employer give about my leave dates?",
    "Article 29(4) says the employer must notify you of the date within a sufficient time, not less than a month."
  ]
]

const internalLinks = [
  {
    "href": "/mohre-annual-leave-calculator",
    "label": "MOHRE annual leave calculator",
    "description": "Price your unused leave."
  },
  {
    "href": "/blog/uae-leave-salary-calculation-guide",
    "label": "Leave salary calculation guide",
    "description": "More on leave pay and the basic wage."
  },
  {
    "href": "/blog/unpaid-leave-gratuity-uae",
    "label": "Unpaid leave and gratuity",
    "description": "How unpaid days change service."
  },
  {
    "href": "/final-settlement-calculator-uae",
    "label": "Final settlement calculator",
    "description": "Add leave pay to gratuity."
  },
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Estimate gratuity on your dates."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021, UAE Legislation portal",
    "description": "Official text of Articles 29, 35, 43, 51, 53 and 54."
  },
  {
    "href": "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-rights",
    "label": "u.ae: labour rights",
    "description": "Government information on worker rights in the private sector."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-annual-leave-rules-unused-leave-pay"
      title={pageTitle}
      description={pageDescription}
      badge="ANNUAL LEAVE"
      intro="The Labour Law gives at least 30 days of paid leave for each year of service, 2 days a month in the first year after six months, and pay for any unused days when you leave. Here is how it works and how to price your balance."
      sections={sections}
      faq={faq}
      note="This guide is general information based on official sources, not legal advice. Your contract may give you more than the legal minimum, and the Implementing Regulation adds detail. For a dispute, contact MOHRE or a UAE qualified lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-10"
      dateModified="2026-10-10"
    />
  )
}

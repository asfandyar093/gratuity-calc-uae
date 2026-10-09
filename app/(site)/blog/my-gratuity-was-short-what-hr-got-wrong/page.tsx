import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/my-gratuity-was-short-what-hr-got-wrong'
const pageImage = "/images/blog/photo/my-gratuity-was-short-what-hr-got-wrong.webp"
const pageTitle = "Gratuity Looks Short? Three Common Errors and Costs"
const pageDescription = "Your UAE settlement gratuity looks lower than expected? Three common errors, a wrong joining date, a wrong basic salary and unpaid leave, with what each costs."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["UAE gratuity calculation error", "gratuity short payment UAE", "final settlement dispute UAE", "HR gratuity mistake"],
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: "Calculator and pen next to a settlement form" }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: [pageImage] },
}

const sections = [
  {
    "heading": "A note on these examples",
    "body": [
      "The cases below are illustrations built from the Article 51 formula. They are not accounts of real people, and the numbers are chosen to show how the formula behaves. An earlier version of this page was written as a first person story that we could not verify, so we replaced it with these examples.",
      "For a full walkthrough of the formula itself, read how to calculate UAE gratuity step by step. This page is about finding why two numbers disagree."
    ]
  },
  {
    "heading": "The base case",
    "body": [
      {
        "example": {
          "title": "Employee, 5 years 6 months, basic AED 9,800",
          "lines": [
            "Daily wage: 9,800 ÷ 30 = AED 326.67",
            "Years 1 to 5: 326.67 × 21 × 5 = AED 34,300",
            "Half year after year 5: 326.67 × 30 × 0.5 = AED 4,900"
          ],
          "total": "Gratuity: AED 39,200"
        }
      },
      "Now see what happens when one input is wrong."
    ]
  },
  {
    "heading": "Error 1: the joining date is a few days late",
    "body": [
      "Payroll systems often record the date the employee was added to the labour card or payroll, not the date they started work. If the recorded date is 14 days later than the real one, the missing 14 days sit at the end of the service and are priced at 30 days a year.",
      {
        "example": {
          "title": "14 days of service missing",
          "lines": [
            "14 ÷ 365 = 0.038 of a year",
            "0.038 × 30 days = 1.15 days of wage",
            "1.15 × 326.67 = about AED 376"
          ],
          "total": "Cost of the date error: about AED 376"
        }
      },
      "So a short date gap is worth a question, but it will not explain a gap of thousands. Article 67 counts the year as 365 days and the month as 30 days, so use those when you compare. Ask HR to show the start date used and the end date used."
    ]
  },
  {
    "heading": "Error 2: the wrong basic salary",
    "body": [
      "This is the one that moves the number most. Article 51(5) says the calculation uses the last basic wage. If your payslip says AED 9,800 and the settlement sheet used AED 8,500, every day in the formula is priced lower.",
      {
        "example": {
          "title": "Basic AED 8,500 used instead of AED 9,800",
          "lines": [
            "Days of wage owed: 105 + 15 = 120",
            "At AED 9,800 (daily 326.67): AED 39,200",
            "At AED 8,500 (daily 283.33): AED 34,000"
          ],
          "total": "Difference: AED 5,200"
        }
      },
      "Common reasons: an old salary kept in the system after a raise, basic and allowances mixed up, or a package that was restructured. Compare the figure on the settlement sheet with your last payslip."
    ]
  },
  {
    "heading": "Error 3: unpaid leave counted wrongly",
    "body": [
      "Article 51(4) says days of unpaid absence are not counted as service. That reduces gratuity, and it should. The error is when it is applied twice, applied to paid leave, or applied to the wrong dates.",
      {
        "example": {
          "title": "30 days of unpaid leave deducted from the 30 day bracket",
          "lines": [
            "30 ÷ 365 = 0.082 of a year",
            "0.082 × 30 days = 2.47 days of wage",
            "2.47 × 326.67 = about AED 806"
          ],
          "total": "Effect of 30 unpaid days: about AED 806"
        }
      },
      "Ask for the list of unpaid dates HR used. Match them with your own leave records. Our unpaid leave guide shows how the service period is adjusted."
    ]
  },
  {
    "heading": "How to ask HR without a fight",
    "body": [
      {
        "steps": [
          "Ask for the calculation in writing: basic salary used, start date used, end date used, unpaid days deducted, and the formula.",
          "Put your own figures beside them in a short table.",
          "Attach the documents: contract, offer letter, last payslip and leave records.",
          "Point to the single line that differs and ask them to confirm or correct it.",
          "Keep the thread. If it stays unresolved, you can submit a request to MOHRE under Article 54."
        ]
      },
      "Asking for the working is not an accusation. Most differences come from a wrong input, and a wrong input is easy to fix once it is on the page."
    ]
  },
  {
    "heading": "Deadlines",
    "body": [
      "Article 53 requires payment of wages and entitlements within 14 days of the end of the contract. Article 54(9), as amended in 2024, says a claim is not heard after two years from the end of the employment relationship. Check the payment date first, then the date of any dispute, and keep proof of both."
    ]
  }
]

const faq: [string, string][] = [
  [
    "Why does my gratuity look lower than my calculation?",
    "The usual causes are a wrong joining or end date, a wrong basic salary, or unpaid leave days that were deducted incorrectly. Ask HR for the calculation and compare each input."
  ],
  [
    "How much does a few days of wrong service cost?",
    "In the 30 day bracket, one day of service is worth about 30 ÷ 365 of a day of wage, so 14 missing days cost roughly one day of wage. Date errors rarely explain large gaps."
  ],
  [
    "Which salary should be used?",
    "The last basic wage, under Article 51(5)."
  ],
  [
    "What can I do if HR does not correct it?",
    "Put your request in writing and, if needed, submit a request to MOHRE under Article 54."
  ]
]

const internalLinks = [
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Run your own dates and basic salary."
  },
  {
    "href": "/blog/how-to-calculate-uae-gratuity-step-by-step",
    "label": "How to calculate gratuity step by step",
    "description": "The formula with worked examples."
  },
  {
    "href": "/blog/how-to-read-uae-final-settlement-sheet",
    "label": "How to read a final settlement sheet",
    "description": "Line by line checks."
  },
  {
    "href": "/blog/unpaid-leave-gratuity-uae",
    "label": "Unpaid leave and gratuity",
    "description": "How unpaid days change service."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "If the figure stays wrong."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021, UAE Legislation portal",
    "description": "Official text of the Labour Law."
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
      slug="my-gratuity-was-short-what-hr-got-wrong"
      title={pageTitle}
      description={pageDescription}
      badge="CASE EXAMPLES"
      intro="When a gratuity figure looks low, the cause is usually one of three inputs: the joining date, the basic salary or the unpaid leave days. The examples below show how much each one can move the result."
      image={{
        src: pageImage,
        alt: "Calculator and pen next to a settlement form",
        title: "Checking a UAE gratuity figure",
        caption: "Three inputs account for most gratuity differences. Check them before you assume anything else.",
      }}
      sections={sections}
      faq={faq}
      note="This page uses illustrative examples built from the Labour Law formula. It is general information and not legal advice. For a dispute, contact MOHRE or a UAE qualified employment lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-06-18"
      dateModified="2026-10-10"
    />
  )
}

import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/i-resigned-without-job-lined-up-uae-gratuity'
const pageImage = "/images/blog/real/uae-gratuity-blog-human-cover.webp"
const pageTitle = "Resigning Without Another Job: What Happens to Gratuity"
const pageDescription = "Resigning in the UAE with no new job does not cancel gratuity once you have one year of service. See the rule, the notice period and a worked example."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["resigning UAE gratuity", "quit job UAE no job lined up", "UAE resignation gratuity 2026", "does resigning affect gratuity"],
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: "A desk with a closed laptop, a folder of papers and a coffee cup, suggesting someone who has just resigned" }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: [pageImage] },
}

const sections = [
  {
    "heading": "About this page",
    "body": [
      "An earlier version of this page was a first person story that we could not verify. It has been replaced with a plain explanation and an illustrative example. The figures below are built from the formula and do not describe a real person."
    ]
  },
  {
    "heading": "The old rule people still repeat",
    "body": [
      "Many people in the UAE still say that resigning before a certain number of years cuts your gratuity, often to a third or two thirds. That belonged to the previous Labour Law. Federal Decree Law No. 33 of 2021, in force since 2 February 2022, sets gratuity in Article 51 and attaches one condition for a full time foreign worker: one year of continuous service.",
      "The article does not reduce gratuity because you resigned. If your employer says it does, ask them to show the article in writing."
    ]
  },
  {
    "heading": "What you do owe when you resign",
    "body": [
      "Resigning has a cost, but it is a different one. Article 43 requires written notice, with the notice period set in your contract, between 30 and 90 days. You work during that period if the employer asks, and you are paid your wage for it.",
      "If you leave without respecting the notice period, you owe the employer a notice period allowance equal to your wage for the full period or the remaining part. That is separate from gratuity, and Article 51(7) allows lawful deductions from end of service benefits."
    ]
  },
  {
    "heading": "A worked example",
    "body": [
      {
        "example": {
          "title": "Resigns after 3 years 8 months, basic AED 7,500",
          "lines": [
            "Daily wage: 7,500 ÷ 30 = AED 250",
            "Service: 3 years 8 months = 3.67 years",
            "250 × 21 × 3.67 = about AED 19,250"
          ],
          "total": "Gratuity: about AED 19,250"
        }
      },
      "If the employee left without serving a 30 day notice period on a wage of AED 9,000, the employer could claim an allowance of AED 9,000 and deduct it, leaving about AED 10,250. The numbers show why notice matters. They are an illustration, not a real case."
    ]
  },
  {
    "heading": "Before you hand in your notice",
    "body": [
      {
        "steps": [
          "Read your contract for the notice period and any clauses about leaving.",
          "Work out your gratuity and unused leave with the calculators so you know your final settlement.",
          "Check your visa and labour card position. Article 50 says a foreign worker who leaves for an illegitimate reason before the contract ends can be barred from a new work permit for one year, so do not simply stop coming to work.",
          "Resign in writing and keep a copy.",
          "Agree your last working day and the date the contract ends in writing.",
          "Ask for the settlement as an itemised sheet."
        ]
      }
    ]
  },
  {
    "heading": "Timing and payment",
    "body": [
      "Article 53 requires payment of wages and entitlements within 14 days of the end of the contract. If the money does not arrive, ask in writing, and if you need to, submit a request to MOHRE under Article 54. Article 13(2) says your employer may not withhold your official documents or force you to leave the country at the end of the relationship.",
      "Money questions after a resignation are easier when the dates are clear. If you can, avoid leaving the country before the settlement is paid, or at least leave a way for HR to reach you."
    ]
  }
]

const faq: [string, string][] = [
  [
    "Do I lose gratuity if I resign?",
    "No. Article 51 gives gratuity to a full time foreign worker with one year of continuous service. It does not reduce it because the worker resigned."
  ],
  [
    "Is there a gratuity if I resign before one year?",
    "No. One year of continuous service is the condition under Article 51(2). Other dues such as salary and leave pay still apply."
  ],
  [
    "What do I owe if I do not serve my notice?",
    "A notice period allowance equal to your wage for the full period or the remaining part, under Article 43(3)."
  ],
  [
    "When must I be paid?",
    "Within 14 days of the end of the contract, under Article 53."
  ]
]

const internalLinks = [
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Estimate your gratuity on your dates."
  },
  {
    "href": "/blog/uae-gratuity-resignation-vs-termination",
    "label": "Resignation vs termination",
    "description": "How the two compare."
  },
  {
    "href": "/notice-period-calculator-uae",
    "label": "Notice period calculator",
    "description": "Price your notice pay."
  },
  {
    "href": "/blog/uae-termination-rights-compensation",
    "label": "Termination rights and compensation",
    "description": "What changes if your employer ends the contract."
  },
  {
    "href": "/final-settlement-calculator-uae",
    "label": "Final settlement calculator",
    "description": "Add every line together."
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
      slug="i-resigned-without-job-lined-up-uae-gratuity"
      title={pageTitle}
      description={pageDescription}
      badge="RESIGNATION"
      intro="Resigning without another job does not cancel your gratuity. Article 51 gives it to a full time foreign worker with one year of continuous service, and the article does not make it depend on who ended the contract."
      image={{
        src: pageImage,
        alt: "A desk with a closed laptop, a folder of papers and a coffee cup, suggesting someone who has just resigned",
        title: "Resigning without a new job",
        caption: "The decision to resign and the gratuity calculation are separate. What you need is the paperwork and the notice period.",
      }}
      sections={sections}
      faq={faq}
      note="This page is general information based on official sources and is not legal advice. For a dispute, contact MOHRE or a UAE qualified employment lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-06-24"
      dateModified="2026-10-10"
    />
  )
}

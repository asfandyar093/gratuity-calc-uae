import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-gratuity-death-of-employee'
const pageTitle = "Gratuity on the Death of an Employee in the UAE"
const pageDescription = "What happens to end of service gratuity, wages and other dues when an employee dies in the UAE? Article 15, who receives it, timing and body repatriation costs."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["gratuity death of employee uae"],
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: '/images/blog/photo/uae-gratuity-death-of-employee.webp', width: 1200, height: 630, alt: "Reading glasses resting on papers under a desk lamp" }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: ['/images/blog/photo/uae-gratuity-death-of-employee.webp'] },
}

const sections = [
  {
    "heading": "What is owed when a worker dies",
    "body": [
      "A death is hard enough without a payroll question on top of it, so here is the position in plain terms. Under Federal Decree Law No. 33 of 2021, a contract ends on the death of the worker, or on their full permanent inability to work as shown by a medical certificate (Article 42). The money the worker had earned does not disappear.",
      "Article 15(1) refers to the wages or financial entitlements due to the worker, in addition to the end of service benefits the worker was entitled to under the law. All of that can be handed to the family. So the unpaid salary, the pay for unused annual leave and the gratuity can all be part of what the family receives.",
      {
        "callout": "Gratuity still needs at least one year of continuous service under Article 51(2). If the worker had not completed a year, no gratuity is due, although wages and leave pay still are."
      }
    ]
  },
  {
    "heading": "Who receives the money",
    "body": [
      "Article 15(2) lets the worker name, in writing, the person in their family who should receive their rights in case of death. If your relative did that, the document matters. Ask the employer whether they hold such a nomination.",
      "If there is no written nomination, the employer deals with the worker's family. We do not set out rules of inheritance here, because that depends on the worker's nationality, religion and family situation and on the courts. If the family and employer disagree about who should receive the money, or the family cannot be reached, Article 15(4) allows the Ministry, together with the authorities concerned, to set a mechanism to keep the worker's entitlements when they cannot be handed over."
    ]
  },
  {
    "heading": "The timing",
    "body": [
      "Article 15(1) says the employer may hand over the entitlements to the worker's family within a period not exceeding 10 days from the date of death or from the date the employer became aware of it. That period is shorter than the 14 days in Article 53 that applies to ordinary payments at the end of a contract.",
      "The word used is that the employer may hand over, within that period. If you are the family and nothing has been paid after ten days, ask for a written statement of what is owed and when it will be paid. If the employer does not engage, you can submit a request to MOHRE under Article 54."
    ]
  },
  {
    "heading": "Sending the body home",
    "body": [
      "Article 15(3) is specific: the employer bears all the costs of preparing and transporting the body of the deceased worker to their home country or place of residence, if the family requests it. That is separate from gratuity and not deducted from it.",
      "If a family is told to pay for repatriation of remains, they can ask the employer to explain the legal basis for charging them. The practical steps, documents and permits involved come from the police, the health authority, the embassy and the airline, and they change by emirate and by country. Ask the employer's HR team and your embassy for the current list rather than relying on a checklist from a forum."
    ]
  },
  {
    "heading": "If the death was caused by work",
    "body": [
      "Article 37 sets out compensation for work injuries and occupational diseases. If the injury or disease led to death, the family is entitled to compensation equal to the worker's basic wage for 24 months. The amount cannot be less than AED 18,000 or more than AED 200,000. It is calculated on the basic wage the worker was receiving before death and is shared among the eligible beneficiaries under the Implementing Regulation.",
      "Article 37(3) also says the family's rights in end of service benefits and other financial entitlements are preserved. In other words, work injury compensation does not replace gratuity. It comes in addition. Article 38 lists cases where the worker is not entitled to injury compensation, such as injury under the influence of alcohol or drugs, or from deliberate violation of posted safety instructions."
    ]
  },
  {
    "heading": "A worked illustration",
    "body": [
      {
        "example": {
          "title": "Illustration: worker dies after 4 years of service",
          "lines": [
            "Basic wage AED 7,500, daily wage AED 250",
            "Gratuity: 250 × 21 × 4 = AED 21,000",
            "Unused annual leave, 12 days: 250 × 12 = AED 3,000",
            "Unpaid salary for 9 days worked in the month: AED 2,250",
            "If work related: 24 × 7,500 = AED 180,000 compensation, shared among beneficiaries"
          ],
          "total": "Ordinary dues: AED 26,250, plus compensation if the death was work related"
        }
      },
      "This is an illustration of how the lines add up, not a statement about any real case. The compensation line only applies if the death meets the conditions in Articles 37 and 38."
    ]
  },
  {
    "heading": "What a family can do first",
    "body": [
      {
        "steps": [
          "Ask the employer for a written list of what is owed: salary, leave pay, gratuity and any other entitlement.",
          "Ask whether the worker named a recipient in writing under Article 15(2).",
          "Ask who is paying for the repatriation of remains and get that in writing under Article 15(3).",
          "Keep the contract, payslips, labour card, bank statements and any messages with the employer.",
          "If the 10 day period passes without payment or a clear answer, submit a request to MOHRE.",
          "Speak to your embassy. Consulates often help families with employer and legal questions."
        ]
      },
      "A UAE qualified lawyer can help with inheritance and with a dispute over who receives the money. Do not sign any waiver that says all dues have been paid until you have received the money."
    ]
  }
]

const faq: [string, string][] = [
  [
    "Is gratuity paid if an employee dies?",
    "Yes. Article 15(1) refers to wages, financial entitlements and end of service benefits that can be handed to the family. Gratuity still needs one year of continuous service under Article 51(2)."
  ],
  [
    "How long does the employer have to pay the family?",
    "Article 15(1) refers to a period not exceeding 10 days from the date of death or from the date the employer became aware of it."
  ],
  [
    "Who pays to send the body home?",
    "Under Article 15(3), the employer bears all costs of preparing and transporting the body to the home country or place of residence if the family requests it."
  ],
  [
    "Can the worker choose who receives the money?",
    "Yes. Article 15(2) allows the worker to name a family member in writing to receive their rights in case of death."
  ],
  [
    "Is there extra compensation for a work related death?",
    "Article 37(3) provides compensation equal to 24 months of basic wage, between AED 18,000 and AED 200,000, in addition to end of service benefits."
  ]
]

const internalLinks = [
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Estimate the gratuity part of the dues."
  },
  {
    "href": "/final-settlement-calculator-uae",
    "label": "Final settlement calculator",
    "description": "Add salary and leave to gratuity."
  },
  {
    "href": "/blog/uae-final-settlement-checklist",
    "label": "Final settlement checklist",
    "description": "Every line to check."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "If the employer does not respond."
  },
  {
    "href": "/blog/uae-gratuity-less-than-1-year",
    "label": "Gratuity for less than one year",
    "description": "What is owed before the first year."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021, UAE Legislation portal",
    "description": "Official text of Articles 15, 37, 38, 42, 51 and 54."
  },
  {
    "href": "https://mohre.gov.ae",
    "label": "MOHRE",
    "description": "The ministry that handles labour disputes and worker entitlements."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-gratuity-death-of-employee"
      title={pageTitle}
      description={pageDescription}
      badge="DEATH OF AN EMPLOYEE"
      intro="When a worker dies, the end of service gratuity is not lost. Article 15 of the Labour Law deals with who receives the dues, within what period, and who pays to send the body home if the family asks."
      image={{ src: '/images/blog/photo/uae-gratuity-death-of-employee.webp', alt: "Reading glasses resting on papers under a desk lamp", title: pageTitle, caption: "Reading glasses resting on papers under a desk lamp" }}
      sections={sections}
      faq={faq}
      note="This guide is general information based on official sources and is not legal advice. Cases involving death raise inheritance, nationality and evidence questions. Please speak to MOHRE, your embassy or a UAE qualified lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-10"
      dateModified="2026-10-10"
    />
  )
}

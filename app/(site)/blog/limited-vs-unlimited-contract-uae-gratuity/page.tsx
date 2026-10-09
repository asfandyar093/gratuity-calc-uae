import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/limited-vs-unlimited-contract-uae-gratuity'
const pageTitle = "Limited vs Unlimited Contract in the UAE: Gratuity"
const pageDescription = "Are unlimited contracts still valid in the UAE? Article 8 and Article 68 explained, plus how gratuity works for fixed term contracts, renewals and old service."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["limited vs unlimited contract uae gratuity"],
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
    "heading": "The short version",
    "body": [
      "If you search for limited and unlimited contracts you will find old advice that says the type of contract changes your gratuity, your notice period and whether resigning costs you money. That advice describes the law before 2022. It is now out of date for most people.",
      "The current Labour Law, in force since 2 February 2022, uses one gratuity rule for private sector foreign workers: Article 51. The contract type is not a variable in that formula. What matters is your basic wage, your continuous service and the rules on cap, unpaid absence and deductions.",
      {
        "callout": "Practical point: if a gratuity calculator asks you to choose limited or unlimited, check what it does with your answer. Under the current law the Article 51 formula is the same for both."
      }
    ]
  },
  {
    "heading": "What Article 8 says about contract terms",
    "body": [
      "Article 8 of the Decree Law covers the employment contract. Four clauses matter here.",
      {
        "list": [
          "Article 8(3): the contract is concluded for a specific term not exceeding three years. By agreement, the parties may extend or renew it for another similar term or a shorter one, once or more.",
          "Article 8(4): when a contract is extended or renewed, the new term is added to the original term when your continuous service is calculated.",
          "Article 8(5): if both sides keep working under the contract after the term ends, without an express agreement, the original contract is treated as extended on the same conditions.",
          "Article 8(1): the employer must make a written contract in two copies, one for each side."
        ]
      },
      "The effect is simple. A fixed term contract that ends and is renewed does not reset your service. Three renewals of two years each are counted as six years of continuous service, not four separate contracts of two years."
    ]
  },
  {
    "heading": "What happened to unlimited contracts",
    "body": [
      "Before 2022, many contracts were of undefined term under Federal Law No. 8 of 1980. Article 68 of the new law deals with them directly. It says the new provisions apply to those contracts, and it required employers to adjust their situations and convert undefined term contracts to fixed term contracts within one year of the law coming into force. The Minister could extend that period when the public interest required it.",
      "Article 68(3) adds a transition rule: subject to the conversion requirement, the employer may calculate end of service benefits in line with the terms of the old undefined term contract under the 1980 law. That sentence is why you may still see unlimited contracts mentioned in disputes over old service.",
      "We have not found an official source in the text we checked that states the final deadline after any extensions, so we do not give a date here. If your contract is still described as unlimited, ask HR which date it was converted and ask MOHRE how the transition rule applies to your service."
    ]
  },
  {
    "heading": "How gratuity works for a fixed term contract",
    "body": [
      "For a full time foreign worker, Article 51(2) gives 21 days of basic wage for each of the first five years and 30 days for each year after that, once one year of continuous service is complete. The rest of the article applies in the usual way: part years in proportion, unpaid absence excluded, last basic wage, two year cap, lawful deductions.",
      {
        "example": {
          "title": "Two renewals, one continuous service",
          "lines": [
            "Contract 1: three years",
            "Contract 2: renewed for two years",
            "Contract 3: renewed for one year",
            "Continuous service counted: 6 years (Article 8(4))",
            "Basic wage at the end: AED 12,000, daily wage AED 400",
            "Years 1 to 5: 400 × 21 × 5 = AED 42,000",
            "Year 6: 400 × 30 × 1 = AED 12,000"
          ],
          "total": "Gratuity: AED 54,000"
        }
      },
      "The example is an illustration of the formula, not a real case."
    ]
  },
  {
    "heading": "What happens when a fixed term contract expires",
    "body": [
      "Article 42(2) lists the expiry of the contract term as one way a contract ends, unless it is extended or renewed. If the contract ends and you leave, gratuity is calculated on your service up to that date and is due within 14 days of the end date under Article 53.",
      "If the contract ends and you both keep working without signing anything, Article 8(5) treats the old contract as extended on the same terms. That helps you in two ways: your service continues to be counted, and your terms do not quietly change. It also means the expiry date on paper is not always the date your employment actually ended."
    ]
  },
  {
    "heading": "Notice, resignation and the old rules",
    "body": [
      "Notice is covered by Article 43. Either party may end the contract for a legitimate reason by written notice. The notice period agreed in the contract must be at least 30 days and no more than 90. A party that does not respect the period owes the other the notice period allowance, equal to the worker's wage for the full period or the remaining part.",
      "None of that depends on whether the contract used to be unlimited. If someone tells you that resigning from a limited contract cancels your gratuity, ask them to show the article. Article 51 attaches one condition to gratuity for a full time foreign worker, which is one year of continuous service. Our guide on resignation versus termination covers the detail."
    ]
  },
  {
    "heading": "Questions to ask HR about your contract",
    "body": [
      {
        "steps": [
          "What is the start date of my continuous service, and does it include earlier contracts with this employer?",
          "Was my contract ever of undefined term, and if so, when was it converted?",
          "Is my end of service calculated under Article 51, or does my employer apply a transition rule under Article 68(3)?",
          "Which basic wage is used for the calculation?",
          "Please show the formula on the settlement sheet."
        ]
      },
      "Get the answers in writing. If the replies do not match the law, submit a request to MOHRE under Article 54."
    ]
  },
  {
    "heading": "Where free zones and other regimes differ",
    "body": [
      "The Decree Law covers private sector employers under federal rules. DIFC and ADGM have their own employment laws and end of service arrangements. DIFC employees are in the DEWS savings scheme, and ADGM has its own regulation. Domestic workers are covered by Federal Decree Law No. 9 of 2022. If you work in one of those places, the contract type discussion above may not be the right frame for you at all."
    ]
  }
]

const faq: [string, string][] = [
  [
    "Are unlimited contracts still valid in the UAE?",
    "Article 8 provides for contracts of a specific term not exceeding three years, and Article 68 required employers to convert old undefined term contracts to fixed term ones within one year of the law coming into force, with a possible extension by the Minister."
  ],
  [
    "Does my gratuity change if my contract is limited?",
    "No. For a full time foreign worker the Article 51 formula is the same: 21 days per year for the first five years and 30 days after that, after one year of continuous service."
  ],
  [
    "Does renewing my contract reset my service?",
    "No. Under Article 8(4), the renewed term is added to the original term when continuous service is calculated."
  ],
  [
    "What if I keep working after my contract expires?",
    "Under Article 8(5), if both parties continue without an express agreement, the original contract is treated as extended on the same conditions."
  ],
  [
    "Will I lose gratuity if I resign from a limited contract?",
    "Article 51 does not remove gratuity for resigning. The usual consequence of leaving without notice is notice compensation under Article 43, which is a separate item."
  ]
]

const internalLinks = [
  {
    "href": "/blog/uae-gratuity-resignation-vs-termination",
    "label": "Resignation vs termination",
    "description": "How the end of a contract affects gratuity."
  },
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Estimate gratuity on your dates and basic salary."
  },
  {
    "href": "/blog/how-to-calculate-uae-gratuity-step-by-step",
    "label": "How to calculate gratuity step by step",
    "description": "The formula with worked examples."
  },
  {
    "href": "/uae-labor-law",
    "label": "UAE labour law overview",
    "description": "Key articles in one place."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021, UAE Legislation portal",
    "description": "Official text of Articles 8, 42, 43, 51, 53, 54 and 68."
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
      slug="limited-vs-unlimited-contract-uae-gratuity"
      title={pageTitle}
      description={pageDescription}
      badge="CONTRACT TYPES"
      intro="Under Federal Decree Law No. 33 of 2021, employment contracts are for a fixed term of up to three years. Unlimited contracts from the old 1980 law were meant to be converted. Your gratuity still comes from Article 51 either way."
      sections={sections}
      faq={faq}
      note="This guide is general information based on official sources. It is not legal advice. Transition questions about old contracts depend on your facts, so ask MOHRE or a UAE qualified employment lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-10"
      dateModified="2026-10-10"
    />
  )
}

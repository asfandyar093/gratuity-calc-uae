import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-salary-deductions-what-employers-can-deduct'
const pageTitle = "UAE Salary Deductions: What Employers Can and Cannot Take"
const pageDescription = "Article 25 of the UAE Labour Law lists the only deductions an employer can make from your wage, with the 20%, 5%, 25% and 50% limits explained."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["uae salary deductions", "employer deduct salary uae law", "article 25 uae labour law", "illegal salary deduction uae"],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "The rule: no deduction unless Article 25 allows it",
    "body": [
      "Article 25 of Federal Decree Law No. 33 of 2021 says no amount may be deducted or withheld from a worker's wage except in the cases it lists. If a deduction on your payslip is not on that list, the employer has no legal basis for it. The list covers loans, overpayments, insurance and pension contributions, savings fund contributions, approved employer benefits, penalties for violations, court debts and damage to the employer's property.",
      "The article also sets an overall ceiling. If several reasons for deduction apply at once, the total deducted or withheld cannot exceed 50% of the wage. That 50% cap is the figure to remember when a payslip shows more than one deduction.",
      "This page covers deductions from wages during employment. Deductions from your end of service benefits work differently, and Article 51(7) covers them. See the [final settlement calculator](/final-settlement-calculator-uae) for how a final payment is put together."
    ]
  },
  {
    "heading": "The allowed deductions and their limits",
    "body": [
      {
        "table": {
          "head": [
            "Reason for deduction",
            "Limit or condition in Article 25"
          ],
          "rows": [
            [
              "Repaying a loan the employer gave you",
              "Within the monthly deduction limit set in the article, with your written consent, and without interest"
            ],
            [
              "Recovering money paid to you in excess of your entitlements",
              "No more than 20% of the wage"
            ],
            [
              "Contributions to bonuses, retirement pensions and insurance under UAE law",
              "As required by the legislation in force"
            ],
            [
              "Your contributions to a savings fund at the establishment, or loans due to that fund",
              "The fund and loans must be approved by the Ministry"
            ],
            [
              "Instalments for a social project, benefit or service provided by the employer",
              "Approved by the Ministry and agreed by you in writing"
            ],
            [
              "Penalties for violations under the establishment's penalty regulation",
              "Approved by the Ministry, and no more than 5% of the wage"
            ],
            [
              "Debts due under a court judgment",
              "No more than a quarter of the wage payable, except alimony, where more can be deducted"
            ],
            [
              "Damage you caused through your mistake or by breaching instructions, to tools, machines, products or materials",
              "No more than five days wage per month, and more only with court approval"
            ]
          ]
        }
      },
      "Two points are easy to miss. First, loan deductions need your written consent and cannot carry interest. Second, the penalty deduction is only valid if the penalty regulation has been approved by the Ministry. A manager cannot invent fines on the spot."
    ]
  },
  {
    "heading": "Worked example: how the limits stack up",
    "body": [
      {
        "example": {
          "title": "Example: wage of AED 8,000 with three deductions",
          "lines": [
            "Overpayment recovery: capped at 20% of AED 8,000 = AED 1,600",
            "Penalty for a policy violation: capped at 5% of AED 8,000 = AED 400",
            "Court debt: capped at a quarter of AED 8,000 = AED 2,000",
            "All three together could reach AED 4,000, which is 50% of the wage and exactly the overall ceiling"
          ],
          "total": "Maximum total deduction: AED 4,000 (50% of the wage)"
        }
      },
      "The numbers above are an illustration of the limits, not a prediction of what any employer will do. They show that a single deduction can be legal while a combination of them is not, because of the 50% ceiling. If your payslip shows a different pattern, ask HR to name the clause of Article 25 they rely on."
    ]
  },
  {
    "heading": "Common situations",
    "body": [
      "Employers sometimes deduct for things that Article 25 does not list. Examples employees ask about include late arrival, a uniform, a lost access card, a recruitment fee, visa costs or a training bond. Whether any of these can be recovered depends on which Article 25 category it falls into. Recruitment and employment costs are covered by a different rule: Article 6 says the employer is prohibited from charging the worker for the fees and costs of recruitment and employment, directly or indirectly.",
      "Damage to the employer's property is the one most often misused. The law allows a deduction only where the damage came from your mistake or from breaking the employer's instructions, and the cap is five days wage per month. Anything above that needs a court. A manager announcing a larger deduction is not following the article.",
      "If a deduction was taken in error, ask for it back in writing and keep the payslip. You can then raise it with MOHRE. The [MOHRE complaint guide](/blog/how-to-file-mohre-complaint) explains how to file."
    ]
  },
  {
    "heading": "Notice, leave and exit: where deductions show up again",
    "body": [
      "Deductions often come up at the end of a job. The notice period rules are in Article 43: the party who does not serve notice owes the other party the wage for the notice period or the remaining part of it. That is a notice allowance, not a disciplinary deduction. See the [notice period deductions guide](/blog/notice-period-deductions-gratuity-uae) and the [notice period calculator](/notice-period-calculator-uae).",
      "Article 51(7) allows an employer to deduct from end of service benefits any amounts payable under the law or a judgment, in line with the conditions in the Implementing Regulation. That is narrower than a general right to set off whatever the employer thinks it is owed. If you believe a final settlement figure is short, the guide on [why gratuity can look short](/blog/my-gratuity-was-short-what-hr-got-wrong) shows common causes, and [how to read a final settlement sheet](/blog/how-to-read-uae-final-settlement-sheet) helps you check each line.",
      "If you are still being paid and a deduction looks wrong, check your wages first. The [UAE salary calculator](/salary-calculator) can help you see how your package is split between basic salary and allowances, which matters for several of the percentage limits above."
    ]
  },
  {
    "heading": "What to do if a deduction is not on the list",
    "body": [
      {
        "steps": [
          "Ask HR in writing which part of Article 25 the deduction relies on.",
          "Check the limit for that category: 20%, 5%, a quarter, five days wage or the overall 50% ceiling.",
          "If you agreed in writing to a loan or a benefit scheme, find that document. If you did not, say so.",
          "Keep your payslips and bank statements, which show what was actually paid.",
          "If the answer does not settle it, submit a request to MOHRE. Under Article 54, MOHRE examines the dispute and tries to settle it amicably, and refers it to court if that is not possible."
        ]
      },
      "Watch the time limit. A claim is not heard after two years from the end of the employment relationship under Article 54(9) as amended in 2024, so do not wait until you have left the company if you can raise it sooner. For a wider look at the rules, read the [UAE labour law gratuity rules](/uae-labor-law)."
    ]
  }
]

const faq: [string, string][] = [
  [
    "Can my employer deduct money from my salary in the UAE?",
    "Only in the cases listed in Article 25 of Federal Decree Law No. 33 of 2021, such as loan repayments, recovery of overpayments, insurance contributions, approved penalties and court ordered debts. Anything else has no legal basis in that article."
  ],
  [
    "What is the maximum total deduction from a UAE salary?",
    "If there are several reasons for deduction or withholding, the total cannot exceed 50% of the wage."
  ],
  [
    "Can an employer fine me for being late?",
    "Only as a penalty under the establishment's penalty regulation, approved by the Ministry, and capped at 5% of the wage under Article 25."
  ],
  [
    "How much can be deducted to recover an overpayment?",
    "No more than 20% of the wage."
  ],
  [
    "Can my employer deduct the cost of damaged equipment?",
    "Only where the damage resulted from your mistake or from breaching the employer's instructions, and no more than five days wage per month. A larger amount needs court approval."
  ],
  [
    "Can an employer charge me recruitment or visa costs?",
    "Article 6 prohibits the employer from charging the worker for the fees and costs of recruitment and employment, directly or indirectly."
  ]
]

const internalLinks = [
  {
    "href": "/final-settlement-calculator-uae",
    "label": "Final settlement calculator",
    "description": "Gratuity, leave and notice in one total."
  },
  {
    "href": "/blog/notice-period-deductions-gratuity-uae",
    "label": "Notice period deductions",
    "description": "What can be taken from your dues at exit."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "Steps if a deduction is not allowed."
  },
  {
    "href": "/salary-calculator",
    "label": "UAE salary calculator",
    "description": "Basic salary versus allowances."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021 on the UAE legislation portal",
    "description": "Official text of Articles 6, 25, 43, 51 and 54."
  },
  {
    "href": "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/labour-rights",
    "label": "u.ae: labour rights",
    "description": "Government summary of private sector worker rights."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="uae-salary-deductions-what-employers-can-deduct"
      title="UAE Salary Deductions: What Your Employer Can and Cannot Deduct"
      description="Article 25 of the UAE Labour Law lists the only deductions an employer can make from your wage, with the 20%, 5%, 25% and 50% limits explained."
      badge="SALARY DEDUCTIONS"
      intro="Your employer cannot deduct from or withhold your wage just because it wants to. Article 25 of the UAE Labour Law lists the only cases that are allowed, and sets a limit on most of them."
      sections={sections}
      faq={faq}
      note="This page is general information from official sources. It reflects the original text of Article 25 as published. It is not legal advice, so confirm any amended wording with MOHRE for your own case."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/difc-dews-gratuity-explained'
const pageTitle = "DEWS Meaning: DIFC Workplace Savings Plan Explained"
const pageDescription = "DEWS is the DIFC Employee Workplace Savings plan. See the 5.83% and 8.33% employer rates, how to check your balance and when you can withdraw."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["what is dews", "dews meaning", "dews difc", "difc gratuity", "dews balance", "monthly dews contribution"],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "What DEWS means and who it covers",
    "body": [
      "DEWS is a defined contribution plan. Your employer pays a set percentage of your basic wage into an account in your name each month, and the account is invested. What you receive when you leave is the value of that account, which can be higher or lower than the contributions because of investment returns and fees.",
      "Article 66(7) of the DIFC Employment Law requires employers to pay at least the Core Benefits into a Qualifying Scheme from the Qualifying Scheme Commencement Date. For most employees that date is 1 February 2020, or the day they started work if that was later. DEWS is the default Qualifying Scheme. An employer can use a different approved scheme, but only if it holds a Certificate of Compliance from the DIFC Authority.",
      "Zurich Workplace Solutions, which runs the DEWS portal, says the plan is for employees who are subject to a DIFC contract of employment or a DIFC visa and who receive a basic salary, with some exemptions. UAE and GCC nationals who are registered with the GPSSA pension fund are treated differently: Article 66(7)(c) gives them a top up contribution instead of the full rate. If you are unsure which category you are in, ask HR which law your contract is under."
    ]
  },
  {
    "heading": "Monthly DEWS meaning: how much your employer pays",
    "body": [
      "Article 66(7) sets the minimum monthly employer contribution as a percentage of your monthly basic wage: 5.83% for the first five years of service, and 8.33% for each additional year. Service before 2020 with the same employer counts towards the five years. Employers may pay more, and the contribution is not deducted from your salary.",
      {
        "table": {
          "head": [
            "Years of service",
            "Employer minimum",
            "Basis"
          ],
          "rows": [
            [
              "First 5 years",
              "5.83% a month",
              "Monthly basic wage"
            ],
            [
              "Each year after year 5",
              "8.33% a month",
              "Monthly basic wage"
            ]
          ]
        }
      },
      "Three details from the article are worth knowing. The contribution is based on your basic wage for the month even if your pay was reduced by sick leave, maternity leave or unpaid vacation leave. Basic wage cannot be counted as less than 50% of your monthly wage. And if you pass your five year anniversary during a month, that month is split by days between the two rates.",
      "The employer must pay each month by the 21st day of the following month, according to Article 66(17) as amended in 2024. If the employer has a probation period in the contract, it may defer contributions until you are confirmed, and then must pay them back to your start date. If you are not confirmed and the employer deferred, no Core Benefits are payable."
    ]
  },
  {
    "heading": "DEWS contribution example table",
    "body": [
      "The table shows the minimum monthly contribution at three basic salaries. It is simple arithmetic on the rates above and uses the monthly basic wage only, not allowances.",
      {
        "table": {
          "head": [
            "Monthly basic wage",
            "5.83% a month (first 5 years)",
            "8.33% a month (after year 5)"
          ],
          "rows": [
            [
              "AED 8,000",
              "AED 466.40",
              "AED 666.40"
            ],
            [
              "AED 15,000",
              "AED 874.50",
              "AED 1,249.50"
            ],
            [
              "AED 25,000",
              "AED 1,457.50",
              "AED 2,082.50"
            ]
          ]
        }
      },
      {
        "example": {
          "title": "Example: 8 years of service at AED 10,000 basic, same pay throughout",
          "lines": [
            "Years 1 to 5: AED 10,000 × 5.83% = AED 583 a month, 60 months = AED 34,980",
            "Years 6 to 8: AED 10,000 × 8.33% = AED 833 a month, 36 months = AED 29,988"
          ],
          "total": "Minimum employer contributions: AED 64,968, before investment returns and fees"
        }
      },
      "For comparison, the mainland formula gives AED 65,000 for the same salary and 8 years (195 days of basic wage). The two are close because DEWS rates were set to broadly match the old gratuity accrual. Your actual DEWS balance will differ because of returns, fees and any pay rises along the way. You can run your own numbers in the [DIFC gratuity calculator](/calculate-difc-gratuity)."
    ]
  },
  {
    "heading": "How to check your DEWS balance",
    "body": [
      {
        "steps": [
          "Wait for the activation email. Your employer enrols you, and the plan administrator then emails you a link to set a password.",
          "Verify your details, give the tax status information the plan asks for, and name your beneficiaries.",
          "Log in to the Zurich Workplace Savings online portal or the mobile app. You can see the daily value of your account, the contributions your employer has paid and any voluntary contributions you made.",
          "Check your investments. If you have not chosen a fund, the money goes into the default Low/Moderate Growth fund. You can change funds from the Fund area under Manage my investments.",
          "Compare the employer contributions shown with the rates in the table above. If a month is missing, ask HR first and keep your payslips."
        ]
      },
      "Fees are built into the unit price of the funds, so the value you see on the portal is already after fees. There is also a bank charge when you withdraw. If you cannot log in, the Zurich help centre can reset access, and your employer should be able to confirm that contributions were uploaded."
    ]
  },
  {
    "heading": "When you can withdraw your DEWS money",
    "body": [
      "Money your employer pays in is an end of service benefit, so it is only available when you leave employment. Regulation 3.1.3 of the DIFC Employment Regulations says benefits are paid when employment ends, unless the scheme rules let you choose to defer. In DEWS you can request a partial or full withdrawal from the Withdrawals section of the portal or app and upload your documents online, or you can leave the money invested.",
      "Voluntary contributions are different. If your employer allows salary deduction for voluntary savings, DEWS lets you take up to two partial withdrawals a year while still employed, each up to 30% of your voluntary savings balance.",
      "If you move to another DIFC employer, a new DEWS account is opened under the new employer. The accounts cannot be combined, but you can keep the old one invested or withdraw it. If you leave the UAE, the plan says it can pay to a local or international bank account."
    ]
  },
  {
    "heading": "Service before February 2020",
    "body": [
      "DIFC employees did not keep accruing gratuity after 31 January 2020. For service before that date, Article 66(1) to 66(3) gives employees with at least one year of continuous employment a gratuity payment: 21 days of basic wage per year for the first five years and 30 days for each additional year, capped at two times annual wage. For this older gratuity the daily rate is basic wage divided by 365, and the wage used is the one you have on your termination date.",
      "Article 66(6) lets the employer transfer the accrued amount into a Qualifying Scheme. If that is done with your prior written consent, the employer is relieved of paying it again and of making up any shortfall. If you never gave written consent, the employer may still owe the pre 2020 gratuity when you leave, so look for it on your final settlement and ask HR what happened to it."
    ]
  },
  {
    "heading": "DEWS compared with mainland gratuity",
    "body": [
      {
        "table": {
          "head": [
            "Point",
            "Mainland (MOHRE)",
            "DIFC (DEWS)"
          ],
          "rows": [
            [
              "Law",
              "Federal Decree Law No. 33 of 2021, Article 51",
              "DIFC Employment Law, DIFC Law No. 2 of 2019, Article 66"
            ],
            [
              "How it is paid",
              "Lump sum from the employer when the contract ends",
              "Employer pays monthly into your account; you withdraw when you leave"
            ],
            [
              "Rate",
              "21 days of basic wage a year for 5 years, then 30 days",
              "5.83% of monthly basic wage for 5 years, then 8.33%"
            ],
            [
              "Investment risk",
              "No investment, the amount is a formula",
              "The account is invested, and Article 66(15) puts the risk on the employee"
            ],
            [
              "Minimum service",
              "One year of continuous service",
              "Contributions start from employment, with a possible probation deferral"
            ],
            [
              "Extra savings",
              "Not available",
              "Voluntary contributions by salary deduction"
            ]
          ]
        }
      },
      "The mainland column is covered in [how to calculate gratuity in the UAE](/how-to-calculate-gratuity-uae). If you are on the mainland and your employer offers the voluntary scheme there, see the [end of service savings scheme guide](/blog/uae-end-of-service-savings-scheme). For other zones and worker types, use the [comparison table on the gratuity hub](/gratuity-calculator)."
    ]
  },
  {
    "heading": "Moving between zones and group companies",
    "body": [
      "DEWS applies to your employment with a DIFC employer. If you move from a mainland employer to a DIFC one, you start earning DEWS contributions with the new employer and your mainland gratuity is settled under mainland rules when that contract ends. If you were transferred inside the same group, read [what happens to your service when you are transferred within a group](/blog/transferred-same-free-zone-group-gratuity-reset) before you sign anything.",
      "ADGM, the other major financial free zone, has its own employment regulations and a different method. See the [ADGM gratuity calculator](/calculate-adgm-gratuity) rather than assuming it works like DEWS. For tax questions on a payout, see [is UAE gratuity taxable](/blog/is-uae-gratuity-taxable)."
    ]
  }
]

const faq: [string, string][] = [
  [
    "What does DEWS stand for?",
    "DIFC Employee Workplace Savings. It is the default Qualifying Scheme that DIFC employers use to pay your end of service benefit."
  ],
  [
    "What is the monthly DEWS contribution?",
    "At least 5.83% of your monthly basic wage for the first five years of service and 8.33% for each additional year, under Article 66(7) of the DIFC Employment Law. Employers can pay more."
  ],
  [
    "Is DEWS deducted from my salary?",
    "No. The minimum employer contribution is paid on top of your pay. Only voluntary contributions you choose to make are deducted."
  ],
  [
    "How do I check my DEWS balance?",
    "Log in to the Zurich Workplace Savings portal or app after activating your account. It shows the daily value, employer contributions and voluntary contributions."
  ],
  [
    "Can I withdraw DEWS while I am still employed?",
    "Not the employer contributions. Those are paid when you leave. If you made voluntary contributions, you can take up to two partial withdrawals a year, each up to 30% of that balance."
  ],
  [
    "What happens to my DEWS account when I leave?",
    "You can request a partial or full withdrawal online or leave the money invested. A bank charge applies to withdrawals."
  ],
  [
    "Can the DEWS balance be lower than what my employer paid in?",
    "Yes. The account is invested and Article 66(15) says the risk on amounts paid into a Qualifying Scheme is the employee's, subject to the transfer rule in Article 66(6)."
  ],
  [
    "I worked in DIFC before 2020. What about my old gratuity?",
    "Service before 1 February 2020 is covered by Article 66(1) to 66(3). If your employer moved that amount into a scheme with your written consent, it is relieved of paying it again. If not, ask HR whether it is due at your final settlement."
  ],
  [
    "Does the mainland gratuity calculator work for DEWS?",
    "No. The mainland formula applies under the federal labour law. For DIFC use the DIFC calculator, and check your DEWS statement for the real balance."
  ]
]

const internalLinks = [
  {
    "href": "/calculate-difc-gratuity",
    "label": "DIFC gratuity calculator",
    "description": "Estimate employer contributions at the DEWS rates."
  },
  {
    "href": "/gratuity-calculator",
    "label": "Gratuity calculators by zone and worker type",
    "description": "Compare mainland, DIFC, ADGM, DMCC and other rules."
  },
  {
    "href": "/blog/uae-end-of-service-savings-scheme",
    "label": "UAE end of service savings scheme",
    "description": "The voluntary mainland alternative."
  },
  {
    "href": "/calculate-adgm-gratuity",
    "label": "ADGM gratuity calculator",
    "description": "The other financial free zone method."
  }
]

const externalLinks = [
  {
    "href": "https://assets.difc.com/v1/media/edge/images/dubaiintern0078-difcexperie96c5-production-3253/media/project/difcexperiences/difc/difcwebsite/documents/laws--regulations/employment_law_no_2_of_2019_updated_2024.pdf",
    "label": "DIFC Employment Law, DIFC Law No. 2 of 2019 (updated 2024)",
    "description": "Article 66 on gratuity and Qualifying Scheme benefits."
  },
  {
    "href": "https://assets.difc.com/v1/media/edge/images/dubaiintern0078-difcexperie96c5-production-3253/media/project/difcexperiences/difc/difcwebsite/documents/laws--regulations/employment_regulations_2022.pdf",
    "label": "DIFC Employment Regulations on Qualifying Schemes",
    "description": "Scheme requirements, payment of benefits and DEWS status."
  },
  {
    "href": "https://zws.zurich.ae/en/im-visiting-as-an/employee",
    "label": "Zurich Workplace Solutions: DEWS for employees",
    "description": "How to activate, view, invest and withdraw."
  },
  {
    "href": "https://www.difc.com/business/qualifying-schemes",
    "label": "DIFC: Qualifying Schemes",
    "description": "The DIFC overview of the DEWS plan."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="difc-dews-gratuity-explained"
      title="DEWS Meaning: The DIFC Employee Workplace Savings Plan"
      description="DEWS is the DIFC Employee Workplace Savings plan. See the 5.83% and 8.33% employer rates, how to check your balance and when you can withdraw."
      badge="DIFC AND DEWS"
      intro="DEWS stands for the DIFC Employee Workplace Savings plan. It is the savings account that a DIFC employer pays into every month for each eligible employee, in place of the lump sum gratuity that mainland employers pay. The rules come from the DIFC Employment Law (DIFC Law No. 2 of 2019), not from the federal labour law, so the mainland gratuity formula does not apply to service under DEWS."
      sections={sections}
      faq={faq}
      note="This page is general information from the DIFC Employment Law, the DIFC Employment Regulations and Zurich Workplace Solutions. It is not legal or investment advice. Your contract, the scheme rules and your DEWS statement decide your actual entitlement."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      image={{"src": "/images/blog/photo/difc-dews-gratuity-explained.webp", "alt": "Neat pile of paper documents on a desk", "caption": "DEWS is the end of service savings plan used by employers in the Dubai International Financial Centre.", "title": "What Is DEWS? DIFC Gratuity Explained"}}
      datePublished="2026-03-01"
      dateModified="2026-10-15"
    />
  )
}

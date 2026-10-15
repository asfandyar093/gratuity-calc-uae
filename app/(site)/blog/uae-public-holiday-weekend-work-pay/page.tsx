import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/uae-public-holiday-weekend-work-pay'
const pageTitle = "UAE Public Holiday and Weekend Work: Pay or Day Off"
const pageDescription = "What the UAE Labour Law says if you work on a public holiday or your weekly day off: another day off, or your day wage plus at least 50% of basic."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["uae public holiday work pay", "work on weekend uae law", "article 28 uae labour law", "weekly rest day compensation uae"],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "What the law says",
    "body": [
      "Two articles of Federal Decree Law No. 33 of 2021 cover this. Article 28 deals with public holidays and Article 19(4) with the weekend set in your employment contract or the work regulation. The wording is almost identical, and both give the employer a choice.",
      {
        "list": [
          "Public holidays (Article 28): you are entitled to official days off with full pay on public holidays, which a Cabinet resolution defines. If work conditions require you to work on one, the employer must compensate you with another day off for each day worked, or pay you the wage for that day at the normal working day rate, plus an increase of not less than 50% of the basic wage for that day.",
          "Weekly rest day (Article 19(4)): if circumstances require you to work on the weekend specified in your contract or work regulation, you are compensated with another day off, or paid the wage of that day at the normal rate plus an increase of not less than 50% of the basic wage for that day."
        ]
      },
      "In plain terms: you cannot be made to work a holiday or rest day for nothing. Either you get the time back or you get a premium. The employer decides which option applies, but one of them has to happen."
    ]
  },
  {
    "heading": "How to calculate the pay option",
    "body": [
      "Take your basic wage, divide it by 30 to get the basic wage for one day, then add at least 50% of that amount. The law uses the basic wage for the increase, so allowances do not raise the premium. The same step that turns salary into a daily figure is used in the gratuity formula in [how to calculate gratuity in the UAE](/how-to-calculate-gratuity-uae).",
      {
        "example": {
          "title": "Example: basic AED 9,000, one public holiday worked",
          "lines": [
            "Basic wage for one day: 9,000 ÷ 30 = AED 300",
            "Minimum increase: 50% of AED 300 = AED 150",
            "Normal day wage plus the increase: AED 300 + AED 150 = AED 450",
            "The law also describes the normal day wage as part of the payment, so ask HR whether the AED 300 is paid on top of your monthly salary or counted as the salary you already receive for the holiday"
          ],
          "total": "Minimum premium for the day: AED 150 on top of the day wage"
        }
      },
      "The last line matters because the article says \"pay him the wage for that day according to the wage established for the normal working days, plus an increase\". Employees on monthly pay are already paid for public holidays under Article 28(1), so the safe way to read the rule is that the premium is the part you should check. If your payslip shows nothing extra for a day you worked, ask HR to show the calculation. The [overtime calculator](/overtime-calculator-uae) shows hourly figures if you worked part of a day."
    ]
  },
  {
    "heading": "Day off in lieu: what to ask for",
    "body": [
      "If the employer chooses compensatory time, the law says another day off for each day you worked. Ask for the date in writing, and ask that it falls soon enough to be useful. The law does not give a deadline in the text of the two articles, so use the Implementing Regulation or ask MOHRE if the day is never given. If the employer neither gives the day off nor pays the premium, you can raise it as a wage claim.",
      "Article 19(5) adds a limit worth knowing about. A worker shall not be instructed to work for more than two consecutive weekend days. The rule is a protection against being asked to give up several rest days in a row."
    ]
  },
  {
    "heading": "Overtime on a normal working day",
    "body": [
      "Extra hours on an ordinary working day follow Article 19. Normal hours are 8 a day or 48 a week (Article 17). Overtime is limited to two hours a day, with a ceiling of 144 hours in every three weeks, unless the Implementing Regulation sets other conditions. Overtime is paid at the wage for normal hours, based on the basic wage, plus at least 25%. Overtime between 10 pm and 4 am carries an increase of at least 50%, except for workers on shifts.",
      "That means the three situations have different minimums: at least 25% extra for ordinary overtime, at least 50% extra for overtime between 10 pm and 4 am, and a day off or at least 50% extra of the day's basic wage for a public holiday or weekend. The [overtime calculator](/overtime-calculator-uae) uses the same basic hourly rate. Your contract or company policy can be more generous, and then the better term applies to you."
    ]
  },
  {
    "heading": "Special cases and where to check",
    "body": [
      "Some workers have different working hours, for example certain sectors where the Cabinet has set other hours, and part time workers whose hours are in the contract. Article 17(5) says a part time worker cannot be asked to work more than the contracted hours without written consent. If your sector or work pattern is unusual, read your contract and ask MOHRE rather than assuming the standard rule.",
      "Public holidays themselves are set by Cabinet resolution, and the dates change each year with the Hijri calendar. Check the official announcement for the year you are working rather than relying on a list you saw before. Domestic workers are under a separate law, covered in [domestic worker leave and ticket rules](/blog/domestic-worker-annual-leave-ticket-uae).",
      "If you worked holidays or weekends and were not compensated, collect your attendance records, rosters and messages from your manager. Then ask HR in writing. If that does not work, file a request with MOHRE. The [MOHRE complaint guide](/blog/how-to-file-mohre-complaint) shows the steps, and the [final settlement calculator](/final-settlement-calculator-uae) helps you add any unpaid amount to your final dues."
    ]
  }
]

const faq: [string, string][] = [
  [
    "What do I get if I work on a public holiday in the UAE?",
    "Either another day off for each day worked, or the wage for that day at the normal rate plus an increase of not less than 50% of the basic wage for that day, under Article 28(2)."
  ],
  [
    "Does the same rule apply to my weekly day off?",
    "Yes. Article 19(4) gives the same choice for work on the weekend specified in your contract or the work regulation."
  ],
  [
    "Is the 50% calculated on basic salary or total salary?",
    "On the basic wage for that day. Housing and other allowances do not increase the premium."
  ],
  [
    "How is ordinary overtime paid?",
    "At the normal hourly wage based on basic wage plus at least 25%, under Article 19(2). Overtime between 10 pm and 4 am carries at least 50%, except for shift workers."
  ],
  [
    "How many overtime hours can I be asked to work?",
    "Up to two hours a day under Article 19(1), with total working hours not above 144 hours in every three weeks, unless the Implementing Regulation sets other conditions."
  ],
  [
    "Who decides between a day off and payment?",
    "The article gives the employer the choice, but one of the two must be provided."
  ]
]

const internalLinks = [
  {
    "href": "/overtime-calculator-uae",
    "label": "Overtime calculator",
    "description": "Hourly overtime using basic wage."
  },
  {
    "href": "/mohre-annual-leave-calculator",
    "label": "Annual leave calculator",
    "description": "Leave days and unused leave pay."
  },
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "Steps if holiday pay is missing."
  },
  {
    "href": "/uae-labor-law",
    "label": "UAE labour law gratuity rules",
    "description": "The articles behind your end of service pay."
  }
]

const externalLinks = [
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021 on the UAE legislation portal",
    "description": "Official text of Articles 17, 19 and 28."
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
      slug="uae-public-holiday-weekend-work-pay"
      title="Working on a UAE Public Holiday or Weekend: Pay or Day Off in Lieu"
      description="What the UAE Labour Law says if you work on a public holiday or your weekly day off: another day off, or your day wage plus at least 50% of basic."
      badge="HOLIDAY AND WEEKEND WORK"
      intro="If you are asked to work on a public holiday or on the weekend named in your contract, the employer has two options under the law: give you another day off, or pay you for the day with an increase of at least 50% of your basic wage."
      sections={sections}
      faq={faq}
      note="This page is general information from official sources, quoting Articles 17, 19 and 28 of Federal Decree Law No. 33 of 2021. The Implementing Regulation and your contract can add detail. It is not legal advice."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

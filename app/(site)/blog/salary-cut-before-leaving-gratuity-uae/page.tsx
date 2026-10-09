import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/salary-cut-before-leaving-gratuity-uae'
const pageTitle = "Salary Cut Before Leaving? How It Hits UAE Gratuity"
const pageDescription = "Basic salary reduced before you resign or are let go? Article 51(5) prices gratuity on your last basic wage. See the effect with examples and what to do."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["salary reduction gratuity uae"],
  alternates: { canonical: pageUrl },
  openGraph: {
    ...baseOpenGraph,
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: '/images/blog/photo/salary-cut-before-leaving-gratuity-uae.webp', width: 1200, height: 630, alt: "Hand holding a phone with a laptop and notebook on a desk" }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription, images: ['/images/blog/photo/salary-cut-before-leaving-gratuity-uae.webp'] },
}

const sections = [
  {
    "heading": "What the law actually says",
    "body": [
      "Article 51(5) of Federal Decree Law No. 33 of 2021 says, in plain terms, that end of service benefits are calculated according to the last basic wage the worker was entitled to, for those paid monthly, weekly or daily. Piece rate workers are handled by an average daily wage instead.",
      "Read that carefully. The article does not say gratuity is built up year by year at whatever you earned in each year. It points to one number, the last basic wage, and applies it to your counted service. If your basic salary was AED 10,000 for six years and AED 8,000 at the end, the starting point for the whole calculation is AED 8,000.",
      "A raise works the same way, in your favour. A basic salary that went up late in your service lifts the amount for every year that counts."
    ]
  },
  {
    "heading": "What a cut costs: a worked comparison",
    "body": [
      {
        "example": {
          "title": "Same service, two different last basic wages",
          "lines": [
            "Service: 6 years",
            "Last basic wage AED 10,000: daily wage 333.33",
            "Years 1 to 5: 333.33 × 21 × 5 = AED 35,000",
            "Year 6: 333.33 × 30 × 1 = AED 10,000",
            "Total: AED 45,000",
            "Last basic wage AED 8,000: daily wage 266.67",
            "Years 1 to 5: 266.67 × 21 × 5 = AED 28,000",
            "Year 6: 266.67 × 30 × 1 = AED 8,000",
            "Total: AED 36,000"
          ],
          "total": "Difference from the cut: AED 9,000"
        }
      },
      "A 20 percent cut in basic salary produces a 20 percent smaller gratuity. The amount is the same whether the cut came a year before you left or a week before. These figures are an illustration of the formula, not a real case."
    ]
  },
  {
    "heading": "Cuts that do not look like cuts",
    "body": [
      "Not every reduction is announced as a pay cut. A few patterns are worth recognising.",
      {
        "list": [
          "Restructuring the package so that basic salary falls and allowances rise, with the total unchanged.",
          "A new contract or renewal that quietly lists a lower basic wage.",
          "A transfer to another group company with a different pay structure.",
          "A promotion that moves part of your pay into variable components such as commission or bonus.",
          "Unpaid leave periods, which do not change your basic wage but do shorten your counted service."
        ]
      },
      "The first one is the most common. Your take home pay stays the same, so it feels harmless, but the number that gratuity is built on becomes smaller. Always compare the basic line, not only the total."
    ]
  },
  {
    "heading": "Is the cut allowed?",
    "body": [
      "That is a separate question from how gratuity is calculated, and the answer depends on what you agreed. We do not give a rule here because the Decree Law text we checked does not set one out in a single article, and the right answer turns on your contract and on whether you agreed in writing.",
      "What you can do is gather the facts. Look at your contract, any amendment you signed, your offer letter and payslips from before and after the change. If you did not agree to the reduction, tell your employer in writing that you do not accept it. If it stays unresolved, you can submit a request to MOHRE under Article 54, and you should do it while your documents are fresh."
    ]
  },
  {
    "heading": "How to protect your figure",
    "body": [
      {
        "steps": [
          "Keep every payslip. They show your basic wage by month.",
          "Keep your signed contract and every amendment.",
          "Before agreeing to any restructure, ask HR to show what happens to basic salary.",
          "Ask for the effect on end of service in writing.",
          "If you do agree, ask for the change to be dated and signed by both sides.",
          "Before you resign or accept a termination, run the numbers with the gratuity calculator at your current and previous basic wage."
        ]
      },
      "If you are considering a deal where your employer pays you something now in exchange for a lower basic wage, do the arithmetic across your whole service first. A small gain in allowances can cost far more in gratuity."
    ]
  },
  {
    "heading": "A note on increases",
    "body": [
      "The same rule helps when basic salary goes up. Employers sometimes raise allowances in a salary review and leave basic untouched, because it is cheaper for them in end of service terms. If you negotiate a raise near the end of your service, ask which component it goes into. A raise in basic wage lifts gratuity. A raise in housing allowance does not."
    ]
  },
  {
    "heading": "How to raise it with HR without a fight",
    "body": [
      "Most pay changes near the end of a job are not meant as a trap. They come from a restructure, a new template or a manager who wants to simplify the package. That is why a calm written question works better than an accusation.",
      "Write something short. Say which payslip shows the old basic wage, which shows the new one, and ask HR to confirm the basic wage that will be used for your end of service calculation. Ask whether the change was agreed with you in writing. If the answer is that it was a mistake, ask for the corrected payslip. If the answer is that it was intended, ask for the signed document.",
      "You are not asking for a favour. You are asking the employer to show how a figure in your settlement was built, which is a reasonable request in any final settlement. Keep the thread. If a MOHRE request becomes necessary later, a polite, dated paper trail is the most useful thing you can have."
    ]
  },
  {
    "heading": "Where this fits in your settlement",
    "body": [
      "Gratuity is one line. Your unpaid salary, leave pay and notice pay are worked out on their own wage definitions. Leave pay is calculated on basic wage under Article 29(9). Notice pay uses your last wage under Article 43. Check that each line uses the right base. Our final settlement checklist and the guide on reading a settlement sheet help you do that line by line.",
      "Under Article 53, the employer must pay all of it within 14 days of the contract ending."
    ]
  }
]

const faq: [string, string][] = [
  [
    "Which salary is used for gratuity, my first or my last?",
    "The last basic wage you were entitled to, under Article 51(5). It applies to your whole counted service."
  ],
  [
    "If my basic salary was cut a month before I left, is the whole gratuity reduced?",
    "On the wording of Article 51(5), yes. The calculation uses the last basic wage, so a lower last basic wage lowers the result."
  ],
  [
    "Does a cut in allowances affect gratuity?",
    "No. Gratuity is calculated on basic wage, so changes to allowances do not change the result."
  ],
  [
    "Can I challenge a reduction?",
    "You can tell the employer in writing that you did not agree, and you can submit a request to MOHRE under Article 54. Outcomes depend on your contract and what was agreed."
  ],
  [
    "Does a raise help my gratuity?",
    "Yes, if it is a raise in basic salary. It lifts the amount used for every counted year."
  ]
]

const internalLinks = [
  {
    "href": "/",
    "label": "UAE gratuity calculator",
    "description": "Test your figure at different basic salaries."
  },
  {
    "href": "/blog/uae-gratuity-allowances-basic-salary",
    "label": "Allowances and basic salary",
    "description": "What counts as basic wage."
  },
  {
    "href": "/blog/how-to-calculate-uae-gratuity-step-by-step",
    "label": "How to calculate gratuity step by step",
    "description": "The formula with worked examples."
  },
  {
    "href": "/blog/my-gratuity-was-short-what-hr-got-wrong",
    "label": "If your gratuity looks short",
    "description": "Common settlement mistakes."
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
    "description": "Official text of Articles 29, 43, 51, 53 and 54."
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
      slug="salary-cut-before-leaving-gratuity-uae"
      title={pageTitle}
      description={pageDescription}
      badge="LAST BASIC WAGE"
      intro="Article 51(5) says end of service benefits are worked out on the last basic wage you were entitled to. That sentence is why a pay cut near the end of your service can lower your whole gratuity, not just the final months."
      image={{ src: '/images/blog/photo/salary-cut-before-leaving-gratuity-uae.webp', alt: "Hand holding a phone with a laptop and notebook on a desk", title: pageTitle, caption: "Hand holding a phone with a laptop and notebook on a desk" }}
      sections={sections}
      faq={faq}
      note="This guide is general information based on official sources, not legal advice. Whether a particular salary change was valid depends on your contract and what you agreed. Ask MOHRE or a UAE qualified lawyer."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-10"
      dateModified="2026-10-10"
    />
  )
}

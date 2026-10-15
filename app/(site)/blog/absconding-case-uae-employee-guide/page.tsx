import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'
import { baseOpenGraph } from '@/lib/seo'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/absconding-case-uae-employee-guide'
const pageTitle = "Absconding Case in the UAE: Employee Rights and Effects"
const pageDescription = "What an absconding report means for a UAE employee: the legal basis, the one year work permit ban, effects on gratuity and ILOE, and how to respond."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["absconding case uae", "absconding report uae employee", "uae work permit ban one year", "absconding gratuity uae"],
  alternates: { canonical: pageUrl },
  openGraph: { ...baseOpenGraph, title: pageTitle, description: pageDescription, type: 'article', url: pageUrl, siteName: 'UAE Gratuity Check' },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDescription },
}

const sections = [
  {
    "heading": "What the law says",
    "body": [
      "Two articles of Federal Decree Law No. 33 of 2021 matter most. Article 50 covers unlawful absence from work. If a foreign worker leaves work for an illegitimate reason before the end of the contract term, the worker is not granted another work permit to join another job in the UAE for one year from the date of the absence. No other employer who is aware of it may employ the worker or keep him or her in service during that period. The Ministry can exclude some job categories, skill levels or workers from this rule, and the employer must notify the Ministry of the absence under the procedure in the Implementing Regulation.",
      "Article 44(8) deals with dismissal. An employer may dismiss a worker without notice, after a written investigation, if the worker is absent without a legitimate reason or an excuse accepted by the employer for more than 20 intermittent days in one year, or more than 7 consecutive days. The dismissal decision must be in writing, justified and handed to the worker.",
      "The two articles are related but not the same. Article 44(8) is a ground for dismissal. Article 50 is the work permit consequence of leaving for an illegitimate reason. The u.ae termination page lists both."
    ]
  },
  {
    "heading": "What a work abandonment report can lead to",
    "body": [
      "According to the u.ae page on terminating employment contracts, citing Ministerial Resolution No. 47 of 2022, a worker may not obtain a new work permit for one year from the date of departure from the UAE if a work abandonment report against the worker was proven to be true. The word proven matters. A report by itself is a claim, and the decision depends on the facts.",
      "A report can also have effects outside the labour law. The ILOE unemployment insurance conditions say a claimant must not have an ongoing absconding complaint. The ILOE FAQ adds that if a complaint is registered, the worker is not required to pay the insurance premiums as set by ministerial decision. See the [ILOE calculator](/iloe-calculator-uae) for the full claim conditions."
    ]
  },
  {
    "heading": "What counts as a legitimate reason to leave",
    "body": [
      "The law protects workers who leave for specific reasons. Article 45 lists cases where a worker can quit without notice and keep end of service rights: the employer breached its obligations under the contract or the law and did not fix it after MOHRE notified them, the worker was assaulted or harassed at work, there is grave danger at the workplace, or the worker was told to do work fundamentally different from the contract without written consent.",
      "Some of these have strict conditions. For an employer breach, the worker must notify MOHRE 14 working days before quitting. For assault or harassment, the worker must inform the competent authorities and MOHRE within five working days from the date they were able to report. If you are thinking of leaving because your employer has not paid you or has broken the contract, notify MOHRE first. That route is written into the law, and walking out without it is what can lead to an absconding report. See the [MOHRE complaint guide](/blog/how-to-file-mohre-complaint) for how to file.",
      "Leaving in the right way is also simpler. A resignation with notice under Article 43 requires written notice of between 30 and 90 days as the contract sets. The [notice period calculator](/notice-period-calculator-uae) shows the dates and any allowance if you cannot serve the full period."
    ]
  },
  {
    "heading": "Does an absconding case cancel gratuity?",
    "body": [
      "The labour law text does not say that gratuity is automatically lost because a report was filed. Gratuity under Article 51 depends on your continuous service and your last basic wage. Article 51(7) lets the employer deduct amounts payable under the law or a judgment. Whether a worker who is dismissed under Article 44 keeps gratuity, and what the employer can lawfully set off, depends on the facts and the final MOHRE or court decision. If you were dismissed, ask for the dismissal decision in writing and get the final settlement figures.",
      "If you are owed money, the 14 day payment deadline in Article 53 runs from the end date of the contract, and you can submit a request to MOHRE under Article 54. A claim is not heard after two years from the end of the employment relationship (Article 54(9) as amended in 2024). Run your numbers in the [UAE gratuity calculator](/) and the [final settlement calculator](/final-settlement-calculator-uae) so you can tell whether a figure offered to you is reasonable."
    ]
  },
  {
    "heading": "If a report has been filed against you",
    "body": [
      {
        "steps": [
          "Do not ignore it. Ask your employer or MOHRE for the details of what was reported and when.",
          "Gather evidence that you had a legitimate reason or an excuse the employer accepted: medical reports, messages, pay records, and any complaint you made.",
          "If you were never paid or the contract was breached, file a labour complaint with MOHRE. The ministry will try to settle it, and refer it to court if that fails.",
          "Check your visa and grace period. Your residence status is separate and the dates matter. See [the visa grace period guide](/blog/uae-visa-grace-period-after-job-loss).",
          "Consider legal advice from a UAE qualified employment lawyer, especially if a ban or a criminal complaint is involved."
        ]
      },
      "Some of the finer procedure, such as how MOHRE reviews a report and what proof it asks for, sits in the Implementing Regulation and ministerial decisions, which this page does not reproduce. Confirm current steps with MOHRE before you act."
    ]
  },
  {
    "heading": "For employers: what a proper process looks like",
    "body": [
      "The law treats dismissal for absence as a process, not a single event. Article 44 requires a written investigation with the worker, then a written, justified decision handed to the worker. Article 50(3) separately requires the employer to notify the Ministry of the absence. An employer who reports someone as absconding without a genuine absence risks a dispute. The 2024 amendment to the law raised employer penalties, so keep records of attendance, attempts to contact the worker and the investigation. The [notice period deductions guide](/blog/notice-period-deductions-gratuity-uae) explains what an employer may and may not take from final dues."
    ]
  }
]

const faq: [string, string][] = [
  [
    "What is an absconding case in the UAE?",
    "It is a report by an employer that a worker left the job without a legitimate reason. Under Article 50 of Federal Decree Law No. 33 of 2021, a foreign worker who leaves for an illegitimate reason before the contract ends is not granted another work permit for one year from the date of absence."
  ],
  [
    "When can an employer dismiss a worker for being absent?",
    "Under Article 44(8), after a written investigation, if the worker is absent without a legitimate reason or accepted excuse for more than 20 intermittent days in a year or more than 7 consecutive days."
  ],
  [
    "Is the one year ban automatic?",
    "The u.ae termination page says the one year restriction applies where a work abandonment report was proven to be true. Article 50(2) also allows the Ministry to exclude some categories or workers."
  ],
  [
    "Does an absconding report affect ILOE?",
    "Yes. A claimant must not have an ongoing absconding complaint, according to the ILOE conditions."
  ],
  [
    "Can I leave a job without notice?",
    "Only in the cases in Article 45, such as an employer breach that was reported to MOHRE 14 working days before, assault or harassment, grave danger, or fundamentally different work without written consent."
  ],
  [
    "Where do I challenge a report?",
    "Start with MOHRE. Submit a labour complaint with your evidence, and ask for legal advice if a ban or a criminal complaint is involved."
  ]
]

const internalLinks = [
  {
    "href": "/blog/how-to-file-mohre-complaint",
    "label": "How to file a MOHRE complaint",
    "description": "Steps to take before you leave a job."
  },
  {
    "href": "/notice-period-calculator-uae",
    "label": "Notice period calculator",
    "description": "Resign with notice and know the allowance."
  },
  {
    "href": "/iloe-calculator-uae",
    "label": "ILOE calculator",
    "description": "How an absconding complaint affects unemployment insurance."
  },
  {
    "href": "/blog/uae-visa-grace-period-after-job-loss",
    "label": "UAE visa grace period",
    "description": "How long you can stay after a cancellation."
  }
]

const externalLinks = [
  {
    "href": "https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/terminating-employment-contracts",
    "label": "u.ae: terminating employment contracts",
    "description": "Articles 43 to 47 and the work abandonment rule."
  },
  {
    "href": "https://uaelegislation.gov.ae/en/legislations/1541",
    "label": "Federal Decree Law No. 33 of 2021 on the UAE legislation portal",
    "description": "Official text of Articles 44, 45 and 50."
  }
]

export default function Page() {
  return (
    <BlogArticlePage
      slug="absconding-case-uae-employee-guide"
      title="Absconding Case in the UAE: What It Means for an Employee"
      description="What an absconding report means for a UAE employee: the legal basis, the one year work permit ban, effects on gratuity and ILOE, and how to respond."
      badge="ABSCONDING AND GRATUITY"
      intro="An absconding report, also called a work abandonment report, is filed by an employer who says a worker left the job without a legitimate reason. It can lead to a one year work permit ban, so it is worth knowing how it works and how to respond if one is filed against you."
      sections={sections}
      faq={faq}
      note="This page is general information from official sources, based on Articles 44, 45 and 50 of Federal Decree Law No. 33 of 2021 and u.ae. It is not legal advice, and an absconding report can have serious effects, so speak to MOHRE or a UAE qualified lawyer about your own case."
      internalLinks={internalLinks}
      externalLinks={externalLinks}
      datePublished="2026-10-15"
      dateModified="2026-10-15"
    />
  )
}

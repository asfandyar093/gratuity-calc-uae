import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/my-gratuity-was-short-what-hr-got-wrong'
const pageImage = '/images/blog/real/uae-gratuity-blog-human-cover.png'
const pageTitle = 'My Gratuity Was AED 4,200 Short — Here Is Exactly What HR Got Wrong'
const pageDescription = 'A real final-settlement story: I found a AED 4,200 gap between my own gratuity math and what HR sent me. Here is the exact date error that caused it, and how I got it fixed.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['UAE gratuity calculation error', 'gratuity short payment UAE', 'final settlement dispute UAE', 'HR gratuity mistake'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'Person reviewing a UAE final settlement document and checking gratuity numbers on a laptop' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
}

export default function Page() {
  return (
    <BlogArticlePage
      slug="my-gratuity-was-short-what-hr-got-wrong"
      title="My Gratuity Was AED 4,200 Short. Here's Exactly What HR Got Wrong."
      description="A real final-settlement story, with the actual numbers, the exact date error that caused the shortfall, and what happened after I pushed back."
      badge="TRUE STORY"
      intro="Short version: HR's payroll system was using the wrong joining date by 14 days, and because I was right at the five-year mark, that small gap turned into a real shortfall. Here's how I found it and what I did about it."
      image={{
        src: '/images/blog/real/uae-gratuity-blog-human-cover.png',
        alt: 'Person reviewing a UAE final settlement document and checking gratuity numbers on a laptop at home',
        title: 'My Gratuity Was AED 4,200 Short',
        caption: 'A 14-day error in my recorded joining date was enough to cost me thousands at the five-year mark.',
      }}
      sections={[
        {
          heading: "The number on the settlement sheet didn't feel right",
          body: [
            "I left my last job on the 2nd of September, 2024, after five and a half years. The final settlement PDF landed in my inbox four days later, titled the way these things always are — \"Full and Final Settlement Statement\" — and I opened it on my phone half asleep, still in bed, more curious about the total than anything else. The gratuity line read AED 34,610.",
            "I didn't have an exact figure memorised, but I'd been roughly tracking it for years the way you do when you know your salary history by heart. And 34,610 felt low. Not wildly off, not the kind of number that makes you assume someone typed a digit wrong, just... off by enough that I sat up and actually paid attention.",
            "I want to be clear about something before I go further: I don't think anyone at that company tried to short me on purpose. I'd worked with the same HR coordinator for years and she was good at her job. This wasn't malice. It was a payroll system quietly using the wrong date, and nobody had ever had a reason to question it before.",
          ],
        },
        {
          heading: 'I ran my own numbers that night',
          body: [
            "My basic salary at the time I left was AED 9,800 a month — it had gone up twice over five and a half years, the last increase about fourteen months before I resigned. My joining date, according to my original offer letter and my very first payslip, was the 14th of March, 2019. Last working day, 2nd September 2024. That's five years, five months, and nineteen days of service.",
            "The UAE formula is 21 days of basic salary for each of the first five years, then 30 days for each year after that. So: first five years gives you 105 days. The remaining five months and nineteen days, calculated proportionally at the 30-day rate, comes out to roughly 14 days. Total: about 119 days of basic salary.",
            "Daily rate on a 9,800 basic salary is 9,800 divided by 30, which is AED 326.67. Multiply that by 119 days and you get just under AED 38,890. I sat there comparing that to the 34,610 on the settlement sheet and the gap was almost exactly AED 4,200. Not a rounding difference. A real gap.",
          ],
        },
        {
          heading: 'Where the AED 4,200 actually went',
          body: [
            "Here's the thing I'd tell anyone reading this to do first: I didn't email HR demanding more money. I emailed asking for the day-by-day calculation breakdown — basic salary used, joining date used, total days, the lot. Most people never ask for this. They just look at the total and either accept it or argue about the total, which gets you nowhere because nobody can agree on a number without seeing how it was built.",
            "Two days later I got a spreadsheet back. And there it was, in the second row: joining date, 28th March 2019. Not the 14th. Fourteen days later than my actual start date.",
            "What happened, as far as I could piece together later, is that I started working on the 14th but wasn't formally added to the company's MOHRE labour card and WPS registration until the 28th, because of some document delay on my visa file that I honestly don't even remember anymore — it was five and a half years ago. Payroll's system had been built to pull the WPS registration date as \"joining date\" rather than the actual contractual start date on the offer letter. For most leavers this difference is invisible. Two weeks doesn't move the needle much most years.",
            "But I was crossing the five-year threshold, where the entitlement jumps from 21 days a year to 30 days a year. Losing 14 days at that exact point doesn't just cost you 14 days of salary — it shifts how much of your service falls into the higher 30-day bracket versus the lower 21-day one. That's why a two-week date error turned into AED 4,200 rather than a couple hundred dirhams.",
          ],
        },
        {
          heading: 'What happened when I pushed back',
          body: [
            "I wrote back to the HR coordinator, polite but specific, with my own calculation table attached and a scanned copy of my original signed offer letter showing 14th March as the start date, plus my first payslip which covered that partial month. I kept the email factual. No accusations, just \"here's the date discrepancy, here's the supporting document, can we revisit this.\"",
            "The first response was a fairly standard one — their system uses the official labour card registration date as the joining date for gratuity purposes, that's their policy. I pushed once more, forwarding the same email to the HR director and asking, plainly, whether actual contractual start date or government registration date is the correct basis under the law. I didn't pretend to know the answer with total certainty. I just asked the question directly to someone with the authority to answer it.",
            "About nine working days later I got a revised settlement. They corrected the gratuity using the 14th March start date and transferred an additional AED 4,150 — slightly under my own AED 4,200 estimate, because of how they rounded partial months in their system. I didn't fight over the remaining fifty dirhams. That wasn't the point.",
          ],
        },
        {
          heading: "What I'd actually tell you to do",
          body: [
            "Ask for the breakdown before you accept any final settlement, every time, regardless of whether the total looks right. A total with no breakdown tells you nothing about which date, which salary figure, or which formula was used to get there.",
            "Check your own offer letter date against whatever date appears on the settlement sheet. Payroll systems pull from whatever field is populated in the HR database, and that field isn't always your actual joining date — sometimes it's a visa stamping date, a labour card date, or a probation-confirmation date, all of which can differ from your real start date by days or weeks.",
            "And if you're anywhere near a milestone year — the five-year mark where the rate changes, or the two-year cap at the very top of your service — pay extra attention. A small date error barely matters in year two. The same error at year five can cost you real money, the way it cost me.",
            "I'm not saying every company makes this mistake, and I'm not saying you should go in assuming bad faith. I'm saying it costs you fifteen minutes to run your own number first, and that fifteen minutes is worth it.",
          ],
        },
      ]}
      internalLinks={[
        { href: '/', label: 'UAE gratuity calculator', description: 'Run your own numbers before comparing them against a settlement sheet.' },
        { href: '/final-settlement-calculator-uae', label: 'UAE final settlement calculator', description: 'Check gratuity alongside leave pay, notice pay, and deductions in one total.' },
        { href: '/blog/how-to-dispute-gratuity-uae', label: 'How to dispute a gratuity calculation', description: 'A step-by-step approach if your own number and HR\'s number do not match.' },
        { href: '/blog/how-to-file-mohre-complaint', label: 'How to file a MOHRE complaint for unpaid gratuity', description: 'What to do if a written request does not resolve the gap.' },
      ]}
      externalLinks={[
        { href: 'https://u.ae/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', label: 'UAE Government: end-of-service benefits', description: 'Official UAE Government overview of private-sector end-of-service benefit provisions.' },
        { href: 'https://mohre.gov.ae', label: 'MOHRE: Ministry of Human Resources and Emiratisation', description: 'Official UAE ministry responsible for labour law and private-sector employment regulation.' },
      ]}
      faq={[
        ['Should I always question my final settlement?', 'Not necessarily, but it costs you almost nothing to recompute it yourself first using the actual dates on your offer letter and payslips. If your number and HR\'s number match, you\'ve lost fifteen minutes. If they don\'t, you\'ve just saved yourself thousands.'],
        ['What if HR refuses to share the calculation breakdown?', 'Put the request in writing over email rather than verbally, and frame it factually — you are not accusing anyone, you are asking to see how a number was reached. Most HR teams will provide it once asked formally.'],
        ['Does this kind of date error happen often?', 'I genuinely don\'t have a statistic for how common it is. What I do know is that payroll systems pull joining dates from whichever field is populated, and that field is not always the actual contractual start date — so it is always worth a quick check.'],
        ['What documents should I keep in case this happens to me?', 'Your signed offer letter, your first one or two payslips, and a copy of your labour card or work permit. These are the documents that prove your actual joining date if the company\'s system has a different one on file.'],
      ]}
      datePublished="2026-06-18"
      dateModified="2026-06-18"
    />
  )
}

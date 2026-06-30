import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/i-resigned-without-job-lined-up-uae-gratuity'
const pageImage = '/images/blog/real/uae-gratuity-blog-human-cover.png'
const pageTitle = 'I Resigned Without Another Job Lined Up — Here Is What Happened to My Gratuity'
const pageDescription = 'I quit my UAE job with no backup offer, despite everyone telling me I would lose my gratuity for resigning. Real numbers, real timeline, and what actually showed up in my bank account.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['resigning UAE gratuity', 'quit job UAE no job lined up', 'UAE resignation gratuity 2026', 'does resigning affect gratuity'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'Person packing up a desk after resigning from a UAE job, with a laptop showing a bank balance' }],
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
      slug="i-resigned-without-job-lined-up-uae-gratuity"
      title="I Resigned Without Another Job Lined Up. Here's What Actually Happened to My Gratuity."
      description="Everyone, including my own father, told me I'd lose my gratuity for resigning without cause. That's an old rule. Here's what actually happened, with the real numbers."
      badge="TRUE STORY"
      intro="Short version: I quit a job I'd been at for three years and eight months with no backup offer, because I'd been told for years that resigning meant losing most of my gratuity. That rule hasn't existed since 2022. My bank statement proved it."
      image={{
        src: '/images/blog/real/uae-gratuity-blog-human-cover.png',
        alt: 'Person packing up a desk after resigning from a UAE job, with paperwork and a laptop nearby',
        title: 'I Resigned Without Another Job Lined Up',
        caption: 'No backup offer, just a decision that I was done — and the gratuity rule everyone warned me about turned out to be outdated.',
      }}
      sections={[
        {
          heading: 'Why I quit without a plan',
          body: [
            "I was working roughly sixty-hour weeks for most of 2024, in a role that kept absorbing more responsibility without anyone ever sitting down and formally expanding my title or salary to match it. I hadn't taken more than four consecutive days of leave in over a year. By December I'd hit the point where I wasn't sleeping properly, and I made the decision in about a week — no backup offer, no interviews lined up, nothing.",
            "My father, who has worked in the Gulf for longer than I've been alive, told me flatly that resigning without another job in hand meant I'd lose most of my gratuity. A couple of friends said the same thing, more vaguely — something about resignation before five years cutting your payout down to a third or two-thirds, depending on how long you'd been there. This used to be true. It was the rule under the old labour law, before 2022, and it's the kind of thing that sticks in people's heads for years after it stops being accurate.",
          ],
        },
        {
          heading: 'What the law actually says now',
          body: [
            "Federal Decree-Law No. 33 of 2021, which is the current UAE labour law, removed the old resignation penalty entirely. Gratuity is now calculated the same way whether you resign or your employment ends for any reason other than termination for cause under Article 44 — which covers things like gross misconduct, not just deciding you're done with a job.",
            "I still had a notice period to serve, which the resignation myth and the actual gratuity rule are two completely separate things people tend to mix up. My contract required thirty days. I served all thirty, because I needed a reference and I didn't want to burn a relationship I'd spent years building, even on my way out the door.",
          ],
        },
        {
          heading: 'The actual numbers',
          body: [
            "My basic salary was AED 7,200 a month. I joined on the 10th of April, 2021. I handed in my resignation on the 18th of November, 2024, and my last working day after the thirty-day notice period was the 18th of December, 2024. Total service: three years, eight months, eight days.",
            "Since I was under five years of service, the entire period gets calculated at 21 days of basic salary per year. Three full years plus the remaining eight months and eight days works out to roughly 3.69 years' worth of entitlement. 21 times 3.69 is about 77.5 days. Daily rate on a 7,200 basic salary is 240. 77.5 times 240 comes out to roughly AED 18,600.",
            "What actually landed in my account was AED 18,460 — close enough that I didn't think it was worth questioning over a couple hundred dirhams of rounding. It arrived eleven days after my last working day, which is inside the fourteen-day window the law gives employers to settle final dues.",
          ],
        },
        {
          heading: 'The part nobody actually warns you about',
          body: [
            "The thing people get wrong isn't usually the gratuity rule itself anymore — it's that they don't warn you about the gap. I didn't find a new job for about two and a half months after leaving. That's two and a half months of rent, bills, and everything else, covered by savings plus that gratuity payment, with no income coming in.",
            "Eleven days isn't instant. If you're planning to resign without a backup, you need to be realistic about the fact that even a fast, fully compliant settlement still takes a week or two to actually hit your account after your last working day, and that's assuming everything goes smoothly. I'd built up roughly three months of expenses in savings before I quit, mostly because I'd been planning a much smaller move for a while and just accelerated it. That cushion is what actually made the decision feel survivable, not the gratuity rule by itself.",
          ],
        },
        {
          heading: "What I'd say to someone thinking about doing the same",
          body: [
            "The law genuinely does protect your gratuity if you resign — that part of the old fear is outdated and you can stop worrying about it. What you do still need to plan around is the notice period your contract requires, and the realistic timeline between your last day and the money actually arriving.",
            "I'm not going to pretend quitting without a plan is the responsible move for everyone. It worked out for me partly because I had savings and partly because I got a bit lucky with how quickly I found something next. But I will say this plainly: don't let an outdated rule about \"losing your gratuity\" be the reason you stay somewhere that's making you miserable. That part of the fear, at least, you can let go of.",
          ],
        },
      ]}
      internalLinks={[
        { href: '/', label: 'UAE gratuity calculator', description: 'Estimate your own payout using basic salary, joining date, and last working day.' },
        { href: '/blog/uae-gratuity-resignation-vs-termination', label: 'Resignation vs termination — does it change UAE gratuity?', description: 'A full breakdown of how the 2022 law change affects resignation specifically.' },
        { href: '/notice-period-calculator-uae', label: 'UAE notice period calculator', description: 'Check how many days of notice your contract actually requires before you resign.' },
        { href: '/final-settlement-calculator-uae', label: 'UAE final settlement calculator', description: 'See gratuity together with unpaid salary, leave encashment, and notice pay.' },
      ]}
      externalLinks={[
        { href: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights', label: 'UAE Government: labour rights', description: 'Official worker-rights information for UAE private-sector employees.' },
        { href: 'https://u.ae/information-and-services/jobs/employment-in-the-private-sector/end-of-service-benefits-for-employees-in-the-private-sector', label: 'UAE Government: end-of-service benefits', description: 'Official UAE Government overview of end-of-service benefit provisions.' },
      ]}
      faq={[
        ['Does resigning reduce UAE gratuity now?', 'No. Since Federal Decree-Law No. 33 of 2021 took effect, gratuity is calculated the same way regardless of whether you resign or your employer ends the contract, as long as it is not a termination for cause under Article 44.'],
        ['Do I still need to serve a notice period if I resign?', 'Yes, in almost all cases. Notice periods are set by your contract, typically between 30 and 90 days, and serving notice is a separate obligation from your gratuity entitlement.'],
        ['How long after my last working day should gratuity arrive?', 'Article 53 of the labour law requires final dues to be settled within 14 days of the contract ending. Mine took 11 days, which was within that window.'],
        ['Should I quit without a backup job lined up?', 'That is a personal financial decision, not a legal one. The gratuity rule will not penalise you for resigning, but you should still plan around your notice period length and the realistic time it takes for final settlement to actually reach your account.'],
      ]}
      datePublished="2026-06-24"
      dateModified="2026-06-24"
    />
  )
}

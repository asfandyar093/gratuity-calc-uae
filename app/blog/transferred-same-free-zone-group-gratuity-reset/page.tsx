import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

const pageUrl = 'https://www.uaegratuitycheck.com/blog/transferred-same-free-zone-group-gratuity-reset'
const pageImage = '/images/blog/real/uae-gratuity-blog-human-cover.png'
const pageTitle = 'I Was "Transferred" Within the Same Free Zone Group — My Gratuity Service Reset to Zero'
const pageDescription = 'A signed internal transfer letter turned out to be a brand-new employment contract under a different trade license, and it quietly reset my gratuity clock. Here is what I missed and what to check before you sign.'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ['gratuity reset UAE transfer', 'internal transfer gratuity UAE', 'free zone group transfer gratuity', 'new trade license gratuity UAE'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'article',
    url: pageUrl,
    siteName: 'UAE Gratuity Check',
    images: [{ url: pageImage, width: 1200, height: 630, alt: 'Person reviewing two different employment offer letters from sister companies in a UAE free zone' }],
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
      slug="transferred-same-free-zone-group-gratuity-reset"
      title="I Got 'Transferred' Within the Same Free Zone Group. My Service Reset to Zero."
      description="A two-page internal transfer letter that I signed without reading closely turned out to be a new employment contract under a different trade license — and it cost me three and a half years of gratuity service."
      badge="CAUTIONARY TALE"
      intro="Short version: I signed what HR called an internal transfer to a sister company in the same free zone group. Same office, same manager, same desk. It was actually a brand-new employment contract with a new labour card number, and it reset my gratuity service back to zero — without anyone telling me that's what was happening."
      image={{
        src: '/images/blog/real/uae-gratuity-blog-human-cover.png',
        alt: 'Person comparing two employment offer letters from sister companies within the same UAE free zone group',
        title: "I Got Transferred Within the Same Free Zone Group",
        caption: 'A new trade license name on the offer letter is the detail that actually matters, even when nothing else about the job changes.',
      }}
      sections={[
        {
          heading: "The 'promotion' that wasn't quite what it looked like",
          body: [
            "I'd been at a media company inside a Dubai free zone for a little over three years, from January 2020 to mid-2023. In June 2023, my manager told me the wider group was restructuring and that I'd be moving onto a sister brand under the same parent company — same building, same floor, same desk, technically the same manager reporting line for another few months. HR called it an internal move and sent over a short letter to sign, framed as a formality to update my contract details for the new brand.",
            "I read it the way most people read a document HR tells them is a formality: quickly, on my phone, between meetings, looking mainly at the salary line to confirm nothing had changed. It hadn't. I signed it and didn't think about it again for two years.",
          ],
        },
        {
          heading: "What I didn't check, and should have",
          body: [
            "I assumed my service was continuous because nothing about my day-to-day changed. Same group, same office, same people. What I didn't check was that the new letter listed a different company name and, buried in the small print further down, a new labour card number tied to a separate trade license. As far as MOHRE's records were concerned, my employment with the first entity had ended in June 2023, and a new employment relationship had started on the same day with a different legal employer.",
            "I only found this out two years later, in mid-2026, when I was running my own numbers ahead of a planned departure and the figure the calculator gave me felt noticeably lower than I expected for someone who'd been with the same group for nearly six years.",
          ],
        },
        {
          heading: 'Running the numbers, twice',
          body: [
            "My first stint, at the original entity, ran from January 2020 to June 2023 — three years and five months. My second stint, at the sister company, started in June 2023 and was approaching three years by the time I checked. When I asked payroll for an estimated gratuity figure, they quoted me a number based only on service from June 2023 onward. The first three and a half years simply weren't in the calculation at all.",
            "And here's the part that actually stung: I never received a payout for that first stint either. When a genuine employment relationship ends, gratuity is normally settled at that point. Mine wasn't, because nobody treated the June 2023 move as an ending — it was framed, verbally and in spirit, as a continuation. Legally, on paper, it wasn't. That left three and a half years of accrued service sitting in a kind of limbo: not counted toward my current gratuity, and never paid out from the entity that technically owed it.",
          ],
        },
        {
          heading: 'What the law actually says about this',
          body: [
            "From what I've since learned, and I want to be honest that this is the point where I stopped relying on my own reading and asked a UAE employment lawyer directly: moving to a different trade license, even within the same group and even with identical day-to-day work, is generally treated as ending one employment relationship and starting another, unless there's specific documentation showing both employers agreed to a continuous-service transfer and MOHRE's records reflect that.",
            "That means, in principle, the original entity owed me a gratuity payout at the point of transfer back in June 2023. Because nothing was processed at the time, I'm now in the position of trying to establish and claim an entitlement that's two-plus years old, which is a meaningfully harder conversation than it would have been if I'd flagged it on day one.",
            "I'm not going to tell you exactly how this resolves for me, because I'm still in the middle of it as I write this. What I will say is that I wish I'd asked one direct question before signing that transfer letter: is this continuous service, or is this a new contract. That single question would have changed everything that followed.",
          ],
        },
        {
          heading: "What I'm actually doing about it now",
          body: [
            "I've pulled together my original offer letter and contract from the first entity, my payslips covering that period, and the transfer letter itself. I'm putting together a written request to the original legal entity asking for confirmation of my service end date and the gratuity owed for that period, and I'm prepared to take it to MOHRE if I don't get a clear written response.",
            "If you're reading this because you've just been offered something similar — an internal move, a transfer, a restructuring that comes with a new letter to sign — here's the one thing I'd ask you to actually check before you sign anything: does the new document show a different company name, a different trade license, or a different labour card number than what you currently have. If it does, ask directly, in writing, whether your service is being treated as continuous. If it isn't, ask for your accrued gratuity from the outgoing entity to be settled as part of the move, in writing, before you sign. Don't take a verbal \"don't worry, it's all the same group\" as an answer. I did, and it's costing me a much harder conversation two years later.",
          ],
        },
      ]}
      internalLinks={[
        { href: '/', label: 'UAE gratuity calculator', description: 'Estimate gratuity separately for each distinct employment period if you have moved between entities.' },
        { href: '/blog/how-to-dispute-gratuity-uae', label: 'How to dispute a gratuity calculation', description: 'What to do when an employer\'s number does not reflect your actual service history.' },
        { href: '/blog/how-to-file-mohre-complaint', label: 'How to file a MOHRE complaint for unpaid gratuity', description: 'Step-by-step process if a written request to a former employer does not resolve the gap.' },
        { href: '/gratuity-calculator', label: 'Gratuity calculators by industry and free zone', description: 'Free zone employees should confirm which regime applies before relying on a single number.' },
      ]}
      externalLinks={[
        { href: 'https://mohre.gov.ae', label: 'MOHRE: Ministry of Human Resources and Emiratisation', description: 'Official UAE ministry responsible for labour law, complaints, and private-sector employment regulation.' },
        { href: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights', label: 'UAE Government: labour rights', description: 'Official worker-rights information for UAE private-sector employees.' },
      ]}
      faq={[
        ['Does moving to a sister company within the same group count as continuous service for gratuity?', 'Not automatically. It generally only counts as continuous if both employing entities and the documentation explicitly establish that, and MOHRE\'s records reflect it. A different company name or labour card number usually signals a new employment relationship.'],
        ['What should I check before signing an internal transfer letter?', 'Compare the company name, trade license, and labour card number on the new document against your current ones. If anything differs, ask directly in writing whether your service is being treated as continuous or as a new contract.'],
        ['What if I already signed a transfer letter without checking this?', 'Gather your original offer letter, contract, and payslips from the earlier period, and request written confirmation from the original employer about your service end date and any gratuity owed. If they do not respond, a MOHRE complaint is the next step.'],
        ['Is this kind of transfer common in UAE free zones?', 'I cannot say how common it is, since this is one personal experience, but group restructurings that move staff between sister entities are not unusual, which is exactly why it is worth checking the paperwork every time, not just trusting that "same group" means "same contract."'],
      ]}
      datePublished="2026-06-29"
      dateModified="2026-06-29"
    />
  )
}

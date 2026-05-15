import type { Metadata } from 'next'
import BlogArticlePage from '@/components/BlogArticlePage'

export const metadata: Metadata = {
  title: 'UAE Probation Period and Gratuity 2026 — What the Law Says',
  description: 'Does the probation period count toward UAE gratuity? Maximum probation duration, resignation during probation, and what the 2022 labour law changed.',
  alternates: { canonical: 'https://www.uaegratuitycheck.com/blog/uae-probation-period-gratuity-2026' },
  openGraph: { type: 'article', images: ['/blog-probation-og.png'] },
}

export default function Page() {
  return <BlogArticlePage slug="uae-probation-period-gratuity-2026" title="UAE Probation Period and Gratuity — Full 2026 Guide" description="Does the probation period count toward UAE gratuity? Maximum probation duration, resignation during probation, and what the 2022 labour law changed." badge="PROBATION" intro="Probation time can count toward continuous service, but gratuity is only payable after completing at least one eligible year of service." sections={[
    { heading: 'Does probation count?', body: ['If employment continues after probation, the probation months are normally part of the continuous employment period. That matters when calculating the one-year eligibility threshold and total service years.', 'If you leave during probation, you usually have not completed the minimum service period for gratuity. Other dues such as salary already earned must still be paid.'] },
    { heading: 'Maximum probation duration', body: ['UAE probation is commonly capped at six months. Contract wording should clearly state the probation period, notice obligations during probation, and any recruitment-cost clauses.', 'Employees changing jobs during probation should read notice and mobility rules carefully before resigning.'] },
    { heading: 'Final settlement during probation', body: ['Even with no gratuity, a probation exit may include salary up to the last working day, approved reimbursements, and any contractual amounts due. Ask for a written settlement statement.'] },
  ]} faq={[
    ['Do I get gratuity after six months?', 'No, the standard gratuity threshold is one completed year.'],
    ['Does probation reset my service date?', 'No, if employment continues, service usually runs from the joining date.'],
    ['Can my employer deduct recruitment costs?', 'Only lawful, documented deductions should appear in final settlement. Get advice if the deduction looks punitive.'],
  ]} />
}

import { gratuityAmount, gratuityDays } from '@/lib/gratuity'

const DEFAULT_YEARS = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25]
const DEFAULT_SALARIES = [3000, 5000, 10000, 15000, 20000]

/** Static gratuity-by-years table (Article 51, daily wage = basic ÷ 30, cap = 24 × basic). */
export default function GratuityYearsTable({
  years = DEFAULT_YEARS,
  salaries = DEFAULT_SALARIES,
  lang = 'en',
  caption,
}: {
  years?: number[]
  salaries?: number[]
  lang?: 'en' | 'ar'
  caption?: string
}) {
  const isAr = lang === 'ar'
  const n = (v: number) => Math.round(v).toLocaleString('en-US')
  return (
    <div className="tbl-wrap">
      <table className="years-table">
        {caption && <caption style={{ captionSide: 'bottom', fontSize: '14px', color: 'var(--text-muted)', paddingTop: '0.5rem' }}>{caption}</caption>}
        <thead>
          <tr>
            <th>{isAr ? 'سنوات الخدمة' : 'Years of service'}</th>
            <th>{isAr ? 'أيام المكافأة' : 'Gratuity days'}</th>
            {salaries.map((s) => (
              <th key={s}>{isAr ? `أساسي ${n(s)} درهم` : `AED ${n(s)} basic`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {years.map((y) => (
            <tr key={y} className={y === 5 ? 'hl' : undefined}>
              <td>{isAr ? `${y} ${y === 1 ? 'سنة' : 'سنوات'}` : `${y} ${y === 1 ? 'year' : 'years'}`}</td>
              <td>{n(gratuityDays(y))}</td>
              {salaries.map((s) => {
                const g = gratuityAmount(s, y)
                return (
                  <td key={s}>
                    {isAr ? `${n(g.amount)} درهم` : `AED ${n(g.amount)}`}
                    {g.capped ? '*' : ''}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

// ── helpers ──────────────────────────────────────────────────────────────────
const INFLATION = 0.03   // UAE average ~3 %
const MAX_YEARS = 30

function fmtAED(n: number) {
  if (n >= 1_000_000) return 'AED ' + (n / 1_000_000).toFixed(2) + 'M'
  if (n >= 1_000)    return 'AED ' + (n / 1_000).toFixed(1) + 'K'
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}
function fmtFull(n: number) {
  return 'AED ' + Math.round(n).toLocaleString('en-AE')
}
function fv(principal: number, rate: number, years: number) {
  return principal * Math.pow(1 + rate / 100, years)
}
function inflationAdj(nominal: number, years: number) {
  return nominal / Math.pow(1 + INFLATION, years)
}

// ── investment type presets ───────────────────────────────────────────────────
const TYPES = [
  {
    id: 'custom',
    label: 'Custom',
    emoji: '⚙️',
    rate: 7,
    color: '#CE1126',
    tagline: 'Enter any expected annual return',
    rateLabel: 'Custom rate',
  },
  {
    id: 'fd',
    label: 'Fixed Deposit',
    emoji: '🏦',
    rate: 5.5,
    color: '#2563eb',
    tagline: 'UAE bank FDs: 5–6 % p.a. (guaranteed)',
    rateLabel: 'Typical UAE FD rate',
  },
  {
    id: 'index',
    label: 'Index Funds',
    emoji: '📈',
    rate: 8,
    color: '#009A44',
    tagline: 'Global index funds: 7–10 % p.a. (historical)',
    rateLabel: 'Historical global index average',
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    emoji: '🏢',
    rate: 6.5,
    color: '#d97706',
    tagline: 'Dubai property: rental yield + capital gains',
    rateLabel: 'Yield + appreciation estimate',
  },
]

// ── SVG line chart ────────────────────────────────────────────────────────────
const CW = 580, CH = 240
const PAD = { top: 18, right: 24, bottom: 44, left: 76 }
const plotW = CW - PAD.left - PAD.right
const plotH = CH - PAD.top - PAD.bottom

function Chart({ data }: { data: { yr: number; nominal: number; real: number; principal: number }[] }) {
  if (!data.length) return null
  const maxVal = Math.max(...data.map(d => d.nominal)) * 1.05
  const xs = (yr: number)  => PAD.left + (yr / data[data.length - 1].yr) * plotW
  const ys = (val: number) => PAD.top  + plotH - (val / maxVal) * plotH

  const nomPath  = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${xs(d.yr)},${ys(d.nominal)}`).join(' ')
  const realPath = data.map((d, i) => `${i === 0 ? 'M' : 'L'}${xs(d.yr)},${ys(d.real)}`).join(' ')

  // y-axis grid: 5 ticks
  const yTicks = Array.from({ length: 6 }, (_, i) => (maxVal * i) / 5)

  // x-axis ticks: every 2 or 5 years depending on horizon
  const horizon = data[data.length - 1].yr
  const xStep   = horizon <= 10 ? 2 : horizon <= 20 ? 5 : 10
  const xTicks  = Array.from({ length: Math.floor(horizon / xStep) + 1 }, (_, i) => i * xStep)

  return (
    <svg viewBox={`0 0 ${CW} ${CH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* grid lines */}
      {yTicks.map(v => (
        <line key={v} x1={PAD.left} y1={ys(v)} x2={CW - PAD.right} y2={ys(v)}
          stroke="#e5e7eb" strokeWidth="1" />
      ))}
      {/* y-axis labels */}
      {yTicks.map(v => (
        <text key={v} x={PAD.left - 8} y={ys(v) + 4} textAnchor="end"
          fontSize="11" fill="#64748b" fontWeight="700">{fmtAED(v)}</text>
      ))}
      {/* x-axis labels */}
      {xTicks.map(yr => (
        <text key={yr} x={xs(yr)} y={CH - 8} textAnchor="middle"
          fontSize="11" fill="#64748b" fontWeight="700">yr {yr}</text>
      ))}

      {/* principal baseline */}
      <line x1={PAD.left} y1={ys(data[0].principal)} x2={CW - PAD.right} y2={ys(data[0].principal)}
        stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* inflation-adjusted line */}
      <path d={realPath} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />

      {/* nominal value line */}
      <path d={nomPath} fill="none" stroke="#009A44" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* dots at final year */}
      <circle cx={xs(data[data.length-1].yr)} cy={ys(data[data.length-1].nominal)} r="5" fill="#009A44" />
      <circle cx={xs(data[data.length-1].yr)} cy={ys(data[data.length-1].real)}    r="4" fill="#3b82f6" />

      {/* axes */}
      <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + plotH} stroke="#d1d5db" strokeWidth="1.5" />
      <line x1={PAD.left} y1={PAD.top + plotH} x2={CW - PAD.right} y2={PAD.top + plotH} stroke="#d1d5db" strokeWidth="1.5" />
    </svg>
  )
}

// ── main component ────────────────────────────────────────────────────────────
export default function InvestmentCalculator({ defaultGratuity = '' }: { defaultGratuity?: string }) {
  const [gratuity,   setGratuity]   = useState(defaultGratuity)
  const [rateStr,    setRateStr]    = useState('7')
  const [yearsStr,   setYearsStr]   = useState('10')
  const [activeType, setActiveType] = useState('custom')
  const [showTable,  setShowTable]  = useState(false)

  const activePreset = TYPES.find(t => t.id === activeType) ?? TYPES[0]

  // When switching tab, snap rate to preset (unless custom)
  function selectType(id: string) {
    setActiveType(id)
    const preset = TYPES.find(t => t.id === id)
    if (preset && id !== 'custom') setRateStr(String(preset.rate))
  }

  const principal = parseFloat(gratuity) || 0
  const rate      = Math.min(Math.max(parseFloat(rateStr) || 7, 0.1), 50)
  const years     = Math.min(Math.max(parseInt(yearsStr) || 10, 1), MAX_YEARS)

  const data = useMemo(() => {
    if (!principal) return []
    return Array.from({ length: years + 1 }, (_, yr) => ({
      yr,
      nominal:   fv(principal, rate, yr),
      real:      inflationAdj(fv(principal, rate, yr), yr),
      principal,
    }))
  }, [principal, rate, years])

  const finalNominal = data[data.length - 1]?.nominal ?? 0
  const finalReal    = data[data.length - 1]?.real    ?? 0
  const totalReturn  = finalNominal - principal

  // Comparison across all types (for current principal + years)
  const comparison = TYPES.filter(t => t.id !== 'custom').map(t => ({
    ...t,
    projected: principal ? fv(principal, t.rate, years) : 0,
    adjValue:  principal ? inflationAdj(fv(principal, t.rate, years), years) : 0,
  }))

  const hasResult = principal > 0

  return (
    <div>
      {/* ── INPUTS + SUMMARY ─────────────────────────────────────────── */}
      <div className="calc-card">
        <div className="calc-header">
          <div className="calc-header-left">
            <h2>📊 Gratuity Investment Projection Calculator</h2>
            <p>Compound growth · Inflation-adjusted returns · Multiple asset classes</p>
          </div>
          <span className="calc-free-badge">✓ FREE TOOL</span>
        </div>

        <div className="calc-body">
          {/* LEFT — inputs */}
          <div className="calc-left">

            {/* Investment type tabs */}
            <div className="field">
              <label>💼 Investment Type — نوع الاستثمار</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '0.5rem' }}>
                {TYPES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => selectType(t.id)}
                    style={{
                      background: activeType === t.id ? t.color : 'var(--white)',
                      color: activeType === t.id ? '#fff' : 'var(--text-muted)',
                      border: `2px solid ${activeType === t.id ? t.color : 'var(--border)'}`,
                      borderRadius: '10px', padding: '9px 10px', cursor: 'pointer',
                      fontSize: '13px', fontWeight: 800, fontFamily: 'inherit',
                      transition: 'all 0.15s', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px',
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{t.emoji}</span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
              {activeType !== 'custom' && (
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 700, padding: '6px 0' }}>
                  {activePreset.tagline}
                </div>
              )}
            </div>

            <div className="field">
              <label>💰 Gratuity / Investment Amount (AED)</label>
              <input
                type="number"
                placeholder="Enter your gratuity e.g. 50,000"
                value={gratuity}
                onChange={e => setGratuity(e.target.value)}
                min="0"
              />
            </div>

            <div className="field">
              <label>📈 Expected Annual Return — {activePreset.rateLabel}</label>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <input
                  type="range" min="1" max="20" step="0.5"
                  value={rateStr}
                  onChange={e => setRateStr(e.target.value)}
                  style={{ flex: 1, accentColor: activePreset.color, height: '6px', cursor: 'pointer' }}
                />
                <div style={{ position: 'relative', width: '90px', flexShrink: 0 }}>
                  <input
                    type="number" min="0.1" max="50" step="0.5"
                    value={rateStr}
                    onChange={e => setRateStr(e.target.value)}
                    style={{ width: '100%', height: '54px', padding: '0 32px 0 14px', fontSize: '17px', borderRadius: '12px', border: '2px solid var(--border)', fontWeight: 700, fontFamily: 'inherit', background: 'var(--white)', color: 'var(--text)' }}
                  />
                  <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '15px', fontWeight: 800, color: 'var(--text-muted)', pointerEvents: 'none' }}>%</span>
                </div>
              </div>
            </div>

            <div className="field">
              <label>⏳ Investment Horizon (Years) — مدة الاستثمار</label>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <input
                  type="range" min="1" max={MAX_YEARS} step="1"
                  value={yearsStr}
                  onChange={e => setYearsStr(e.target.value)}
                  style={{ flex: 1, accentColor: activePreset.color, height: '6px', cursor: 'pointer' }}
                />
                <div style={{ position: 'relative', width: '90px', flexShrink: 0 }}>
                  <input
                    type="number" min="1" max={MAX_YEARS}
                    value={yearsStr}
                    onChange={e => setYearsStr(e.target.value)}
                    style={{ width: '100%', height: '54px', padding: '0 42px 0 14px', fontSize: '17px', borderRadius: '12px', border: '2px solid var(--border)', fontWeight: 700, fontFamily: 'inherit', background: 'var(--white)', color: 'var(--text)' }}
                  />
                  <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)', pointerEvents: 'none' }}>yrs</span>
                </div>
              </div>
            </div>

            <div className="info-box" style={{ fontSize: '13px', marginTop: '-0.5rem' }}>
              Inflation-adjusted value uses <strong>3% UAE average inflation</strong>. Actual returns and inflation will vary.
            </div>
          </div>

          {/* RIGHT — summary */}
          <div className="calc-right">
            {hasResult ? (
              <div className="result-wrap on">
                <div className="res-top" style={{ background: `linear-gradient(135deg, ${activePreset.color} 0%, ${activePreset.color}cc 100%)` }}>
                  <div className="res-lbl">📊 Projected Value after {years} years</div>
                  <div className="res-amt">{fmtFull(finalNominal)}</div>
                  <div className="res-sub">at {rate}% p.a. compounded annually</div>
                </div>
                <div className="bdown">
                  <div className="br">
                    <span className="bl">Initial investment</span>
                    <span className="bv">{fmtFull(principal)}</span>
                  </div>
                  <div className="br">
                    <span className="bl">Total return earned</span>
                    <span className="bv" style={{ color: 'var(--green-dark)' }}>+ {fmtFull(totalReturn)}</span>
                  </div>
                  <div className="br">
                    <span className="bl">Return on investment</span>
                    <span className="bv" style={{ color: 'var(--green-dark)' }}>
                      {((totalReturn / principal) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="br" style={{ background: 'var(--gray-50)' }}>
                    <span className="bl">🔵 Inflation-adjusted value</span>
                    <span className="bv" style={{ color: '#2563eb' }}>{fmtFull(finalReal)}</span>
                  </div>
                  <div className="br">
                    <span className="bl">Purchasing power loss</span>
                    <span className="bv" style={{ color: 'var(--text-muted)' }}>− {fmtFull(finalNominal - finalReal)}</span>
                  </div>
                </div>
                <div className="res-note">
                  ⚠️ Projections are illustrative only. Past performance does not guarantee future returns. See disclaimer below.
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📊</div>
                <p>Enter your gratuity amount<br />to see projected growth<br />over time</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── CHART ─────────────────────────────────────────────────────── */}
      {hasResult && (
        <div className="accrual-card" style={{ padding: '1.75rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            <div className="accrual-title" style={{ margin: 0 }}>
              📈 Investment growth projection — {years}-year horizon
            </div>
            <div style={{ display: 'flex', gap: '1.25rem', fontSize: '13px', fontWeight: 700, flexShrink: 0 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '20px', height: '3px', background: '#009A44', display: 'inline-block', borderRadius: '2px' }} />
                Nominal value
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '20px', height: '3px', background: '#3b82f6', borderTop: '3px dashed #3b82f6', display: 'inline-block' }} />
                Inflation-adjusted
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)' }}>
                <span style={{ width: '20px', height: '0', borderTop: '2px dashed #9ca3af', display: 'inline-block' }} />
                Principal
              </span>
            </div>
          </div>
          <Chart data={data} />

          {/* Year-by-year table toggle */}
          <button
            className="adv-toggle"
            style={{ marginTop: '1rem' }}
            onClick={() => setShowTable(!showTable)}
          >
            <span>{showTable ? '▲' : '▼'} Year-by-year projection table</span>
          </button>
          {showTable && (
            <div className="tbl-wrap" style={{ marginTop: '0.75rem' }}>
              <table>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Nominal Value</th>
                    <th>Total Return</th>
                    <th>Inflation-Adjusted</th>
                    <th>Annual Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {data.filter(d => d.yr > 0).map(d => (
                    <tr key={d.yr}>
                      <td>Year {d.yr}</td>
                      <td style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{fmtFull(d.nominal)}</td>
                      <td style={{ color: 'var(--green-dark)' }}>+ {fmtFull(d.nominal - principal)}</td>
                      <td style={{ color: '#2563eb' }}>{fmtFull(d.real)}</td>
                      <td style={{ color: 'var(--text-muted)' }}>
                        {fmtFull(d.nominal - (data[d.yr - 1]?.nominal ?? principal))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── COMPARISON TABLE ──────────────────────────────────────────── */}
      {hasResult && (
        <div className="accrual-card" style={{ marginTop: '0' }}>
          <div className="accrual-title">⚖️ Compare all investment types — {years} years at AED {principal.toLocaleString()}</div>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr>
                  <th>Investment Type</th>
                  <th>Rate</th>
                  <th>Projected Value</th>
                  <th>Total Return</th>
                  <th>Inflation-Adjusted</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(c => (
                  <tr key={c.id} className={activeType === c.id ? 'hl' : ''}>
                    <td>{c.emoji} {c.label}</td>
                    <td style={{ fontWeight: 700 }}>{c.rate}% p.a.</td>
                    <td style={{ color: 'var(--green-dark)', fontWeight: 800 }}>{fmtFull(c.projected)}</td>
                    <td style={{ color: 'var(--green-dark)' }}>+ {fmtFull(c.projected - principal)}</td>
                    <td style={{ color: '#2563eb' }}>{fmtFull(c.adjValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── INVESTMENT TYPE CARDS ─────────────────────────────────────── */}
      <div className="sec">
        <div className="sec-hd">Investment options for UAE gratuity</div>
        <div className="sec-sd">What are the most common ways UAE residents invest their end-of-service gratuity?</div>

        {/* Fixed Deposits */}
        <div className="card" style={{ borderLeft: '6px solid #2563eb', marginBottom: '1.25rem' }}>
          <div className="badge bg-blue">🏦 FIXED DEPOSITS — UAE BANKS</div>
          <h2>Fixed deposits — guaranteed returns, zero market risk</h2>
          <p>UAE bank fixed deposits are the most common choice for expats receiving gratuity. The principal is guaranteed, returns are predictable, and the process is straightforward through any UAE bank.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Bank</th><th>Term</th><th>Rate (p.a.)</th><th>Min. Amount</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Emirates NBD</td><td>12 months</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~5.50%</td><td>AED 25,000</td><td>Auto-renewal option</td></tr>
                <tr><td>ADCB</td><td>12 months</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~5.25%</td><td>AED 10,000</td><td>Flexi rates for larger deposits</td></tr>
                <tr><td>First Abu Dhabi Bank (FAB)</td><td>12 months</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~5.00%</td><td>AED 20,000</td><td>Available for NRIs too</td></tr>
                <tr><td>Dubai Islamic Bank</td><td>12 months</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~5.00%</td><td>AED 10,000</td><td>Shariah-compliant profit rate</td></tr>
                <tr className="hl"><td>Mashreq</td><td>3–24 months</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>4.75–5.75%</td><td>AED 5,000</td><td>Flexible tenors</td></tr>
              </tbody>
            </table>
          </div>
          <div className="two-col" style={{ marginTop: '1rem' }}>
            <div className="mini-card">
              <h3 style={{ color: '#1d4ed8' }}>✓ Advantages</h3>
              <ul>
                <li>Principal fully guaranteed — zero risk of loss</li>
                <li>Predictable, fixed returns</li>
                <li>No investment knowledge required</li>
                <li>UAE banks not covered by deposit insurance but highly regulated by CBUAE</li>
                <li>Easy to open — same bank where salary is received</li>
              </ul>
            </div>
            <div className="mini-card">
              <h3>⚠️ Limitations</h3>
              <ul>
                <li>Returns may not outpace long-term inflation</li>
                <li>Penalties for early withdrawal</li>
                <li>Rates will decline when interest rates drop</li>
                <li>Not ideal for long horizons (20+ years)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Index Funds */}
        <div className="card" style={{ borderLeft: '6px solid var(--green)', marginBottom: '1.25rem' }}>
          <div className="badge bg-teal">📈 INDEX FUNDS &amp; ETFS — GLOBAL MARKETS</div>
          <h2>Index funds — long-term wealth building</h2>
          <p>Index funds and ETFs tracking global markets (S&amp;P 500, MSCI World) have historically delivered 7–10% annualised returns over 20+ year periods — the highest long-term returns of any mainstream asset class. UAE residents can access these through international brokers.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Fund / Platform</th><th>Type</th><th>Historical Return</th><th>Access for UAE residents</th></tr>
              </thead>
              <tbody>
                <tr><td>Vanguard S&amp;P 500 ETF (VOO)</td><td>US equity index</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~10% (30yr avg)</td><td>Interactive Brokers, Saxo</td></tr>
                <tr><td>iShares MSCI World ETF</td><td>Global equity</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~8% (20yr avg)</td><td>Interactive Brokers, eToro</td></tr>
                <tr><td>Vanguard Total World (VT)</td><td>Global diversified</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~7.5% (15yr avg)</td><td>Interactive Brokers</td></tr>
                <tr className="hl"><td>NASDAQ-100 ETF (QQQ)</td><td>US tech-heavy</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>~13% (20yr avg)</td><td>Interactive Brokers, Saxo</td></tr>
              </tbody>
            </table>
          </div>
          <div className="warn-box" style={{ marginTop: '1rem' }}>
            <strong>For UAE residents:</strong> Index funds are not listed on UAE exchanges. Use regulated international platforms — Interactive Brokers and Saxo Bank are the most commonly used by UAE expats. Ensure your broker is regulated in a reputable jurisdiction (US SEC, UK FCA, or equivalent).
          </div>
        </div>

        {/* Real Estate */}
        <div className="card" style={{ borderLeft: '6px solid #d97706' }}>
          <div className="badge bg-amber">🏢 UAE REAL ESTATE — DUBAI &amp; ABU DHABI</div>
          <h2>UAE real estate — income + appreciation</h2>
          <p>Dubai real estate offers some of the highest rental yields globally — typically 5–8% net in established areas. Combined with capital appreciation, total returns can reach 8–12% in strong market cycles. However, real estate requires significantly more capital and carries liquidity risk.</p>
          <div className="tbl-wrap">
            <table>
              <thead>
                <tr><th>Area</th><th>Avg Rental Yield</th><th>Entry Price (1BR)</th><th>Notes</th></tr>
              </thead>
              <tbody>
                <tr><td>Dubai Marina</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>5.5–7%</td><td>AED 1.1–1.6M</td><td>High liquidity, established community</td></tr>
                <tr><td>Business Bay</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>6–8%</td><td>AED 900K–1.3M</td><td>Strong corporate rental demand</td></tr>
                <tr><td>Jumeirah Village Circle (JVC)</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>7–9%</td><td>AED 600–900K</td><td>Most affordable entry point</td></tr>
                <tr className="hl"><td>Abu Dhabi (Al Reem Island)</td><td style={{ color: 'var(--green-dark)', fontWeight: 700 }}>6–8%</td><td>AED 700K–1.1M</td><td>Lower property tax, stable yields</td></tr>
              </tbody>
            </table>
          </div>
          <div className="info-box" style={{ marginTop: '1rem' }}>
            <strong>DLD transfer fee:</strong> Dubai Land Department charges 4% transfer fee on purchase. Factor this into your effective cost of entry. Off-plan properties are available from AED 300K+ with payment plans — but carry completion risk.
          </div>
        </div>
      </div>

      {/* ── DISCLAIMER ────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--gray-100)', border: '2px solid var(--gray-200)', borderRadius: '16px', padding: '1.5rem 2rem', margin: '1rem 0 1.5rem' }}>
        <div style={{ fontSize: '12px', fontWeight: 900, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          ⚠️ Financial Disclaimer
        </div>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
          All projections on this page are for <strong>illustrative and educational purposes only</strong>. They are not financial advice, investment recommendations, or a guarantee of future returns. Past performance of any investment does not guarantee future results. Investment returns, inflation, and exchange rates can all vary significantly from the assumptions used here. The rates shown for UAE banks, index funds, and real estate are approximate historical or current estimates and may change at any time. <strong>Before investing your end-of-service gratuity, consult a qualified and licensed financial advisor.</strong> UAE Gratuity Check is not a licensed financial advisor and does not accept liability for investment decisions made based on this tool.
        </p>
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <div className="card" style={{ background: 'linear-gradient(135deg, var(--red) 0%, #8b0000 100%)', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: '#fff' }}>Haven&apos;t calculated your gratuity yet?</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
          Use the free UAE Gratuity Calculator to find out exactly what you&apos;re owed — then come back to project your returns.
        </p>
        <Link href="/" style={{ display: 'inline-block', background: 'var(--green)', color: '#fff', padding: '14px 32px', borderRadius: '12px', fontWeight: 800, fontSize: '17px', textDecoration: 'none' }}>
          Calculate My Gratuity First →
        </Link>
      </div>
    </div>
  )
}

'use client'
import { useState } from 'react'
export default function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="fq" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={`fq-ic ${open ? 'open' : ''}`}>+</span>
      </button>
      <div className={`fa ${open ? 'open' : ''}`}>{a}</div>
    </div>
  )
}

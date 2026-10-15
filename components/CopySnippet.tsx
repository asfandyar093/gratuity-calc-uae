'use client'

import { useState } from 'react'

export default function CopySnippet({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }
  return (
    <div>
      <pre style={{ background: '#0f172a', color: '#e2e8f0', padding: '14px', borderRadius: '10px', overflowX: 'auto', fontSize: '13px', lineHeight: 1.5, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
        <code>{code}</code>
      </pre>
      <button type="button" onClick={copy} style={{ marginTop: '10px', background: 'var(--green)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 18px', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
        {copied ? 'Copied' : 'Copy the code'}
      </button>
    </div>
  )
}

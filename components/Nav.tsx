'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-ink/8">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/logo.png" alt="Founder Guide" width={32} height={32} className="rounded-brand" />
          <span className="font-heading font-semibold text-ink text-base tracking-tight">Founder Guide</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-body text-muted hover:text-ink transition-colors">{l.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm font-body text-muted hover:text-ink transition-colors">Sign in</a>
          <a href="#pricing" className="btn-primary text-sm py-2 px-5">Get early access</a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-ink" aria-label="Toggle menu">
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/8 bg-background px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-body text-ink">{l.label}</a>
          ))}
          <a href="#pricing" onClick={() => setOpen(false)} className="btn-primary text-sm py-2.5 text-center">Get early access</a>
        </div>
      )}
    </header>
  )
}

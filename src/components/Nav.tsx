'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-[#14130F]/8">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Founder AI Guide" width={32} height={32} className="rounded" />
          <span className="font-heading font-600 text-ink text-[17px] tracking-tight">FounderAI</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted">
          <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
          <a href="#features" className="hover:text-ink transition-colors">Features</a>
          <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
          <a href="#integrations" className="hover:text-ink transition-colors">Integrations</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-muted hover:text-ink transition-colors">Sign in</a>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-[8px] text-sm font-semibold bg-accent text-on-accent hover:bg-accent/90 transition-colors"
          >
            Start free
          </a>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-[#14130F]/8 px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-sm font-medium text-muted hover:text-ink" onClick={() => setOpen(false)}>How it works</a>
          <a href="#features" className="text-sm font-medium text-muted hover:text-ink" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" className="text-sm font-medium text-muted hover:text-ink" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-ink">Sign in</a>
          <a href="#pricing" className="px-4 py-2 rounded-[8px] text-sm font-semibold bg-accent text-on-accent text-center" onClick={() => setOpen(false)}>Start free</a>
        </div>
      )}
    </header>
  )
}

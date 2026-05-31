'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Launchpath" width={32} height={32} className="rounded-brand" />
          <span className="font-heading font-600 text-lg text-ink">Launchpath</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-body text-muted hover:text-ink transition-colors">How it works</a>
          <a href="#features" className="text-sm font-body text-muted hover:text-ink transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-body text-muted hover:text-ink transition-colors">Pricing</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-body text-muted hover:text-ink transition-colors">Sign in</a>
          <a
            href="#pricing"
            className="text-sm font-body font-medium bg-accent text-on-accent px-4 py-2 rounded-brand hover:bg-opacity-90 transition-colors"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden p-2 text-muted hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-sm text-muted" onClick={() => setOpen(false)}>How it works</a>
          <a href="#features" className="text-sm text-muted" onClick={() => setOpen(false)}>Features</a>
          <a href="#pricing" className="text-sm text-muted" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#pricing" className="text-sm font-medium bg-accent text-on-accent px-4 py-2 rounded-brand text-center">Get started</a>
        </div>
      )}
    </header>
  )
}

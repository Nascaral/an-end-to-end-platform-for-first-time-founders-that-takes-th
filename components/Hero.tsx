import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gradient wash */}
      <div className="absolute inset-0 bg-hero-wash pointer-events-none" />
      {/* Decorative blobs */}
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #F6DCD5 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-5 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent-soft text-accent text-xs font-heading font-semibold mb-6 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Early access — from $19/mo
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.05] mb-6">
            One product that{' '}
            <span className="gradient-text">remembers everything</span>{' '}
            from idea to launch.
          </h1>

          <p className="font-body text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-10">
            Stop stitching together ChatGPT, customer interview guides, and AI builders that forget each other. Founder Guide carries one continuous memory from raw idea → honest validation → build spec → launch.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#pricing" className="btn-gradient shadow-lg shadow-accent/20">
              Start for free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See how it works
            </a>
          </div>

          {/* Social proof row */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#C64A2A"><path d="M8 1l1.8 3.6 4 .58-2.9 2.83.68 3.99L8 10l-3.58 1.88.68-4L2.2 5.18l4-.58L8 1z"/></svg>
              No cheerleading — brutal honesty only
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#C64A2A"><path d="M8 1l1.8 3.6 4 .58-2.9 2.83.68 3.99L8 10l-3.58 1.88.68-4L2.2 5.18l4-.58L8 1z"/></svg>
              Real customer conversations required to progress
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#C64A2A"><path d="M8 1l1.8 3.6 4 .58-2.9 2.83.68 3.99L8 10l-3.58 1.88.68-4L2.2 5.18l4-.58L8 1z"/></svg>
              Validation findings flow directly into your build spec
            </span>
          </div>
        </div>

        {/* Hero mockup */}
        <div className="mt-16 relative">
          <div className="rounded-brand-xl border border-ink/10 shadow-2xl bg-surface overflow-hidden">
            <div className="border-b border-ink/8 px-4 py-3 flex items-center gap-2 bg-background">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 font-body text-xs text-muted">founder-guide.app / dashboard</span>
            </div>
            <div className="p-6 grid md:grid-cols-3 gap-4">
              {[
                { stage: '01', label: 'Validate', status: 'In progress', color: '#E8763A', note: '3 of 5 conversations logged' },
                { stage: '02', label: 'Build Spec', status: 'Locked', color: '#767573', note: 'Complete validation first' },
                { stage: '03', label: 'Launch', status: 'Locked', color: '#767573', note: 'Build spec required' },
              ].map((s) => (
                <div key={s.stage} className="rounded-brand-lg border border-ink/8 bg-background p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading text-xs font-semibold text-muted tracking-widest uppercase">Stage {s.stage}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-body" style={{ background: s.color + '18', color: s.color }}>{s.status}</span>
                  </div>
                  <p className="font-heading font-semibold text-ink text-base mb-1">{s.label}</p>
                  <p className="font-body text-xs text-muted">{s.note}</p>
                  {s.stage === '01' && (
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-muted mb-1"><span>Progress</span><span>60%</span></div>
                      <div className="h-1.5 bg-ink/8 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: '60%', background: 'linear-gradient(90deg, #C64A2A, #E8763A)' }} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="px-6 pb-6">
              <div className="rounded-brand-lg border border-accent/20 bg-accent-soft p-4">
                <p className="font-heading font-semibold text-accent text-sm mb-1">Verdict: PIVOT — not validated</p>
                <p className="font-body text-xs text-ink/70">You need 5 real customer conversations before this idea can be marked validated. 2 conversations logged so far. Log 3 more to unlock your Build Spec.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-hero overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-soft text-accent text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
              Early access — honest by design
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-ink mb-6">
              From idea to MVP —{' '}
              <span className="gradient-text">one product</span>{' '}
              that remembers everything
            </h1>

            <p className="font-body text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Stop stitching together ChatGPT, customer interview frameworks, and AI builders that each forget what the last tool learned. Launchpath carries one continuous memory from validation to launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-accent text-on-accent font-medium px-6 py-3 rounded-brand hover:bg-opacity-90 transition-colors text-sm"
              >
                Start for free
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-ink font-medium px-6 py-3 rounded-brand hover:border-gray-300 transition-colors text-sm bg-white"
              >
                See how it works
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              No credit card required · $0 to validate · Honest, not cheerleading
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-brand-lg shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-ink px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-400 font-mono ml-2">Validation verdict</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#C64A2A" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-ink mb-1">Verdict: PIVOT</p>
                    <p className="text-xs text-muted leading-relaxed">Your problem hypothesis is partially confirmed, but 0 of 3 required customer conversations logged. The market signal is real — your solution fit is unproven.</p>
                  </div>
                </div>
                <div className="bg-surface rounded-brand p-3 mb-3">
                  <p className="text-xs font-medium text-ink mb-1">Blocking assumption</p>
                  <p className="text-xs text-muted">Will users pay $29/mo to avoid tool-switching, or have they already adapted?</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div className="bg-accent h-1.5 rounded-full" style={{width: '0%'}}></div>
                  </div>
                  <span className="text-xs text-muted">0 / 3 conversations</span>
                </div>
                <button className="mt-4 w-full bg-accent text-on-accent text-xs font-medium py-2.5 rounded-brand hover:bg-opacity-90 transition-colors">
                  Log a customer conversation →
                </button>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gradient-brand opacity-10 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="text-xs text-muted text-center mb-6 uppercase tracking-widest font-medium">Today you're assembling these separately</p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
            {['ChatGPT', 'The Mom Test', 'Preuve', 'Lovable', 'v0', 'Blog posts'].map((tool) => (
              <span key={tool} className="text-sm font-body text-ink line-through decoration-accent/60">{tool}</span>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-sm font-heading font-semibold text-accent">→ One product that remembers what all of them learned</span>
          </div>
        </div>
      </div>
    </section>
  )
}

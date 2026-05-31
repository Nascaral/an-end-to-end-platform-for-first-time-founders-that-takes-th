export default function Honesty() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="rounded-brand-xl border border-ink/10 overflow-hidden">
          {/* Header band */}
          <div className="px-8 py-6 border-b border-ink/8" style={{ background: 'linear-gradient(135deg, #14130F 0%, #2a2825 100%)' }}>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v5l3 2M7 12A5 5 0 107 2a5 5 0 000 10z" stroke="#C64A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <p className="font-heading font-semibold text-white text-base">An honest note about where this product is right now</p>
            </div>
          </div>

          <div className="p-8 bg-surface grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-body text-sm text-ink/80 leading-relaxed mb-6">
                We believe the validation-to-build handoff is an unsolved, genuinely valuable problem. No current tool passes what you learned from real customer conversations directly into a build spec that the AI builder actually uses.
              </p>
              <p className="font-body text-sm text-ink/80 leading-relaxed">
                But we're being direct: the platform is in early access, and we're still proving that founders who skip customer conversations today will do them inside this platform rather than finding a workaround or dropping off at Stage 2.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Real customer conversations are required — you cannot skip to building',
                'The verdict won\'t say \'validated\' until the signal is real',
                'Early access pricing reflects where we are in the journey',
                'You\'re helping shape the product if you join now',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#C64A2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <p className="font-body text-sm text-ink/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

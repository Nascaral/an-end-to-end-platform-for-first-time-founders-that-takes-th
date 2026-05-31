export default function Integrations() {
  const builders = [
    { name: 'Lovable', desc: 'AI full-stack builder' },
    { name: 'v0 by Vercel', desc: 'UI generation' },
    { name: 'Bolt.new', desc: 'Instant web apps' },
  ]

  return (
    <section id="integrations" className="bg-surface border-y border-ink/6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="font-heading text-xs font-semibold text-accent tracking-widest uppercase mb-3">Integrations</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Your validated context, in your builder of choice.
          </h2>
          <p className="font-body text-muted text-base leading-relaxed">
            The build spec generated from your validation isn't a document you copy-paste. It's a structured prompt that flows into your AI builder with all the customer context intact.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {builders.map((b, i) => (
            <div key={i} className="bg-background rounded-brand-lg border border-ink/8 p-6 text-center hover:shadow-sm hover:border-accent/20 transition-all">
              <div className="w-12 h-12 rounded-brand-lg border border-ink/8 mx-auto mb-4 flex items-center justify-center bg-surface">
                <span className="font-heading font-semibold text-ink text-lg">{b.name[0]}</span>
              </div>
              <p className="font-heading font-semibold text-ink text-sm mb-1">{b.name}</p>
              <p className="font-body text-xs text-muted">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Explainer */}
        <div className="rounded-brand-xl border border-ink/8 bg-background p-6 flex flex-col md:flex-row gap-6 items-start">
          <div className="shrink-0 w-10 h-10 rounded-brand bg-accent-soft flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3v12" stroke="#C64A2A" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </div>
          <div>
            <p className="font-heading font-semibold text-ink text-sm mb-2">How the handoff actually works</p>
            <p className="font-body text-sm text-muted leading-relaxed">
              After you complete validation, Founder Guide compiles your confirmed pain points, customer language, workflow gaps, and must-have features into a structured build spec. You choose your builder, and we generate an optimized prompt that includes all of that context — so the builder starts with what you actually learned, not a blank slate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Problem() {
  const tools = [
    { name: 'ChatGPT', role: 'Validation', flaw: 'Cheerleads every idea, never asks for proof' },
    { name: 'Interview guides', role: 'Conversations', flaw: 'Most founders skip this entirely' },
    { name: 'Lovable / v0', role: 'Building', flaw: 'Great at building, blind to what validation found' },
    { name: 'Blog posts', role: 'Strategy', flaw: 'No memory of your specific context' },
  ]
  return (
    <section className="bg-surface border-y border-ink/6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="font-heading text-xs font-semibold text-accent tracking-widest uppercase mb-3">The problem</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Five good tools. Zero shared memory.
          </h2>
          <p className="font-body text-muted text-base leading-relaxed">
            Today's founder stack is genuinely capable — but every tool starts from scratch. Each handoff loses context. And most skip the step that matters most: talking to real customers before building.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((t, i) => (
            <div key={i} className="bg-background rounded-brand-lg border border-ink/8 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-ink/6 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 2l8 8M10 2l-8 8" stroke="#767573" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
                <span className="font-heading font-semibold text-ink text-sm">{t.name}</span>
              </div>
              <p className="text-xs text-accent font-body font-medium mb-2 uppercase tracking-wide">{t.role}</p>
              <p className="font-body text-sm text-muted leading-relaxed">{t.flaw}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-brand-xl border border-accent/20 bg-accent-soft flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" stroke="#C64A2A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <p className="font-body text-sm text-ink/80 leading-relaxed">
            <strong className="font-heading font-semibold text-ink">The real cost isn't the tools.</strong> It's building something nobody wants because no tool forced you to confirm real workflow fit before you shipped.
          </p>
        </div>
      </div>
    </section>
  )
}

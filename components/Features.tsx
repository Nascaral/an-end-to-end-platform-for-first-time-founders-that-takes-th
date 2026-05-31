export default function Features() {
  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.09 4.26 4.7.68-3.4 3.31.8 4.67L10 12.77l-4.19 2.15.8-4.67-3.4-3.31 4.7-.68L10 2z" stroke="#C64A2A" strokeWidth="1.6" strokeLinejoin="round"/></svg>
      ),
      title: 'Brutally honest verdicts',
      body: 'BUILD / KILL / PIVOT analysis sourced from real market data, not pattern-matching on buzzwords. No cheerleading. The verdict updates as you log conversations.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10a7 7 0 1014 0A7 7 0 003 10zm7-3v3l2 2" stroke="#C64A2A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: 'Gated validation progress',
      body: "You can't mark your idea validated without logging real customer conversations. The platform counts, scores, and surfaces what you're actually learning.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 14l4-4 3 3 5-6" stroke="#C64A2A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: 'Validation-to-build handoff',
      body: 'Confirmed customer language, pain points, and workflow gaps are compiled into a build spec that passes directly into Lovable, v0, or Bolt — context intact at the boundary.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 10h16M10 2v16" stroke="#C64A2A" strokeWidth="1.6" strokeLinecap="round"/></svg>
      ),
      title: 'One shared memory',
      body: 'Every insight, every conversation, every build decision lives in one place. Post-launch guidance knows what you validated, what you built, and why.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 9l2 2 4-4M4 17V6a2 2 0 012-2h8a2 2 0 012 2v11l-6-3-6 3z" stroke="#C64A2A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: 'Interview discipline, built in',
      body: 'Structured conversation templates based on Mom Test principles. Log answers, tag signals, and watch the platform surface what you proved vs. what you assumed.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 4v4l3 2" stroke="#C64A2A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: 'Context-aware GTM & pitch',
      body: 'Go-to-market playbooks, pitch framing, and funding guidance that know your specific customer segment, validated pain, and built feature set.',
    },
  ]

  return (
    <section id="features" className="bg-surface border-y border-ink/6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="font-heading text-xs font-semibold text-accent tracking-widest uppercase mb-3">Features</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Built for the whole journey, not just one step.
          </h2>
          <p className="font-body text-muted text-base leading-relaxed">
            Every feature is designed so the next stage knows what the last stage learned.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="bg-background rounded-brand-lg border border-ink/8 p-6 hover:shadow-sm hover:border-accent/20 transition-all">
              <div className="w-9 h-9 rounded-brand bg-accent-soft flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-heading font-semibold text-ink text-base mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

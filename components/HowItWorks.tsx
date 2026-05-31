export default function HowItWorks() {
  const stages = [
    {
      num: '01',
      title: 'Honest validation',
      sub: 'BUILD / KILL / PIVOT — no cheerleading',
      body: 'Submit your idea and get a sourced verdict that refuses to call anything validated until you log real customer conversations. The platform tracks your research and won\'t let you skip the hard part.',
      tags: ['Sourced research', 'Conversation logging', 'Live verdict updates'],
    },
    {
      num: '02',
      title: 'Customer conversations',
      sub: 'Log interviews. Watch the verdict move.',
      body: 'Each conversation you log is analyzed for signal — pain strength, workflow fit, willingness to pay. The verdict updates in real time. Validation only unlocks when the signal is real, not when you feel good.',
      tags: ['Conversation templates', 'Signal scoring', 'Unlockable build stage'],
    },
    {
      num: '03',
      title: 'Validation-to-build handoff',
      sub: 'What you learned becomes what you build',
      body: 'When validation is complete, your confirmed pain points, customer language, and workflow gaps are compiled into a precise build spec. That spec is passed directly into your AI builder — context intact.',
      tags: ['Auto-generated spec', 'Builder-ready prompt', 'No context lost'],
    },
    {
      num: '04',
      title: 'Context-aware guidance',
      sub: 'GTM, pitch, raise — with full memory',
      body: 'Post-launch guidance that actually knows your idea, your customers, and what you built. No more re-explaining yourself to a generic AI.',
      tags: ['GTM playbooks', 'Pitch prep', 'Funding guidance'],
    },
  ]

  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="font-heading text-xs font-semibold text-accent tracking-widest uppercase mb-3">How it works</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Four stages. One memory.
          </h2>
          <p className="font-body text-muted text-base leading-relaxed">
            Each stage builds on the last. Nothing is forgotten. Nothing is faked.
          </p>
        </div>

        <div className="space-y-4">
          {stages.map((s, i) => (
            <div key={i} className="group rounded-brand-xl border border-ink/8 bg-surface p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-accent/30 hover:shadow-sm transition-all">
              <div className="shrink-0 flex items-start gap-4 md:w-56">
                <span className="font-heading text-4xl font-semibold tracking-tight" style={{ background: 'linear-gradient(135deg, #C64A2A, #F6A05A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.num}</span>
                <div>
                  <p className="font-heading font-semibold text-ink text-base leading-tight">{s.title}</p>
                  <p className="font-body text-xs text-muted mt-1">{s.sub}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-body text-sm text-ink/80 leading-relaxed mb-4">{s.body}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent font-heading font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

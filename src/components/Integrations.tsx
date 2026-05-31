const integrations = [
  { name: 'Lovable', desc: 'Full-stack app builder', category: 'Build' },
  { name: 'v0 by Vercel', desc: 'UI generation', category: 'Build' },
  { name: 'Bolt.new', desc: 'In-browser builder', category: 'Build' },
  { name: 'Notion', desc: 'Export your spec', category: 'Export' },
  { name: 'Linear', desc: 'Convert to tickets', category: 'Export' },
  { name: 'Loom', desc: 'Record customer sessions', category: 'Research' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="font-heading text-4xl lg:text-5xl font-700 tracking-tight text-ink mb-4">
            Connects to your
            <span className="gradient-text"> builder of choice.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-3">
            We hand off a validated build spec — customer language, confirmed pain, suggested stack — to the builder you already use.
          </p>
          <p className="text-sm text-muted/80 max-w-lg mx-auto bg-accent-soft/60 border border-accent/15 rounded-[8px] px-4 py-2.5">
            <span className="font-semibold text-accent">Honest note:</span> Build connectors pass structured context — think of them as a very good briefing document, not magic API memory. The handoff is better than copy-pasting notes; it's not the same as a native integration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-background rounded-[12px] border border-[#14130F]/8 p-5 flex items-center gap-4 hover:border-accent/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-[8px] gradient-cta flex items-center justify-center text-on-accent text-xs font-bold flex-shrink-0">
                {integration.name.charAt(0)}
              </div>
              <div>
                <div className="font-heading font-600 text-ink text-sm">{integration.name}</div>
                <div className="text-xs text-muted">{integration.desc}</div>
              </div>
              <div className="ml-auto">
                <span className="inline-flex px-2 py-0.5 rounded-full bg-accent-soft text-accent text-xs font-medium">{integration.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const integrations = [
  { name: 'Lovable', category: 'AI Builder', description: 'Exports your validated build spec directly into a Lovable project prompt.' },
  { name: 'v0 by Vercel', category: 'AI Builder', description: 'Generates component prompts pre-loaded with your validated use cases.' },
  { name: 'Bolt', category: 'AI Builder', description: 'Passes your spec as structured context so the first prompt isn\'t blank.' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-3">Handoffs</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
              The gap no other tool fills
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Lovable builds. v0 designs. Bolt scaffolds. But none of them know what your customers said, what you validated, or what you explicitly decided to not build.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Launchpath fills the handoff. When you\'re ready to build, we compile your customer conversations, confirmed pain points, and identified workflow gaps into a structured prompt that your AI builder actually uses.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-brand-lg p-5">
              <p className="text-xs text-gray-400 font-mono mb-3"># Generated build spec excerpt</p>
              <p className="text-xs text-gray-300 font-mono leading-relaxed">
                Core pain: <span className="text-accent">"I lose 2 hrs/week reconciling invoices manually"</span><br />
                Confirmed by: 4 of 5 conversations<br />
                Current workaround: Excel + email screenshots<br />
                Must-have v1: Automatic line-item extraction<br />
                Explicitly out of scope: Multi-currency (1/5 mentions)<br />
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {integrations.map((intg, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-brand-lg p-5 hover:border-accent/40 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-heading font-semibold text-white">{intg.name}</p>
                    <span className="text-xs text-gray-400 uppercase tracking-widest">{intg.category}</span>
                  </div>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Connected</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{intg.description}</p>
              </div>
            ))}
            <div className="bg-white/5 border border-white/10 border-dashed rounded-brand-lg p-5 text-center">
              <p className="text-sm text-gray-500">More integrations coming based on what founders actually use</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

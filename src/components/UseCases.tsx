const cases = [
  {
    persona: 'The idea person',
    tagline: 'Has an idea, hasn\'t talked to a single customer',
    before: 'Googles competitors, reads a few blog posts, gets ChatGPT to tell them it\'s a great idea, starts building.',
    after: 'Logs 3 customer conversations before writing a line of code. Discovers the real pain is adjacent to their original hypothesis. Builds the right thing.',
    result: 'Ships an MVP customers actually asked for.',
  },
  {
    persona: 'The over-researcher founder',
    tagline: 'Collects data, never moves to build',
    before: 'Buys a market research report, makes a spreadsheet, adds five more research tabs, never starts.',
    after: 'The platform locks the research stage and prompts for conversations. Verdict moves. Build spec is generated. First commit happens.',
    result: 'Exits the research loop with a real deliverable.',
  },
  {
    persona: 'The serial pivoter',
    tagline: 'Pivots at the first sign of friction',
    before: 'Pivots when the first customer says "interesting but not for me" — throws out all prior learning.',
    after: 'The platform\'s memory shows which assumptions were tested, which held, and which broke. Pivot is scoped to what\'s actually unproven.',
    result: 'Smarter pivots. Less wasted momentum.',
  },
]

export default function UseCases() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Who this is for</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-4">
            First-time founders, specifically
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
            We\'re not trying to help everyone. We\'re trying to help the solo founder who hasn\'t done this before and doesn\'t have a cofounder to pressure-test their thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-surface rounded-brand-lg border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <span className="inline-block bg-accent-soft text-accent text-xs font-medium px-3 py-1 rounded-full mb-3">{c.persona}</span>
                <p className="font-heading text-sm font-semibold text-ink leading-snug">{c.tagline}</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Before</p>
                  <p className="text-sm text-muted leading-relaxed">{c.before}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-accent mb-1">With Launchpath</p>
                  <p className="text-sm text-ink leading-relaxed">{c.after}</p>
                </div>
                <div className="bg-white border border-accent/20 rounded-brand p-3">
                  <p className="text-xs font-medium text-ink">→ {c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

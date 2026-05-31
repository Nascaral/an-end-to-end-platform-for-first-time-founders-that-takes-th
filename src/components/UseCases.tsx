const cases = [
  {
    persona: 'The idea-stage solo founder',
    scenario: 'You have a note-app idea you think is different. You submit it, get a PIVOT verdict with three named competitors and their review data. Now you know what gap is actually open — before writing a line of code.',
    stage: 'Validation',
  },
  {
    persona: 'The builder who skips the interviews',
    scenario: "You know you should talk to customers. You never do. Here, the build button is gated until you log real conversations — and logging them takes 3 minutes. You do them because the UX makes skipping feel worse than doing.",
    stage: 'Customer Discovery',
  },
  {
    persona: 'The validated founder ready to build',
    scenario: "You've done five interviews, the verdict moved to BUILD, and now you need to brief Lovable. Instead of copy-pasting your notes, one click generates a structured spec in the language your AI builder understands.",
    stage: 'Build Handoff',
  },
]

export default function UseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-700 tracking-tight text-ink mb-4">
            Built for the
            <span className="gradient-text"> moments that matter.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Three situations where five fragmented tools fail you — and one platform doesn't.
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <div
              key={c.persona}
              className="flex flex-col md:flex-row gap-6 items-start p-8 rounded-[16px] border border-[#14130F]/8 bg-surface hover:border-accent/20 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full gradient-cta text-on-accent text-xs font-semibold">{c.stage}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-600 text-ink mb-2">{c.persona}</h3>
                <p className="text-muted leading-relaxed">{c.scenario}</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center text-accent font-bold text-sm">
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

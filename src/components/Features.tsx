const features = [
  {
    icon: '🔍',
    title: 'Sourced verdicts, not opinions',
    body: 'Every BUILD / KILL / PIVOT decision cites market data, competitor signals, and research. We show our work so you can argue with us — and we want you to.',
  },
  {
    icon: '📋',
    title: 'The Mom Test, built in',
    body: "Customer conversation logging structured around real interview discipline. We capture what customers said, what they do today, and what they'd actually pay for — not what they say they want.",
  },
  {
    icon: '🧠',
    title: 'Shared memory across all stages',
    body: "Every insight from validation travels with you. Your build spec knows what customers said. Your pitch coach knows what you validated. Nothing resets between tabs.",
  },
  {
    icon: '⚡',
    title: 'One-click build handoff',
    body: 'Validated findings compile into a structured spec — customer language, confirmed pain, suggested stack — that ships directly to Lovable, v0, or Bolt. The context survives the handoff.',
  },
  {
    icon: '📈',
    title: 'Verdict that moves with evidence',
    body: "We won't call your idea validated until you've logged real conversations. As you do the work, the verdict updates in real time. It's a score, not a stamp.",
  },
  {
    icon: '🗺️',
    title: 'Context-aware GTM & pitch coaching',
    body: "When you're ready to launch or raise, your advisor already knows your customer segments, validated pain, and positioning — because it was there for all of it.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-700 tracking-tight text-ink mb-4">
            Built to be honest,
            <br />
            <span className="gradient-text">not to feel nice.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every feature exists to help you build the right thing — even if that means telling you to stop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-[16px] border border-[#14130F]/8 p-6 hover:border-accent/30 hover:shadow-md hover:shadow-accent/8 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-heading text-lg font-600 text-ink mb-2 tracking-tight">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

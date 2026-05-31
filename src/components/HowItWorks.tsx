const stages = [
  {
    number: '01',
    label: 'Validate',
    title: 'Brutally honest BUILD / KILL / PIVOT verdict',
    description:
      'No cheerleading. Launchpath sources market signals, stress-tests your assumptions, and refuses to mark your idea validated until you log real customer conversations. Not "does a market exist" — does your specific solution fit a real workflow.',
    callout: 'Verdict stays UNVALIDATED until conversations are logged.',
    color: 'bg-accent-soft',
    textColor: 'text-accent',
  },
  {
    number: '02',
    label: 'Converse',
    title: 'Customer conversations that visibly move the verdict',
    description:
      'Log your actual conversations with structured Mom Test prompts built in. Every conversation you log shifts your validation score in real time. The platform tracks what customers said, what they confirmed, and what remains unproven.',
    callout: 'The verdict loop closes only when real evidence lands.',
    color: 'bg-orange-50',
    textColor: 'text-orange-600',
  },
  {
    number: '03',
    label: 'Build',
    title: 'Your MVP spec built from what validation actually found',
    description:
      'When you hit BUILD, Launchpath compiles your validated customer language, confirmed pain points, and identified workflow gaps into a structured build spec — and hands it directly to your AI builder. The builder knows what you learned, not just what you hoped.',
    callout: 'No context lost at the handoff. Your spec is the memory.',
    color: 'bg-stone-50',
    textColor: 'text-stone-600',
  },
  {
    number: '04',
    label: 'Grow',
    title: 'GTM, pitch, and fundraising guidance that knows your whole story',
    description:
      'Post-launch guidance — positioning, cold outreach, pitch decks, investor messaging — informed by every conversation you logged, every pivot you made, every build decision. Not generic startup advice. Your startup\'s advice.',
    callout: 'Context-aware from day one to series seed.',
    color: 'bg-accent-soft',
    textColor: 'text-accent',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">The journey</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-4">
            Four stages. One memory.
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Each stage feeds the next. Nothing is forgotten between steps — that&apos;s the product.
          </p>
        </div>

        <div className="space-y-4">
          {stages.map((stage, i) => (
            <div key={i} className="grid md:grid-cols-12 gap-6 items-start p-6 md:p-8 bg-surface rounded-brand-lg border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-3">
                <span className="font-heading text-3xl font-semibold text-gray-200">{stage.number}</span>
              </div>
              <div className="md:col-span-8">
                <span className={`inline-block text-xs font-medium uppercase tracking-widest px-2 py-1 rounded-full mb-3 ${stage.color} ${stage.textColor}`}>{stage.label}</span>
                <h3 className="font-heading text-xl font-semibold text-ink mb-3 tracking-tight">{stage.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{stage.description}</p>
              </div>
              <div className="md:col-span-3">
                <div className="bg-white rounded-brand border-l-2 border-accent p-4">
                  <p className="text-xs text-ink font-medium leading-relaxed">{stage.callout}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

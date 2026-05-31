export default function SocialProof() {
  const stats = [
    { value: 'Stage 1', label: 'Brutally honest validation — no cheerleading' },
    { value: 'Stage 2', label: 'Real conversations move the verdict' },
    { value: 'Stage 3', label: 'Build informed by what validation found' },
    { value: 'Stage 4', label: 'Context-aware GTM, pitch & raise guidance' },
  ]

  return (
    <section className="py-12 border-y border-[#14130F]/8 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-muted uppercase tracking-widest mb-8">The full founder journey — one continuous memory</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="font-heading text-2xl font-700 gradient-text mb-1">{s.value}</div>
              <div className="text-xs text-muted leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

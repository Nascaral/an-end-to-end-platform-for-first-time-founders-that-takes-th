export default function CtaBand() {
  return (
    <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #C64A2A 0%, #E8763A 50%, #F6A05A 100%)' }}>
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
          Stop building the wrong thing.
        </h2>
        <p className="font-body text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join early access and be part of building the tool that forces you to get this right — and remembers everything you learned along the way.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-brand bg-white text-ink font-heading font-semibold text-base tracking-tight hover:bg-white/90 active:scale-95 transition-all shadow-lg"
          >
            Start your free trial
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="#14130F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-brand border border-white/40 text-white font-heading font-semibold text-base tracking-tight hover:bg-white/10 active:scale-95 transition-all"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}

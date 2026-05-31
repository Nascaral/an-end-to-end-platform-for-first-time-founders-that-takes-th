export default function CTA() {
  return (
    <section className="py-24 bg-gradient-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-2xl"></div>
      </div>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-white/70 font-medium mb-4">Get started today</p>
        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
          Stop assembling five tools.<br />Start building the right thing.
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          One platform. One memory. Honest validation before a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white text-accent font-medium px-8 py-3.5 rounded-brand hover:bg-gray-50 transition-colors text-sm"
          >
            Start for free
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-3.5 rounded-brand hover:border-white/60 transition-colors text-sm"
          >
            See how it works
          </a>
        </div>
        <p className="mt-6 text-white/60 text-xs">No credit card required on the free plan</p>
      </div>
    </section>
  )
}

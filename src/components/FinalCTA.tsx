export default function FinalCTA() {
  return (
    <section className="py-24 gradient-cta">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl lg:text-5xl font-700 tracking-tight text-on-accent mb-4">
          Your idea deserves
          an honest verdict.
        </h2>
        <p className="text-on-accent/80 text-lg mb-3 leading-relaxed">
          Not a cheerleader. Not five tools that forget each other. One place that carries everything you learn — from the first sentence of your idea to the day you launch.
        </p>
        <p className="text-on-accent/60 text-sm mb-10">
          We'll tell you to PIVOT if the evidence says PIVOT. We'll tell you to KILL if the evidence says KILL. And when it says BUILD — you'll have the proof to back it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 rounded-[8px] font-semibold text-[15px] bg-on-accent text-accent hover:bg-accent-soft transition-colors shadow-lg"
          >
            Start free — no card needed
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-[8px] font-semibold text-[15px] border border-on-accent/30 text-on-accent hover:bg-on-accent/10 transition-colors"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}

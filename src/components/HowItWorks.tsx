const steps = [
  {
    num: '01',
    title: 'Submit your raw idea',
    body: 'Describe what you want to build in plain English. We run it against market signals, competitor maps, and known failure patterns — and give you a BUILD / KILL / PIVOT verdict with sources. No cheerleading.',
    tag: 'Validation',
  },
  {
    num: '02',
    title: 'Log real customer conversations',
    body: "The verdict is locked until you prove workflow fit. Every conversation you log visibly moves the score. We track what customers actually said — their words, their workarounds, their pain — not just whether you talked to people.",
    tag: 'Customer Discovery',
  },
  {
    num: '03',
    title: 'Generate your build spec',
    body: "Once fit is confirmed, everything you learned — customer language, confirmed pain points, identified workflow gaps — gets compiled into a structured build spec. Ship it to Lovable, v0, or Bolt with one click.",
    tag: 'Build Handoff',
  },
  {
    num: '04',
    title: 'Get guidance that knows your history',
    body: "GTM strategy, investor pitch coaching, and pricing guidance that actually references what your customers said in Stage 2. Not generic advice — advice grounded in your specific validated context.",
    tag: 'Ongoing Guidance',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-700 tracking-tight text-ink mb-4">
            One platform. Four stages.
            <br />
            <span className="gradient-text">Zero context lost.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Every stage feeds the next. Nothing gets forgotten between steps.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="hidden lg:block absolute left-[3.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-accent via-[#F4A261] to-transparent"></div>

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="w-[6.5rem] h-[6.5rem] rounded-[16px] gradient-cta flex items-center justify-center shadow-md shadow-accent/20">
                    <span className="font-heading text-2xl font-700 text-on-accent">{step.num}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2 lg:pt-4">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-2">{step.tag}</div>
                  <h3 className="font-heading text-2xl font-600 tracking-tight text-ink mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed max-w-2xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

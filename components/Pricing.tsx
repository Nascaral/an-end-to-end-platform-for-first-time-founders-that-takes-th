export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$19',
      period: '/mo',
      desc: 'For founders just starting out.',
      features: [
        'Honest idea validation (1 active idea)',
        'Up to 10 customer conversation logs',
        'Basic build spec generation',
        'Access to GTM templates',
      ],
      cta: 'Start free trial',
      featured: false,
    },
    {
      name: 'Builder',
      price: '$29',
      period: '/mo',
      desc: 'For founders ready to build.',
      features: [
        'Everything in Starter',
        'Unlimited conversation logs',
        'Full build spec + builder prompt',
        'AI builder integration (Lovable, v0, Bolt)',
        'Context-aware GTM & pitch guidance',
        'Priority support',
      ],
      cta: 'Start free trial',
      featured: true,
    },
    {
      name: 'Team',
      price: '$79',
      period: '/mo',
      desc: 'For small founding teams.',
      features: [
        'Everything in Builder',
        'Up to 3 team members',
        'Multiple active ideas',
        'Shared memory across team',
        'Investor pitch deck guidance',
      ],
      cta: 'Contact us',
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="font-heading text-xs font-semibold text-accent tracking-widest uppercase mb-3">Pricing</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Simple pricing, no tool sprawl.
          </h2>
          <p className="font-body text-muted text-base leading-relaxed">
            Replace five subscriptions with one. 14-day free trial, cancel any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`rounded-brand-xl border p-7 flex flex-col gap-5 ${
                t.featured
                  ? 'border-accent bg-ink text-white shadow-xl shadow-ink/20 scale-[1.02]'
                  : 'border-ink/8 bg-surface'
              }`}
            >
              {t.featured && (
                <div className="inline-flex w-fit">
                  <span className="text-xs px-2.5 py-1 rounded-full font-heading font-semibold" style={{ background: 'linear-gradient(135deg, #C64A2A, #F6A05A)', color: 'white' }}>Most popular</span>
                </div>
              )}
              <div>
                <p className={`font-heading font-semibold text-sm mb-1 ${t.featured ? 'text-white/70' : 'text-muted'}`}>{t.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className={`font-heading font-semibold text-4xl tracking-tight ${t.featured ? 'text-white' : 'text-ink'}`}>{t.price}</span>
                  <span className={`font-body text-sm ${t.featured ? 'text-white/60' : 'text-muted'}`}>{t.period}</span>
                </div>
                <p className={`font-body text-sm mt-1 ${t.featured ? 'text-white/70' : 'text-muted'}`}>{t.desc}</p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5"><path d="M3 8l3.5 3.5L13 5" stroke={t.featured ? '#F6A05A' : '#C64A2A'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className={`font-body text-sm leading-relaxed ${t.featured ? 'text-white/80' : 'text-ink/80'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`text-center rounded-brand py-3 text-sm font-heading font-semibold transition-all ${
                  t.featured
                    ? 'btn-gradient w-full'
                    : 'btn-secondary w-full'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted font-body mt-8">
          All plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  )
}

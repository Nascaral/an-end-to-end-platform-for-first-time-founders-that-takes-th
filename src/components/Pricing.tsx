const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Validate one idea. See what honest feedback feels like.',
    features: [
      '1 idea workspace',
      'BUILD / KILL / PIVOT verdict',
      'Up to 3 customer conversation logs',
      'Basic validation report',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Founder',
    price: '$19',
    period: '/mo',
    description: 'The full journey — validation through build handoff.',
    features: [
      'Unlimited idea workspaces',
      'Unlimited conversation logs',
      'Full sourced validation reports',
      'One-click build spec generator',
      'Lovable, v0 & Bolt handoff',
      'Context-aware GTM guidance',
    ],
    cta: 'Start Founder plan',
    featured: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For founders moving fast with multiple ideas or a co-founder.',
    features: [
      'Everything in Founder',
      '2 seats included',
      'Priority AI processing',
      'Pitch deck coaching (beta)',
      'Investor narrative generator',
      'Early access to new stages',
    ],
    cta: 'Start Pro plan',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-700 tracking-tight text-ink mb-4">
            Simple pricing.
            <span className="gradient-text"> Cancel anytime.</span>
          </h2>
          <p className="text-muted text-lg max-w-md mx-auto">
            Less than one month of "good enough" tool subscriptions that don't talk to each other.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[16px] p-7 border ${
                tier.featured
                  ? 'border-accent gradient-cta text-on-accent shadow-xl shadow-accent/25 relative'
                  : 'border-[#14130F]/10 bg-surface'
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex px-3 py-1 rounded-full bg-ink text-white text-xs font-semibold">Most popular</span>
                </div>
              )}
              <div className="mb-5">
                <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${tier.featured ? 'text-on-accent/70' : 'text-muted'}`}>{tier.name}</div>
                <div className="flex items-end gap-1">
                  <span className={`font-heading text-4xl font-700 ${tier.featured ? 'text-on-accent' : 'text-ink'}`}>{tier.price}</span>
                  {tier.period && <span className={`text-sm pb-1 ${tier.featured ? 'text-on-accent/70' : 'text-muted'}`}>{tier.period}</span>}
                </div>
                <p className={`text-sm mt-2 ${tier.featured ? 'text-on-accent/80' : 'text-muted'}`}>{tier.description}</p>
              </div>

              <ul className="space-y-2.5 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.featured ? 'text-on-accent/90' : 'text-ink/80'}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-on-accent' : 'text-accent'}`} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full py-3 rounded-[8px] text-sm font-semibold text-center transition-all ${
                  tier.featured
                    ? 'bg-on-accent text-accent hover:bg-accent-soft'
                    : 'bg-accent text-on-accent hover:bg-accent/90'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">No annual lock-in. Cancel any month. Prices in USD.</p>
      </div>
    </section>
  )
}

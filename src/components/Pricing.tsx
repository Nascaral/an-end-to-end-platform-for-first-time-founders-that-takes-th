const tiers = [
  {
    name: 'Validate',
    price: 'Free',
    sub: 'No credit card',
    description: 'Test the honest validation loop. See what a real verdict looks like.',
    features: [
      '1 active idea',
      'BUILD/KILL/PIVOT verdict engine',
      'Up to 3 conversation logs',
      'Assumption tracking',
      'Verdict dashboard',
    ],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Build',
    price: '$19',
    sub: 'per month',
    description: 'Full validation-to-build handoff for founders who are serious about shipping.',
    features: [
      'Unlimited ideas & conversations',
      'Full verdict engine with sourced reasoning',
      'Validation-to-build spec export',
      'AI builder prompt generation (Lovable, v0, Bolt)',
      'Persistent founder memory',
      'GTM & pitch guidance',
      'Priority support',
    ],
    cta: 'Get started',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$29',
    sub: 'per month',
    description: 'For founders actively fundraising or launching to market.',
    features: [
      'Everything in Build',
      'Investor pitch context generator',
      'Cold outreach templates from validation data',
      'Positioning doc generation',
      'Fundraising narrative builder',
      'Early access to new features',
    ],
    cta: 'Get started',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-muted font-medium mb-3">Pricing</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-ink tracking-tight mb-4">
            Less than one SaaS tool in your current stack
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto leading-relaxed">
            The five tools you\'re currently stitching together cost more — and none of them talk to each other.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-brand-lg border overflow-hidden flex flex-col ${
                tier.featured
                  ? 'bg-ink border-ink shadow-xl scale-105 relative'
                  : 'bg-white border-gray-200'
              }`}
            >
              {tier.featured && (
                <div className="bg-accent text-on-accent text-xs font-medium text-center py-2 uppercase tracking-widest">
                  Most popular
                </div>
              )}
              <div className="p-6 flex-1">
                <p className={`font-heading font-semibold mb-1 ${ tier.featured ? 'text-white' : 'text-ink'}`}>{tier.name}</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className={`font-heading text-4xl font-semibold ${ tier.featured ? 'text-white' : 'text-ink'}`}>{tier.price}</span>
                  {tier.sub !== 'No credit card' && <span className={`text-sm ${ tier.featured ? 'text-gray-400' : 'text-muted'}`}>/{tier.sub}</span>}
                </div>
                <p className={`text-xs mb-1 ${ tier.featured ? 'text-gray-400' : 'text-muted'}`}>{tier.price === 'Free' ? tier.sub : ''}</p>
                <p className={`text-sm leading-relaxed mb-6 ${ tier.featured ? 'text-gray-300' : 'text-muted'}`}>{tier.description}</p>
                <ul className="space-y-2.5 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${ tier.featured ? 'text-accent' : 'text-accent'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span className={`text-sm ${ tier.featured ? 'text-gray-300' : 'text-muted'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="#"
                  className={`block w-full text-center py-3 rounded-brand text-sm font-medium transition-colors ${
                    tier.featured
                      ? 'bg-accent text-on-accent hover:bg-opacity-90'
                      : 'bg-accent-soft text-accent hover:bg-accent hover:text-on-accent'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          All plans include the honest verdict engine. No hidden upsells for the core validation loop.
        </p>
      </div>
    </section>
  )
}

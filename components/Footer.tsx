import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Founder Guide" width={28} height={28} className="rounded-brand opacity-90" />
              <span className="font-heading font-semibold text-white text-base tracking-tight">Founder Guide</span>
            </a>
            <p className="font-body text-sm text-white/50 leading-relaxed">
              From raw idea to launched MVP — with one memory.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-heading font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">Product</p>
            <ul className="space-y-2.5">
              {['How it works', 'Features', 'Pricing', 'Integrations'].map((l) => (
                <li key={l}><a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-heading font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">Resources</p>
            <ul className="space-y-2.5">
              {['The Mom Test primer', 'Validation guide', 'Build spec template', 'Blog'].map((l) => (
                <li key={l}><a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-heading font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">Company</p>
            <ul className="space-y-2.5">
              {['About', 'Privacy', 'Terms', 'Contact'].map((l) => (
                <li key={l}><a href="#" className="font-body text-sm text-white/50 hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">&copy; {new Date().getFullYear()} Founder Guide. All rights reserved.</p>
          <p className="font-body text-xs text-white/30">Built honestly — no cheerleading.</p>
        </div>
      </div>
    </footer>
  )
}

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-on-accent/70 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Founder AI Guide" width={28} height={28} className="rounded opacity-90" />
              <span className="font-heading font-600 text-on-accent text-[16px]">FounderAI</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              The one place that carries continuous memory from raw idea to launched MVP. Built for first-time founders who want honesty, not cheerleading.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-600 text-on-accent text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="hover:text-on-accent transition-colors">How it works</a></li>
              <li><a href="#features" className="hover:text-on-accent transition-colors">Features</a></li>
              <li><a href="#integrations" className="hover:text-on-accent transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-on-accent transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-600 text-on-accent text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-on-accent transition-colors">About</a></li>
              <li><a href="#" className="hover:text-on-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-on-accent transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-on-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-600 text-on-accent text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-on-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-on-accent transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-on-accent/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-on-accent/40">
          <p>© {new Date().getFullYear()} FounderAI Guide. All rights reserved.</p>
          <p>Honest by design. No cheerleading.</p>
        </div>
      </div>
    </footer>
  )
}

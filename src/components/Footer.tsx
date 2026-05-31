import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Launchpath" width={28} height={28} className="rounded-brand" />
              <span className="font-heading font-semibold text-white">Launchpath</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The end-to-end platform for first-time founders. Honest validation, purposeful building, and continuous memory from idea to launch.
            </p>
            <p className="text-xs text-gray-600 mt-4">
              Note: This platform is in early access. Some features are under active development.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Product</p>
            <ul className="space-y-3">
              {['How it works', 'Features', 'Integrations', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Company</p>
            <ul className="space-y-3">
              {['About', 'Blog', 'Privacy', 'Terms'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Launchpath. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for founders who want truth, not cheerleading.
          </p>
        </div>
      </div>
    </footer>
  )
}

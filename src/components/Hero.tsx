import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden gradient-hero">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{background: 'radial-gradient(circle, #C64A2A 0%, #F4A261 60%, transparent 100%)'}} />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl" style={{background: 'radial-gradient(circle, #E8703A 0%, transparent 100%)'}} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: copy */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold mb-6 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
              Early access — $19/mo
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl font-700 leading-[1.08] tracking-tight text-ink mb-6">
              Stop stitching tools.
              <br />
              <span className="gradient-text">One memory,</span>
              <br />
              idea to MVP.
            </h1>

            <p className="text-[1.15rem] text-muted leading-relaxed mb-4 max-w-xl">
              ChatGPT cheerleads. Preuve reports. Lovable builds. None of them talk to each other — and none of them remember what the others learned.
            </p>
            <p className="text-[1.15rem] text-ink/80 leading-relaxed mb-8 max-w-xl">
              FounderAI carries one continuous memory from your raw idea through brutal customer validation to a build spec your AI builder can actually use.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="px-6 py-3.5 rounded-[8px] font-semibold text-[15px] gradient-cta text-on-accent hover:opacity-90 transition-opacity text-center shadow-md shadow-accent/20"
              >
                Start for free — no card needed
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 rounded-[8px] font-semibold text-[15px] bg-surface border border-[#14130F]/12 text-ink hover:bg-accent-soft transition-colors text-center"
              >
                See how it works →
              </a>
            </div>

            <p className="mt-4 text-xs text-muted">
              Built for first-time founders. Honest by design — we won't call your idea validated until you've talked to real customers.
            </p>
          </div>

          {/* Right: mock UI */}
          <div className="flex-1 w-full max-w-lg">
            <div className="rounded-[16px] bg-white border border-[#14130F]/10 shadow-xl shadow-[#14130F]/8 overflow-hidden">
              {/* Title bar */}
              <div className="px-4 py-3 border-b border-[#14130F]/8 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                </div>
                <span className="text-xs text-muted font-mono ml-2">FounderAI — Validation Workspace</span>
              </div>

              {/* Mock content */}
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full gradient-cta flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div className="flex-1 bg-surface rounded-[8px] p-3">
                    <p className="text-xs text-ink leading-relaxed"><span className="font-semibold text-accent">Verdict: PIVOT</span> — You have a market, not a workflow gap. Three of your five interviewees already combine Notion + Loom for async handoffs. Your proposed solution solves a pain they've domesticated.</p>
                  </div>
                </div>

                <div className="ml-10 bg-accent-soft rounded-[8px] p-3">
                  <p className="text-xs font-semibold text-ink mb-1">What moves this verdict:</p>
                  <ul className="text-xs text-muted space-y-1">
                    <li>✗ 0 / 5 conversations logged</li>
                    <li>✗ No confirmed workflow pain</li>
                    <li>✓ Market signal present</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <div className="flex-1 h-1.5 rounded-full bg-[#14130F]/8 overflow-hidden">
                    <div className="h-full w-0 gradient-cta rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted">0 conversations</span>
                </div>

                <div className="pt-1">
                  <button className="w-full py-2.5 rounded-[8px] text-xs font-semibold gradient-cta text-on-accent">+ Log a customer conversation</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

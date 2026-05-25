'use client'

import { useState, useRef } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || loading) return

    const userMessage: Message = { role: 'user', content: trimmed }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error ?? `Server error ${res.status}`)
      }

      const data: { reply: string } = await res.json()
      setMessages([...nextMessages, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
    } finally {
      setLoading(false)
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50)
    }
  }

  return (
    <main className="flex flex-col h-screen max-w-2xl mx-auto px-4">
      {/* Header */}
      <header className="py-6 border-b border-zinc-800">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Founder AI Guide</h1>
            <p className="text-zinc-400 text-sm mt-1">
              Brutally honest startup validation — no cheerleading.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-sky-500/50 hover:border-sky-400 hover:bg-sky-500/10 text-sky-400 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Log in
          </a>
        </div>
        <div className="mt-3 rounded-md bg-amber-950/60 border border-amber-700/50 px-3 py-2 text-xs text-amber-300">
          <strong>Honest note:</strong> This product&apos;s core assumptions around multi-tool fragmentation
          being a purchase-motivating pain point, and founders completing customer conversations inside
          a new tool, are currently <strong>unproven</strong>. Use this as an exploration, not a finished answer.
        </div>
      </header>

      {/* Messages */}
      <section className="flex-1 overflow-y-auto py-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-zinc-500 text-sm mt-16 space-y-2">
            <p className="text-2xl">💡</p>
            <p>Describe your startup idea and get honest validation feedback.</p>
            <p className="text-xs text-zinc-600">
              Try: &quot;I want to build a SaaS that helps freelancers track invoices.&quot;
            </p>
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm whitespace-pre-wrap leading-relaxed ${
                m.role === 'user'
                  ? 'bg-sky-500 text-white'
                  : 'bg-zinc-800 text-zinc-100'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-400 animate-pulse">
              Thinking…
            </div>
          </div>
        )}
        {error && (
          <div className="rounded-md bg-red-950/60 border border-red-700/50 px-3 py-2 text-xs text-red-300">
            {error}
          </div>
        )}
        <div ref={bottomRef} />
      </section>

      {/* Input */}
      <form onSubmit={sendMessage} className="py-4 border-t border-zinc-800 flex gap-2">
        <input
          className="flex-1 rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="Describe your idea…"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded-lg bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 text-sm font-medium transition-colors"
        >
          Send
        </button>
      </form>
    </main>
  )
}

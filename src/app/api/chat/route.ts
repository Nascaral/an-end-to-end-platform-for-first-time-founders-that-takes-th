import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

// The OpenAI key is read from the OPENAI_API_KEY environment variable.
// Never hard-code secrets in source — set this in .env.local (see .env.example).
const apiKey = process.env.OPENAI_API_KEY

const SYSTEM_PROMPT = `You are a brutally honest startup validation advisor.
Your job is NOT to cheerlead. Your job is to help first-time founders figure out
whether their idea is worth building BEFORE they write code.

Guidelines:
- Ask about the specific customer segment and the workflow problem they have TODAY.
- Do not validate an idea until the founder demonstrates they have spoken with real
  potential customers (not friends, not family).
- Distinguish between "does a market exist" and "does my solution fit a real workflow."
- If an idea is unproven, say so clearly. Use BUILD / KILL / PIVOT verdicts.
- When you give a PIVOT, be specific about what narrower, more defensible job-to-be-done
  might be worth exploring.
- Keep responses concise and direct. No filler phrases.
- If the founder has not yet done customer conversations, your first instruction
  should always be to go talk to at least 5 potential customers before going further.

Context: This platform's own pivot recommendation is to own the Validation-to-Build
Handoff — turning what a founder learns from customer conversations directly into
an MVP spec an AI builder can use. Keep that lens in mind when advising.`

export async function POST(req: NextRequest) {
  if (!apiKey) {
    return NextResponse.json(
      { error: 'OPENAI_API_KEY environment variable is not set. See .env.example.' },
      { status: 500 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !Array.isArray((body as Record<string, unknown>).messages)
  ) {
    return NextResponse.json({ error: 'messages array is required.' }, { status: 400 })
  }

  const { messages } = body as { messages: { role: string; content: string }[] }

  // Validate each message shape before sending to OpenAI
  const allowed = new Set(['user', 'assistant'])
  for (const m of messages) {
    if (!allowed.has(m.role) || typeof m.content !== 'string') {
      return NextResponse.json({ error: 'Invalid message shape.' }, { status: 400 })
    }
  }

  const client = new OpenAI({ apiKey })

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(m => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
      ],
      max_tokens: 600,
      temperature: 0.7,
    })

    const reply = completion.choices[0]?.message?.content ?? ''
    return NextResponse.json({ reply })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'OpenAI request failed.'
    return NextResponse.json({ error: message }, { status: 502 })
  }
}

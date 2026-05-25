# An end-to-end platform for first-time founders that takes them from raw idea ...

Built with **Founder AI Guide** for the Next.js web app stack.

## Run locally

```bash
git clone https://github.com/Nascaral/an-end-to-end-platform-for-first-time-founders-that-takes-th
cd an-end-to-end-platform-for-first-time-founders-that-takes-th
npm install
npm run dev
# open http://localhost:3000
```

Entry point: `src/app/page.tsx`

## Security & quality

This build passed **96** hard security checks.

**10** soft findings noted in the build log — review before going to production.

## Notes

The user asked to read the OpenAI key from a hardcoded string, which violates Hard Rule #1 (no hard-coded secrets in source). The key is instead read from `process.env.OPENAI_API_KEY` on the server side inside the `/api/chat` route handler — it is never sent to the browser. A `.env.example` with a placeholder value is included, and the README explains exactly how to set the key locally. The app itself is a minimal chat UI wired to a brutally honest validation system prompt that reflects the pivot direction surfaced during validation (Validation-to-Build Handoff), and includes an honest onboarding banner that surfaces the unproven assumptions rather than papering over them.

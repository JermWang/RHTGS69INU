# RobinHoodTrumpGameStop69Inu

The deliberately chaotic, early-internet home of **RobinHoodTrumpGameStop69Inu** (`$RHTG69I`).

Official website: [RHTG69I.com](https://rhtg69i.com/)

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Live believer counter

The site records anonymous all-time believers and uses Supabase Realtime Presence for the currently-believing count.

1. Create a Supabase project.
2. Run `supabase/migrations/20260715000000_believer_counter.sql` in the Supabase SQL Editor.
3. Copy `.env.example` to `.env.local` and add the project's URL and publishable anon key.
4. Add the same `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` variables to the production host.

The public browser can only call the protected registration function. Raw believer IDs and visit history are not exposed through the anonymous API.

This is a parody meme project and is not affiliated with Robinhood Markets, Donald Trump, or GameStop.

# Deploy — Book of Ramon / Crydo5 Casino

## Production (Vercel)

1. Project linked to `crydo5-apps/bookoframon`, branch **main**.
2. Environment variables on Vercel:
   - `DATABASE_URL` — Neon Postgres connection string (required for shared players/wallet)
   - Better Auth secrets as already configured by the App Builder platform
3. After each push to `main`, Vercel rebuilds automatically.
4. If the live site looks old: **Deployments → Redeploy** the latest commit (clear cache if needed).

## Local

```bash
npm install
npm run dev
```

App listens on `0.0.0.0:8080`.

## Features (current)

- Lobby with three tables + live wallet balance
- Book of Ra (classic) + Book of Ra(mon) (Gramm branding)
- European Roulette
- Auth, player approval, TWINT/cash deposits, admin panel
- New players start with 50 credits (admin: 1000)

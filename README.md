# scholametrix.tech — website

Marketing website for Scholametrix (AI evaluation for written exams). Next.js 16 (App Router,
static export) + Tailwind CSS 4 + Motion. Every page is pre-rendered to plain HTML in `out/`, so it
is fast, SEO-friendly and served by nginx with no Node process.

The forms (free pilot, demo, partners) post from the browser to the AI service
(`POST https://api.scholametrix.tech/v1/leads`, in the ai-marking-service repo). Requests appear in
its operator console under **Leads**.

## Run

```bash
pnpm install
pnpm dev            # http://localhost:3000 — forms go to http://localhost:4200 (.env.development)
pnpm build          # static site in out/ — forms go to https://api.scholametrix.tech (.env.production)
pnpm images         # rebuild public/images from Resources/ (logo, founders, screenshots)
```

## Where things are

| Path | What |
|---|---|
| `src/content/site.ts` | Contact email, LinkedIn links, navigation, founders, home FAQ |
| `src/content/demo-marking.json` | Real AI results shown in the marking demos (captured from the live service) |
| `src/app/*/page.tsx` | One folder per page, each with its own SEO title and description |
| `src/lib/seo.ts` | Metadata helper and JSON-LD (Organization, WebSite, SoftwareApplication, FAQ, Breadcrumbs) |
| `src/components/` | Header, footer, marking demos, lead form, shared UI |
| `Resources/` | Original logo, founder photos and e-Exam screenshots |
| `docs/` | Content and design plan |
| `deploy/nginx.conf` | nginx site for scholametrix.tech (clean URLs, caching, www → apex) |

## Deploy (same VPS as api.scholametrix.tech)

1. Point `scholametrix.tech` and `www` at the server (Cloudflare: proxied, SSL mode *Full (strict)*).
2. On the server: `certbot certonly --nginx -d scholametrix.tech -d www.scholametrix.tech`.
3. Copy `deploy/nginx.conf` to `/etc/nginx/sites-available/scholametrix.tech`, enable it,
   `nginx -t && systemctl reload nginx`.
4. Build locally and upload: `pnpm build && rsync -az --delete out/ root@<server>:/var/www/scholametrix/out/`.

The AI service must allow the website's origin: `LEADS_ALLOWED_ORIGINS` (default already includes
`https://scholametrix.tech` and `https://www.scholametrix.tech`).

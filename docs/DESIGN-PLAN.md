# Scholametrix — Website design & build plan (v1)

Companion to [CONTENT.md](CONTENT.md). This is the blueprint for the Next.js build.

## 1. Goals (in order)

1. **Win demos** from universities, colleges and exam bodies (primary CTA everywhere: Book a demo).
2. **Earn trust** with international buyers, sponsors and investors: clear product, real team,
   security story, no fake claims.
3. **Rank** for AI-marking and online-exam searches (multi-page, statically generated, schema-rich).
4. **Show, don't tell**: the hero demo marks an answer live in front of the visitor.

## 2. Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router), TypeScript, fully static (SSG) | Best SEO + speed; host anywhere |
| Styling | Tailwind CSS v4 with CSS-variable design tokens | Fast, consistent, dark-mode ready |
| Animation | `motion` (Framer Motion) for reveals and the hero demo; CSS for simple loops | Smooth, respects reduced motion |
| Icons | lucide-react | Consistent line icons, no emoji |
| Fonts | `next/font`: **Plus Jakarta Sans** (headings + UI), **Inter** (body), **Instrument Serif Italic** (accent words, like the reference's "*Effortlessly.*") | Modern, international, self-hosted |
| Images | `next/image` (AVIF/WebP), founders' photos optimised and cropped to 4:5 | Core Web Vitals |
| Forms | Server Action → email (Resend or SMTP) + honeypot + rate limit **[CONFIRM provider]** | No third-party form widget |
| SEO | Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD, `opengraph-image.tsx` per page | See §6 |
| Analytics | Plausible or Umami (privacy-friendly, no cookie banner) **[CONFIRM]** | International privacy norms |
| Deploy | Same VPS (nginx + Node or static export) on scholametrix.tech + www → apex redirect | Fixes today's 526 on www too |

## 3. Sitemap

```
/                       Home (long-form landing, 16 sections)
/ai-marking             Product: AI Marking
/e-exam                 Product: e-Exam platform          [CONFIRM]
/developers             API for developers
/security               Security & privacy
/pricing                Pricing
/about                  Mission, story, team (#team)
/partners               Pilots, research, sponsors & investors
/case-studies/university-of-rajshahi                     [CONFIRM]
/contact                Book a demo
/privacy  /terms        Legal
/insights               Blog (phase 2 — SEO articles)
```

Phase 2 SEO articles (each 1,200–1,800 words): "How AI marking works with rubrics",
"AI-assisted marking vs. fully automated grading", "Marking Bangla written answers with AI",
"How to write a rubric that AI and teachers agree on", "Online exams in Bangladeshi universities".

## 4. Visual design system

Inspired by the reference (light, airy blue, floating product cards, italic accent words, bento
grids) but built from the **Scholametrix logo colours**.

### Colour tokens (sampled from the logo)

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#0B1533` | Headings, body text (navy, not black) |
| `--navy` | `#021D61` | Footer, dark sections |
| `--brand-700` | `#0135AA` | Hover/pressed |
| `--brand-600` | `#0164F3` | Primary buttons, links |
| `--brand-500` | `#027EFB` | Accents, icons |
| `--cyan-400` | `#15D9FC` | Gradient end, highlights, glow |
| `--surface` | `#F5F8FF` | Page background (very light blue) |
| `--card` | `#FFFFFF` | Cards, with 1px `#E3EAF8` border + soft blue shadow |
| `--muted` | `#5B6B8C` | Secondary text |
| `--earned / --partial / --missing` | `#16A34A / #F59E0B / #E11D48` | Answer highlights only |

Signature gradient: `linear-gradient(135deg, #0164F3 0%, #027EFB 45%, #15D9FC 100%)` — used on
the accent word, primary CTA glow, the hero backdrop and the logo mark. Dark mode: navy surfaces,
same gradient. All text pairs ≥ 4.5:1 contrast.

### Type scale
H1 56–72px / 1.05 (mobile 40px) · H2 40–48px · H3 22px · body 17–18px / 1.6 · labels 13px
uppercase tracking 0.12em. One italic-serif accent word per H1/H2 at most.

### Shape & depth
Radius 16px cards, 24px sections, 999px pills · soft shadows tinted blue
(`0 20px 50px -20px rgba(1,100,243,.25)`) · subtle grid/dot pattern behind the hero · glass
cards (white 70% + blur) only on top of gradients.

### Layout
Max width 1200px, 12-column grid, 24px gutter (16px on mobile), section spacing 120px desktop /
72px mobile. Every section works at 360px width with no horizontal scroll.

## 5. Page layouts

### Home — section by section
| # | Section | Layout | Visual / animation |
|---|---|---|---|
| 1 | Sticky nav | Logo left, links centre, CTAs right; turns solid with blur after 24px scroll; mobile sheet menu | Fade/slide |
| 2 | **Hero** | Centred headline + CTAs; below it a wide product stage on a blue gradient panel (like the reference) | **Live marking demo** (§5.1) + 2–3 floating cards ("Marks 7.5 / 10", "Teacher approved ✓", "Bangla ✓") gently bobbing |
| 3 | Proof bar | One row, logo/name + label | Fade in |
| 4 | Problem | 3 cards | Stagger reveal; icon draws in |
| 5 | How it works | 4 numbered steps, horizontal on desktop with a connecting line that fills as you scroll; vertical on mobile | Scroll-linked line progress |
| 6 | Feature bento | 8 tiles in an asymmetric grid (2 large with mini-UI, 6 small) | Hover lift; mini-UIs animate on view |
| 7 | Teacher in control | Split: text left, approval-workspace mock right (accept / adjust) | Mock cycles accept → adjust |
| 8 | Two products | 2 big cards side by side | Hover tilt (subtle, 2°) |
| 9 | Who it's for | 4 audience cards with icons | Stagger |
| 10 | Case study teaser | Wide dark navy card, photo/screenshot right | Count-up numbers (only confirmed ones) |
| 11 | Security | 6-item icon grid on light gradient | Stagger |
| 12 | Developer strip | Dark terminal card with tabs (cURL / Node) + 4 points | Typewriter on first view |
| 13 | Pricing teaser | Centred text + button | — |
| 14 | Team teaser | 2 founder cards (photo 4:5, name, role, LinkedIn) | Photo reveal mask |
| 15 | Partner CTA | Gradient band, 2 buttons | Slow moving gradient |
| 16 | FAQ | Accordion (accessible, keyboard) | Height + chevron |
| 17 | Final CTA | Big gradient card | — |
| 18 | Footer | Navy, 4 columns + logo + socials | — |

### 5.1 Hero demo — "watch an answer get marked" (the signature piece)
A product-style card (fake browser chrome, matches the e-Exam UI). Loop of ~9 s:
1. Question + student answer appear (answer types in quickly).
2. Rubric criteria list on the right: each criterion fills its mark one by one (0 → 2 / 2, …).
3. Highlights sweep onto the answer (green earned, amber partial).
4. "Why this mark" line fades in; total counts up to **7.5 / 10**.
5. Teacher cursor clicks **Accept** → "Approved by teacher ✓" toast.
Built with React + motion, real text (indexable), pauses when off-screen, shows the final static
state when `prefers-reduced-motion` is on. Optional Bangla answer variant (toggle EN / বাংলা) to
prove Bangla support.

### Inner pages
Shared pattern: compact hero (H1, sub, CTA, breadcrumb) → 3–6 content sections reusing home
components → FAQ (where useful) → final CTA. `/ai-marking` gets an annotated "anatomy of a marked
answer" diagram; `/e-exam` gets module cards + dashboard screenshot; `/developers` gets code
blocks with copy buttons; `/about` gets the founders grid and a milestone timeline.

## 6. SEO plan

- **Rendering:** every page statically generated; no content hidden behind client-side JS.
- **Metadata per page:** unique title (≤ 60 chars) + description (≤ 155), canonical URL,
  Open Graph + Twitter card, generated OG image with logo + page title.
- **Structured data (JSON-LD):** `Organization` (logo, founders, sameAs socials, contactPoint),
  `WebSite`, `SoftwareApplication` (AI Marking, e-Exam: category EducationalApplication,
  offers), `Person` × 2 (founders), `FAQPage` (home + pricing), `BreadcrumbList` (inner pages).
- **Files:** `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, favicons from the logo (16, 32,
  180, 192, 512 + SVG/maskable).
- **Target keywords:** AI exam marking · AI grading for universities · rubric-based AI marking ·
  automated essay / written answer grading · AI marking for teachers · online examination system
  with AI · Bangla AI grading · AI marking API.
- **On-page:** one H1 per page, logical H2/H3, descriptive alt text, internal links between product,
  security, pricing and contact; fast LCP (hero text is the LCP, not an image).
- **Performance budget:** Lighthouse ≥ 95 on all four scores; JS < 120 KB on the home page; images
  lazy-loaded below the fold; fonts subset and preloaded.
- **International:** `lang="en"`, hreflang ready for a Bangla version (`/bn`) in phase 2; prices
  shown in BDT and USD.
- **Search Console + Bing Webmaster** verification after launch.

## 7. Images & assets

| Asset | Source | Treatment |
|---|---|---|
| Logo | `Resources/logo-scholarmetrix.png` (transparent PNG 1024²) | Trim, export 512/192/180/32 PNG + favicon; pair with "Scholametrix" word-mark in Plus Jakarta Sans 800 |
| CEO photo | `Resources/MD Omar Faruk(CEO).jpeg` | **Rotate 90° clockwise** (stored sideways), crop 4:5 on face/torso, AVIF/WebP |
| Co-founder photo | `Resources/CO-Founder (Khalid Hossen).jpg` | Crop 4:5, light colour grade to match |
| Product visuals | Built in code (hero demo, approval workspace, dashboards) | Crisp at any size, indexable, no stock photos |
| Real screenshots | e-Exam grading workspace, dashboard, AI console | Captured from the running apps with demo data, framed in browser chrome |
| Illustrations | Subtle line patterns / gradient blobs in CSS & SVG | No generic AI-stock imagery |
| OG images | Generated per page | 1200×630 |

## 8. Accessibility & quality checklist
Keyboard-navigable menus and accordion · visible focus rings · 44px touch targets · alt text ·
colour never the only signal (highlight legend has labels) · reduced-motion support · forms with
visible labels, inline errors and success state · tested at 360 / 768 / 1280 / 1440px, light and
dark.

## 9. Build order (next command)
1. Scaffold Next.js + Tailwind, tokens, fonts, layout, nav, footer, SEO helpers.
2. Process images (rotate/crop/optimise, favicons).
3. Home page sections + hero demo.
4. Inner pages, contact form, legal drafts, 404.
5. Sitemap, robots, JSON-LD, OG images.
6. Browser check (desktop, mobile, dark), Lighthouse pass, fix.
7. Deploy plan for scholametrix.tech (nginx site + certificate for apex and www).

## 10. Decisions needed from you before/while building
1. May we name **University of Rajshahi** (and show its logo) as a customer/case study?
2. Is **e-Exam** a Scholametrix product you can sell to other institutions?
3. Khalid Hossen's **title** and both founders' **bios + LinkedIn** links.
4. **Email addresses** (hello@ / sales@ / security@) — do these mailboxes exist?
5. **Prices** to publish, or keep "Contact us"? Is there a free pilot offer?
6. What you offer **sponsors/investors**, and do you have a pitch deck PDF to link?
7. Contact form delivery: email (which address) or stored in a database?
8. Founding **city/year** and any real **numbers** (students, exams, answers marked) you're happy to publish.

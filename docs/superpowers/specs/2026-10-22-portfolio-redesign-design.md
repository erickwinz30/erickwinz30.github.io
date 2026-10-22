# Erick Winata Portfolio — Redesign Design

Date: 2026-10-22
Status: Reviewed, ready for approval
Owner: Erick Winata

## 1. Intent

Rebuild the portfolio as a confident one-page personal site for **Erick Winata**, aimed at HR/recruiters and prospective freelance clients. Within the first screen a visitor should know:

1. who he is,
2. what he builds,
3. how to contact him.

The visual language is adapted from the Nadia Okonjo reference: near-black background, one electric coral accent, an oversized name overlapping a cut-out portrait, editorial typography, and restrained motion. The structure and copy are rebuilt for a software engineer, not copied from a speaker's site.

## 2. Goals

- Make identity and specialism immediate in the hero.
- Show four strong projects with enough context to start a conversation.
- Make experience scannable without reading dense bullets.
- Keep technical depth available but secondary.
- Drive one action: email or LinkedIn.
- Feel intentional and current, not like a generic developer template.
- Stay honest: every number, project and claim must come from the existing CV, repo, or project list.

## 3. Non-goals

- No CMS, blog, contact form backend, authentication, or multi-page routing.
- No fabricated testimonials, client logos, speaking credits, book sales, or metrics.
- No component library or heavy animation framework beyond `motion`.
- No redesign of the CV PDF itself.
- No fake project screenshots or stock photos presented as client work.
- No dark/light theme toggle.

## 4. Constraints

- Existing stack: React 19 + Vite + TypeScript + Tailwind CSS v4.
- Add only `motion` (Framer Motion successor). `lucide-react` is already installed.
- Single page, static deploy to GitHub Pages at the repo root.
- Existing public assets are the source of truth.
- Portrait `public/assets/profile_erick.png` is a 354×472 transparent cut-out and is reused for the hero and bio. Keep the rendered height at or below 440px; on 2× displays the source is already being upscaled, so do not push it larger.
- Must work on mobile, tablet, desktop, and respect `prefers-reduced-motion`.
- Deployment workflow already exists at `.github/workflows/deploy.yml`; no workflow changes are needed.

## 5. Design System

### 5.1 Colors

```css
:root {
  --background: hsl(0, 0%, 6%);
  --foreground: hsl(30, 12%, 94%);
  --primary: hsl(8, 92%, 62%);
  --primary-foreground: hsl(0, 0%, 6%);
  --muted-foreground: hsl(30, 4%, 58%);
  --border: hsl(0, 0%, 16%);
  --card: hsl(0, 0%, 9%);
}
```

Coral is used for labels, indices, links, the cursor dot, and the contact section. It is never used for long body copy.

### 5.2 Typography

- Display/name: **Syne 800**, uppercase, `clamp(56px, 15vw, 260px)`, line-height `0.82`, letter-spacing `-0.04em`.
- Section headings: **Syne 600**, `clamp(30px, 4vw, 60px)`, line-height `1.0`, letter-spacing `-0.02em`.
- Body: **Inter 300**, 18px, line-height 1.7.
- Labels: **Inter 500**, 11px, uppercase, letter-spacing `0.24em`, coral.
- Small meta: Inter 400, 13px, muted.
- Fonts loaded from Google Fonts in `index.html` with `preconnect`.
- Fallbacks: `Syne, Impact, sans-serif` and `Inter, system-ui, sans-serif`.

### 5.3 Layout

- Content max-width 1280px, horizontal padding `px-10` on desktop, `px-6` on mobile.
- Section spacing `py-32` desktop, `py-20` mobile.
- Thin `1px` borders in `--border` separate major sections.
- Generous negative space around the name and project grid; avoid card-heavy layouts.

## 6. Page Structure and Final Copy

All copy below is final unless marked otherwise. Do not add invented facts.

### 6.1 Navbar

- Height 72px, transparent over the hero.
- After 24px scroll: `background: color-mix(in srgb, var(--background) 88%, transparent)`, backdrop blur, bottom border.
- Links, right-aligned, 11px uppercase letterspaced: `Work`, `Experience`, `Skills`, `About`.
- Coral pill `Let's talk` → `#contact`.
- No wordmark on desktop, matching the reference.
- Mobile: coral `Let's talk` button + menu icon. Menu opens a full-screen near-black overlay with large Syne links, close icon, and a coral email link.
- Mobile overlay locks body scroll, closes on link click and `Escape`, and returns focus to the menu button.

### 6.2 Hero

- Full viewport height, content bottom-weighted rather than centered.
- Label: `FULL-STACK · AI AUTOMATION · BACKEND`
- Name: `ERICK` (line 1) and `WINATA` (line 2).
- Name and portrait overlap:

```tsx
<div className="relative">
  <h1 className="relative">
    <span className="sr-only">Erick Winata</span>
    <span aria-hidden="true" className="relative z-0 block overflow-hidden">
      <span className="block text-center font-display text-[15vw] leading-[0.82]">ERICK</span>
    </span>
    <img
      src="/assets/profile_erick.png"
      alt=""
      className="relative z-10 mx-auto -mt-[clamp(24px,8vw,96px)] h-[clamp(280px,42vh,440px)] object-contain"
    />
    <span
      aria-hidden="true"
      className="relative z-20 -mt-[clamp(40px,14vw,160px)] block overflow-hidden"
    >
      <span className="block text-center font-display text-[15vw] leading-[0.82]">WINATA</span>
    </span>
  </h1>
</div>
```

- The first line passes behind the shoulders; the second line sits in front of the chest.
- The portrait is decorative in this composition (`alt=""`); the `sr-only` name carries the accessible name.
- Use `clamp()` for the negative margins so short laptop screens and ultrawide displays do not drift apart.
- On mobile, remove the negative margins and place the portrait below both name lines.
- Statement beneath: “I turn messy operations into reliable software — Go backends, multi-tenant AI pipelines, and the interfaces people actually use.”
- Primary action: `See selected work` → `#work`.
- Secondary action: `Download CV` → `/assets/CV_ATS_ErickWinata_English_17-10-2026.pdf`.
- Subtle bottom hairline and a small scroll cue.

### 6.3 Stack marquee

- Single row of technical wordmarks scrolling right to left, 40s loop.
- Greyscale at 55% opacity, full opacity on hover.
- Items: `Go`, `PostgreSQL`, `pgvector`, `Redis`, `React`, `TypeScript`, `OpenAI`, `Docker`, `n8n`, `Laravel`, `Git`.
- Text wordmarks in Syne 600, not logos.
- Duplicate the list for a seamless loop.
- Use pure CSS `@keyframes` with `transform: translate3d(...)` and `will-change: transform`. Do not animate the marquee with `motion`; it is a continuous loop and should not re-render React.
- Under `prefers-reduced-motion`, pause the animation with `animation-play-state: paused`.

### 6.4 What I do

Label `WHAT I DO`. Three columns with coral index, heading, three-line description, and small link.

**01 — Backend & AI Automation**
Go services, event queues and multi-tenant RAG pipelines that survive real traffic, real edge cases and real sales teams.
Link: `See selected work` → `#work`

**02 — Full-Stack Delivery**
From database schema to admin dashboard. React, TypeScript and Laravel shipped end to end, not handed over in pieces.
Link: `See experience` → `#experience`

**03 — Systems & Integrations**
WhatsApp, voice AI, CRMs and spreadsheets joined into one dependable flow with retries, fallbacks and clear observability.
Link: `See skills` → `#skills`

### 6.5 Selected work

Section id `work`. H2: `Selected *work*.` (the word `work` in italic coral).

Two-column grid on desktop, one column on mobile. Four projects. Each card has an image/panel, project name, one-line description, stack tags, and links or an inline breakdown where relevant.

1. **99.co — Real-Estate AI Platform**
   Multi-tenant WhatsApp and voice AI pipeline for lead qualification, site-visit scheduling and CRM follow-up.
   Stack: Go, PostgreSQL, pgvector, Redis, React, OpenAI.
   Media: no screenshot exists. Use a coral-on-black typographic panel with the project initials `99` and the stack as small labels. Do not fake a UI.
   Interaction: inline disclosure button `Read the breakdown`. Expands a text panel beneath the card with these supported points:
   - Migrated production n8n workflows into a Go modular monolith.
   - Multi-tenant RAG with PostgreSQL/pgvector and tenant-scoped retrieval.
   - Deterministic 7-stage funnel with Redis/Asynq, night-window gating and webhook fallbacks.
   - Hybrid WhatsApp + Retell AI voice pipeline powered by OpenAI.
   - React/TypeScript admin plane for tenant controls and lead retesting.
   Links: none.

2. **Attendance App**
   QR attendance with real-time tracking and role-based access for employees, HR and scanners.
   Stack: React, Go, PostgreSQL.
   Media: `/assets/img/portfolio/attendance-app/home.png`.
   Link: GitHub `https://github.com/erickwinz30/attendance-app-frontend`.

3. **Simple Ecommerce**
   Mobile storefront with cart, Midtrans checkout and an admin dashboard.
   Stack: Ionic, Vue, Firebase.
   Media: `/assets/img/portfolio/ionic-ecommerce/iPhone-13-PRO-home.png`.
   Links: demo `https://computers-ecommerce.web.app`, GitHub `https://github.com/erickwinz30/computers-ecommerce-ionic`.

4. **Kenzou Car Wash**
   Laravel management app with XP, badges, vouchers and leaderboards built for customer retention.
   Stack: Laravel, Blade, MySQL.
   Media: `/assets/img/portfolio/kenzou-app-screenshot/customers-homepage.png`.
   Links: none.

Card behavior:

- Image area aspect ratio `16 / 10`, `object-cover`, `object-top`.
- Image scales `1 → 1.05` over 0.9s on hover.
- Coral index in the corner (`01`–`04`).
- Entire card is a link only when a destination exists; otherwise it is a static article.
- Cursor label `View` appears only over cards with an external destination. No misleading label on static cards.
- The 99.co breakdown is a real `<button>` with `aria-expanded` and `aria-controls`; the expanded panel is keyboard reachable and does not trap focus.

### 6.6 Experience

Section id `experience`. H2: `Where I've worked.`

Five large rows replacing the reference's Talks section. Each row: period, role, company, one-line result. Hover shifts text 6px right and slides a coral arrow 10px. No hover thumbnails, because no company assets exist.

1. **99.co** — Apr 2026 – Oct 2026 — AI Engineer, Graduate Trainee
   Built a multi-tenant AI lead platform in Go and React; migrated n8n workflows into a high-reliability modular monolith.
2. **PT. Prakarsa Alam Segar (Wings Food)** — Jul 2025 – Oct 2025 — IT Programmer Intern
   Migrated recruitment from Google Drive into an internal system with a real-time applicant dashboard.
3. **Kenzou Drive Thru Car Wash** — Aug 2024 – Jan 2025 — Full-Stack Developer
   Shipped a Laravel car-wash app with gamified loyalty and end-to-end admin tooling.
4. **Dicoding Indonesia** — Feb 2023 – Jul 2023 — Back-End Developer, MSIB
   Built REST APIs with Node.js and professional Git workflows through Dicoding's MSIB program.
5. **Bfit Indonesia** — Feb 2023 – Mar 2023 — IT Support Intern
   Rebuilt warehouse inventory from Blade to Vue and implemented Safety Stock tracking.

### 6.7 Skills

Section id `skills`. H2: `What I work with.`

Three grouped lists, no cards:

- **Backend & Data** — Go, PostgreSQL, pgvector, Redis, Asynq, MySQL, SQLite.
- **AI & Automation** — OpenAI API, RAG, Retell AI, WhatsApp Business API, n8n.
- **Frontend & Delivery** — React, TypeScript, Vue, Tailwind CSS, Laravel, Docker, Git.

Each group uses a coral index and a two-column list on desktop. Hovering a skill turns it coral and shifts it 4px right.

### 6.8 Production facts strip

Four figures with labels. These are technical facts from the 99.co work, not vanity counts. No count-up animation; fade up only.

- `24/7` — WhatsApp + voice qualification
- `7` — stage automated follow-up funnel
- `5` — external integrations: WhatsApp, voice, OpenAI, CRM, Google Sheets
- `3` — core languages: Go, TypeScript, PHP

### 6.9 Principle

One large statement in Syne 600, near-full width:

> “Reliability is a feature. If it only works in the demo, it doesn't work.”

Attributed as `Working principle`, not a fake testimonial.

### 6.10 Bio

Section id `about`. H2: `About Erick.`

Two columns: portrait in a soft dark frame left, three paragraphs right.

Paragraph 1:
“I'm a Full-Stack & AI Automation Engineer and an Information Systems graduate from Dinamika University. I like the part of the job where a messy process becomes a system that behaves predictably.”

Paragraph 2:
“Most of my work sits between backend architecture and applied AI: Go services, multi-tenant RAG, WhatsApp and voice pipelines, and the React dashboards that make them usable. I've also shipped Laravel and Vue products end to end.”

Paragraph 3:
“I work across the full SDLC, use AI-assisted engineering to move faster, and keep architecture, data integrity and edge cases under human review. Based in East Surabaya, open to full-time roles and freelance work.”

Links: `Download CV` → `/assets/CV_ATS_ErickWinata_English_17-10-2026.pdf`, `LinkedIn`, `GitHub`.

Portrait note: use the same cut-out on a subtle radial coral glow, framed by a 1px border and soft corner radius. Keep rendered height under 440px.

### 6.11 Contact

Section id `contact`. Coral background, near-black text.

H2: `Let's talk about the problem.`
Body: “Hiring, or have a project in mind? Tell me the role, the scope, and the constraint that matters most. A short note is enough.”
Primary button: `erickwinz1008@gmail.com` → `mailto:erickwinz1008@gmail.com`.
Secondary links: LinkedIn, GitHub.
Meta row: `East Surabaya, Indonesia` · `Open to full-time roles and freelance work`.

### 6.12 Footer

Near-black row, top border: `ERICK WINATA`, email, LinkedIn, GitHub, `© 2026`.

## 7. Motion

- Name halves rise from `y: 120` inside `overflow-hidden`, 1s, ease `[0.22, 1, 0.36, 1]`, 0.12s apart.
- Portrait fades in and scales `1.06 → 1` over 1.2s, starting 0.3s in.
- Section content fades up on scroll with a small stagger. Use `whileInView` with `once: true`.
- Project images scale on hover.
- Experience rows shift text and arrow on hover.
- Coral cursor dot follows the pointer with a spring. It grows to 64px and shows `View` only over project cards with an external destination.
- Implement the cursor with `useMotionValue` + `useSpring` and transform-only updates. Do not re-render the page on every pointer move. Hover intent comes from event delegation on `[data-cursor="view"]`.
- Cursor dot is disabled on coarse pointers and under `prefers-reduced-motion`; the native cursor returns in both cases.
- All motion disabled or reduced under `prefers-reduced-motion`.

## 8. Responsive

- **Mobile (<768px):** name stacks at 56px; portrait sits below the name rather than overlapping; cursor dot disabled; projects one column; marquee slightly faster; nav becomes `Let's talk` + menu icon with full-screen overlay.
- **Tablet (768–1024px):** overlap retained at reduced scale; projects two columns; experience meta stacks.
- **Desktop:** full-bleed hero, 1280px content, `px-10`, `py-32`.

## 9. Technical Plan

### 9.1 File structure

```
src/
  App.tsx
  index.css
  main.tsx
  components/
    Navbar.tsx
    Hero.tsx
    Marquee.tsx
    Services.tsx
    Projects.tsx
    Experience.tsx
    Skills.tsx
    Facts.tsx
    Principle.tsx
    Bio.tsx
    Contact.tsx
    Footer.tsx
  components/ui/
    Reveal.tsx
    CursorDot.tsx
  data/
    content.ts
```

### 9.2 Implementation notes

- Replace the existing component set. Remove `About.tsx`, `Skills.tsx` (old), `Experience.tsx` (old), `Projects.tsx` (old), `Contact.tsx` (old), and `Hero.tsx` (old) as they are superseded.
- Keep content in `src/data/content.ts` so sections stay presentational and copy is edited in one place.
- Move design tokens into Tailwind v4 `@theme` in `src/index.css`. Exact block:

```css
@import "tailwindcss";

@theme {
  --color-background: hsl(0 0% 6%);
  --color-foreground: hsl(30 12% 94%);
  --color-primary: hsl(8 92% 62%);
  --color-primary-foreground: hsl(0 0% 6%);
  --color-muted-foreground: hsl(30 4% 58%);
  --color-border: hsl(0 0% 16%);
  --color-card: hsl(0 0% 9%);
  --font-display: "Syne", Impact, sans-serif;
  --font-sans: "Inter", system-ui, sans-serif;
}
```

- Keep global body typography, selection color, smooth scrolling, and scrollbar styling.
- Add `motion` to dependencies. Do not add `clsx` unless actually needed; use template strings.
- Update `index.html`:
  - title `Erick Winata — Full-Stack & AI Engineer`
  - meta description
  - `theme-color`
  - Open Graph + Twitter card tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `twitter:card`).
  - generate a real `public/og-image.png` at 1200×630 using the portrait cut-out on the near-black background with the coral name; do not use the transparent portrait directly as the social image.
  - Google Fonts for Syne and Inter with `preconnect`
  - remove the devicon CDN link
  - replace `/vite.svg` favicon with a small coral `E` SVG at `public/favicon.svg`
- Do not change `vite.config.ts` or the GitHub Actions workflow.
- No router, no CMS, no backend.

### 9.3 Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- A visible-on-focus `Skip to content` link before the navbar.
- One `h1` in the hero; section headings `h2`; card titles `h3`.
- Visible `:focus-visible` outline in coral on all interactive elements.
- Mobile menu is keyboard reachable, closes on `Escape`, and restores focus.
- Alt text for portrait and project screenshots; decorative marquee and cursor are `aria-hidden`.
- Contrast check: coral `hsl(8, 92%, 62%)` on `hsl(0, 0%, 6%)` passes AA for normal text; near-black on coral passes for the contact section.
- Cursor effect never intercepts pointer events.

## 10. Verification

- `npm run build` passes.
- `npm run lint` passes.
- `npm run dev` serves a usable local preview.
- Manual check at 360px, 768px, 1024px, and 1440px.
- Check keyboard navigation, mobile menu, reduced-motion mode, and all links.
- Confirm no fabricated content, no broken image paths, and no horizontal scroll.

## 11. Builder's Call

- Exact spacing and type-scale fine-tuning.
- Exact negative margins for the portrait overlap per breakpoint, within the `clamp()` ranges.
- Minor copy tightening that does not change meaning.
- Project card ordering within the four chosen projects.
- Whether the cursor dot is a solid dot or a thin ring, as long as it matches the coral accent.

## 12. Review Resolutions

These points were raised during spec review and are resolved above:

- **Flagship project dead end:** 99.co now has an inline, accessible technical breakdown instead of a blank card.
- **Hero heading conflict:** replaced with one `<h1>`, an `sr-only` full name, and `aria-hidden` visual lines.
- **Portrait softness:** capped at 440px rendered height; the source asset is 354×472.
- **Overlap fragility:** negative margins now use `clamp()` and collapse on mobile.
- **Vanity metrics:** the strip now uses verifiable production facts (24/7, 7-stage funnel, 5 integrations, 3 languages).
- **Tailwind v4 mapping:** exact `@theme` block added.
- **Cursor performance:** `useMotionValue` + `useSpring`, event delegation, no React re-render per pointer move.
- **Marquee engine:** CSS-only, no `motion`.
- **Social previews:** Open Graph and Twitter tags plus a real 1200×630 OG image added to the plan.
- **Accessibility:** skip link, focus states, menu focus return, and semantic heading order specified.

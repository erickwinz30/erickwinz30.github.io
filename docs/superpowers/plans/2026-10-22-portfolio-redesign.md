# Erick Winata Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a single-page near-black/coral editorial site with an oversized name/portrait hero, selected work, experience, skills, bio, and contact.

**Architecture:** One React page composed of focused section components. Copy and project data live in `src/data/content.ts`; shared motion and cursor behavior live in `src/components/ui/`. Tailwind v4 tokens and global styles live in `src/index.css`.

**Tech Stack:** React 19, Vite 7, TypeScript 5.9, Tailwind CSS v4, `motion`, `lucide-react`.

**Spec:** `docs/superpowers/specs/2026-10-22-portfolio-redesign-design.md`

## Global Constraints

- No fabricated content: every claim, number, project, and link comes from the existing CV, repo, or project list.
- Colors: background `hsl(0 0% 6%)`, foreground `hsl(30 12% 94%)`, primary `hsl(8 92% 62%)`, primary-foreground `hsl(0 0% 6%)`, muted `hsl(30 4% 58%)`, border `hsl(0 0% 16%)`, card `hsl(0 0% 9%)`.
- Fonts: Syne 600/800 for display, Inter 300/400/500 for body.
- Portrait: `public/assets/profile_erick.png`, rendered at most 440px tall.
- No component library, router, CMS, backend, or contact form.
- All motion respects `prefers-reduced-motion`.
- Existing deploy workflow and `vite.config.ts` stay unchanged.

## Review Focus

- **Hero on short/ultrawide screens:** name lines and portrait must not collide or leave a gap; verify at 1366×768 and 1920×1080.
- **Mobile portrait overlap:** on <768px, portrait must sit below the name with no clipped head or negative-margin overlap.
- **Unlinked project cards:** 99.co and Kenzou must not look clickable; only linked cards get the `View` cursor label.
- **99.co disclosure:** keyboard users must be able to open and close the breakdown, and `aria-expanded` must track state.
- **Reduced motion:** marquee, cursor dot, name rise, and fade-ups must degrade to a usable static page.

---

### Task 1: Foundation, tokens, metadata, content

**Files:**
- Modify: `package.json`
- Modify: `index.html`
- Modify: `src/index.css`
- Create: `public/favicon.svg`
- Create: `public/og-image.png`
- Create: `src/data/content.ts`
- Test: `npm run build`

**Interfaces:**
- Produces: exported `navLinks`, `services`, `projects`, `experience`, `skillGroups`, `productionFacts`, `bioParagraphs`, `contact` from `src/data/content.ts`.
- Produces: Tailwind utility names `bg-background`, `text-foreground`, `text-primary`, `bg-primary`, `text-muted-foreground`, `border-border`, `bg-card`, `font-display`, `font-sans`.

- [ ] **Step 1: Add the `motion` dependency**

Run: `npm install motion`
Expected: `package.json` contains `"motion"` in dependencies.

- [ ] **Step 2: Write the Tailwind v4 tokens and base styles**

Replace `src/index.css` with the `@theme` block from spec §9.2. Keep `html { scroll-behavior: smooth; }`, body background/foreground/antialiasing, selection colors, and a slim dark scrollbar. Add `@media (prefers-reduced-motion: reduce)` to disable smooth scrolling and animations.

- [ ] **Step 3: Update `index.html`**

Set title `Erick Winata — Full-Stack & AI Engineer`, meta description, `theme-color`, Open Graph and Twitter tags, Google Fonts preconnect + Syne/Inter stylesheet, favicon `/favicon.svg`, and remove the devicon CDN link.

- [ ] **Step 4: Create favicon and OG image**

Create `public/favicon.svg` as a coral `E` on a near-black rounded square. Generate `public/og-image.png` at 1200×630 with the portrait cut-out on near-black and the coral name `ERICK WINATA`.

- [ ] **Step 5: Create `src/data/content.ts`**

Export typed arrays with the exact copy from spec §6. `projects` items expose `id`, `index`, `title`, `description`, `stack`, `image`, `href`, `demoHref`, `breakdown?`. The 99.co item has `breakdown` and no `href`.

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: PASS with no TypeScript errors.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json index.html src/index.css public/favicon.svg public/og-image.png src/data/content.ts
git commit -m "feat: add portfolio design tokens and content"
```

---

### Task 2: Shared motion and cursor

**Files:**
- Create: `src/components/ui/Reveal.tsx`
- Create: `src/components/ui/CursorDot.tsx`
- Test: `npm run build`

**Interfaces:**
- `Reveal({ children, className?, delay? }: { children: React.ReactNode; className?: string; delay?: number })` — fades up once in view.
- `CursorDot()` — fixed, pointer-events-none coral dot; reads `[data-cursor="view"]` via event delegation.

- [ ] **Step 1: Implement `Reveal`**

Use `motion.div` with `initial={{ opacity: 0, y: 24 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-80px" }}`, duration 0.7, ease `[0.22, 1, 0.36, 1]`. Respect `useReducedMotion()`.

- [ ] **Step 2: Implement `CursorDot`**

Use `useMotionValue`, `useSpring`, and `useTransform` for transform-only updates. On `pointermove`, set x/y. On `pointerover`, check `closest('[data-cursor="view"]')`; grow to 64px and show `View`. Hide entirely when `matchMedia('(pointer: coarse)')` or reduced motion.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui
git commit -m "feat: add reveal and cursor primitives"
```

---

### Task 3: Navbar and hero

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Hero.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `navLinks` from `src/data/content.ts`.
- Produces: `Navbar()` and `Hero()`.

- [ ] **Step 1: Implement `Navbar`**

Fixed header, 72px, transparent until `scrollY > 24`, then blurred near-black with bottom border. Desktop links in order: Work, Experience, Skills, About. Coral `Let's talk` pill to `#contact`. Mobile: coral pill + menu button; full-screen overlay with large links, close button, Escape handling, body scroll lock, and focus return.

- [ ] **Step 2: Implement `Hero`**

Use the spec §6.2 markup: one `<h1>`, `sr-only` full name, two `aria-hidden` visual lines with `overflow-hidden`, portrait between them at `clamp(280px, 42vh, 440px)`, negative margins via `clamp()`. Animate each line from `y: 120` with 1s duration and 0.12s stagger. Portrait fades/scales `1.06 → 1`, 1.2s, 0.3s delay. Add label, statement, CTAs, bottom hairline, scroll cue. Mobile: no overlap, portrait below name.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.tsx src/components/Hero.tsx
git commit -m "feat: add navbar and hero"
```

---

### Task 4: Marquee and services

**Files:**
- Create: `src/components/Marquee.tsx`
- Create: `src/components/Services.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `services` from `content.ts`.
- Produces: `Marquee()` and `Services()`.

- [ ] **Step 1: Implement `Marquee`**

Duplicate the stack list twice, CSS `@keyframes` translate3d loop, 40s, `will-change: transform`, pause under reduced motion. Border top/bottom, 55% opacity, full opacity on hover. Mark decorative copy `aria-hidden`.

- [ ] **Step 2: Implement `Services`**

Label `WHAT I DO`, three columns, coral indices `01`–`03`, headings, descriptions, small section links. Use `Reveal` for each column.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/Marquee.tsx src/components/Services.tsx
git commit -m "feat: add stack marquee and services"
```

---

### Task 5: Selected work

**Files:**
- Create: `src/components/Projects.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `projects` from `content.ts`.
- Produces: `Projects()`.

- [ ] **Step 1: Implement `Projects`**

Section `id="work"`, H2 `Selected work.` with italic coral `work`. Two-column grid, one column on mobile. Each card: media panel, coral index, title, description, stack tags, optional links. 99.co uses a coral typographic `99` panel and a `Read the breakdown` disclosure with `aria-expanded` / `aria-controls`. Linked cards get `data-cursor="view"`; static cards do not. Image scales `1 → 1.05` on hover.

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: add selected work section"
```

---

### Task 6: Experience and skills

**Files:**
- Create: `src/components/Experience.tsx`
- Create: `src/components/Skills.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `experience`, `skillGroups` from `content.ts`.
- Produces: `Experience()` and `Skills()`.

- [ ] **Step 1: Implement `Experience`**

Section `id="experience"`, H2 `Where I've worked.` Five rows with period, role, company, result. Row text shifts 6px right and coral arrow slides 10px on hover. Rows stack cleanly on mobile.

- [ ] **Step 2: Implement `Skills`**

Section `id="skills"`, H2 `What I work with.` Three groups, coral index, two-column list on desktop, one on mobile. Hover turns skill coral and shifts it 4px.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.tsx src/components/Skills.tsx
git commit -m "feat: add experience and skills"
```

---

### Task 7: Facts, principle, bio

**Files:**
- Create: `src/components/Facts.tsx`
- Create: `src/components/Principle.tsx`
- Create: `src/components/Bio.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `productionFacts`, `bioParagraphs`, `contact` from `content.ts`.
- Produces: `Facts()`, `Principle()`, `Bio()`.

- [ ] **Step 1: Implement `Facts`**

Four figures: `24/7`, `7`, `5`, `3` with exact labels from spec §6.8. Syne display numbers in coral, labels in muted Inter. Fade up only; no count-up.

- [ ] **Step 2: Implement `Principle`**

Full-width large Syne 600 quote: “Reliability is a feature. If it only works in the demo, it doesn't work.” Attribution `Working principle`.

- [ ] **Step 3: Implement `Bio`**

Section `id="about"`, H2 `About Erick.` Two columns: portrait in dark frame with coral radial glow (max 440px tall), three paragraphs, Download CV, LinkedIn, GitHub links.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/Facts.tsx src/components/Principle.tsx src/components/Bio.tsx
git commit -m "feat: add facts, principle, and bio"
```

---

### Task 8: Contact, footer, page wiring

**Files:**
- Create: `src/components/Contact.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/App.tsx`
- Delete: `src/components/About.tsx`, `src/components/Contact.tsx` (old), `src/components/Experience.tsx` (old), `src/components/Hero.tsx` (old), `src/components/Navbar.tsx` (old), `src/components/Projects.tsx` (old), `src/components/Skills.tsx` (old)
- Test: `npm run build`, `npm run lint`

**Interfaces:**
- Consumes: all section components and `contact`.
- Produces: final `App()`.

- [ ] **Step 1: Implement `Contact`**

Coral section, near-black text, H2 `Let's talk about the problem.`, body copy, email button, LinkedIn/GitHub links, location and availability meta.

- [ ] **Step 2: Implement `Footer`**

Near-black row with name, email, LinkedIn, GitHub, `© 2026`.

- [ ] **Step 3: Wire `App`**

Skip link, `CursorDot`, `Navbar`, `main` with Hero → Marquee → Services → Projects → Experience → Skills → Facts → Principle → Bio → Contact, then Footer. Remove all old component imports and files.

- [ ] **Step 4: Verify build and lint**

Run: `npm run build && npm run lint`
Expected: both PASS.

- [ ] **Step 5: Commit**

```bash
git add src/App.tsx src/components
git commit -m "feat: rebuild portfolio page"
```

---

### Task 9: Local verification and polish

**Files:**
- Modify: any file needed for visual fixes.
- Test: browser at 360, 768, 1024, 1440 widths.

- [ ] **Step 1: Run local dev server**

Run: `npm run dev -- --host 0.0.0.0`
Expected: Vite prints a local URL.

- [ ] **Step 2: Open in browser and inspect**

Check hero overlap, no horizontal scroll, navbar scroll state, mobile menu, project disclosure, all links, image loading, and focus states. Capture screenshots at 360, 768, 1024, 1440.

- [ ] **Step 3: Fix visual defects**

Adjust clamp values, spacing, or image crops as needed. Re-run build after changes.

- [ ] **Step 4: Verify reduced motion**

Emulate `prefers-reduced-motion: reduce`; confirm marquee pauses, cursor dot is absent, and content is visible without animation.

- [ ] **Step 5: Final verification**

Run: `npm run build && npm run lint`
Expected: both PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "fix: polish responsive portfolio layout"
```

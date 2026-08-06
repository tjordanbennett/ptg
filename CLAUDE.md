# PTG Website — Build Only

You build a website. That is your entire job. You run it on localhost so
Jordan can look at it. Nothing else.

---

## FORBIDDEN — read this before anything else

You do not have permission to take any action outside this folder. Jordan
handles all of it himself.

**Never, under any circumstances, without exception:**

- ❌ **No deployment.** No Vercel, Netlify, Cloudflare, or any host. No
  `vercel`, `vercel deploy`, `vercel link`, `npx vercel`. Not even a preview.
  Not even "just to check the build."
- ❌ **No git.** No `git init`, `add`, `commit`, `push`, `remote`, `branch`.
  Do not create a repository. Do not stage anything. Jordan owns all version
  control.
- ❌ **No accounts, no signups, no auth flows.** No Sanity project creation,
  no `sanity login`, no `sanity init`, no CLI that opens a browser to log in.
- ❌ **No external services.** No analytics, no error tracking, no CDN, no
  domain, no DNS, no email service, no third-party API keys.
- ❌ **No credentials.** Never read, create, print or request `.env.local`,
  tokens, or keys. You should not need any. If you think you do, stop and ask.
- ❌ **No dependency upgrades.** Not Node, Next, React, or anything. Ignore
  upgrade warnings.
- ❌ **No new packages** beyond the approved list below. Ask first, every time.
- ❌ **No network writes of any kind.** Reading docs is fine. Sending anything
  outward is not.
- ❌ **Nothing outside `~/Sites/ptg/`**, except *reading* the reference docs in
  `~/Ridge/work/business/ptg/` and *writing* the handoff files named below.

**If you find yourself about to run a command that touches a network, an
account, or version control — stop and ask Jordan.**

### The only thing you do

Build the site. Run `npm run dev`. Tell Jordan the localhost URL. That's it.

---

## What this project is

A complete website for **PTG (Precision Task Group)**, a boutique Workday
consulting firm in Houston. This is a **speculative build** — no signed
engagement, PTG hasn't asked for it. Jordan is building it to win the work by
showing rather than proposing. It has to be genuinely good.

Built by Jordan under **RidgeX Ventures LLC**. Not Pragma Creative — a 2025
engagement ran under Pragma and stalled. No Pragma branding or assets anywhere.

---

## Required reading

In `~/Ridge/work/business/ptg/` — read only, never write except to `_handoff/`:

| File | What it gives you |
|---|---|
| `_handoff/FOR-CLAUDE-CODE.md` | **Your current brief. Start here.** |
| `BUILD-PLAN.md` | The spec — IA, design system, component inventory |
| `design/reference-site-analysis.md` | The 5 sites the client admires |
| `FINDINGS.md` | Brand system, positioning, deal history |
| `audit/current-site-audit.md` | The 39 problems on the live site we're fixing |
| `source-copy/PTG-Website-Layout-DUMP.md` | The client's own copy deck — ~987 cells of finished page copy |

Don't invent copy that already exists in the deck. Don't redesign what the
BUILD-PLAN specifies. If you disagree with the spec, write it in
`_handoff/FOR-RIDGE.md` — don't silently deviate.

---

## Stack

Local only. No hosted services.

```
next            14.2.15
react           18.3.1
react-dom       18.3.1
typescript      5.x
tailwindcss     3.x
```

Dev-only, pre-approved: `@playwright/test`, `@axe-core/cli`.
**Everything else requires asking Jordan first.**

**No CMS for now.** Content lives in typed local files under `content/`.
Sanity is in the long-term plan but requires creating a cloud project, which
you may not do. Structure the data layer so content is read through
`lib/content.ts` — that way swapping in a CMS later is one file, not a
rewrite. Do not install `sanity` or `next-sanity`.

App Router. TypeScript strict. Montserrat via `next/font/google`.
No animation library — CSS transitions, `IntersectionObserver` and
`matchMedia` cover everything in the spec.

---

## Design tokens

From PTG's own 2026 brand guide.

```js
colors: {
  ptg: {
    navy:      '#021F43',  // Midnight Navy — primary dark
    blue:      '#0034A0',  // ⚠️ guide prints #00340A which is GREEN. Typo. Don't "fix" back.
    ember:     '#EB4900',  // Signal Ember — primary CTA
    clear:     '#80CEFF',  // Clear Blue — light accent
    leaf:      '#B4FF00',  // Vivid Leaf — SIGNATURE accent, sparingly
    slate:     '#334155',  // = tailwind slate-700
    steel:     '#94A3B8',  // = tailwind slate-400
    lightgray: '#E5E7EB',  // = tailwind gray-200
    offwhite:  '#F5F7F9',
  }
}
```

**Type:** Montserrat — 800 headlines, 600 subheads/eyebrows, 400 body.

**Vivid Leaf is the differentiation strategy, not decoration.** PTG's closest
competitor uses navy + orange — effectively the same palette. Lime is the one
accent nobody in the competitive set uses. Reserve it for active tab states,
scroll progress, stat underlines, "you are here" indicators.

**Spacing:** 8px baseline. Sections 96–128px desktop / 56–72px mobile.
Container max 1280px.

---

## Visual language

Four of the five sites the client admires use **angled geometry** for section
transitions, and PTG's brand guide independently specifies chevrons and a
4-point star grid. That convergence is the spine of the design.

- Diagonal photo masks (hero, testimonial panels)
- Angled wedge transitions between color fields, 2px Ember hairline on the cut
- 4-point star grid as low-opacity texture over solid fields
- Dot-grid texture on light fields
- **Never a flat white background above the fold** — explicit client requirement

**Motion:** reveal, never decoration. The audience is government procurement
officers and university CFOs — this should feel expensive and quiet, not like
a showreel. Transitions ≤400ms, `ease-out`, 12–16px translate, 60–80ms
sibling stagger.

---

## Quality gates

Nothing is "done" that fails these. Run them, don't assume.

1. `npx tsc --noEmit` clean
2. `axe-core` — **zero** violations
3. Exactly one `<h1>` per page, heading order unbroken
4. **All content server-rendered.** The page must be fully readable and
   navigable with JavaScript disabled. Motion and counters are enhancement
   only — a stat that animates from 0 has its real value in the HTML.
5. `prefers-reduced-motion: reduce` honored on every animation
6. Visible focus states everywhere, keyboard-complete
7. Real `alt` text on every image, never a filename

**Why gate 2 and 7 matter here:** PTG's live site has no `<h1>` on 33 of 39
pages and ships `alt="_edited.png"` on every logo, while their own Texas DIR
contract scope sells *"website content accessibility compliance."* The pitch
says we fixed that, so it has to be true.

---

## Content integrity

**Never render an unverified claim as fact.** BUILD-PLAN §7 lists what's
unconfirmed — contract numbers, customer names, headcount stats, the "largest
public sector Workday reseller" line. These render from placeholder data with a
`data-unverified` attribute and get logged to `_handoff/FOR-RIDGE.md`.

**Do not write marketing copy.** Copy comes from Ridge or the client's deck. If
a slot has no copy, use a clearly-marked placeholder and log it. Inventing
plausible-sounding claims about a real company is the worst thing you can do
on this project.

---

## Working style

**Don't verify small changes after making them.** For a small, self-contained
edit (a color, a layout tweak, a logo swap, one component), just make it and
tell Jordan it's done — he'll look and tell you if it needs fixing. Skip the
screenshot/curl/browser round-trip. Only run the full verify cycle (browser,
`tsc`, a11y) for a **big set of changes** or something with real correctness
risk (new dependency, data-layer change, motion logic, a whole page).

---

## Subagents

In `.claude/agents/`. Use them.

| Agent | When |
|---|---|
| `component-builder` | One component per invocation. **Fan out — 5 in parallel is fine**, separate files. |
| `page-assembler` | Composes components into a page. **Never parallel with itself.** |
| `visual-qa` | After assembly. Screenshots localhost at 390/768/1440 against the spec. |
| `a11y-auditor` | After visual-qa. axe, keyboard, focus, contrast, reduced-motion. |
| `copy-porter` | Copy deck → local JSON. High volume, low judgment. |

Components fan out. Assembly is serial. QA runs after.

---

## Reporting to Ridge

Ridge is Jordan's chief of staff, running in Cowork. It produces content and
verified facts; you build. It can't see this repo live. The channel is
`~/Ridge/work/business/ptg/_handoff/` — the only place outside this folder you
may write.

| File | Direction |
|---|---|
| `STATUS.md` | **You write.** Phase, what shipped, what's blocked. |
| `FOR-RIDGE.md` | **You write.** Copy needed, facts to verify, decisions wanted. |
| `FOR-CLAUDE-CODE.md` | **You read.** Ridge's brief and delivered content. |
| `DECISIONS.md` | **Both write.** Architectural calls. |

**Update `STATUS.md` at the end of every session.** Ridge wakes with no memory
and reads that file to pick up.

---

## Things that will trip you up

- **There is no vector PTG logo.** Only a 300×100 PNG through a Wix crop on
  the live site. Use a clearly-flagged placeholder. Don't trace it.
- **`~/Sites/ptg-proposal`** is the Nov 2025 Pragma-branded proposal deck.
  Historical reference only — don't lift from it, don't carry Pragma assets.
- **ServiceNow is deliberately secondary.** Real pages, not equal billing.
  One word: "ServiceNow", not "Service Now."
- **Client IA typo we're correcting:** "Our Leadeship" → "Our Leadership".
- **The AI comps** in `source-copy/embedded/` are NOT the design. Jordan
  rejected them — they carry generation artifacts and three contradictory
  navs. Section ordering reference only.

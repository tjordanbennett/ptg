# PTG Website — Build Only

You build a website. That is your entire job. You run it on localhost so
Jordan can look at it. Nothing else.

*Last updated 2026-08-26. If something here contradicts an older doc in
`~/Ridge/work/business/ptg/`, this file wins.*

---

## FORBIDDEN — read this before anything else

You do not have permission to take any action outside this folder. Jordan
handles all of it himself.

**Never, under any circumstances, without exception:**

- ❌ **No deployment.** No Vercel, Netlify, Cloudflare, or any host. No
  `vercel`, `vercel deploy`, `vercel link`, `npx vercel`. Not even a preview.
  Not even "just to check the build."
- ❌ **No git writes.** A repo exists with a remote (`origin` →
  `github.com/tjordanbennett/ptg`). You may run read-only commands
  (`git status`, `git diff`, `git log`). You may **never** `add`, `commit`,
  `push`, `pull`, `merge`, `rebase`, `checkout -b`, or touch a remote. Jordan
  owns all version control.
- ❌ **No accounts, no signups, no auth flows.** No Sanity project creation,
  no `sanity login`, no `sanity init`, no CLI that opens a browser to log in.
- ❌ **No external services.** No analytics, no error tracking, no CDN, no
  domain, no DNS, no email service, no third-party API keys.
- ❌ **No credentials.** Never read, create, print or request `.env.local`,
  tokens, or keys. You should not need any. If you think you do, stop and ask.
- ❌ **No dependency upgrades.** Not Node, Next, React, or anything. Ignore
  upgrade warnings.
- ❌ **No new packages** beyond the approved list below. Ask first, every time.
- ❌ **No `npm install` from a Linux sandbox** into this tree. It writes
  platform-specific binaries that break the Mac. Installs happen on Jordan's
  machine.
- ❌ **No flipping the site public.** `robots.txt` disallows everything and
  `app/layout.tsx` sets `robots: { index: false }`. Both stay exactly as they
  are. Going live is Jordan's decision on Jordan's timeline.
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

A complete website for **PTG (Precision Task Group)**, a Workday and
ServiceNow consulting firm in Houston. Built by Jordan under **RidgeX
Ventures LLC**.

**Status as of 2026-08-26 — this is no longer a cold spec build.** PTG's
leadership team has reviewed the site. Their COO, VP of Marketing, CFO and CTO
have all seen it, and a budget conversation has happened. It is moving toward
a real launch.

**The deadline is Workday Rising, October 12–15, 2026.** PTG wants the site
live before it. Everything you do should be pointed at that date. When you're
choosing between a clever approach and a finishable one, finish.

No Pragma Creative branding or assets anywhere — a 2025 engagement ran under
Pragma and stalled. This is Jordan's build.

---

## The two things the client actually asked for

These came from PTG leadership after reviewing the site. They outrank anything
in the older planning docs.

### 1. ServiceNow gets equal billing with Workday

**This reverses the previous instruction in this file.** The COO, Vanessa
Ozuna, wrote that the site "reads more like we are a 'Workday plus
ServiceNow' organization versus a company with equally strong capabilities
across both platforms," and that the imbalance risks discouraging new
ServiceNow business. The VP of Marketing agreed and asked for a
technology-focused landing page rather than a Workday-focused one.

It leaned Workday because Workday content is what existed at build time, not
because it was a positioning decision. So:

- The homepage leads with PTG as a **technology consultancy**, not a Workday
  shop that also does ServiceNow.
- Workday and ServiceNow get parallel treatment in the nav, on the homepage,
  and in the practice hierarchy.
- Where the two are tied together — a client can get both from one firm —
  that story belongs on **both** practice pages, not just the Workday one.
- One word: "ServiceNow", never "Service Now."

This is a content and hierarchy change, not a rebuild. Don't redesign to
achieve it.

### 2. Procurement language stays mechanism-first

Cooperative contracting has compliance expectations about how you describe
buying without a solicitation. "No RFP required" style framing is the wrong
register, and PTG's contracts people will review these pages before launch.

The shipped pages already handle this correctly — they describe the mechanism
("awarded through a public competitive solicitation run by its lead agency"),
and they hedge to the buyer ("Eligibility shown here is a guide, not a
determination", "Your counsel or procurement office confirms it for your
jurisdiction"). **Do not regress this.** Some older copy documents in
`~/Ridge/work/business/ptg/` still carry "No RFP required" as a label — those
lines are superseded. Never port them in.

---

## Required reading

### Design — the artifact is the spec, not the prose

```
public/_design/homepage.html
public/_design/howtobuy.html
```

**These two rendered files are the design source of truth. Match them.** Three
successive prose design specs were written for this project and each produced
something different from what was intended; handing over the rendered artifact
is what finally worked. Homepage is the homepage. **How-to-Buy is the template
for every internal page.**

Rules and rationale: `~/Ridge/work/business/ptg/DESIGN-SOURCE.md`.

The AI comps in `source-copy/embedded/` are **not** the design — Jordan
rejected them (generation artifacts, three contradictory navs). Section
ordering reference only.

### Copy

`~/Ridge/work/business/ptg/PTG-SITE-COPY.md` was written 2026-08-05 as the
single source of truth for every word on all ~30 pages. **It has since gone
stale.** As of 2026-08-26, 45 strings live in `content/` with no counterpart in
that document, because the ServiceNow rebalance and the copy-FINAL structural
changes were made in the repo and never written back.

**Until it is regenerated, `content/` is the source of truth for copy, not the
document.** Do not port from `PTG-SITE-COPY.md` over the top of a string that
already exists in `content/` — you will regress it. Use the document for pages
and slots that `content/` does not yet cover.

**House rules for all rendered copy (set by Jordan 2026-08-26):**

- **No em dashes (—) anywhere a user can read them.** Rewrite instead of
  substituting: period when what follows is a full clause, colon when it is a
  list that defines what came before, comma only for a short trailing tag.
  Never a hyphen (` - `) standing in for one. Code comments are exempt.
- **Contractions wherever they fit.** `isn't`, `we'll`, `doesn't`, `you're`.
- **Hyphens in compound modifiers are untouched** and always fine:
  `mid-implementation`, `family-owned`, `twice-yearly`, `off-the-shelf`.
- **En dashes (–) stay** in date ranges and `K–12`. They are correct.

Superseded, do not read, do not port from:
`content/homepage-copy-FINAL.md`, `content/procurement-copy.md`,
`content/SITE-COPY.md`.

### Everything else

In `~/Ridge/work/business/ptg/` — read only, never write except to `_handoff/`:

| File | What it gives you |
|---|---|
| `_handoff/FOR-CLAUDE-CODE.md` | **Your current brief. Start here.** |
| `_handoff/STATUS.md` | Where the last session left off |
| `FINDINGS.md` | Brand system, positioning, deal history |
| `design/reference-site-analysis.md` | The 5 sites the client admires |
| `audit/current-site-audit.md` | The 39 problems on the live site we're fixing |
| `source-copy/PTG-Website-Layout-DUMP.md` | The client's own copy deck |

If you disagree with the spec, write it in `_handoff/FOR-RIDGE.md` — don't
silently deviate.

---

## Stack

Local only. No hosted services. **Runs on port 3002** — 3000 and 3001 are
Jordan's other projects.

```
next            14.2.15
react           18.3.1
react-dom       18.3.1
typescript      5.x
tailwindcss     3.x
motion          13.x        // approved — the one animation dependency
```

Dev-only, pre-approved: `@playwright/test`, `@axe-core/cli`.
**Everything else requires asking Jordan first.**

**No CMS.** Content lives in typed local files under `content/pages/`, read
through `lib/content.ts` — that indirection is deliberate, so a CMS swap later
is one file rather than a rewrite. Do not install `sanity` or `next-sanity`;
creating a cloud project is forbidden.

App Router. TypeScript strict. Montserrat via `next/font/google`.

**Page architecture:** most pages render through `components/StandardPage.tsx`
(a section library) or `components/VehiclePage.tsx`. Adding a page usually
means adding typed content, not writing a new page component. Look before you
build.

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

Established patterns already in the build — reuse them, don't invent
alternatives: eyebrow + short ember rule → big heading → intro; credential
chips; two-path router cards; navy stat band; card grids with hook + 3
bullets; list-style service rows; numbered process steps; FAQ accordions;
empty-state panels; navy closing CTA.

- Diagonal photo masks (hero, testimonial panels)
- Angled wedge transitions between color fields, 2px Ember hairline on the cut
- 4-point star grid as low-opacity texture over solid fields
- **Never a flat white background above the fold** — explicit client requirement

**Motion:** reveal, never decoration. The audience is government procurement
officers and university CFOs — this should feel expensive and quiet, not like
a showreel. Transitions ≤400ms, `ease-out`, 12–16px translate, 60–80ms
sibling stagger.

---

## Content integrity — the highest-stakes rule here

This is a real company. Fabricating anything about them would actively damage
the pitch. A design tool once wrote a fake testimonial into this project
("eighteen months later / CIO, Larger Public Transit Authority"); it was
caught and replaced with PTG's own anonymized quote. Don't be the next
instance.

**Never invent:** leadership bios, case studies, testimonials or their
attributions, event details, contract numbers, headcount, customer names,
metrics.

**Do not write marketing copy.** Copy comes from `PTG-SITE-COPY.md` or the
client's deck. If a slot has no copy, use a clearly-marked placeholder and log
it in `_handoff/FOR-RIDGE.md`.

**Do not fact-check PTG's own marketing claims.** Standing ruling from Jordan,
2026-08-05: *"If they claim to be the largest in the US in any of the
documentation that they have given us, then we stick with it."* Their
published claims run as written. `content/verification/VERIFY.md` on the Ridge
side is internal only — never a deliverable, never referenced on the site,
never mentioned in a handover.

The six contract vehicle numbers in `content/pages/vehicles.ts` are verified
against the issuing authorities and marked `verified: true`. Don't change a
number without Jordan.

---

## Quality gates

Nothing is "done" that fails these. Run them, don't assume.

1. `npm run typecheck` clean
2. `axe-core` — **zero** violations
3. Exactly one `<h1>` per page, heading order unbroken
4. **All content server-rendered.** The page must be fully readable and
   navigable with JavaScript disabled. Motion and counters are enhancement
   only — a stat that animates from 0 has its real value in the HTML.
5. `prefers-reduced-motion: reduce` honored on every animation
6. Visible focus states everywhere, keyboard-complete
7. Real `alt` text on every image, never a filename
8. Every SVG has a `viewBox` — without one it renders at authored size and
   crops. This has already bitten this project once.

**Why gates 2 and 7 matter here:** PTG's live site has no `<h1>` on 33 of 39
pages and ships `alt="_edited.png"` on every logo, while their own Texas DIR
contract scope sells *"website content accessibility compliance."* The pitch
says we fixed that, so it has to be true.

---

## Working style

**Prefer reliable over clever, and presume silent failure.** Every breakage on
this project traced back to a technique that fails quietly rather than
loudly. If there's a boring way that obviously works, take it.

**Don't verify small changes after making them.** For a small, self-contained
edit (a color, a layout tweak, a logo swap, one component), make it and tell
Jordan it's done — he'll look. Skip the screenshot/curl round-trip. Run the
full verify cycle (browser at 390/768/1440, `typecheck`, a11y) only for a
**big set of changes** or something with real correctness risk: a data-layer
change, motion logic, a whole page.

**Say what you didn't do.** If you skipped something, guessed at something, or
left a placeholder, say so plainly in your summary and log it. Silent gaps are
worse than known ones.

---

## Subagents

In `.claude/agents/`. Use them.

| Agent | When |
|---|---|
| `component-builder` | One component per invocation. **Fan out — 5 in parallel is fine**, separate files. |
| `page-assembler` | Composes components into a page. **Never parallel with itself.** |
| `visual-qa` | After assembly. Screenshots localhost at 390/768/1440 against the spec. |
| `a11y-auditor` | After visual-qa. axe, keyboard, focus, contrast, reduced-motion. |
| `copy-porter` | Copy deck → typed content. High volume, low judgment. |

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

## Known open items

Don't rediscover these. Don't fix them silently either — they're tracked.

- **Hosting is unsolved and is the one hard blocker to launch.** Jordan's to
  solve. Not yours. Don't propose a host, don't scaffold one.
- **Four of ten named customers have no logo file** and render as text: South
  Texas College, Lee College, Tarrant Regional Water District, Lakehaven Water
  & Sewer District. Six exist in `public/logos/customers/`. This is an asset
  request to PTG, not something to fabricate around.
- **`/privacy` is a placeholder.** Real policy has to come from PTG.
- **No client-approved leadership headshots or bios.** Placeholders only.
- **Images are not WebP.** Known, deferred.
- **Whether all ten named customers may be listed publicly is unconfirmed.**

---

## Things that will trip you up

- **`public/ptg-logo.svg` and `ptg-logo-mono.svg` exist now.** Older docs say
  there is no vector logo — that's stale. Use these.
- **`~/Sites/ptg-proposal`** is the Nov 2025 Pragma-branded proposal deck.
  Historical reference only — don't lift from it, don't carry Pragma assets.
- **Client IA typo we're correcting:** "Our Leadeship" → "Our Leadership".
- **The Implementation page ships only 2 of 3 delivery approaches.** PTG's own
  deck labels the third "PTG (Need a Name)". Do not name it for them.

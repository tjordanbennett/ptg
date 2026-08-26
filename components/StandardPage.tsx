import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Crumb, Cta, PageHeroData, Section, SiteSettings, StandardPage } from "@/content/types";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { ParallaxStars } from "@/components/ParallaxStars";
import { EyebrowBar } from "@/components/EyebrowBar";
import { ApplicationForm } from "@/components/ApplicationForm";
import { ClosingCTA } from "@/components/ClosingCTA";
import { RoleList } from "@/components/RoleList";
import { AngleField } from "@/components/AngleField";

/**
 * StandardPageView — one renderer for every interior page (services, industries,
 * partners, about, resources…). A page is authored as data: a dark breadcrumb
 * hero + an ordered list of section blocks. This maps each block to the design
 * pattern it implies, matching the homepage / How-to-Buy visual language
 * (navy + blue bands, star texture, ember hairline, Vivid-Leaf accents,
 * scroll reveals and the shared hover states).
 */

const STAR_BLUE =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z%22 fill=%22%230034A0%22/%3E%3C/svg%3E')";
const STAR_NAVY =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 13 40 34 61 37 40 40 37 61 34 40 13 37 34 34Z%22 fill=%22%23021F43%22/%3E%3C/svg%3E')";
const HAIRLINE = "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)";

const CONTAINER = { maxWidth: 1320, margin: "0 auto", padding: "clamp(56px,6vw,96px) clamp(20px,4vw,48px)" } as const;

/* ── small parts ─────────────────────────────────────────────── */

function Arrow({ size = 7 }: { size?: number }) {
  return (
    <span aria-hidden="true" className="lnk-arrow">
      <span style={{ display: "block", width: size, height: size, borderTop: "2px solid currentColor", borderRight: "2px solid currentColor", transform: "rotate(45deg)" }} />
    </span>
  );
}

function Diamond({ color = "#EB4900", size = 8, mt = 7 }: { color?: string; size?: number; mt?: number }) {
  return <span aria-hidden="true" style={{ flex: "0 0 auto", width: size, height: size, background: color, transform: "rotate(45deg)", marginTop: mt, display: "block" }} />;
}

function Check({ color = "#0034A0" }: { color?: string }) {
  return (
    <span aria-hidden="true" style={{ flex: "0 0 auto", width: 17, height: 17, marginTop: 3, display: "block", position: "relative" }}>
      <span style={{ position: "absolute", left: 2, top: 8, width: 5, height: 2, background: color, transform: "rotate(45deg)", transformOrigin: "left" }} />
      <span style={{ position: "absolute", left: 4, top: 11, width: 11, height: 2, background: color, transform: "rotate(-52deg)", transformOrigin: "left" }} />
    </span>
  );
}

function SectionHeader({ eyebrow, heading, intro, dark = false, maxWidth = 640 }: { eyebrow?: string; heading?: string; intro?: string; dark?: boolean; maxWidth?: number }) {
  if (!eyebrow && !heading && !intro) return null;
  return (
    <Reveal as="div" style={{ maxWidth, marginBottom: "clamp(30px,3.6vw,50px)" }}>
      {eyebrow ? <EyebrowBar label={eyebrow} dark={dark} /> : null}
      {heading ? <h2 style={{ margin: intro ? "0 0 16px" : 0, fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance", color: dark ? "#FFFFFF" : "#021F43" }}>{heading}</h2> : null}
      {intro ? <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,18.5px)", lineHeight: 1.65, color: dark ? "#D5E4F5" : "#334155", textWrap: "balance" }}>{intro}</p> : null}
    </Reveal>
  );
}

/* ── hero ────────────────────────────────────────────────────── */

/**
 * Shared for every interior page INCLUDING the bespoke ones. The procurement
 * page kept its own copy of this markup and drifted twice — it missed the
 * breadcrumb-contrast fix and the headline/copy split — so it now imports this.
 */
export function PageHero({ hero, breadcrumbs }: { hero: PageHeroData; breadcrumbs: Crumb[] }) {
  return (
    <section aria-labelledby="hero-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
      {/* A page can opt into a photographic hero instead of the star field. Only
          Careers does today: that page needs to feel human, and the star texture
          reads corporate. The photo carries its own alt text from content. */}
      {hero.image ? (
        <>
          <Image src={hero.image.src} alt={hero.image.alt} fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "72% 42%" }} />
          {/* Legibility: copy sits left, so the wash is heaviest there and the
              band still settles into navy at the bottom edge. */}
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(2,31,67,.94) 0%, rgba(2,31,67,.82) 38%, rgba(2,31,67,.42) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: "auto 0 0 0", height: 120, background: "linear-gradient(to bottom, transparent, rgba(2,31,67,.85))" }} />
        </>
      ) : (
        <>
          <ParallaxStars amount={70} offset={["start start", "end start"]} style={{ backgroundImage: STAR_BLUE, backgroundSize: "74px 74px", opacity: 0.5, WebkitMaskImage: "linear-gradient(115deg, transparent 44%, #000 100%)", maskImage: "linear-gradient(115deg, transparent 44%, #000 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, width: "48%", height: "100%", background: "linear-gradient(210deg, rgba(0,52,160,.42), rgba(2,31,67,0) 60%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 55%)", maskImage: "linear-gradient(to right, transparent 0%, #000 55%)" }} />
        </>
      )}
      <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 4, background: HAIRLINE }} />
      <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(20px,2.4vw,28px) clamp(20px,4vw,48px) clamp(56px,6vw,88px)" }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: "clamp(30px,4vw,50px)" }}>
          <ol style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", fontSize: 13, fontWeight: 600 }}>
            {breadcrumbs.map((c, i) => (
              <li key={c.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {i > 0 ? <span aria-hidden="true" style={{ color: "#7C9BBA" }}>/</span> : null}
                {c.href ? (
                  <Link href={c.href} className="hov-footerlink" style={{ color: "#80CEFF" }}>{c.label}</Link>
                ) : (
                  <span style={{ color: "#C9D8E8" }}>{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {/* Headline LEFT, supporting copy RIGHT — not stacked.
            Stacking a 3-line headline above a 5-line paragraph in one narrow
            column was what made these heroes read as a wall, while the other
            half of the row sat empty. Splitting them roughly halves the
            vertical stack and puts the empty space to work. The headline column
            is the wider of the two so the h1 breaks on 2 lines, not 3.
            Pages with no supporting copy fall back to a single column.
            Centred, not bottom-aligned: the two columns are different heights on
            every page, so `end` left the headline sitting low against a
            paragraph that started high. */}
        {(() => {
          const hasSide = Boolean(hero.body || hero.tagline || hero.bullets);
          return (
            <div style={{ display: "grid", gridTemplateColumns: hasSide ? "minmax(0,1.15fr) minmax(0,1fr)" : "1fr", gap: "clamp(26px,3.4vw,56px)", alignItems: "center" }} className={hasSide ? "ptg-hero-split" : undefined}>
              <div>
                <EyebrowBar label={hero.eyebrow} dark mb={20} />
                <h1 id="hero-h" style={{ margin: 0, fontSize: "clamp(29px,3.4vw,46px)", fontWeight: 800, lineHeight: 1.09, letterSpacing: "-0.028em", textWrap: "balance" }}>{hero.headline}</h1>
              </div>
              {hasSide ? (
                <div>
                  {hero.body ? <p style={{ margin: hero.tagline || hero.bullets ? "0 0 18px" : 0, fontSize: "clamp(16.5px,1.3vw,18.5px)", lineHeight: 1.65, color: "#DDE6F0", maxWidth: "46ch" }}>{hero.body}</p> : null}
                  {hero.tagline ? <p style={{ margin: hero.bullets ? "0 0 18px" : 0, fontSize: "clamp(15.5px,1.2vw,17.5px)", fontWeight: 700, letterSpacing: "-0.01em", color: "#80CEFF" }}>{hero.tagline}</p> : null}
                  {hero.bullets ? (
                    <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {hero.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                          <Diamond />
                          <span style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.5, color: "#FFFFFF" }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })()}
      </div>
    </section>
  );
}

/* ── light-section shell ─────────────────────────────────────── */

function Light({ bg, id, children }: { bg: "white" | "offwhite"; id?: string; children: ReactNode }) {
  return (
    <section id={id} style={{ background: bg === "offwhite" ? "#F0F2F4" : "#FFFFFF", scrollMarginTop: 90 }}>
      <div style={CONTAINER}>{children}</div>
    </section>
  );
}

/* ── section renderer ────────────────────────────────────────── */

/**
 * The colour a section actually paints. The shell needs this so the closing
 * CTA's wedge is drawn in the colour of the band directly above it — and it has
 * to be ONE definition, because `faq` opts out of the light alternation and a
 * second copy of that rule in the shell is exactly what silently drifts.
 */
function sectionBg(s: Section, alt: "white" | "offwhite"): string {
  switch (s.kind) {
    case "steps":
      return s.band === "navy" ? "#021F43" : "#0034A0";
    case "stats":
      return "#021F43";
    case "testimonial":
      return "#FFFFFF";
    case "cta":
      return "#021F43";
    default:
      return resolveLight(s, alt) === "offwhite" ? "#F0F2F4" : "#FFFFFF";
  }
}

/** Which of the two light tints a light section lands on. */
function resolveLight(s: Section, alt: "white" | "offwhite"): "white" | "offwhite" {
  if ("bg" in s && s.bg) return s.bg;
  if (s.kind === "faq") return "offwhite"; // reads as a distinct block, always
  return alt;
}

/**
 * StickyHeader — section header pinned on the left while a taller content
 * column scrolls past on the right, releasing at the end of the section.
 *
 * Only worth using where the right side is a LIST that reads fine at ~55% width.
 * Card and feature grids are deliberately NOT converted: squeezing a 3-up grid
 * into a narrower column costs more than the effect gains.
 *
 * `align-items: start` is load-bearing — a stretched grid item fills the row and
 * has nowhere to stick. The sticky offset and the sub-900px opt-out live in
 * `.ptg-sticky-col` (globals.css).
 */
function StickyHeader({
  eyebrow,
  heading,
  intro,
  cta,
  children,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  cta?: Cta;
  children: ReactNode;
}) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))", gap: "clamp(28px,4vw,64px)", alignItems: "start" }}>
      <div className="ptg-sticky-col">
        {eyebrow ? <EyebrowBar label={eyebrow} /> : null}
        {heading ? <h2 style={{ margin: intro || cta ? "0 0 18px" : 0, fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance", maxWidth: "16ch" }}>{heading}</h2> : null}
        {intro ? <p style={{ margin: cta ? "0 0 24px" : 0, fontSize: "clamp(16px,1.25vw,17.5px)", lineHeight: 1.65, color: "#334155", maxWidth: "42ch" }}>{intro}</p> : null}
        {cta ? <Link href={cta.href} className="hov-cta-blue hov-move cta" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>{cta.label} <Arrow /></Link> : null}
      </div>
      <div>{children}</div>
    </div>
  );
}

function renderSection(s: Section, key: number, bg: "white" | "offwhite", from = "#FFFFFF"): ReactNode {
  switch (s.kind) {
    case "prose":
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <Reveal as="div" style={{ maxWidth: s.maxWidth ?? 820 }}>
            {s.eyebrow ? <EyebrowBar label={s.eyebrow} /> : null}
            {s.heading ? <h2 style={{ margin: "0 0 20px", fontSize: "clamp(25px,2.7vw,36px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.026em", textWrap: "balance" }}>{s.heading}</h2> : null}
            {s.body.map((p, i) => (
              <p key={i} style={{ margin: i === s.body.length - 1 ? 0 : "0 0 20px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", textWrap: "balance" }}>{p}</p>
            ))}
          </Reveal>
        </Light>
      );

    case "cards": {
      const cols = s.columns ?? 3;
      const accent = s.accent === "ember" ? "#EB4900" : "#0034A0";
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} />
          <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${cols === 2 ? 320 : 288}px,100%),1fr))`, gap: "clamp(18px,2vw,26px)" }}>
            {s.cards.map((c, i) => (
              <Reveal as="article" key={c.title} delay={i * 0.05} className="hov-card" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 6, padding: "clamp(24px,2.6vw,32px)", display: "flex", flexDirection: "column" }}>
                <div aria-hidden="true" style={{ width: 34, height: 3, background: accent, marginBottom: 18 }} />
                <h3 style={{ margin: "0 0 10px", fontSize: "clamp(18px,1.6vw,22px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.018em" }}>
                  {c.href ? (
                    <Link href={c.href} className="hov-cardlink" style={{ color: "inherit", textDecoration: "none" }}>
                      {c.title}
                    </Link>
                  ) : (
                    c.title
                  )}
                </h3>
                {c.hook ? <p style={{ margin: c.bullets || c.href ? "0 0 16px" : 0, fontSize: 16.5, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{c.hook}</p> : null}
                {c.bullets ? (
                  <ul style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: c.href ? 18 : 0, marginTop: c.href ? 0 : "auto" }}>
                    {c.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, fontWeight: 600, lineHeight: 1.45, color: "#021F43" }}>
                        <Diamond color={accent} size={7} mt={6} /> {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hov-link"
                    style={{ marginTop: "auto", fontSize: 14, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0034A0", textDecoration: "none" }}
                  >
                    {c.linkLabel ?? "Learn more"} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : null}
              </Reveal>
            ))}
          </div>
        </Light>
      );
    }

    case "features": {
      const cols = s.columns ?? 2;
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} />
          <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${cols === 3 ? 320 : 440}px,100%),1fr))`, gap: "clamp(4px,0.6vw,8px) clamp(28px,4vw,64px)" }}>
            {s.items.map((it, i) => (
              <Reveal as="div" key={it.title} delay={i * 0.04} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "clamp(18px,2vw,24px) 0", borderTop: "1px solid #E5E7EB" }}>
                <Diamond color="#EB4900" size={9} mt={7} />
                <div>
                  <h3 style={{ margin: "0 0 6px", fontSize: "clamp(16.5px,1.4vw,19px)", fontWeight: 800, letterSpacing: "-0.015em", lineHeight: 1.25 }}>{it.title}</h3>
                  <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Light>
      );
    }

    case "steps": {
      const band = s.band ?? "blue";
      const bgcol = band === "navy" ? "#021F43" : "#0034A0";
      const bars = ["#80CEFF", "#B4FF00", "#EB4900", "#FFFFFF", "#80CEFF"];
      return (
        <section key={key} aria-label={s.heading} style={{ position: "relative", background: bgcol, color: "#FFFFFF", overflow: "hidden" }}>
          <ParallaxStars amount={40} style={{ backgroundImage: band === "navy" ? STAR_BLUE : STAR_NAVY, backgroundSize: "74px 74px", opacity: band === "navy" ? 0.5 : 0.42 }} />
          {band === "navy" ? <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, right: 0, height: 4, background: HAIRLINE }} /> : null}
          <div style={{ position: "relative", ...CONTAINER }}>
            <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} dark maxWidth={620} />
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px,100%),1fr))", gap: "clamp(14px,1.6vw,18px)" }}>
              {s.steps.map((st, i) => (
                <Reveal as="li" key={st.num} delay={i * 0.05} className="hov-step" style={{ background: bgcol, padding: "clamp(24px,2.6vw,32px)", borderRadius: 6 }}>
                  <div aria-hidden="true" style={{ height: 3, width: "100%", background: bars[i % bars.length], marginBottom: 22 }} />
                  <p style={{ margin: "0 0 14px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, letterSpacing: ".1em", color: "#80CEFF" }}>{st.num}</p>
                  <h3 style={{ margin: "0 0 12px", fontSize: "clamp(18px,1.65vw,23px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{st.name}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#D5E4F5", textWrap: "balance" }}>{st.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      );
    }

    case "tags": {
      const cols = s.columns ?? 3;
      if (s.variant === "values") {
        // Two columns: the heading pins on the left while the values scroll past
        // on the right, releasing at the end of the section. `align-items:
        // start` is load-bearing — a stretched grid item fills the row and has
        // nowhere to stick.
        return (
          <Light key={key} bg={s.bg ?? bg}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px,100%),1fr))", gap: "clamp(28px,4vw,72px)", alignItems: "start" }}>
              <div className="ptg-sticky-col">
                {s.eyebrow ? <EyebrowBar label={s.eyebrow} /> : null}
                {s.heading ? <h2 style={{ margin: 0, fontSize: "clamp(28px,3.2vw,46px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", textWrap: "balance", maxWidth: "14ch" }}>{s.heading}</h2> : null}
                {s.intro ? <p style={{ margin: "18px 0 0", fontSize: "clamp(16.5px,1.3vw,18.5px)", lineHeight: 1.65, color: "#334155", maxWidth: "40ch" }}>{s.intro}</p> : null}
              </div>
              {/* Soft tinted panel rather than a saturated slab — this page
                  should read inviting. Values keep regular weight so they stay
                  a quieter voice than the 800 heading beside them. */}
              <ul style={{ background: "rgba(0,52,160,.06)", border: "1px solid rgba(0,52,160,.10)", borderRadius: 10, padding: "clamp(10px,1.4vw,20px) clamp(24px,3vw,44px)" }}>
                {s.items.map((t, i) => (
                  <Reveal
                    as="li"
                    key={t}
                    delay={i * 0.06}
                    style={{
                      padding: "clamp(20px,2.2vw,30px) 0",
                      borderTop: i === 0 ? undefined : "1px solid rgba(2,31,67,.12)",
                      fontSize: "clamp(23px,2.5vw,34px)",
                      fontWeight: 400,
                      lineHeight: 1.25,
                      letterSpacing: "-0.022em",
                      color: "#021F43",
                    }}
                  >
                    {t}
                  </Reveal>
                ))}
              </ul>
            </div>
          </Light>
        );
      }
      if (s.variant === "chip") {
        return (
          <Light key={key} bg={s.bg ?? bg}>
            <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} />
            <Reveal as="ul" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {s.items.map((t) => (
                <li key={t} style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", color: "#021F43", background: "#FFFFFF", border: "1px solid #E5E7EB", padding: "11px 18px", borderRadius: 4 }}>{t}</li>
              ))}
            </Reveal>
          </Light>
        );
      }
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} />
          <ul style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${cols === 4 ? 220 : cols === 3 ? 280 : 340}px,100%),1fr))`, gap: "clamp(2px,0.5vw,6px) clamp(24px,3vw,44px)" }}>
            {s.items.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 0.03} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "13px 0", borderTop: "1px solid #E5E7EB", fontSize: 15.5, fontWeight: 600, lineHeight: 1.45, color: "#021F43" }}>
                <Diamond color="#0034A0" size={7} mt={6} /> {t}
              </Reveal>
            ))}
          </ul>
        </Light>
      );
    }

    case "outcomes":
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} />
          <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))", gap: "clamp(4px,0.6vw,10px) clamp(28px,4vw,56px)" }}>
            {s.items.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 0.03} style={{ display: "flex", gap: 13, alignItems: "flex-start", padding: "14px 0", borderBottom: "1px solid #E5E7EB", fontSize: 16, lineHeight: 1.5, color: "#334155" }}>
                <Check /> {t}
              </Reveal>
            ))}
          </ul>
        </Light>
      );

    case "pullQuote":
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <Reveal as="div" style={{ maxWidth: 900, borderLeft: "4px solid #EB4900", paddingLeft: "clamp(22px,3vw,40px)" }}>
            <p style={{ margin: 0, fontSize: "clamp(23px,2.6vw,35px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.022em", color: "#021F43", textWrap: "balance" }}>{s.text}</p>
            {s.body?.map((p, i) => (
              <p
                key={i}
                style={{
                  margin: i === 0 ? "clamp(20px,2.2vw,28px) 0 0" : "16px 0 0",
                  maxWidth: "68ch",
                  fontSize: "clamp(16.5px,1.3vw,19px)",
                  lineHeight: 1.65,
                  color: "#334155",
                  textWrap: "balance",
                }}
              >
                {p}
              </p>
            ))}
          </Reveal>
        </Light>
      );

    case "testimonial":
      return (
        <section key={key} aria-label="Testimonial" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,48px)", textAlign: "center" }}>
            <Reveal as="div">
              <div aria-hidden="true" style={{ width: 44, height: 44, margin: "0 auto 30px", background: "#B4FF00", transform: "rotate(45deg)" }} />
              <blockquote style={{ margin: 0 }} data-unverified={s.unverified ? "" : undefined}>
                <p style={{ margin: "0 0 28px", fontSize: "clamp(20px,2.2vw,30px)", fontWeight: 600, lineHeight: 1.36, letterSpacing: "-0.018em", color: "#021F43", textWrap: "balance" }}>&ldquo;{s.quote}&rdquo;</p>
                <footer style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#334155" }}>{s.attribution}</footer>
              </blockquote>
            </Reveal>
          </div>
        </section>
      );

    case "stats":
      return (
        <section key={key} style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(128,206,255,.18) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, right: 0, height: 4, background: HAIRLINE }} />
          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(44px,5vw,72px) clamp(20px,4vw,48px)" }}>
            {s.eyebrow ? <Reveal as="div" style={{ marginBottom: "clamp(26px,3vw,40px)" }}><EyebrowBar label={s.eyebrow} dark /></Reveal> : null}
            {/* No bracketing rules: the band already reads as its own thing — dotted
                texture, and the gradient hairline separating it from the section
                above. The rules were a third separator doing the same job.
                Row-gap only, so stacked stats still breathe on mobile while the
                single row is unaffected. */}
            <Reveal as="div" className="ptg-statrow" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px,100%),1fr))", gap: "clamp(26px,3vw,38px) 0" }}>
              {s.items.map((it, i) => {
                // First item flush to the left end of the rules, last flush to
                // the right, everything between centred. Left-aligning every
                // cell left the middle and right stats floating at the 1/3 and
                // 2/3 marks instead of reading against the rules that bracket
                // them. Alignment is on the FLEX BOX, not just text-align, or
                // the label's 26ch measure keeps its own left edge and the
                // block stays visually off-centre.
                const last = i === s.items.length - 1;
                const align = i === 0 ? "flex-start" : last ? "flex-end" : "center";
                const textAlign = (i === 0 ? "left" : last ? "right" : "center") as "left" | "right" | "center";
                const pad = "clamp(14px,2vw,26px)";
                return (
                  <div
                    key={it.label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: align,
                      textAlign,

                      paddingLeft: i === 0 ? 0 : pad,
                      paddingRight: last ? 0 : pad,
                    }}
                  >
                    <p style={{ margin: "0 0 8px", fontSize: "clamp(30px,3.7vw,52px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em", color: i === 1 ? "#B4FF00" : i === 2 ? "#80CEFF" : "#FFFFFF" }}>{it.value}</p>
                    <p style={{ margin: 0, fontSize: "clamp(13px,1.05vw,15px)", fontWeight: 600, lineHeight: 1.4, color: "#C9D8E8", maxWidth: "26ch", textWrap: "balance" }}>{it.label}</p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>
      );

    case "customers":
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <StickyHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px,100%),1fr))", gap: "clamp(20px,2.5vw,32px)" }}>
            {s.groups.map((g, gi) => (
              <Reveal as="div" key={g.title} delay={gi * 0.06} data-unverified={s.unverified ? "" : undefined}>
                <p style={{ margin: "0 0 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#0034A0" }}>{g.title}</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E5E7EB", border: "1px solid #E5E7EB", borderRadius: 6, overflow: "hidden" }}>
                  {g.names.map((n) => (
                    <li key={n} style={{ background: "#FFFFFF", padding: "15px 18px", fontSize: 15.5, fontWeight: 700, letterSpacing: "-0.01em", color: "#021F43" }}>{n}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          </StickyHeader>
        </Light>
      );

    case "faq":
      return (
        <Light key={key} bg={bg}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))", gap: "clamp(32px,4vw,64px)", alignItems: "start" }}>
            <Reveal as="div" className="ptg-sticky-col">
              {s.eyebrow ? <EyebrowBar label={s.eyebrow} /> : null}
              <h2 style={{ margin: "0 0 22px", fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{s.heading ?? "Common questions"}</h2>
              {s.intro ? <p style={{ margin: "0 0 26px", fontSize: 16.5, lineHeight: 1.65, color: "#334155", maxWidth: "58ch", textWrap: "balance" }}>{s.intro}</p> : null}
              {s.cta ? <Link href={s.cta.href} className="hov-cta-blue hov-move cta" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>{s.cta.label} <Arrow /></Link> : null}
            </Reveal>
            <FaqAccordion items={s.items} />
          </div>
        </Light>
      );

    case "people":
      return (
        <Light key={key} bg={s.bg ?? bg}>
          <StickyHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px,100%),1fr))", gap: "clamp(16px,2vw,22px)" }}>
            {s.people.map((pn, i) => (
              <Reveal as="article" key={pn.name} delay={i * 0.04} className="hov-card" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 6, padding: "clamp(22px,2.4vw,28px)", display: "flex", flexDirection: "column", gap: 4 }}>
                <div aria-hidden="true" style={{ width: 46, height: 46, marginBottom: 14, borderRadius: 6, background: "#021F43", display: "grid", placeItems: "center" }}>
                  <span style={{ fontSize: 17, fontWeight: 800, color: "#80CEFF", letterSpacing: "-0.01em" }}>{pn.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                </div>
                <h3 style={{ margin: 0, fontSize: "clamp(17px,1.5vw,20px)", fontWeight: 800, letterSpacing: "-0.018em" }}>{pn.name}</h3>
                <p style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: pn.unverifiedRole ? "#94A3B8" : "#0034A0" }} data-unverified={pn.unverifiedRole ? "" : undefined}>{pn.title}</p>
                <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.5, color: "#475569" }} data-unverified="">Bio to come from PTG.</p>
              </Reveal>
            ))}
          </div>
          {s.note ? <p style={{ margin: "clamp(22px,3vw,32px) 0 0", fontSize: 13.5, lineHeight: 1.6, color: "#475569", maxWidth: "70ch" }}>{s.note}</p> : null}
          </StickyHeader>
        </Light>
      );

    case "emptyState":
      return (
        <Light key={key} bg={s.bg ?? bg}>
          {(s.eyebrow || s.heading || s.sub) ? <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.sub} /> : null}
          {s.roles && s.roles.length > 0 ? (
            <Reveal as="div">
              <RoleList roles={s.roles} />
              {s.cta ? (
                <p style={{ margin: "18px 0 0", fontSize: 15, color: "#475569" }}>
                  Not seeing your role? <Link href={s.cta.href} className="hov-link" style={{ fontWeight: 700 }}>{s.cta.label}</Link>
                </p>
              ) : null}
            </Reveal>
          ) : (
          <Reveal as="div" style={{ border: "1px dashed #94A3B8", borderRadius: 8, padding: "clamp(34px,4.5vw,60px) clamp(24px,3vw,40px)", textAlign: "center", background: "#FFFFFF" }}>
            <div aria-hidden="true" style={{ width: 40, height: 40, margin: "0 auto 22px", background: "#B4FF00", transform: "rotate(45deg)", opacity: 0.9 }} />
            <p style={{ margin: "0 0 12px", fontSize: "clamp(18px,1.8vw,23px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#021F43" }}>{s.title}</p>
            <p style={{ margin: "0 auto 26px", fontSize: 17, lineHeight: 1.6, color: "#334155", maxWidth: "58ch", textWrap: "balance" }}>{s.body}</p>
            {s.cta ? <Link href={s.cta.href} className="hov-cta-navy hov-move cta" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>{s.cta.label} <Arrow /></Link> : null}
          </Reveal>
          )}
        </Light>
      );

    case "applicationForm":
      return (
        <Light key={key} bg={s.bg ?? bg} id={s.id ?? "apply"}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))", gap: "clamp(32px,4vw,64px)", alignItems: "start" }}>
            <SectionHeader eyebrow={s.eyebrow} heading={s.heading} intro={s.intro} maxWidth={460} />
            <Reveal as="div" delay={0.06} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 8, padding: "clamp(24px,3vw,40px)" }}>
              <ApplicationForm />
            </Reveal>
          </div>
        </Light>
      );

    case "cta":
      return <ClosingCTA key={key} eyebrow={s.eyebrow} heading={s.heading} body={s.body} ctas={s.ctas} from={from} />;
  }
}

/* ── page shell ──────────────────────────────────────────────── */

export function StandardPageView({ page, site }: { page: StandardPage; site: SiteSettings }) {
  // Alternate white / off-white across the plain light sections for rhythm;
  // full-bleed bands (steps, testimonial, stats, cta) don't consume a turn.
  let lightIndex = 0;
  let prevBg = "#FFFFFF";
  const isLight = (k: Section["kind"]) => !["steps", "testimonial", "stats", "cta"].includes(k);

  return (
    <>
      <SiteHeader site={site} currentLabel={page.currentLabel} />
      <main id="main">
        <PageHero hero={page.hero} breadcrumbs={page.breadcrumbs} />
        {page.sections.map((s, i) => {
          const alt: "white" | "offwhite" = isLight(s.kind) ? (lightIndex++ % 2 === 0 ? "white" : "offwhite") : "white";
          const resolved = isLight(s.kind) ? resolveLight(s, alt) : alt;
          // The closing CTA's wedge is painted in the colour of the band above,
          // so carry that forward as we walk the list.
          const from = prevBg;
          prevBg = sectionBg(s, alt);
          return renderSection(s, i, resolved, from);
        })}
      </main>
      <SiteFooter site={site} />
    </>
  );
}

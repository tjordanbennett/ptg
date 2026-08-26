import Link from "next/link";
import { getHomePage, getRoles, getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StatsTicker } from "@/components/StatsTicker";
import { Reveal } from "@/components/Reveal";
import { HomeHero } from "@/components/HomeHero";
import { IndustriesCarousel } from "@/components/IndustriesCarousel";
import { EyebrowBar } from "@/components/EyebrowBar";
import { PhotoLinkCard } from "@/components/PhotoLinkCard";
import { SectionWedge, WEDGE_H } from "@/components/SectionWedge";
import { ClosingCTA } from "@/components/ClosingCTA";
import { RoleList } from "@/components/RoleList";
import { AngleField } from "@/components/AngleField";

/** Matches public/_design/homepage.html. Section order, type scale, spacing and
 *  colour placement extracted verbatim from that file (the approved spec). */

const WRAP: React.CSSProperties = {
  maxWidth: 1320,
  margin: "0 auto",
  padding: "clamp(64px,7vw,104px) clamp(20px,4vw,48px)",
};
// Colour fields the homepage cuts between, so the wedges above and below a band
// always name the same value the band itself uses.
const NAVY = "#021F43";
const BLUE = "#0034A0";
const WHITE = "#FFFFFF";
const OFFWHITE = "#F0F2F4";

// Outer .lnk-arrow carries the hover slide (see globals.css); inner square holds
// the rotation, so the two transforms compose instead of overwriting.
function Arrow({ size = 7, w = 2, color = "currentColor" }: { size?: number; w?: number; color?: string }) {
  return (
    <span aria-hidden="true" className="lnk-arrow">
      <span style={{ width: size, height: size, borderTop: `${w}px solid ${color}`, borderRight: `${w}px solid ${color}`, transform: "rotate(45deg)", display: "block" }} />
    </span>
  );
}

export default async function HomePage() {
  const site = await getSiteSettings();
  const home = await getHomePage();
  const roles = await getRoles();
  const h = home;

  return (
    <>
      <SiteHeader site={site} />

      <main id="main">
        {/* ══ HERO ══ */}
        <HomeHero hero={h.hero} customers={h.customers} />

        {/* Flat, not angled: the hero ends in the horizontal customer logo strip,
            and a diagonal here sliced through it instead of closing it off. */}
        <SectionWedge from={NAVY} to={WHITE} slant="flat" />

        {/* ══ TWO PATHS ══ */}
        <section aria-labelledby="paths-h" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(48px,5vw,76px) clamp(20px,4vw,48px)" }}>
            <h2 id="paths-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Where would you like to start?</h2>
            <Reveal as="div" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))", gap: "clamp(20px,2.5vw,32px)" }}>
              {h.twoPaths.map((p) =>
                p.image ? (
                  <PhotoLinkCard key={p.heading} href={p.cta.href} image={p.image} kicker={p.eyebrow} title={p.heading} body={p.body} ctaLabel={p.cta.label} />
                ) : (
                  <Link key={p.heading} href={p.cta.href} className="hov-pathcard hov-move" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", aspectRatio: "1 / 1", padding: "clamp(28px,3vw,40px)", borderRadius: 6 }}>
                    <p style={{ margin: "0 0 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#EB4900" }}>{p.eyebrow}</p>
                    <p style={{ margin: "0 0 12px", fontSize: "clamp(19.5px,1.75vw,25px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "inherit" }}>{p.heading}</p>
                    <p style={{ margin: "0 0 20px", fontSize: 17, lineHeight: 1.6, color: "inherit", opacity: 0.82, maxWidth: "50ch", textWrap: "balance" }}>{p.body}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, fontWeight: 700, color: "inherit" }}>{p.cta.label} <Arrow /></span>
                  </Link>
                )
              )}
            </Reveal>
          </div>
        </section>

        <SectionWedge from={WHITE} to={NAVY} slant="left" />

        {/* ══ STATS ══ */}
        {/* The 4px navy→ember bar that used to sit on top of this section is gone:
            the wedge's Ember hairline now draws that line, on the angle. */}
        <section aria-labelledby="stats-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(128,206,255,.19) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <Reveal as="div" style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(58px,6vw,92px) clamp(20px,4vw,48px)" }}>
            <div style={{ maxWidth: 700, marginBottom: "clamp(38px,4vw,56px)" }}>
              <EyebrowBar label={h.stats.eyebrow} color="#80CEFF" />
              <h2 id="stats-h" style={{ margin: "0 0 16px", fontSize: "clamp(27px,2.9vw,40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.stats.heading}</h2>
              <p data-unverified="" style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#D5E4F5", textWrap: "balance" }}>{h.stats.credentialLine}</p>
            </div>
            <StatsTicker items={h.stats.items} />
          </Reveal>
        </section>

        <SectionWedge from={NAVY} to={WHITE} slant="left" />

        {/* ══ COOPERATIVE CONTRACTS ══ */}
        <section id="contracts" aria-labelledby="contracts-h" style={{ position: "relative", background: "#FFFFFF", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))", gap: "clamp(34px,4vw,64px)", alignItems: "start" }}>
              <Reveal as="div">
                <EyebrowBar label={h.contracts.eyebrow} />
                <h2 id="contracts-h" style={{ margin: "0 0 22px", fontSize: "clamp(27px,2.9vw,40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.contracts.heading}</h2>
                {h.contracts.body.map((para, i) => (
                  <p key={i} style={{ margin: i === h.contracts.body.length - 1 ? "0 0 30px" : "0 0 20px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "58ch", textWrap: "balance" }}>{para}</p>
                ))}
                <Link href={h.contracts.cta.href} className="hov-cta-blue hov-move cta" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>{h.contracts.cta.label} <Arrow /></Link>
              </Reveal>
              {/* Original two-column row — name left, contract number right —
                  on a navy panel instead of white. `gap: 1` over the container's
                  background is what draws the hairlines between rows, so the
                  container colour IS the divider colour. */}
              <Reveal as="ul" delay={0.08} style={{ display: "flex", flexDirection: "column", gap: 1, background: "#0E3565", border: "1px solid #0E3565", borderRadius: 6, overflow: "hidden" }}>
                {h.contracts.vehicles.map((v) => (
                  <li key={v.name} style={{ background: "#021F43" }}>
                    <Link href={h.contracts.cta.href} className="hov-vehrow" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, padding: "22px clamp(18px,2vw,26px)" }}>
                      <span style={{ fontSize: "clamp(16px,1.4vw,19px)", fontWeight: 800, letterSpacing: "-0.015em", color: "inherit" }}>{v.name}</span>
                      <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, fontWeight: 400, letterSpacing: ".02em", color: "#9FD3F5", textAlign: "right", whiteSpace: "nowrap" }}>{v.number}</span>
                    </Link>
                  </li>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ INDUSTRIES ══ */}
        <section id="industries" aria-labelledby="ind-h" style={{ background: "#F0F2F4", scrollMarginTop: 90, padding: "clamp(64px,7vw,104px) 0" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)" }}>
            <Reveal as="div" style={{ maxWidth: 640, marginBottom: "clamp(34px,4vw,52px)" }}>
              <EyebrowBar label={h.industries.eyebrow} />
              <h2 id="ind-h" style={{ margin: "0 0 18px", fontSize: "clamp(27px,2.9vw,40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.industries.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", textWrap: "balance" }}>{h.industries.intro}</p>
            </Reveal>
          </div>
          <IndustriesCarousel cards={h.industries.cards} />
        </section>

        {/* ══ SERVICES ══ */}
        <section id="services" aria-labelledby="svc-h" style={{ background: "#FFFFFF", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <Reveal as="div" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "clamp(30px,3.4vw,46px)" }}>
              <div style={{ maxWidth: 600 }}>
                <EyebrowBar label={h.services.eyebrow} />
                <h2 id="svc-h" style={{ margin: 0, fontSize: "clamp(27px,2.9vw,40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.services.heading}</h2>
              </div>
            </Reveal>
            <ul style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E5E7EB", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
              {h.services.items.map((svc, i) => (
                <Reveal as="li" key={svc.href} delay={i * 0.05} style={{ background: "#FFFFFF" }}>
                  <Link href={svc.href} className="hov-svcrow hov-move" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,3vw,44px)", alignItems: "center", padding: "clamp(24px,2.8vw,36px) clamp(6px,1.5vw,20px)" }}>
                    <div style={{ flex: "1 1 260px" }}>
                      <h3 style={{ margin: 0, fontSize: "clamp(20px,1.9vw,26px)", fontWeight: 800, lineHeight: 1.14, letterSpacing: "-0.022em", color: "inherit" }}>{svc.name}</h3>
                    </div>
                    <p style={{ flex: "1 1 320px", margin: 0, fontSize: 17, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{svc.summary}</p>
                    <span aria-hidden="true" className="lnk-arrow" style={{ flex: "0 0 auto", marginLeft: "auto" }}>
                      <span style={{ display: "block", width: 9, height: 9, borderTop: "2px solid #0034A0", borderRight: "2px solid #0034A0", transform: "rotate(45deg)" }} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ══ DELIVERY JOURNEY ══ */}
        {/* Textured band between two flat white ones, so it owns BOTH wedges in
            overlay mode — a block wedge would repaint the cut in flat blue and
            slice the gradient off at a hard horizontal line. Vertical padding
            carries WEDGE_H on each side so the copy clears both cuts. */}
        <section aria-labelledby="journey-h" style={{ position: "relative", background: "#0034A0", color: "#FFFFFF", overflow: "hidden" }}>
          <AngleField id="journey-field" />
          <SectionWedge from={WHITE} to={BLUE} slant="right" overlay edge="top" />
          <SectionWedge from={BLUE} to={OFFWHITE} slant="right" overlay edge="bottom" />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: `calc(clamp(64px,7vw,100px) + ${WEDGE_H}) clamp(20px,4vw,48px)` }}>
            <Reveal as="div" style={{ maxWidth: 620, marginBottom: "clamp(34px,4vw,52px)" }}>
              <EyebrowBar label={h.journey.eyebrow} color="#80CEFF" />
              <h2 id="journey-h" style={{ margin: "0 0 16px", fontSize: "clamp(27px,2.9vw,40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.journey.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#D5E4F5", textWrap: "balance" }}>{h.journey.intro}</p>
            </Reveal>
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(238px,100%),1fr))", gap: "clamp(14px,1.6vw,18px)" }}>
              {h.journey.steps.map((step, i) => (
                <Reveal as="li" key={step.num} delay={i * 0.06} className="hov-step" style={{ background: "rgba(1,26,88,.42)", backdropFilter: "blur(3px)", WebkitBackdropFilter: "blur(3px)", padding: "clamp(24px,2.6vw,32px)", position: "relative", borderRadius: 6, overflow: "hidden" }}>
                  {/* Sheen rakes at the same angle as the field behind it, so the
                      card reads as glass lying on the gradient rather than a
                      panel pasted over it. */}
                  <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(114deg, rgba(255,255,255,.08) 0%, rgba(255,255,255,.02) 38%, rgba(255,255,255,0) 62%)", pointerEvents: "none" }} />
                  {/* Ghost numeral: the stage number is already in the label, so
                      this is decoration and stays out of the accessibility tree. */}
                  <span aria-hidden="true" style={{ position: "absolute", bottom: -20, right: 4, fontSize: "clamp(64px,6.4vw,94px)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.06em", color: "rgba(255,255,255,.07)", pointerEvents: "none", userSelect: "none" }}>{step.num.replace(/\D/g, "")}</span>
                  <div style={{ position: "relative" }}>
                    {/* Rail fills further at each stage — the four cards read as
                        one journey rather than four unrelated boxes. Colour is
                        the step's own, which carries the deploy/optimise split. */}
                    <div aria-hidden="true" style={{ position: "relative", height: 3, width: "100%", background: "rgba(255,255,255,.18)", marginBottom: 22 }}>
                      <div style={{ position: "absolute", inset: "0 auto 0 0", width: `${((i + 1) / h.journey.steps.length) * 100}%`, background: step.bar }} />
                    </div>
                    <p style={{ margin: "0 0 14px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, letterSpacing: ".1em", color: "#80CEFF" }}>{step.num}</p>
                    <h3 style={{ margin: "0 0 12px", fontSize: "clamp(19.5px,1.75vw,25px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{step.name}</h3>
                    <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#D5E4F5", textWrap: "balance" }}>{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            {/* Was its own white band between here and Careers — the smallest
                section on the page at 541px, and this band already had empty
                gradient below the cards. Folding it in trades a section break
                for proof at the moment the delivery claim is made, and gives
                the page one fewer subject change. */}
            <Reveal as="div" delay={0.12} style={{ marginTop: "clamp(40px,4.6vw,68px)", paddingTop: "clamp(34px,3.6vw,52px)", borderTop: "1px solid rgba(255,255,255,.16)", maxWidth: 880, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
              <h3 id="quote-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>What our customers say</h3>
              <div aria-hidden="true" style={{ width: 34, height: 34, margin: "0 auto 24px", background: "#B4FF00", transform: "rotate(45deg)" }} />
              <blockquote style={{ margin: 0 }} data-unverified={h.testimonial.placeholder ? "" : undefined}>
                <p style={{ margin: "0 0 22px", fontSize: "clamp(20px,2.1vw,29px)", fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.018em", color: "#FFFFFF", textWrap: "balance" }}>&ldquo;{h.testimonial.quote}&rdquo;</p>
                <footer style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#9FD3F5" }}>{h.testimonial.attribution}</footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ══ CAREERS ══ */}
        <section id="careers" aria-labelledby="careers-h" style={{ background: "#F0F2F4", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))", gap: "clamp(34px,4vw,64px)", alignItems: "center" }}>
              <Reveal as="div">
                <EyebrowBar label={h.careers.eyebrow} />
                <h2 id="careers-h" style={{ margin: "0 0 20px", fontSize: "clamp(27px,2.9vw,40px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.careers.heading}</h2>
                <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "58ch", textWrap: "balance" }}>{h.careers.body}</p>
              </Reveal>
              <Reveal as="div" delay={0.08} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 6, padding: "clamp(26px,3vw,40px)" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: "clamp(18px,1.6vw,22px)", fontWeight: 800, letterSpacing: "-0.018em" }}>{h.careers.openRoles.heading}</h3>
                <p style={{ margin: "0 0 24px", fontSize: 15, color: "#334155" }}>{h.careers.openRoles.sub}</p>
                {roles.length > 0 ? (
                  <>
                    <RoleList roles={roles} />
                    <p style={{ margin: "18px 0 0", fontSize: 15, color: "#475569" }}>
                      Not seeing your role? <Link href={h.careers.openRoles.cta.href} className="hov-link" style={{ fontWeight: 700 }}>{h.careers.openRoles.cta.label}</Link>
                    </p>
                  </>
                ) : (
                <div style={{ border: "1px dashed #94A3B8", borderRadius: 6, padding: "clamp(24px,3vw,34px)", textAlign: "center", background: "#F0F2F4" }}>
                  <p style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800, color: "#021F43" }}>{h.careers.openRoles.emptyTitle}</p>
                  <p style={{ margin: "0 auto 22px", fontSize: 16, lineHeight: 1.6, color: "#334155", maxWidth: "50ch", textWrap: "balance" }}>{h.careers.openRoles.emptyBody}</p>
                  <Link href={h.careers.openRoles.cta.href} className="hov-cta-navy cta" style={{ display: "inline-block" }}>{h.careers.openRoles.cta.label}</Link>
                </div>
                )}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ CLOSING CTA ══ */}
        <ClosingCTA
          from={OFFWHITE}
          eyebrow={h.closingCta.eyebrow}
          heading={h.closingCta.heading}
          body={h.closingCta.body}
          ctas={h.closingCta.ctas}
        />
      </main>

      <SiteFooter site={site} />
    </>
  );
}

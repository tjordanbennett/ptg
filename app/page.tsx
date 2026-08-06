import Image from "next/image";
import Link from "next/link";
import { getHomePage, getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StatsTicker } from "@/components/StatsTicker";
import { Reveal } from "@/components/Reveal";
import { ParallaxStars } from "@/components/ParallaxStars";
import { HomeHero } from "@/components/HomeHero";
import { IndustriesCarousel } from "@/components/IndustriesCarousel";

/** Matches public/_design/homepage.html. Section order, type scale, spacing and
 *  colour placement extracted verbatim from that file (the approved spec). */

const WRAP: React.CSSProperties = {
  maxWidth: 1320,
  margin: "0 auto",
  padding: "clamp(64px,7vw,104px) clamp(20px,4vw,48px)",
};
const JOURNEY_STAR =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 13 40 34 61 37 40 40 37 61 34 40 13 37 34 34Z%22 fill=%22%23021F43%22/%3E%3C/svg%3E')";

function EyebrowBar({ label, color = "#0034A0", size = 12, mb = 18 }: { label: string; color?: string; size?: number; mb?: number }) {
  return (
    <p style={{ margin: `0 0 ${mb}px`, display: "flex", alignItems: "center", gap: 12, fontSize: size, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color }}>
      <span aria-hidden="true" style={{ width: 30, height: 2, background: "#EB4900", display: "block" }} />
      {label}
    </p>
  );
}
// Outer .lnk-arrow carries the hover slide (see globals.css); inner square holds
// the rotation, so the two transforms compose instead of overwriting.
function Arrow({ size = 7, w = 2, color = "currentColor" }: { size?: number; w?: number; color?: string }) {
  return (
    <span aria-hidden="true" className="lnk-arrow">
      <span style={{ width: size, height: size, borderTop: `${w}px solid ${color}`, borderRight: `${w}px solid ${color}`, transform: "rotate(45deg)", display: "block" }} />
    </span>
  );
}
function Diamond({ color = "#EB4900", size = 7, mt = 6 }: { color?: string; size?: number; mt?: number }) {
  return <span aria-hidden="true" style={{ flex: "0 0 auto", width: size, height: size, background: color, transform: "rotate(45deg)", marginTop: mt, display: "block" }} />;
}

export default async function HomePage() {
  const site = await getSiteSettings();
  const home = await getHomePage();
  const h = home;

  return (
    <>
      <SiteHeader site={site} />

      <main id="main">
        {/* ══ HERO ══ */}
        <HomeHero hero={h.hero} customers={h.customers} />

        {/* ══ TWO PATHS ══ */}
        <section aria-labelledby="paths-h" style={{ background: "#FFFFFF", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(48px,5vw,76px) clamp(20px,4vw,48px)" }}>
            <h2 id="paths-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Where would you like to start?</h2>
            <Reveal as="div" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(20px,2.5vw,32px)" }}>
              {h.twoPaths.map((p) =>
                p.image ? (
                  <Link key={p.heading} href={p.cta.href} className="hov-pathphoto hov-move" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", aspectRatio: "1 / 1", padding: "clamp(28px,3vw,40px)", borderRadius: 3, overflow: "hidden", color: "#FFFFFF" }}>
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width:1040px) 50vw, 100vw" style={{ objectFit: "cover" }} />
                    {/* Progressive backdrop blur — masked so it fades in toward the bottom, under the colour gradient */}
                    <div aria-hidden="true" style={{ position: "absolute", inset: "auto 0 0 0", height: "62%", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", WebkitMaskImage: "linear-gradient(to top, #000 0%, #000 45%, transparent 100%)", maskImage: "linear-gradient(to top, #000 0%, #000 45%, transparent 100%)" }} />
                    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,31,67,.92) 0%, rgba(2,31,67,.55) 42%, rgba(2,31,67,.12) 68%, transparent 100%)" }} />
                    <div style={{ position: "relative" }}>
                      <p style={{ margin: "0 0 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#80CEFF" }}>{p.eyebrow}</p>
                      <p style={{ margin: "0 0 12px", fontSize: "clamp(23px,2.2vw,31px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>{p.heading}</p>
                      <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.85)", maxWidth: "44ch", textWrap: "balance" }}>{p.body}</p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, fontWeight: 700 }}>{p.cta.label} <Arrow /></span>
                    </div>
                  </Link>
                ) : (
                  <Link key={p.heading} href={p.cta.href} className="hov-pathcard hov-move" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", aspectRatio: "1 / 1", padding: "clamp(28px,3vw,40px)", borderRadius: 3 }}>
                    <p style={{ margin: "0 0 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#EB4900" }}>{p.eyebrow}</p>
                    <p style={{ margin: "0 0 12px", fontSize: "clamp(23px,2.2vw,31px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: "inherit" }}>{p.heading}</p>
                    <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.6, color: "inherit", opacity: 0.82, maxWidth: "44ch", textWrap: "balance" }}>{p.body}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, fontWeight: 700, color: "inherit" }}>{p.cta.label} <Arrow /></span>
                  </Link>
                )
              )}
            </Reveal>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section aria-labelledby="stats-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(128,206,255,.19) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, right: 0, height: 4, background: "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)" }} />
          <Reveal as="div" style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(58px,6vw,92px) clamp(20px,4vw,48px)" }}>
            <div style={{ maxWidth: 700, marginBottom: "clamp(38px,4vw,56px)" }}>
              <EyebrowBar label={h.stats.eyebrow} color="#80CEFF" />
              <h2 id="stats-h" style={{ margin: "0 0 16px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.stats.heading}</h2>
              <p data-unverified="" style={{ margin: "0 0 16px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#D5E4F5", textWrap: "balance" }}>{h.stats.credentialLine}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {h.stats.credentialChips.map((chip) => (
                  <span key={chip} style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#80CEFF", border: "1px solid rgba(128,206,255,.4)", padding: "7px 13px", borderRadius: 2 }}>{chip}</span>
                ))}
              </div>
            </div>
            <StatsTicker items={h.stats.items} />
          </Reveal>
        </section>

        {/* ══ COOPERATIVE CONTRACTS ══ */}
        <section id="contracts" aria-labelledby="contracts-h" style={{ position: "relative", background: "#FFFFFF", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(34px,4vw,64px)", alignItems: "start" }}>
              <Reveal as="div">
                <EyebrowBar label={h.contracts.eyebrow} />
                <h2 id="contracts-h" style={{ margin: "0 0 22px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.contracts.heading}</h2>
                {h.contracts.body.map((para, i) => (
                  <p key={i} style={{ margin: i === h.contracts.body.length - 1 ? "0 0 30px" : "0 0 20px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "52ch", textWrap: "balance" }}>{para}</p>
                ))}
                <Link href={h.contracts.cta.href} className="hov-cta-blue hov-move" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 15.5, fontWeight: 700, padding: "12px 26px", borderRadius: 3 }}>{h.contracts.cta.label} <Arrow /></Link>
              </Reveal>
              <Reveal as="ul" delay={0.08} style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E5E7EB", border: "1px solid #E5E7EB", borderRadius: 3, overflow: "hidden" }}>
                {h.contracts.vehicles.map((v) => (
                  <li key={v.name} style={{ background: "#FFFFFF" }}>
                    <Link href={h.contracts.cta.href} className="hov-vehrow" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 20, padding: "22px clamp(18px,2vw,26px)" }}>
                      <span style={{ fontSize: "clamp(16px,1.4vw,19px)", fontWeight: 800, letterSpacing: "-0.015em", color: "inherit" }}>{v.name}</span>
                      <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, fontWeight: 400, letterSpacing: ".02em", color: "#334155", textAlign: "right", whiteSpace: "nowrap" }}>{v.number}</span>
                    </Link>
                  </li>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ INDUSTRIES ══ */}
        <section id="industries" aria-labelledby="ind-h" style={{ background: "#F5F7F9", borderTop: "1px solid #E5E7EB", scrollMarginTop: 90, padding: "clamp(64px,7vw,104px) 0" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)" }}>
            <Reveal as="div" style={{ maxWidth: 640, marginBottom: "clamp(34px,4vw,52px)" }}>
              <EyebrowBar label={h.industries.eyebrow} />
              <h2 id="ind-h" style={{ margin: "0 0 18px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.industries.heading}</h2>
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
                <h2 id="svc-h" style={{ margin: 0, fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.services.heading}</h2>
              </div>
            </Reveal>
            <ul style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E5E7EB", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
              {h.services.items.map((svc, i) => (
                <Reveal as="li" key={svc.num} delay={i * 0.05} style={{ background: "#FFFFFF" }}>
                  <Link href={svc.href} className="hov-svcrow hov-move" style={{ display: "flex", flexWrap: "wrap", gap: "clamp(14px,3vw,44px)", alignItems: "center", padding: "clamp(24px,2.8vw,36px) clamp(6px,1.5vw,20px)" }}>
                    <div style={{ flex: "1 1 260px", display: "flex", gap: "clamp(14px,2vw,26px)", alignItems: "baseline" }}>
                      <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, color: "#94A3B8", flex: "0 0 auto" }}>{svc.num}</span>
                      <h3 style={{ margin: 0, fontSize: "clamp(21px,2.1vw,29px)", fontWeight: 800, lineHeight: 1.14, letterSpacing: "-0.022em", color: "inherit" }}>{svc.name}</h3>
                    </div>
                    <p style={{ flex: "1 1 320px", margin: 0, fontSize: 16, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{svc.summary}</p>
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
        <section aria-labelledby="journey-h" style={{ position: "relative", background: "#0034A0", color: "#FFFFFF", overflow: "hidden" }}>
          <ParallaxStars amount={44} style={{ backgroundImage: JOURNEY_STAR, backgroundSize: "74px 74px", opacity: 0.42 }} />
          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(64px,7vw,100px) clamp(20px,4vw,48px)" }}>
            <Reveal as="div" style={{ maxWidth: 620, marginBottom: "clamp(34px,4vw,52px)" }}>
              <EyebrowBar label={h.journey.eyebrow} color="#80CEFF" />
              <h2 id="journey-h" style={{ margin: "0 0 16px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.journey.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#D5E4F5", textWrap: "balance" }}>{h.journey.intro}</p>
            </Reveal>
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(238px,1fr))", gap: "clamp(14px,1.6vw,18px)" }}>
              {h.journey.steps.map((step, i) => (
                <Reveal as="li" key={step.num} delay={i * 0.06} className="hov-step" style={{ background: "#0034A0", padding: "clamp(24px,2.6vw,32px)", position: "relative", borderRadius: 3 }}>
                  <div aria-hidden="true" style={{ height: 3, width: "100%", background: step.bar, marginBottom: 22 }} />
                  <p style={{ margin: "0 0 14px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, letterSpacing: ".1em", color: "#80CEFF" }}>{step.num}</p>
                  <h3 style={{ margin: "0 0 12px", fontSize: "clamp(21px,1.9vw,27px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{step.name}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#D5E4F5", textWrap: "balance" }}>{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ══ TESTIMONIAL ══ */}
        <section aria-labelledby="quote-h" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "clamp(64px,7vw,110px) clamp(20px,4vw,48px)", textAlign: "center" }}>
            <h2 id="quote-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>What our customers say</h2>
            <Reveal as="div">
              <div aria-hidden="true" style={{ width: 44, height: 44, margin: "0 auto 30px", background: "#B4FF00", transform: "rotate(45deg)" }} />
              <blockquote style={{ margin: 0 }} data-unverified={h.testimonial.placeholder ? "" : undefined}>
                <p style={{ margin: "0 0 28px", fontSize: "clamp(22px,2.6vw,36px)", fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.018em", color: "#021F43", textWrap: "balance" }}>&ldquo;{h.testimonial.quote}&rdquo;</p>
                <footer style={{ fontSize: 14, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#334155" }}>{h.testimonial.attribution}</footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ══ CAREERS ══ */}
        <section id="careers" aria-labelledby="careers-h" style={{ background: "#F5F7F9", borderTop: "1px solid #E5E7EB", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(34px,4vw,64px)", alignItems: "center" }}>
              <Reveal as="div">
                <EyebrowBar label={h.careers.eyebrow} />
                <h2 id="careers-h" style={{ margin: "0 0 20px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.careers.heading}</h2>
                <p style={{ margin: "0 0 20px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "52ch", textWrap: "balance" }}>{h.careers.body}</p>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "0 0 30px" }}>
                  {h.careers.values.map((val) => (
                    <li key={val} style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "#021F43", background: "#FFFFFF", border: "1px solid #E5E7EB", padding: "10px 16px", borderRadius: 2 }}>{val}</li>
                  ))}
                </ul>
              </Reveal>
              <Reveal as="div" delay={0.08} style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 3, padding: "clamp(26px,3vw,40px)" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: "clamp(19px,1.7vw,23px)", fontWeight: 800, letterSpacing: "-0.018em" }}>{h.careers.openRoles.heading}</h3>
                <p style={{ margin: "0 0 24px", fontSize: 15, color: "#334155" }}>{h.careers.openRoles.sub}</p>
                <div style={{ border: "1px dashed #94A3B8", borderRadius: 3, padding: "clamp(24px,3vw,34px)", textAlign: "center", background: "#F5F7F9" }}>
                  <p style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800, color: "#021F43" }}>{h.careers.openRoles.emptyTitle}</p>
                  <p style={{ margin: "0 auto 22px", fontSize: 15, lineHeight: 1.6, color: "#334155", maxWidth: "38ch", textWrap: "balance" }}>{h.careers.openRoles.emptyBody}</p>
                  <Link href={h.careers.openRoles.cta.href} className="hov-cta-navy" style={{ display: "inline-block", fontSize: 14.5, fontWeight: 700, padding: "10px 22px", borderRadius: 3 }}>{h.careers.openRoles.cta.label}</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ CLOSING CTA ══ */}
        <section id="connect" aria-labelledby="cta-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden", scrollMarginTop: 78 }}>
          <Image src="/images/cta.png" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(2,31,67,.94) 0%, rgba(2,31,67,.72) 48%, rgba(2,31,67,.28) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 5, background: "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)" }} />
          <Reveal as="div" style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(70px,8vw,124px) clamp(20px,4vw,48px)" }}>
            <EyebrowBar label={h.closingCta.eyebrow} color="#80CEFF" mb={22} />
            <h2 id="cta-h" style={{ margin: "0 0 22px", fontSize: "clamp(32px,4.4vw,64px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.03em", maxWidth: "20ch", textWrap: "balance" }}>{h.closingCta.heading}</h2>
            <p style={{ margin: "0 0 36px", fontSize: "clamp(17px,1.4vw,21px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: "56ch", textWrap: "balance" }}>{h.closingCta.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Link href={h.closingCta.ctas[0].href} className="hov-cta-emberwhite" style={{ fontSize: 16, fontWeight: 700, padding: "13px 30px", borderRadius: 3 }}>{h.closingCta.ctas[0].label}</Link>
              <Link href={h.closingCta.ctas[1].href} className="hov-cta-glass" style={{ fontSize: 16, fontWeight: 700, padding: "13px 30px", borderRadius: 3 }}>{h.closingCta.ctas[1].label}</Link>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter site={site} />
    </>
  );
}

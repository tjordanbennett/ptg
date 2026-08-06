import Image from "next/image";
import Link from "next/link";
import { getHomePage, getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CustomerMarquee } from "@/components/CustomerMarquee";
import { StatsTicker } from "@/components/StatsTicker";
import { Reveal } from "@/components/Reveal";
import { ParallaxStars } from "@/components/ParallaxStars";

/** Matches public/_design/homepage.html. Section order, type scale, spacing and
 *  colour placement extracted verbatim from that file (the approved spec). */

const WRAP: React.CSSProperties = {
  maxWidth: 1320,
  margin: "0 auto",
  padding: "clamp(64px,7vw,104px) clamp(20px,4vw,48px)",
};
const HERO_STAR =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z%22 fill=%22%230034A0%22/%3E%3C/svg%3E')";
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
        <section aria-labelledby="hero-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <ParallaxStars amount={80} offset={["start start", "end start"]} style={{ backgroundImage: HERO_STAR, backgroundSize: "74px 74px", opacity: 0.5, WebkitMaskImage: "linear-gradient(115deg, transparent 42%, #000 100%)", maskImage: "linear-gradient(115deg, transparent 42%, #000 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: 0, bottom: 0, width: "46%", height: "100%", background: "linear-gradient(200deg, rgba(0,52,160,.42), rgba(2,31,67,0) 62%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 55%)", maskImage: "linear-gradient(to right, transparent 0%, #000 55%)" }} />

          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(64px,7vw,104px) clamp(20px,4vw,48px) clamp(56px,6vw,88px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "clamp(36px,5vw,72px)", alignItems: "center" }}>
            <div style={{ maxWidth: 660 }}>
              <p style={{ margin: "0 0 22px", display: "flex", alignItems: "center", gap: 12, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#80CEFF" }}>
                <span aria-hidden="true" style={{ width: 34, height: 2, background: "#EB4900", display: "block" }} />
                {h.hero.eyebrow}
              </p>
              <h1 id="hero-h" style={{ margin: "0 0 26px", fontSize: "clamp(37px,5vw,72px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.025em", textWrap: "balance" }}>
                {h.hero.headline.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p style={{ margin: "0 0 38px", fontSize: "clamp(17px,1.35vw,20px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: 600, textWrap: "pretty" }}>{h.hero.body}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <Link href={h.hero.ctas[0].href} className="hov-cta-emberwhite" style={{ fontSize: 15.5, fontWeight: 700, padding: "18px 32px", borderRadius: 3 }}>{h.hero.ctas[0].label}</Link>
                <Link href={h.hero.ctas[1].href} className="hov-cta-outline" style={{ fontSize: 15.5, fontWeight: 700, padding: "18px 32px", borderRadius: 3 }}>{h.hero.ctas[1].label}</Link>
              </div>
            </div>

            <div style={{ position: "relative", minHeight: "clamp(280px,32vw,436px)", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(128,206,255,.24)" }}>
              <Image src={h.hero.image.src} alt={h.hero.image.alt} fill priority sizes="(min-width:1040px) 46vw, 100vw" style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* credential band */}
          <div style={{ position: "relative", borderTop: "1px solid rgba(128,206,255,.2)", background: "rgba(0,52,160,.28)" }}>
            <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(22px,2.6vw,30px) clamp(20px,4vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(18px,3vw,44px)" }}>
              <p style={{ margin: 0, fontSize: "clamp(16px,1.5vw,21px)", fontWeight: 800, lineHeight: 1.35, letterSpacing: "-0.01em" }}>{h.hero.credentialLine}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {h.hero.credentialChips.map((chip) => (
                  <span key={chip} style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "#80CEFF", border: "1px solid rgba(128,206,255,.4)", padding: "8px 14px", borderRadius: 2 }}>{chip}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ TWO PATHS ══ */}
        <section aria-labelledby="paths-h" style={{ background: "#FFFFFF", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(48px,5vw,76px) clamp(20px,4vw,48px)" }}>
            <h2 id="paths-h" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Where would you like to start?</h2>
            <Reveal as="div" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(20px,2.5vw,32px)" }}>
              {h.twoPaths.map((p) => (
                <Link key={p.heading} href={p.cta.href} className="hov-pathcard hov-move" style={{ display: "block", padding: "clamp(28px,3vw,40px)", borderRadius: 3 }}>
                  <p style={{ margin: "0 0 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#EB4900" }}>{p.eyebrow}</p>
                  <p style={{ margin: "0 0 12px", fontSize: "clamp(23px,2.2vw,31px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", color: "inherit" }}>{p.heading}</p>
                  <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.6, color: "inherit", opacity: 0.82, maxWidth: "44ch", textWrap: "pretty" }}>{p.body}</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, fontWeight: 700, color: "inherit" }}>{p.cta.label} <Arrow /></span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section aria-labelledby="stats-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(128,206,255,.19) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, right: 0, height: 4, background: "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)" }} />
          <Reveal as="div" style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(58px,6vw,92px) clamp(20px,4vw,48px)" }}>
            <h2 id="stats-h" style={{ margin: "0 0 clamp(38px,4vw,56px)", fontSize: "clamp(13px,1.2vw,15px)", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#80CEFF" }}>{h.stats.heading}</h2>
            <StatsTicker items={h.stats.items} />
          </Reveal>
        </section>

        {/* ══ CUSTOMERS ══ */}
        <section aria-labelledby="cust-h" style={{ background: "#F5F7F9", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(48px,5vw,72px) clamp(20px,4vw,48px)" }}>
            <h2 id="cust-h" style={{ margin: "0 0 clamp(28px,3vw,40px)", fontSize: "clamp(13px,1.2vw,15px)", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#334155" }}>{h.customers.heading}</h2>
            <CustomerMarquee names={h.customers.names} />
            <Link href={h.customers.link.href} className="hov-link hov-move" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 20, fontSize: 15, fontWeight: 700 }}>{h.customers.link.label} <Arrow size={6} /></Link>
          </div>
        </section>

        {/* ══ COOPERATIVE CONTRACTS ══ */}
        <section id="contracts" aria-labelledby="contracts-h" style={{ position: "relative", background: "#FFFFFF", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(34px,4vw,64px)", alignItems: "start" }}>
              <Reveal as="div">
                <EyebrowBar label={h.contracts.eyebrow} />
                <h2 id="contracts-h" style={{ margin: "0 0 22px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.contracts.heading}</h2>
                {h.contracts.body.map((para, i) => (
                  <p key={i} style={{ margin: i === h.contracts.body.length - 1 ? "0 0 30px" : "0 0 20px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "52ch", textWrap: "pretty" }}>{para}</p>
                ))}
                <Link href={h.contracts.cta.href} className="hov-cta-blue hov-move" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 15.5, fontWeight: 700, padding: "18px 30px", borderRadius: 3 }}>{h.contracts.cta.label} <Arrow /></Link>
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
        <section id="industries" aria-labelledby="ind-h" style={{ background: "#F5F7F9", borderTop: "1px solid #E5E7EB", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <Reveal as="div" style={{ maxWidth: 640, marginBottom: "clamp(34px,4vw,52px)" }}>
              <EyebrowBar label={h.industries.eyebrow} />
              <h2 id="ind-h" style={{ margin: "0 0 18px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.industries.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", textWrap: "pretty" }}>{h.industries.intro}</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "clamp(18px,2vw,26px)" }}>
              {h.industries.cards.map((ind, i) => (
                <Reveal as="article" key={ind.name} delay={i * 0.06} className="hov-card" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div className="hov-card__media" style={{ position: "relative", height: 150, borderBottom: "1px solid #E5E7EB" }}>
                    <Image src={ind.image.src} alt={ind.image.alt} fill sizes="(min-width:1040px) 33vw, 100vw" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "clamp(22px,2.4vw,30px)", display: "flex", flexDirection: "column", flex: "1 1 auto" }}>
                    <h3 style={{ margin: "0 0 10px", fontSize: "clamp(19px,1.7vw,23px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.018em" }}>{ind.name}</h3>
                    <p style={{ margin: "0 0 18px", fontSize: 15.5, lineHeight: 1.6, color: "#334155", textWrap: "pretty" }}>{ind.hook}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: 9, margin: "0 0 22px" }}>
                      {ind.outcomes.map((o) => (
                        <li key={o} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, fontWeight: 600, lineHeight: 1.45, color: "#021F43" }}>
                          <Diamond /> {o}
                        </li>
                      ))}
                    </ul>
                    <Link href={ind.href} className="hov-link hov-move" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14.5, fontWeight: 700 }}>{ind.cta} <Arrow size={6} /></Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section id="services" aria-labelledby="svc-h" style={{ background: "#FFFFFF", scrollMarginTop: 90 }}>
          <div style={WRAP}>
            <Reveal as="div" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: "clamp(30px,3.4vw,46px)" }}>
              <div style={{ maxWidth: 600 }}>
                <EyebrowBar label={h.services.eyebrow} />
                <h2 id="svc-h" style={{ margin: 0, fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.services.heading}</h2>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center", paddingBottom: 6 }}>
                {h.services.chips.map((chip) => (
                  <span key={chip} style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#334155", border: "1px solid #E5E7EB", background: "#F5F7F9", padding: "9px 15px", borderRadius: 2 }}>{chip}</span>
                ))}
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
                    <p style={{ flex: "1 1 320px", margin: 0, fontSize: 16, lineHeight: 1.6, color: "#334155", textWrap: "pretty" }}>{svc.summary}</p>
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
              <p style={{ margin: "0 0 18px", fontSize: 12, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#80CEFF" }}>{h.journey.eyebrow}</p>
              <h2 id="journey-h" style={{ margin: "0 0 16px", fontSize: "clamp(29px,3.4vw,48px)", fontWeight: 800, lineHeight: 1.06, letterSpacing: "-0.028em", textWrap: "balance" }}>{h.journey.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#D5E4F5", textWrap: "pretty" }}>{h.journey.intro}</p>
            </Reveal>
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(238px,1fr))", gap: "clamp(14px,1.6vw,18px)" }}>
              {h.journey.steps.map((step, i) => (
                <Reveal as="li" key={step.num} delay={i * 0.06} className="hov-step" style={{ background: "#0034A0", padding: "clamp(24px,2.6vw,32px)", position: "relative", borderRadius: 3 }}>
                  <div aria-hidden="true" style={{ height: 3, width: "100%", background: step.bar, marginBottom: 22 }} />
                  <p style={{ margin: "0 0 14px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, letterSpacing: ".1em", color: "#80CEFF" }}>{step.num}</p>
                  <h3 style={{ margin: "0 0 12px", fontSize: "clamp(21px,1.9vw,27px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{step.name}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#D5E4F5", textWrap: "pretty" }}>{step.body}</p>
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
                <p style={{ margin: "0 0 28px", fontSize: "clamp(22px,2.6vw,36px)", fontWeight: 600, lineHeight: 1.35, letterSpacing: "-0.018em", color: "#021F43", textWrap: "pretty" }}>&ldquo;{h.testimonial.quote}&rdquo;</p>
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
                <p style={{ margin: "0 0 20px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "52ch", textWrap: "pretty" }}>{h.careers.body}</p>
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
                  <p style={{ margin: "0 auto 22px", fontSize: 15, lineHeight: 1.6, color: "#334155", maxWidth: "38ch", textWrap: "pretty" }}>{h.careers.openRoles.emptyBody}</p>
                  <Link href={h.careers.openRoles.cta.href} className="hov-cta-navy" style={{ display: "inline-block", fontSize: 14.5, fontWeight: 700, padding: "15px 26px", borderRadius: 3 }}>{h.careers.openRoles.cta.label}</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══ CLOSING CTA ══ */}
        <section id="connect" aria-labelledby="cta-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden", scrollMarginTop: 78 }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, #041F44 0 12px, #021B3B 12px 24px)" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(2,31,67,.96) 0%, rgba(2,31,67,.72) 55%, rgba(0,52,160,.35) 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 5, background: "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)" }} />
          <Reveal as="div" style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(70px,8vw,124px) clamp(20px,4vw,48px)" }}>
            <p style={{ margin: "0 0 22px", fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#80CEFF" }}>{h.closingCta.eyebrow}</p>
            <h2 id="cta-h" style={{ margin: "0 0 22px", fontSize: "clamp(32px,4.4vw,64px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.03em", maxWidth: "20ch", textWrap: "balance" }}>{h.closingCta.heading}</h2>
            <p style={{ margin: "0 0 36px", fontSize: "clamp(17px,1.4vw,21px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: "56ch", textWrap: "pretty" }}>{h.closingCta.body}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
              <Link href={h.closingCta.ctas[0].href} className="hov-cta-emberwhite" style={{ fontSize: 16, fontWeight: 700, padding: "19px 36px", borderRadius: 3 }}>{h.closingCta.ctas[0].label}</Link>
              <Link href={h.closingCta.ctas[1].href} className="hov-underline" style={{ fontSize: 16, fontWeight: 700, padding: "19px 8px" }}>{h.closingCta.ctas[1].label}</Link>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter site={site} />
    </>
  );
}

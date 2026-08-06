import Link from "next/link";
import type { SiteSettings, VehiclePageData } from "@/content/types";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CopyNumber } from "@/components/CopyNumber";
import { Reveal } from "@/components/Reveal";
import { ParallaxStars } from "@/components/ParallaxStars";
import { ClosingCTA } from "@/components/StandardPage";

const STAR_BLUE =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z%22 fill=%22%230034A0%22/%3E%3C/svg%3E')";
const STAR_NAVY =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 13 40 34 61 37 40 40 37 61 34 40 13 37 34 34Z%22 fill=%22%23021F43%22/%3E%3C/svg%3E')";
const HAIRLINE = "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)";
const WRAP = { maxWidth: 1320, margin: "0 auto", padding: "clamp(52px,6vw,88px) clamp(20px,4vw,48px)" } as const;

function Label({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase", color: "#94A3B8" }}>{children}</p>;
}

export function VehiclePage({ vehicle, others, site }: { vehicle: VehiclePageData; others: { slug: string; name: string; eyebrow: string }[]; site: SiteSettings }) {
  const v = vehicle;
  const multi = v.contracts.length > 1;

  return (
    <>
      <SiteHeader site={site} currentLabel="How to Buy" />
      <main id="main">
        {/* ══ HERO ══ */}
        <section aria-labelledby="hero-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <ParallaxStars amount={70} offset={["start start", "end start"]} style={{ backgroundImage: STAR_BLUE, backgroundSize: "74px 74px", opacity: 0.5, WebkitMaskImage: "linear-gradient(115deg, transparent 44%, #000 100%)", maskImage: "linear-gradient(115deg, transparent 44%, #000 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 4, background: HAIRLINE }} />
          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(20px,2.4vw,28px) clamp(20px,4vw,48px) clamp(48px,5vw,76px)" }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "clamp(28px,4vw,48px)" }}>
              <ol style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", fontSize: 13, fontWeight: 600 }}>
                <li><Link href="/" className="hov-footerlink" style={{ color: "#80CEFF" }}>Home</Link></li>
                <li aria-hidden="true" style={{ color: "#5B7FA8" }}>/</li>
                <li><Link href="/procurement-contracts" className="hov-footerlink" style={{ color: "#80CEFF" }}>How to Buy</Link></li>
                <li aria-hidden="true" style={{ color: "#5B7FA8" }}>/</li>
                <li style={{ color: "#C9D8E8" }}>{v.name}</li>
              </ol>
            </nav>
            <p style={{ margin: "0 0 18px", display: "flex", alignItems: "center", gap: 12, fontSize: 12.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#80CEFF" }}>
              <span aria-hidden="true" style={{ width: 34, height: 2, background: "#EB4900", display: "block" }} />
              {v.eyebrow}
            </p>
            <h1 id="hero-h" style={{ margin: "0 0 26px", fontSize: "clamp(34px,4.6vw,62px)", fontWeight: 800, lineHeight: 1.03, letterSpacing: "-0.028em", textWrap: "balance" }}>{v.name}</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 22, alignItems: "center" }}>
              {v.contracts.map((c) => (
                <div key={c.number} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <CopyNumber value={c.number} />
                  {c.term ? <span style={{ fontSize: 13, color: "#C9D8E8", maxWidth: "34ch" }}>{c.term}</span> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SUMMARY ══ */}
        <section style={{ background: "#FFFFFF" }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: v.metaRows ? "minmax(0,1.6fr) minmax(220px,1fr)" : "1fr", gap: "clamp(28px,4vw,64px)", alignItems: "start" }}>
              <Reveal as="div" style={{ maxWidth: 760 }}>
                {v.summary.map((p, i) => (
                  <p key={i} style={{ margin: i === v.summary.length - 1 ? 0 : "0 0 18px", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", textWrap: "balance" }}>{p}</p>
                ))}
              </Reveal>
              {v.metaRows ? (
                <Reveal as="div" delay={0.06} style={{ border: "1px solid #E5E7EB", borderRadius: 3, padding: "clamp(20px,2.2vw,26px)", background: "#F5F7F9" }}>
                  <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                    {!multi && v.contracts[0].term ? (
                      <div>
                        <dt style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 5 }}>Term</dt>
                        <dd style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#021F43", lineHeight: 1.5 }}>{v.contracts[0].term}</dd>
                      </div>
                    ) : null}
                    {v.metaRows.map((r) => (
                      <div key={r.label}>
                        <dt style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 5 }}>{r.label}</dt>
                        <dd style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#021F43", lineHeight: 1.5 }}>{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ) : null}
            </div>
          </div>
        </section>

        {/* ══ MULTI-CONTRACT CARDS (Texas DIR) ══ */}
        {multi ? (
          <section style={{ background: "#F5F7F9", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
            <div style={WRAP}>
              <Reveal as="h2" style={{ margin: "0 0 clamp(24px,3vw,36px)", fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 800, letterSpacing: "-0.024em" }}>Two contracts, two scopes — cite the right one.</Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))", gap: "clamp(18px,2vw,26px)" }}>
                {v.contracts.map((c, i) => (
                  <Reveal as="article" key={c.number} delay={i * 0.06} className="hov-card" style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 3, padding: "clamp(24px,2.6vw,32px)" }}>
                    <div aria-hidden="true" style={{ width: 34, height: 3, background: i === 0 ? "#0034A0" : "#EB4900", marginBottom: 18 }} />
                    <p style={{ margin: "0 0 10px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 15, fontWeight: 700, color: "#021F43" }}>{c.number}</p>
                    {c.term ? <p style={{ margin: "0 0 14px", fontSize: 13, color: "#94A3B8" }}>{c.term}</p> : null}
                    {c.scope ? <p style={{ margin: "0 0 14px", fontSize: 15.5, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{c.scope}</p> : null}
                    {c.useFor ? (
                      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#021F43" }}>
                        <span style={{ fontWeight: 800 }}>Use it for: </span>{c.useFor}
                      </p>
                    ) : null}
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ══ WHO / COVERED ══ */}
        <section style={{ background: multi ? "#FFFFFF" : "#F5F7F9", borderTop: multi ? undefined : "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
          <div style={WRAP}>
            <div style={{ display: "grid", gridTemplateColumns: v.covered ? "repeat(auto-fit, minmax(280px,1fr))" : "1fr", gap: "clamp(28px,4vw,56px)" }}>
              <Reveal as="div">
                <Label>Who can buy</Label>
                <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {v.whoCanBuy.map((w) => (
                    <li key={w} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.5, color: "#334155" }}>
                      <span aria-hidden="true" style={{ flex: "0 0 auto", width: 7, height: 7, background: "#EB4900", transform: "rotate(45deg)", marginTop: 7, display: "block" }} />
                      {w}
                    </li>
                  ))}
                </ul>
              </Reveal>
              {v.covered ? (
                <Reveal as="div" delay={0.06}>
                  <Label>What&apos;s covered</Label>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {v.covered.map((c) => (
                      <li key={c} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16, lineHeight: 1.5, color: "#334155" }}>
                        <span aria-hidden="true" style={{ flex: "0 0 auto", width: 6, height: 6, background: "#0034A0", transform: "rotate(45deg)", marginTop: 7, display: "block" }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>
            {v.scopeNote ? (
              <Reveal as="div" style={{ marginTop: "clamp(28px,3vw,40px)", borderLeft: "4px solid #EB4900", background: "#FFFFFF", border: "1px solid #E5E7EB", borderLeftColor: "#EB4900", borderRadius: 3, padding: "clamp(18px,2.2vw,26px)" }}>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#334155" }}>
                  <span style={{ fontWeight: 800, color: "#021F43" }}>Scope note. </span>{v.scopeNote}
                </p>
              </Reveal>
            ) : null}
          </div>
        </section>

        {/* ══ HOW TO ORDER ══ */}
        <section aria-label="How to order" style={{ position: "relative", background: "#0034A0", color: "#FFFFFF", overflow: "hidden" }}>
          <ParallaxStars amount={40} style={{ backgroundImage: STAR_NAVY, backgroundSize: "74px 74px", opacity: 0.42 }} />
          <div style={{ position: "relative", ...WRAP }}>
            <Reveal as="div" style={{ maxWidth: 620, marginBottom: "clamp(28px,3.4vw,44px)" }}>
              <p style={{ margin: "0 0 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "#80CEFF" }}>How to order</p>
              <h2 style={{ margin: 0, fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.026em", textWrap: "balance" }}>Straight to purchase order.</h2>
            </Reveal>
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px,1fr))", gap: "clamp(14px,1.6vw,18px)" }}>
              {v.howToOrder.map((step, i) => (
                <Reveal as="li" key={step} delay={i * 0.05} className="hov-step" style={{ background: "#0034A0", padding: "clamp(24px,2.6vw,32px)", borderRadius: 3 }}>
                  <div aria-hidden="true" style={{ height: 3, width: "100%", background: ["#80CEFF", "#B4FF00", "#EB4900", "#FFFFFF"][i % 4], marginBottom: 20 }} />
                  <p style={{ margin: "0 0 12px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, letterSpacing: ".1em", color: "#80CEFF" }}>{`0${i + 1}`}</p>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "#FFFFFF", textWrap: "balance" }}>{step}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ══ OFFICIAL RECORD (the point of the page) ══ */}
        <section aria-labelledby="record-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, right: 0, height: 4, background: HAIRLINE }} />
          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(44px,5vw,72px) clamp(20px,4vw,48px)" }}>
            <Reveal as="div" style={{ border: "1px solid rgba(128,206,255,.28)", borderRadius: 4, padding: "clamp(26px,3.4vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "clamp(20px,3vw,44px)", alignItems: "center", background: "rgba(0,52,160,.22)" }}>
              <div>
                <p id="record-h" style={{ margin: "0 0 10px", fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#80CEFF" }}>Verify at the source</p>
                <p style={{ margin: 0, fontSize: "clamp(19px,1.8vw,25px)", fontWeight: 800, lineHeight: 1.25, letterSpacing: "-0.018em", maxWidth: "26ch", textWrap: "balance" }}>Every term on this page is on the issuing authority&apos;s official record.</p>
              </div>
              <div style={{ justifySelf: "start" }}>
                <Link href={v.official.href} data-unverified="" className="hov-cta-emberwhite hov-move" style={{ display: "inline-flex", alignItems: "center", gap: 11, fontSize: 15.5, fontWeight: 700, padding: "12px 26px", borderRadius: 3 }}>
                  {v.official.label}
                  <span aria-hidden="true" className="lnk-arrow"><span style={{ display: "block", width: 7, height: 7, borderTop: "2px solid currentColor", borderRight: "2px solid currentColor", transform: "rotate(45deg)" }} /></span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ OTHER VEHICLES ══ */}
        <section aria-labelledby="others-h" style={{ background: "#F5F7F9", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
          <div style={WRAP}>
            <Reveal as="h2" id="others-h" style={{ margin: "0 0 clamp(24px,3vw,36px)", fontSize: "clamp(22px,2.4vw,32px)", fontWeight: 800, letterSpacing: "-0.024em" }}>Other contract vehicles</Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "clamp(14px,1.6vw,20px)" }}>
              {others.map((o, i) => (
                <Reveal as="div" key={o.slug} delay={i * 0.04}>
                  <Link href={`/procurement-contracts/${o.slug}`} className="hov-card hov-move" style={{ display: "flex", flexDirection: "column", gap: 8, background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 3, padding: "clamp(20px,2.2vw,26px)", height: "100%" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#94A3B8" }}>{o.eyebrow}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: "clamp(18px,1.6vw,22px)", fontWeight: 800, letterSpacing: "-0.018em", color: "#021F43" }}>
                      {o.name}
                      <span aria-hidden="true" className="lnk-arrow"><span style={{ display: "block", width: 6, height: 6, borderTop: "2px solid #0034A0", borderRight: "2px solid #0034A0", transform: "rotate(45deg)" }} /></span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ClosingCTA
          eyebrow="How to buy"
          heading="Not sure this is the right vehicle?"
          body="Tell us your organization type and state and we'll confirm which contract applies — or tell you if none does."
          ctas={[
            { label: "Talk to our contracts team", href: "/contact" },
            { label: "Back to all vehicles", href: "/procurement-contracts" },
          ]}
        />
      </main>
      <SiteFooter site={site} />
    </>
  );
}

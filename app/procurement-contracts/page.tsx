import type { Metadata } from "next";
import Link from "next/link";
import { getProcurementPage, getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContractFinder } from "@/components/ContractFinder";
import { CopyNumber } from "@/components/CopyNumber";
import { FaqAccordion } from "@/components/FaqAccordion";
import { EyebrowBar } from "@/components/EyebrowBar";
import { PageHero } from "@/components/StandardPage";
import { Reveal } from "@/components/Reveal";
import { ClosingCTA } from "@/components/ClosingCTA";

export const metadata: Metadata = {
  title: "Procurement & Contracts",
  description:
    "PTG holds six cooperative and government contract vehicles, each competitively " +
    "awarded by its lead agency. Find the one your organization can contract under " +
    "for Workday licensing and implementation.",
};

/** Matches public/_design/howtobuy.html — the template for all internal pages. */

const JOURNEY_STAR =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 13 40 34 61 37 40 40 37 61 34 40 13 37 34 34Z%22 fill=%22%23021F43%22/%3E%3C/svg%3E')";

export default async function HowToBuyPage() {
  const site = await getSiteSettings();
  const p = await getProcurementPage();

  return (
    <>
      <SiteHeader site={site} currentLabel="Procurement & Contracts" />

      <main id="main">
        {/* ══ HERO ══ */}
        {/* Shared PageHero, not a local copy: this page previously hand-rolled
            the same markup and drifted from it. */}
        {/* Bullets are pulled OUT of the hero and given their own band below.
            Keeping both the mechanism paragraph and three long bullets in the
            hero's right column made it 349px against a 138px headline — the
            densest hero on the site. The paragraph stays put because it carries
            the mechanism-first framing that has to lead; the bullets read
            better as a 3-up row than as a cramped list anyway. */}
        <PageHero
          hero={{ ...p.hero, bullets: undefined }}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Procurement & Contracts" }]}
        />

        <section aria-label="Why buying through a contract helps" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(30px,3.4vw,48px) clamp(20px,4vw,48px)" }}>
            <Reveal as="ul" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(290px,100%),1fr))", gap: "clamp(18px,2.4vw,40px)" }}>
              {p.hero.bullets.map((b) => (
                <li key={b} style={{ display: "flex", gap: 13, alignItems: "flex-start" }}>
                  <span aria-hidden="true" style={{ flex: "0 0 auto", width: 9, height: 9, background: "#EB4900", transform: "rotate(45deg)", marginTop: 7, display: "block" }} />
                  <span style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.55, color: "#021F43" }}>{b}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ══ FINDER ══ */}
        <section id="finder" aria-labelledby="finder-h" style={{ background: "#F0F2F4", scrollMarginTop: 90 }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(52px,6vw,88px) clamp(20px,4vw,48px)" }}>
            <div style={{ maxWidth: 620, marginBottom: "clamp(28px,3vw,40px)" }}>
              <EyebrowBar label={p.finder.eyebrow} />
              <h2 id="finder-h" style={{ margin: "0 0 16px", fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{p.finder.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,18.5px)", lineHeight: 1.65, color: "#334155", textWrap: "balance" }}>{p.finder.intro}</p>
            </div>
            <ContractFinder finder={p.finder} vehicles={p.vehicles} />
            <p style={{ margin: "18px 0 0", fontSize: 13.5, lineHeight: 1.6, color: "#334155", maxWidth: "78ch" }}>{p.finder.disclaimer}</p>
          </div>
        </section>

        {/* ══ VEHICLES ══ */}
        <section id="vehicles" aria-labelledby="veh-h" style={{ background: "#FFFFFF", scrollMarginTop: 90 }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(60px,6.5vw,100px) clamp(20px,4vw,48px)" }}>
            <div style={{ maxWidth: 640, marginBottom: "clamp(32px,3.6vw,50px)" }}>
              <EyebrowBar label={p.vehiclesSection.eyebrow} />
              <h2 id="veh-h" style={{ margin: 0, fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{p.vehiclesSection.heading}</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px,2vw,22px)" }}>
              {p.vehicles.map((v) => (
                <article key={v.id} id={v.id} style={{ border: "1px solid #E5E7EB", borderRadius: 6, scrollMarginTop: 96, overflow: "hidden" }}>
                  <div style={{ background: "#021F43", color: "#FFFFFF", padding: "clamp(22px,2.4vw,30px) clamp(22px,2.6vw,34px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%),1fr))", gap: 20, alignItems: "center" }}>
                    <div>
                      <p style={{ margin: "0 0 8px", fontSize: 11, fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase", color: "#80CEFF" }}>{v.kind}</p>
                      <h3 style={{ margin: 0, fontSize: "clamp(21px,2vw,29px)", fontWeight: 800, letterSpacing: "-0.024em", lineHeight: 1.1 }}>{v.name}</h3>
                    </div>
                    <div style={{ justifySelf: "end", display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {v.numbers.map((n) => (
                        <CopyNumber key={n} value={n} />
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: "clamp(24px,2.8vw,34px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(250px,100%),1fr))", gap: "clamp(24px,3vw,44px)", background: "#FFFFFF" }}>
                    <div>
                      <p style={{ margin: "0 0 12px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#475569" }}>Who can order</p>
                      <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{v.eligible}</p>
                    </div>
                    <div>
                      <p style={{ margin: "0 0 12px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#475569" }}>What&apos;s covered</p>
                      <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {v.covered.map((c) => (
                          <li key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 15, lineHeight: 1.5, color: "#334155" }}>
                            <span aria-hidden="true" style={{ flex: "0 0 auto", width: 6, height: 6, background: "#0034A0", transform: "rotate(45deg)", marginTop: 6, display: "block" }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ margin: "0 0 12px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#475569" }}>Verify &amp; order</p>
                      <p style={{ margin: "0 0 16px", fontSize: 16, lineHeight: 1.6, color: "#334155" }}>{v.authority}</p>
                      <a href={v.href} target="_blank" rel="noopener noreferrer" className="hov-link" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14.5, fontWeight: 700 }}>
                        Official contract record
                        <span className="sr-only"> (opens in a new tab)</span>
                        <span aria-hidden="true" style={{ width: 6, height: 6, borderTop: "2px solid currentColor", borderRight: "2px solid currentColor", transform: "rotate(45deg)", display: "block" }} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ORDERING STEPS ══ */}
        <section aria-labelledby="steps-h" style={{ position: "relative", background: "#0034A0", color: "#FFFFFF", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: JOURNEY_STAR, backgroundSize: "74px 74px", opacity: 0.42 }} />
          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(60px,6.5vw,96px) clamp(20px,4vw,48px)" }}>
            <div style={{ maxWidth: 620, marginBottom: "clamp(32px,3.6vw,50px)" }}>
              <EyebrowBar label={p.ordering.eyebrow} dark />
              <h2 id="steps-h" style={{ margin: "0 0 16px", fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{p.ordering.heading}</h2>
              <p style={{ margin: 0, fontSize: "clamp(16.5px,1.3vw,18.5px)", lineHeight: 1.65, color: "#D5E4F5", textWrap: "balance" }}>{p.ordering.intro}</p>
            </div>
            <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(238px,100%),1fr))", gap: "clamp(14px,1.6vw,18px)" }}>
              {p.ordering.steps.map((s) => (
                <li key={s.num} style={{ background: "#0034A0", padding: "clamp(24px,2.6vw,32px)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 6 }}>
                  <div aria-hidden="true" style={{ height: 3, width: "100%", background: s.bar, marginBottom: 22 }} />
                  <p style={{ margin: "0 0 14px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12, letterSpacing: ".1em", color: "#80CEFF" }}>{s.num}</p>
                  <h3 style={{ margin: "0 0 12px", fontSize: "clamp(18px,1.65vw,23px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{s.name}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#D5E4F5", textWrap: "balance" }}>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section aria-labelledby="faq-h" style={{ background: "#F0F2F4" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(60px,6.5vw,96px) clamp(20px,4vw,48px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(300px,100%),1fr))", gap: "clamp(32px,4vw,64px)", alignItems: "start" }}>
              <div className="ptg-sticky-col">
                <EyebrowBar label={p.faq.eyebrow} />
                <h2 id="faq-h" style={{ margin: "0 0 22px", fontSize: "clamp(26px,2.8vw,39px)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-0.028em", textWrap: "balance" }}>{p.faq.heading}</h2>
                <p style={{ margin: "0 0 26px", fontSize: 16.5, lineHeight: 1.65, color: "#334155", maxWidth: "58ch", textWrap: "balance" }}>{p.faq.intro}</p>
                <Link href={p.faq.cta.href} className="hov-cta-blue cta" style={{ display: "inline-block" }}>{p.faq.cta.label}</Link>
              </div>
              <FaqAccordion items={p.faq.items} />
            </div>
          </div>
        </section>

        {/* ══ CLOSING CTA ══ */}
        {/* Was a hand-rolled copy of ClosingCTA's markup. Uses the shared one now,
            so the closing band has a single definition site-wide. */}
        <ClosingCTA
          from="#F0F2F4"
          eyebrow={p.closingCta.eyebrow}
          heading={p.closingCta.heading}
          body={p.closingCta.body}
          ctas={p.closingCta.ctas}
        />
      </main>

      <SiteFooter site={site} />
    </>
  );
}

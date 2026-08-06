"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomerMarquee } from "./CustomerMarquee";
import type { HomePage } from "@/content/types";

/**
 * HomeHero — full-bleed photographic hero: the image IS the background, easing
 * in with a long slow settle (scale 1.18 → 1) under a faster opacity fade,
 * content pinned to the lower-left and revealed line-by-line with a gentle
 * stagger. No eyebrow — headline, body, two CTAs.
 *
 * LOAD REVEAL IS CSS, NOT MOTION — deliberately. The previous version rendered
 * visible (SSR), then on hydration snapped everything to opacity 0 for 80ms
 * before animating in, which read as "the page loads, vanishes, then fades in."
 * Framer can't fix that on its own: it serialises `initial` into the server
 * HTML, so a hidden initial state would break the no-JS render.
 *
 * Instead the hidden state lives in CSS behind a `.js` class that an inline
 * script in app/layout.tsx adds BEFORE first paint, so the content is never
 * painted visible and then taken away. `.is-in` is added on mount to transition
 * it in. With JS off — or if hydration fails, via the 2.5s safety timeout in
 * that script — the base state is fully visible.
 *
 * Reduced motion is handled in globals.css (fade kept, movement dropped).
 */

export function HomeHero({ hero, customers }: { hero: HomePage["hero"]; customers: HomePage["customers"] }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    // Tell the layout gate that hydration happened, so it stops counting down
    // to removing `.js`.
    document.documentElement.setAttribute("data-hydrated", "");
    setShown(true);
  }, []);

  const rv = (delay: number, y?: number) => ({
    className: `hero-rv${shown ? " is-in" : ""}`,
    style: {
      "--rv-delay": `${delay}s`,
      ...(y === undefined ? {} : { "--rv-y": `${y}px` }),
    } as CSSProperties,
  });

  const lines = hero.headline.split("\n");

  return (
    <section aria-labelledby="hero-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
      {/* Full-bleed background image — slow 12s settle, 1.6s fade */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          className={`hero-rv hero-rv--media${shown ? " is-in" : ""}`}
          style={{ position: "absolute", inset: 0 }}
        >
          <Image
            src={hero.image.src}
            // content/pages/home.ts authors real alt text ("Downtown Houston
            // skyline at dusk") — use it. The photo is meaningful here (Houston
            // is PTG's HQ), not purely decorative.
            alt={hero.image.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "70% center" }}
          />
        </div>
        {/* Legibility gradients: left wash, top fade, bottom settle into navy */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(2,31,67,.88) 0%, rgba(2,31,67,.55) 42%, rgba(2,31,67,.12) 100%)" }} />
        <div style={{ position: "absolute", inset: "0 0 auto 0", height: 130, background: "linear-gradient(to bottom, rgba(2,31,67,.55), transparent)" }} />
        <div style={{ position: "absolute", inset: "auto 0 0 0", height: 160, background: "linear-gradient(to bottom, transparent, rgba(2,31,67,.9) 78%, #021F43 100%)" }} />
      </div>

      {/* Content — pinned lower-left, sc-pitch style */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)", minHeight: "calc(100svh - 62px)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{ maxWidth: 700, paddingBottom: "clamp(48px,6vw,72px)", paddingTop: "clamp(120px,18vh,220px)" }}>
          <h1 id="hero-h" style={{ margin: "0 0 24px", fontSize: "clamp(40px,5.6vw,80px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.028em" }}>
            {lines.map((line, i) => {
              const r = rv(0.15 + i * 0.1, 36);
              return (
                <span key={i} className={r.className} style={{ display: "block", ...r.style }}>
                  {line}
                </span>
              );
            })}
          </h1>
          {(() => {
            const r = rv(0.15 + lines.length * 0.1);
            return (
              <p
                className={r.className}
                style={{ margin: "0 0 34px", fontSize: "clamp(17px,1.35vw,20px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: 560, textWrap: "balance", ...r.style }}
              >
                {hero.body}
              </p>
            );
          })()}
          <div
            {...(() => {
              const r = rv(0.25 + lines.length * 0.1);
              return { className: r.className, style: { display: "flex", flexWrap: "wrap", gap: 14, ...r.style } };
            })()}
          >
            <Link href={hero.ctas[0].href} className="hov-cta-emberwhite cta">{hero.ctas[0].label}</Link>
            <Link href={hero.ctas[1].href} className="hov-cta-glass cta">{hero.ctas[1].label}</Link>
          </div>
        </div>
      </div>

      {/* customer logo band */}
      <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(128,206,255,.2)", background: "rgba(2,31,67,.6)", backdropFilter: "blur(6px)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(20px,2.4vw,28px) clamp(20px,4vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "clamp(20px,3vw,48px)" }}>
          {/* Small headline, not a label — wraps into a short stack on the left third */}
          <p style={{ margin: 0, flex: "1 1 220px", maxWidth: 300, fontSize: "clamp(16px,1.3vw,19px)", fontWeight: 700, lineHeight: 1.4, letterSpacing: "-0.01em", color: "#FFFFFF", textWrap: "balance" }}>{customers.heading}</p>
          <div style={{ flex: "0 1 74%", minWidth: 280 }}>
            <CustomerMarquee customers={customers.names} />
          </div>
        </div>
      </div>
    </section>
  );
}

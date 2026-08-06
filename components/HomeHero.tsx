"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { CustomerMarquee } from "./CustomerMarquee";
import type { HomePage } from "@/content/types";

/**
 * HomeHero — full-bleed photographic hero (sc-pitch pattern): the image IS the
 * background, easing in with a long slow settle (scale 1.18 → 1) under a fast
 * opacity fade, content pinned to the lower-left and revealed line-by-line
 * with a gentle stagger. No eyebrow — headline, body, two CTAs.
 *
 * SSR-safe load animation: the server HTML (and the first client render) is
 * fully visible, so the page reads with JS off. After hydration the elements
 * snap to their hidden state for one frame and then animate in. Reduced motion
 * is handled centrally by MotionConfig reducedMotion="user" (transforms drop,
 * opacity stays).
 */

// Ease-out-expo — matches the reference hero's buttery slow finish.
const EASE = [0.16, 1, 0.3, 1] as const;

type Phase = "ssr" | "hidden" | "show";

function useLoadReveal(): Phase {
  const [phase, setPhase] = useState<Phase>("ssr");
  useEffect(() => {
    setPhase("hidden");
    // setTimeout, NOT requestAnimationFrame: rAF never fires in occluded or
    // backgrounded tabs (same trap useReveal documents), which would leave the
    // hero invisible until the tab is focused. A short timeout lets the hidden
    // state paint first in visible tabs and still fires everywhere else.
    const id = window.setTimeout(() => setPhase("show"), 80);
    return () => window.clearTimeout(id);
  }, []);
  return phase;
}

export function HomeHero({ hero, customers }: { hero: HomePage["hero"]; customers: HomePage["customers"] }) {
  const phase = useLoadReveal();
  const show = phase !== "hidden";
  const t = (delay: number) =>
    phase === "show" ? { duration: 1.2, ease: EASE, delay } : { duration: 0 };

  const lines = hero.headline.split("\n");

  return (
    <section aria-labelledby="hero-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
      {/* Full-bleed background image — slow 12s settle, 1.6s fade */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <motion.div
          style={{ position: "absolute", inset: 0 }}
          animate={{ scale: show ? 1 : 1.18, opacity: show ? 1 : 0 }}
          transition={
            phase === "show"
              ? { scale: { duration: 12, ease: EASE }, opacity: { duration: 1.6, ease: EASE } }
              : { duration: 0 }
          }
        >
          <Image
            src={hero.image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "70% center" }}
          />
        </motion.div>
        {/* Legibility gradients: left wash, top fade, bottom settle into navy */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(2,31,67,.88) 0%, rgba(2,31,67,.55) 42%, rgba(2,31,67,.12) 100%)" }} />
        <div style={{ position: "absolute", inset: "0 0 auto 0", height: 130, background: "linear-gradient(to bottom, rgba(2,31,67,.55), transparent)" }} />
        <div style={{ position: "absolute", inset: "auto 0 0 0", height: 160, background: "linear-gradient(to bottom, transparent, rgba(2,31,67,.9) 78%, #021F43 100%)" }} />
      </div>

      {/* Content — pinned lower-left, sc-pitch style */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,4vw,48px)", minHeight: "calc(100svh - 62px)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
        <div style={{ maxWidth: 700, paddingBottom: "clamp(48px,6vw,72px)", paddingTop: "clamp(120px,18vh,220px)" }}>
          <h1 id="hero-h" style={{ margin: "0 0 24px", fontSize: "clamp(40px,5.6vw,80px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.028em" }}>
            {lines.map((line, i) => (
              <motion.span
                key={i}
                style={{ display: "block" }}
                animate={{ opacity: show ? 1 : 0, y: show ? 0 : 36 }}
                transition={t(0.15 + i * 0.1)}
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.p
            style={{ margin: "0 0 34px", fontSize: "clamp(17px,1.35vw,20px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: 560, textWrap: "balance" }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 24 }}
            transition={t(0.15 + lines.length * 0.1)}
          >
            {hero.body}
          </motion.p>
          <motion.div
            style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
            animate={{ opacity: show ? 1 : 0, y: show ? 0 : 24 }}
            transition={t(0.25 + lines.length * 0.1)}
          >
            <Link href={hero.ctas[0].href} className="hov-cta-emberwhite" style={{ fontSize: 15, fontWeight: 700, padding: "12px 28px", borderRadius: 3 }}>{hero.ctas[0].label}</Link>
            <Link href={hero.ctas[1].href} className="hov-cta-glass" style={{ fontSize: 15, fontWeight: 700, padding: "12px 28px", borderRadius: 3 }}>{hero.ctas[1].label}</Link>
          </motion.div>
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

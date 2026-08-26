"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import type { HomePage } from "@/content/types";

/**
 * IndustriesCarousel — overflowing snap carousel (sc-pitch pattern): cards ride
 * a full-viewport-width track whose inline padding lines the first card up with
 * the page column, so trailing cards visibly bleed past the container edge.
 * Prev/next buttons sit below the track. Works with JS off (the track is a
 * plain horizontal scroller); the buttons are enhancement only.
 */

// Track inline padding: page gutter, or the centered-column offset when the
// viewport is wider than the 1320px container.
const GUTTER = "clamp(20px,4vw,48px)";
const TRACK_PAD = `max(${GUTTER}, calc((100% - 1320px) / 2 + ${GUTTER}))`;

function Arrow({ size = 6 }: { size?: number }) {
  return (
    <span aria-hidden="true" className="lnk-arrow">
      <span style={{ width: size, height: size, borderTop: "2px solid currentColor", borderRight: "2px solid currentColor", transform: "rotate(45deg)", display: "block" }} />
    </span>
  );
}

function Diamond() {
  return <span aria-hidden="true" style={{ flex: "0 0 auto", width: 7, height: 7, background: "#EB4900", transform: "rotate(45deg)", marginTop: 6, display: "block" }} />;
}

function Chevron({ dir }: { dir: -1 | 1 }) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: 9,
        height: 9,
        borderTop: "2px solid currentColor",
        borderRight: "2px solid currentColor",
        transform: dir === 1 ? "rotate(45deg) translate(-1px, 1px)" : "rotate(-135deg) translate(-1px, 1px)",
        display: "block",
      }}
    />
  );
}

export function IndustriesCarousel({ cards }: { cards: HomePage["industries"]["cards"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const page = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const gap = card ? parseFloat(getComputedStyle(el).columnGap) || 24 : 24;
    const step = card ? card.getBoundingClientRect().width + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="ptg-carousel"
        role="region"
        aria-label="Industries we serve"
        tabIndex={0}
        style={{
          gap: "clamp(18px,2vw,26px)",
          paddingLeft: TRACK_PAD,
          paddingRight: TRACK_PAD,
          // Room for the card's 5px hover lift and its 3px focus ring at 2px
          // offset, now that overflow-y is clipped rather than scrollable.
          paddingTop: 10,
          paddingBottom: 12,
          scrollPaddingLeft: TRACK_PAD,
          scrollPaddingRight: TRACK_PAD,
        }}
      >
        {cards.map((ind, i) => (
          <Reveal
            as="article"
            key={ind.name}
            delay={i * 0.06}
            className="hov-card hov-card--flat"
            style={{
              flex: "0 0 auto",
              width: "min(78vw, 380px)",
              scrollSnapAlign: "start",
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 6,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="hov-card__media" style={{ position: "relative", height: 150, borderBottom: "1px solid #E5E7EB", flex: "0 0 auto" }}>
              <Image src={ind.image.src} alt={ind.image.alt} fill sizes="(min-width:640px) 380px, 78vw" style={{ objectFit: "cover" }} />
            </div>
            <div style={{ padding: "clamp(22px,2.4vw,30px)", display: "flex", flexDirection: "column", flex: "1 1 auto" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: "clamp(18px,1.6vw,22px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.018em" }}>{ind.name}</h3>
              <p style={{ margin: "0 0 18px", fontSize: 16.5, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{ind.hook}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 9, margin: "0 0 22px" }}>
                {ind.outcomes.map((o) => (
                  <li key={o} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, fontWeight: 600, lineHeight: 1.45, color: "#021F43" }}>
                    <Diamond /> {o}
                  </li>
                ))}
              </ul>
              <Link href={ind.href} className="hov-link hov-move" style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14.5, fontWeight: 700 }}>{ind.cta} <Arrow /></Link>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Prev / next — enhancement only; the track scrolls natively without JS */}
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: `28px ${GUTTER} 0`, display: "flex", gap: 10 }}>
        <button
          type="button"
          aria-label="Previous industries"
          disabled={!canPrev}
          onClick={() => page(-1)}
          className="hov-carouselbtn"
          style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 6, cursor: canPrev ? "pointer" : "default", color: "#021F43", opacity: canPrev ? 1 : 0.35 }}
        >
          <Chevron dir={-1} />
        </button>
        <button
          type="button"
          aria-label="Next industries"
          disabled={!canNext}
          onClick={() => page(1)}
          className="hov-carouselbtn"
          style={{ width: 46, height: 46, display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: 6, cursor: canNext ? "pointer" : "default", color: "#021F43", opacity: canNext ? 1 : 0.35 }}
        >
          <Chevron dir={1} />
        </button>
      </div>
    </div>
  );
}

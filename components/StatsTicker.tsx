"use client";

import { animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "./useReveal";

/**
 * StatsTicker — the "Four and a half decades…" figures, counting up on
 * scroll-into-view. The count is animated with Framer Motion's imperative
 * `animate()`, but the TRIGGER is {@link useReveal} (scroll position, not
 * IntersectionObserver) so it also fires in the preview pane / occluded tabs.
 *
 * RELIABILITY (the hard requirement):
 *  - Display state initialises to the FINAL parsed values, so the real numbers
 *    (45 / 100+ / 50+ / 30+ / 2017) ship in the server HTML and the first client
 *    render — correct with JS off, under reduced motion, or if the count never
 *    runs. No hydration mismatch.
 *  - We only ever drop to 0 to start the count once we've decided to animate; if
 *    we never animate, the finals stay on screen.
 *  - `prefers-reduced-motion: reduce` skips the count and keeps the finals.
 */
const TINT: Record<string, string> = {
  white: "#FFFFFF",
  leaf: "#B4FF00",
  clear: "#80CEFF",
};

type StatItem = { figure: string; label: string; tint: "white" | "leaf" | "clear" };

function parse(figure: string): { target: number | null; suffix: string } {
  const m = figure.match(/^(\d[\d,]*)(.*)$/);
  if (!m) return { target: null, suffix: figure };
  return { target: parseInt(m[1].replace(/,/g, ""), 10), suffix: m[2] };
}

export function StatsTicker({ items }: { items: StatItem[] }) {
  const parsed = items.map((i) => parse(i.figure));
  const finals = parsed.map((p) => p.target ?? 0);

  const { ref, shown } = useReveal<HTMLDivElement>(0.85);
  const started = useRef(false);

  // Initialise to the final values — the real numbers ship in the HTML.
  const [vals, setVals] = useState<number[]>(finals);

  useEffect(() => {
    if (!shown || started.current) return;
    started.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return; // keep the finals, no count-up
    }

    setVals(finals.map(() => 0));

    const controls = finals.map((target, idx) =>
      animate(0, target, {
        duration: 1.2,
        delay: idx * 0.09,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) =>
          setVals((prev) => {
            const next = [...prev];
            next[idx] = Math.round(v);
            return next;
          }),
        onComplete: () =>
          setVals((prev) => {
            const next = [...prev];
            next[idx] = target;
            return next;
          }),
      })
    );

    return () => controls.forEach((c) => c.stop());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shown]);

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 0, borderTop: "1px solid rgba(128,206,255,.25)", borderBottom: "1px solid rgba(128,206,255,.25)" }}>
      {items.map((stat, i) => {
        const p = parsed[i];
        const text = p.target === null ? stat.figure : `${vals[i]}${p.suffix}`;
        return (
          <div key={stat.label} style={{ padding: "clamp(26px,3vw,38px) clamp(14px,2vw,26px) clamp(26px,3vw,38px) 0" }}>
            <p style={{ margin: "0 0 6px", fontSize: "clamp(46px,5.6vw,92px)", fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.045em", color: TINT[stat.tint], fontVariantNumeric: "tabular-nums" }}>{text}</p>
            <p style={{ margin: 0, fontSize: "clamp(14px,1.15vw,16px)", fontWeight: 600, lineHeight: 1.4, color: "#C9D8E8", maxWidth: "20ch", textWrap: "pretty" }}>{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}

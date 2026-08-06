"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

/**
 * ParallaxStars — a decorative star-texture layer that drifts slightly slower
 * than the page as its section scrolls through the viewport, giving the solid
 * colour fields a bit of depth.
 *
 * Purely enhancement: the layer is aria-hidden, with JS off it's simply static,
 * and under reduced motion the drift is disabled. Scroll is measured on a
 * NON-transformed wrapper (the outer div) so translating the inner layer can't
 * feed back into the measurement. The inner layer overhangs its section by more
 * than the drift distance, so the parallax never exposes an empty edge; the
 * wrapper clips the overhang.
 *
 * `offset` tunes WHICH scroll window drives the drift. For a section pinned at
 * the top of the page (the hero) use ["start start", "end start"] so the full
 * 0→1 range maps to the hero scrolling up out of view — otherwise most of the
 * range sits at scroll positions above the page and the stars barely move.
 * For mid-page sections the default ["start end", "end start"] (enter bottom →
 * exit top) drifts the whole time the section is visible.
 */
export function ParallaxStars({
  style,
  amount = 40,
  offset = ["start end", "end start"],
}: {
  style: CSSProperties;
  amount?: number;
  offset?: Array<string | number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as ScrollOffset });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  const overhang = amount + 16;

  return (
    <div ref={ref} aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <motion.div
        style={{
          position: "absolute",
          top: -overhang,
          bottom: -overhang,
          left: 0,
          right: 0,
          ...style,
          y: reduce ? 0 : y,
        }}
      />
    </div>
  );
}

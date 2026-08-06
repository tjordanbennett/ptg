"use client";

import { motion } from "motion/react";
import { type CSSProperties, type ReactNode } from "react";
import { useReveal } from "./useReveal";

type Tag = "div" | "section" | "ul" | "ol" | "li" | "article" | "figure" | "h2" | "p";

type RevealProps = {
  children: ReactNode;
  /** Which element to render AS (so it can replace a grid/flex item in place). */
  as?: Tag;
  /** Reveal delay in seconds — use small increments to stagger siblings. */
  delay?: number;
  /** Rise distance in px. */
  y?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reveal — SSR-safe scroll-in reveal (fade + rise), animated with Framer Motion
 * but TRIGGERED by {@link useReveal} (scroll position, not IntersectionObserver)
 * so it works in the preview pane and any occluded/automated context too.
 *
 * The element renders VISIBLE in the server HTML and the first client render, so
 * the page is fully readable with JS off. Only after hydration does an off-screen
 * element snap to its hidden state (instantly, no animated dip) and then animate
 * in once it scrolls into view. Under reduced motion, MotionConfig
 * reducedMotion="user" drops the transform and keeps just the opacity fade.
 */
export function Reveal({ children, as = "div", delay = 0, y = 18, id, className, style }: RevealProps) {
  const { ref, shown, hydrated } = useReveal<HTMLDivElement>();
  const show = !hydrated || shown;
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      id={id}
      className={className}
      style={style}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : y }}
      transition={show ? { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } : { duration: 0 }}
    >
      {children}
    </MotionTag>
  );
}

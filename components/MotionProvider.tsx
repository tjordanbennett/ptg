"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` is the idiomatic way to honour
 * prefers-reduced-motion: Motion drops transform and layout animations but
 * keeps opacity, so content still fades in rather than snapping.
 *
 * Handling it centrally here means every component renders the same markup on
 * both server and client — no per-component useReducedMotion() branch, so no
 * hydration mismatch. All our animation targets (the stat count-up, the
 * header reveal) still degrade correctly with JS off because their real,
 * final state is what ships in the server HTML.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

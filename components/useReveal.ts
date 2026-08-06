"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * useReveal — "has this element scrolled into view yet?" without
 * IntersectionObserver.
 *
 * Framer's own useInView is IO-based, and IO does NOT fire in several contexts
 * this project is viewed in (the in-app preview pane, occluded/automated tabs).
 * There, an IO-gated reveal would leave content permanently hidden — worse than
 * the JS-off case. So we trigger on a synchronous getBoundingClientRect read at
 * mount plus scroll/resize listeners, which fire everywhere.
 *
 * SSR-safe by construction: `hydrated` is false on the server and on the first
 * client render, so callers keep content VISIBLE until after hydration — JS off
 * (or a crawler) always sees the real content. `shown` then reveals it: at mount
 * if already in view, or on the first scroll/resize that brings it in. Anything
 * that is never scrolled to is off-screen anyway, so it's never a visible gap.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.9): {
  ref: RefObject<T>;
  shown: boolean;
  hydrated: boolean;
} {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const node = ref.current;
    if (!node) {
      setShown(true);
      return;
    }

    let done = false;
    const check = () => {
      if (done) return;
      const r = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Trigger once the element's top has risen into the lower part of the
      // viewport (and it isn't fully scrolled past above).
      if (r.top < vh * threshold && r.bottom > 0) {
        done = true;
        setShown(true);
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };

    check();
    if (!done) {
      window.addEventListener("scroll", check, { passive: true });
      window.addEventListener("resize", check);
    }
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [threshold]);

  return { ref, shown, hydrated };
}

/**
 * CustomerMarquee — the "Trusted by…" strip as a right-to-left scroller that
 * pauses on hover. Pure CSS, server component. Designed for the dark hero
 * band: institution logos render white via CSS filter; customers without a
 * sourced logo fall back to their name as quiet white text. The base state is
 * a static wrapped row (readable with no JS and under reduced motion); the
 * scroller turns on only when motion is safe (see globals.css).
 */
import Image from "next/image";

type Customer = { name: string; logo?: string };

/**
 * ▲ SIZING FIX (2026-08-17). Logos were sized `height: 32px; width: auto`, which
 * normalizes by height only. Two things went wrong with that:
 *
 *  1. Rendered widths ranged from 26px (OCTA) to 182px (Houston METRO) — a 7x
 *     spread — because a wide wordmark and a square seal have nothing in common
 *     at equal height. The strip read as chaotic.
 *  2. Five of the six source SVGs shipped with width/height but NO viewBox, so
 *     inside an <img> the artwork could not scale to the box and simply clipped.
 *     On stacked lockups (CUNY, UT Austin) that cropped the wordmark's own lines
 *     into each other — the "logos on top of one another" symptom. viewBox has
 *     been added to each file; this slot is the other half of the fix.
 *
 * Every mark now gets an identical box and `object-fit: contain`, so wide
 * wordmarks cap on WIDTH and tall/square marks cap on HEIGHT. Nothing crops,
 * nothing distorts, and optical weight is comparable across the row.
 */
const SLOT_W = 150;
const SLOT_H = 48;

const slotStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: SLOT_W,
  height: SLOT_H,
};

// White treatment: flatten any brand colour to black, then invert to white.
const logoStyle: React.CSSProperties = {
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "auto",
  height: "auto",
  objectFit: "contain",
  filter: "brightness(0) invert(1)",
  opacity: 0.8,
};

// Text fallback for customers with no sourced logo. Constrained to the same slot
// and allowed to wrap — previously `nowrap`, which let long names sprawl to
// 239px and out-shout the actual logos.
const nameStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13.5,
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: "0.01em",
  color: "rgba(255,255,255,.75)",
  textAlign: "center",
  textWrap: "balance",
};

function Mark({ customer, decorative }: { customer: Customer; decorative?: boolean }) {
  return (
    <span data-unverified="" aria-hidden={decorative || undefined} style={slotStyle}>
      {customer.logo ? (
        <Image src={customer.logo} alt={decorative ? "" : customer.name} width={SLOT_W} height={SLOT_H} style={logoStyle} unoptimized loading="eager" />
      ) : (
        <span style={nameStyle}>{customer.name}</span>
      )}
    </span>
  );
}

export function CustomerMarquee({ customers }: { customers: Customer[] }) {
  return (
    <div>
      {/* Static wrapped row — base / no-JS / reduced-motion fallback. Its
          `display` lives in CSS (.cust-static) so the media query can hide it;
          an inline display would win the cascade and show both layouts. */}
      <ul className="cust-static">
        {customers.map((c) => (
          <li key={c.name}>
            <Mark customer={c} />
          </li>
        ))}
      </ul>

      {/* Scroller — enabled only under prefers-reduced-motion: no-preference. */}
      <div className="cust-marquee-wrap">
        <div className="cust-marquee-track">
          <ul style={{ display: "flex", alignItems: "center", gap: 56, paddingRight: 56 }}>
            {customers.map((c) => (
              <li key={`a-${c.name}`}>
                <Mark customer={c} />
              </li>
            ))}
          </ul>
          {/* Duplicate list (aria-hidden) so translateX(-50%) loops seamlessly. */}
          <ul aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: 56, paddingRight: 56 }}>
            {customers.map((c) => (
              <li key={`b-${c.name}`}>
                <Mark customer={c} decorative />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

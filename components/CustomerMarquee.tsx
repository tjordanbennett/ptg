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

// White treatment: flatten any brand colour to black, then invert to white.
const logoStyle: React.CSSProperties = {
  display: "block",
  height: 32,
  width: "auto",
  filter: "brightness(0) invert(1)",
  opacity: 0.8,
};

const nameStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14.5,
  fontWeight: 700,
  lineHeight: 1.25,
  letterSpacing: "0.01em",
  color: "rgba(255,255,255,.75)",
  whiteSpace: "nowrap",
};

function Mark({ customer, decorative }: { customer: Customer; decorative?: boolean }) {
  return (
    <span data-unverified="" aria-hidden={decorative || undefined} style={{ display: "flex", alignItems: "center", minHeight: 40 }}>
      {customer.logo ? (
        <Image src={customer.logo} alt={decorative ? "" : customer.name} width={120} height={32} style={logoStyle} unoptimized loading="eager" />
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

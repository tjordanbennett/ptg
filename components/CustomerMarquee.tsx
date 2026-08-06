/**
 * CustomerMarquee — the "Trusted by…" names as a right-to-left scroller that
 * pauses on hover. Pure CSS, server component. The base state is a static
 * wrapped grid (readable with no JS and under reduced motion); the scroller
 * turns on only when motion is safe (see globals.css). Chip styling matches the
 * design's customer cells (white, hairline border, navy 700).
 */
const chip: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  minHeight: 84,
  padding: "20px 26px",
  background: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: 3,
  fontSize: 15,
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: "-0.01em",
  color: "#021F43",
  whiteSpace: "nowrap",
};

function Chip({ name, decorative }: { name: string; decorative?: boolean }) {
  return (
    <span data-unverified="" aria-hidden={decorative || undefined} style={chip}>
      {name}
    </span>
  );
}

export function CustomerMarquee({ names }: { names: string[] }) {
  return (
    <div>
      {/* Static wrapped grid — base / no-JS / reduced-motion fallback. Its
          `display` lives in CSS (.cust-static) so the media query can hide it;
          an inline display would win the cascade and show both layouts. */}
      <ul className="cust-static">
        {names.map((c) => (
          <li key={c} data-unverified="" style={{ ...chip, borderRadius: 0, whiteSpace: "normal", minHeight: 96, margin: "0 -1px -1px 0" }}>
            {c}
          </li>
        ))}
      </ul>

      {/* Scroller — enabled only under prefers-reduced-motion: no-preference. */}
      <div className="cust-marquee-wrap">
        <div className="cust-marquee-track">
          <ul style={{ display: "flex", gap: 14, paddingRight: 14 }}>
            {names.map((c) => (
              <li key={`a-${c}`}>
                <Chip name={c} />
              </li>
            ))}
          </ul>
          {/* Duplicate list (aria-hidden) so translateX(-50%) loops seamlessly. */}
          <ul aria-hidden="true" style={{ display: "flex", gap: 14, paddingRight: 14 }}>
            {names.map((c) => (
              <li key={`b-${c}`}>
                <Chip name={c} decorative />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

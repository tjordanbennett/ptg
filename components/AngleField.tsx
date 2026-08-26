/**
 * AngleField — a gradient colour field with a fine diagonal hairline texture
 * and a soft corner glow. Fills its positioned parent (`position: absolute;
 * inset: 0`).
 *
 * Companion to {@link WaveField}: same idea (a drawn gradient field instead of
 * a flat colour or a tiled motif), different geometry so the page doesn't
 * repeat itself. The hairlines run at the same angle family as the section
 * wedges, which is what ties the page's angular language together — it is the
 * device four of the five reference sites build their whole layout on.
 *
 * Replaces the tiled 4-point star motif on the delivery-journey band. The
 * gradient also fixes a real problem the flat colour had: a tiled background
 * stops dead at the section box, so it was being sliced off in a hard
 * horizontal line at each wedge.
 *
 * Rendered as plain inline SVG: server-rendered, no library, no JS, no motion —
 * nothing to honour under prefers-reduced-motion. Geometry comes from a fixed
 * loop, never Math.random(), so server and client markup match exactly.
 *
 * `preserveAspectRatio="xMidYMid slice"` (not "none") so the hairline angle
 * stays constant instead of shearing with the viewport aspect ratio.
 */
const VB = { w: 1440, h: 620 };

/** Gradient runs deep at the top-left and lifts toward the bottom-right, so the
 *  copy sits on the dark end and the open space carries the light. */

/** Hairline rake, in degrees, rising to the right. */
const ANGLE = -24;
const GAP = 44;

export function AngleField({
  stops = [
    { offset: "0%", color: "#011C55" },
    { offset: "45%", color: "#0034A0" },
    { offset: "100%", color: "#0C46BE" },
  ],
  lineColor = "#FFFFFF",
  glowColor = "#4D8BFF",
  scrim = [
    { offset: "0%", color: "#011C55", opacity: 0 },
    { offset: "52%", color: "#011C55", opacity: 0.12 },
    { offset: "100%", color: "#011C55", opacity: 0.3 },
  ],
  id = "anglefield",
}: {
  stops?: { offset: string; color: string }[];
  lineColor?: string;
  /** Drawn LAST, over the hairlines. Set to [] to remove. */
  scrim?: { offset: string; color: string; opacity: number }[];
  /** Set to "none" to drop the corner glow. */
  glowColor?: string;
  /** Must be unique per instance on a page — SVG gradient ids are global. */
  id?: string;
}) {
  // Drawn as horizontal rules inside a rotated group: far fewer elements than
  // computing each diagonal's endpoints, and the angle stays exact.
  const lines: { y: number; o: number }[] = [];
  for (let i = 0, y = -420; y <= 1040; y += GAP, i++) {
    // Slow modulation so the rake reads as drifting density, not a screen door.
    lines.push({ y, o: Number((0.075 + 0.035 * Math.cos((i / 12) * Math.PI)).toFixed(4)) });
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          {stops.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
        {scrim.length > 0 && (
          <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="1">
            {scrim.map((c) => (
              <stop key={c.offset} offset={c.offset} stopColor={c.color} stopOpacity={c.opacity} />
            ))}
          </linearGradient>
        )}
        {glowColor !== "none" && (
          <radialGradient id={`${id}-glow`}>
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.16" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
          </radialGradient>
        )}
      </defs>
      <rect width={VB.w} height={VB.h} fill={`url(#${id}-g)`} />
      {glowColor !== "none" && (
        <ellipse cx="1250" cy="585" rx="780" ry="500" fill={`url(#${id}-glow)`} />
      )}
      <g
        transform={`rotate(${ANGLE} ${VB.w / 2} ${VB.h / 2})`}
        stroke={lineColor}
        strokeWidth={1}
      >
        {lines.map((l) => (
          <line key={l.y} x1={-820} y1={l.y} x2={VB.w + 820} y2={l.y} strokeOpacity={l.o} />
        ))}
      </g>
      {/* Over the hairlines, not under them: a white rule crossing a 12px label
          is what actually sets the worst-case contrast here, so the wash has to
          come last. It also quiets the texture behind the copy and leaves it at
          full strength in the open space on the right. */}
      {scrim.length > 0 && <rect width={VB.w} height={VB.h} fill={`url(#${id}-s)`} />}
    </svg>
  );
}

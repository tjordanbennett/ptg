/**
 * WaveField — a navy→ember gradient field with concentric wave arcs sweeping
 * through it. Fills its positioned parent (`position: absolute; inset: 0`).
 *
 * Rendered as a plain inline SVG: server-rendered, no library, no canvas, no
 * JS. Purely decorative, so it is aria-hidden and there is nothing to honour
 * under prefers-reduced-motion — it does not move.
 *
 * The arc geometry comes from a fixed loop, never Math.random(), so server and
 * client markup match exactly and there is no hydration mismatch.
 *
 * LAYER ORDER MATTERS. The legibility scrim is drawn INSIDE this SVG, between
 * the gradient and the arcs, so the arcs stay visible across the dark end
 * instead of being washed out by an overlay sitting on top of the whole thing.
 * Callers should not add their own scrim over it.
 *
 * CONTRAST: the gradient reaches full Signal Ember at the far corner, where
 * white body text would only make ~3.4:1. The default scrim holds the left
 * ~60% at Midnight Navy so copy laid over that side stays well past AA; keep
 * text on the dark end.
 */

/** `preserveAspectRatio="slice"` crops to fill, so this box is a drawing frame,
 *  not a layout size. The arc centre sits just off the top-left corner — near
 *  enough that the curvature reads across the panel rather than flattening
 *  into near-vertical lines. */
const VB = { w: 1440, h: 520 };
const CX = -150;
const CY = -150;
const R0 = 300;
const STEP = 42;
const RINGS = 36;

export function WaveField({
  stops = [
    { offset: "0%", color: "#021F43" },
    { offset: "34%", color: "#0034A0" },
    { offset: "72%", color: "#8E2A0A" },
    { offset: "100%", color: "#EB4900" },
  ],
  scrim = [
    { offset: "0%", color: "#021F43", opacity: 0.86 },
    { offset: "55%", color: "#021F43", opacity: 0.6 },
    { offset: "100%", color: "#021F43", opacity: 0.22 },
  ],
  lineColor = "#FFFFFF",
  id = "wavefield",
}: {
  stops?: { offset: string; color: string }[];
  /** Set to [] for no legibility scrim (only safe where nothing sits on top). */
  scrim?: { offset: string; color: string; opacity: number }[];
  lineColor?: string;
  /** Must be unique per instance on a page — SVG gradient ids are global. */
  id?: string;
}) {
  const rings = Array.from({ length: RINGS }, (_, i) => {
    const r = R0 + i * STEP;
    // Slow 3-band modulation so the arcs read as drifting density rather than
    // a uniform screen door.
    const o = 0.11 + 0.055 * Math.cos((i / RINGS) * Math.PI * 6);
    return { r, o: Number(o.toFixed(4)) };
  });

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="1" x2="1" y2="0">
          {stops.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
        {scrim.length > 0 && (
          <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="0">
            {scrim.map((s) => (
              <stop key={s.offset} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity} />
            ))}
          </linearGradient>
        )}
      </defs>
      <rect width={VB.w} height={VB.h} fill={`url(#${id}-g)`} />
      {scrim.length > 0 && <rect width={VB.w} height={VB.h} fill={`url(#${id}-s)`} />}
      <g fill="none" stroke={lineColor} strokeWidth={1}>
        {rings.map((ring) => (
          <circle key={ring.r} cx={CX} cy={CY} r={ring.r} strokeOpacity={ring.o} />
        ))}
      </g>
    </svg>
  );
}

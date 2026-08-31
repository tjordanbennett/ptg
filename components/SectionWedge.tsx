/**
 * SectionWedge — the angled transition between two colour fields, with the 2px
 * Ember hairline on the cut that the BUILD-PLAN specifies. Four of the five
 * reference sites use angled section transitions as their spine, and PTG's own
 * brand guide independently calls for chevrons; until now the homepage cut
 * between every colour field with a flat 1px rule instead.
 *
 * Drawn as one inline SVG rather than clip-path so the hairline can use
 * `vectorEffect="non-scaling-stroke"` — the wedge is scaled non-uniformly
 * (`preserveAspectRatio="none"`) to stay a shallow angle at every width, which
 * would otherwise squash a stroked line to a hair on wide viewports and a slab
 * on narrow ones. Non-scaling-stroke keeps it exactly 2px everywhere.
 *
 * TWO MODES:
 *
 *   Default (block) — the band is its own element in the flow, painted `to`,
 *   with the `from` triangle on top. Correct when the section BELOW is a flat
 *   colour, because `to` matches it exactly and the join is invisible.
 *
 *   `slant="flat"` — no wedge at all, just the 2px hairline. Not every boundary
 *   wants an angle: where the band above ends in its own horizontal element (the
 *   hero's customer logo strip) a diagonal cuts through it instead of closing it.
 *
 *   `overlay` — the band paints NO background, only ONE triangle plus the
 *   hairline, and positions itself absolutely over an edge of the section that
 *   owns it. Required whenever the gradient/image/texture side of the cut would
 *   otherwise be replaced by a flat fill and sliced off in a hard horizontal
 *   line. The owning section must be `position: relative` and add
 *   {@link WEDGE_H} to the padding on that edge so the copy clears the cut.
 *
 *   `edge` says which edge of the owning section the overlay sits on, and so
 *   which side keeps its background:
 *     - `edge="top"` paints the `from` triangle (the section ABOVE's colour);
 *       the owning section's own background shows through the rest.
 *     - `edge="bottom"` paints the `to` triangle (the section BELOW's colour);
 *       again the owning section's background shows through the rest.
 *   A section with a textured background sitting between two flat ones — the
 *   delivery-journey band — therefore owns both of its wedges.
 *
 * Purely decorative: aria-hidden, no text, no motion — nothing to honour under
 * prefers-reduced-motion.
 */

/** Shared so a section using `overlay` can pad by exactly the wedge height. */
export const WEDGE_H = "clamp(34px,4.4vw,72px)";

export function SectionWedge({
  from,
  to,
  slant = "right",
  height = WEDGE_H,
  hairline = "#EB4900",
  overlay = false,
  edge = "top",
}: {
  /** Colour of the section above the cut. */
  from: string;
  /** Colour of the section below. Ignored (and unnecessary) when `overlay`. */
  to?: string;
  /** Which side the upper colour reaches furthest down, or "flat" for a
   *  straight cut that keeps only the hairline. */
  slant?: "left" | "right" | "flat";
  height?: string;
  /** Set to "none" to drop the Ember hairline on low-contrast cuts. */
  hairline?: string;
  /** Paint a single triangle over one edge of the section that owns it. */
  overlay?: boolean;
  /** Which edge of the owning section the overlay sits on. */
  edge?: "top" | "bottom";
}) {
  // Same colour on both sides: there is no colour edge for an angle to reveal,
  // so the wedge would render as nothing but a diagonal Ember line floating in
  // a single field. That is what a navy hero above a navy stats band produced.
  // Fall through to the flat rule, which is the honest divider for that case.
  //
  // A straight cut is also what some boundaries want outright — where the band
  // above is itself horizontal (the hero's customer logo strip) an angle would
  // slice through it rather than sit under it.
  //
  // The flat rule has to honour `overlay` too, or an overlay caller gets a 2px
  // bar in normal flow at the top of its own content instead of on its edge.
  if (slant === "flat" || (to && from === to)) {
    return (
      <div
        aria-hidden="true"
        style={
          overlay
            ? { position: "absolute", [edge]: 0, left: 0, right: 0, height: 2, background: hairline, zIndex: 1 }
            : { height: 2, background: hairline }
        }
      />
    );
  }

  // viewBox is 100×10 and stretched, so these are proportions, not pixels. The
  // two triangles are complementary halves of the band, split by the diagonal.
  //
  // OVERSHOOT (`O`): every vertex that is NOT on the diagonal is pushed outside
  // the viewBox, and the diagonal's own endpoints are extended along the same
  // slope. The <svg> clips to its bounds, so the overshoot costs nothing — but
  // it means the fill reaches the very last device pixel on all three outer
  // edges. Without it the polygon edge can land mid-pixel on fractional-DPR or
  // zoomed displays, antialias, and leave a hairline of whatever sits BEHIND
  // the wedge showing through: on the delivery-journey band that was a 1px
  // strip of the gradient reading as a stray horizontal rule above Careers.
  // The diagonal itself is untouched — only its endpoints move, along its own
  // line, so the visible cut is exactly where it was.
  const O = 3;                    // overshoot, in viewBox units
  const dy = O / 10;              // the cut rises 10 units over 100, so 0.1 per unit
  // The cut, extended past both edges along its own slope.
  const cut = slant === "right"
    ? { x1: -O, y1: -dy, x2: 100 + O, y2: 10 + dy }   // descends to the right
    : { x1: -O, y1: 10 + dy, x2: 100 + O, y2: -dy };  // descends to the left
  const T = -O;                   // outer top
  const B = 10 + O;               // outer bottom
  // Each triangle: both cut endpoints, then out to the two far corners.
  const upper = `${cut.x1},${cut.y1} ${cut.x2},${cut.y2} ${cut.x2},${T} ${cut.x1},${T}`;
  const lower = `${cut.x1},${cut.y1} ${cut.x2},${cut.y2} ${cut.x2},${B} ${cut.x1},${B}`;
  const bottomEdge = overlay && edge === "bottom";
  const points = bottomEdge ? lower : upper;
  const fill = bottomEdge ? to : from;
  // Hairline runs the extended cut too, so it reaches both outer edges.
  const { x1, y1, x2, y2 } = cut;

  return (
    <div
      aria-hidden="true"
      style={
        overlay
          ? { position: "absolute", [edge]: 0, left: 0, right: 0, height, lineHeight: 0, zIndex: 1 }
          : { background: to, height, lineHeight: 0 }
      }
    >
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        focusable="false"
        style={{ display: "block" }}
      >
        <polygon points={points} fill={fill} />
        {hairline !== "none" && (
          <line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={hairline}
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  );
}

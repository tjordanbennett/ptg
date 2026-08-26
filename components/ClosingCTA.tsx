import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EyebrowBar } from "@/components/EyebrowBar";
import { WaveField } from "@/components/WaveField";
import { SectionWedge, WEDGE_H } from "@/components/SectionWedge";

/**
 * ClosingCTA — the band every page signs off with, above the footer.
 *
 * One definition for the whole site. It used to be three: the homepage's, a
 * hand-rolled copy in the procurement page, and the one inside StandardPage.
 * They had already drifted on heading size, padding and the secondary CTA, which
 * is exactly what a duplicated closing band does over time.
 *
 * Proportions here are the homepage's, since `public/_design/homepage.html` is
 * the declared design source of truth; interior pages moved up to match.
 *
 * The secondary CTA is a glass button rather than an underline link. That is
 * the homepage's treatment, it matches the hero's secondary, and paired
 * primary/secondary buttons are what all five reference sites do. Pass
 * `secondary="underline"` for the older interior-page look.
 *
 * `from` MUST be the colour of the band directly above on that page, or the
 * wedge will cut against the wrong colour. Interior pages get it from
 * `sectionBg()` in StandardPage.tsx; bespoke pages pass it literally.
 */
const HAIRLINE = "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)";

export function ClosingCTA({
  eyebrow,
  heading,
  body,
  ctas,
  id = "connect",
  from = "#FFFFFF",
  secondary = "glass",
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  ctas: { label: string; href: string }[];
  id?: string;
  /** Colour of the band directly above, for the wedge. */
  from?: string;
  /** Treatment for the second CTA onward. */
  secondary?: "glass" | "underline";
}) {
  return (
    <section id={id} aria-labelledby="cta-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden", scrollMarginTop: 78 }}>
      {/* Drawn navy→ember field. WaveField carries its own legibility scrim
          beneath the arcs — don't layer another one over it or the waves go. */}
      <WaveField id={`${id}-wave`} />
      {/* Overlay, because the background is a gradient: a block wedge would
          repaint the cut in flat navy and slice the field off at a hard
          horizontal line. Top padding carries WEDGE_H so copy clears the cut. */}
      <SectionWedge from={from} slant="left" overlay edge="top" />
      <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 5, background: HAIRLINE, zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: `calc(clamp(70px,8vw,124px) + ${WEDGE_H}) clamp(20px,4vw,48px) clamp(70px,8vw,124px)` }}>
        <Reveal as="div">
          {eyebrow ? <EyebrowBar label={eyebrow} dark mb={22} /> : null}
          <h2 id="cta-h" style={{ margin: body ? "0 0 22px" : "0 0 34px", fontSize: "clamp(29px,3.7vw,52px)", fontWeight: 800, lineHeight: 1.09, letterSpacing: "-0.03em", maxWidth: "20ch", textWrap: "balance" }}>{heading}</h2>
          {body ? <p style={{ margin: "0 0 36px", fontSize: "clamp(17px,1.4vw,21px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: "62ch", textWrap: "balance" }}>{body}</p> : null}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
            {ctas.map((c, i) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className={i === 0 ? "hov-cta-emberwhite cta" : secondary === "glass" ? "hov-cta-glass cta" : "hov-underline cta-text"}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

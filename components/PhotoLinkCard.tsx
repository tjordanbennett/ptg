import Image from "next/image";
import Link from "next/link";
import type { ImageRef } from "@/content/types";

/**
 * PhotoLinkCard — a photographic link card: full-bleed image, a progressive
 * backdrop-blur masked to fade in toward the bottom, a navy gradient for text
 * legibility, and content pinned to the lower-left. Lifts and slow-zooms the
 * image on hover/focus (.hov-pathphoto in globals.css).
 *
 * Extracted from the homepage "two paths" cards so the same treatment can be
 * reused elsewhere (e.g. the contact page's quick links) instead of copied.
 * With a `ctaLabel` it renders title → body → labelled arrow (homepage shape);
 * without one it puts the arrow on the title line (compact shape).
 */

function Arrow() {
  return (
    <span aria-hidden="true" className="lnk-arrow">
      <span style={{ width: 7, height: 7, borderTop: "2px solid currentColor", borderRight: "2px solid currentColor", transform: "rotate(45deg)", display: "block" }} />
    </span>
  );
}

export function PhotoLinkCard({
  href,
  image,
  kicker,
  title,
  body,
  ctaLabel,
  ratio = "1 / 1",
  kickerColor = "#80CEFF",
}: {
  href: string;
  image: ImageRef;
  kicker: string;
  title: string;
  body?: string;
  ctaLabel?: string;
  ratio?: string;
  kickerColor?: string;
}) {
  return (
    <Link href={href} className="hov-pathphoto hov-move" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", aspectRatio: ratio, padding: "clamp(28px,3vw,40px)", borderRadius: 6, overflow: "hidden", color: "#FFFFFF" }}>
      <Image src={image.src} alt={image.alt} fill sizes="(min-width:1040px) 50vw, 100vw" style={{ objectFit: "cover" }} />
      {/* Progressive backdrop blur — masked so it fades in toward the bottom, under the colour gradient */}
      <div aria-hidden="true" style={{ position: "absolute", inset: "auto 0 0 0", height: "62%", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", WebkitMaskImage: "linear-gradient(to top, #000 0%, #000 45%, transparent 100%)", maskImage: "linear-gradient(to top, #000 0%, #000 45%, transparent 100%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,31,67,.92) 0%, rgba(2,31,67,.55) 42%, rgba(2,31,67,.12) 68%, transparent 100%)" }} />
      <div style={{ position: "relative" }}>
        <p style={{ margin: "0 0 14px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: kickerColor }}>{kicker}</p>
        <p style={{ margin: body || ctaLabel ? "0 0 12px" : 0, display: "inline-flex", alignItems: "center", gap: 10, fontSize: "clamp(19.5px,1.75vw,25px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
          {title}
          {!ctaLabel ? <Arrow /> : null}
        </p>
        {body ? <p style={{ margin: "0 0 20px", fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.85)", maxWidth: "50ch", textWrap: "balance" }}>{body}</p> : null}
        {ctaLabel ? <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 15, fontWeight: 700 }}>{ctaLabel} <Arrow /></span> : null}
      </div>
    </Link>
  );
}

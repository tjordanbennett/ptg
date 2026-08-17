import Link from "next/link";
import type { SiteSettings } from "@/content/types";

/** SiteFooter — dark footer (#011733) matching public/_design/*.html. */
export function SiteFooter({ site }: { site: SiteSettings }) {
  const f = site.footer;
  return (
    <footer style={{ background: "#011733", color: "#C9D8E8" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(52px,5.5vw,80px) clamp(20px,4vw,48px) 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px,100%),1fr))", gap: "clamp(28px,3vw,44px)", paddingBottom: "clamp(40px,4vw,56px)" }}>
          {/* Brand block */}
          <div style={{ minWidth: 200 }}>
            {/* Same logo asset as the nav (public/ptg-logo.svg), whitened for the
                dark footer with the filter the customer marquee also uses. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ptg-logo.svg" alt="Precision Task Group" width={113} height={36} style={{ display: "block", width: "auto", height: 36, marginBottom: 18, filter: "brightness(0) invert(1)" }} />
            <p style={{ margin: "0 0 20px", fontSize: 14.5, fontWeight: 700, lineHeight: 1.5, color: "#FFFFFF" }}>{site.tagline}</p>
            <p style={{ margin: "0 0 6px", fontSize: 14, lineHeight: 1.65 }}>
              {f.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < f.address.lines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65 }}>{f.address.phone}</p>
            <ul style={{ display: "flex", gap: 8, marginTop: 20 }}>
              {f.social.map((s) => (
                <li key={s.abbr}>
                  <a href={s.href} aria-label={s.label} className="hov-social" style={{ display: "grid", placeItems: "center", width: 38, height: 38, borderRadius: 2, fontSize: 12, fontWeight: 700 }}>
                    {s.abbr}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {f.columns.map((col) => (
            <div key={col.title}>
              <p style={{ margin: "0 0 16px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase", color: "#80CEFF" }}>{col.title}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hov-footerlink" style={{ fontSize: 14.5, lineHeight: 1.4 }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(201,216,232,.18)", padding: "26px 0 34px", display: "flex", flexWrap: "wrap", gap: "16px 32px", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ margin: 0, fontSize: 13, letterSpacing: ".02em" }}>{f.copyright}</p>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
            {f.legalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hov-footerlink" style={{ fontSize: 13 }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

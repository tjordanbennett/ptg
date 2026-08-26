import Link from "next/link";
import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EyebrowBar } from "@/components/EyebrowBar";
import { ParallaxStars } from "@/components/ParallaxStars";
import { Reveal } from "@/components/Reveal";

/**
 * 404. Next's default is an unstyled black screen — and PTG's live site serves a
 * bare Wix "This page isn't available."
 *
 * The idea: PTG's entire pitch is helping public buyers find the right route.
 * A dead end is the one moment a visitor is definitely lost, so this page routes
 * rather than apologises. The zero in "404" is PTG's own four-point brand mark,
 * in Vivid Leaf — the guide reserves that colour for "you are here" indicators,
 * and this is literally one.
 *
 * Reliability: no background-clip text, no clip-path, no scroll-timeline. Every
 * element's base state is the correct visible state; the star drift is the
 * existing ParallaxStars (aria-hidden, static with JS off, off under reduced
 * motion). Fails to a perfectly readable page.
 */

const STAR_BLUE =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z%22 fill=%22%230034A0%22/%3E%3C/svg%3E')";
const HAIRLINE = "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

/** PTG's four-point mark, standing in for the zero. */
function StarZero() {
  return (
    <svg
      viewBox="0 0 74 74"
      aria-hidden="true"
      focusable="false"
      style={{
        display: "block",
        width: "0.72em",
        height: "0.72em",
        flex: "0 0 auto",
        filter: "drop-shadow(0 0 34px rgba(180,255,0,.35))",
      }}
    >
      <path d="M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z" fill="#B4FF00" />
    </svg>
  );
}

const ROUTES = [
  {
    label: "Procurement & Contracts",
    href: "/procurement-contracts",
    body: "Six cooperative and government contract vehicles. Find the one your organization can already use.",
    accent: "#EB4900",
  },
  {
    label: "Services",
    href: "/#services",
    body: "Workday advisory, implementation, AMS and innovation, plus ServiceNow.",
    accent: "#0034A0",
  },
  {
    label: "Industries",
    href: "/#industries",
    body: "Government, higher education, transit and utilities, nonprofit and healthcare.",
    accent: "#0034A0",
  },
  {
    label: "Talk to us",
    href: "/contact",
    body: "Tell us what you were looking for and we'll point you straight at it.",
    accent: "#EB4900",
  },
];

export default async function NotFound() {
  const site = await getSiteSettings();

  return (
    <>
      <SiteHeader site={site} />
      <main id="main">
        {/* ── navy field: the mark ─────────────────────────────── */}
        <section
          aria-labelledby="nf-h"
          style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}
        >
          <ParallaxStars
            amount={70}
            offset={["start start", "end start"]}
            style={{
              backgroundImage: STAR_BLUE,
              backgroundSize: "74px 74px",
              opacity: 0.5,
              WebkitMaskImage: "linear-gradient(150deg, transparent 38%, #000 100%)",
              maskImage: "linear-gradient(150deg, transparent 38%, #000 100%)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "46%",
              height: "100%",
              background: "linear-gradient(210deg, rgba(0,52,160,.42), rgba(2,31,67,0) 62%)",
            }}
          />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 4, background: HAIRLINE }} />

          <div
            style={{
              position: "relative",
              maxWidth: 1320,
              margin: "0 auto",
              padding: "clamp(56px,7vw,104px) clamp(20px,4vw,48px) clamp(60px,7vw,110px)",
            }}
          >
            <Reveal as="div" style={{ maxWidth: 780 }}>
              <EyebrowBar label="Error 404" dark mb={22} />

              {/* Visual mark. Read as "404" by assistive tech via the sr-only
                  string below; the glyphs themselves are hidden so the star
                  isn't announced as a stray character. */}
              <div
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(6px,1vw,14px)",
                  fontSize: "clamp(88px,15vw,210px)",
                  fontWeight: 800,
                  lineHeight: 0.82,
                  letterSpacing: "-0.055em",
                  marginBottom: "clamp(26px,3.4vw,44px)",
                  color: "#FFFFFF",
                }}
              >
                <span>4</span>
                <StarZero />
                <span>4</span>
              </div>
              <span className="sr-only">Error 404. Page not found.</span>

              <h1
                id="nf-h"
                style={{
                  margin: "0 0 22px",
                  fontSize: "clamp(27px,3.4vw,47px)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  letterSpacing: "-0.028em",
                  textWrap: "balance",
                }}
              >
                This route doesn&apos;t exist.
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: "clamp(17px,1.35vw,20px)",
                  lineHeight: 1.6,
                  color: "#DDE6F0",
                  maxWidth: "56ch",
                  textWrap: "balance",
                }}
              >
                The page you were after moved, got renamed, or never existed. Helping
                people find the right route is more or less the whole job here, so
                let&apos;s get you back on one.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── the actual routes ────────────────────────────────── */}
        <section aria-labelledby="nf-routes-h" style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(56px,6vw,96px) clamp(20px,4vw,48px)" }}>
            <Reveal as="div" style={{ maxWidth: 640, marginBottom: "clamp(30px,3.6vw,50px)" }}>
              <EyebrowBar label="Where people usually go" />
              <h2
                id="nf-routes-h"
                style={{
                  margin: 0,
                  fontSize: "clamp(26px,2.8vw,39px)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.028em",
                  color: "#021F43",
                  textWrap: "balance",
                }}
              >
                Pick it back up here.
              </h2>
            </Reveal>

            <ul
              style={{
                display: "grid",
                // 260 not 288: at the 1320 container, 288 lands 4 columns just
                // over the available width and drops to an orphaned 3+1.
                gridTemplateColumns: "repeat(auto-fit, minmax(min(260px,100%),1fr))",
                gap: "clamp(18px,2vw,26px)",
              }}
            >
              {ROUTES.map((r, i) => (
                <Reveal
                  as="li"
                  key={r.href}
                  delay={i * 0.05}
                  className="hov-card"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: 6,
                    padding: "clamp(24px,2.6vw,32px)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div aria-hidden="true" style={{ width: 34, height: 3, background: r.accent, marginBottom: 18 }} />
                  <h3 style={{ margin: "0 0 10px", fontSize: "clamp(18px,1.6vw,22px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.018em" }}>
                    <Link href={r.href} className="hov-cardlink" style={{ color: "inherit", textDecoration: "none" }}>
                      {r.label}
                    </Link>
                  </h3>
                  <p style={{ margin: "0 0 18px", fontSize: 16.5, lineHeight: 1.6, color: "#334155", textWrap: "balance" }}>{r.body}</p>
                  <Link
                    href={r.href}
                    className="hov-link"
                    style={{
                      marginTop: "auto",
                      fontSize: 14,
                      fontWeight: 700,
                      letterSpacing: ".04em",
                      textTransform: "uppercase",
                      color: "#0034A0",
                      textDecoration: "none",
                    }}
                  >
                    Go there <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter site={site} />
    </>
  );
}

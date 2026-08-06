import type { Metadata } from "next";
import Link from "next/link";
import { getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { ParallaxStars } from "@/components/ParallaxStars";
import { EyebrowBar } from "@/components/EyebrowBar";
import { PhotoLinkCard } from "@/components/PhotoLinkCard";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your organization and what you're trying to accomplish. We'll point you to the right person — and to a cooperative contract if one makes the path easier.",
};

const STAR_BLUE =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z%22 fill=%22%230034A0%22/%3E%3C/svg%3E')";
const HAIRLINE = "linear-gradient(90deg, #021F43, #0034A0 46%, #EB4900)";

export default async function ContactPage() {
  const site = await getSiteSettings();
  const a = site.footer.address;

  return (
    <>
      <SiteHeader site={site} />
      <main id="main">
        {/* ══ HERO ══ */}
        <section aria-labelledby="hero-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          <ParallaxStars amount={70} offset={["start start", "end start"]} style={{ backgroundImage: STAR_BLUE, backgroundSize: "74px 74px", opacity: 0.5, WebkitMaskImage: "linear-gradient(115deg, transparent 44%, #000 100%)", maskImage: "linear-gradient(115deg, transparent 44%, #000 100%)" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: 0, bottom: 0, right: 0, height: 4, background: HAIRLINE }} />
          <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "clamp(20px,2.4vw,28px) clamp(20px,4vw,48px) clamp(48px,5vw,76px)" }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "clamp(28px,4vw,48px)" }}>
              <ol style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", fontSize: 13, fontWeight: 600 }}>
                <li><Link href="/" className="hov-footerlink" style={{ color: "#80CEFF" }}>Home</Link></li>
                <li aria-hidden="true" style={{ color: "#5B7FA8" }}>/</li>
                <li style={{ color: "#C9D8E8" }}>Contact</li>
              </ol>
            </nav>
            <EyebrowBar label="Connect with us" dark mb={18} />
            <h1 id="hero-h" style={{ margin: "0 0 22px", fontSize: "clamp(38px,5vw,72px)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.03em" }}>Let&apos;s talk.</h1>
            <p style={{ margin: 0, fontSize: "clamp(17px,1.35vw,20px)", lineHeight: 1.6, color: "#DDE6F0", maxWidth: "60ch", textWrap: "balance" }}>
              Tell us about your organization and what you&apos;re trying to accomplish. We&apos;ll point you to the right person — and if a cooperative contract makes the path easier, we&apos;ll tell you which one applies.
            </p>
          </div>
        </section>

        {/* ══ FORM + PANEL ══ */}
        <section style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(52px,6vw,88px) clamp(20px,4vw,48px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "clamp(34px,4.5vw,72px)", alignItems: "start" }}>
              <Reveal as="div" style={{ order: 0 }}>
                <h2 style={{ margin: "0 0 24px", fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 800, letterSpacing: "-0.022em" }}>Send us a message</h2>
                <ContactForm />
              </Reveal>

              <Reveal as="div" delay={0.08} style={{ display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,36px)" }}>
                <div style={{ background: "#021F43", color: "#FFFFFF", borderRadius: 4, padding: "clamp(26px,3vw,36px)", position: "relative", overflow: "hidden" }}>
                  <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, right: 0, height: 3, background: HAIRLINE }} />
                  <p style={{ margin: "0 0 16px", fontSize: 12, fontWeight: 700, letterSpacing: ".13em", textTransform: "uppercase", color: "#80CEFF" }}>Precision Task Group</p>
                  <address style={{ fontStyle: "normal", fontSize: 16, lineHeight: 1.7, color: "#DDE6F0" }}>
                    {site.legalName}<br />
                    {a.lines.map((l) => <span key={l}>{l}<br /></span>)}
                    <span style={{ display: "inline-block", marginTop: 12 }}>
                      <a href={`tel:${a.phone.replace(/[^\d]/g, "")}`} className="hov-underline" style={{ color: "#80CEFF", borderBottom: 0 }}>{a.phone}</a>
                      {" · "}
                      <a href={`mailto:${a.email}`} className="hov-underline" style={{ color: "#80CEFF", borderBottom: 0 }}>{a.email}</a>
                    </span>
                  </address>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {/* Same photographic treatment and images the homepage uses for
                      these two destinations — keeps the visual language consistent. */}
                  <PhotoLinkCard
                    href="/procurement-contracts"
                    image={{ src: "/images/evaluating-partner.png", alt: "Consultants reviewing plans with a client in a glass-walled meeting room overlooking a university campus", width: 1254, height: 1254 }}
                    kicker="Looking for a contract vehicle?"
                    title="Procurement & Contracts"
                    ratio="16 / 10"
                  />
                  <PhotoLinkCard
                    href="/about/careers"
                    image={{ src: "/images/consultant.png", alt: "Consultants talking around a table covered in site plans and photographs in a warm studio office", width: 1254, height: 1254 }}
                    kicker="Interested in joining PTG?"
                    title="Careers & Culture"
                    ratio="16 / 10"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter site={site} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRole, getRoleSlugs, getSiteSettings } from "@/lib/content";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ClosingCTA } from "@/components/ClosingCTA";
import { EyebrowBar } from "@/components/EyebrowBar";
import { Reveal } from "@/components/Reveal";
import { ParallaxStars } from "@/components/ParallaxStars";
import { SectionWedge, WEDGE_H } from "@/components/SectionWedge";
import { SampleChip } from "@/components/RoleList";

/**
 * Job posting detail.
 *
 * ⚠️ The postings behind this route are SAMPLE content (content/pages/roles.ts).
 * The page states that explicitly at the top and is excluded from search the
 * same way the rest of the build is, because a plausible-looking job posting on
 * a real firm's site is something a real person would act on.
 */
export function generateStaticParams() {
  return getRoleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const role = await getRole(params.slug);
  if (!role) return {};
  return { title: `${role.title} (sample posting)`, description: role.summary };
}

const STAR_BLUE =
  "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2274%22 height=%2274%22%3E%3Cpath d=%22M37 9 41 33 65 37 41 41 37 65 33 41 9 37 33 33Z%22 fill=%22%230034A0%22/%3E%3C/svg%3E')";

const H3: React.CSSProperties = { margin: "0 0 16px", fontSize: "clamp(19px,1.7vw,23px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.2 };

function Bullets({ items }: { items: string[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((it) => (
        <li key={it} style={{ display: "flex", gap: 14, alignItems: "flex-start", fontSize: 17, lineHeight: 1.6, color: "#334155" }}>
          <span aria-hidden="true" style={{ flex: "0 0 auto", width: 8, height: 8, marginTop: 8, background: "#EB4900", transform: "rotate(45deg)" }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function RolePage({ params }: { params: { slug: string } }) {
  const role = await getRole(params.slug);
  if (!role) notFound();
  const site = await getSiteSettings();

  return (
    <>
      <SiteHeader site={site} currentLabel="About" />
      <main id="main">
        <section aria-labelledby="role-h" style={{ position: "relative", background: "#021F43", color: "#FFFFFF", overflow: "hidden" }}>
          {/* This route hand-rolls its header instead of using PageHero (it
              needs the Sample chip beside the eyebrow), which is how it ended
              up the one interior hero with no star field and no cut. */}
          <ParallaxStars
            amount={70}
            offset={["start start", "end start"]}
            style={{ backgroundImage: STAR_BLUE, backgroundSize: "74px 74px", opacity: 0.5, WebkitMaskImage: "linear-gradient(115deg, transparent 44%, #000 100%)", maskImage: "linear-gradient(115deg, transparent 44%, #000 100%)" }}
          />
          <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, width: "48%", height: "100%", background: "linear-gradient(210deg, rgba(0,52,160,.42), rgba(2,31,67,0) 60%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 55%)", maskImage: "linear-gradient(to right, transparent 0%, #000 55%)" }} />
          <SectionWedge from="#021F43" to="#FFFFFF" slant="right" overlay edge="bottom" />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1320, margin: "0 auto", padding: `clamp(20px,2.4vw,28px) clamp(20px,4vw,48px) calc(clamp(48px,5vw,72px) + ${WEDGE_H})` }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "clamp(26px,3.4vw,44px)" }}>
              <ol style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", fontSize: 13, fontWeight: 600 }}>
                {[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Careers & Culture", href: "/about/careers" }].map((c, i) => (
                  <li key={c.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {i > 0 ? <span aria-hidden="true" style={{ color: "#7C9BBA" }}>/</span> : null}
                    <Link href={c.href} className="hov-footerlink" style={{ color: "#80CEFF" }}>{c.label}</Link>
                  </li>
                ))}
                <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span aria-hidden="true" style={{ color: "#7C9BBA" }}>/</span>
                  <span style={{ color: "#C9D8E8" }}>{role.title}</span>
                </li>
              </ol>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
              <EyebrowBar label="Open role" dark mb={0} />
              <SampleChip dark />
            </div>
            <h1 id="role-h" style={{ margin: "0 0 16px", fontSize: "clamp(31px,3.9vw,54px)", fontWeight: 800, lineHeight: 1.09, letterSpacing: "-0.028em", textWrap: "balance" }}>{role.title}</h1>
            <p style={{ margin: 0, fontSize: "clamp(15.5px,1.2vw,17.5px)", fontWeight: 700, color: "#80CEFF" }}>{role.team} · {role.location} · {role.type}</p>
          </div>
        </section>

        <section style={{ background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "clamp(56px,6vw,96px) clamp(20px,4vw,48px)" }}>
            {/* Says it plainly, in the reading flow — not only in a chip. */}
            <Reveal as="p" data-unverified="" style={{ margin: "0 0 clamp(34px,4vw,52px)", padding: "16px 20px", background: "#FDEDE6", border: "1px solid #F6C9B4", borderRadius: 6, fontSize: 16, lineHeight: 1.55, color: "#7A2609", maxWidth: "70ch" }}>
              <strong>Sample posting.</strong> This listing is placeholder content shown so PTG can review how open roles will look. It is not a real vacancy and no application is being collected against it.
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(440px,100%),1fr))", gap: "clamp(34px,4vw,64px)", alignItems: "start" }}>
              <Reveal as="div">
                <h2 style={H3}>About the role</h2>
                <p style={{ margin: "0 0 clamp(30px,3.4vw,44px)", fontSize: "clamp(16.5px,1.3vw,19px)", lineHeight: 1.65, color: "#334155", maxWidth: "58ch" }}>{role.summary}</p>
                <h2 style={H3}>What you&rsquo;ll do</h2>
                <Bullets items={role.responsibilities} />
              </Reveal>
              <Reveal as="div" delay={0.08}>
                <h2 style={H3}>What you bring</h2>
                <Bullets items={role.requirements} />
              </Reveal>
            </div>
          </div>
        </section>

        <ClosingCTA
          from="#FFFFFF"
          eyebrow="Careers & culture"
          heading="Think you'd be a fit?"
          body="Send us your résumé and tell us what you do. We read everything that comes in."
          ctas={[{ label: "Send us your résumé", href: "/about/careers#apply" }, { label: "Back to careers", href: "/about/careers" }]}
        />
      </main>
      <SiteFooter site={site} />
    </>
  );
}

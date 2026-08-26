import Link from "next/link";
import type { RolePosting } from "@/content/types";

/**
 * RoleList — the Open Roles listing, used by the homepage careers band and the
 * careers page so the two can never disagree.
 *
 * ⚠️ Every row renders a visible "Sample" chip and `data-unverified`, because
 * the postings in content/pages/roles.ts are placeholder content for design
 * review, not real vacancies. A fake job listing on a real firm's careers page
 * is the kind of thing someone acts on — the marker is not decoration. Remove
 * it only when PTG supplies approved postings.
 */
export function SampleChip({ dark = false }: { dark?: boolean }) {
  return (
    <span
      style={{
        flex: "0 0 auto",
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: dark ? "#FFD9C7" : "#B23600",
        background: dark ? "rgba(235,73,0,.34)" : "#FDEDE6",
        border: `1px solid ${dark ? "rgba(255,217,199,.5)" : "#F6C9B4"}`,
        borderRadius: 4,
        padding: "4px 8px",
        whiteSpace: "nowrap",
      }}
    >
      Sample
    </span>
  );
}

export function RoleList({ roles }: { roles: RolePosting[] }) {
  return (
    <ul data-unverified="" style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E5E7EB", border: "1px solid #E5E7EB", borderRadius: 6, overflow: "hidden" }}>
      {roles.map((r) => (
        <li key={r.slug} style={{ background: "#FFFFFF" }}>
          <Link href={`/about/careers/${r.slug}`} className="hov-svcrow hov-move" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px clamp(12px,1.6vw,20px)", padding: "clamp(16px,1.8vw,22px) clamp(14px,1.8vw,22px)" }}>
            <span style={{ flex: "1 1 200px", minWidth: 0 }}>
              <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontSize: "clamp(16px,1.35vw,18.5px)", fontWeight: 800, letterSpacing: "-0.015em", color: "inherit" }}>{r.title}</span>
                <SampleChip />
              </span>
              <span style={{ display: "block", marginTop: 5, fontSize: 14.5, color: "#475569" }}>
                {r.team} · {r.location} · {r.type}
              </span>
            </span>
            <span aria-hidden="true" className="lnk-arrow" style={{ flex: "0 0 auto", marginLeft: "auto" }}>
              <span style={{ display: "block", width: 8, height: 8, borderTop: "2px solid #0034A0", borderRight: "2px solid #0034A0", transform: "rotate(45deg)" }} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

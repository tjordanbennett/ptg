"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ProcurementPage, Vehicle } from "@/content/types";

/**
 * Contract vehicle finder — two selects, eligibility matching, aria-live
 * results. Matching logic and "why" microcopy ported verbatim from
 * public/_design/howtobuy.html. Renders the full six-vehicle list elsewhere on
 * the page too, so the page is complete with JS off.
 */
type Match = { key: string; badge: string; why: string };

function matchVehicles(org: string, st: string): Match[] {
  const out: Match[] = [];
  const pub = ["state", "local", "hied-public", "k12", "transit", "health"];

  if (org === "hied-public" && st === "Illinois")
    out.push({ key: "iphec", badge: "Best fit", why: "IPHEC is the Illinois Public Higher Education Cooperative. As an Illinois public institution you can order directly under our IPHEC award without a separate solicitation." });
  if (pub.includes(org) && st === "Texas")
    out.push({ key: "dir", badge: "Best fit", why: "Texas DIR is the fastest route for Texas public entities. State agencies, local government, public districts and public institutions of higher education all purchase IT services through DIR every day — and PTG is Houston-based." });
  if (pub.includes(org) && st === "California")
    out.push({ key: "slp", badge: "Best fit", why: "The California Software Licensing Program covers state agencies and, through participation, California local government and public education. Your procurement office will already know the vehicle." });
  if (org !== "federal")
    out.push({ key: "sourcewell", badge: "Nationwide", why: "Sourcewell membership is open to government, education and nonprofit organizations in all 50 states, and it is free to join. Their solicitation process satisfies competitive bid requirements in most jurisdictions." });
  if (org !== "federal")
    out.push({ key: "omnia", badge: "Nationwide", why: "OMNIA Partners is a national cooperative widely used by public agencies and higher education. If you already hold an OMNIA membership, no new agreement is needed." });
  if (org === "federal")
    out.push({ key: "gsa", badge: "Best fit", why: "Our GSA Multiple Award Schedule contract is the standard path for federal agencies. Pricing and terms are pre-negotiated with GSA." });
  else if (pub.includes(org))
    out.push({ key: "gsa", badge: "Also available", why: "State and local entities can order from our GSA Schedule under the Cooperative Purchasing program for eligible IT special item numbers. Worth checking if your office prefers a federal schedule." });

  return out;
}

const SELECT: React.CSSProperties = {
  width: "100%",
  fontSize: 16,
  fontWeight: 600,
  color: "#021F43",
  background: "#F5F7F9",
  border: "1.5px solid #94A3B8",
  borderRadius: 6,
  padding: "15px 14px",
  cursor: "pointer",
};
const LABEL: React.CSSProperties = {
  display: "block",
  marginBottom: 9,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: "#334155",
};

export function ContractFinder({
  finder,
  vehicles,
}: {
  finder: ProcurementPage["finder"];
  vehicles: Vehicle[];
}) {
  const [orgType, setOrgType] = useState("");
  const [stateVal, setStateVal] = useState("");

  const byId = useMemo(() => {
    const m: Record<string, Vehicle> = {};
    for (const v of vehicles) m[v.id] = v;
    return m;
  }, [vehicles]);

  const ready = orgType !== "" && stateVal !== "";
  const raw = ready ? matchVehicles(orgType, stateVal) : [];
  const results = raw.map((r, i) => {
    const v = byId[r.key];
    return {
      name: v?.name ?? r.key,
      number: (v?.numbers ?? []).join("  ·  "),
      badge: r.badge,
      why: r.why,
      anchor: `#${r.key}`,
      edge: i === 0 ? "#EB4900" : "#0034A0",
      bg: i === 0 ? "#FFF7F3" : "#FFFFFF",
    };
  });

  const orgLabel = finder.orgs.find((o) => o.value === orgType)?.label;
  const summary = ready
    ? `${results.length} vehicle${results.length === 1 ? "" : "s"} available to a ${String(orgLabel).toLowerCase()} in ${stateVal}, strongest fit first.`
    : "Choose an organization type and state to see the vehicles you can order under.";

  const hasResults = !ready || results.length > 0;
  const noResults = ready && results.length === 0;

  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #E5E7EB", borderTop: "4px solid #0034A0", borderRadius: 6, overflow: "hidden" }}>
      <div style={{ padding: "clamp(24px,3vw,38px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px,100%),1fr))", gap: "clamp(18px,2.4vw,30px)", alignItems: "end", borderBottom: "1px solid #E5E7EB" }}>
        <div>
          <label htmlFor="orgType" style={LABEL}>Organization type</label>
          <select id="orgType" value={orgType} onChange={(e) => setOrgType(e.target.value)} style={SELECT}>
            <option value="">Select organization type…</option>
            {finder.orgs.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stateSel" style={LABEL}>State</label>
          <select id="stateSel" value={stateVal} onChange={(e) => setStateVal(e.target.value)} style={SELECT}>
            <option value="">Select state…</option>
            {finder.states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button type="button" onClick={() => { setOrgType(""); setStateVal(""); }} className="hov-reset" style={{ fontFamily: "inherit", fontSize: 14.5, fontWeight: 700, background: "none", borderRadius: 6, padding: "15px 22px", cursor: "pointer" }}>Reset</button>
        </div>
      </div>

      <div aria-live="polite" style={{ padding: "clamp(24px,3vw,38px)", background: "#FFFFFF" }}>
        {hasResults ? (
          <div>
            <p style={{ margin: "0 0 22px", fontSize: 15, fontWeight: 600, lineHeight: 1.55, color: "#334155" }}>{summary}</p>
            {results.length > 0 ? (
              <ul style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {results.map((r) => (
                  <li key={r.name} style={{ border: "1px solid #E5E7EB", borderLeft: `4px solid ${r.edge}`, borderRadius: 6, padding: "clamp(20px,2.2vw,26px)", background: r.bg }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 20px", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "baseline" }}>
                        <h3 style={{ margin: 0, fontSize: "clamp(18px,1.65vw,23px)", fontWeight: 800, letterSpacing: "-0.02em" }}>{r.name}</h3>
                        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".11em", textTransform: "uppercase", color: "#FFFFFF", background: r.edge, padding: "5px 10px", borderRadius: 4 }}>{r.badge}</span>
                      </div>
                      <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 14, fontWeight: 400, color: "#021F43" }}>{r.number}</span>
                    </div>
                    <p style={{ margin: "0 0 16px", fontSize: 16.5, lineHeight: 1.6, color: "#334155", maxWidth: "76ch", textWrap: "balance" }}>{r.why}</p>
                    <Link href={r.anchor} className="hov-link" style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14.5, fontWeight: 700 }}>
                      Ordering steps &amp; scope
                      <span aria-hidden="true" style={{ width: 6, height: 6, borderTop: "2px solid currentColor", borderRight: "2px solid currentColor", transform: "rotate(45deg)", display: "block" }} />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {noResults ? (
          <div style={{ border: "1px dashed #94A3B8", borderRadius: 6, padding: "clamp(24px,3vw,34px)", background: "#F5F7F9" }}>
            <p style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 800, color: "#021F43" }}>{finder.noMatch.title}</p>
            <p style={{ margin: "0 0 20px", fontSize: 16.5, lineHeight: 1.6, color: "#334155", maxWidth: "62ch", textWrap: "balance" }}>{finder.noMatch.body}</p>
            <Link href={finder.noMatch.cta.href} className="hov-cta-navy cta" style={{ display: "inline-block" }}>{finder.noMatch.cta.label}</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

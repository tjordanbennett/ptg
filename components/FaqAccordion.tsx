"use client";

import { useState } from "react";

/** FAQ accordion matching howtobuy.html. First item open by default. */
export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: 1, background: "#E5E7EB", border: "1px solid #E5E7EB", borderRadius: 6, overflow: "hidden" }}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} style={{ background: "#FFFFFF" }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="hov-faqbtn"
              style={{ width: "100%", display: "flex", gap: 20, alignItems: "flex-start", justifyContent: "space-between", textAlign: "left", background: "none", border: 0, fontFamily: "inherit", padding: "clamp(20px,2.2vw,26px)", cursor: "pointer" }}
            >
              <span style={{ fontSize: "clamp(16px,1.4vw,18.5px)", fontWeight: 700, lineHeight: 1.4, color: "#021F43", letterSpacing: "-0.01em" }}>{f.q}</span>
              <span aria-hidden="true" style={{ flex: "0 0 auto", width: 11, height: 11, marginTop: 5, borderRight: "2.5px solid #EB4900", borderBottom: "2.5px solid #EB4900", transform: isOpen ? "rotate(225deg)" : "rotate(45deg)", display: "block" }} />
            </button>
            {isOpen ? (
              <p style={{ margin: 0, padding: "0 clamp(20px,2.2vw,26px) clamp(22px,2.4vw,28px)", fontSize: 15.5, lineHeight: 1.65, color: "#334155", maxWidth: "70ch", textWrap: "balance" }}>{f.a}</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

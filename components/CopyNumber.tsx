"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Contract-number chip with copy-to-clipboard. The number stays selectable
 * plain text without JS; the copy affordance + aria-live confirmation are the
 * enhancement (per DESIGN-SOURCE §Procurement). Styling matches howtobuy.html.
 */
export function CopyNumber({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onCopy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(value).catch(() => {});
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      title="Copy contract number"
      className="hov-copybtn"
      style={{ display: "flex", alignItems: "center", gap: 11, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 15, fontWeight: 400, borderRadius: 3, padding: "13px 16px", cursor: "pointer" }}
    >
      {value}
      <span aria-live="polite" style={{ fontFamily: "var(--font-montserrat), sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: copied ? "#B4FF00" : "#80CEFF" }}>
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

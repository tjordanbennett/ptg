"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NavItem, SiteSettings } from "@/content/types";

/**
 * SiteHeader — sticky header matching public/_design/*.html exactly. Desktop
 * mega-menu (opens on hover and click), mobile drawer below 1040px, ember CTA.
 * `currentLabel` marks the active top-level item (aria-current + ember underline).
 */
const CONTAINER: React.CSSProperties = {
  maxWidth: 1320,
  margin: "0 auto",
  padding: "0 clamp(20px,4vw,48px)",
};

export function SiteHeader({
  site,
  currentLabel,
}: {
  site: SiteSettings;
  currentLabel?: string;
}) {
  const [narrow, setNarrow] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1040px)");
    const onChange = () => {
      setNarrow(mq.matches);
      setOpenMenu(null);
      setMobileOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div style={{ ...CONTAINER, height: 62, display: "flex", alignItems: "center", gap: 40 }}>
        <Link href="/" aria-label="Precision Task Group home" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ptg-logo.svg" alt="" width={100} height={32} style={{ display: "block", width: "auto", height: 32 }} />
        </Link>

        {!narrow ? (
          <>
            <nav aria-label="Primary" style={{ flex: "1 1 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
              {site.nav.map((item, i) => (
                <DesktopItem
                  key={item.label}
                  item={item}
                  index={i}
                  isOpen={openMenu === i}
                  current={item.label === currentLabel}
                  onEnter={() => setOpenMenu(i)}
                  onLeave={() => setOpenMenu(null)}
                  onToggle={() => setOpenMenu((cur) => (cur === i ? null : i))}
                />
              ))}
            </nav>
            <Link href={site.headerCta.href} className="hov-cta-ember cta-sm" style={{ flex: "0 0 auto" }}>
              {site.headerCta.label}
            </Link>
          </>
        ) : (
          <div style={{ flex: "1 1 auto", display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              style={{ display: "flex", flexDirection: "column", gap: 5, background: "none", border: "1px solid #E5E7EB", borderRadius: 3, padding: "12px 13px", cursor: "pointer" }}
            >
              <span aria-hidden="true" style={{ display: "block", width: 20, height: 2, background: "#021F43" }} />
              <span aria-hidden="true" style={{ display: "block", width: 20, height: 2, background: "#021F43" }} />
              <span aria-hidden="true" style={{ display: "block", width: 20, height: 2, background: "#021F43" }} />
            </button>
          </div>
        )}
      </div>

      {narrow && mobileOpen ? (
        <nav aria-label="Primary" style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 99, borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", background: "#F5F7F9", padding: "8px 20px 26px", maxHeight: "76vh", overflowY: "auto", boxShadow: "0 24px 40px -20px rgba(2,31,67,.35)" }}>
          {site.nav.map((item, i) => (
            <MobileItem
              key={item.label}
              item={item}
              isOpen={openMenu === i}
              onToggle={() => setOpenMenu((cur) => (cur === i ? null : i))}
            />
          ))}
          <Link href={site.headerCta.href} className="hov-cta-ember cta" style={{ display: "block", marginTop: 22, textAlign: "center" }}>
            {site.headerCta.label}
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

function Caret({ color = "#94A3B8", size = 6 }: { color?: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, borderRight: `2px solid ${color}`, borderBottom: `2px solid ${color}`, transform: "translateY(-2px) rotate(45deg)", display: "block" }}
    />
  );
}

function DesktopItem({
  item,
  isOpen,
  current,
  onEnter,
  onLeave,
  onToggle,
}: {
  item: NavItem;
  index: number;
  isOpen: boolean;
  current: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
}) {
  return (
    <div style={{ position: "relative" }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        className="hov-navbtn"
        data-current={current ? "true" : undefined}
        aria-expanded={isOpen}
        aria-current={current ? "page" : undefined}
        onClick={onToggle}
        onFocus={onEnter}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", fontFamily: "inherit", fontSize: 14.5, fontWeight: 600, padding: "21px 14px", cursor: "pointer" }}
      >
        {item.label}
        <Caret />
      </button>

      {isOpen ? (
        <div
          role="group"
          aria-label={`${item.label} menu`}
          style={{ position: "absolute", top: "100%", left: 0, background: "#FFFFFF", border: "1px solid #E5E7EB", borderTop: "3px solid #EB4900", boxShadow: "0 24px 48px -12px rgba(2,31,67,.22)", padding: "26px 30px", display: "flex", gap: 38, animation: "ptgRise .16s ease-out", zIndex: 30 }}
        >
          {item.groups.map((group) => (
            <div key={group.title} style={{ minWidth: 212 }}>
              <p style={{ margin: "0 0 12px", fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#94A3B8" }}>{group.title}</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {group.items.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hov-droplink" style={{ display: "block", padding: "8px 10px", marginLeft: -10, fontSize: 14.5, fontWeight: 600, borderRadius: 3, lineHeight: 1.35 }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function MobileItem({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const flat = item.groups.flatMap((g) => g.items);
  return (
    <div style={{ borderBottom: "1px solid #E5E7EB", padding: "4px 0" }}>
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: 0, fontFamily: "inherit", fontSize: 16, fontWeight: 700, color: "#021F43", padding: "16px 2px", cursor: "pointer", textAlign: "left" }}
      >
        {item.label}
        <span aria-hidden="true" style={{ width: 7, height: 7, borderRight: "2px solid #EB4900", borderBottom: "2px solid #EB4900", transform: isOpen ? "rotate(225deg)" : "rotate(45deg)", display: "block" }} />
      </button>
      {isOpen ? (
        <ul style={{ display: "flex", flexDirection: "column", gap: 2, padding: "2px 0 14px 16px", marginLeft: 4, borderLeft: "2px solid #E5E7EB" }}>
          {flat.map((link) => (
            <li key={link.label}>
              <Link href={link.href} style={{ display: "block", padding: "11px 0", fontSize: 15, fontWeight: 600, color: "#334155" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NavItem, SiteSettings } from "@/content/types";

/**
 * SiteHeader — sticky header matching public/_design/*.html exactly. Desktop
 * mega-menu (opens on hover and click), mobile drawer below 1040px, ember CTA.
 * `currentLabel` marks the active top-level item (aria-current + ember underline).
 *
 * ▲ RESPONSIVE SWITCH IS CSS, NOT JS (changed 2026-08-17).
 * This previously kept a `narrow` boolean in state, set from matchMedia inside
 * useEffect. That meant the server-rendered HTML ALWAYS contained the desktop
 * nav, so every mobile visitor got a flash of an overflowing desktop header
 * until hydration corrected it — and if hydration was slow or failed, the page
 * scrolled sideways ~500px with no menu button at all. Both navs are now always
 * in the markup and `.ptg-nav-desktop` / `.ptg-nav-mobile` in globals.css decide
 * which one shows. Correct before JS runs, correct if JS never runs.
 */
const HEADER_H = 62;

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
  // Separate state per nav: both are in the DOM at all times now, so sharing one
  // index would leave a hidden desktop menu "open" after a mobile tap.
  const [openDesktop, setOpenDesktop] = useState<number | null>(null);
  const [openMobile, setOpenMobile] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the drawer if the viewport grows past the breakpoint (otherwise it
  // stays mounted, invisible, with the body still scroll-locked).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1041px)");
    const onChange = () => {
      if (mq.matches) {
        setMobileOpen(false);
        setOpenMobile(null);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock body scroll while the drawer is open so the page behind doesn't move
  // and the drawer can't be scrolled out from under the user.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      style={
        {
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
          "--ptg-header-h": `${HEADER_H}px`,
        } as React.CSSProperties
      }
    >
      <div style={{ ...CONTAINER, height: HEADER_H, display: "flex", alignItems: "center", gap: 40 }}>
        <Link href="/" aria-label="Precision Task Group home" style={{ display: "flex", alignItems: "center", flex: "0 0 auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ptg-logo.svg" alt="" width={100} height={32} style={{ display: "block", width: "auto", height: 32 }} />
        </Link>

        {/* Desktop — hidden by CSS at <=1040px */}
        <nav aria-label="Primary" className="ptg-nav-desktop">
          {site.nav.map((item, i) => (
            <DesktopItem
              key={item.label}
              item={item}
              index={i}
              isOpen={openDesktop === i}
              current={item.label === currentLabel}
              onEnter={() => setOpenDesktop(i)}
              onLeave={() => setOpenDesktop(null)}
              onToggle={() => setOpenDesktop((cur) => (cur === i ? null : i))}
            />
          ))}
        </nav>
        <Link href={site.headerCta.href} className="hov-cta-ember cta-sm ptg-header-cta">
          {site.headerCta.label}
        </Link>

        {/* Mobile — hidden by CSS at >=1041px */}
        <div className="ptg-nav-mobile">
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="ptg-mobile-nav"
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 5, background: "none", border: "1px solid #E5E7EB", borderRadius: 3, padding: "0 13px", minWidth: 46, minHeight: 44, cursor: "pointer" }}
          >
            <span aria-hidden="true" style={{ display: "block", width: 20, height: 2, background: "#021F43" }} />
            <span aria-hidden="true" style={{ display: "block", width: 20, height: 2, background: "#021F43" }} />
            <span aria-hidden="true" style={{ display: "block", width: 20, height: 2, background: "#021F43" }} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            className="ptg-scrim"
            onClick={() => setMobileOpen(false)}
          />
          <nav id="ptg-mobile-nav" aria-label="Primary" className="ptg-drawer">
            {site.nav.map((item, i) => (
              <MobileItem
                key={item.label}
                item={item}
                isOpen={openMobile === i}
                onToggle={() => setOpenMobile((cur) => (cur === i ? null : i))}
              />
            ))}
            <Link href={site.headerCta.href} className="hov-cta-ember cta" style={{ display: "block", marginTop: 22, textAlign: "center" }}>
              {site.headerCta.label}
            </Link>
          </nav>
        </>
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
          className="ptg-megamenu"
          style={{ position: "absolute", top: "100%", background: "#FFFFFF", border: "1px solid #E5E7EB", borderTop: "3px solid #EB4900", boxShadow: "0 24px 48px -12px rgba(2,31,67,.22)", padding: "26px 30px", display: "flex", gap: 38, animation: "ptgRise .16s ease-out", zIndex: 30 }}
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
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: 0, fontFamily: "inherit", fontSize: 16, fontWeight: 700, color: "#021F43", padding: "16px 2px", minHeight: 44, cursor: "pointer", textAlign: "left" }}
      >
        {item.label}
        <span aria-hidden="true" style={{ width: 7, height: 7, borderRight: "2px solid #EB4900", borderBottom: "2px solid #EB4900", transform: isOpen ? "rotate(225deg)" : "rotate(45deg)", display: "block", flex: "0 0 auto", marginRight: 4 }} />
      </button>
      {isOpen ? (
        <ul style={{ display: "flex", flexDirection: "column", gap: 2, padding: "2px 0 14px 16px", marginLeft: 4, borderLeft: "2px solid #E5E7EB" }}>
          {flat.map((link) => (
            <li key={link.label}>
              <Link href={link.href} style={{ display: "flex", alignItems: "center", minHeight: 44, padding: "6px 0", fontSize: 15, fontWeight: 600, color: "#334155" }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

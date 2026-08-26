"use client";

import { useCallback } from "react";
import Link from "next/link";
import type { Announcement } from "@/content/types";

/**
 * AnnouncementBar — the dismissible strip above the header, the pattern Strada
 * and Workday Rising both use.
 *
 * NO-FLASH DISMISSAL. The bar is in the server HTML and visible by default, so
 * it works with JS off. A visitor who has dismissed it would otherwise see it
 * paint and then disappear on hydration, so the hiding is done by an inline
 * script in app/layout.tsx that runs BEFORE first paint and sets
 * `data-ann-dismissed` on <html>; CSS keys off that. Same technique as the
 * hero's `.js` gate, and for the same reason.
 *
 * Dismissal is stored under the announcement's `id`, so a new message shows
 * again even to people who closed the last one — as long as the id is bumped.
 *
 * localStorage can throw outright (Safari private mode, site-data blocked), so
 * both the read (in the layout script) and the write here are wrapped. Failing
 * to persist is fine: the bar simply comes back next visit.
 */
export function AnnouncementBar({ announcement }: { announcement: Announcement }) {
  const { id, before, linkText, linkHref, after, unverified } = announcement;

  const dismiss = useCallback(() => {
    const root = document.documentElement;
    root.setAttribute("data-ann-dismissed", id);
    try {
      localStorage.setItem("ptg-ann-dismissed", id);
    } catch {
      /* storage unavailable — the bar just returns next visit */
    }
  }, [id]);

  return (
    <>
      {/* Exact-id rule, rendered server-side. CSS can't compare two attribute
          values, and a generic `html[data-ann-dismissed]` selector would hide a
          NEW announcement from everyone who dismissed the previous one. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `html[data-ann-dismissed="${id}"] .ptg-announcement[data-ann-id="${id}"]{display:none}`,
        }}
      />
    <div
      className="ptg-announcement"
      data-ann-id={id}
      {...(unverified ? { "data-unverified": "" } : {})}
    >
      <p className="ptg-announcement-msg">
        {before}
        {linkHref ? (
          <Link href={linkHref} className="ptg-announcement-link">
            {linkText}
          </Link>
        ) : (
          /* No destination yet. Emphasised text, not an anchor — a link that
             goes nowhere is a dead end for keyboard and screen-reader users.
             Add `linkHref` in content/site.ts and this becomes a real link. */
          <strong className="ptg-announcement-strong">{linkText}</strong>
        )}
        {after}
      </p>
      <button type="button" className="ptg-announcement-close" onClick={dismiss}>
        <span className="sr-only">Dismiss announcement</span>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 14 14" width="14" height="14">
          <path d="M1 1 13 13M13 1 1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      </button>
    </div>
    </>
  );
}

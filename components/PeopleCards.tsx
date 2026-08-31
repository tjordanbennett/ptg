"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * PeopleCards — the leadership grid, where each person opens a detail modal
 * with a headshot, name, title and bio.
 *
 * PROGRESSIVE ENHANCEMENT (quality gate 4: the page must be complete with JS
 * disabled). The card renders as a plain <article> on the server and on the
 * first client render, and only becomes a <button> once hydrated. A button
 * that opens a dialog is useless without JS, and shipping a dead control is
 * worse than shipping a static card — everything the modal shows is already
 * on the card, so nothing is lost.
 *
 * The modal is a native <dialog> driven by showModal(), NOT a hand-rolled div.
 * That buys the focus trap, Escape, inert background and focus restoration
 * from the platform rather than from code we would have to maintain and get
 * wrong. Backdrop clicks close it by testing whether the click landed on the
 * dialog element itself, which is the whole viewport-sized backdrop area.
 *
 * ⚠️ Headshots and bios are PLACEHOLDERS. Real ones come from PTG; see
 * `_handoff/FOR-RIDGE.md`. Nothing here invents biography for a real person.
 */

export type Person = { name: string; title: string; unverifiedRole?: boolean };

const PLACEHOLDER = "/images/headshot-placeholder.svg";

/**
 * ⚠️ LOREM IPSUM ON PURPOSE — DO NOT REPLACE WITH ENGLISH.
 *
 * These are real people at a real company. Content integrity (repo CLAUDE.md)
 * forbids inventing a leadership bio, and the danger with placeholder prose is
 * that plausible English gets mistaken for approved copy and ships. Latin
 * cannot be mistaken for anything. It fills the layout so the design can be
 * judged at full length, and it is unmistakably not a biography.
 *
 * Real bios come from PTG. See `_handoff/FOR-RIDGE.md`.
 */
const BIO_LOREM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, arcu vitae dictum consequat, augue nibh porttitor lorem, sit amet vestibulum mauris quam vitae leo. Curabitur ut est nec massa vulputate tempor eget ac justo.",
  "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla, sed posuere consectetur est at lobortis.",
];
const BIO_TEASER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, arcu vitae dictum consequat.";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function PeopleCards({ people }: { people: Person[] }) {
  const [hydrated, setHydrated] = useState(false);
  const [open, setOpen] = useState<Person | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const cardStyle: React.CSSProperties = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 6,
    padding: "clamp(22px,2.4vw,28px)",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    textAlign: "left",
    width: "100%",
    font: "inherit",
    color: "inherit",
  };

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px,100%),1fr))", gap: "clamp(16px,2vw,22px)" }}>
        {people.map((pn, i) => {
          const body = (
            <>
              <div aria-hidden="true" style={{ width: 46, height: 46, marginBottom: 14, borderRadius: 6, background: "#021F43", display: "grid", placeItems: "center" }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: "#80CEFF", letterSpacing: "-0.01em" }}>{initials(pn.name)}</span>
              </div>
              {/* h2, not h3. The section has no heading of its own, so an h3
                  here skipped a level straight from the page h1 — quality gate
                  3. Pre-existing; fixed while this component was being built. */}
              <h2 style={{ margin: 0, fontSize: "clamp(17px,1.5vw,20px)", fontWeight: 800, letterSpacing: "-0.018em" }}>{pn.name}</h2>
              <p style={{ margin: 0, fontSize: 14.5, fontWeight: 600, color: pn.unverifiedRole ? "#94A3B8" : "#0034A0" }} data-unverified={pn.unverifiedRole ? "" : undefined}>
                {pn.title}
              </p>
              <p style={{ margin: "10px 0 0", fontSize: 13, lineHeight: 1.5, color: "#475569" }} data-unverified="">
                {BIO_TEASER}
              </p>
            </>
          );

          // The Reveal wrapper is ALWAYS a <div>, and the article/button swap
          // happens INSIDE it. Swapping the element Reveal itself renders
          // (article → div) kept the same component instance but replaced the
          // host node, so useReveal's scroll handler went on holding a
          // reference to the detached original. A detached node measures
          // 0×0, its `bottom > 0` test can never pass, and all three cards sat
          // at opacity 0 forever. Keep the observed node stable.
          return (
            <Reveal as="div" key={pn.name} delay={i * 0.04} style={{ height: "100%" }}>
              {hydrated ? (
                <button type="button" className="hov-card" style={{ ...cardStyle, cursor: "pointer", height: "100%" }} onClick={() => setOpen(pn)} aria-haspopup="dialog">
                  {body}
                  <span style={{ marginTop: 14, fontSize: 13, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", color: "#0034A0" }}>
                    View profile
                  </span>
                </button>
              ) : (
                <article className="hov-card" style={{ ...cardStyle, height: "100%" }}>{body}</article>
              )}
            </Reveal>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="ptg-dialog"
        aria-labelledby="person-name"
        onClose={() => setOpen(null)}
        onClick={(e) => {
          // Only a click on the dialog box itself is the backdrop; clicks on
          // the content bubble up from children and must not close it.
          if (e.target === dialogRef.current) setOpen(null);
        }}
      >
        {/* The BODY scrolls, not the dialog. With the dialog itself as the
            scroll container the absolutely-positioned close button scrolled
            away with the content — on a phone the bio is taller than the
            viewport, so Close was unreachable without scrolling back up. */}
        <div className="ptg-dialog-body">
        {open ? (
          <div className="ptg-dialog-grid">
            <Image
              src={PLACEHOLDER}
              alt={`Placeholder headshot for ${open.name}`}
              width={400}
              height={400}
              className="ptg-dialog-photo"
              data-unverified=""
            />
            <div>
              {/* Right padding keeps a long name clear of the close button. */}
              <h2 id="person-name" style={{ margin: "0 0 6px", paddingRight: 44, fontSize: "clamp(23px,2.4vw,31px)", fontWeight: 800, letterSpacing: "-0.026em", lineHeight: 1.14, color: "#021F43", textWrap: "balance" }}>
                {open.name}
              </h2>
              <p style={{ margin: "0 0 20px", fontSize: 15.5, fontWeight: 600, letterSpacing: ".01em", color: "#0034A0" }}>{open.title}</p>
              <div aria-hidden="true" style={{ width: 40, height: 2, background: "#EB4900", marginBottom: 22 }} />
              {BIO_LOREM.map((para, i) => (
                <p key={i} style={{ margin: i === BIO_LOREM.length - 1 ? 0 : "0 0 16px", fontSize: 16, lineHeight: 1.7, color: "#475569" }} data-unverified="">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ) : null}
        </div>
        <form method="dialog">
          <button type="submit" aria-label="Close profile" className="ptg-dialog-x">
            <span aria-hidden="true">&times;</span>
          </button>
        </form>
      </dialog>
    </>
  );
}

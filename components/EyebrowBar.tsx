/**
 * EyebrowBar — the section label used above every heading: an uppercase,
 * letter-spaced kicker preceded by a short ember bar. This is the single
 * definition for the whole site; it used to be copied into three files and
 * competed with bar-less inline eyebrows, so labels rendered inconsistently.
 *
 * `dark` picks the on-navy colour; `color`, `size`, `mb` override the defaults
 * for the few places that need a slightly different scale (hero, closing CTA).
 */
export function EyebrowBar({
  label,
  dark = false,
  color,
  size = 12,
  mb = 16,
}: {
  label: string;
  dark?: boolean;
  color?: string;
  size?: number;
  mb?: number;
}) {
  const c = color ?? (dark ? "#80CEFF" : "#0034A0");
  return (
    <p style={{ margin: `0 0 ${mb}px`, display: "flex", alignItems: "center", gap: 12, fontSize: size, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: c }}>
      <span aria-hidden="true" style={{ width: 30, height: 2, background: "#EB4900", display: "block" }} />
      {label}
    </p>
  );
}

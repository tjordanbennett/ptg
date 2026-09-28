import { useId } from "react"

/**
 * "Site built by RidgeX": the footer credit on every site RidgeX builds.
 * The canonical copy lives at ridgexventures.com/brand#credit. Copy this file and
 * ridgex-credit.css as they are; don't restyle them per client.
 *
 * tone:   "dark" on dark footers, "light" on light ones.
 * client: short lowercase name for the client, used as the utm_source (e.g. "dhconstruction").
 *
 * Place it in the footer's bottom row, next to the copyright line. It inherits that line's
 * font and size. At rest it's a quiet silhouette; on hover or focus the sun rises from behind
 * the ridges and everything takes its RidgeX color. On touch screens it's always in that state.
 */
export default function RidgeXCredit({ client, tone = "dark" }: { client: string; tone?: "dark" | "light" }) {
  const sun = `rx-sun-${useId().replace(/:/g, "")}`
  return (
    <a
      href={`https://www.ridgexventures.com/?utm_source=${client}&utm_medium=referral&utm_campaign=site_credit`}
      target="_blank"
      rel="noopener"
      className={`rx-credit rx-credit--${tone}`}
      aria-label="Site built by RidgeX Ventures (opens in a new tab)"
    >
      <svg viewBox="0 6 64 50" className="rx-credit__mark" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={sun} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FFD65A" />
            <stop offset="1" stopColor="#FF8A3D" />
          </linearGradient>
        </defs>
        <g className="rx-credit__sun">
          <circle className="rx-credit__sun-color" cx="47" cy="17" r="10" fill={`url(#${sun})`} />
          <circle className="rx-credit__sun-rest" cx="47" cy="17" r="10" />
        </g>
        <path className="rx-credit__back" d="M8 54L31 15L39 27L45 21L62 46V54Z" />
        <path className="rx-credit__front" d="M2 54V47L20 31L29 39L35 34L55 54Z" />
      </svg>
      <span>
        Site built by <span className="rx-credit__name">RidgeX</span>
      </span>
    </a>
  )
}

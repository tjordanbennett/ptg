import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "PTG · Big Missions. Bigger Impact.",
    template: "%s · PTG",
  },
  description:
    "Precision Task Group (PTG) helps government agencies, universities, health " +
    "systems and nonprofits realize the value of their enterprise technology: " +
    "Workday and ServiceNow.",
  metadataBase: new URL("http://localhost:3000"),
  robots: { index: false, follow: false }, // speculative build — never indexed
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        {/*
          Pre-paint JS gate. Runs BEFORE the browser paints the body, so the
          hero's hidden state can be applied by CSS from the very first frame
          instead of after hydration — which is what caused the page to flash
          fully visible, vanish, then fade in.

          Why a class rather than motion's `initial`: Framer serialises `initial`
          into the server HTML, so a hidden initial state would leave the hero
          invisible with JS disabled. Gating on `.js` keeps the no-JS render
          fully visible while still avoiding the flash for everyone else.

          SAFETY: if hydration never happens (JS error, chunk fails to load),
          nothing would ever reveal the content. So the gate removes itself
          after 2.5s unless React has marked the document hydrated.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('js');" +
              "setTimeout(function(){if(!d.hasAttribute('data-hydrated'))" +
              "d.classList.remove('js');},2500);})();" +
              // Announcement bar: hide it before first paint if this visitor has
              // already dismissed THIS id, so it never paints and then vanishes.
              // Keyed by id, so a new announcement shows again. localStorage can
              // throw (private mode, blocked site data) — failing just means the
              // bar shows, which is the safe direction.
              "(function(){try{var v=localStorage.getItem('ptg-ann-dismissed');" +
              "if(v)document.documentElement.setAttribute('data-ann-dismissed',v);}" +
              "catch(e){}})();",
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        {/* Vercel Analytics — production only.
            Added at Jordan's request; note CLAUDE.md's "no external services /
            no analytics" rule, which this supersedes.

            The gate is not cosmetic. Rendered unconditionally, the component
            fetches https://va.vercel-scripts.com/v1/script.debug.js on EVERY
            local page load — verified, not assumed. That is an outbound request
            to a third party from a build whose whole posture is "no network
            writes", and it tells Vercel the dev machine's IP every time anyone
            runs `npm run dev`. It also cannot report anything locally: the
            beacon posts to /_vercel/insights, which only exists on Vercel. So
            off-Vercel it is pure cost. */}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  );
}

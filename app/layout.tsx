import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "PTG — Big Missions. Bigger Impact.",
    template: "%s · PTG",
  },
  description:
    "Precision Task Group (PTG) helps government agencies, universities, health " +
    "systems and nonprofits maximize the value of their Workday investment.",
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
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

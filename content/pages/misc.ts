import type { StandardPage } from "@/content/types";

/**
 * Resources (blog / webinars / events) and utility pages (accessibility,
 * privacy). Resources ship as designed empty states — no articles, webinars or
 * events are fabricated. The one real event in the copy (2026 Chicago Higher
 * Education Forum) is held back: its date has passed and needs PTG confirmation
 * (logged in _handoff/FOR-RIDGE.md).
 */

const SHARED_EMPTY = {
  title: "Nothing published here yet.",
  body: "New content is on the way. In the meantime, get in touch and we'll point you to what's useful.",
  cta: { label: "Connect with us", href: "/contact" },
} as const;

function resourcePage(slug: string, title: string, h1: string, sub: string): StandardPage {
  return {
    meta: { title, description: sub },
    currentLabel: "Resources",
    breadcrumbs: [{ label: "Home", href: "/" }, { label: h1 }],
    hero: { eyebrow: "Resources", headline: h1, body: sub },
    sections: [
      { kind: "emptyState", ...SHARED_EMPTY },
      {
        kind: "cta",
        eyebrow: "Connect with us",
        heading: "Looking for something specific?",
        body: "Tell us what you're trying to learn and we'll point you to the most useful resource, or the right person.",
        ctas: [
          { label: "Connect with us", href: "/contact" },
          { label: "See procurement options", href: "/procurement-contracts" },
        ],
      },
    ],
  };
}

export const resources: Record<string, StandardPage> = {
  blog: resourcePage("blog", "Insights", "Insights", "Perspective from the teams doing the work."),
  webinars: resourcePage("webinars", "Webinars", "Webinars", "Sessions on getting more from your Workday investment."),
  events: resourcePage("events", "Upcoming Events", "Upcoming Events", "Where you'll find us next."),
};

export const accessibility: StandardPage = {
  meta: {
    title: "Accessibility",
    description: "PTG is committed to making this website usable by everyone, and building to conform with WCAG 2.1 Level AA.",
  },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Accessibility" }],
  hero: {
    eyebrow: "Accessibility",
    headline: "Accessibility",
    body: "We build this site to be usable by everyone, including people who use assistive technology.",
  },
  sections: [
    {
      kind: "prose",
      body: [
        "PTG is committed to making this website usable by everyone, including people who use assistive technology. This site is built to conform with WCAG 2.1 Level AA.",
        "If you encounter a barrier, contact us at info@ptg.com or 713.781.7481 and we'll work with you directly.",
      ],
      maxWidth: 720,
    },
    {
      kind: "cta",
      eyebrow: "Connect with us",
      heading: "Hit a barrier? Tell us.",
      body: "We'll work with you directly to get you what you need.",
      ctas: [{ label: "Connect with us", href: "/contact" }],
    },
  ],
};

export const privacy: StandardPage = {
  meta: {
    title: "Privacy Policy",
    description: "PTG's privacy policy.",
  },
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Privacy" }],
  hero: {
    eyebrow: "Legal",
    headline: "Privacy Policy",
  },
  sections: [
    {
      kind: "prose",
      body: [
        "PTG's full privacy policy is being carried over from the current site. In the meantime, questions about how we handle information can be directed to info@ptg.com or 713.781.7481.",
      ],
      maxWidth: 720,
    },
  ],
};

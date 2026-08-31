import type { StandardPage } from "@/content/types";

/** Partner pages (Workday, ServiceNow). Words are PTG's (PTG-SITE-COPY.md).
 *  "Certified Workday Partner Since 2017" is ⚠️ pending PTG confirmation. */

const crumbs = (label: string) => [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label },
];

export const partners: Record<string, StandardPage> = {
  workday: {
    meta: {
      title: "Workday Partner",
      description:
        "A certified Workday partner and authorized reseller. Plan, deploy, optimize and extend Workday on a single accountable contract.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Partner"),
    hero: {
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/houston-skyline-hero.jpg",
        alt: "Downtown Houston lit at dusk under a deep blue sky",
        width: 2400,
        height: 1600,
      },
      eyebrow: "Why choose PTG + Workday",
      headline: "Stronger together. Greater impact.",
      body:
        "Workday is built to simplify operations, empower people and help organizations move faster with better insight. Realizing that takes more than technology. As a certified Workday partner since 2017 and an authorized reseller, we help organizations plan, deploy, optimize and extend Workday with confidence.",
    },
    sections: [
      {
        kind: "cards",
        eyebrow: "The partnership",
        heading: "Certified, and authorized to resell.",
        columns: 2,
        cards: [
          { title: "Certified Workday Partner Since 2017", hook: "A long-standing partnership built on delivering transformation, adoption and lasting value." },
          { title: "Authorized Workday Reseller", hook: "We guide licensing and procurement, so you get the right solution from day one, on one contract instead of two." },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Full lifecycle",
        heading: "Expertise across your entire Workday journey.",
        columns: 3,
        accent: "ember",
        cards: [
          {
            title: "Workday Implementation & Support",
            hook: "A process built around your goals, industry and timeline. We bring structure and hands-on expertise to reduce risk and keep deployment aligned from planning through go-live.",
            href: "/services/workday-implementation",
          },
          {
            title: "AMS & Managed Services",
            hook: "Built around flexibility and aligned consultants, not a ticketing center: day-to-day needs, production issues, new feature adoption and continuous improvement.",
            href: "/services/workday-ams-optimization",
          },
          {
            title: "Workday Optimization",
            hook: "Already live? Unlock more value through targeted enhancements, process improvements, tenant assessments, feature adoption and reporting improvements.",
            href: "/services/workday-ams-optimization",
          },
          {
            title: "Workday Integrations",
            hook: "Connect Workday with the systems, workflows and data your organization depends on, streamlining operations and reducing manual work.",
            href: "/services/workday-innovation",
          },
          {
            title: "Workday Extend & Innovation",
            hook: "When standard functionality isn't enough: custom applications, workflow automation, executive dashboards and digital experiences built around your needs.",
            href: "/services/workday-innovation",
          },
          {
            title: "Advisory & Strategy",
            hook: "Readiness assessments, roadmaps and alignment workshops that settle the hard questions before configuration locks them in.",
            href: "/services/workday-advisory-strategy",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Value",
        heading: "Maximize Workday value across your business.",
        items: [
          "Streamline operations",
          "Improve employee and manager experience",
          "Enable leaders with better insight",
          "Increase efficiency across departments",
          "Strengthen adoption and user confidence",
          "Drive continuous value beyond go-live",
        ],
      },
      {
        kind: "prose",
        eyebrow: "Experience that runs deep",
        heading: "Workday success isn't a one-time event.",
        body: [
          "It requires ongoing alignment, thoughtful planning, practical solutioning and a partner who stays invested after go-live. Organizations that partner with PTG gain more than a Workday services provider. They gain a trusted advisor focused on simplifying complexity and accelerating results across the business.",
        ],
      },
      // ▲ Mirrored from the ServiceNow partner page per Kim Christenson's
      // 2026-08-07 feedback ("We might consider having this on both the
      // ServiceNow and Workday pages"). Same words on both pages, deliberately.
      {
        kind: "prose",
        eyebrow: "The advantage of one partner",
        heading: "Where Workday and ServiceNow meet, value gets lost. Or found.",
        body: [
          "Many organizations run Workday and ServiceNow side by side, and the seams between them are where value gets lost. Because we deliver both, we design for those connection points from the start, and one team is accountable for the outcome.",
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Run both? Get one accountable team.",
        ctas: [
          { label: "Schedule a consultation", href: "/contact" },
          { label: "Explore ServiceNow implementation", href: "/services/servicenow-implementation" },
          { label: "See procurement options", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  servicenow: {
    meta: {
      title: "ServiceNow Partner",
      description:
        "Service management delivered by a partner who understands both the ServiceNow platform and the public sector environment you operate in.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("ServiceNow Partner"),
    hero: {
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/quote-houston.jpg",
        alt: "Downtown Houston towers lit at dusk above the freeway",
        width: 1200,
        height: 1600,
      },
      eyebrow: "Why choose PTG + ServiceNow",
      headline: "Service management that works the way your organization does.",
      body:
        "ServiceNow gives organizations one platform for service delivery across IT, HR and facilities. Getting there takes a partner who understands both the platform and the environment you operate in.",
    },
    sections: [
      {
        kind: "prose",
        eyebrow: "The advantage of one partner",
        heading: "Where Workday and ServiceNow meet, value gets lost. Or found.",
        body: [
          "Many organizations run Workday and ServiceNow side by side, and the seams between them are where value gets lost. Because we deliver both, we design for those connection points from the start, and one team is accountable for the outcome.",
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Run both? Get one accountable team.",
        ctas: [
          { label: "Schedule a consultation", href: "/contact" },
          { label: "Explore ServiceNow implementation", href: "/services/servicenow-implementation" },
        ],
      },
    ],
  },
};

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
        "A certified Workday partner and authorized reseller — plan, deploy, optimize and extend Workday on a single accountable contract.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Partner"),
    hero: {
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
          { title: "Authorized Workday Reseller", hook: "We guide licensing and procurement, so you get the right solution from day one — on one contract instead of two." },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Full lifecycle",
        heading: "Expertise across your entire Workday journey.",
        variant: "chip",
        items: [
          "Implementation & Support",
          "AMS & Managed Services",
          "Optimization",
          "Integrations",
          "Extend & Innovation",
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
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to get more from Workday?",
        ctas: [
          { label: "Schedule a consultation", href: "/contact" },
          { label: "See how to buy", href: "/procurement-contracts" },
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
      eyebrow: "Why choose PTG + ServiceNow",
      headline: "Service management that works the way your organization does.",
      body:
        "ServiceNow gives organizations one platform for service delivery across IT, HR and facilities. Getting there takes a partner who understands both the platform and the environment you operate in.",
    },
    sections: [
      {
        kind: "prose",
        eyebrow: "The advantage of one partner",
        heading: "Where Workday and ServiceNow meet, value gets lost — or found.",
        body: [
          "Many organizations run Workday and ServiceNow side by side, and the seams between them are where value gets lost. Because we deliver both, we design for those connection points from the start — and one team is accountable for the outcome.",
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

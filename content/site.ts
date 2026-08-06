import type { SiteSettings } from "./types";

/**
 * Nav + footer, matching the design's structure (public/_design/*.html).
 * Section-level items point at homepage anchors (as the mockup does, since those
 * detail pages aren't built yet); How-to-Buy points at the real
 * /procurement-contracts route + anchors, which resolve from any page.
 */
export const site: SiteSettings = {
  name: "PTG",
  legalName: "Precision Task Group, Inc.",
  tagline: "Realize Value. Faster.",
  nav: [
    {
      label: "Services",
      groups: [
        {
          title: "Workday",
          items: [
            { label: "Advisory & Strategy", href: "/services/workday-advisory-strategy" },
            { label: "Implementation", href: "/services/workday-implementation" },
            { label: "AMS & Optimization", href: "/services/workday-ams-optimization" },
            { label: "Innovation", href: "/services/workday-innovation" },
          ],
        },
        {
          title: "ServiceNow",
          items: [{ label: "ServiceNow Implementation", href: "/services/servicenow-implementation" }],
        },
        {
          title: "Partners",
          items: [
            { label: "Workday", href: "/partners/workday" },
            { label: "ServiceNow", href: "/partners/servicenow" },
          ],
        },
      ],
    },
    {
      label: "Industries",
      groups: [
        {
          title: "Who we serve",
          items: [
            { label: "Government / Public Sector", href: "/industries/government" },
            { label: "Higher Education", href: "/industries/higher-education" },
            { label: "Transit, Utilities & Special Districts", href: "/industries/transit-utilities" },
            { label: "Nonprofit", href: "/industries/nonprofit" },
            { label: "Healthcare", href: "/industries/healthcare" },
          ],
        },
      ],
    },
    {
      label: "How to Buy",
      groups: [
        {
          title: "Start here",
          items: [
            { label: "How to Buy from PTG", href: "/procurement-contracts" },
            { label: "Contract vehicle finder", href: "/procurement-contracts#finder" },
          ],
        },
        {
          title: "Cooperative contracts",
          items: [
            { label: "Sourcewell", href: "/procurement-contracts/sourcewell" },
            { label: "OMNIA Partners", href: "/procurement-contracts/omnia-partners" },
            { label: "Texas DIR", href: "/procurement-contracts/texas-dir" },
          ],
        },
        {
          title: "Government contracts",
          items: [
            { label: "GSA MAS", href: "/procurement-contracts/gsa" },
            { label: "California SLP", href: "/procurement-contracts/california-slp" },
            { label: "IPHEC", href: "/procurement-contracts/iphec" },
          ],
        },
      ],
    },
    {
      label: "About",
      groups: [
        {
          title: "The firm",
          items: [
            { label: "About PTG", href: "/about" },
            { label: "Our Leadership", href: "/about/leadership" },
            { label: "Careers & Culture", href: "/about/careers" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      groups: [
        {
          title: "Insights",
          items: [
            { label: "Blog", href: "/resources/blog" },
            { label: "Webinars", href: "/resources/webinars" },
            { label: "Upcoming Events", href: "/resources/events" },
            { label: "Customer Stories", href: "/customers" },
          ],
        },
      ],
    },
  ],
  headerCta: { label: "Connect with Us", href: "/contact" },
  footer: {
    address: {
      lines: ["9801 Westheimer Road, Suite 803", "Houston, TX 77042"],
      phone: "713.781.7481",
      email: "info@ptg.com",
    },
    columns: [
      {
        title: "Services",
        items: [
          { label: "Advisory & Strategy", href: "/services/workday-advisory-strategy" },
          { label: "Implementation", href: "/services/workday-implementation" },
          { label: "AMS & Optimization", href: "/services/workday-ams-optimization" },
          { label: "Innovation", href: "/services/workday-innovation" },
          { label: "ServiceNow", href: "/services/servicenow-implementation" },
        ],
      },
      {
        title: "Industries",
        items: [
          { label: "Government", href: "/industries/government" },
          { label: "Higher Education", href: "/industries/higher-education" },
          { label: "Transit & Utilities", href: "/industries/transit-utilities" },
          { label: "Nonprofit", href: "/industries/nonprofit" },
          { label: "Healthcare", href: "/industries/healthcare" },
        ],
      },
      {
        title: "How to buy",
        items: [
          { label: "Sourcewell 060624-PRT", href: "/procurement-contracts/sourcewell" },
          { label: "OMNIA Partners 01-140", href: "/procurement-contracts/omnia-partners" },
          { label: "Texas DIR", href: "/procurement-contracts/texas-dir" },
          { label: "GSA MAS", href: "/procurement-contracts/gsa" },
          { label: "California SLP · IPHEC", href: "/procurement-contracts/california-slp" },
        ],
      },
      {
        title: "Company",
        items: [
          { label: "About PTG", href: "/about" },
          { label: "Our Leadership", href: "/about/leadership" },
          { label: "Careers & Culture", href: "/about/careers" },
          { label: "Customer Stories", href: "/customers" },
          { label: "Connect with Us", href: "/contact" },
        ],
      },
    ],
    social: [
      { label: "PTG on LinkedIn", abbr: "in", href: "#" },
      { label: "PTG on X", abbr: "X", href: "#" },
      { label: "PTG on YouTube", abbr: "YT", href: "#" },
    ],
    legalLinks: [
      { label: "Accessibility", href: "/accessibility" },
      { label: "Privacy", href: "/privacy" },
    ],
    copyright:
      "© 2026 Precision Task Group, Inc. · Certified MBE · DBE certified in multiple states",
  },
};

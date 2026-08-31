import type { StandardPage } from "@/content/types";
import { roles } from "./roles";

/**
 * About / Leadership / Careers / Customers. Words are PTG's (PTG-SITE-COPY.md).
 * ⚠️ items (45-year claim, named customers, leadership roles) ship as written and
 * are logged in _handoff/FOR-RIDGE.md. Leadership renders names + titles only;
 * bios are flagged and must come from PTG — never invented here.
 */

export const about: StandardPage = {
  meta: {
    title: "About PTG",
    description:
      "PTG is a boutique Workday and ServiceNow consulting firm for the organizations that serve the public. Family-owned, independent, and not for sale.",
  },
  currentLabel: "About",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "About" }],
  hero: {
    eyebrow: "About PTG",
    headline: "Your mission. Our purpose.",
    body:
      "PTG is a boutique consulting firm specializing in Workday and ServiceNow for the organizations that serve the public. We've been family-owned for 45 years.",
  },
  sections: [
    {
      // The independence point carries its own explanation in ONE section —
      // it was previously the tail of the hero sentence plus a headless
      // paragraph, which stranded the paragraph. See _handoff/DECISIONS.md.
      kind: "pullQuote",
      text: "Stable, independent, and not for sale.",
      body: [
        "That matters more than it sounds. Our clients aren't wondering who will own us next year or whether their team survives an acquisition. They get the same senior people, engagement after engagement.",
      ],
    },
    {
      kind: "prose",
      eyebrow: "What we do",
      body: [
        "We help organizations get the most from their technology investment: planning it, implementing it, optimizing it and extending it as the organization changes. We work across Workday and ServiceNow for government, higher education, healthcare, transit and utilities, and nonprofit organizations.",
        "As an authorized Workday reseller, we can also guide licensing and procurement, so strategy, software and implementation come together as one path instead of three separate conversations.",
      ],
    },
    {
      kind: "features",
      eyebrow: "Our approach",
      heading: "How we work.",
      columns: 2,
      items: [
        { title: "People come first", body: "When we take care of our team, they take care of our clients. It's why we've had near-zero voluntary turnover in recent years." },
        { title: "Partnerships over projects", body: "Great outcomes start with communication and collaboration. We don't just deliver solutions; we build lasting relationships." },
        { title: "Centers of Excellence", body: "Dedicated teams across HCM, Financials, PMO and Technology, so quality doesn't depend on who happens to be available." },
        { title: "Individualized attention", body: "As a smaller firm, we give every client senior, personal attention at cost-effective rates." },
      ],
    },
    {
      kind: "tags",
      eyebrow: "Our values",
      heading: "What we hold ourselves to.",
      variant: "values",
      items: ["Mission Driven", "People First", "Drive Results", "Embrace Change", "Own It"],
    },
    {
      kind: "prose",
      eyebrow: "Where we are",
      body: [
        "Headquartered in Houston, Texas, with consultants across the United States. We're certified as a minority business enterprise and hold Disadvantaged Business Enterprise certifications through multiple state transportation programs.",
      ],
      maxWidth: 780,
    },
    {
      kind: "cta",
      eyebrow: "Connect with us",
      heading: "Let's talk about your mission.",
      ctas: [
        { label: "Schedule a consultation", href: "/contact" },
        { label: "Meet our leadership", href: "/about/leadership" },
      ],
    },
  ],
};

export const leadership: StandardPage = {
  meta: {
    title: "Our Leadership",
    description: "The people behind the work at PTG, leaders who have spent careers in the operational realities our clients live in.",
  },
  currentLabel: "About",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Leadership" }],
  hero: {
    eyebrow: "Our Leadership",
    headline: "The people behind the work.",
    body:
      "Our leadership team has spent careers in the operational realities our clients live in: public sector, higher education, healthcare and technology. They stay close to the work.",
  },
  sections: [
    {
      kind: "people",
      // ⚠️ EVERY NAME HERE MUST BE VERIFIABLE. Reduced 2026-08-06 from eight to
      // three. Removed: "Massey" (surname only, taken from a transcript in which
      // Krisp demonstrably garbled other terms; CEO title was inferred, never
      // stated) and "Mike" (first name only, shipping the literal string "Role to
      // be confirmed"). Also removed Coopman, Garza and Chovanec — all real PTG
      // people, but sourced from a business card, an email signature and an event
      // graphic respectively. They are account executives and an industry
      // advisor, not leadership; listing them misstates PTG's org to its own CEO.
      // Do NOT re-add anyone without a source from PTG.
      note: "This is a partial list. Full leadership profiles, bios and headshots come from PTG.",
      people: [
        { name: "Vanessa Ozuna", title: "Chief Operating Officer" },
        { name: "Stephen Camp", title: "Chief Technology Officer" },
        { name: "Kim Christenson", title: "VP, Marketing" },
      ],
    },
    {
      kind: "cta",
      eyebrow: "Connect with us",
      heading: "Let's talk about your mission.",
      ctas: [
        { label: "Schedule a consultation", href: "/contact" },
        { label: "About PTG", href: "/about" },
      ],
    },
  ],
};

export const careers: StandardPage = {
  meta: {
    title: "Careers & Culture",
    description:
      "People First isn't just a value on a wall. Near-zero voluntary turnover, real ownership of public sector work, and leadership that knows your name.",
  },
  currentLabel: "About",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Careers & Culture" }],
  hero: {
    eyebrow: "Careers & Culture",
    headline: "People First isn't just a value on a wall.",
    body:
      "We've had close to zero voluntary turnover in recent years. Not because we say people come first. It's because consultants here own their work, know their leadership by name, and don't get moved off a project to fill a bench somewhere else.",
    image: {
      src: "/images/consultant.png",
      alt: "Consultants talking around a table covered in site plans and photographs in a warm studio office",
      width: 1254,
      height: 1254,
    },
  },
  sections: [
    {
      kind: "features",
      // eyebrow: "What it's like here",
      heading: "What it's like here.",
      columns: 2,
      items: [
        { title: "Work that matters", body: "Our clients are cities, universities, hospitals and nonprofits. What you build gets used by people serving the public." },
        { title: "Real work-life balance", body: "We mean it, and our retention says so. Boutique doesn't have to mean burnout." },
        { title: "Senior from day one", body: "Small teams, direct client contact, no layers between you and the work." },
        { title: "Room to grow", body: "Centers of Excellence across HCM, Financials, PMO and Technology give you a path deeper into your specialty." },
      ],
    },
    {
      kind: "tags",
      eyebrow: "Our values",
      heading: "What we hold ourselves to.",
      variant: "values",
      items: ["Mission Driven", "People First", "Drive Results", "Embrace Change", "Own It"],
    },
    {
      kind: "emptyState",
      eyebrow: "Open roles",
      heading: "Open roles",
      sub: "Workday, ServiceNow and change management. Remote-first, U.S.",
      title: "No postings open right now.",
      body: "We're not in a hiring push at the moment, but we're always glad to meet good people. Send your résumé below and we'll be in touch when something fits.",
      cta: { label: "Send us your résumé", href: "#apply" },
      // ⚠️ SAMPLE postings — see content/pages/roles.ts. Empty array here (or
      // there) restores the "no postings" empty state.
      roles,
    },
    {
      kind: "applicationForm",
      id: "apply",
      bg: "offwhite",
      eyebrow: "Introduce yourself",
      heading: "Send us your résumé.",
      intro:
        "No open posting is no reason to wait. Tell us who you are and attach your résumé. We keep applications on file and reach out when a role fits your background.",
    },
    {
      kind: "cta",
      eyebrow: "Careers & culture",
      heading: "We're always glad to meet good people.",
      ctas: [
        { label: "Send us your résumé", href: "#apply" },
        { label: "Learn about PTG", href: "/about" },
      ],
    },
  ],
};

export const customers: StandardPage = {
  meta: {
    title: "Customer Stories",
    description:
      "Cities, universities, transit authorities and water districts run on systems most people never see. We help make those systems work better.",
  },
  currentLabel: "Resources",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Customer Stories" }],
  hero: {
    eyebrow: "Our customers",
    headline: "Trusted by the organizations that serve communities.",
    body:
      "Cities, universities, transit authorities and water districts run on systems most people never see. We help make those systems work better, so the people behind them can focus on the communities they serve.",
  },
  sections: [
    {
      kind: "customers",
      eyebrow: "Who we work with",
      heading: "A sample of the institutions we serve.",
      unverified: true,
      groups: [
        {
          title: "Higher education",
          names: [
            "City University of New York",
            "The University of Texas at Austin",
            "Texas A&M University",
            "South Texas College",
            "Lee College",
          ],
        },
        {
          title: "Transit, utilities & special districts",
          names: [
            "Dallas Area Rapid Transit",
            "Houston METRO",
            "Orange County Transportation Authority",
            "Tarrant Regional Water District",
            "Lakehaven Water & Sewer District",
          ],
        },
      ],
    },
    {
      kind: "emptyState",
      eyebrow: "Case studies",
      heading: "Case studies",
      title: "Detailed case studies are on the way.",
      body: "We're working with our clients on what we can share publicly. In the meantime, we're glad to talk through comparable work directly, including references.",
      cta: { label: "Ask about our work in your sector", href: "/contact" },
    },
    {
      kind: "cta",
      eyebrow: "Connect with us",
      heading: "Ask about comparable work.",
      body: "Tell us your sector and we'll talk through work like yours directly, including references.",
      ctas: [
        { label: "Connect with us", href: "/contact" },
        { label: "See procurement options", href: "/procurement-contracts" },
      ],
    },
  ],
};

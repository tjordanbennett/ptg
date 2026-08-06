import type { HomePage } from "../types";

/**
 * Homepage content. Headlines/framing are the design's (approved, verbatim);
 * factual data (stats, customers, vehicle numbers) is the verified data that the
 * design was built from and that matches Ridge's content files. The hero and
 * industry image slots use the real supplied Houston photography.
 */
export const home: HomePage = {
  hero: {
    eyebrow: "Realize Value. Faster.",
    headline: "Workday, delivered by people\nwho stay.",
    body:
      "Workday licensing, implementation and support for government, higher " +
      "education, health systems and nonprofits — from a family-owned firm where " +
      "the team that wins your work is the team that does it.",
    ctas: [
      { label: "Schedule a consultation", href: "/contact" },
      { label: "How to buy from PTG", href: "/procurement-contracts" },
    ],
    image: {
      src: "/images/hero-houston.jpg",
      alt: "Downtown Houston skyline at dusk",
      width: 2400,
      height: 1600,
    },
  },

  twoPaths: [
    {
      eyebrow: "I'm evaluating partners",
      heading: "Buy without running an RFP",
      body:
        "Most public agencies and universities already participate in a " +
        "cooperative contract that covers PTG. If yours does, the sourcing work " +
        "is done — you can go straight to scoping.",
      cta: { label: "Find your contract vehicle", href: "/procurement-contracts" },
      image: {
        src: "/images/evaluating-partner.png",
        alt: "Consultants reviewing plans with a client in a glass-walled meeting room overlooking a university campus",
        width: 1254,
        height: 1254,
      },
    },
    {
      eyebrow: "I'm a consultant",
      heading: "Build a career you don't leave",
      body:
        "Near-zero voluntary turnover, real ownership of public sector work, and " +
        "a firm small enough that leadership knows your name and what you're good at.",
      cta: { label: "See careers & culture", href: "/about/careers" },
      image: {
        src: "/images/consultant.png",
        alt: "Consultants talking around a table covered in site plans and photographs in a warm studio office",
        width: 1254,
        height: 1254,
      },
    },
  ],

  stats: {
    eyebrow: "By the numbers",
    heading: "Four and a half decades of public sector work",
    credentialLine: "The largest public sector Workday reseller in the U.S.",
    credentialChips: [
      "Certified Workday Partner",
      "Authorized Reseller",
      "MBE · DBE Certified",
    ],
    items: [
      { figure: "45", label: "Years family-owned and independent", tint: "white" },
      { figure: "100+", label: "Government Workday projects", tint: "white" },
      { figure: "50+", label: "Higher education Workday projects", tint: "leaf" },
      { figure: "30+", label: "Years of public sector consulting", tint: "white" },
      { figure: "2017", label: "Certified Workday partner since", tint: "clear" },
    ],
  },

  customers: {
    heading: "Trusted by the institutions that serve Texas and the nation",
    names: [
      { name: "City University of New York", logo: "/logos/customers/cuny.svg" },
      { name: "The University of Texas at Austin", logo: "/logos/customers/ut-austin.svg" },
      { name: "Texas A&M University", logo: "/logos/customers/texas-am.svg" },
      { name: "South Texas College" },
      { name: "Lee College" },
      { name: "Dallas Area Rapid Transit", logo: "/logos/customers/dart.svg" },
      { name: "Houston METRO", logo: "/logos/customers/houston-metro.svg" },
      { name: "Orange County Transportation Authority", logo: "/logos/customers/octa.svg" },
      { name: "Tarrant Regional Water District" },
      { name: "Lakehaven Water & Sewer District" },
    ],
    link: { label: "View customer stories", href: "/customers" },
  },

  contracts: {
    eyebrow: "How to buy",
    heading: "You may already be able to buy from us.",
    body: [
      "PTG holds six cooperative and government contract vehicles. If your " +
        "organization participates in one, the competitive bid is already done — " +
        "no RFP, no evaluation committee, no months of lead time. And because " +
        "we're an authorized reseller, licensing and implementation come through " +
        "a single contract.",
    ],
    cta: {
      label: "Find the vehicle that applies to you",
      href: "/procurement-contracts",
    },
    vehicles: [
      { name: "Sourcewell", number: "060624-PRT" },
      { name: "OMNIA Partners", number: "01-140" },
      { name: "Texas DIR", number: "DIR-CPO-5657 · 6141" },
      { name: "GSA MAS", number: "GS-35F-035GA" },
      { name: "California SLP", number: "SLP-24-70-0281B" },
      { name: "IPHEC", number: "2509GAL" },
    ],
  },

  industries: {
    eyebrow: "Industries",
    heading: "Public missions have their own rules.",
    intro:
      "Fund accounting, grant reporting, union agreements, board calendars, FTA " +
      "reporting and Title IV compliance. We've spent three decades inside them.",
    cards: [
      {
        name: "Government & Public Sector",
        hook: "100+ Workday projects for the agencies that keep communities running.",
        outcomes: [
          "Fund accounting and grant compliance",
          "Procurement and budget transparency",
          "Civil service and union rules",
        ],
        cta: "Public sector work",
        href: "/industries/government",
        image: { src: "/images/industry-government.jpg", alt: "Downtown Houston at dusk", width: 1600, height: 1200 },
      },
      {
        name: "Higher Education",
        hook: "Student, HCM and Financials for institutions from 5,000 to 240,000 students.",
        outcomes: [
          "Title IV and financial aid readiness",
          "Faculty and adjunct pay structures",
          "Multi-campus system rollouts",
        ],
        cta: "Higher education work",
        href: "/industries/higher-education",
        image: { src: "/images/industry-higher-education.jpg", alt: "The Houston skyline at dusk", width: 1600, height: 1200 },
      },
      {
        name: "Transit, Utilities & Special Districts",
        hook: "DART, Houston METRO, OCTA and Tarrant Regional Water District trust us with the systems behind essential service.",
        outcomes: [
          "FTA reporting and grant tracking",
          "Operator scheduling and overtime",
          "Capital project cost visibility",
        ],
        cta: "Transit & utilities work",
        href: "/industries/transit-utilities",
        image: { src: "/images/industry-transit.jpg", alt: "Houston freeway light trails at dusk", width: 1600, height: 1200 },
      },
      {
        name: "Nonprofit",
        hook: "Reduce the administrative drag so more of every dollar reaches the mission.",
        outcomes: [
          "Grant and restricted fund reporting",
          "Volunteer and program staffing",
          "Board and donor transparency",
        ],
        cta: "Nonprofit work",
        href: "/industries/nonprofit",
        image: { src: "/images/industry-nonprofit.jpg", alt: "Houston's skyline and treeline at dusk", width: 1600, height: 1200 },
      },
      {
        name: "Healthcare",
        hook: "Clinical scheduling and workforce complexity, without disrupting patient care.",
        outcomes: [
          "Complex pay and differential handling",
          "Premium pay and shift differentials",
          "Supply chain and labor analytics",
        ],
        cta: "Healthcare work",
        href: "/industries/healthcare",
        image: { src: "/images/industry-healthcare.jpg", alt: "Houston's towers at dusk", width: 1600, height: 1200 },
      },
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "The full Workday lifecycle, plus ServiceNow.",
    chips: ["Workday Partner", "ServiceNow Partner"],
    items: [
      { num: "01", name: "Workday Advisory & Strategy", summary: "Readiness assessments, roadmaps, business cases and change decisions — before you commit to a configuration or a go-live date.", href: "/services/workday-advisory-strategy" },
      { num: "02", name: "Workday Implementation", summary: "Full-suite HCM, Financials, Student and Payroll deployments, delivered by the same team that scoped them.", href: "/services/workday-implementation" },
      { num: "03", name: "Workday AMS & Optimization", summary: "Ongoing support, release management and twice-yearly feature adoption — with named consultants who already know your tenant, not a ticket queue.", href: "/services/workday-ams-optimization" },
      { num: "04", name: "Workday Innovation", summary: "Extend, Prism, integrations and AI-enabled workflows for the problems standard functionality doesn't cover.", href: "/services/workday-innovation" },
      { num: "05", name: "ServiceNow Implementation", summary: "ITSM, service portals and workflow automation for organizations standardizing service delivery alongside Workday.", href: "/services/servicenow-implementation" },
    ],
  },

  journey: {
    eyebrow: "Our delivery journey",
    heading: "Strategy to impact, without the handoffs.",
    intro:
      "One team stays with you from planning through innovation. No re-explaining " +
      "between phases. No relearning your organization.",
    steps: [
      { num: "STAGE 01", name: "Plan", body: "Readiness, roadmap and the business case. We find the constraints before they become change orders.", bar: "#80CEFF" },
      { num: "STAGE 02", name: "Deploy", body: "Configuration, data, integrations and testing — run by the consultants who scoped the work.", bar: "#80CEFF" },
      { num: "STAGE 03", name: "Optimize", body: "Post-go-live stabilization, release management and the feature adoption most teams never get to.", bar: "#EB4900" },
      { num: "STAGE 04", name: "Innovate", body: "Extend, Prism, automation and AI, once the foundation is solid enough to build on.", bar: "#EB4900" },
    ],
  },

  // ▲ STRUCTURAL CHANGE (copy-FINAL §10): the design tool's invented quote was
  // replaced with PTG's OWN testimonial, verbatim from their copy deck and
  // anonymized exactly as they wrote it. Still a placeholder attribution awaiting
  // real sign-off — never ship an invented quote about a real client type.
  testimonial: {
    quote:
      "PTG understood the complexity of our operations and delivered a Workday " +
      "solution that improved visibility across finance, HR, and operations while " +
      "helping us prepare for future growth. Their consultants quickly became an " +
      "extension of our team.",
    attribution: "Executive Sponsor, Regional Transit Authority",
    placeholder: true, // anonymized/unverified attribution
  },

  careers: {
    eyebrow: "Careers & culture",
    heading: "People First isn't a value on a wall.",
    body:
      "We've had close to zero voluntary turnover in recent years. Not because we " +
      "say people come first — because consultants here own their work, know their " +
      "leadership by name, and don't get moved off a project to fill a bench " +
      "somewhere else.",
    values: ["Mission Driven", "People First", "Drive Results", "Embrace Change", "Own It"],
    openRoles: {
      heading: "Open roles",
      sub: "Workday, ServiceNow, change management — remote-first, U.S.",
      // ▲ STRUCTURAL CHANGE (copy-FINAL §11): reframed so no openings reads as a
      // position, not an error.
      emptyTitle: "No postings open right now.",
      emptyBody:
        "We're not in a hiring push at the moment, but we're always glad to meet " +
        "good people. Tell us what you do and we'll be in touch when something fits.",
      cta: { label: "Send us your résumé", href: "/about/careers#apply" },
    },
  },

  closingCta: {
    eyebrow: "Your mission. Our purpose.",
    heading: "Big missions. Bigger impact.",
    // ▲ STRUCTURAL CHANGE (copy-FINAL §12): names the three states a prospect is
    // actually in and offers an honest answer.
    body:
      "Tell us where you are with Workday — considering it, mid-implementation, or " +
      "years past go-live — and we'll tell you honestly whether we're the right firm for it.",
    ctas: [
      { label: "Connect with us", href: "/contact" },
      { label: "Or start with how to buy", href: "/procurement-contracts" },
    ],
  },
};

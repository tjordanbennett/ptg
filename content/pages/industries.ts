import type { StandardPage } from "@/content/types";

/**
 * Industry pages. Words are PTG's (PTG-SITE-COPY.md). Stats and named customers
 * marked ⚠️ in the copy ship as written but still need PTG's confirmation — the
 * open items are logged in _handoff/FOR-RIDGE.md. Named-customer blocks carry
 * data-unverified via the `unverified` flag.
 */

const crumbs = (label: string) => [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/#industries" },
  { label },
];

const howToBuy = { label: "See how to buy", href: "/procurement-contracts" };

export const industries: Record<string, StandardPage> = {
  government: {
    meta: {
      title: "Government & Public Sector",
      description:
        "Workday for cities, counties, state agencies, utilities and transit — modernize operations, empower your workforce and strengthen public service.",
    },
    currentLabel: "Industries",
    breadcrumbs: crumbs("Government & Public Sector"),
    hero: {
      eyebrow: "Government & Public Sector",
      headline: "Modern solutions for a changing public sector.",
      body:
        "Government organizations are under pressure to modernize operations, manage rising service demands, improve workforce experience and make faster decisions. We help cities, counties, state agencies, utilities and transit organizations transform with confidence.",
      tagline: "Modernize operations. Empower your workforce. Strengthen public service.",
    },
    sections: [
      {
        kind: "stats",
        items: [
          { value: "30+", label: "Years of public sector consulting" },
          { value: "100+", label: "Government Workday projects" },
          { value: "Certified", label: "Workday consultants with government expertise" },
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why public sector organizations choose PTG.",
        columns: 2,
        items: [
          { title: "Deep industry knowledge", body: "Compliance, workforce structure, budget constraints, approvals, reporting and stakeholder governance." },
          { title: "Tailored solutions", body: "No two agencies are the same. Every engagement is shaped around your mission and readiness." },
          { title: "Proven experience", body: "State and local government, transit, utilities, education, healthcare and public service." },
          { title: "Long-term partnership", body: "Planning through go-live, optimization and long-term value." },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Challenges we help solve",
        heading: "The problems that stall public sector modernization.",
        items: [
          "Modernizing legacy systems",
          "Improving budgeting and decision support",
          "Strengthening compliance and reporting",
          "Reducing manual work",
          "Supporting workforce transformation",
          "Driving continuous value",
        ],
      },
      {
        kind: "tags",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        variant: "chip",
        items: [
          "Unified ERP for government operations",
          "Budgeting and planning",
          "Accounting and financial reporting",
          "Workforce and payroll transformation",
          "Reporting and analytics",
          "Integration and innovation",
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "What changes after go-live.",
        items: [
          "Streamlined HR, finance, payroll and planning",
          "Reduced manual work and duplicate entry",
          "Improved budget visibility",
          "Stronger compliance and reporting readiness",
          "Better employee and manager experience",
          "Greater operational resilience",
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to modernize public service?",
        ctas: [{ label: "Schedule a public sector consultation", href: "/contact" }, howToBuy],
      },
    ],
  },

  "higher-education": {
    meta: {
      title: "Higher Education",
      description:
        "Workday Student, HCM and Financials for colleges and universities — modernize administrative operations and build a connected campus.",
    },
    currentLabel: "Industries",
    breadcrumbs: crumbs("Higher Education"),
    hero: {
      eyebrow: "Higher Education",
      headline: "Empowering institutions. Enriching futures.",
      body:
        "Colleges and universities are balancing enrollment expectations, evolving student needs, financial pressure and growing demand for data-driven decisions. We help institutions modernize administrative operations and build connected campuses powered by Workday.",
      tagline: "Modernize operations. Empower students. Transform higher education.",
    },
    sections: [
      {
        kind: "stats",
        items: [
          { value: "20+", label: "Years supporting higher education" },
          { value: "50+", label: "Higher education Workday projects" },
          { value: "Certified", label: "Workday higher education consultants" },
        ],
      },
      {
        kind: "customers",
        eyebrow: "Customers",
        heading: "Institutions that trust us.",
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
        ],
      },
      {
        kind: "prose",
        eyebrow: "What makes it different",
        heading: "Higher education isn't like other sectors.",
        body: [
          "Faculty governance, decentralized operations, complex funding models, research administration and shared governance require a partner who understands the culture — not just the software.",
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why institutions choose PTG.",
        columns: 2,
        items: [
          { title: "Deep higher education knowledge", body: "Faculty appointments, academic organizations, grants, shared governance and student success." },
          { title: "Tailored solutions", body: "Shaped around your governance structure, strategic plan and enrollment goals." },
          { title: "Proven results", body: "Measurable improvement in efficiency, employee experience and institutional decision-making." },
          { title: "Long-term partnership", body: "From planning through optimization and continuous innovation." },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Challenges we help solve",
        heading: "Where institutions ask for help.",
        items: [
          "Improve student experience",
          "Recruit and retain faculty and staff",
          "Modernize legacy systems",
          "Improve financial stewardship",
          "Support data-driven leadership",
          "Strengthen reporting and compliance",
        ],
      },
      {
        kind: "tags",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        variant: "chip",
        items: [
          "Human Capital Management",
          "Finance & Grants",
          "Payroll & Workforce",
          "Planning & Analytics",
          "Student & Academic Operations",
          "Integrations & Innovation",
        ],
      },
      {
        kind: "testimonial",
        unverified: true,
        quote:
          "PTG understood both the technology and the unique culture of higher education. Their collaborative approach, deep Workday expertise, and commitment to our success helped us modernize operations while keeping our institutional mission at the center of every decision.",
        attribution: "— Executive Sponsor, Public Higher Education Institution",
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to transform higher education?",
        ctas: [{ label: "Schedule a higher education consultation", href: "/contact" }, howToBuy],
      },
    ],
  },

  "transit-utilities": {
    meta: {
      title: "Transit, Utilities & Special Districts",
      description:
        "Workday for transit agencies, utilities, water districts and transportation authorities — improve efficiency, financial stewardship and service delivery.",
    },
    currentLabel: "Industries",
    breadcrumbs: crumbs("Transit, Utilities & Special Districts"),
    hero: {
      eyebrow: "Transit, Utilities & Special Districts",
      headline: "Powering the organizations that keep communities moving.",
      body:
        "Transit agencies, utilities, water districts and transportation authorities deliver the services communities depend on every day. As infrastructure ages and workforce challenges grow, they need technology that improves efficiency, strengthens financial stewardship and enhances service delivery.",
      tagline: "Modernize operations. Empower your workforce. Deliver better service.",
    },
    sections: [
      {
        kind: "stats",
        items: [
          { value: "30+", label: "Years public infrastructure and utility experience" },
          { value: "Certified", label: "Workday consultants" },
          { value: "End-to-end", label: "Advisory through innovation" },
        ],
      },
      {
        kind: "customers",
        eyebrow: "Customers",
        heading: "Trusted with essential service.",
        unverified: true,
        groups: [
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
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why these organizations choose PTG.",
        columns: 2,
        items: [
          { title: "Deep industry expertise", body: "Capital projects, maintenance operations, labor agreements, regulatory compliance, grants and customer service." },
          { title: "Tailored solutions", body: "Utility billing, transportation operations, water infrastructure — shaped around your operating model." },
          { title: "Proven results", body: "Measurable improvement in efficiency, financial visibility and workforce management." },
          { title: "Long-term partnership", body: "AMS, optimization, strategic advisory and continuous innovation." },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Challenges we help solve",
        heading: "The realities of running infrastructure.",
        items: [
          "Modernize legacy ERP",
          "Improve financial transparency",
          "Address workforce shortages",
          "Support unionized and field-based employees",
          "Improve capital project visibility",
          "Simplify regulatory compliance",
          "Modernize utility billing operations",
        ],
      },
      {
        kind: "prose",
        eyebrow: "CIS and enterprise integration",
        heading: "Workday, connected to the systems billing depends on.",
        body: [
          "Utility organizations depend on accurate customer information and billing. We integrate Workday with existing Customer Information Systems, Enterprise Asset Management, GIS and scheduling platforms — improving billing accuracy, reducing manual entry and automating financial reconciliation.",
        ],
      },
      {
        kind: "tags",
        eyebrow: "Who we serve",
        heading: "Organizations we work with.",
        variant: "chip",
        items: [
          "Public transit authorities",
          "Water districts",
          "Water and sewer utilities",
          "Regional transportation authorities",
          "Special districts",
          "Flood control districts",
          "Port authorities",
          "Airport authorities",
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to modernize essential services?",
        ctas: [{ label: "Schedule a transit & utilities consultation", href: "/contact" }, howToBuy],
      },
    ],
  },

  nonprofit: {
    meta: {
      title: "Nonprofit",
      description:
        "Workday for nonprofits — spend less time on administration and more time advancing the mission, with clean grant, fund and donor reporting.",
    },
    currentLabel: "Industries",
    breadcrumbs: crumbs("Nonprofit"),
    hero: {
      eyebrow: "Nonprofit",
      headline: "Technology that amplifies your mission.",
      body:
        "Nonprofits are asked to do more with less — serve more people, manage tighter budgets, improve transparency and demonstrate measurable impact to funders and boards. We help nonprofit organizations spend less time on administration and more time advancing the mission.",
      tagline: "Amplify impact. Strengthen operations. Focus on what matters most.",
    },
    sections: [
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why nonprofits choose PTG.",
        columns: 2,
        items: [
          { title: "Deep nonprofit knowledge", body: "Limited resources, grant requirements, compliance, donor expectations and program reporting." },
          { title: "Tailored solutions", body: "Built around your mission, operating model and funding structure." },
          { title: "Proven results", body: "Measurable improvement in efficiency, financial visibility and mission delivery." },
          { title: "Long-term partnership", body: "More than a vendor — committed to your success beyond go-live." },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Challenges we help solve",
        heading: "The administrative drag we remove.",
        items: [
          "Outdated or disconnected systems",
          "Manual administrative processes",
          "Limited staff capacity",
          "Complex grant and fund reporting",
          "Donor and board transparency",
          "Workforce retention",
          "Compliance and audit readiness",
        ],
      },
      {
        kind: "tags",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        variant: "chip",
        items: [
          "Human Capital Management",
          "Financial Management",
          "Payroll & Workforce",
          "Planning & Analytics",
          "Reporting & Transparency",
          "Integrations & Innovation",
        ],
      },
      { kind: "pullQuote", text: "Technology alone does not create impact. People do." },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to amplify your mission?",
        ctas: [{ label: "Schedule a nonprofit consultation", href: "/contact" }, howToBuy],
      },
    ],
  },

  healthcare: {
    meta: {
      title: "Healthcare",
      description:
        "Workday for hospitals, health systems and academic medical centers — modernize operations so clinicians can focus on delivering care.",
    },
    currentLabel: "Industries",
    breadcrumbs: crumbs("Healthcare"),
    hero: {
      eyebrow: "Healthcare",
      headline: "Technology that empowers better care.",
      body:
        "Healthcare organizations face pressure to improve patient outcomes while managing workforce shortages, rising costs and evolving regulation. We help providers modernize operations so clinicians and caregivers can focus on delivering care.",
      tagline: "Empower your workforce. Strengthen operations. Improve patient care.",
    },
    sections: [
      {
        kind: "stats",
        items: [
          { value: "30+", label: "Years healthcare and public sector consulting" },
          { value: "Certified", label: "Workday healthcare consultants" },
          { value: "Systems", label: "Hospitals, health systems and academic medical centers" },
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why healthcare organizations choose PTG.",
        columns: 2,
        items: [
          { title: "Healthcare industry expertise", body: "Workforce scheduling, multiple pay structures, regulatory compliance, labor management and patient-centered operations." },
          { title: "Tailored solutions", body: "Shaped around your care delivery model and organizational structure." },
          { title: "Proven results", body: "Improved efficiency, reduced administrative burden and stronger financial performance." },
          { title: "Long-term partnership", body: "Strategic planning through optimization." },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Challenges we help solve",
        heading: "The pressures on health systems.",
        items: [
          "Workforce shortages and clinician burnout",
          "Rising labor and operating costs",
          "Fragmented legacy systems",
          "Complex payroll and compensation",
          "Regulatory compliance",
          "Recruiting and retaining talent",
          "Executive reporting",
        ],
      },
      {
        kind: "tags",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        variant: "chip",
        items: [
          "Workforce transformation",
          "Financial management",
          "Payroll and workforce management",
          "Planning and analytics",
          "Integrations across EHR, clinical, supply chain and scheduling",
          "Innovation and automation",
        ],
      },
      {
        kind: "testimonial",
        unverified: true,
        quote:
          "PTG became a true extension of our organization. Their healthcare expertise and Workday knowledge helped us modernize operations while minimizing disruption to our clinical teams.",
        attribution: "— Chief Financial Officer, Regional Health System",
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to transform healthcare operations?",
        ctas: [{ label: "Schedule a healthcare consultation", href: "/contact" }, howToBuy],
      },
    ],
  },
};

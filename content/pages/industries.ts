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

const howToBuy = { label: "See procurement options", href: "/procurement-contracts" };

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
        kind: "prose",
        eyebrow: "Experience that runs deep",
        heading: "Trusted by government organizations for more than three decades.",
        body: [
          "Public sector transformation takes more than technology expertise. It takes understanding how government actually operates — procurement and budgeting, regulatory compliance, collective bargaining, public safety, grant management and governing board oversight. We bring three decades of that to every Workday engagement.",
        ],
      },
      {
        kind: "tags",
        eyebrow: "What we deploy",
        heading: "The Workday footprint for government operations.",
        variant: "chip",
        items: [
          "Human Capital Management",
          "Payroll",
          "Financial Management",
          "Adaptive Planning",
          "Budgeting",
          "Reporting & Analytics",
          "Integrations",
          "Workday Extend",
          "AMS & Optimization",
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
        kind: "cards",
        eyebrow: "Challenges we help solve",
        heading: "The problems that stall public sector modernization.",
        columns: 3,
        cards: [
          {
            title: "Modernizing legacy systems",
            hook: "Replace outdated, disconnected systems with one cloud platform for HR, finance, payroll, planning and reporting.",
          },
          {
            title: "Improving budgeting and decision support",
            hook: "Better planning, forecasting and budget visibility, so leaders can decide faster on better information.",
          },
          {
            title: "Strengthening compliance and reporting",
            hook: "Government reporting, audit readiness, financial controls, security and compliance-focused business processes.",
          },
          {
            title: "Reducing manual work",
            hook: "Automate approvals, workflows, reporting, integrations and the repetitive administrative work in between.",
          },
          {
            title: "Supporting workforce transformation",
            hook: "Recruiting, onboarding, talent management, employee self-service, manager tools and workforce planning.",
          },
          {
            title: "Driving continuous value",
            hook: "Adopt new functionality, optimize processes and evolve the platform as your needs change.",
          },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        columns: 3,
        accent: "ember",
        cards: [
          {
            title: "Unified ERP for government operations",
            hook: "Connect people, finance, payroll, planning and reporting in one system — a single source of truth for better decisions.",
          },
          {
            title: "Budgeting and planning",
            hook: "Planning models, decision packages, forecasting, dashboards and performance insight.",
          },
          {
            title: "Accounting and financial reporting",
            hook: "Streamline accounting, grants, procurement, reporting and financial controls while improving transparency and audit readiness.",
          },
          {
            title: "Workforce and payroll transformation",
            hook: "Modernize employee experience, payroll operations, time tracking, recruiting, talent and workforce planning.",
          },
          {
            title: "Reporting and analytics",
            hook: "Real-time visibility into workforce, finance, budget and operational performance.",
          },
          {
            title: "Integration and innovation",
            hook: "Connect Workday to the systems your agency depends on, and extend it through automation, dashboards and custom applications.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "What changes after go-live.",
        items: [
          "Streamlined HR, finance, payroll and planning operations",
          "Reduced manual work and duplicate data entry",
          "Improved budget visibility and financial decision-making",
          "Stronger compliance and reporting readiness",
          "Better employee and manager experiences",
          "Faster access to real-time workforce and financial insight",
          "Greater operational resilience and scalability",
          "Continuous improvement beyond go-live",
        ],
      },
      {
        kind: "pullQuote",
        text: "Purpose-built for government. Proven through experience. Focused on your mission.",
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
          { title: "Accelerated transformation", body: "Proven deployment methodologies and higher education accelerators reduce project effort while shortening time to value." },
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
          "Increase operational efficiency",
          "Support data-driven leadership",
          "Enhance institutional agility",
          "Strengthen reporting and compliance",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        columns: 3,
        accent: "ember",
        cards: [
          {
            title: "Human Capital Management",
            hook: "Modernize recruiting, onboarding, talent management, compensation and employee experience.",
          },
          {
            title: "Finance & Grants",
            hook: "Improve budgeting, accounting, procurement, grants management and financial transparency.",
          },
          {
            title: "Payroll & Workforce",
            hook: "Simplify payroll operations, position management, faculty appointments and workforce planning.",
          },
          {
            title: "Planning & Analytics",
            hook: "Real-time insight into enrollment, workforce, finance and strategic performance.",
          },
          {
            title: "Student & Academic Operations",
            hook: "Support connected student experiences while improving collaboration across administrative offices.",
          },
          {
            title: "Integrations & Innovation",
            hook: "Connect campus systems while extending Workday through automation, APIs, reporting and custom applications.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "What institutions get out of it.",
        items: [
          "Modern cloud-based campus operations",
          "Improved employee and faculty experiences",
          "Faster financial and operational reporting",
          "Better enrollment and workforce insight",
          "Streamlined business processes",
          "Reduced administrative burden",
          "Increased collaboration across departments",
          "Better student service delivery",
          "Long-term technology sustainability",
        ],
      },
      {
        kind: "cards",
        eyebrow: "The PTG advantage",
        heading: "What you get that you wouldn't from a generalist.",
        columns: 3,
        cards: [
          {
            title: "Higher education specialists",
            hook: "Consultants who understand colleges and universities — not just the software they run on.",
          },
          {
            title: "Student-centered transformation",
            hook: "Technology strategy that improves the experience for students, faculty, staff and administrators alike.",
          },
          {
            title: "Proven Workday expertise",
            hook: "Advisory, implementation, AMS, optimization, integrations, Extend, reporting and innovation.",
          },
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
        kind: "pullQuote",
        text: "Purpose-built for higher education. Focused on institutional success.",
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
        kind: "prose",
        eyebrow: "Industry experience",
        heading: "We understand the complexity behind essential service.",
        body: [
          "Transportation, water, power, infrastructure and public services run on operational realities most consultants never encounter. Our consultants have supported agencies through highly regulated environments, capital improvement programs, unionized workforces, field operations, customer billing and complex financial management.",
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
          { title: "Accelerated transformation", body: "Proven deployment methodologies and industry accelerators reduce project effort while shortening time to value." },
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
          "Increase operational efficiency",
          "Improve customer service",
          "Modernize utility billing operations",
          "Connect critical enterprise systems",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        columns: 3,
        accent: "ember",
        cards: [
          {
            title: "Human Capital Management",
            hook: "Recruit, develop, retain and support employees across administrative offices and field operations.",
          },
          {
            title: "Financial Management",
            hook: "Improve budgeting, accounting, grants, procurement, project costing and capital planning.",
          },
          {
            title: "Payroll & Workforce Management",
            hook: "Support complex payroll, labor agreements, scheduling, overtime, certifications and workforce planning.",
          },
          {
            title: "Planning & Analytics",
            hook: "Real-time operational, financial, workforce and capital project insight through dashboards and analytics.",
          },
          {
            title: "Integrations & Customer Information Systems",
            hook: "Connect Workday with CIS, Enterprise Asset Management, GIS, procurement and scheduling platforms.",
          },
          {
            title: "Innovation & Automation",
            hook: "Workday Extend, automation, AI-enabled workflows, executive dashboards and modern integrations.",
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "CIS and enterprise integration",
        heading: "Workday, connected to the systems billing depends on.",
        body: [
          "Utility organizations depend on accurate customer information and billing. We integrate Workday with existing Customer Information Systems, enabling clean synchronization between customer billing, finance, payroll, procurement and workforce operations — whether you're keeping your current CIS platform or planning to replace it.",
        ],
      },
      {
        kind: "tags",
        eyebrow: "What integration delivers",
        heading: "Where the connection pays off.",
        items: [
          "Improve billing accuracy",
          "Reduce manual data entry",
          "Automate financial reconciliation",
          "Streamline customer service operations",
          "Enhance reporting across enterprise systems",
          "Support future CIS modernization",
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
        kind: "cards",
        eyebrow: "The PTG advantage",
        heading: "Why these organizations stay with us.",
        columns: 3,
        cards: [
          {
            title: "Industry specialists",
            hook: "Consultants with real-world experience supporting public infrastructure organizations.",
          },
          {
            title: "Integrated technology expertise",
            hook: "Workday, CIS, ERP, asset management, integrations, reporting and analytics under one team.",
          },
          {
            title: "Operational excellence",
            hook: "Simplify complex business processes while improving both employee and customer experience.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "What changes after go-live.",
        items: [
          "Connected enterprise operations",
          "Improved workforce productivity",
          "Better financial visibility",
          "Modern cloud-based HR and finance",
          "Improved regulatory compliance",
          "More efficient capital project management",
          "Streamlined utility billing integrations",
          "Reduced manual processes",
          "Better executive decision-making",
          "Continuous optimization beyond go-live",
        ],
      },
      {
        kind: "pullQuote",
        text: "Built for mission-critical operations. Focused on long-term success.",
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
          { title: "Smarter, faster transformation", body: "Proven deployment methods and nonprofit-specific accelerators reduce staff burden, increase adoption and shorten time to value." },
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
          "Budget constraints",
          "Donor and board transparency",
          "Workforce retention and engagement",
          "Program performance visibility",
          "Compliance and audit readiness",
          "Technology adoption",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        columns: 3,
        accent: "ember",
        cards: [
          {
            title: "Human Capital Management",
            hook: "Modern recruiting, onboarding, talent, compensation, performance and employee self-service.",
          },
          {
            title: "Financial Management",
            hook: "Improve accounting, budgeting, procurement, grants, fund tracking, reporting and financial transparency.",
          },
          {
            title: "Payroll & Workforce",
            hook: "Simplify payroll, time tracking, position management, workforce planning and compliance.",
          },
          {
            title: "Planning & Analytics",
            hook: "Better insight into funding, staffing, programs, budgets and outcomes.",
          },
          {
            title: "Reporting & Transparency",
            hook: "Real-time reporting and dashboards for executives, boards, funders and program leaders.",
          },
          {
            title: "Integrations & Innovation",
            hook: "Connect Workday with donor systems, program platforms, payroll providers and reporting tools.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "What the mission gets back.",
        items: [
          "Reduce administrative burden",
          "Improve financial transparency",
          "Strengthen grant and fund reporting",
          "Increase employee and manager self-service",
          "Improve data visibility across programs",
          "Support better board and donor reporting",
          "Streamline HR, finance, payroll and planning",
          "Build a scalable foundation for growth",
          "Increase adoption and user confidence",
          "Focus more time on mission delivery",
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
          { title: "Accelerated transformation", body: "Proven implementation methodologies and healthcare-focused accelerators reduce project effort while shortening time to value." },
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
          "Supply chain visibility",
          "Financial sustainability",
          "Recruiting and retaining talent",
          "Executive reporting",
          "Operational efficiency across the enterprise",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Solutions",
        heading: "What we put in place.",
        columns: 2,
        accent: "ember",
        cards: [
          {
            title: "Workforce Transformation",
            hook: "Recruit, retain, develop and engage healthcare professionals through modern Human Capital Management.",
            bullets: [
              "Talent acquisition",
              "Onboarding",
              "Performance management",
              "Learning",
              "Succession planning",
              "Employee experience",
            ],
          },
          {
            title: "Financial Management",
            hook: "Stronger financial visibility across budgeting, accounting, procurement, grants, project costing and operational planning.",
            bullets: [
              "Real-time financial reporting",
              "Budget transparency",
              "Automated workflows",
              "Improved reimbursement visibility",
              "Cost management",
            ],
          },
          {
            title: "Payroll & Workforce Management",
            hook: "Support healthcare's most complex workforce environments with flexible payroll and workforce management.",
            bullets: [
              "Multiple pay groups",
              "Shift differentials",
              "Overtime rules",
              "Union contracts",
              "On-call pay",
              "Premium pay calculations",
            ],
          },
          {
            title: "Planning & Analytics",
            hook: "Real-time insight into workforce, financial performance, labor costs, operational metrics and strategic planning.",
            bullets: [
              "Executive dashboards",
              "Workforce planning",
              "Financial forecasting",
              "Labor analytics",
              "Operational reporting",
              "KPI management",
            ],
          },
          {
            title: "Integrations & Connected Healthcare",
            hook: "Integrate Workday with the broader healthcare technology ecosystem, so one connected set of systems delivers trusted data across the organization.",
            bullets: [
              "Electronic Health Records (EHR)",
              "Clinical systems",
              "ERP platforms",
              "Supply chain systems",
              "Scheduling platforms",
              "Identity management",
              "Third-party payroll",
              "Financial applications",
            ],
          },
          {
            title: "Innovation & Automation",
            hook: "Extend Workday beyond standard functionality to reduce administrative workload.",
            bullets: [
              "Process automation",
              "AI-enabled workflows",
              "Intelligent reporting",
              "Custom applications",
            ],
          },
        ],
      },
      {
        kind: "prose",
        eyebrow: "Why it matters",
        heading: "Better operations mean better care.",
        body: [
          "When healthcare operations run efficiently, caregivers spend less time navigating administrative tasks and more time caring for patients. That is the point of the work, and it's the measure we hold ourselves to.",
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "What health systems get out of it.",
        items: [
          "Improved workforce efficiency",
          "Better financial visibility",
          "Faster recruiting and onboarding",
          "Simplified payroll administration",
          "Enhanced compliance and reporting",
          "Reduced administrative burden",
          "Better executive decision-making",
          "Increased employee engagement",
          "Greater operational agility",
          "More time dedicated to patient care",
        ],
      },
      {
        kind: "cards",
        eyebrow: "The PTG advantage",
        heading: "How we work with health systems.",
        columns: 3,
        cards: [
          {
            title: "People-first transformation",
            hook: "Technology should support caregivers, not create more work for them.",
          },
          {
            title: "Operational excellence",
            hook: "Modernize administrative processes while improving financial performance and workforce effectiveness.",
          },
          {
            title: "Connected technology",
            hook: "HR, finance, payroll, planning, supply chain and reporting unified on one Workday platform.",
          },
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
        kind: "pullQuote",
        text: "Technology built for healthcare. Focused on better patient outcomes.",
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

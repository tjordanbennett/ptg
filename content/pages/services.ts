import type { StandardPage } from "@/content/types";

/**
 * Services pages. Words are PTG's (PTG-SITE-COPY.md → their copy deck),
 * restructured into the built design patterns. Section headings are neutral,
 * descriptive labels — no invented claims. CTAs route to /contact; a secondary
 * "how to buy" link is added for the public-sector procurement path.
 */

const crumbs = (label: string) => [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label },
];

export const services: Record<string, StandardPage> = {
  "workday-advisory-strategy": {
    meta: {
      title: "Workday Advisory & Strategy",
      description:
        "Readiness assessments, roadmaps, alignment workshops and change strategy — before you commit to a configuration or a go-live date.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Advisory & Strategy"),
    hero: {
      eyebrow: "Workday Advisory & Strategy",
      headline: "Strategy before software. Confidence before configuration.",
      body:
        "Successful Workday deployments begin long before configuration starts. We help organizations align leadership, evaluate readiness, prepare for change and define a clear roadmap — so every decision that follows supports the outcome you actually want.",
      bullets: [
        "Know your risks before they become change orders",
        "Decide the hard questions before configuration locks them in",
        "Arrive at kickoff with leadership already aligned",
      ],
    },
    sections: [
      {
        kind: "cards",
        eyebrow: "Capabilities",
        heading: "What our advisors do.",
        columns: 3,
        cards: [
          {
            title: "Readiness & Planning",
            hook: "Understand where you actually stand before implementation begins.",
            bullets: [
              "Organizational and project readiness assessments",
              "Current state analysis and future state planning",
              "Governance planning and success criteria",
            ],
          },
          {
            title: "Alignment Workshops",
            hook: "Get leadership to one answer before the project has to assume one.",
            bullets: [
              "Executive vision and guiding principles",
              "Business process and organizational design",
              "Decision frameworks and implementation priorities",
            ],
          },
          {
            title: "Business Process Transformation",
            hook: "Don't recreate old processes in a new system.",
            bullets: [
              "HR, Payroll, Finance and Procurement redesign",
              "Recruiting, Talent and Planning workflows",
              "Industry best-practice benchmarking",
            ],
          },
          {
            title: "Organizational Change Management",
            hook: "Technology doesn't drive change. People do.",
            bullets: [
              "Leadership alignment and sponsor coaching",
              "Communications strategy and employee engagement",
              "Role-based training, job aids and adoption measurement",
            ],
          },
          {
            title: "Data & Organizational Readiness",
            hook: "High-quality data drives high-quality outcomes.",
            bullets: [
              "Data quality assessment and cleanup planning",
              "Organizational structure simplification",
              "Reporting strategy and governance models",
            ],
          },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Our advisory framework",
        heading: "Five moves that de-risk the whole program.",
        band: "blue",
        steps: [
          { num: "01", name: "Discover", body: "Understand your vision, challenges, objectives and current state." },
          { num: "02", name: "Align", body: "Build organizational alignment, governance and implementation strategy." },
          { num: "03", name: "Prepare", body: "Establish organizational, data and change readiness." },
          { num: "04", name: "Deploy", body: "Support the implementation team with strategic guidance and executive advisory." },
          { num: "05", name: "Optimize", body: "Keep improving adoption, operations and maturity after go-live." },
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why organizations choose PTG advisory.",
        columns: 2,
        items: [
          { title: "Strategic before tactical", body: "Business outcomes, not just configuration." },
          { title: "Boutique attention", body: "Senior advisors work directly with your leadership team." },
          { title: "Industry experience", body: "Public sector, higher education, healthcare and nonprofit realities." },
          { title: "Grounded in delivery", body: "Recommendations from people who have implemented what they're advising." },
          { title: "Long-term partnership", body: "We stay engaged well past go-live." },
        ],
      },
      {
        kind: "faq",
        eyebrow: "FAQ",
        heading: "Questions leaders ask us first.",
        items: [
          {
            q: "Do we need advisory if we've already selected Workday?",
            a: "Often yes. Selection answers what you're buying. Advisory answers how your organization will actually run on it — governance, process ownership, data readiness and who decides what during configuration.",
          },
          {
            q: "How long does an advisory engagement take?",
            a: "Most run four to twelve weeks depending on scope. A readiness assessment is shorter; a full roadmap with alignment workshops is longer.",
          },
          {
            q: "Can advisory happen while implementation is underway?",
            a: "Yes. We're frequently brought in mid-project when decisions are stalling or scope is drifting.",
          },
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to build the right foundation?",
        body: "Every successful Workday transformation starts with the right strategy. Let's build yours before the clock starts.",
        ctas: [
          { label: "Schedule an advisory consultation", href: "/contact" },
          { label: "See how to buy", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "workday-implementation": {
    meta: {
      title: "Workday Implementation",
      description:
        "Full-suite HCM, Financials, Student and Payroll deployments, delivered by the same team that scoped them — licensing through go-live and everything after.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Implementation"),
    hero: {
      eyebrow: "Workday Implementation",
      headline: "Unlock the full power of Workday.",
      body:
        "Your Workday journey deserves more than a system implementation. It requires a partner who understands your industry, your people, your operational complexity and your long-term goals. As an authorized reseller and implementation partner, we handle licensing through deployment and everything after.",
      bullets: [
        "One contract for licensing and implementation",
        "The team that scoped it is the team that builds it",
        "Public sector delivery experience, not a generic playbook",
      ],
    },
    sections: [
      {
        kind: "tags",
        eyebrow: "Full-suite coverage",
        heading: "Every module, one accountable team.",
        variant: "chip",
        items: [
          "Human Capital Management",
          "Payroll",
          "Financial Management",
          "Adaptive Planning",
          "Student",
          "Reporting & Analytics",
          "Integrations",
          "Extend",
          "Post-Production Support",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Delivery approaches",
        heading: "Matched to your complexity and your calendar.",
        columns: 2,
        cards: [
          {
            title: "Activate",
            hook: "A focused deployment for organizations with clear requirements and a firm date. Standard configuration, disciplined scope, fastest path to go-live.",
          },
          {
            title: "Propel",
            hook: "A phased approach for complex or multi-entity organizations. Deeper discovery, staged rollout, more room for process redesign along the way.",
          },
        ],
      },
      {
        kind: "features",
        eyebrow: "How we deliver",
        heading: "What you get from a boutique partner.",
        columns: 2,
        items: [
          {
            title: "Built for your industry",
            body: "Our consultants bring first-hand experience in the sectors we serve — government, higher education, healthcare and nonprofit. That lets us anticipate challenges and design around the realities of your workforce, operations and stakeholders.",
          },
          {
            title: "Boutique attention, enterprise capability",
            body: "The agility and personal attention of a boutique firm, with the depth and discipline complex enterprise transformation actually requires. We work directly with your leaders, project teams and subject matter experts.",
          },
          {
            title: "Accelerated, scalable deployment",
            body: "A proven methodology designed to accelerate timelines, minimize risk and support sustainable success — deploying solutions that adapt as your needs evolve rather than locking you in.",
          },
          {
            title: "A partner past post-production",
            body: "From planning through post-production we stay the same team. Prioritizing the human element, moving at speed and enabling innovation at scale is how organizations get impact now and stay ready for what's next.",
          },
        ],
      },
      {
        kind: "outcomes",
        eyebrow: "Outcomes",
        heading: "Results that last beyond go-live.",
        items: [
          "Streamlined HR, payroll, finance and planning operations",
          "Improved workforce and financial visibility",
          "Reduced administrative burden",
          "Better decision support for leadership",
          "Higher adoption and user confidence",
          "A foundation you can keep building on",
        ],
      },
      {
        kind: "faq",
        eyebrow: "FAQ",
        heading: "What buyers want to know.",
        items: [
          {
            q: "How long does a Workday implementation take?",
            a: "It depends on scope and organizational complexity. What we commit to early is a realistic date and the constraints behind it, rather than an optimistic one we renegotiate later.",
          },
          {
            q: "Do you use offshore delivery teams?",
            a: "Our consultants are U.S.-based and the people who scope your project are the ones who deliver it.",
          },
          {
            q: "Can you take over an implementation already in progress?",
            a: "Yes. Rescue and recovery work is common, and we'll tell you honestly what's salvageable.",
          },
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to ignite your Workday transformation?",
        body: "Let's build a Workday solution that's scalable, flexible and designed around your organization's goals.",
        ctas: [
          { label: "Schedule a consultation", href: "/contact" },
          { label: "See how to buy", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "workday-ams-optimization": {
    meta: {
      title: "Workday AMS & Optimization",
      description:
        "Ongoing support, release management and feature adoption — with named consultants who already know your tenant, not a ticket queue.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday AMS & Optimization"),
    hero: {
      eyebrow: "AMS & Optimization",
      headline: "Your Workday journey doesn't end at go-live.",
      body:
        "The greatest value from Workday isn't realized during implementation. It comes from continuous optimization, strategic enhancements, and advisors who understand your organization long after deployment.",
      tagline: "Optimize today. Innovate tomorrow.",
    },
    sections: [
      {
        kind: "pullQuote",
        text: "People, not tickets.",
        body: [
          "Traditional AMS providers operate like a help desk. We operate like an extension of your team. Your consultants know your business processes, your configuration decisions and your roadmap — so there's no repeating your story and no starting from scratch.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Engagement models",
        heading: "Support shaped to how you work.",
        columns: 2,
        cards: [
          { title: "Flexible Monthly Hours", hook: "Predictable monthly consulting hours with direct access to your aligned consultants." },
          { title: "On-Demand Expertise", hook: "Certified functional and technical consultants whenever specialized expertise is needed." },
          { title: "Dedicated Consultant", hook: "Long-term relationships with consultants who become an extension of your internal team." },
          { title: "Strategic Advisory", hook: "Executive guidance, roadmap planning, governance and continuous optimization." },
        ],
      },
      {
        kind: "cards",
        eyebrow: "What we cover",
        heading: "The whole tenant, not just tickets.",
        columns: 3,
        cards: [
          { title: "Tenant Health Assessment", hook: "Configuration review, business process optimization, security assessment, reporting analysis and technical debt review." },
          { title: "Continuous Optimization", hook: "Process improvements, feature adoption, workflow enhancements, dashboards and automation." },
          { title: "Release Management", hook: "Twice a year Workday ships hundreds of capabilities. We evaluate impact, prioritize, coordinate testing and deploy with minimal disruption." },
          { title: "Phase X & Enhancements", hook: "Recruiting, Learning, Talent, Compensation, Adaptive Planning, Extend, Prism, Journeys, Peakon and integrations." },
          { title: "Reporting & Analytics", hook: "Executive dashboards, composite reports, discovery boards, Prism and KPI strategy." },
          { title: "Integrations & Extend", hook: "Monitoring, development, API strategy, middleware support and automation." },
          { title: "Change & Adoption", hook: "Administrator training, new feature enablement, job aids and knowledge transfer." },
        ],
      },
      {
        kind: "steps",
        eyebrow: "Continuous improvement framework",
        heading: "From stable to continually better.",
        band: "blue",
        steps: [
          { num: "01", name: "Stabilize", body: "Resolve production issues, validate configuration, establish operational confidence." },
          { num: "02", name: "Optimize", body: "Improve business processes, reporting, security and tenant performance." },
          { num: "03", name: "Enhance", body: "Deploy new modules, integrations and business functionality." },
          { num: "04", name: "Innovate", body: "Leverage automation, analytics and emerging Workday capability." },
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why organizations choose PTG AMS.",
        columns: 2,
        items: [
          { title: "Aligned consultant model", body: "Work directly with consultants who know your organization — not an anonymous ticket queue." },
          { title: "Flexible engagement", body: "Scale support up or down as your priorities evolve." },
          { title: "Proactive partnership", body: "We don't wait for problems. We identify opportunities before they become issues." },
          { title: "Strategic roadmaps", body: "Every recommendation supports your long-term objectives, not just today's request." },
          { title: "Full Workday expertise", body: "Functional, technical, integrations, reporting, Extend, security, analytics and advisory — all from one team." },
          { title: "Enterprise support, boutique service", body: "Responsive, senior-level consultants who become an extension of your organization." },
        ],
      },
      {
        kind: "pullQuote",
        text: "The best Workday tenants are never finished. They're continuously evolving.",
      },
      {
        kind: "faq",
        eyebrow: "FAQ",
        heading: "How our AMS is different.",
        items: [
          {
            q: "How is this different from Workday support?",
            a: "Workday support handles the platform. We handle your tenant — the configuration decisions, business processes and roadmap specific to your organization.",
          },
          {
            q: "Do we get the same consultants each time?",
            a: "Yes. That's the model. Aligned consultants who already know your environment, not a rotating queue.",
          },
          {
            q: "Can we start AMS if you didn't do our implementation?",
            a: "Frequently. We start with a tenant health assessment so we understand what we've inherited before we recommend anything.",
          },
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to maximize your Workday investment?",
        body: "Let's build an AMS partnership that's flexible, proactive and focused on your future.",
        ctas: [
          { label: "Schedule an AMS consultation", href: "/contact" },
          { label: "See how to buy", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "workday-innovation": {
    meta: {
      title: "Workday Innovation",
      description:
        "Extend, Prism, integrations and AI-enabled workflows for the problems standard Workday functionality doesn't cover.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Innovation"),
    hero: {
      eyebrow: "Workday Innovation",
      headline: "Extend what's possible with Workday.",
      body:
        "When standard functionality isn't enough, we design, build and deploy solutions that extend Workday while keeping the simplicity, security and user experience your organization expects.",
      tagline: "Innovate faster. Solve smarter. Build for what's next.",
    },
    sections: [
      {
        kind: "prose",
        eyebrow: "From ideas to impact",
        heading: "Innovation isn't about technology alone.",
        body: [
          "It's about solving real business challenges. Our product strategists, solution architects, developers and Workday experts work alongside your teams to identify opportunities, prioritize investments and build solutions that improve productivity and create lasting value.",
          "From concept through deployment, we combine modern development practices with deep Workday expertise — so delivery moves quickly and every solution is scalable, secure and built to last.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Capabilities",
        heading: "Built to extend, not to complicate.",
        columns: 2,
        cards: [
          { title: "Built on Workday", hook: "Custom applications that feel like a natural extension of Workday. Employee experience apps, manager self-service enhancements, industry-specific solutions." },
          { title: "Workday Extend", hook: "Workflow automation, case management, approval applications, operational portals and mobile experiences." },
          { title: "Integration & Digital Experience", hook: "Enterprise integrations, API development, middleware strategy, event-driven architecture and data synchronization." },
          { title: "Reporting & Insights", hook: "Executive dashboards, discovery boards, Prism Analytics, KPI frameworks and predictive reporting." },
        ],
      },
      {
        kind: "cards",
        eyebrow: "Innovation areas",
        heading: "Where we build.",
        columns: 3,
        accent: "ember",
        cards: [
          { title: "Built on Workday", hook: "Workday-native applications that extend platform capability without feeling bolted on." },
          { title: "Workday Extend", hook: "Custom workflows, applications and business solutions built on Extend." },
          { title: "Artificial Intelligence", hook: "Automate processes, improve decisions and personalize user experience where AI genuinely helps." },
          { title: "Automation", hook: "Reduce manual work through intelligent business process automation." },
          { title: "Analytics", hook: "Actionable insight through modern reporting and data visualization." },
          { title: "Digital Employee Experience", hook: "Engaging, intuitive experiences that simplify work and improve adoption." },
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why organizations innovate with PTG.",
        columns: 2,
        items: [
          { title: "Real-world Workday expertise", body: "Every solution aligns with platform best practice because the people building it have implemented it." },
          { title: "Faster time to value", body: "Modern development practices and reusable accelerators." },
          { title: "Practical innovation", body: "Achievable, maintainable and measurable, not a science project." },
          { title: "Collaborative", body: "We build alongside your business and IT teams, not in isolation." },
        ],
      },
      { kind: "pullQuote", text: "Innovation isn't about building more. It's about building what matters." },
      {
        kind: "faq",
        eyebrow: "FAQ",
        heading: "On Extend and AI, honestly.",
        items: [
          {
            q: "Is Extend development supportable long-term?",
            a: "Yes, when it's built with governance in mind. We document, hand over and support what we build rather than leaving you with something only we understand.",
          },
          {
            q: "Where does AI actually help in Workday today?",
            a: "Mostly in reducing manual review — routing, classification, anomaly detection in reporting. We'll tell you where it's genuinely useful and where it isn't yet.",
          },
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to build what's next?",
        body: "Let's turn your ideas into secure, scalable Workday solutions.",
        ctas: [
          { label: "Schedule an innovation consultation", href: "/contact" },
          { label: "See how to buy", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "servicenow-implementation": {
    meta: {
      title: "ServiceNow Implementation",
      description:
        "ITSM, service portals and workflow automation for organizations standardizing service delivery — the same senior consultants behind our Workday practice.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("ServiceNow Implementation"),
    hero: {
      eyebrow: "ServiceNow",
      headline: "Modern service management, delivered by people who know your world.",
      body:
        "Service management should make work easier, not add another system to manage. We help public sector and mission-driven organizations implement ServiceNow the way they actually operate — with the same senior consultants and delivery discipline behind our Workday practice.",
    },
    sections: [
      {
        kind: "cards",
        eyebrow: "What we deliver",
        heading: "Service delivery, built around how you operate.",
        columns: 3,
        cards: [
          { title: "IT Service Management", hook: "Incident, request, problem and change management built around your operating model." },
          { title: "Employee & Service Portals", hook: "One intuitive place for employees and constituents to request services and track progress." },
          { title: "Workflow Automation", hook: "Replace manual routing, approvals and handoffs with automation that shortens response times." },
          { title: "Integrations", hook: "Connect ServiceNow to the systems you already depend on, including Workday." },
          { title: "Platform Optimization", hook: "Improve an existing instance through configuration review, process redesign and adoption support." },
        ],
      },
      {
        kind: "features",
        eyebrow: "Why PTG",
        heading: "Why organizations choose PTG for ServiceNow.",
        columns: 2,
        items: [
          { title: "One team, two platforms", body: "If you run both, you get consultants who understand how they connect, not two vendors pointing at each other." },
          { title: "Public sector fluency", body: "Procurement cycles, governance, compliance and the realities of serving the public." },
          { title: "Boutique attention", body: "Senior consultants from planning through adoption." },
          { title: "Built for adoption", body: "Change management is part of delivery, not an add-on." },
        ],
      },
      {
        kind: "cta",
        eyebrow: "Get started",
        heading: "Ready to modernize service delivery?",
        ctas: [
          { label: "Schedule a consultation", href: "/contact" },
          { label: "See how to buy", href: "/procurement-contracts" },
        ],
      },
    ],
  },
};

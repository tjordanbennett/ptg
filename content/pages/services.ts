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
        "Readiness assessments, roadmaps, alignment workshops and change strategy, before you commit to a configuration or a go-live date.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Advisory & Strategy"),
    hero: {
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/cta.png",
        alt: "Five colleagues in business attire in discussion around a conference table, a civic building visible through the window behind them",
        width: 1672,
        height: 941,
      },
      eyebrow: "Workday Advisory & Strategy",
      headline: "Strategy before software. Confidence before configuration.",
      body:
        "Successful Workday deployments begin long before configuration starts. We help organizations align leadership, evaluate readiness, prepare for change and define a clear roadmap, so every decision that follows supports the outcome you actually want.",
      bullets: [
        "Know your risks before they become change orders",
        "Decide the hard questions before configuration locks them in",
        "Arrive at kickoff with leadership already aligned",
      ],
    },
    sections: [
      {
        // Full service lists, verbatim from the client deck (XLS B42-B104,
        // B186-B196). These were previously compressed to three bullets a card,
        // which dropped ~20 named services PTG actually sells.
        kind: "cards",
        eyebrow: "Advisory services",
        heading: "What our advisors do.",
        columns: 3,
        cards: [
          {
            title: "Workday Readiness & Planning",
            hook: "Prepare your organization before implementation begins. We evaluate organizational, operational, technical and data readiness to identify opportunities, mitigate risk and establish a roadmap.",
            bullets: [
              "Organizational Readiness Assessments",
              "Project Readiness Reviews",
              "Current State Analysis",
              "Future State Planning",
              "Executive Strategy Sessions",
              "Success Criteria Definition",
              "Governance Planning",
            ],
          },
          {
            title: "Alignment Workshops",
            hook: "Create organizational alignment before major project decisions are made: executives, business stakeholders and project teams in one room.",
            bullets: [
              "Business Process Alignment",
              "Organizational Design",
              "Decision Frameworks",
              "Data Strategy",
              "Executive Vision",
              "Project Guiding Principles",
              "Implementation Priorities",
            ],
          },
          {
            title: "Business Process Transformation",
            hook: "Don't simply recreate old processes in a new system. We evaluate current workflows, identify inefficiencies and design streamlined, Workday-enabled processes.",
            bullets: [
              "Human Resources",
              "Payroll",
              "Finance",
              "Procurement",
              "Talent",
              "Planning",
            ],
          },
          {
            title: "Data & Organizational Readiness",
            hook: "High-quality data drives high-quality outcomes. Before implementation begins we evaluate your data landscape, governance model and organizational maturity.",
            bullets: [
              "Improve data quality",
              "Simplify organizational structures",
              "Standardize business processes",
              "Prepare for integrations",
              "Define reporting strategy",
              "Establish governance models",
            ],
          },
        ],
      },
      {
        kind: "pullQuote",
        text: "Technology doesn't drive change. People do.",
        body: [
          "The most successful Workday deployments aren't defined by go-live. They're defined by adoption. Our change management practice prepares your workforce to embrace new ways of working through thoughtful planning, communication, leadership engagement and targeted learning.",
        ],
      },
      {
        // XLS B119-B173: the client details 23 change-management services across
        // four groups. The page previously carried three of them.
        kind: "cards",
        eyebrow: "Organizational change management",
        heading: "The work that decides whether people actually use it.",
        columns: 2,
        accent: "ember",
        cards: [
          {
            title: "Leadership & Stakeholder Alignment",
            bullets: [
              "Executive engagement",
              "Stakeholder analysis",
              "Change governance",
              "Sponsor coaching",
              "Organizational risk mitigation",
            ],
          },
          {
            title: "Communications",
            bullets: [
              "Change communication strategy",
              "Communication planning",
              "Leadership messaging",
              "Employee engagement campaigns",
              "Executive presentations",
            ],
          },
          {
            title: "Training & Enablement",
            bullets: [
              "Role-based curriculum",
              "Instructor-led training",
              "Virtual learning",
              "Job aids",
              "Quick reference guides",
              "Learning pathways",
              "Administrator enablement",
            ],
          },
          {
            title: "Adoption & Readiness",
            bullets: [
              "Change readiness assessments",
              "Adoption planning",
              "Organizational impact analysis",
              "User feedback programs",
              "Success measurement",
              "Post-go-live reinforcement",
            ],
          },
        ],
      },
      {
        kind: "tags",
        eyebrow: "Built around your organization",
        heading: "No two organizations share the same challenges.",
        intro:
          "Whether you're a city government, a higher education institution, a healthcare provider or a nonprofit, we adapt our guidance to fit your environment, not the other way around. Our advisory approach is tailored to your:",
        items: [
          "Industry",
          "Organizational maturity",
          "Workforce size",
          "Technology landscape",
          "Strategic priorities",
          "Business objectives",
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
          { title: "Industry experience", body: "Our consultants understand the operational realities of public sector, higher education, healthcare, nonprofit and commercial organizations." },
          { title: "Workday expertise", body: "Our advisory recommendations are grounded in real implementation experience and Workday best practices." },
          { title: "Long-term partnership", body: "We remain engaged beyond deployment to help you optimize, expand and continuously improve your Workday investment." },
        ],
      },
      {
        kind: "faq",
        eyebrow: "FAQ",
        heading: "Questions leaders ask us first.",
        items: [
          {
            q: "Do we need advisory if we've already selected Workday?",
            a: "Often yes. Selection answers which platform you're on. Advisory answers how your organization will actually run on it: governance, process ownership, data readiness and who decides what during configuration.",
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
          { label: "See procurement options", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "workday-implementation": {
    meta: {
      title: "Workday Implementation",
      description:
        "Full-suite HCM, Financials, Student and Payroll deployments, delivered by the same team that scoped them, licensing through go-live and everything after.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday Implementation"),
    hero: {
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/consultant.png",
        alt: "Consultants talking around a table covered in site plans and photographs in a warm studio office",
        width: 1254,
        height: 1254,
      },
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
            body: "Our consultants bring first-hand experience in the sectors we serve: government, higher education, healthcare and nonprofit. That lets us anticipate challenges and design around the realities of your workforce, operations and stakeholders.",
          },
          {
            title: "Boutique attention, enterprise capability",
            body: "The agility and personal attention of a boutique firm, with the depth and discipline complex enterprise transformation actually requires. We work directly with your leaders, project teams and subject matter experts.",
          },
          {
            title: "Accelerated, scalable deployment",
            body: "A proven methodology designed to accelerate timelines, minimize risk and support sustainable success. We deploy solutions that adapt as your needs evolve rather than locking you in.",
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
        heading: "What agencies ask first.",
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
          { label: "See procurement options", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "workday-ams-optimization": {
    meta: {
      title: "Workday AMS & Optimization",
      description:
        "Ongoing support, release management and feature adoption, with named consultants who already know your tenant instead of a ticket queue.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("Workday AMS & Optimization"),
    hero: {
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/evaluating-partner.png",
        alt: "Three colleagues talking beside a window overlooking a brick campus building",
        width: 1254,
        height: 1254,
      },
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
          "Traditional AMS providers operate like a help desk. We operate like an extension of your team. Your consultants know your business processes, your configuration decisions and your roadmap, so there's no repeating your story and no starting from scratch.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Engagement models",
        heading: "Support shaped to how you work.",
        columns: 2,
        intro:
          "Your Workday needs evolve. Your support model should too. Whether you need occasional expert guidance, dedicated monthly support or strategic advisory, our engagement model scales alongside your organization.",
        cards: [
          { title: "Flexible Monthly Hours", hook: "Predictable monthly consulting hours with direct access to your aligned consultants." },
          { title: "On-Demand Expertise", hook: "Leverage certified functional and technical consultants whenever specialized expertise is needed." },
          { title: "Dedicated Consultant Model", hook: "Build long-term relationships with consultants who become an extension of your internal Workday team." },
          { title: "Strategic Advisory", hook: "Executive guidance, roadmap planning, governance and continuous optimization." },
        ],
      },
      {
        // Full service lists, verbatim from the client deck (XLS B81-B248).
        // Every one of these seven blocks was previously trimmed; Release
        // Management had lost its list entirely.
        kind: "cards",
        eyebrow: "Comprehensive AMS services",
        heading: "The whole tenant, not just tickets.",
        columns: 3,
        cards: [
          {
            title: "Tenant Health Assessment & Optimization",
            hook: "Our Workday architects evaluate your configuration, business processes, security, reporting, integrations and overall system health to identify opportunities.",
            bullets: [
              "Configuration Review",
              "Business Process Optimization",
              "Security Assessment",
              "Reporting Analysis",
              "Performance Recommendations",
              "Technical Debt Review",
              "Future Roadmap Planning",
            ],
          },
          {
            title: "Continuous Optimization",
            hook: "Business doesn't stand still. Neither should your Workday tenant. We continuously simplify processes, improve experience and automate manual work.",
            bullets: [
              "Business Process Improvements",
              "Feature Adoption",
              "Workflow Enhancements",
              "Reporting Modernization",
              "Dashboard Development",
              "User Experience Improvements",
              "Automation Opportunities",
            ],
          },
          {
            title: "Release Management",
            hook: "Twice each year Workday delivers hundreds of new capabilities. We evaluate what's changing, prioritize, coordinate testing and deploy with minimal disruption.",
            bullets: [
              "Release Impact Analysis",
              "Feature Reviews",
              "Regression Testing Support",
              "Adoption Planning",
              "Configuration Updates",
              "Communication Planning",
            ],
          },
          {
            title: "Phase X & Enhancement Projects",
            hook: "Whether you're expanding into new modules or modernizing existing processes, our AMS team helps you continuously increase platform value.",
            bullets: [
              "Recruiting",
              "Learning",
              "Talent",
              "Compensation",
              "Adaptive Planning",
              "Extend",
              "Prism Analytics",
              "Journeys",
              "Peakon",
              "Integrations",
            ],
          },
          {
            title: "Reporting & Analytics",
            hook: "Transform data into actionable insight: reporting strategies that give leaders real-time visibility into workforce, financial and operational performance.",
            bullets: [
              "Executive Dashboards",
              "Composite Reports",
              "Discovery Boards",
              "Prism Analytics",
              "Custom Reporting",
              "KPI Strategy",
              "Analytics Modernization",
            ],
          },
          {
            title: "Integrations & Extend",
            hook: "Expand Workday beyond standard functionality. Our technical consultants design, maintain and optimize integrations and Extend applications.",
            bullets: [
              "Integration Monitoring",
              "Integration Development",
              "Extend Applications",
              "API Strategy",
              "Middleware Support",
              "Automation Solutions",
            ],
          },
          {
            title: "Organizational Change & Adoption",
            hook: "Technology only delivers value when people embrace it. As your organization evolves, we keep users engaged, informed and confident.",
            bullets: [
              "Administrator Training",
              "New Feature Enablement",
              "Communication Planning",
              "Job Aids",
              "Knowledge Transfer",
              "User Adoption Programs",
            ],
          },
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
          { title: "Aligned consultant model", body: "Work directly with consultants who know your organization, not an anonymous ticket queue." },
          { title: "Flexible engagement", body: "Scale support up or down as your priorities evolve." },
          { title: "Proactive partnership", body: "We don't wait for problems. We identify opportunities before they become issues." },
          { title: "Strategic roadmaps", body: "Every recommendation supports your long-term objectives, not just today's request." },
          { title: "Full Workday expertise", body: "Functional, technical, integrations, reporting, Extend, security, analytics and advisory, all from one team." },
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
            a: "Workday support handles the platform. We handle your tenant: the configuration decisions, business processes and roadmap specific to your organization.",
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
          { label: "See procurement options", href: "/procurement-contracts" },
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
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/houston-skyline-wide.jpg",
        alt: "The Houston skyline lit at dusk above a freeway streaked with traffic light trails",
        width: 2400,
        height: 1350,
      },
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
          "From concept through deployment, we combine modern development practices with deep Workday expertise, so delivery moves quickly and every solution is scalable, secure and built to last.",
        ],
      },
      {
        kind: "cards",
        eyebrow: "Capabilities",
        heading: "Built to extend, not to complicate.",
        columns: 2,
        cards: [
          {
            title: "Built on Workday Applications",
            hook: "As a Built on Workday development partner, we design intuitive applications that feel like a natural extension of the Workday experience.",
            bullets: [
              "Custom Workday Applications",
              "Employee Experience Apps",
              "Manager Self-Service Enhancements",
              "Executive Applications",
              "Industry-Specific Solutions",
              "Workday Marketplace Readiness",
            ],
          },
          {
            title: "Workday Extend Development",
            hook: "Transform manual processes into seamless digital experiences with secure, scalable applications that automate workflows.",
            bullets: [
              "Workflow Automation",
              "Case Management",
              "Approval Applications",
              "Operational Portals",
              "Mobile Experiences",
              "Business Process Extensions",
            ],
          },
          {
            title: "Integration & Digital Experience",
            hook: "Connect Workday to the systems your organization depends on, improving data flow, eliminating manual effort and creating connected experiences.",
            bullets: [
              "Enterprise Integrations",
              "API Development",
              "Middleware Strategy",
              "Third-Party Platform Integration",
              "Event-Driven Architecture",
              "Data Synchronization",
            ],
          },
          {
            title: "Reporting, Analytics & Insights",
            hook: "Transform information into action with dashboards, operational analytics and interactive reporting that speed up decisions.",
            bullets: [
              "Executive Dashboards",
              "Discovery Boards",
              "Prism Analytics",
              "KPI Frameworks",
              "Predictive Reporting",
              "Data Visualization",
            ],
          },
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
            a: "Mostly in reducing manual review: routing, classification, anomaly detection in reporting. We'll tell you where it's genuinely useful and where it isn't yet.",
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
          { label: "See procurement options", href: "/procurement-contracts" },
        ],
      },
    ],
  },

  "servicenow-implementation": {
    meta: {
      title: "ServiceNow Implementation",
      description:
        "ITSM, service portals and workflow automation for organizations standardizing service delivery, from the same senior consultants behind our Workday practice.",
    },
    currentLabel: "Services",
    breadcrumbs: crumbs("ServiceNow Implementation"),
    hero: {
      // Placeholder photography. Swap the file and rewrite `alt` together
      // when PTG delivers the real shot (design/image-shot-list.md).
      image: {
        src: "/images/careers-houston.jpg",
        alt: "Traffic light trails on a Houston freeway at night below the downtown skyline",
        width: 2400,
        height: 1350,
      },
      eyebrow: "ServiceNow",
      headline: "Modern service management, delivered by people who know your world.",
      body:
        "Service management should make work easier, not add another system to manage. We help public sector and mission-driven organizations implement ServiceNow the way they actually operate, with the same senior consultants and delivery discipline behind our Workday practice.",
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
          { label: "See procurement options", href: "/procurement-contracts" },
        ],
      },
    ],
  },
};

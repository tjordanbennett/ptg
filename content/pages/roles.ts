import type { RolePosting } from "../types";

/**
 * ⚠️ SAMPLE JOB POSTINGS — PLACEHOLDER CONTENT, NOT REAL OPENINGS.
 *
 * Added 2026-08-26 at Jordan's request so PTG can see what a populated Open
 * Roles section looks like. Every word here is invented for that purpose: the
 * titles, locations, responsibilities and requirements are generic and describe
 * no actual vacancy at PTG.
 *
 * SAFEGUARDS — do not remove any of these without replacing them with real,
 * PTG-approved postings:
 *   · every listing row and every detail page renders a visible "Sample" chip
 *   · everything carries `data-unverified`
 *   · each detail page opens with an explicit placeholder callout
 *
 * TO SHIP REAL ROLES: replace this array wholesale.
 * TO REMOVE THE FEATURE: export an empty array — the homepage band and the
 * careers page both fall back to their existing "no postings" empty state with
 * no other change.
 */
export const roles: RolePosting[] = [
  {
    slug: "workday-hcm-consultant",
    title: "Workday HCM Consultant",
    location: "Remote — U.S.",
    type: "Full-time",
    team: "Workday Practice",
    summary:
      "Configure and deploy Workday HCM for public sector and higher education clients, working directly with the people who use the system every day.",
    responsibilities: [
      "Lead configuration workshops with client HR and payroll teams",
      "Design and build Workday HCM business processes end to end",
      "Support testing cycles, data validation and go-live readiness",
      "Stay with the client through stabilization rather than handing off at launch",
    ],
    requirements: [
      "Workday HCM configuration experience across at least one full deployment",
      "Comfort leading client conversations without a project manager in the room",
      "Public sector, higher education or healthcare exposure",
      "U.S. work authorization; occasional travel to client sites",
    ],
  },
  {
    slug: "servicenow-implementation-consultant",
    title: "ServiceNow Implementation Consultant",
    location: "Remote — U.S.",
    type: "Full-time",
    team: "ServiceNow Practice",
    summary:
      "Build ITSM and service portal implementations for agencies and institutions, from process design through deployment and adoption.",
    responsibilities: [
      "Translate service desk processes into ServiceNow workflows",
      "Configure ITSM modules, catalogs and service portals",
      "Partner with client administrators so they can run it after you leave",
      "Contribute to the practice's reusable delivery patterns",
    ],
    requirements: [
      "Hands-on ServiceNow implementation experience",
      "Working knowledge of ITIL service management practice",
      "Ability to explain a technical trade-off to a non-technical stakeholder",
      "U.S. work authorization",
    ],
  },
  {
    slug: "change-management-lead",
    title: "Change Management Lead",
    location: "Houston, TX or Remote — U.S.",
    type: "Full-time",
    team: "Advisory",
    summary:
      "Own the people side of enterprise deployments: readiness, communications, training and adoption for organizations serving the public.",
    responsibilities: [
      "Build change and communication plans alongside the delivery team",
      "Run readiness assessments and stakeholder analysis",
      "Design and deliver end-user training for mixed technical audiences",
      "Measure adoption after go-live and act on what it shows",
    ],
    requirements: [
      "Change management experience on enterprise software deployments",
      "Strong facilitation and writing skills",
      "Experience with union, civil service or shared governance environments",
      "U.S. work authorization",
    ],
  },
];

import type { VehiclePageData } from "@/content/types";

/**
 * Contract-vehicle detail pages. Numbers and terms are from the issuing
 * authorities' records (PTG-SITE-COPY.md). The official-record link on each page
 * is the most important element — currently a `#` placeholder until the real
 * deep link is pulled from content/verification/*.md (never guessed).
 * Only populated fields render.
 */
export const vehicles: Record<string, VehiclePageData> = {
  sourcewell: {
    slug: "sourcewell",
    meta: {
      title: "Sourcewell — 060624-PRT",
      description:
        "PTG's Sourcewell cooperative contract (060624-PRT) covers Workday software and services for government, education and nonprofit members in the U.S. and Canada.",
    },
    eyebrow: "Cooperative contract",
    name: "Sourcewell",
    contracts: [{ number: "060624-PRT", term: "Through 10/25/2028, up to three one-year extensions" }],
    summary: [
      "Sourcewell is a Minnesota-based cooperative serving government, education and nonprofit members across the United States and Canada. PTG's contract covers Workday software and the full range of services around it — so members can purchase licensing and implementation under a single vehicle.",
    ],
    whoCanBuy: [
      "Government agencies, education institutions and nonprofits holding Sourcewell membership",
      "United States and Canada",
      "Membership is free",
    ],
    covered: [
      "Workday software subscription",
      "Workday reseller / licensing",
      "Implementation services",
      "Application management services",
      "HCM, Finance, Payroll and Student",
    ],
    howToOrder: [
      "Confirm your organization's Sourcewell membership (free to join).",
      "Reference contract 060624-PRT on your purchase order.",
      "Contact PTG to scope the engagement and issue a quote.",
      "Purchase directly under the contract's terms — no separate solicitation.",
    ],
    official: { label: "View PTG's contract on Sourcewell", href: "#" },
  },

  "omnia-partners": {
    slug: "omnia-partners",
    meta: {
      title: "OMNIA Partners — 01-140",
      description:
        "PTG's OMNIA Partners contract (01-140), competitively solicited by Region 14 ESC in Texas and available to OMNIA participants nationwide.",
    },
    eyebrow: "Cooperative contract",
    name: "OMNIA Partners",
    contracts: [{ number: "01-140", term: "09/01/2022 – 08/31/2027, five one-year renewal options" }],
    metaRows: [{ label: "Lead agency", value: "Region 14 ESC, Texas" }],
    summary: [
      "OMNIA Partners is one of the largest public sector purchasing cooperatives in the country. PTG's contract was competitively solicited by Region 14 Education Service Center in Texas and is available to OMNIA participants nationwide.",
    ],
    whoCanBuy: [
      "State and local government",
      "Higher education",
      "K-12",
      "Nonprofits",
      "Participation is free",
      "Nationwide",
    ],
    covered: ["Technology solutions, products and related services, including Workday licensing, implementation and ongoing support"],
    howToOrder: [
      "Register as an OMNIA Partners participant if you haven't already.",
      "Reference contract 01-140 on your purchase order.",
      "Contact PTG to scope the work.",
      "Purchase under the contract's established terms.",
    ],
    official: { label: "View PTG's contract on OMNIA Partners", href: "#" },
  },

  "texas-dir": {
    slug: "texas-dir",
    meta: {
      title: "Texas DIR — DIR-CPO-5657 & DIR-CPO-6141",
      description:
        "PTG holds two Texas DIR contracts: DIR-CPO-5657 (COTS software and services) and DIR-CPO-6141 (DBITS consulting) for eligible Texas entities.",
    },
    eyebrow: "State contract · Texas",
    name: "Texas DIR",
    contracts: [
      {
        number: "DIR-CPO-5657",
        term: "12/10/2024 – 12/10/2026",
        scope: "Commercial off-the-shelf software and related services — Workday and ServiceNow licensing, implementation and training.",
        useFor: "Software purchases and the implementation and training that goes with them.",
      },
      {
        number: "DIR-CPO-6141",
        term: "01/27/2026 – 01/27/2028",
        scope: "Deliverables-Based Information Technology Services (DBITS) — application development and maintenance, ERP, business intelligence and analytics, project and program management.",
        useFor: "Deliverables-based consulting engagements.",
      },
    ],
    summary: [
      "The Texas Department of Information Resources negotiates technology contracts on behalf of state agencies, local government, public education and other eligible Texas entities. PTG holds two DIR contracts covering different scopes of work — cite the one that matches your purchase.",
    ],
    whoCanBuy: [
      "Texas state agencies",
      "Texas local government",
      "Texas public education, including higher education",
      "Other DIR-eligible Texas entities",
    ],
    howToOrder: [
      "Identify which contract fits your scope.",
      "Contact PTG for a quote referencing that contract number.",
      "Issue your purchase order citing the contract number.",
      "DIR-eligible entities purchase directly under the contract's terms.",
    ],
    official: { label: "View PTG's contracts on the Texas DIR site", href: "#" },
  },

  gsa: {
    slug: "gsa",
    meta: {
      title: "GSA Multiple Award Schedule (MAS) — GS-35F-035GA",
      description:
        "PTG's GSA MAS contract (GS-35F-035GA) lets federal agencies acquire IT professional services under terms GSA has already negotiated.",
    },
    eyebrow: "Federal contract · GSA",
    name: "GSA Multiple Award Schedule (MAS)",
    contracts: [{ number: "GS-35F-035GA", term: "Current option period through 10/28/2026" }],
    metaRows: [{ label: "SINs", value: "54151S (IT Professional Services) · OLM (Order-Level Materials)" }],
    summary: [
      "The GSA Multiple Award Schedule is the federal government's primary commercial purchasing vehicle. PTG's schedule contract lets federal agencies acquire IT professional services directly, under terms GSA has already negotiated.",
    ],
    whoCanBuy: ["Federal agencies", "Other entities authorized to use GSA sources of supply"],
    covered: ["IT professional services under SIN 54151S", "Order-level materials under SIN OLM"],
    howToOrder: [
      "Reference contract GS-35F-035GA and the applicable SIN.",
      "Contact PTG for a quote.",
      "Issue your order under GSA MAS ordering procedures (FAR 8.4).",
    ],
    official: { label: "View PTG's contract on GSA eLibrary", href: "#" },
  },

  "california-slp": {
    slug: "california-slp",
    meta: {
      title: "California SLP — SLP-24-70-0281B",
      description:
        "PTG's California Software Licensing Program contract (SLP-24-70-0281B) covers Workday software licensing for California public agencies.",
    },
    eyebrow: "State contract · California",
    name: "California SLP",
    contracts: [{ number: "SLP-24-70-0281B", term: "09/21/2024 – 09/20/2027" }],
    summary: [
      "California's Software Licensing Program gives state and local government entities a pre-negotiated route to purchase software. PTG's SLP contract covers Workday software for California public agencies.",
    ],
    whoCanBuy: ["California state agencies", "California local government entities eligible under the SLP"],
    covered: ["Workday software licensing", "Software maintenance and support"],
    scopeNote:
      "Scope is software, not services. California DGS classifies this contract as IT Goods — it does not cover implementation consulting. For implementation services, ask us which additional vehicle applies.",
    howToOrder: [
      "Reference contract SLP-24-70-0281B.",
      "Contact PTG for a quote.",
      "Issue your order under SLP procedures.",
      "For implementation services, ask us which additional vehicle applies.",
    ],
    official: { label: "View this contract on Cal eProcure", href: "#" },
  },

  iphec: {
    slug: "iphec",
    meta: {
      title: "IPHEC — 2509GAL",
      description:
        "PTG's IPHEC availability (solicitation 2509GAL) gives Illinois public universities and community colleges a direct route to Workday software and implementation.",
    },
    eyebrow: "Cooperative contract · Illinois higher ed",
    name: "IPHEC",
    contracts: [{ number: "2509GAL", term: "11/12/2024 – 08/31/2027, five one-year renewals" }],
    summary: [
      "The Illinois Public Higher Education Cooperative extends competitively awarded contracts to Illinois public universities and community colleges. PTG's IPHEC availability comes through the OMNIA Partners award, giving Illinois institutions a direct route to Workday software and implementation services.",
      "This availability is extended from PTG's OMNIA Partners award 01-140 — note the matching 08/31/2027 end date. It is not a solicitation PTG won independently.",
    ],
    whoCanBuy: ["Illinois public universities", "Illinois community colleges", "IPHEC member institutions"],
    covered: ["ERP software and implementation services"],
    howToOrder: [
      "Reference IPHEC solicitation 2509GAL.",
      "Contact PTG for a quote.",
      "Issue your order through your institution's IPHEC procedures.",
    ],
    official: { label: "View this award on the IPHEC site", href: "#" },
  },
};

export const vehicleOrder = ["sourcewell", "omnia-partners", "texas-dir", "gsa", "california-slp", "iphec"];

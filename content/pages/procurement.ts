import type { ProcurementPage } from "../types";

/**
 * How to Buy / procurement content. Vehicle numbers, eligibility, scope and
 * authority all come from Ridge's verified `content/procurement-copy.md` (the
 * design was built from it; numbers cross-checked and match). The finder's
 * per-match "why" microcopy lives in components/ContractFinder.tsx alongside the
 * matching logic it belongs to.
 *
 * `verified: true` — these numbers are from the verified procurement file.
 * Official-record deep links are intentionally left as "#": they must be pulled
 * from content/verification/*.md when the individual vehicle pages are built
 * (Phase 5), never guessed. Logged to FOR-RIDGE.
 */

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export const procurement: ProcurementPage = {
  hero: {
    eyebrow: "Procurement & contracts",
    headline: "You may not need an RFP.",
    body:
      "PTG holds six cooperative and government contract vehicles. If your " +
      "organization participates in one, you can award Workday licensing and " +
      "implementation to us under terms that have already been competitively bid " +
      "— no solicitation, no separate procurement cycle.",
    bullets: [
      "Licensing and implementation on one contract — we're an authorized Workday reseller.",
      "Pricing already established. No bid evaluation to defend to a committee.",
      "Weeks to award instead of months.",
    ],
  },

  finder: {
    eyebrow: "Contract vehicle finder",
    heading: "Which contract applies to you?",
    intro: "Two questions. No form, no email required.",
    disclaimer:
      "Eligibility shown here is a guide, not a determination. Your procurement " +
      "office makes the final call, and we're glad to talk to them directly.",
    orgs: [
      { value: "state", label: "State agency or department" },
      { value: "local", label: "City, county or local government" },
      { value: "hied-public", label: "Public college or university" },
      { value: "hied-private", label: "Private college or university" },
      { value: "k12", label: "K–12 school district" },
      { value: "transit", label: "Transit authority or special district" },
      { value: "health", label: "Hospital or health system" },
      { value: "nonprofit", label: "Nonprofit organization" },
      { value: "federal", label: "Federal agency" },
    ],
    states: US_STATES,
    noMatch: {
      title: "No cooperative vehicle covers that combination.",
      body:
        "That doesn't mean you can't work with us. We respond to direct " +
        "solicitations, and we can often be added to a contract you already hold. " +
        "Tell us your situation and we'll map the fastest route.",
      cta: { label: "Talk to our contracts team", href: "#connect" },
    },
  },

  vehiclesSection: {
    eyebrow: "All six vehicles",
    heading: "Contract numbers, scope and who can order.",
  },

  vehicles: [
    {
      id: "sourcewell",
      name: "Sourcewell",
      kind: "National cooperative",
      numbers: ["060624-PRT"],
      eligible:
        "Government, education and nonprofit organizations nationwide. Membership is free and can usually be completed the same week.",
      covered: [
        "Workday software licensing",
        "Implementation and advisory services",
        "Application management and optimization",
      ],
      authority:
        "Sourcewell publishes the awarded contract and pricing on its supplier record.",
      href: "https://www.sourcewell-mn.gov/cooperative-purchasing/060624-PRT",
      verified: true,
    },
    {
      id: "omnia",
      name: "OMNIA Partners",
      kind: "National cooperative",
      numbers: ["01-140"],
      eligible:
        "Public sector and higher education members nationwide, plus participating nonprofits.",
      covered: [
        "Technology consulting and implementation",
        "Workday licensing through PTG as reseller",
        "Ongoing managed services",
      ],
      authority:
        "OMNIA Partners lists the awarded supplier contract in its public portfolio.",
      href: "https://www.omniapartners.com/suppliers/precision-task-group/public-sector",
      verified: true,
    },
    {
      id: "dir",
      name: "Texas DIR",
      kind: "State contract · Texas",
      numbers: ["DIR-CPO-5657", "DIR-CPO-6141"],
      eligible:
        "Texas state agencies, local government, public school districts, public institutions of higher education, and other DIR-eligible customers.",
      covered: [
        "IT staffing and technology services",
        "Workday implementation and support",
        "Website content accessibility compliance",
      ],
      authority:
        "The Texas Department of Information Resources maintains the contract record and current pricing sheet.",
      href: "https://dir.texas.gov/contracts/vendors/precision-task-group-inc",
      verified: true,
    },
    {
      id: "gsa",
      name: "GSA MAS",
      kind: "Federal schedule",
      numbers: ["GS-35F-035GA"],
      eligible:
        "Federal agencies. State and local entities may order for eligible special item numbers under GSA Cooperative Purchasing.",
      covered: [
        "IT professional services",
        "Systems integration and implementation",
        "Ongoing operations support",
      ],
      authority:
        "Verify the schedule, SINs and pricing on GSA eLibrary and GSA Advantage.",
      href: "https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=GS-35F-035GA&contractorName=PRECISION+TASK+GROUP,+INC.&executeQuery=YES",
      verified: true,
    },
    {
      id: "slp",
      name: "California SLP",
      kind: "State contract · California",
      numbers: ["SLP-24-70-0281B"],
      eligible:
        "California state agencies, and California local government and public education entities through program participation.",
      covered: [
        "Software licensing",
        "Implementation services",
        "Support and maintenance",
      ],
      authority:
        "The California Department of General Services publishes the awarded SLP contract in Cal eProcure.",
      href: "https://caleprocure.ca.gov/PSRelay/ZZ_PO.ZZ_CTR_SUP_CMP.GBL?Page=ZZ_CTR_SUP_PG&Action=U&SETID=STATE&CNTRCT_ID=SLP-24-70-0281B",
      verified: true,
    },
    {
      id: "iphec",
      name: "IPHEC",
      kind: "Cooperative · Illinois higher ed",
      numbers: ["2509GAL"],
      eligible:
        "Illinois public universities and community colleges participating in the Illinois Public Higher Education Cooperative.",
      covered: [
        "Workday licensing and implementation",
        "Student, HCM and Financials deployments",
        "Post-go-live optimization",
      ],
      authority:
        "IPHEC publishes awarded cooperative contracts for member institutions.",
      href: "https://www.iphec.org/erp-software-and-implementation-services-omnia-award",
      verified: true,
    },
  ],

  ordering: {
    eyebrow: "Ordering process",
    heading: "Four steps from first call to signed order.",
    intro:
      "Typical timeline is three to six weeks, most of it on your side for internal approval.",
    steps: [
      { num: "STEP 01", name: "Confirm your vehicle", body: "Use the finder above or send us your membership details. We verify eligibility with the issuing authority before anything else.", bar: "#80CEFF" },
      { num: "STEP 02", name: "Scope the work", body: "A working session with the people who would actually deliver. You get a written scope, phasing and a price built on contract rates.", bar: "#80CEFF" },
      { num: "STEP 03", name: "Issue the order", body: "Your procurement office issues a purchase order or task order referencing the contract number. No solicitation, no evaluation committee.", bar: "#EB4900" },
      { num: "STEP 04", name: "Start", body: "Kickoff within two to three weeks of order, with the named team from the scoping session.", bar: "#EB4900" },
    ],
  },

  faq: {
    eyebrow: "Common questions",
    heading: "What procurement usually asks.",
    intro:
      "If your question isn't here, our contracts team answers directly — no sales handoff.",
    cta: { label: "Ask a contracts question", href: "#connect" },
    items: [
      { q: "Does contracting through a cooperative satisfy our competitive bid requirement?", a: "In most jurisdictions, yes. Cooperative contracts are awarded through a public competitive solicitation run by the lead agency, and statutes in most states let members rely on that process. Your counsel or procurement office confirms it for your jurisdiction — we can supply the solicitation documentation they need." },
      { q: "Can you sell us the Workday licenses too, or just the implementation?", a: "Both. PTG is one of a small number of authorized Workday resellers, so licensing and implementation come through one contract with one accountable party. That removes a coordination problem most firms hand back to you." },
      { q: "We're not a member of any of these cooperatives. Now what?", a: "Sourcewell membership is free and typically takes a few days. If that isn't a fit, we respond to direct solicitations and can often be added to a contract vehicle you already hold. Start with a conversation." },
      { q: "How long does it actually take to get to a signed order?", a: "Three to six weeks is typical, and most of that is your internal approval cycle rather than anything on our side. Scoping usually takes one to two weeks once we understand your environment." },
      { q: "Is there a price premium on a cooperative contract?", a: "No. Cooperative pricing is established in the original award and is generally at or better than what a standalone solicitation would produce, because the lead agency bid it on behalf of thousands of members." },
    ],
  },

  closingCta: {
    eyebrow: "Your mission. Our purpose.",
    heading: "Send us your vehicle. We'll send back a scope.",
    body:
      "Tell us which contract you hold and what you're trying to accomplish. " +
      "You'll hear from a person who has done this before, not a form autoresponder.",
    ctas: [
      { label: "Connect with us", href: "#connect" },
      { label: "Back to the finder", href: "#finder" },
    ],
  },
};

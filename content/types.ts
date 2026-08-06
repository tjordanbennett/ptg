/**
 * Content types. The presentation matches public/_design/*.html (the approved
 * spec); the DATA here comes from Ridge's content files (facts) and the design
 * (headlines/framing). Components read everything through lib/content.ts.
 */

export interface NavLink {
  label: string;
  href: string;
}
export interface NavGroup {
  title: string;
  items: NavLink[];
}
export interface NavItem {
  label: string;
  /** true marks the current section/page (aria-current="page"). */
  current?: boolean;
  groups: NavGroup[];
}

export interface SocialLink {
  label: string;
  abbr: string;
  href: string;
}
export interface FooterColumn {
  title: string;
  items: NavLink[];
}

export interface SiteSettings {
  name: string;
  legalName: string;
  tagline: string;
  nav: NavItem[];
  headerCta: NavLink;
  footer: {
    address: { lines: string[]; phone: string; email: string };
    columns: FooterColumn[];
    social: SocialLink[];
    legalLinks: NavLink[];
    /** bottom copyright + credential line */
    copyright: string;
  };
}

export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Cta {
  label: string;
  href: string;
}

/* ── Homepage ── */

export interface HomePage {
  hero: {
    eyebrow: string;
    headline: string; // may contain \n for the <br>
    body: string;
    ctas: Cta[];
    image: ImageRef;
  };
  twoPaths: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: Cta;
    /** Optional photographic background — card renders as an image card. */
    image?: ImageRef;
  }[];
  stats: {
    eyebrow: string;
    heading: string;
    /** Unconfirmed positioning claim — rendered with data-unverified. */
    credentialLine: string;
    credentialChips: string[];
    items: { figure: string; label: string; tint: "white" | "leaf" | "clear" }[];
  };
  customers: {
    heading: string;
    /** logo is an optional white-treatable SVG path; falls back to the name as text */
    names: { name: string; logo?: string }[];
    link: Cta;
  };
  contracts: {
    eyebrow: string;
    heading: string;
    body: string[];
    cta: Cta;
    vehicles: { name: string; number: string }[];
  };
  industries: {
    eyebrow: string;
    heading: string;
    intro: string;
    cards: {
      name: string;
      hook: string;
      outcomes: string[];
      cta: string;
      href: string;
      image: ImageRef;
    }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    chips: string[];
    items: { num: string; name: string; summary: string; href: string }[];
  };
  journey: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { num: string; name: string; body: string; bar: string }[];
  };
  testimonial: {
    quote: string;
    attribution: string;
    placeholder?: boolean;
  };
  careers: {
    eyebrow: string;
    heading: string;
    body: string;
    values: string[];
    openRoles: {
      heading: string;
      sub: string;
      emptyTitle: string;
      emptyBody: string;
      cta: Cta;
    };
  };
  closingCta: {
    eyebrow: string;
    heading: string;
    body: string;
    ctas: Cta[];
  };
}

/* ── Standard interior pages (services, industries, partners, about…) ──
   A page is a dark breadcrumb hero + an ordered list of section blocks. One
   renderer (components/StandardPage.tsx) maps each block to the matching design
   pattern, so a new page is authored as data, not layout. */

export interface Crumb {
  label: string;
  href?: string;
}

export interface PageHeroData {
  eyebrow: string;
  headline: string;
  body?: string;
  bullets?: string[];
  tagline?: string;
}

export type SectionBg = "white" | "offwhite";

export type Section =
  | { kind: "prose"; eyebrow?: string; heading?: string; body: string[]; bg?: SectionBg; maxWidth?: number }
  | {
      kind: "cards";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      bg?: SectionBg;
      columns?: 2 | 3;
      accent?: "blue" | "ember";
      cards: { title: string; hook?: string; bullets?: string[] }[];
    }
  | {
      kind: "features";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      bg?: SectionBg;
      columns?: 2 | 3;
      items: { title: string; body: string }[];
    }
  | { kind: "steps"; eyebrow?: string; heading?: string; intro?: string; band?: "blue" | "navy"; steps: { num: string; name: string; body: string }[] }
  | { kind: "tags"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; items: string[]; variant?: "diamond" | "chip"; columns?: 2 | 3 | 4 }
  | { kind: "outcomes"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; items: string[] }
  | { kind: "pullQuote"; text: string; bg?: SectionBg }
  | { kind: "testimonial"; quote: string; attribution: string; unverified?: boolean }
  | { kind: "stats"; eyebrow?: string; items: { value: string; label: string }[] }
  | { kind: "customers"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; groups: { title: string; names: string[] }[]; unverified?: boolean }
  | { kind: "faq"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; cta?: Cta; items: { q: string; a: string }[] }
  | { kind: "people"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; note?: string; people: { name: string; title: string; unverifiedRole?: boolean }[] }
  | { kind: "emptyState"; eyebrow?: string; heading?: string; sub?: string; title: string; body: string; cta?: Cta; bg?: SectionBg }
  | { kind: "applicationForm"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; id?: string }
  | { kind: "cta"; eyebrow?: string; heading: string; body?: string; ctas: Cta[] };

export interface StandardPage {
  meta: { title: string; description: string };
  currentLabel?: string;
  hero: PageHeroData;
  breadcrumbs: Crumb[];
  sections: Section[];
}

/* ── Vehicle detail pages (one per contract vehicle) ── */

export interface VehicleContract {
  number: string;
  term?: string;
  /** For multi-contract vehicles (Texas DIR): the scope of this specific contract. */
  scope?: string;
  useFor?: string;
}

export interface VehiclePageData {
  slug: string;
  meta: { title: string; description: string };
  /** e.g. "Cooperative contract" · "Federal contract · GSA" */
  eyebrow: string;
  name: string;
  contracts: VehicleContract[];
  metaRows?: { label: string; value: string }[];
  summary: string[];
  whoCanBuy: string[];
  covered?: string[];
  /** ⚠️ scope caveat rendered as a callout (e.g. California SLP = software, not services). */
  scopeNote?: string;
  howToOrder: string[];
  /** The single most important element — the issuing authority's official record.
   *  href is a `#` placeholder until pulled from content/verification/*.md. */
  official: { label: string; href: string };
}

/* ── Procurement / How to Buy ── */

export interface Vehicle {
  id: string;
  name: string;
  kind: string;
  numbers: string[];
  eligible: string;
  covered: string[];
  authority: string;
  href: string;
  /** false until confirmed against the issuing authority. */
  verified: boolean;
}

export interface ProcurementPage {
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
  };
  finder: {
    eyebrow: string;
    heading: string;
    intro: string;
    disclaimer: string;
    orgs: { value: string; label: string }[];
    states: string[];
    /** shown when no vehicle matches */
    noMatch: { title: string; body: string; cta: Cta };
  };
  vehiclesSection: {
    eyebrow: string;
    heading: string;
  };
  vehicles: Vehicle[];
  ordering: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: { num: string; name: string; body: string; bar: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: Cta;
    items: { q: string; a: string }[];
  };
  closingCta: {
    eyebrow: string;
    heading: string;
    body: string;
    ctas: Cta[];
  };
}

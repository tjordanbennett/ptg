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
  /** Dismissible strip above the header. Omit entirely to ship no banner. */
  announcement?: Announcement;
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

/**
 * Announcement banner content.
 *
 * `id` is the dismissal key: a visitor who closes the banner never sees THAT id
 * again, so changing the copy without changing the id would silently hide the
 * new message from everyone who dismissed the old one. Bump the id whenever the
 * message changes.
 *
 * `linkHref` is optional on purpose. With no href the `linkText` renders as
 * emphasised text rather than an anchor — a link that goes nowhere is worse
 * than no link, especially for keyboard and screen-reader users. Set the href
 * once the destination page exists and it becomes a real link, no other change.
 */
export interface Announcement {
  id: string;
  /** Text before the highlighted phrase. */
  before: string;
  /** The highlighted phrase — becomes a link once `linkHref` is set. */
  linkText: string;
  linkHref?: string;
  /** Text after the highlighted phrase. */
  after: string;
  /** Renders with data-unverified until PTG confirms the claim. */
  unverified?: boolean;
}

/**
 * A job posting. Everything currently in `content/pages/roles.ts` is SAMPLE
 * content for design review, never a real vacancy — see the header there.
 * Anything rendered from this type must carry a visible "Sample" marker until
 * PTG supplies approved postings.
 */
export interface RolePosting {
  slug: string;
  title: string;
  location: string;
  type: string;
  team: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
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
    items: { name: string; summary: string; href: string }[];
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
    openRoles: {
      heading: string;
      sub: string;
      /** Shown when there are no postings. */
      emptyTitle: string;
      emptyBody: string;
      cta: Cta;
      /** Link shown under a populated list. */
      allLabel?: string;
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
  /** Opt into a photographic hero instead of the default star field. */
  image?: ImageRef;
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
      /** `href` turns the card title into a link into the relevant detail page. */
      cards: { title: string; hook?: string; bullets?: string[]; href?: string; linkLabel?: string }[];
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
  | { kind: "tags"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; items: string[]; variant?: "diamond" | "chip" | "values"; columns?: 2 | 3 | 4 }
  | { kind: "outcomes"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; items: string[] }
  /** `body` keeps the quote and the paragraph that elaborates it in ONE section.
   *  Two adjacent sections double their vertical padding and strand the prose. */
  | { kind: "pullQuote"; text: string; body?: string[]; bg?: SectionBg }
  | { kind: "testimonial"; quote: string; attribution: string; unverified?: boolean }
  | { kind: "stats"; eyebrow?: string; items: { value: string; label: string }[] }
  | { kind: "customers"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; groups: { title: string; names: string[] }[]; unverified?: boolean }
  | { kind: "faq"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; cta?: Cta; items: { q: string; a: string }[] }
  | { kind: "people"; eyebrow?: string; heading?: string; intro?: string; bg?: SectionBg; note?: string; people: { name: string; title: string; unverifiedRole?: boolean }[] }
  | { kind: "emptyState"; eyebrow?: string; heading?: string; sub?: string; title: string; body: string; cta?: Cta; bg?: SectionBg; roles?: RolePosting[] }
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

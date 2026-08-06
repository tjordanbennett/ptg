/**
 * The single content read path. Components import from here — never from
 * `content/*` directly. Swapping in a CMS later is a change to THIS FILE ONLY.
 */
import { site } from "@/content/site";
import { home } from "@/content/pages/home";
import { procurement } from "@/content/pages/procurement";
import { services } from "@/content/pages/services";
import { industries } from "@/content/pages/industries";
import { partners } from "@/content/pages/partners";
import { vehicles, vehicleOrder } from "@/content/pages/vehicles";
import { about, leadership, careers, customers } from "@/content/pages/about";
import { resources, accessibility, privacy } from "@/content/pages/misc";
import type {
  HomePage,
  ProcurementPage,
  SiteSettings,
  StandardPage,
  VehiclePageData,
} from "@/content/types";

export async function getSiteSettings(): Promise<SiteSettings> {
  return site;
}

export async function getHomePage(): Promise<HomePage> {
  return home;
}

export async function getProcurementPage(): Promise<ProcurementPage> {
  return procurement;
}

/* ── Standard interior pages ── */

export function getServiceSlugs(): string[] {
  return Object.keys(services);
}
export async function getServicePage(slug: string): Promise<StandardPage | null> {
  return services[slug] ?? null;
}

export function getIndustrySlugs(): string[] {
  return Object.keys(industries);
}
export async function getIndustryPage(slug: string): Promise<StandardPage | null> {
  return industries[slug] ?? null;
}

export function getPartnerSlugs(): string[] {
  return Object.keys(partners);
}
export async function getPartnerPage(slug: string): Promise<StandardPage | null> {
  return partners[slug] ?? null;
}

export function getVehicleSlugs(): string[] {
  return vehicleOrder;
}
export async function getVehiclePage(slug: string): Promise<VehiclePageData | null> {
  return vehicles[slug] ?? null;
}
export function getOtherVehicles(slug: string): { slug: string; name: string; eyebrow: string }[] {
  return vehicleOrder
    .filter((s) => s !== slug)
    .map((s) => ({ slug: s, name: vehicles[s].name, eyebrow: vehicles[s].eyebrow }));
}

export async function getAboutPage(): Promise<StandardPage> {
  return about;
}
export async function getLeadershipPage(): Promise<StandardPage> {
  return leadership;
}
export async function getCareersPage(): Promise<StandardPage> {
  return careers;
}
export async function getCustomersPage(): Promise<StandardPage> {
  return customers;
}

export function getResourceSlugs(): string[] {
  return Object.keys(resources);
}
export async function getResourcePage(slug: string): Promise<StandardPage | null> {
  return resources[slug] ?? null;
}
export async function getAccessibilityPage(): Promise<StandardPage> {
  return accessibility;
}
export async function getPrivacyPage(): Promise<StandardPage> {
  return privacy;
}

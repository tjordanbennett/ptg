import type { Metadata } from "next";
import { getAccessibilityPage, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAccessibilityPage();
  return { title: page.meta.title, description: page.meta.description };
}

export default async function AccessibilityPage() {
  const [page, site] = await Promise.all([getAccessibilityPage(), getSiteSettings()]);
  return <StandardPageView page={page} site={site} />;
}

import type { Metadata } from "next";
import { getPrivacyPage, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPrivacyPage();
  return { title: page.meta.title, description: page.meta.description };
}

export default async function PrivacyPage() {
  const [page, site] = await Promise.all([getPrivacyPage(), getSiteSettings()]);
  return <StandardPageView page={page} site={site} />;
}

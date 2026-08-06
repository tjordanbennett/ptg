import type { Metadata } from "next";
import { getLeadershipPage, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLeadershipPage();
  return { title: page.meta.title, description: page.meta.description };
}

export default async function LeadershipPage() {
  const [page, site] = await Promise.all([getLeadershipPage(), getSiteSettings()]);
  return <StandardPageView page={page} site={site} />;
}

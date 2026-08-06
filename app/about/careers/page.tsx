import type { Metadata } from "next";
import { getCareersPage, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCareersPage();
  return { title: page.meta.title, description: page.meta.description };
}

export default async function CareersPage() {
  const [page, site] = await Promise.all([getCareersPage(), getSiteSettings()]);
  return <StandardPageView page={page} site={site} />;
}

import type { Metadata } from "next";
import { getAboutPage, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAboutPage();
  return { title: page.meta.title, description: page.meta.description };
}

export default async function AboutPage() {
  const [page, site] = await Promise.all([getAboutPage(), getSiteSettings()]);
  return <StandardPageView page={page} site={site} />;
}

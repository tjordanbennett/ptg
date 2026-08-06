import type { Metadata } from "next";
import { getCustomersPage, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCustomersPage();
  return { title: page.meta.title, description: page.meta.description };
}

export default async function CustomersPage() {
  const [page, site] = await Promise.all([getCustomersPage(), getSiteSettings()]);
  return <StandardPageView page={page} site={site} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryPage, getIndustrySlugs, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getIndustryPage(params.slug);
  if (!page) return {};
  return { title: page.meta.title, description: page.meta.description };
}

export default async function IndustryPage({ params }: { params: { slug: string } }) {
  const page = await getIndustryPage(params.slug);
  if (!page) notFound();
  const site = await getSiteSettings();
  return <StandardPageView page={page} site={site} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServicePage, getServiceSlugs, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getServicePage(params.slug);
  if (!page) return {};
  return { title: page.meta.title, description: page.meta.description };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const page = await getServicePage(params.slug);
  if (!page) notFound();
  const site = await getSiteSettings();
  return <StandardPageView page={page} site={site} />;
}

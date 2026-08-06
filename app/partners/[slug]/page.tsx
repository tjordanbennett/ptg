import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPartnerPage, getPartnerSlugs, getSiteSettings } from "@/lib/content";
import { StandardPageView } from "@/components/StandardPage";

export function generateStaticParams() {
  return getPartnerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPartnerPage(params.slug);
  if (!page) return {};
  return { title: page.meta.title, description: page.meta.description };
}

export default async function PartnerPage({ params }: { params: { slug: string } }) {
  const page = await getPartnerPage(params.slug);
  if (!page) notFound();
  const site = await getSiteSettings();
  return <StandardPageView page={page} site={site} />;
}

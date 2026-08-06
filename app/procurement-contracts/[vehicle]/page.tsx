import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOtherVehicles, getSiteSettings, getVehiclePage, getVehicleSlugs } from "@/lib/content";
import { VehiclePage } from "@/components/VehiclePage";

export function generateStaticParams() {
  return getVehicleSlugs().map((vehicle) => ({ vehicle }));
}

export async function generateMetadata({ params }: { params: { vehicle: string } }): Promise<Metadata> {
  const v = await getVehiclePage(params.vehicle);
  if (!v) return {};
  return { title: v.meta.title, description: v.meta.description };
}

export default async function VehicleRoute({ params }: { params: { vehicle: string } }) {
  const v = await getVehiclePage(params.vehicle);
  if (!v) notFound();
  const site = await getSiteSettings();
  const others = getOtherVehicles(params.vehicle);
  return <VehiclePage vehicle={v} others={others} site={site} />;
}

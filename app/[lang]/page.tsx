import LandingClient, { type Lang } from "@/components/LandingClient";

const SUPPORTED = ["pt", "fr", "nl"] as const;

export const dynamicParams = false;

export default function Page({ params }: any) {
  const lang = (params?.lang ?? "pt") as string;
  const l = (SUPPORTED as readonly string[]).includes(lang) ? (lang as Lang) : "pt";
  return <LandingClient lang={l} />;
}

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

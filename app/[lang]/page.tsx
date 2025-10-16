import LandingClient, { type Lang } from "@/components/LandingClient";

const SUPPORTED = ["pt", "fr", "nl"] as const;

export default function Page({ params }: any) {
  const lang = (params?.lang ?? "pt") as string;
  const l = (SUPPORTED as readonly string[]).includes(lang as any) ? (lang as Lang) : "pt";
  return <LandingClient lang={l} />;
}

export function generateStaticParams() {
  return (SUPPORTED as readonly string[]).map((lang) => ({ lang }));
}

"use client";
import Link from "next/link";

const SUPPORTED = ["pt","fr","nl"] as const;

export default function LanguageSwitcher({ current }: { current: "pt"|"fr"|"nl" }) {
  return (
    <nav aria-label="Language switcher" className="flex gap-2">
      {SUPPORTED.map(l => (
        <Link
          key={l}
          href={`/${l}`}
          className={`px-2.5 py-1 rounded-full text-sm border ${l===current ? "border-slate-900" : "border-slate-300"} bg-white text-slate-700`}
          prefetch={true}
        >
          {l==="pt"?"Português":l==="fr"?"Français":"Nederlands"}
        </Link>
      ))}
    </nav>
  );
}

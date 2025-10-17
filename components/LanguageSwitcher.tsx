"use client";

export default function LanguageSwitcher({ current }: { current: "pt"|"fr"|"nl" }) {
  const langs = ["pt","fr","nl"] as const;
  const label = (l: string) => l==="pt" ? "Português" : l==="fr" ? "Français" : "Nederlands";

  return (
    <nav aria-label="Language switcher" className="flex gap-2">
      {langs.map(l => (
        <a
          key={l}
          href={`/${l}`}
          className={`inline-block px-3 py-1.5 rounded-full text-sm border no-underline ${
            l===current ? "border-slate-900" : "border-slate-300"
          } bg-white text-slate-700 hover:bg-slate-50 cursor-pointer select-none`}
        >
          {label(l)}
        </a>
      ))}
    </nav>
  );
}

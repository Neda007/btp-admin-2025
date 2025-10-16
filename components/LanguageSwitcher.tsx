"use client";

export default function LanguageSwitcher({ current }: { current: "pt"|"fr"|"nl" }) {
  const langs = ["pt","fr","nl"] as const;
  return (
    <nav aria-label="Language switcher" className="flex gap-2">
      {langs.map(l => (
        <a
          key={l}
          href={`/${l}`}
          className={`inline-block px-2.5 py-1 rounded-full text-sm border no-underline ${
            l===current ? "border-slate-900" : "border-slate-300"
          } bg-white text-slate-700 hover:bg-slate-50 cursor-pointer select-none`}
        >
          {l==="pt"?"Português":l==="fr"?"Français":"Nederlands"}
        </a>
      ))}
    </nav>
  );
}

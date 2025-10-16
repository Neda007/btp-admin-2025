"use client";
import React from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
export type Lang = "pt" | "fr" | "nl";

export default function LandingClient({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="p-4 border-b flex items-center justify-between relative z-50">
        <h1 className="font-bold">AdminBTP Belgium · ({lang})</h1>
        <LanguageSwitcher current={lang} />
      </header>

      <section id="servicos" className="p-4">Serviços ({lang})</section>
      <section id="planos" className="p-4 border-t">Planos</section>
      <section id="processo" className="p-4 border-t">Processo</section>
      <section id="provas" className="p-4 border-t">Confiança</section>
      <section id="contacto" className="p-4 border-t">Contacto</section>
    </main>
  );
}

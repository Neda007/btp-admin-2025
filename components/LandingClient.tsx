"use client";
import React from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
export type Lang = "pt" | "fr" | "nl";
export default function LandingClient({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="p-4 border-b flex items-center justify-between">
        <h1 className="font-bold">AdminBTP Belgium · v4 ({lang})</h1>
        <LanguageSwitcher current={lang} />
      </header>
      <section id="servicos" className="p-4"><p>Serviços ({lang})</p></section>
      <section id="planos" className="p-4 border-t"><p>Planos</p></section>
      <section id="processo" className="p-4 border-t"><p>Processo</p></section>
      <section id="provas" className="p-4 border-t"><p>Confiança</p></section>
      <section id="contacto" className="p-4 border-t"><p>Contacto</p></section>
    </main>
  );
}
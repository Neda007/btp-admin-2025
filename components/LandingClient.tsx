"use client";
import React from "react";
export type Lang = "pt" | "fr" | "nl";

export default function LandingClient({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="p-4 border-b flex items-center justify-between">
        <h1 className="font-bold">AdminBTP Belgium · ({lang})</h1>
        <nav className="flex gap-2 text-sm">
          <a href="/pt" className="px-2 py-1 border rounded-full">Português</a>
          <a href="/fr" className="px-2 py-1 border rounded-full">Français</a>
          <a href="/nl" className="px-2 py-1 border rounded-full">Nederlands</a>
        </nav>
      </header>
      <section id="servicos" className="p-4">Serviços ({lang})</section>
      <section id="planos" className="p-4 border-t">Planos</section>
      <section id="processo" className="p-4 border-t">Processo</section>
      <section id="provas" className="p-4 border-t">Confiança</section>
      <section id="contacto" className="p-4 border-t">Contacto</section>
    </main>
  );
}
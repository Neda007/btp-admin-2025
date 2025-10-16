"use client";
import React from "react";

export type Lang = "pt" | "fr" | "nl";

export default function LandingClient({ lang }: { lang: Lang }) {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="p-4 border-b">
        <h1 className="font-bold">AdminBTP Belgium · v4 ({lang})</h1>
      </header>

      <section id="servicos" className="p-4">
        <p>Landing en cours… (section Serviços)</p>
      </section>
      <section id="planos" className="p-4 border-t">
        <p>Section Planos</p>
      </section>
      <section id="processo" className="p-4 border-t">
        <p>Section Processo</p>
      </section>
      <section id="provas" className="p-4 border-t">
        <p>Section Confiança</p>
      </section>
      <section id="contacto" className="p-4 border-t">
        <p>Section Contacto</p>
      </section>
    </main>
  );
}
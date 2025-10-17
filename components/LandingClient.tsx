"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";

export type Lang = "pt" | "fr" | "nl";

const t = {
  pt: {
    brand: "AdminBTP Belgium",
    badge: "Especialistas administrativos para construção na Bélgica",
    heroA: "Simplificamos a sua ",
    heroB: "administração",
    heroC: " para que a sua obra ",
    heroD: "ande para a frente",
    heroDesc:
      "Delegue as tarefas burocráticas a uma equipa que domina ONSS, LIMOSA, CheckIn@Work, SPF Economie e exigências regionais (Bruxelas, Valónia, Flandres).",
    ctaStart: "Começar agora",
    ctaServices: "Ver serviços",
    ctaAudit: "Pedir Auditoria",
    nav: { servicos: "Serviços", planos: "Planos", processo: "Processo", provas: "Confiança", contacto: "Contacto" },
    servicosTitle: "O que tratamos por si",
    servicos: [
      { title: "Licenças & Autorizações", desc: "Comunais, regionais, ambiente, certificações técnicas." },
      { title: "Seguros & Conformidade", desc: "Decenal, RC prof., acidentes de trabalho, exigências contratuais." },
      { title: "Pessoal & Obrigações", desc: "ONSS, LIMOSA, DmfA, CheckIn@Work, subempreiteiros, SST." },
      { title: "Faturação de Obras", desc: "Medições, situações, retenções, relatórios de custos e margens." },
      { title: "E-mails & Dossiês", desc: "Caixas partilhadas, arquivos técnicos, prazos e relances." },
      { title: "Materiais & Subcontratos", desc: "Pedidos, comparativos, receções, garantias e rastreabilidade." },
    ],
    plansTitle: "Planos mensais",
    plans: [
      {
        name: "Starter PME",
        price: "€249/mês",
        bullets: ["Até 1 obra ativa", "CheckIn@Work mensal", "E-mails até 200/mês", "Relatórios PDF básicos"],
      },
      {
        name: "Pro Obra",
        price: "€449/mês",
        bullets: ["Até 3 obras ativas", "ONSS/LIMOSA rotinas", "CheckIn@Work semanal", "E-mails ilimitado justo", "Situações de obra"],
        highlight: true,
      },
      {
        name: "Sob Medida",
        price: "à medida",
        bullets: [
          "Obras ilimitadas",
          "Fluxos dedicados (EPI, subempreiteiros)",
          "Orçamentos (fixo ou % do valor)",
          "Auditoria administrativa incluída",
        ],
      },
    ],
    processTitle: "Como trabalhamos",
    process: [
      { k: "1", title: "Diagnóstico", desc: "Reunião + auditoria de documentos e obrigações." },
      { k: "2", title: "Plano de Ação", desc: "Backlog priorizado, responsabilidades e prazos." },
      { k: "3", title: "Execução & Reporting", desc: "Rotinas, SLAs e relatórios mensais claros." },
    ],
    trustTitle: "Porquê confiar",
    trust: [
      "Experiência real com PME de construção na Bélgica",
      "Domínio de ONSS, LIMOSA, CheckIn@Work, exigências regionais",
      "Comunicação simples, prazos cumpridos, foco em resultado",
    ],
    contactTitle: "Fale connosco",
    contactDesc: "Peça uma auditoria rápida (sem compromisso) e receba um plano de ação.",
    contact: { name: "Nome", email: "E-mail", message: "Mensagem", send: "Enviar" },
    footer: "Todos os direitos reservados.",
  },
  fr: {
    brand: "AdminBTP Belgium",
    badge: "Experts administratifs BTP en Belgique",
    heroA: "On simplifie votre ",
    heroB: "administratif",
    heroC: " pour que vos chantiers ",
    heroD: "avancent",
    heroDesc:
      "Déléguez à une équipe qui maîtrise ONSS, LIMOSA, CheckIn@Work, SPF Économie et règles régionales (Bruxelles, Wallonie, Flandre).",
    ctaStart: "Commencer",
    ctaServices: "Voir les services",
    ctaAudit: "Demander un audit",
    nav: { servicos: "Services", planos: "Forfaits", processo: "Méthode", provas: "Confiance", contacto: "Contact" },
    servicosTitle: "Ce que l’on prend en charge",
    servicos: [
      { title: "Permis & Autorisations", desc: "Communes/Régions, environnement, certifications techniques." },
      { title: "Assurances & Conformité", desc: "Décennale, RC pro, accidents du travail, clauses contractuelles." },
      { title: "Personnel & Obligations", desc: "ONSS, LIMOSA, DmfA, CheckIn@Work, sous-traitants, HSE." },
      { title: "Facturation de Chantier", desc: "Métrés, situations, retenues, marges et coûts." },
      { title: "E-mails & Dossiers", desc: "Boîtes partagées, archivage technique, relances et délais." },
      { title: "Matériaux & Sous-traitance", desc: "Demandes, comparatifs, réceptions, garanties et traçabilité." },
    ],
    plansTitle: "Forfaits mensuels",
    plans: [
      { name: "Starter PME", price: "249 €/mois", bullets: ["1 chantier actif", "CheckIn@Work mensuel", "E-mails ≤ 200/mois", "Rapports PDF"] },
      { name: "Pro Chantier", price: "449 €/mois", bullets: ["3 chantiers actifs", "ONSS/LIMOSA routinés", "CheckIn@Work hebdo", "E-mails illimités raisonnables", "Situations de chantier"], highlight: true },
      { name: "Sur Mesure", price: "sur devis", bullets: ["Chantiers illimités", "Flux dédiés (EPI, sous-traitants)", "Devis (forfait ou % du devis)", "Audit inclus"] },
    ],
    processTitle: "Notre méthode",
    process: [
      { k: "1", title: "Diagnostic", desc: "Réunion + audit documentaire et obligations." },
      { k: "2", title: "Plan d’action", desc: "Backlog priorisé, rôles et jalons." },
      { k: "3", title: "Exécution & Reporting", desc: "Routines, SLAs et rapports mensuels clairs." },
    ],
    trustTitle: "Pourquoi nous faire confiance",
    trust: [
      "Expérience PME du BTP en Belgique",
      "Maîtrise ONSS, LIMOSA, CheckIn@Work, règles régionales",
      "Communication simple, délais tenus, résultats",
    ],
    contactTitle: "Nous contacter",
    contactDesc: "Demandez un audit rapide (sans engagement) et recevez un plan d’action.",
    contact: { name: "Nom", email: "E-mail", message: "Message", send: "Envoyer" },
    footer: "Tous droits réservés.",
  },
  nl: {
    brand: "AdminBTP Belgium",
    badge: "Administratieve experts voor de bouw in België",
    heroA: "We vereenvoudigen je ",
    heroB: "administratie",
    heroC: " zodat je werven ",
    heroD: "vooruitgaan",
    heroDesc:
      "Delegeer naar een team dat ONSS, LIMOSA, CheckIn@Work, FOD Economie en regionale vereisten beheerst (Brussel, Wallonië, Vlaanderen).",
    ctaStart: "Start nu",
    ctaServices: "Diensten",
    ctaAudit: "Audit aanvragen",
    nav: { servicos: "Diensten", planos: "Pakketten", processo: "Aanpak", provas: "Vertrouwen", contacto: "Contact" },
    servicosTitle: "Wat wij voor je regelen",
    servicos: [
      { title: "Vergunningen & Toelatingen", desc: "Gemeenten/Regio’s, milieu, technische certificaten." },
      { title: "Verzekeringen & Conformiteit", desc: "Tienjarige, BA, arbeidsongevallen, contractuele eisen." },
      { title: "Personeel & Verplichtingen", desc: "ONSS, LIMOSA, DmfA, CheckIn@Work, onderaannemers, veiligheid." },
      { title: "Werffacturatie", desc: "Metingen, vorderingsstaten, retenties, marge- en kostrapporten." },
      { title: "E-mails & Dossiers", desc: "Postvakken, technische archieven, termijnen en rappels." },
      { title: "Materialen & Onderaannemers", desc: "Aanvragen, vergelijkingen, ontvangsten, garanties, traceerbaarheid." },
    ],
    plansTitle: "Maandpakketten",
    plans: [
      { name: "Starter KMO", price: "€249/maand", bullets: ["1 actieve werf", "CheckIn@Work maandelijks", "E-mails ≤ 200/maand", "PDF-rapporten"] },
      { name: "Pro Werf", price: "€449/maand", bullets: ["3 actieve werven", "ONSS/LIMOSA routines", "CheckIn@Work wekelijks", "Redelijk onbeperkte e-mails", "Vorderingsstaten"], highlight: true },
      { name: "Maatwerk", price: "op maat", bullets: ["Onbeperkte werven", "Specifieke flows (PBM, onderaannemers)", "Offertes (forfait of % van de offerte)", "Audit inbegrepen"] },
    ],
    processTitle: "Onze aanpak",
    process: [
      { k: "1", title: "Diagnose", desc: "Meeting + document- en verplichtingenaudit." },
      { k: "2", title: "Actieplan", desc: "Geprioriteerde backlog, rollen en timings." },
      { k: "3", title: "Uitvoering & Rapportage", desc: "Routines, SLA’s en duidelijke maandrapporten." },
    ],
    trustTitle: "Waarom ons",
    trust: [
      "Ervaring met KMO’s in de bouw in België",
      "Beheersing ONSS, LIMOSA, CheckIn@Work, regionale regels",
      "Heldere communicatie, strakke deadlines, resultaat",
    ],
    contactTitle: "Contacteer ons",
    contactDesc: "Vraag een snelle audit (vrijblijvend) en ontvang een actieplan.",
    contact: { name: "Naam", email: "E-mail", message: "Bericht", send: "Verzenden" },
    footer: "Alle rechten voorbehouden.",
  },
} as const;

export default function LandingClient({ lang }: { lang: Lang }) {
  const L = t[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-bold tracking-tight">{L.brand} · ({lang})</h1>
          <LanguageSwitcher current={lang} />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block rounded-full border px-3 py-1 text-sm mb-4 bg-white">{L.badge}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {L.heroA}<span className="text-slate-900">{L.heroB}</span>{L.heroC}
            <span className="text-slate-900">{L.heroD}</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">{L.heroDesc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contacto" className="rounded-2xl px-4 py-2 bg-slate-900 text-white">{L.ctaStart}</a>
            <a href="#servicos" className="rounded-2xl px-4 py-2 border">{L.ctaServices}</a>
            <a href="#contacto" className="rounded-2xl px-4 py-2 bg-slate-100">{L.ctaAudit}</a>
          </div>
        </div>
        <div className="rounded-3xl border bg-white p-6 shadow-md">
          <h3 className="font-semibold mb-4">{L.servicosTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {L.servicos.map((s, i) => (
              <div key={i} className="p-3 border rounded-xl bg-slate-50">
                <p className="font-medium">{s.title}</p>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services (détaillé) */}
      <section id="servicos" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold mb-4">{L.servicosTitle}</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {L.servicos.map((s, i) => (
            <div key={i} className="p-5 rounded-2xl border bg-white">
              <p className="font-semibold">{s.title}</p>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="max-w-6xl mx-auto px-4 py-12 border-t">
        <h3 className="text-xl font-semibold mb-6">{L.plansTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {L.plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border bg-white p-6 ${p.highlight ? "ring-2 ring-slate-900" : ""}`}>
              <div className="flex items-baseline justify-between">
                <p className="font-semibold">{p.name}</p>
                <p className="text-slate-900 font-bold">{p.price}</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {p.bullets.map((b, j) => <li key={j}>• {b}</li>)}
              </ul>
              <a href="#contacto" className="mt-5 inline-block w-full text-center rounded-xl border px-4 py-2">
                {L.ctaAudit}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="max-w-6xl mx-auto px-4 py-12 border-t">
        <h3 className="text-xl font-semibold mb-6">{L.processTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {L.process.map((step) => (
            <div key={step.k} className="rounded-2xl border bg-white p-6">
              <div className="h-8 w-8 rounded-full bg-slate-900 text-white grid place-items-center font-bold">{step.k}</div>
              <p className="mt-3 font-semibold">{step.title}</p>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section id="provas" className="max-w-6xl mx-auto px-4 py-12 border-t">
        <h3 className="text-xl font-semibold mb-4">{L.trustTitle}</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          {L.trust.map((line, i) => <li key={i}>• {line}</li>)}
        </ul>
      </section>

      {/* Contact */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-12 border-t">
        <h3 className="text-xl font-semibold">{L.contactTitle}</h3>
        <p className="text-slate-600 mb-6">{L.contactDesc}</p>
        <form className="grid md:grid-cols-2 gap-4">
          <input className="border rounded-xl px-3 py-2" placeholder={L.contact.name} />
          <input className="border rounded-xl px-3 py-2" placeholder={L.contact.email} type="email" />
          <textarea className="md:col-span-2 border rounded-xl px-3 py-2 min-h-32" placeholder={L.contact.message} />
          <button type="submit" className="md:col-span-2 rounded-2xl px-4 py-2 bg-slate-900 text-white">{L.contact.send}</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {t.pt.brand}. {t.pt.footer}</p>
          <LanguageSwitcher current={lang} />
        </div>
      </footer>
    </div>
  );
}

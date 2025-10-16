"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";

export type Lang = "pt" | "fr" | "nl";

const t = {
  pt: {
    brand: "AdminBTP Belgium",
    heroBadge: "Especialistas administrativos para construção na Bélgica",
    heroTitleA: "Simplificamos a sua ",
    heroTitleB: "administração",
    heroTitleC: " para que a sua obra ",
    heroTitleD: "ande para a frente",
    heroDesc:
      "Delegue as tarefas burocráticas a uma equipa que domina ONSS, LIMOSA, CheckIn@Work, SPF Economie e exigências regionais (Bruxelas, Valónia, Flandres).",
    ctaStart: "Começar agora",
    ctaServices: "Ver serviços",
    ctaAudit: "Pedir Auditoria",
    nav: { servicos: "Serviços", planos: "Planos", processo: "Processo", provas: "Confiança", contacto: "Contacto" },
    servicosTitle: "O que tratamos por si",
    servicos: [
      { title: "Licenças & Autorizações", desc: "Pedidos às comunas e regiões, autorizações ambientais, certificações técnicas." },
      { title: "Seguros & Conformidade", desc: "Decenal, RC profissional, acidentes de trabalho, exigências contratuais." },
      { title: "Pessoal & Obrigações", desc: "ONSS, LIMOSA, DmfA, CheckIn@Work, subempreiteiros e segurança." },
      { title: "Faturação de Obras", desc: "Medições, notas de avanço, retenções, relatórios de custos e margens." },
      { title: "E-mails & Dossiês", desc: "Gestão de e-mails, arquivos técnicos, circulares e prazos." },
      { title: "Materiais & Subcontratos", desc: "Pedidos, comparativos, confirmações, rastreabilidade e garantias." },
    ],
    plansTitle: "Planos",
    plans: [
      {
        name: "Starter PME",
        price: "€249/mês",
        bullets: [
          "Até 1 obra ativa",
          "CheckIn@Work (mensal)",
          "Gestão de e-mails (até 200/mês)",
          "Relatórios básicos (PDF)",
        ],
      },
      {
        name: "Pro Obra",
        price: "€449/mês",
        bullets: [
          "Até 3 obras ativas",
          "ONSS/LIMOSA (rotina)",
          "CheckIn@Work (semanal)",
          "Gestão de e-mails (ilimitado justo)",
          "Faturação de medições",
        ],
        highlight: true,
      },
      {
        name: "Sob Medida",
        price: "à medida",
        bullets: [
          "Sem limite de obras",
          "Fluxos dedicados (EPI, subempreiteiros)",
          "Realização de orçamentos (fixo ou % do valor)",
          "Auditoria administrativa incluída",
        ],
      },
    ],
    processTitle: "Como trabalhamos",
    process: [
      { k: "1", title: "Diagnóstico", desc: "Reunião + auditoria de documentos e obrigações ativas." },
      { k: "2", title: "Plano de Ação", desc: "Backlog priorizado + quem faz o quê, quando e com que ferramenta." },
      { k: "3", title: "Execução & Reporting", desc: "Tarefas recorrentes, SLAs e relatórios mensais claros." },
    ],
    trustTitle: "Porquê confiar",
    trust: [
      "Experiência real com PME e empreiteiros na Bélgica",
      "Domínio de ONSS, LIMOSA, CheckIn@Work e exigências regionais",
      "Comunicação simples, prazos cumpridos, foco em resultado",
    ],
    contactTitle: "Fale connosco",
    contactDesc: "Peça uma auditoria rápida — sem compromisso — e receba um plano de ação.",
    contact: { name: "Nome", email: "E-mail", message: "Mensagem", send: "Enviar" },
    footer: "Todos os direitos reservados.",
  },
  fr: {
    brand: "AdminBTP Belgium",
    heroBadge: "Experts administratifs pour le BTP en Belgique",
    heroTitleA: "On simplifie votre ",
    heroTitleB: "administratif",
    heroTitleC: " pour que vos chantiers ",
    heroTitleD: "avancent",
    heroDesc:
      "Déléguez l’administratif à une équipe qui maîtrise ONSS, LIMOSA, CheckIn@Work, SPF Économie et exigences régionales (Bruxelles, Wallonie, Flandre).",
    ctaStart: "Commencer",
    ctaServices: "Voir les services",
    ctaAudit: "Demander un audit",
    nav: { servicos: "Services", planos: "Forfaits", processo: "Méthode", provas: "Confiance", contacto: "Contact" },
    servicosTitle: "Ce que l’on prend en charge",
    servicos: [
      { title: "Permis & Autorisations", desc: "Communes et Régions, environnement, certifications techniques." },
      { title: "Assurances & Conformité", desc: "Décennale, RC pro, accidents du travail, exigences contractuelles." },
      { title: "Personnel & Obligations", desc: "ONSS, LIMOSA, DmfA, CheckIn@Work, sous-traitants et sécurité." },
      { title: "Facturation de Chantier", desc: "Métrés, situations, retenues, rapports coûts & marges." },
      { title: "E-mails & Dossiers", desc: "Traitement des e-mails, archivage technique, relances et délais." },
      { title: "Matériaux & Sous-traitance", desc: "Demandes, comparatifs, bons, traçabilité et garanties." },
    ],
    plansTitle: "Forfaits",
    plans: [
      {
        name: "Starter PME",
        price: "249 €/mois",
        bullets: ["Jusqu’à 1 chantier actif", "CheckIn@Work (mensuel)", "Gestion e-mails (≤ 200/mois)", "Rapports PDF"],
      },
      {
        name: "Pro Chantier",
        price: "449 €/mois",
        bullets: [
          "Jusqu’à 3 chantiers actifs",
          "ONSS/LIMOSA (routines)",
          "CheckIn@Work (hebdo)",
          "Gestion e-mails (illimité raisonnable)",
          "Facturation sur métrés",
        ],
        highlight: true,
      },
      {
        name: "Sur-mesure",
        price: "sur devis",
        bullets: [
          "Chantiers illimités",
          "Flux dédiés (EPI, sous-traitants)",
          "Réalisation de devis (forfait ou % du devis)",
          "Audit administratif inclus",
        ],
      },
    ],
    processTitle: "Notre méthode",
    process: [
      { k: "1", title: "Diagnostic", desc: "RDV + audit des documents et obligations en cours." },
      { k: "2", title: "Plan d’action", desc: "Backlog priorisé + qui fait quoi, quand, avec quel outil." },
      { k: "3", title: "Exécution & Reporting", desc: "Routines, SLAs et reporting mensuel clair." },
    ],
    trustTitle: "Pourquoi nous faire confiance",
    trust: [
      "Expérience concrète avec des PME et entrepreneurs en Belgique",
      "Maîtrise d’ONSS, LIMOSA, CheckIn@Work et exigences régionales",
      "Communication simple, délais tenus, focus résultat",
    ],
    contactTitle: "Contactez-nous",
    contactDesc: "Demandez un audit rapide — sans engagement — et recevez un plan d’action.",
    contact: { name: "Nom", email: "E-mail", message: "Message", send: "Envoyer" },
    footer: "Tous droits réservés.",
  },
  nl: {
    brand: "AdminBTP Belgium",
    heroBadge: "Administratieve experts voor de bouw in België",
    heroTitleA: "Wij vereenvoudigen uw ",
    heroTitleB: "administratie",
    heroTitleC: " zodat uw werven ",
    heroTitleD: "vooruitgaan",
    heroDesc:
      "Delegeer het papierwerk aan een team dat ONSS, LIMOSA, CheckIn@Work, FOD Economie en regionale vereisten (Brussel, Wallonië, Vlaanderen) beheerst.",
    ctaStart: "Start nu",
    ctaServices: "Bekijk diensten",
    ctaAudit: "Audit aanvragen",
    nav: { servicos: "Diensten", planos: "Formules", processo: "Aanpak", provas: "Vertrouwen", contacto: "Contact" },
    servicosTitle: "Wat wij voor u doen",
    servicos: [
      { title: "Vergunningen & Toelatingen", desc: "Gemeenten & Gewesten, milieuvergunningen, technische certificaten." },
      { title: "Verzekeringen & Compliance", desc: "Tienjarige, BA pro, arbeidsongevallen, contractuele vereisten." },
      { title: "Personeel & Verplichtingen", desc: "ONSS, LIMOSA, DmfA, CheckIn@Work, onderaannemers en veiligheid." },
      { title: "Werffacturatie", desc: "Metingen, vorderingsstaten, waarborgen, kosten- en margerapporten." },
      { title: "E-mails & Dossiers", desc: "E-mailbeheer, technisch archief, opvolging en deadlines." },
      { title: "Materialen & Onderaannemers", desc: "Aanvragen, vergelijkingen, bonnen, traceerbaarheid en garanties." },
    ],
    plansTitle: "Formules",
    plans: [
      {
        name: "Starter KMO",
        price: "€249/maand",
        bullets: ["Tot 1 actieve werf", "CheckIn@Work (maandelijks)", "E-mailbeheer (≤ 200/maand)", "Basisrapporten (PDF)"],
      },
      {
        name: "Pro Werf",
        price: "€449/maand",
        bullets: [
          "Tot 3 actieve werven",
          "ONSS/LIMOSA (routines)",
          "CheckIn@Work (wekelijks)",
          "E-mailbeheer (redelijk onbeperkt)",
          "Facturatie op metingen",
        ],
        highlight: true,
      },
      {
        name: "Maatwerk",
        price: "op aanvraag",
        bullets: [
          "Onbeperkt aantal werven",
          "Specifieke flows (PBM, onderaannemers)",
          "Offertes opmaken (vast of % van de offerte)",
          "Administratieve audit inbegrepen",
        ],
      },
    ],
    processTitle: "Onze aanpak",
    process: [
      { k: "1", title: "Diagnose", desc: "Afspraak + audit van documenten en lopende verplichtingen." },
      { k: "2", title: "Actieplan", desc: "Geprioriteerde backlog + wie doet wat, wanneer en met welk hulpmiddel." },
      { k: "3", title: "Uitvoering & Reporting", desc: "Periodieke taken, SLA’s en heldere maandrapporten." },
    ],
    trustTitle: "Waarom vertrouwen",
    trust: [
      "Concrete ervaring met KMO’s en aannemers in België",
      "Beheersing van ONSS, LIMOSA, CheckIn@Work en regionale vereisten",
      "Eenvoudige communicatie, strikte deadlines, resultaatgericht",
    ],
    contactTitle: "Neem contact op",
    contactDesc: "Vraag een snelle audit — vrijblijvend — en ontvang een actieplan.",
    contact: { name: "Naam", email: "E-mail", message: "Bericht", send: "Verzenden" },
    footer: "Alle rechten voorbehouden.",
  },
} as const;

export default function LandingClient({ lang }: { lang: Lang }) {
  const L = t[lang] ?? t.pt;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-[9999] bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow">B</div>
            <span className="font-semibold tracking-tight">{L.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:text-slate-900 text-slate-600">{L.nav.servicos}</a>
            <a href="#planos" className="hover:text-slate-900 text-slate-600">{L.nav.planos}</a>
            <a href="#processo" className="hover:text-slate-900 text-slate-600">{L.nav.processo}</a>
            <a href="#provas" className="hover:text-slate-900 text-slate-600">{L.nav.provas}</a>
            <a href="#contacto" className="hover:text-slate-900 text-slate-600">{L.nav.contacto}</a>
          </nav>
          <div className="hidden sm:block">
            <a href="#contacto" className="inline-block rounded-2xl border px-4 py-2 bg-slate-900 text-white hover:opacity-90">{L.ctaAudit}</a>
          </div>
          <div className="md:ml-4"><LanguageSwitcher current={lang} /></div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full border px-3 py-1 mb-4 text-sm bg-white">{L.heroBadge}</span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {L.heroTitleA}
              <span className="text-slate-900">{L.heroTitleB}</span>
              {L.heroTitleC}
              <span className="text-slate-900">{L.heroTitleD}</span>
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">{L.heroDesc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="rounded-2xl border px-4 py-2 bg-slate-900 text-white hover:opacity-90">{L.ctaStart}</a>
              <a href="#servicos" className="rounded-2xl border px-4 py-2 hover:bg-slate-50">{L.ctaServices}</a>
              <a href="#contacto" className="rounded-2xl border px-4 py-2 bg-slate-100 hover:bg-slate-200">{L.ctaAudit}</a>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-200/60 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl shadow-xl bg-white p-6">
                <h3 className="text-xl font-semibold mb-4">{L.servicosTitle}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {L.servicos.map((s) => (
                    <div key={s.title} className="p-3 rounded-xl border bg-white">
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-slate-600">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-12 md:py-20 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{L.servicosTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {L.servicos.map((s) => (
              <div key={s.title} className="p-4 rounded-2xl border bg-white hover:shadow-sm transition">
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-12 md:py-20 border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{L.plansTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {L.plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border bg-white p-6 ${p.highlight ? "border-slate-900 shadow" : ""}`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="text-slate-900 font-bold">{p.price}</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900 inline-block" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-6 inline-block rounded-xl border px-4 py-2 hover:bg-slate-50">
                  {L.ctaAudit}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="processo" className="py-12 md:py-20 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{L.processTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {L.process.map((p) => (
              <div key={p.k} className="rounded-2xl border p-6 bg-white">
                <div className="h-7 w-7 rounded-full bg-slate-900 text-white grid place-items-center mb-3">{p.k}</div>
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="provas" className="py-12 md:py-20 border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{L.trustTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {L.trust.map((b) => (
              <div key={b} className="rounded-2xl border p-6 bg-white">
                <p className="text-slate-700">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-12 md:py-20 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{L.contactTitle}</h2>
          <p className="text-slate-600 mb-6">{L.contactDesc}</p>
          <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
            <input required placeholder={L.contact.name} className="border rounded-xl px-3 py-2" />
            <input required type="email" placeholder={L.contact.email} className="border rounded-xl px-3 py-2" />
            <textarea required placeholder={L.contact.message} className="md:col-span-2 border rounded-xl px-3 py-2 h-32" />
            <button className="rounded-2xl border px-4 py-2 bg-slate-900 text-white hover:opacity-90 md:col-start-2 justify-self-start">
              {L.contact.send}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {L.brand}. {L.footer}</p>
          <LanguageSwitcher current={lang} />
        </div>
      </footer>
    </div>
  );
}

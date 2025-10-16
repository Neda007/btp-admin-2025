
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ClipboardCheck,
  FileCheck2,
  ShieldCheck,
  HardHat,
  Users,
  Calculator,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export default function LandingBTPAdminPT() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center shadow">
              <HardHat className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">AdminBTP Belgium</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary">
            <a href="#servicos" className="hover:text-slate-900 text-slate-600">Serviços</a>
            <a href="#planos" className="hover:text-slate-900 text-slate-600">Planos</a>
            <a href="#processo" className="hover:text-slate-900 text-slate-600">Processo</a>
            <a href="#provas" className="hover:text-slate-900 text-slate-600">Confiança</a>
            <a href="#contacto" className="hover:text-slate-900 text-slate-600">Contacto</a>
          </nav>

          <div className="hidden sm:block"><a href="#contacto"><Button className="rounded-2xl">Pedir Orçamento</Button></a></div>

          {/* Mobile toggle */}
          <button
            aria-label="Abrir menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 bg-white"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="max-w-6xl mx-auto px-4 py-3 grid gap-3 text-sm" aria-label="Mobile">
              <a href="#servicos" className="py-2" onClick={() => setMobileOpen(false)}>Serviços</a>
              <a href="#planos" className="py-2" onClick={() => setMobileOpen(false)}>Planos</a>
              <a href="#processo" className="py-2" onClick={() => setMobileOpen(false)}>Processo</a>
              <a href="#provas" className="py-2" onClick={() => setMobileOpen(false)}>Confiança</a>
              <a href="#contacto" className="py-2" onClick={() => setMobileOpen(false)}>Contacto</a>
              <a href="#contacto" className="pt-2" onClick={() => setMobileOpen(false)}><Button className="w-full rounded-2xl">Pedir Orçamento</Button></a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="rounded-full px-3 py-1 mb-4">Especialistas administrativos para construção na Bélgica</Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Simplificamos a sua <span className="text-slate-900">administração</span> para que a sua obra <span className="text-slate-900">ande para a frente</span>
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Delegue as tarefas burocráticas a uma equipa que domina ONSS, LIMOSA, CheckIn@Work, SPF Economie e exigências regionais (Bruxelas, Valónia, Flandres).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge className="rounded-full">ONSS</Badge>
              <Badge className="rounded-full">LIMOSA</Badge>
              <Badge className="rounded-full">CheckIn@Work</Badge>
              <Badge className="rounded-full">SPF Economie</Badge>
              <Badge className="rounded-full">Licenças Urbanísticas</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto"><Button className="rounded-2xl">Começar agora</Button></a>
              <a href="#servicos"><Button variant="outline" className="rounded-2xl">Ver serviços</Button></a>
              <a href="#contacto"><Button variant="secondary" className="rounded-2xl">Pedir Auditoria</Button></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-200/60 rounded-3xl blur-2xl" />
              <Card className="relative rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">O que tratamos por si</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <FileCheck2 className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">Licenças & Autorizações</p>
                      <p className="text-sm text-slate-600">Pedidos às comunas e regiões, autorizações ambientais, certificações técnicas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">Seguros & Conformidade</p>
                      <p className="text-sm text-slate-600">Decenal, RC profissional, acidentes de trabalho, exigências contratuais.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">Pessoal & Obrigações</p>
                      <p className="text-sm text-slate-600">ONSS, LIMOSA, DmfA, CheckIn@Work, subempreiteiros e segurança.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calculator className="h-5 w-5 mt-1" />
                    <div>
                      <p className="font-medium">Faturação de Obras</p>
                      <p className="text-sm text-slate-600">Medições, notas de avanço, retenções, relatórios de custos e margens.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 md:py-24 bg-slate-50 border-t">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Serviços para Empreiteiros & PME</h2>
            <p className="mt-3 text-slate-600">Pacotes flexíveis, sem complicações. Pode delegar tudo ou só o que precisa.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ClipboardCheck className="h-5 w-5"/> Licenças e Autorizações</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pedidos de licença urbanística e comunicações prévias.</li>
                  <li>Autorizações ambientais e coordenação com comunas/regiões.</li>
                  <li>Certificações técnicas e dossiers de obra.</li>
                  <li>Acompanhamento até à aprovação.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><ShieldCheck className="h-5 w-5"/> Seguros & Conformidade</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gestão de seguro decenal, RC profissional e acidentes de trabalho.</li>
                  <li>Verificação de cláusulas e exigências de clientes (público/privado).</li>
                  <li>Conformidade com SPF Economie e auditorias documentais.</li>
                  <li>Renovações e prova de cobertura.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5"/> Pessoal & Obrigações Sociais</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>DmfA, ONSS, LIMOSA para trabalhadores deslocados.</li>
                  <li>Registos CheckIn@Work e controlo de presenças.</li>
                  <li>Contratos de subempreiteiros e verificação de conformidade.</li>
                  <li>Documentos de segurança e bem‑estar no trabalho.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Calculator className="h-5 w-5"/> Faturação & Controlo Financeiro</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Medições, notas de avanço e retenções de garantia.</li>
                  <li>Faturação com IVA adequado (incl. 6% quando aplicável).</li>
                  <li>Relatórios de custos por obra e margens.</li>
                  <li>Planos de cobrança e follow‑up de pagamentos.</li>
                </ul>
              </CardContent>
            </Card>

            {/* NOVOS SERVIÇOS */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5"/> Gestão de E-mails & Correspondência</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Criação de caixas partilhadas (obras, compras, faturação) e triagem diária.</li>
                  <li>Resposta padrão a pedidos recorrentes (clientes, comunas, seguradoras).</li>
                  <li>Arquivo por obra e alertas de prazos/documentos.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><HardHat className="h-5 w-5"/> Materiais & Logística</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-2 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Pedidos a fornecedores, comparativos de preços e confirmação de entregas.</li>
                  <li>Controlo de stock básico por obra e gestão de levantamentos/devoluções.</li>
                  <li>Coordenação de aluguer de equipamentos e transporte.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Planos mensais flexíveis</h2>
            <p className="mt-3 text-slate-600">Preços de mercado na Bélgica para PME da construção. Sem fidelização — cancelamento mensal. <span className="font-medium">Valores sem IVA (21%).</span></p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* STARTER */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm space-y-3">
                <p className="text-3xl font-extrabold">€395<span className="text-base font-medium text-slate-500">/mês</span></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Triagem de e-mails & correspondência (até <span className="font-medium">1 obra</span>).</li>
                  <li>Registos <span className="font-medium">CheckIn@Work</span> e suporte <span className="font-medium">LIMOSA</span> (até 5 trabalhadores/mês).</li>
                  <li>Preparação <span className="font-medium">DmfA trimestral</span> (incluída).</li>
                  <li>Faturação básica (até <span className="font-medium">20 documentos/mês</span>).</li>
                  <li>Tempo de resposta: <span className="font-medium">48h úteis</span>.</li>
                </ul>
              </CardContent>
            </Card>

            {/* PRO */}
            <Card className="rounded-2xl border-2 border-slate-900">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm space-y-3">
                <p className="text-3xl font-extrabold">€795<span className="text-base font-medium text-slate-500">/mês</span></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>E-mails, fornecedores & material (até <span className="font-medium">3 obras</span>).</li>
                  <li>ONSS, <span className="font-medium">DmfA</span>, <span className="font-medium">LIMOSA</span> e relatórios mensais.</li>
                  <li>Faturação por obra + cobranças (até <span className="font-medium">60 documentos/mês</span>).</li>
                  <li>Subempreiteiros: verificação de conformidade & dossiê de segurança.</li>
                  <li>Tempo de resposta: <span className="font-medium">24–48h úteis</span>.</li>
                </ul>
              </CardContent>
            </Card>

            {/* EMPRESA */}
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Empresa</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm space-y-3">
                <p className="text-3xl font-extrabold">a partir de €1 490<span className="text-base font-medium text-slate-500">/mês</span></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gestão <span className="font-medium">multiobras</span> com reporte financeiro por projeto.</li>
                  <li>Relatórios de custos, margens e previsões de caixa.</li>
                  <li>Suporte a concursos, auditorias documentais e dossiês de licenças.</li>
                  <li>Faturação avançada (até <span className="font-medium">150 documentos/mês</span>, escalável).</li>
                  <li>Gestor dedicado • SLA <span className="font-medium">24h úteis</span>.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Serviço sob medida</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm space-y-2">
                <p>Montamos um pacote à medida da sua PME, com preço fixo mensal ou por volume.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Elaboração de orçamentos (devis)</li>
                  <li>Comissão sobre o valor do orçamento: <span className="font-medium">1,5%–3%</span> (apenas se aprovado)</li>
                  <li>Ou preço fixo: <span className="font-medium">desde €120/orçamento</span></li>
                </ul>
                <a href="#contacto"><Button className="rounded-2xl w-full mt-3">Pedir proposta sob medida</Button></a>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Add‑ons & condições</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm space-y-1">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Auditoria administrativa única: <span className="font-medium">€390</span></li>
                  <li>Dossiês de licenças: <span className="font-medium">desde €350/pedido</span></li>
                  <li>Horas extra além do pacote: <span className="font-medium">€45/h</span></li>
                  <li>Preços indicativos — ajustamos ao volume e complexidade.</li>
                </ul>
                <a href="#contacto"><Button variant="outline" className="rounded-2xl w-full mt-3">Falar com especialista</Button></a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Como trabalhamos</h2>
              <p className="mt-3 text-slate-600">Processo simples e transparente para que a sua empresa ganhe tempo desde o primeiro dia.</p>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-4">
              {["Diagnóstico", "Plano", "Execução"].map((etapa, i) => (
                <Card key={etapa} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <span className="h-7 w-7 rounded-full bg-slate-900 text-white grid place-items-center text-sm">{i+1}</span>
                      {etapa}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-slate-600">
                    {i===0 && <p>Analisamos a situação da sua empresa, obras em curso e obrigações pendentes.</p>}
                    {i===1 && <p>Definimos responsabilidades, prazos e documentos — tudo por escrito.</p>}
                    {i===2 && <p>Assumimos a burocracia, reportamos o progresso e garantimos conformidade.</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVAS SOCIAIS / CONFIANÇA */}
      <section id="provas" className="py-16 md:py-24 bg-slate-50 border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {kpi: "98%", label: "Pedidos aprovados na 1ª submissão"},
              {kpi: "+120", label: "Empresas de construção atendidas"},
              {kpi: "24–48h", label: "Resposta média a urgências"},
            ].map(({kpi, label}) => (
              <Card key={label} className="rounded-2xl">
                <CardContent className="p-6">
                  <p className="text-4xl font-extrabold tracking-tight">{kpi}</p>
                  <p className="text-slate-600 mt-2">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Conformidade belga sem dores de cabeça</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">
                Dominamos regulamentos regionais, trabalhamos com prazos realistas e mantemos o seu dossiê sempre pronto para auditorias.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Transparência total</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm">
                Relatórios claros, acompanhamento por obra e um ponto de contacto dedicado para a sua PME.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Peça um orçamento</h2>
            <p className="mt-3 text-slate-600">Conte-nos rapidamente o que precisa. Respondemos em 24–48h úteis.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4"/> info@adminbtp.be</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4"/> +32 4 00 00 00</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Bruxelas • Bélgica</p>
            </div>
          </div>

          <Card className="lg:col-span-7 rounded-2xl">
            <CardContent className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="md:col-span-2">
                  <label className="text-sm">Tipo de pedido</label>
                  <select className="w-full rounded-xl border border-slate-200 px-3 py-2 mt-1 bg-white">
                    <option>Orçamento</option>
                    <option>Plano mensal (forfait)</option>
                    <option>Serviço sob medida</option>
                    <option>Auditoria</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm">Nome</label>
                  <Input placeholder="O seu nome" className="rounded-xl mt-1" />
                </div>
                <div>
                  <label className="text-sm">Empresa</label>
                  <Input placeholder="Nome da empresa" className="rounded-xl mt-1" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm">Email</label>
                  <Input type="email" placeholder="email@exemplo.com" className="rounded-xl mt-1" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm">O que precisa?</label>
                  <Textarea placeholder="Descreva brevemente o seu pedido" className="rounded-xl mt-1 min-h-[120px]" />
                </div>
                <div className="md:col-span-2">
                  <Button className="rounded-2xl w-full">Enviar pedido</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} AdminBTP Belgium. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white text-slate-700 border border-slate-300">Português</Badge>
            <Badge className="bg-white text-slate-700 border border-slate-300">Français</Badge>
            <Badge className="bg-white text-slate-700 border border-slate-300">Nederlands</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}

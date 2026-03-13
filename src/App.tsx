/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  GitBranch, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  LayoutDashboard,
  ChevronRight,
  Menu,
  X,
  Search,
  FileText,
  Target,
  Zap,
  Briefcase,
  PenTool,
  Globe,
  Radio,
  Plus,
  TrendingUp,
  RefreshCw,
  Folder,
  Calendar,
  CheckSquare,
  ArrowDown,
  Palette,
  Video,
  Layout,
  FileImage,
  ShieldCheck,
  GitMerge,
  AlertTriangle,
  Scale,
  ListTodo,
  ClipboardList,
  Layers,
  Compass,
  PieChart,
  BarChart,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FlowDiagram } from './components/FlowDiagram';

type SectionId = 'intro' | 'ceo' | 'sales-dir' | 'financial-dir' | 'brief' | 'social' | 'seo' | 'account' | 'directors' | 'grafici' | 'cmo' | 'executive' | 'strategy' | 'digital-dir' | 'creative-dir' | 'media-dir' | 'event-dir' | 'pr' | 'content' | 'flows' | 'raci' | 'sla' | 'meetings';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems: { id: SectionId; label: string; icon: any; category: string; indentation?: number }[] = [
    { id: 'intro', label: 'Introduzione', icon: BookOpen, category: 'Generale' },
    { id: 'ceo', label: 'CEO', icon: ShieldCheck, category: 'Mansioni - Direzione' },
    { id: 'sales-dir', label: 'Sales & Client Director', icon: TrendingUp, category: 'Mansioni - Direzione' },
    { id: 'financial-dir', label: 'Financial Director', icon: BarChart, category: 'Mansioni - Direzione' },
    { id: 'flows', label: 'Flussi Trasversali', icon: GitBranch, category: 'Processi' },
    { id: 'brief', label: 'Brief & Debrief', icon: FileText, category: 'Processi' },
    { id: 'raci', label: 'Matrice RACI', icon: CheckCircle2, category: 'Governance' },
    { id: 'sla', label: 'SLA Operativi', icon: Clock, category: 'Governance' },
    { id: 'meetings', label: 'Gestione Riunioni', icon: MessageSquare, category: 'Governance' },
    { id: 'cmo', label: 'CMO', icon: Target, category: 'Mansioni - Direzione' },
    { id: 'directors', label: 'Directors', icon: Briefcase, category: 'Mansioni - Direzione' },
    {id: 'strategy', label: 'Strategic Director', icon: Compass, category: 'Mansioni - Direzione', indentation: 1 },
    { id: 'digital-dir', label: 'Digital Strategy Director', icon: Globe, category: 'Mansioni - Direzione', indentation: 1 },
    { id: 'creative-dir', label: 'Creative Director', icon: Palette, category: 'Mansioni - Direzione', indentation: 1 },
    { id: 'media-dir', label: 'Media Director', icon: PieChart, category: 'Mansioni - Direzione', indentation: 1 },
    { id: 'event-dir', label: 'Event Director', icon: Video, category: 'Mansioni - Direzione', indentation: 1 },
    { id: 'executive', label: 'Executive Manager', icon: Zap, category: 'Mansioni - Coordinamento' },
    { id: 'account', label: 'Account Manager', icon: Users, category: 'Mansioni - Coordinamento' },
    { id: 'seo', label: 'SEO & Automation', icon: Search, category: 'Mansioni - Operative' },
    { id: 'social', label: 'Social Media Manager', icon: LayoutDashboard, category: 'Mansioni - Operative' },
    { id: 'content', label: 'Content Coordinator', icon: FileText, category: 'Mansioni - Operative' },
    { id: 'grafici', label: 'Grafici / Visual', icon: PenTool, category: 'Mansioni - Operative' },
    { id: 'pr', label: 'Ufficio PR', icon: Radio, category: 'Mansioni - Operative' },
  ];

  const categories = Array.from(new Set(navItems.map(item => item.category)));

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-brand-blue text-white rounded-full shadow-lg"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="w-72 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col z-40"
          >
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://yt3.googleusercontent.com/eJvV7Hjxt0dA24lmIL0IyKHlZzaRc4LeEWKwb09Cpfa77qi_e2jawzpAZjnSqkmFngQ3-RSwAw=s900-c-k-c0x00ffffff-no-rj" 
                  alt="PubliOne Logo" 
                  className="w-12 h-12 rounded-lg object-contain"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h1 className="font-bold text-slate-900 tracking-tight text-lg leading-tight">PubliOne</h1>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Manuale Operativo</p>
                </div>
              </div>
            </div>
            
            <nav className="flex-1 overflow-y-auto p-4 space-y-8">
              {categories.map(cat => (
                <div key={cat}>
                  <h3 className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{cat}</h3>
                  <div className="space-y-1">
                    {navItems.filter(item => item.category === cat).map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-3 py-2 rounded-lg font-medium transition-colors ${
                          activeSection === item.id 
                            ? 'bg-brand-blue/5 text-brand-blue' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        } ${
                          item.indentation === 1 ? 'pl-8 text-xs' : 
                          item.indentation === 2 ? 'pl-12 text-[10px]' : 
                          'px-3 text-sm'
                        }`}
                      >
                        <item.icon className={`w-4 h-4 flex-shrink-0 ${activeSection === item.id ? 'text-brand-blue' : 'text-slate-400'}`} />
                        <span className="truncate">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <main className="flex-1 overflow-y-auto relative">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 prose">
          
          {activeSection === 'intro' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1>Benvenuti nel Manuale Operativo PubliOne</h1>
              <p className="text-xl text-slate-500 mb-12">
                Questo documento rappresenta la guida integrale ai flussi, processi e mansionari dell'agenzia. 
                L'obiettivo è garantire chiarezza, efficienza e qualità in ogni fase del lavoro.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-brand-blue transition-colors">
                  <GitBranch className="text-brand-blue mb-4" />
                  <h3 className="text-lg font-bold mb-2">Flussi Trasversali</h3>
                  <p className="text-sm text-slate-500">Scopri come i progetti si muovono tra i reparti, dall'ingresso alla consegna finale.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <Users className="text-emerald-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Mansionari Dettagliati</h3>
                  <p className="text-sm text-slate-500">Definizione chiara di ruoli, responsabilità e competenze richieste per ogni figura.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-brand-red transition-colors">
                  <CheckCircle2 className="text-brand-red mb-4" />
                  <h3 className="text-lg font-bold mb-2">Governance & RACI</h3>
                  <p className="text-sm text-slate-500">Matrice delle responsabilità e SLA operativi per garantire il rispetto dei tempi.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <MessageSquare className="text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">Metodo & Riunioni</h3>
                  <p className="text-sm text-slate-500">Linee guida per una comunicazione interna efficace e orientata alla soluzione.</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'flows' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Flussi Operativi Trasversali</h1>
              <p>I flussi trasversali definiscono il percorso che un progetto segue all’interno dell’agenzia, coordinando direzione, account, director, executive e team operativi.</p>
              
              <h2>1. Ingresso Nuovo Azienda Partner</h2>
              <p className="text-sm text-slate-600 mb-6">Riguarda i nuovi progetti che entrano in agenzia tramite acquisizione commerciale o direzione.</p>
              <FlowDiagram 
                title="Processo Acquisizione Nuovo Cliente"
                steps={[
                  { label: 'Origine Opportunità', sublabel: 'Commerciale/Direzione', type: 'start' },
                  { label: 'Condivisione CMO', sublabel: 'Valutazione Strategica', type: 'process' },
                  { label: 'Decisione Percorso', sublabel: 'Account / Director', type: 'decision' },
                  { label: 'Debrief Interno', sublabel: 'Allineamento Team', type: 'process' },
                  { label: 'Creazione Proposta', sublabel: 'Canva / PowerPoint', type: 'process' },
                  { label: 'Validazione Interna', sublabel: 'CMO/Client Dir', type: 'process' },
                  { label: 'Presentazione', sublabel: 'Azienda Partner', type: 'process' },
                  { label: 'Attivazione', sublabel: 'Chronos / Commesse', type: 'end' }
                ]}
              />

              <h2>2. Upselling su Azienda Partner Esistente</h2>
              <p className="text-sm text-slate-600 mb-6">Sviluppo di nuovi servizi su Aziende Partner già attivi.</p>
              <FlowDiagram 
                title="Processo Upselling"
                steps={[
                  { label: 'Identificazione', sublabel: 'Account/Direzione', type: 'start' },
                  { label: 'Condivisione CMO', sublabel: 'Fattibilità', type: 'process' },
                  { label: 'Costruzione Proposta', sublabel: 'Director + Account', type: 'process' },
                  { label: 'Approvazione', sublabel: 'Azienda Partner', type: 'process' },
                  { label: 'Aggiornamento', sublabel: 'Chronos', type: 'end' }
                ]}
              />

              <h2>3. Gestione Progetto Ongoing</h2>
              <p className="text-sm text-slate-600 mb-6">Riguarda i progetti già attivi.</p>
              <FlowDiagram 
                title="Workflow Ongoing"
                steps={[
                  { label: 'Pianificazione', sublabel: 'Commesse / Task', type: 'start' },
                  { label: 'Coordinamento', sublabel: 'Executive Manager', type: 'process' },
                  { label: 'Riunione Settimanale', sublabel: 'Verifica Stato', type: 'process' },
                  { label: 'Monitoraggio Delivery', sublabel: 'Qualità & Scadenze', type: 'process' },
                  { label: 'Aggiornamento Partner', sublabel: 'Milestone', type: 'end' }
                ]}
              />

              <h2>4. Sviluppo Sito Web / Progetto Digital</h2>
              <FlowDiagram 
                title="Workflow Digital"
                steps={[
                  { label: 'Analisi Preliminare', sublabel: 'SEO/Market/Competitor', type: 'start' },
                  { label: 'Struttura & UX', sublabel: 'Architettura Informazioni', type: 'process' },
                  { label: 'Grafica', sublabel: 'Visual Design', type: 'process' },
                  { label: 'Sviluppo', sublabel: 'Internal/External', type: 'process' },
                  { label: 'Ottimizzazione', sublabel: 'SEO', type: 'process' },
                  { label: 'Test & Go Live', sublabel: 'Pubblicazione', type: 'end' }
                ]}
              />

              <h2>5. Sviluppo Piano Editoriale Social</h2>
              <FlowDiagram 
                title="Workflow Social"
                steps={[
                  { label: 'Ricezione Brief', sublabel: 'Account/Partner', type: 'start' },
                  { label: 'Analisi Preliminare', sublabel: 'Trend & Competitor', type: 'process' },
                  { label: 'Strategia Social', sublabel: 'Cluster Contenuti', type: 'process' },
                  { label: 'Creazione PED', sublabel: 'Piano Editoriale', type: 'process' },
                  { label: 'Produzione', sublabel: 'Grafiche/Video/Copy', type: 'process' },
                  { label: 'Pubblicazione', sublabel: 'Sponsorizzazioni', type: 'end' }
                ]}
              />

              <h2>6. Gestione Richieste Extra / Urgenti</h2>
              <FlowDiagram 
                title="Gestione Eccezioni"
                steps={[
                  { label: 'Ricezione Richiesta', sublabel: 'Account', type: 'start' },
                  { label: 'Valutazione Interna', sublabel: 'Resp. Reparto', type: 'decision' },
                  { label: 'Confronto CMO', sublabel: 'Se necessario', type: 'process' },
                  { label: 'Decisione', sublabel: 'Accettazione/Rimodulazione', type: 'end' }
                ]}
              />

              <h2>7. Chiusura Progetto</h2>
              <FlowDiagram 
                title="Workflow Chiusura"
                steps={[
                  { label: 'Verifica Attività', sublabel: 'Completamento', type: 'start' },
                  { label: 'Archiviazione', sublabel: 'OneDrive / Server', type: 'process' },
                  { label: 'Consuntivazione', sublabel: 'Chronos', type: 'process' },
                  { label: 'Report Finale', sublabel: 'Allegato Progetto', type: 'end' }
                ]}
              />

              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mt-12">
                <h3 className="text-brand-blue mt-0">Principio Fondamentale</h3>
                <p className="text-brand-blue/80 mb-0">Tutti i flussi devono essere tracciati su <strong>Chronos</strong> e la comunicazione deve avvenire esclusivamente tramite <strong>Microsoft Teams</strong> e canali ufficiali.</p>
              </div>
            </motion.div>
          )}

          {activeSection === 'brief' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Gestione Brief e Debrief</h1>
              <p className="text-lg">La gestione del brief e del debrief rappresenta una fase fondamentale nel flusso operativo dell’agenzia. Il brief raccoglie le informazioni, il debrief le condivide con i team operativi.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose">
                <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                  <h3 className="text-brand-blue mt-0 flex items-center gap-2"><FileText className="w-5 h-5" /> Obiettivo del Brief</h3>
                  <p className="text-sm text-brand-blue/80">Raccogliere tutte le informazioni necessarie per comprendere correttamente il progetto e impostare la strategia di lavoro.</p>
                  <ul className="text-xs text-brand-blue/70 space-y-1 mt-4">
                    <li>• Obiettivi del progetto e contesto Azienda Partner</li>
                    <li>• Target di riferimento e servizi richiesti</li>
                    <li>• Piattaforme coinvolte, tempistiche e milestone</li>
                    <li>• Eventuali vincoli operativi o strategici</li>
                  </ul>
                </div>
                <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                  <h3 className="text-emerald-900 mt-0 flex items-center gap-2"><Users className="w-5 h-5" /> Obiettivo del Debrief</h3>
                  <p className="text-sm text-emerald-800">Condivisione interna del brief con i team che dovranno lavorare sul progetto per allineare i reparti.</p>
                  <ul className="text-xs text-emerald-700 space-y-1 mt-4">
                    <li>• Allineare i reparti coinvolti</li>
                    <li>• Chiarire obiettivi e aspettative</li>
                    <li>• Definire la struttura operativa del lavoro</li>
                    <li>• Individuare responsabilità e priorità</li>
                  </ul>
                </div>
              </div>

              <h2>Casistiche di Gestione</h2>
              <p>Il processo varia in base alla tipologia di progetto. Le principali casistiche operative sono tre:</p>

              <div className="space-y-8">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-blue">1. Casistica Prospect</h3>
                  <p className="text-sm text-slate-500 mb-4">Gestione iniziale sotto la responsabilità della funzione commerciale.</p>
                  <div className="space-y-4">
                    {[
                      { t: 'Identificazione', d: 'Il commerciale individua una nuova opportunità con un potenziale cliente.' },
                      { t: 'Condivisione con CMO', d: 'Valutazione fattibilità, complessità e coinvolgimento director.' },
                      { t: 'Coinvolgimento Director', d: 'Il CMO individua i director più adatti per costruire la strategia.' },
                      { t: 'Individuazione Account', d: 'Viene assegnato un Account Manager per seguire la relazione.' },
                      { t: 'Formalizzazione', d: 'L\'Account integra i contributi, prepara la proposta e carica su Chronos.' },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xs font-bold">{i+1}</div>
                        <div>
                          <p className="font-bold text-slate-800 m-0 text-sm">{s.t}</p>
                          <p className="text-xs text-slate-500 m-0">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-emerald-600">2. Casistica Cliente Acquisito</h3>
                  <p className="text-sm text-slate-500 mb-4">Responsabilità diretta dell\'Account Manager come referente dell\'Azienda Partner.</p>
                  <div className="space-y-4">
                    {[
                      { t: 'Raccolta Brief', d: 'L\'Account raccoglie le informazioni necessarie dal cliente.' },
                      { t: 'Valutazione Interna', d: 'Analisi della richiesta e valutazione del coinvolgimento dei director.' },
                      { t: 'Coinvolgimento Director', d: 'Se necessario, coinvolgimento dei director per strategia o soluzioni.' },
                      { t: 'Formalizzazione Brief', d: 'Documento condiviso e archiviato nella cartella progetto.' },
                      { t: 'Avvio Debrief', d: 'Condivisione con i team coinvolti attraverso riunione interna.' },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">{i+1}</div>
                        <div>
                          <p className="font-bold text-slate-800 m-0 text-sm">{s.t}</p>
                          <p className="text-xs text-slate-500 m-0">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-amber-600">3. Casistica Upselling</h3>
                  <p className="text-sm text-slate-500 mb-4">Sviluppo di nuove attività su un cliente già acquisito.</p>
                  <div className="space-y-4">
                    {[
                      { t: 'Identificazione Opportunità', d: 'Nata da Account, commerciale, responsabile o direzione.' },
                      { t: 'Condivisione CMO', d: 'Valutazione opportunità strategica e fattibilità operativa.' },
                      { t: 'Coinvolgimento Director', d: 'Se complesso, coinvolgimento director di area per la proposta.' },
                      { t: 'Costruzione Proposta', d: 'L\'Account integra i contributi e presenta all\'Azienda Partner.' },
                      { t: 'Formalizzazione', d: 'Approvazione cliente, aggiornamento commessa e task su Chronos.' },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">{i+1}</div>
                        <div>
                          <p className="font-bold text-slate-800 m-0 text-sm">{s.t}</p>
                          <p className="text-xs text-slate-500 m-0">{s.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-12 space-y-8">
                <div>
                  <h2>Formalizzazione e Pianificazione</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-900 mt-0 mb-2">Formalizzazione del Brief</h4>
                      <p className="text-xs text-slate-600">Il brief deve essere un documento condiviso e archiviato (OneDrive). Deve essere accessibile a tutti i reparti coinvolti.</p>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                      <h4 className="font-bold text-slate-900 mt-0 mb-2">Riunione di Debrief Interno</h4>
                      <p className="text-xs text-slate-600">Coinvolge Account, Executive, Director e team operativi per chiarire obiettivi, struttura, tempi e criticità.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3>Pianificazione Operativa</h3>
                  <p>Dopo il debrief, l'Executive Manager organizza la pianificazione:</p>
                  <ul>
                    <li>Definizione di task e microtask.</li>
                    <li>Assegnazione delle attività ai team.</li>
                    <li>Pianificazione delle scadenze operative.</li>
                    <li>Caricamento e monitoraggio su Chronos.</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                  <h3 className="text-slate-900 mt-0">Principi di Gestione</h3>
                  <ul className="text-sm text-slate-600 space-y-2">
                    <li><strong className="text-slate-900">Chiarezza:</strong> Massima precisione nella raccolta informazioni.</li>
                    <li><strong className="text-slate-900">Trasparenza:</strong> Condivisione aperta con i team interni.</li>
                    <li><strong className="text-slate-900">Documentazione:</strong> Ogni informazione rilevante deve essere scritta.</li>
                    <li><strong className="text-slate-900">Allineamento:</strong> Coerenza totale tra strategia e operatività.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'raci' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Matrice RACI</h1>
              <p>La matrice RACI definisce chi fa cosa, evitando sovrapposizioni e ambiguità.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 not-prose">
                <div className="p-3 bg-brand-blue/5 border border-brand-blue/10 rounded-lg text-center">
                  <div className="font-bold text-brand-blue">R</div>
                  <div className="text-[10px] uppercase text-brand-blue/60">Responsible</div>
                </div>
                <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
                  <div className="font-bold text-emerald-700">A</div>
                  <div className="text-[10px] uppercase text-emerald-600">Accountable</div>
                </div>
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg text-center">
                  <div className="font-bold text-amber-700">C</div>
                  <div className="text-[10px] uppercase text-amber-600">Consulted</div>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
                  <div className="font-bold text-slate-700">I</div>
                  <div className="text-[10px] uppercase text-slate-600">Informed</div>
                </div>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-slate-900">Attività</th>
                      <th className="px-2 py-3 text-center">Account</th>
                      <th className="px-2 py-3 text-center">CMO</th>
                      <th className="px-2 py-3 text-center">Dir.</th>
                      <th className="px-2 py-3 text-center">Exec.</th>
                      <th className="px-2 py-3 text-center">Op.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { act: 'Ricezione brief', acc: 'A', cmo: 'I', sp: 'I', ex: 'I', op: 'I' },
                      { act: 'Valutazione progetto', acc: 'C', cmo: 'A', sp: 'C', ex: 'I', op: 'I' },
                      { act: 'Definizione strategia', acc: 'C', cmo: 'C', sp: 'A', ex: 'I', op: 'I' },
                      { act: 'Costruzione proposta', acc: 'A', cmo: 'C', sp: 'R', ex: 'I', op: 'I' },
                      { act: 'Presentazione Cliente', acc: 'A', cmo: 'C', sp: 'C', ex: 'I', op: 'I' },
                      { act: 'Attivazione Chronos', acc: 'A', cmo: 'I', sp: 'I', ex: 'C', op: 'I' },
                      { act: 'Pianificazione op.', acc: 'C', cmo: 'I', sp: 'C', ex: 'A', op: 'I' },
                      { act: 'Coordinamento', acc: 'C', cmo: 'I', sp: 'C', ex: 'A', op: 'R' },
                      { act: 'Produzione materiali', acc: 'I', cmo: 'I', sp: 'C', ex: 'C', op: 'R' },
                      { act: 'Controllo qualità', acc: 'C', cmo: 'I', sp: 'A', ex: 'R', op: 'I' },
                      { act: 'Gestione extra', acc: 'A', cmo: 'C', sp: 'C', ex: 'I', op: 'I' },
                      { act: 'Report finale', acc: 'A', cmo: 'I', sp: 'C', ex: 'C', op: 'R' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="px-4 py-3 font-medium text-slate-700">{row.act}</td>
                        <td className="px-2 py-3 text-center font-bold text-brand-blue">{row.acc}</td>
                        <td className="px-2 py-3 text-center font-bold text-emerald-600">{row.cmo}</td>
                        <td className="px-2 py-3 text-center font-bold text-brand-red">{row.sp}</td>
                        <td className="px-2 py-3 text-center font-bold text-slate-600">{row.ex}</td>
                        <td className="px-2 py-3 text-center font-bold text-slate-400">{row.op}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeSection === 'sla' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>SLA Operativi – Tempi Standard di Consegna</h1>
              <p className="text-lg">Gli SLA operativi (Service Level Agreement) definiscono i tempi standard di gestione delle attività interne dell’agenzia. Servono a garantire organizzazione, prevedibilità e rispetto delle scadenze nei progetti.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <p className="text-sm text-brand-blue/80 mb-0">Gli SLA permettono ai team di lavorare in modo coordinato e aiutano a evitare urgenze non pianificate, sovraccarichi di lavoro e ritardi nelle consegne. I tempi indicati rappresentano standard operativi interni e possono essere adattati in base alla complessità del progetto o alle esigenze specifiche dell’Azienda Partner.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Plus className="w-5 h-5" /> 1. Attivazione progetto</h3>
                  <p className="text-xs text-slate-500 mb-4">Dopo l’approvazione del progetto, l’Account Manager deve procedere all’attivazione operativa della commessa.</p>
                  <ul className="text-[10px] text-slate-600 space-y-1 mb-4 list-none p-0">
                    <li>• Caricamento del progetto su Chronos</li>
                    <li>• Inserimento commesse e task</li>
                    <li>• Inserimento anagrafica fornitori</li>
                    <li>• Creazione cartelle OneDrive</li>
                    <li>• Apertura chat Teams</li>
                  </ul>
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Entro 24 ore lavorative
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-emerald-600 mt-0 flex items-center gap-2"><LayoutDashboard className="w-5 h-5" /> 2. Pianificazione operativa</h3>
                  <p className="text-xs text-slate-500 mb-4">L’Executive Manager deve organizzare la pianificazione operativa e assegnare i task ai team.</p>
                  <ul className="text-[10px] text-slate-600 space-y-1 mb-4 list-none p-0">
                    <li>• Suddivisione attività operative</li>
                    <li>• Definizione delle priorità</li>
                    <li>• Assegnazione delle risorse</li>
                  </ul>
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Entro 48 ore lavorative
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-amber-600 mt-0 flex items-center gap-2"><FileText className="w-5 h-5" /> 3. Proposte progettuali</h3>
                  <p className="text-xs text-slate-500 mb-4">Il progetto deve essere completato internamente prima della presentazione al cliente.</p>
                  <p className="text-[10px] text-slate-600 mb-4">La proposta deve essere condivisa con Account Manager, director coinvolti e, quando necessario, con il CMO.</p>
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Almeno 3 giorni lavorativi prima
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-purple-600 mt-0 flex items-center gap-2"><Palette className="w-5 h-5" /> 4. Produzione materiali creativi</h3>
                  <p className="text-xs text-slate-500 mb-4">Sviluppo materiali visivi e creativi sulla base dei task assegnati.</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg text-[10px]">
                      <span className="font-bold block">Creatività social:</span> 24–48h
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg text-[10px]">
                      <span className="font-bold block">Format/Template:</span> 48–72h
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg text-[10px]">
                      <span className="font-bold block">Video/Reel:</span> 48–72h
                    </div>
                    <div className="p-2 bg-slate-50 rounded-lg text-[10px]">
                      <span className="font-bold block">Campagne:</span> 3–5gg
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">Tempistiche concordate con Executive e Account.</p>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-brand-red mt-0 flex items-center gap-2"><RefreshCw className="w-5 h-5" /> 5. Revisioni materiali</h3>
                  <p className="text-xs text-slate-500 mb-4">Gestione ordinata delle modifiche per evitare cicli infiniti.</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 mb-4 list-none p-0">
                    <li className="flex justify-between"><span>Revisioni semplici:</span> <span className="font-bold">24h</span></li>
                    <li className="flex justify-between"><span>Revisioni strutturali:</span> <span className="font-bold">48h</span></li>
                  </ul>
                  <p className="text-[10px] text-slate-400 italic">Richieste raccolte in modo chiaro e condivise in un’unica soluzione.</p>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-blue-600 mt-0 flex items-center gap-2"><Globe className="w-5 h-5" /> 6. Progetti digitali</h3>
                  <p className="text-xs text-slate-500 mb-4">Attività relative a siti web o contenuti digitali.</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 mb-4 list-none p-0">
                    <li className="flex justify-between"><span>Aggiornamento contenuti:</span> <span className="font-bold">24–48h</span></li>
                    <li className="flex justify-between"><span>Nuove pagine:</span> <span className="font-bold">48–72h</span></li>
                    <li className="flex justify-between"><span>Ottimizzazione SEO:</span> <span className="font-bold">48h</span></li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-indigo-600 mt-0 flex items-center gap-2"><MessageSquare className="w-5 h-5" /> 7. Piano editoriale social</h3>
                  <p className="text-xs text-slate-500 mb-4">Sviluppo del piano editoriale post-strategia.</p>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between text-[10px]"><span>Analisi & Benchmark:</span> <span>1gg</span></div>
                    <div className="flex justify-between text-[10px]"><span>Cluster & Strategia:</span> <span>1gg</span></div>
                    <div className="flex justify-between text-[10px]"><span>Piano Operativo:</span> <span>1gg</span></div>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Totale: 2–3 giorni lavorativi
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-pink-600 mt-0 flex items-center gap-2"><Zap className="w-5 h-5" /> 8. Pubblicazione social</h3>
                  <p className="text-xs text-slate-500 mb-4">Programmazione e pubblicazione secondo calendario approvato.</p>
                  <div className="flex items-center gap-2 text-pink-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Almeno 48 ore prima
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-orange-600 mt-0 flex items-center gap-2"><Plus className="w-5 h-5" /> 9. Richieste extra</h3>
                  <p className="text-xs text-slate-500 mb-4">Valutazione interna delle attività non previste dal progetto.</p>
                  <p className="text-[10px] text-slate-600 mb-4">Valutazione Account → Responsabile Reparto → Eventuale CMO.</p>
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Entro 24 ore lavorative
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-red-600 mt-0 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> 10. Richieste urgenti</h3>
                  <p className="text-xs text-slate-500 mb-4">Gestione solo quando realmente necessarie dopo valutazione.</p>
                  <div className="flex items-center gap-2 text-red-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Risposta interna: 4–8 ore
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-cyan-600 mt-0 flex items-center gap-2"><Users className="w-5 h-5" /> 11. Aggiornamenti Partner</h3>
                  <p className="text-xs text-slate-500 mb-4">Mantenere aggiornato il Partner sull’avanzamento del progetto.</p>
                  <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Aggiornamento settimanale
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-violet-600 mt-0 flex items-center gap-2"><PieChart className="w-5 h-5" /> 12. Reportistica mensile</h3>
                  <p className="text-xs text-slate-500 mb-4">Preparazione e condivisione report di performance e insight.</p>
                  <div className="flex items-center gap-2 text-violet-600 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Entro i primi 5gg lavorativi
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="text-slate-700 mt-0 flex items-center gap-2"><Folder className="w-5 h-5" /> 13. Archiviazione</h3>
                  <p className="text-xs text-slate-500 mb-4">Archiviazione corretta su OneDrive per tracciabilità.</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold text-xs pt-3 border-t border-slate-100">
                    <Clock className="w-4 h-4" /> Entro 24 ore dalla consegna
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl">
                <h2 className="text-slate-900 mt-0 mb-6">14. Principi di gestione degli SLA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-slate-600 m-0">Le attività devono essere pianificate con anticipo.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-slate-600 m-0">Le urgenze devono essere limitate ai casi realmente necessari.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-slate-600 m-0">Le richieste dell’Azienda Partner devono essere valutate prima di essere accettate.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-slate-600 m-0">I team devono lavorare in coordinamento rispettando le tempistiche concordate.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'ceo' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Chief Executive Officer (CEO)</h1>
              <p className="text-lg">Il Chief Executive Officer è la figura di vertice dell’agenzia, responsabile della visione strategica, della sostenibilità finanziaria e della crescita complessiva dell’organizzazione.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Definire la rotta dell’agenzia, assicurare l’eccellenza operativa e rappresentare PubliOne verso i principali stakeholder e il mercato. Il CEO garantisce che ogni attività sia allineata ai valori e agli obiettivi a lungo termine della società.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Visione & Strategia</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Guida l'evoluzione dell'agenzia anticipando i cambiamenti del mercato e definendo il posizionamento competitivo.</p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Definizione degli obiettivi strategici annuali e pluriennali</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Approvazione di nuovi investimenti e partnership strategiche</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Supervisione della cultura aziendale e dei valori</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Governance & Finanza</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Assicura la solidità economica e il corretto funzionamento dei processi decisionali interni.</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Performance Finanziaria</p>
                      <p className="text-[10px] text-slate-500">Monitoraggio dei KPI economici e approvazione del budget globale.</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Risk Management</p>
                      <p className="text-[10px] text-slate-500">Identificazione e mitigazione dei rischi operativi e reputazionali.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-6">Responsabilità Chiave</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Target className="w-5 h-5 text-brand-blue mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Leadership</p>
                    <p className="text-[10px] text-slate-500">Ispirazione e guida del management team.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Crescita</p>
                    <p className="text-[10px] text-slate-500">Espansione del business e acquisizione grandi account.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Users className="w-5 h-5 text-purple-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Relazioni</p>
                    <p className="text-[10px] text-slate-500">Rappresentanza istituzionale dell'agenzia.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Scale className="w-5 h-5 text-brand-red mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Etica</p>
                    <p className="text-[10px] text-slate-400">Garanzia di integrità e conformità normativa.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                <h3 className="text-brand-blue mt-0">Interazione con la Struttura</h3>
                <p className="text-sm text-brand-blue/80">Il CEO lavora a stretto contatto con il **CMO** per la traduzione della visione in operatività e con i **Directors** per la supervisione delle aree di eccellenza. Presiede le riunioni di coordinamento strategico e interviene nelle decisioni ad alto impatto per l'agenzia.</p>
              </div>
            </motion.div>
          )}

          {activeSection === 'sales-dir' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Sales & Client Director</h1>
              <p className="text-lg">Il Sales & Client Director è il responsabile dello sviluppo commerciale dell’agenzia e della gestione strategica delle relazioni con i grandi Partner (Client Direction).</p>
              
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-12">
                <h3 className="text-emerald-700 mt-0 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-emerald-800/80 mb-0">Espandere il portfolio clienti dell’agenzia attraverso attività di New Business e consolidare i rapporti esistenti garantendo la massima soddisfazione del Partner e l’individuazione di nuove opportunità di crescita (Upselling).</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Sviluppo Commerciale (Sales)</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Identificazione di nuovi lead e gestione del funnel di vendita fino alla chiusura del contratto.</p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Ricerca e scouting di nuove opportunità di mercato</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Presentazione delle credenziali dell'agenzia ai prospect</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Negoziazione economica e contrattuale</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Client Direction</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Supervisione strategica degli account e mantenimento delle relazioni ad alto livello con i Partner.</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-emerald-600 text-[10px] uppercase mb-1">Customer Satisfaction</p>
                      <p className="text-[10px] text-slate-500">Monitoraggio costante della qualità percepita dal cliente.</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-emerald-600 text-[10px] uppercase mb-1">Strategic Upselling</p>
                      <p className="text-[10px] text-slate-500">Individuazione di bisogni latenti e proposta di nuovi servizi.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-6">Responsabilità Operative</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Briefcase className="w-5 h-5 text-emerald-600 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">New Business</p>
                    <p className="text-[10px] text-slate-500">Apertura nuovi mercati e settori.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Users className="w-5 h-5 text-brand-blue mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Networking</p>
                    <p className="text-[10px] text-slate-500">Gestione PR commerciali e relazioni.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <FileText className="w-5 h-5 text-purple-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Proposte</p>
                    <p className="text-[10px] text-slate-500">Supervisione offerte commerciali.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <BarChart className="w-5 h-5 text-brand-red mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Reporting</p>
                    <p className="text-[10px] text-slate-400">Analisi pipeline e forecast vendite.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <h3 className="text-emerald-700 mt-0">Collaborazione con il Team</h3>
                <p className="text-sm text-emerald-800/80">Il Sales & Client Director collabora strettamente con il **CEO** per la definizione degli obiettivi di crescita e con il **CMO** per l'allineamento tra promessa commerciale e capacità operativa. Supporta gli **Account Manager** nella gestione delle criticità e nelle fasi di rinnovo contrattuale.</p>
              </div>
            </motion.div>
          )}

          {activeSection === 'financial-dir' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Financial Director</h1>
              <p className="text-lg">Il Financial Director è responsabile della gestione finanziaria, della pianificazione economica e del controllo di gestione dell’agenzia, assicurando la redditività di ogni progetto e la solidità dell’intera struttura full-service.</p>
              
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-12">
                <h3 className="text-emerald-700 mt-0 flex items-center gap-2"><BarChart className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-emerald-600/80 mb-0">Ottimizzare le risorse finanziarie dell’agenzia, monitorare i margini di contribuzione dei progetti e supportare la direzione e gli account nella gestione dei budget dei Partner, garantendo equilibrio tra qualità del servizio e sostenibilità economica.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Pianificazione & Controllo</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Supervisiona la salute finanziaria dell'agenzia attraverso un monitoraggio costante dei flussi di cassa e dei costi operativi.</p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Elaborazione del budget annuale e dei forecast periodici</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Analisi della redditività per singolo Partner e per reparto</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Gestione dei flussi di cassa (Cash Flow Management)</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>Supervisione dei processi di fatturazione e recupero crediti</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Amministrazione & Strumenti</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Gestione operativa dei dati e della documentazione amministrativa tramite gli strumenti aziendali.</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-emerald-600 text-[10px] uppercase mb-1">Controllo Chronos</p>
                      <p className="text-[10px] text-slate-500">Supervisione e verifica del corretto caricamento dei dati finanziari da parte degli Account; monitoraggio scostamenti e richiesta di integrazioni/correzioni tempestive.</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-emerald-600 text-[10px] uppercase mb-1">Controllo Drive & Documentazione</p>
                      <p className="text-[10px] text-slate-500">Verifica della corretta archiviazione dei file amministrativi/fiscali su Drive da parte degli Account; richiesta di caricamento e compilazione della documentazione mancante.</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-emerald-600 text-[10px] uppercase mb-1">Supporto Account</p>
                      <p className="text-[10px] text-slate-500">Validazione economica dei preventivi e supporto nella negoziazione con i fornitori esterni.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-6">Responsabilità in un'Agenzia Full-Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Layers className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Margini Reparti</p>
                    <p className="text-[10px] text-slate-500">Analisi costi/ricavi di ogni singola area operativa.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <RefreshCw className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Procurement</p>
                    <p className="text-[10px] text-slate-500">Ottimizzazione dei costi d'acquisto dei servizi esterni.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <PieChart className="w-5 h-5 text-purple-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Reporting</p>
                    <p className="text-[10px] text-slate-500">Produzione di report finanziari per CEO e Board.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Scale className="w-5 h-5 text-brand-red mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Compliance</p>
                    <p className="text-[10px] text-slate-400">Garanzia di correttezza fiscale e amministrativa.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl">
                <h3 className="text-emerald-700 mt-0">Collaborazione Strategica</h3>
                <p className="text-sm text-emerald-600/80">Il Financial Director interagisce costantemente con il **CEO** per la pianificazione degli investimenti, con il **CMO** per la valutazione della sostenibilità dei nuovi progetti e con l'**Executive Manager** per l'analisi dell'efficienza delle risorse umane interne.</p>
              </div>
            </motion.div>
          )}

          {activeSection === 'cmo' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Chief Marketing Officer (CMO)</h1>
              <p className="text-lg">Il Chief Marketing Officer è la figura di coordinamento strategico dell’agenzia. Agisce come facilitatore dei flussi progettuali e punto di raccordo tra strategia, progettazione e operatività.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Garantire che i progetti siano coerenti, sostenibili e ben organizzati. Non svolge una funzione gerarchica ma facilita la collaborazione tra direzione, account, director e reparti operativi.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Valutazione & Perimetro</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Il CMO è il primo passaggio obbligatorio per ogni nuovo progetto o opportunità di upselling.</p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Valutazione complessità strategica e operativa</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Definizione del perimetro e dei servizi inclusi</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Verifica della sostenibilità operativa</span>
                    </li>
                    <li className="flex gap-3 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span>Orientamento del flusso di sviluppo proposta</span>
                    </li>
                  </ul>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Coordinamento Director</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Facilita il confronto tra le diverse funzioni strategiche per costruire una visione condivisa.</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Integrazione</p>
                      <p className="text-[10px] text-slate-500">Favorisce l’integrazione tra i contributi delle diverse aree (Creative, Media, Digital, etc.).</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Supporto Proposte</p>
                      <p className="text-[10px] text-slate-500">Verifica coerenza tra obiettivi e contenuti nelle proposte per nuovi Partner o progetti complessi.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-6">Ambiti di Intervento Prioritari</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <Plus className="w-5 h-5 text-brand-blue mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Nuovi Partner</p>
                    <p className="text-[10px] text-slate-500">Impostazione strategica iniziale.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Upselling</p>
                    <p className="text-[10px] text-slate-500">Sviluppo nuove opportunità.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <GitMerge className="w-5 h-5 text-purple-500 mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Multidisciplinari</p>
                    <p className="text-[10px] text-slate-500">Coordinamento tra più reparti.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <AlertTriangle className="w-5 h-5 text-brand-red mb-2" />
                    <p className="font-bold text-xs mb-1 text-slate-900">Criticità</p>
                    <p className="text-[10px] text-slate-400">Gestione urgenze o blocchi.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2">
                  <h2>Relazione con i Ruoli</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold text-xs">ACC</div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 m-0">Supporto agli Account</h4>
                        <p className="text-[10px] text-slate-500 m-0">Punto di confronto per impostazione progetti, gestione richieste extra e priorità operative.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">DIR</div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 m-0">Relazione con la Direzione</h4>
                        <p className="text-[10px] text-slate-500 m-0">Fornisce letture strategiche dei progetti in ingresso e segnala criticità organizzative.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">OPS</div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 m-0">Presidio dei Flussi</h4>
                        <p className="text-[10px] text-slate-500 m-0">Favorisce l'uso corretto degli strumenti, riduce le gestioni informali e promuove la pianificazione.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Limiti del Ruolo</h3>
                  <p className="text-[10px] text-slate-500 mb-4 italic">Il CMO è un facilitatore e non sostituisce le responsabilità dirette degli altri ruoli:</p>
                  <ul className="space-y-3 list-none p-0">
                    <li className="flex gap-2 items-start">
                      <X className="w-3 h-3 text-brand-red mt-0.5 flex-shrink-0" />
                      <p className="text-[10px] text-slate-600 m-0"><strong>No Account:</strong> Non gestisce la relazione diretta con il Partner.</p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <X className="w-3 h-3 text-brand-red mt-0.5 flex-shrink-0" />
                      <p className="text-[10px] text-slate-600 m-0"><strong>No Director:</strong> Non sostituisce la guida tecnica di area.</p>
                    </li>
                    <li className="flex gap-2 items-start">
                      <X className="w-3 h-3 text-brand-red mt-0.5 flex-shrink-0" />
                      <p className="text-[10px] text-slate-600 m-0"><strong>No Executive:</strong> Non gestisce l'operatività quotidiana.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                  <h3 className="text-brand-blue mt-0">Principi di Lavoro</h3>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0">Facilitazione dei processi decisionali.</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0">Collaborazione trasversale tra reparti.</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0">Chiarezza nelle priorità progettuali.</p>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0">Coerenza tra strategia e operatività.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Competenze Richieste</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Visione Strategica', 'Marketing & Communication', 'Project Management', 'Problem Solving', 'Mediazione', 'Sintesi'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'strategy' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Strategic Director</h1>
              <p className="text-lg">Lo Strategic Director è responsabile della definizione della strategia dei progetti dell’agenzia. Analizza contesto, mercato, competitor e comportamento del pubblico per costruire l’impostazione strategica.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Costruire l’impostazione strategica dei progetti, supportare la costruzione delle proposte e orientare le decisioni che guideranno lo sviluppo delle attività creative, digitali, media ed eventi.</p>
              </div>

              <section className="mb-12">
                <h2>Ambiti di Intervento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { title: 'Nuovi Partner', desc: 'Fase iniziale di progettazione per nuove acquisizioni.' },
                    { title: 'Nuove Progettualità', desc: 'Sviluppo di nuove direzioni strategiche.' },
                    { title: 'Multidisciplinari', desc: 'Progetti che coinvolgono più reparti dell\'agenzia.' },
                    { title: 'Evoluzioni Strategiche', desc: 'Revisione o aggiornamento di progetti esistenti.' },
                    { title: 'Posizionamento', desc: 'Attività di branding o riposizionamento sul mercato.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-slate-900 text-xs mb-1 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800 flex items-center gap-2"><Search className="w-5 h-5 text-brand-blue" /> Fase di Analisi</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white border border-slate-100 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Analisi di Scenario</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Studio del contesto competitivo, del settore di riferimento, dei trend di mercato e dei comportamenti del pubblico.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Analisi dei Competitor</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Studio del posizionamento, delle strategie di comunicazione, dei messaggi e delle opportunità di differenziazione.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Analisi del Brand</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Analisi dell'identità, dei valori, del tono di voce e dei punti di forza/debolezza dell'Azienda Partner.</p>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800 flex items-center gap-2"><PieChart className="w-5 h-5 text-brand-red" /> Definizione Strategica</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Posizionamento Strategico</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Definizione della direzione strategica, dei messaggi chiave, dei territori di comunicazione e delle linee guida narrative.</p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Linee Guida Strategiche</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Costruzione del racconto del brand e dell'approccio strategico alle attività di marketing per orientare i team operativi.</p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Supporto alle Proposte</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Sviluppo delle argomentazioni progettuali e costruzione della parte strategica delle presentazioni per i Partner.</p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="mb-12">
                <h2>Collaborazione Interfunzionale</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold text-xs">CD</div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 m-0">Direzione Creativa</h4>
                      <p className="text-[10px] text-slate-500 m-0">Fornisce insight rilevanti e orienta il messaggio strategico per lo sviluppo dei concept creativi.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">MD</div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 m-0">Media & Digital</h4>
                      <p className="text-[10px] text-slate-500 m-0">Collabora per integrare la strategia nell'impostazione delle campagne media e delle attività digitali.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">ACC</div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 m-0">Account Manager</h4>
                      <p className="text-[10px] text-slate-500 m-0">Supporta la costruzione delle proposte e verifica la coerenza tra brief e sviluppo operativo.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">EXE</div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 m-0">Executive Manager</h4>
                      <p className="text-[10px] text-slate-500 m-0">Verifica che l'implementazione operativa delle attività rispetti le linee guida strategiche definite.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">Struttura Organizzativa</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Direzione / Client Director
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    CMO (Facilitazione e Coordinamento)
                  </div>
                  <ArrowDown className="w-4 h-4 text-brand-red" />
                  <div className="px-6 py-3 bg-brand-red text-white rounded-xl text-[10px] font-bold w-full max-w-sm text-center shadow-lg shadow-brand-red/20">
                    Strategy Director (Director)
                  </div>
                  <ArrowDown className="w-4 h-4 text-brand-red" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    Executive Manager / Team Operativi
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                  <h3 className="text-brand-blue mt-0">Principi di Lavoro</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0"><strong>Data Driven:</strong> Approccio analitico basato su dati e trend reali.</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0"><strong>Integrazione:</strong> Connessione costante tra strategia e operatività.</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-brand-blue/80 m-0"><strong>Chiarezza:</strong> Traduzione di analisi complesse in indicazioni semplici.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Competenze Chiave</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Analisi di Mercato', 'Brand Strategy', 'Consumer Insight', 'Sintesi Strategica', 'Posizionamento', 'Marketing Strategy'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'digital-dir' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Digital Strategy Director</h1>
              <p className="text-lg">Responsabile della definizione e dello sviluppo delle strategie digitali dei progetti dell’agenzia. Integra visione strategica, conoscenza tecnologica e coordinamento operativo.</p>
              
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mb-12">
                <h3 className="text-purple-700 mt-0 flex items-center gap-2"><Globe className="w-5 h-5" /> 1. Obiettivo del Ruolo</h3>
                <p className="text-sm text-purple-600/80 mb-0">Progettare ecosistemi digitali efficaci, coordinare le attività legate ai canali online e guidare lo sviluppo di soluzioni digitali come siti web, piattaforme, attività SEO, marketing automation e strategie di acquisizione digitale.</p>
              </div>

              <section className="mb-12">
                <h2>2. Posizionamento nella Struttura</h2>
                <p className="text-sm text-slate-600 mb-6">Il Digital Strategy Director è un <strong>Director</strong> dell’agenzia e lavora in coordinamento con:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { role: 'CMO', desc: 'Allineamento strategico dei progetti.' },
                    { role: 'Account Manager', icon: Users, desc: 'Costruzione proposte e gestione Partner.' },
                    { role: 'Strategic Director', icon: Compass, desc: 'Impostazione strategica generale.' },
                    { role: 'Creative Director', icon: PenTool, desc: 'Integrazione tra digitale e comunicazione.' },
                    { role: 'Media Director', icon: PieChart, desc: 'Integrazione tra digitale e investimenti media.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-purple-600 text-[10px] mb-1 uppercase tracking-wider">{item.role}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>3. Ambiti di Intervento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Strategie digitali dei progetti',
                    'Sviluppo siti web e piattaforme digitali',
                    'Strategie SEO, AEO e GEO',
                    'Strategie di marketing automation',
                    'Strategie di acquisizione e conversione online',
                    'Integrazione tra canali digitali e attività di comunicazione'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-purple-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">4. Definizione Strategie</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Definisce l’impostazione strategica delle attività digitali:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Definire il ruolo dei canali digitali nel progetto.</li>
                    <li className="flex gap-2">• Individuare le piattaforme più adatte agli obiettivi.</li>
                    <li className="flex gap-2">• Progettare l’ecosistema digitale del progetto.</li>
                    <li className="flex gap-2">• Definire gli obiettivi e le metriche di performance.</li>
                  </ul>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">5. Progettazione Ecosistemi</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Architettura digitale dei progetti:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Siti web e Landing page.</li>
                    <li className="flex gap-2">• Piattaforme digitali complesse.</li>
                    <li className="flex gap-2">• Integrazione Social, Sito e Marketing Automation.</li>
                    <li className="flex gap-2">• Coerenza e funzionalità agli obiettivi di progetto.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">6. Supervisione SEO, AEO, GEO</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Ottimizzazione per motori di ricerca e AI:</p>
                  <div className="space-y-2">
                    {['Analisi SEO', 'Keyword strategiche', 'Struttura contenuti', 'Posizionamento organico'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">7. Marketing Automation</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Strategie di acquisizione e nurturing:</p>
                  <div className="space-y-2">
                    {['Progettazione funnel', 'Integrazione CRM', 'Logiche di nurturing', 'Monitoraggio performance'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>
              </div>

              <section className="mb-12 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="mt-0 text-slate-800">8. Coordinamento Progetti Web</h3>
                <p className="text-xs text-slate-600 mb-4">Supervisione dello sviluppo web dell’agenzia:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="text-[10px] text-purple-700 m-0">Definire la struttura dei siti web e coordinare il lavoro tra SEO director, grafici e sviluppatori.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <p className="text-[10px] text-purple-700 m-0">Verificare la coerenza tecnica e garantire che i siti rispondano agli obiettivi del progetto.</p>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">9. Reparto Creativo</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Integrazione tra design e strategia:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• User Experience (UX) dei progetti digitali.</li>
                    <li>• Coerenza tra contenuti e identità brand.</li>
                  </ul>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">10. Reparto Media</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Sinergia tra investimento e infrastruttura:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Strategie di acquisizione traffico.</li>
                    <li>• Analisi dei dati provenienti dalle attività online.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">11. Supporto Proposte</h3>
                  <p className="text-[10px] text-slate-600 m-0">Supporta la definizione dell’architettura digitale e la costruzione della parte tecnica delle presentazioni per rafforzare la solidità delle proposte.</p>
                </section>
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">12. Executive Manager</h3>
                  <p className="text-[10px] text-slate-600 m-0">Collabora per assicurare che le attività operative rispettino la strategia. L’Executive gestisce l’organizzazione, il Director mantiene la supervisione strategica.</p>
                </section>
              </div>

              <section className="mb-12">
                <h2>13. Documenti Digitali di Progetto</h2>
                <p className="text-xs text-slate-600 mb-4">Creazione di documenti strategici tramite Canva, PowerPoint o strumenti condivisi:</p>
                <div className="flex flex-wrap gap-3">
                  {['Strategie Digitali', 'Strutture Siti Web', 'Piani SEO', 'Progetti Marketing Automation'].map(doc => (
                    <div key={doc} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-700 shadow-sm">{doc}</div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2>14. Competenze Richieste</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Strategia Digitale', 'Ecosistemi Web', 'SEO, AEO, GEO', 'Marketing Automation', 'Data Analytics', 'Integrazione Canali'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-700 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">15. Principi di Lavoro</h3>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-purple-600" /> Integrazione tra strategia e comunicazione.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-purple-600" /> Progettazione di ecosistemi sostenibili.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-purple-600" /> Orientamento ai risultati e alle performance.</li>
                  </ul>
                </div>
              </div>

              <section className="mb-12">
                <h2>Coordinamento Team Operativi</h2>
                <p className="text-sm text-slate-600 mb-6">Il Digital Strategy Director coordina direttamente le seguenti figure operative per l'esecuzione della strategia:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                  <button 
                    onClick={() => setActiveSection('social')}
                    className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-purple-400 transition-colors group text-left"
                  >
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs mb-1">Social Media Manager</h4>
                      <p className="text-[10px] text-slate-500 m-0">Gestione e ottimizzazione comunicazione social.</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-500 transition-colors" />
                  </button>
                  <button 
                    onClick={() => setActiveSection('content')}
                    className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-purple-400 transition-colors group text-left"
                  >
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs mb-1">Content Coordinator</h4>
                      <p className="text-[10px] text-slate-500 m-0">Produzione e coordinamento contenuti editoriali.</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-purple-500 transition-colors" />
                  </button>
                </div>
              </section>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">16. Ruolo nell’Organizzazione</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Direzione / Client Director
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    CMO (Facilitazione e Coordinamento)
                  </div>
                  <ArrowDown className="w-4 h-4 text-purple-500" />
                  <div className="px-6 py-3 bg-purple-600 text-white rounded-xl text-[10px] font-bold w-full max-w-sm text-center shadow-lg shadow-purple-600/20">
                    Digital Strategy Director (Director)
                  </div>
                  <ArrowDown className="w-4 h-4 text-purple-500" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    Executive Manager
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Team Operativi
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'creative-dir' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Creative Director</h1>
              <p className="text-lg">Responsabile della direzione creativa dei progetti dell’agenzia. Guida lo sviluppo dei concept, garantisce la qualità visiva e narrativa e assicura la coerenza con il brand.</p>
              
              <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 mb-12">
                <h3 className="text-rose-700 mt-0 flex items-center gap-2"><Palette className="w-5 h-5" /> 1. Obiettivo del Ruolo</h3>
                <p className="text-sm text-rose-600/80 mb-0">Guidare lo sviluppo dei concept creativi, garantire la qualità visiva e narrativa delle produzioni e assicurare che le soluzioni siano coerenti con la strategia e l’identità del brand.</p>
              </div>

              <section className="mb-12">
                <h2>2. Posizionamento nella Struttura</h2>
                <p className="text-sm text-slate-600 mb-6">Il Creative Director è un <strong>Director</strong> dell’agenzia e lavora in coordinamento con:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { role: 'CMO', desc: 'Allineamento strategico dei progetti.' },
                    { role: 'Account Manager', icon: Users, desc: 'Gestione esigenze Azienda Partner.' },
                    { role: 'Strategic Director', icon: Compass, desc: 'Impostazione strategica dei progetti.' },
                    { role: 'Digital Strategy Director', icon: Globe, desc: 'Integrazione tra creatività e canali digitali.' },
                    { role: 'Media Director', icon: PieChart, desc: 'Integrazione tra creatività e pianificazione media.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-rose-600 text-[10px] mb-1 uppercase tracking-wider">{item.role}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>3. Ambiti di Intervento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Sviluppo dei concept creativi',
                    'Supervisione delle produzioni visive',
                    'Sviluppo di campagne di comunicazione',
                    'Definizione dell’identità visiva dei progetti',
                    'Direzione creativa delle produzioni grafiche e video'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-rose-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">4. Sviluppo Concept</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Guida lo sviluppo dell’idea creativa:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Definire l’idea creativa alla base del progetto.</li>
                    <li className="flex gap-2">• Sviluppare il concept delle campagne.</li>
                    <li className="flex gap-2">• Individuare il linguaggio visivo più adatto al brand.</li>
                    <li className="flex gap-2">• Costruire la narrativa creativa della comunicazione.</li>
                  </ul>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">5. Direzione Produzioni</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supervisione materiali prodotti:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Grafiche per campagne e social media.</li>
                    <li className="flex gap-2">• Contenuti video e motion.</li>
                    <li className="flex gap-2">• Materiali visivi per eventi e presentazioni.</li>
                    <li className="flex gap-2">• Garanzia di qualità, coerenza e efficacia.</li>
                  </ul>
                </section>
              </div>

              <section className="mb-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="mt-0 text-slate-800">6. Supervisione Reparto Grafico</h3>
                <p className="text-xs text-slate-600 mb-4">Coordina il lavoro dei grafici e dei visual designer:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-slate-100 rounded-xl">
                    <p className="text-[10px] text-slate-500 m-0">Fornire linee guida creative e verificare la qualità delle produzioni grafiche.</p>
                  </div>
                  <div className="p-4 bg-white border border-slate-100 rounded-xl">
                    <p className="text-[10px] text-slate-500 m-0">Approvare le proposte creative e supportare il team nello sviluppo delle idee.</p>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">7. Collaborazione Strategist</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Traduzione creativa della strategia:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Trasformare indicazioni strategiche in concept creativi.</li>
                    <li>• Costruire campagne coerenti e solide.</li>
                  </ul>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">8. Collaborazione Digital</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Integrazione creatività e canali digitali:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Design delle esperienze digitali e contenuti social.</li>
                    <li>• Coerenza visiva dei siti web e format digitali.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">9. Supporto Proposte</h3>
                  <p className="text-[10px] text-slate-600 m-0">Sviluppo idee creative, concept di campagna e linee visive delle presentazioni per rafforzare la qualità delle proposte.</p>
                </section>
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">10. Supervisione Qualitativa</h3>
                  <p className="text-[10px] text-slate-600 m-0">Verifica coerenza con il concept, qualità visiva, rispetto dell’identità brand ed efficacia dei messaggi.</p>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">11. Executive Manager</h3>
                  <p className="text-[10px] text-slate-600 m-0">Collabora per garantire che le attività creative vengano sviluppate secondo le tempistiche previste.</p>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">12. Documenti di Progetto</h3>
                  <p className="text-[10px] text-slate-600 m-0">Partecipa alla creazione di presentazioni creative, moodboard, concept visivi e linee guida di comunicazione.</p>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2>13. Competenze Richieste</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Direzione Creativa', 'Concept Development', 'Visual Design', 'Storytelling', 'Team Coordination', 'Advertising Campaigns'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-rose-100 text-rose-700 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">14. Principi di Lavoro</h3>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-rose-600" /> Qualità e coerenza delle soluzioni creative.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-rose-600" /> Integrazione tra creatività e strategia.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-rose-600" /> Sviluppo di idee innovative e rilevanti.</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">15. Ruolo nell’Organizzazione</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Direzione / Client Director
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    CMO (Facilitazione e Coordinamento)
                  </div>
                  <ArrowDown className="w-4 h-4 text-rose-500" />
                  <div className="px-6 py-3 bg-rose-600 text-white rounded-xl text-[10px] font-bold w-full max-w-sm text-center shadow-lg shadow-rose-600/20">
                    Creative Director (Director)
                  </div>
                  <ArrowDown className="w-4 h-4 text-rose-500" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    Executive Manager
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Team Creativi Operativi
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'media-dir' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Media Director</h1>
              <p className="text-lg">Responsabile della pianificazione e gestione delle strategie media dei progetti dell’agenzia. Definisce la distribuzione degli investimenti pubblicitari per massimizzare i risultati.</p>
              
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-12">
                <h3 className="text-blue-700 mt-0 flex items-center gap-2"><PieChart className="w-5 h-5" /> 1. Obiettivo del Ruolo</h3>
                <p className="text-sm text-blue-600/80 mb-0">Definire come distribuire gli investimenti pubblicitari sui diversi canali per massimizzare visibilità, performance e risultati per l’Azienda Partner.</p>
              </div>

              <section className="mb-12">
                <h2>2. Posizionamento nella Struttura</h2>
                <p className="text-sm text-slate-600 mb-6">Il Media Director è un <strong>Director</strong> dell’agenzia e lavora in coordinamento con:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { role: 'CMO', desc: 'Allineamento strategico dei progetti.' },
                    { role: 'Account Manager', icon: Users, desc: 'Gestione esigenze Azienda Partner.' },
                    { role: 'Strategic Director', icon: Compass, desc: 'Definizione della strategia generale.' },
                    { role: 'Digital Strategy Director', icon: Globe, desc: 'Integrazione tra media e canali digitali.' },
                    { role: 'Creative Director', icon: Palette, desc: 'Coerenza tra creatività e pianificazione media.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-blue-600 text-[10px] mb-1 uppercase tracking-wider">{item.role}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>3. Ambiti di Intervento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Definizione delle strategie media',
                    'Pianificazione degli investimenti pubblicitari',
                    'Gestione delle campagne media',
                    'Analisi delle performance delle campagne',
                    'Individuazione e gestione dei partner media'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">4. Definizione Strategie Media</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Distribuzione degli investimenti:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Individuare i canali più efficaci per il target.</li>
                    <li className="flex gap-2">• Definire il mix di canali media.</li>
                    <li className="flex gap-2">• Stabilire le modalità di distribuzione del budget.</li>
                    <li className="flex gap-2">• Individuare gli obiettivi di performance.</li>
                  </ul>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">5. Pianificazione Investimenti</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Sviluppo del piano media:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Canali utilizzati e distribuzione budget.</li>
                    <li className="flex gap-2">• Tempistiche delle campagne.</li>
                    <li className="flex gap-2">• Obiettivi di performance.</li>
                    <li className="flex gap-2">• Guida operativa per le attività pubblicitarie.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">6. Gestione Campagne</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supervisione sui diversi canali:</p>
                  <div className="space-y-2">
                    {['Campagne Digitali', 'Social Advertising', 'Piattaforme Online', 'Piattaforme Partner'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">7. Analisi Performance</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Analisi dei risultati:</p>
                  <div className="space-y-2">
                    {['Efficacia canali', 'Ritorno sugli investimenti (ROI)', 'Ottimizzazione campagne', 'Performance pubblicitarie'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>
              </div>

              <section className="mb-12 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="mt-0 text-slate-800">8. Individuazione Partner Media</h3>
                <p className="text-xs text-slate-600 mb-4">Identifica e gestisce le relazioni con i partner:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {['Piattaforme Pubblicitarie', 'Concessionarie Media', 'Partner Tecnologici'].map(partner => (
                    <div key={partner} className="p-4 bg-blue-50 rounded-xl text-center">
                      <p className="text-[10px] text-blue-700 font-bold m-0">{partner}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">9. Reparto Creativo</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Coerenza tra creatività e canali:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Adattamento creatività ai formati pubblicitari.</li>
                    <li>• Coerenza tra messaggi e contesto media.</li>
                  </ul>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">10. Reparto Digital</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Integrazione media e attività digitali:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Acquisizione traffico verso siti e piattaforme.</li>
                    <li>• Analisi dati integrata media/digital.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">11. Supporto Proposte</h3>
                  <p className="text-[10px] text-slate-600 m-0">Definizione strategia media, sviluppo piano media e costruzione della parte media delle presentazioni.</p>
                </section>
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">12. Executive Manager</h3>
                  <p className="text-[10px] text-slate-600 m-0">Collabora per garantire che le attività media vengano gestite correttamente e nei tempi previsti.</p>
                </section>
              </div>

              <section className="mb-12">
                <h2>13. Documenti di Pianificazione Media</h2>
                <p className="text-xs text-slate-600 mb-4">Creazione di documenti tramite Canva, PowerPoint o strumenti condivisi:</p>
                <div className="flex flex-wrap gap-3">
                  {['Piani Media', 'Analisi Performance', 'Report Campagne', 'Strategia Media'].map(doc => (
                    <div key={doc} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-700 shadow-sm">{doc}</div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2>14. Competenze Richieste</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Media Planning', 'Campaign Management', 'Data Analysis', 'Digital Channels', 'Performance Optimization'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">15. Principi di Lavoro</h3>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-blue-600" /> Approccio data-driven alla pianificazione.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-blue-600" /> Integrazione tra media e strategia.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-blue-600" /> Ottimizzazione continua delle campagne.</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">16. Ruolo nell’Organizzazione</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Direzione / Client Director
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    CMO (Facilitazione e Coordinamento)
                  </div>
                  <ArrowDown className="w-4 h-4 text-blue-500" />
                  <div className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-bold w-full max-w-sm text-center shadow-lg shadow-blue-600/20">
                    Media Director (Director)
                  </div>
                  <ArrowDown className="w-4 h-4 text-blue-500" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-700 w-full max-w-sm text-center">
                    Executive Manager
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Team Operativi Media
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'event-dir' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Event Director</h1>
              <p className="text-lg">Responsabile della progettazione, organizzazione e supervisione degli eventi realizzati dall’agenzia. Sviluppa concept coerenti con la strategia e coordina la produzione live.</p>
              
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 mb-12">
                <h3 className="text-amber-700 mt-0 flex items-center gap-2"><Video className="w-5 h-5" /> 1. Obiettivo del Ruolo</h3>
                <p className="text-sm text-amber-600/80 mb-0">Progettare e supervisionare eventi che rispettino gli standard qualitativi, le tempistiche e il budget, garantendo coerenza con la strategia di progetto.</p>
              </div>

              <section className="mb-12">
                <h2>2. Posizionamento nella Struttura</h2>
                <p className="text-sm text-slate-600 mb-6">L’Event Director è un <strong>Director</strong> e lavora in coordinamento con:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { role: 'CMO', desc: 'Allineamento strategico dei progetti.' },
                    { role: 'Account Manager', icon: Users, desc: 'Gestione relazione con Azienda Partner.' },
                    { role: 'Strategic Planner', icon: Compass, desc: 'Impostazione strategica eventi.' },
                    { role: 'Creative Director', icon: Palette, desc: 'Sviluppo identità creativa.' },
                    { role: 'Digital & Media', icon: Globe, desc: 'Integrazione comunicazione e media.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-amber-600 text-[10px] mb-1 uppercase tracking-wider">{item.role}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>3. Ambiti di Intervento</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Progettazione eventi aziendali e promozionali',
                    'Sviluppo dei concept degli eventi',
                    'Coordinamento delle produzioni live',
                    'Gestione dei fornitori e partner tecnici',
                    'Supervisione attività operative durante gli eventi'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-amber-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">4. Progettazione degli Eventi</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supporto all'impostazione progettuale:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Sviluppo del concept dell’evento.</li>
                    <li className="flex gap-2">• Definizione della struttura dell’evento.</li>
                    <li className="flex gap-2">• Progettazione dell’esperienza per il pubblico.</li>
                    <li className="flex gap-2">• Individuazione soluzioni tecniche e logistiche.</li>
                  </ul>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">5. Pianificazione Organizzativa</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Gestione ordinata della produzione:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Definizione delle fasi operative.</li>
                    <li className="flex gap-2">• Pianificazione tempistiche di produzione.</li>
                    <li className="flex gap-2">• Coordinamento dei fornitori tecnici.</li>
                    <li className="flex gap-2">• Organizzazione delle risorse coinvolte.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">6. Gestione Fornitori</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Individuazione e coordinamento:</p>
                  <div className="space-y-2">
                    {['Allestitori e Tecnici', 'Partner Logistici', 'Audio, Video e Luci', 'Servizi di Supporto'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">7. Produzioni Live</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supervisione operativa:</p>
                  <div className="space-y-2">
                    {['Coordinamento fornitori', 'Verifica allestimenti', 'Rispetto tempistiche', 'Qualità esperienza'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>
              </div>

              <section className="mb-12 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h3 className="mt-0 text-slate-800">8. Supervisione durante l’Evento</h3>
                <p className="text-xs text-slate-600 mb-4">Garantire la coerenza con il progetto approvato:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <p className="text-[10px] text-amber-700 m-0 font-bold mb-1">Operatività</p>
                    <p className="text-[10px] text-amber-600 m-0">Verifica corretto svolgimento e gestione criticità.</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <p className="text-[10px] text-amber-700 m-0 font-bold mb-1">Coordinamento</p>
                    <p className="text-[10px] text-amber-600 m-0">Gestione fornitori sul luogo dell'evento.</p>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">9. Reparto Creativo</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Identità visiva e creativa:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Concept visivo e scenografie.</li>
                    <li>• Materiali grafici per allestimenti.</li>
                  </ul>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">10. Reparto Digital & Media</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Integrazione e amplificazione:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Copertura digitale e social live.</li>
                    <li>• Integrazione con campagne di comunicazione.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">11. Supporto Proposte</h3>
                  <p className="text-[10px] text-slate-600 m-0">Sviluppo concept, struttura organizzativa e costruzione della parte progettuale delle presentazioni.</p>
                </section>
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">12. Executive Manager</h3>
                  <p className="text-[10px] text-slate-600 m-0">Collabora per assicurare che le attività operative siano organizzate correttamente.</p>
                </section>
              </div>

              <section className="mb-12">
                <h2>13. Documenti di Progetto Evento</h2>
                <p className="text-xs text-slate-600 mb-4">Creazione di documenti tramite Canva, PowerPoint o strumenti condivisi:</p>
                <div className="flex flex-wrap gap-3">
                  {['Concept Evento', 'Piani Organizzativi', 'Documenti di Produzione', 'Materiali di Supporto'].map(doc => (
                    <div key={doc} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-700 shadow-sm">{doc}</div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2>14. Competenze Richieste</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Event Management', 'Produzione Live', 'Coordinamento Fornitori', 'Logistica', 'Problem Solving'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">15. Principi di Lavoro</h3>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-amber-600" /> Pianificazione rigorosa delle attività.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-amber-600" /> Qualità dell’esperienza live.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-amber-600" /> Coordinamento efficace dei partner.</li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">16. Ruolo nell’Organizzazione</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Direzione / Client Director
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    CMO (Facilitazione e Coordinamento)
                  </div>
                  <ArrowDown className="w-4 h-4 text-amber-500" />
                  <div className="px-6 py-3 bg-amber-600 text-white rounded-xl text-[10px] font-bold w-full max-w-sm text-center shadow-lg shadow-amber-600/20">
                    Event Director (Director)
                  </div>
                  <ArrowDown className="w-4 h-4 text-amber-500" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    Executive Manager
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Team Operativi Eventi
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'directors' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Direzione Strategica di Area (Director)</h1>
              <p className="text-lg">I Director rappresentano le figure cardine della direzione strategica dell’agenzia. Definiscono la strategia, guidano lo sviluppo e garantiscono la qualità delle soluzioni.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Target className="w-5 h-5" /> Ruolo dei Director</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Intervengono principalmente nelle fasi di progettazione e nei progetti complessi (nuovi Partner, nuove progettualità, upselling strategico). Supervisionano il lavoro operativo garantendo elevati standard qualitativi.</p>
              </div>

              <h2>1. Struttura dei Director PubliOne</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mb-12">
                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-brand-blue transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-brand-blue m-0">Paolo</h3>
                    <span className="px-2 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-bold rounded uppercase">Creative</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Creative Director</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Direzione creativa</li>
                    <li>• Sviluppo concept</li>
                    <li>• Supervisione produzioni</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-emerald-600 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-emerald-600 m-0">Max</h3>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded uppercase">Media</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Media Director</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Pianificazione & Investimenti</li>
                    <li>• Ottimizzazione & Analisi</li>
                    <li>• Contrattazione fornitori</li>
                    <li>• Reportistica avanzata</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-brand-red transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-brand-red m-0">Roberta</h3>
                    <span className="px-2 py-1 bg-brand-red/10 text-brand-red text-[10px] font-bold rounded uppercase">Strategy</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Strategic Director</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Analisi strategica</li>
                    <li>• Posizionamento brand</li>
                    <li>• Linee guida di business</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-purple-600 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-purple-600 m-0">Gianmarco</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-[10px] font-bold rounded uppercase">Digital</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Digital Strategy Director</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Strategie digital & ecosistemi</li>
                    <li>• SEO, AEO, GEO, SEM</li>
                    <li>• Sviluppo siti & Innovazione</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-rose-600 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-rose-600 m-0">Lorena</h3>
                    <span className="px-2 py-1 bg-rose-100 text-rose-600 text-[10px] font-bold rounded uppercase">Events</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">Event Director</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Progettazione eventi</li>
                    <li>• Gestione produzioni live</li>
                    <li>• Coordinamento risorse esterne</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Coinvolgimento nei Progetti</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 text-[10px] font-bold">1</div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs m-0">Nuovi Partner</p>
                        <p className="text-[10px] text-slate-500">Definizione approccio strategico, struttura progetto e linee guida operative.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 text-[10px] font-bold">2</div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs m-0">Progetti Multidisciplinari</p>
                        <p className="text-[10px] text-slate-500">Collaborazione tra reparti (Creativo, Media, Digital, Eventi) per proposte integrate.</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 text-[10px] font-bold">3</div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs m-0">Evoluzioni Strategiche</p>
                        <p className="text-[10px] text-slate-500">Cambi di posizionamento, nuove strategie o espansione delle attività esistenti.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-red">Leadership & Team Operativi</h3>
                  <p className="text-xs text-slate-500 mb-4">Il Director ha la responsabilità di strutturare il team di lavoro per i progetti complessi:</p>
                  <ul className="text-xs text-slate-600 space-y-2 list-none p-0">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Individuare le risorse operative</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Assegnare responsabilità chiare</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Definire le priorità del progetto</li>
                  </ul>
                </section>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-6">Relazione Director ↔ Executive</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-brand-blue font-bold mb-4 uppercase tracking-wider text-xs">Il Director definisce</h4>
                    <ul className="space-y-3 list-none p-0">
                      <li className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                        <span className="text-sm text-slate-700">Linee guida strategiche</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                        <span className="text-sm text-slate-700">Priorità di business</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                        <span className="text-sm text-slate-700">Standard qualitativi elevati</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-brand-red font-bold mb-4 uppercase tracking-wider text-xs">L'Executive gestisce</h4>
                    <ul className="space-y-3 list-none p-0">
                      <li className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                        <span className="text-sm text-slate-700">Operatività quotidiana</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                        <span className="text-sm">Organizzazione del lavoro</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>
                        <span className="text-sm">Rispetto delle scadenze (On-time)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-xs text-slate-400 italic">"Confronto continuo, supervisione strategica del director e autonomia operativa dell'executive."</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2>Principi di Lavoro</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-white border border-slate-200 rounded-xl">
                      <p className="font-bold text-slate-800 text-xs mb-1">Leadership Strategica</p>
                      <p className="text-[10px] text-slate-500 m-0">Guidare lo sviluppo dei progetti con visione e competenza.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-xl">
                      <p className="font-bold text-slate-800 text-xs mb-1">Collaborazione Integrata</p>
                      <p className="text-[10px] text-slate-500 m-0">Lavorare in coordinamento con gli altri director per proposte coerenti.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-200 rounded-xl">
                      <p className="font-bold text-slate-800 text-xs mb-1">Responsabilità Operativa</p>
                      <p className="text-[10px] text-slate-500 m-0">Supportare il team nella fase esecutiva e nella creazione dei documenti (Canva/PPT).</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2>Struttura Operativa Team</h2>
                  <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl h-full">
                    <div className="flex flex-col items-center justify-center h-full space-y-4 not-prose">
                      <div className="px-4 py-2 bg-brand-blue text-white rounded-lg text-[10px] font-bold w-32 text-center">CMO</div>
                      <ArrowDown className="w-4 h-4 text-brand-blue/30" />
                      <div className="px-4 py-2 bg-white border border-brand-blue text-brand-blue rounded-lg text-[10px] font-bold w-32 text-center shadow-sm">Director</div>
                      <ArrowDown className="w-4 h-4 text-brand-blue/30" />
                      <div className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-[10px] font-bold w-32 text-center shadow-sm">Executive Manager</div>
                      <ArrowDown className="w-4 h-4 text-brand-blue/30" />
                      <div className="px-4 py-2 bg-slate-100 text-slate-400 rounded-lg text-[10px] font-bold w-32 text-center">Team Operativo</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'executive' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Executive Manager / Project Executive</h1>
              <p className="text-lg">L’Executive Manager rappresenta il primo livello di coordinamento operativo dei team. Trasforma le indicazioni strategiche e le esigenze progettuali in attività operative organizzate e pianificate.</p>
              
              <div className="bg-brand-red/5 p-6 rounded-2xl border border-brand-red/10 mb-12">
                <h3 className="text-brand-red mt-0 flex items-center gap-2"><Clock className="w-5 h-5" /> On-Time Delivery</h3>
                <p className="text-sm text-brand-red/80 mb-0">L’Executive garantisce che ogni attività sia consegnata nei tempi previsti, coordinando il lavoro quotidiano dei team operativi e monitorando costantemente l'avanzamento.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">Responsabilità Principali</h3>
                  <ul className="space-y-4 list-none p-0">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">1</div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs m-0">Pianificazione Operativa</p>
                        <p className="text-[10px] text-slate-500">Suddivisione del progetto in task e microtask, assegnazione risorse e scadenze interne.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">2</div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs m-0">Coordinamento Team</p>
                        <p className="text-[10px] text-slate-500">Riferimento quotidiano per le risorse, risoluzione dubbi operativi e facilitazione collaborazione.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">3</div>
                      <div>
                        <p className="font-bold text-slate-800 text-xs m-0">Monitoraggio & Controllo</p>
                        <p className="text-[10px] text-slate-500">Verifica costante del rispetto delle scadenze e primo controllo qualitativo delle consegne interne.</p>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Collaborazioni Chiave</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Con il Director</p>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Riceve l'indirizzo strategico e gestisce l'operatività. Si confronta per chiarire dubbi o ricevere indicazioni tecniche.</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl">
                      <p className="font-bold text-brand-red text-[10px] uppercase mb-1">Con l'Account</p>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Fornisce aggiornamenti sullo stato delle attività e segnala ritardi. Supporta l'Account con informazioni operative per il Partner.</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4"><ListTodo className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">Gestione Task</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed m-0">Organizzazione del lavoro su Chronos e piattaforme di task management. Tracciabilità totale di ogni attività.</p>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4"><ShieldCheck className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">Qualità</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed m-0">Primo filtro qualitativo: verifica coerenza con il brief e correttezza tecnica prima della consegna all'Account.</p>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4"><RefreshCw className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">Revisioni</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed m-0">Coordinamento delle modifiche richieste, raccolta indicazioni e verifica della corretta applicazione.</p>
                </div>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">Ruolo nell’Organizzazione</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-500 w-full max-w-sm text-center">
                    Direzione / Client Director
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    CMO (Coordinamento Strategico)
                  </div>
                  <ArrowDown className="w-4 h-4 text-slate-400" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-medium text-slate-600 w-full max-w-sm text-center">
                    Director (Indirizzo Strategico)
                  </div>
                  <ArrowDown className="w-4 h-4 text-brand-red" />
                  <div className="px-6 py-3 bg-brand-red text-white rounded-xl text-[10px] font-bold w-full max-w-sm text-center shadow-lg shadow-brand-red/20">
                    Executive Manager (Coordinamento Operativo)
                  </div>
                  <ArrowDown className="w-4 h-4 text-brand-red" />
                  <div className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl text-[10px] font-bold w-full max-w-sm text-center">
                    Team Operativi (Produzione)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2>Principi di Lavoro</h2>
                  <div className="space-y-3">
                    <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-slate-600 m-0"><strong>Organizzazione:</strong> Pianificazione metodica di ogni fase operativa.</p>
                    </div>
                    <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-slate-600 m-0"><strong>Tracciabilità:</strong> Utilizzo di strumenti ufficiali (Teams, Task) per ogni decisione.</p>
                    </div>
                    <div className="flex gap-3 p-4 bg-white border border-slate-200 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                      <p className="text-xs text-slate-600 m-0"><strong>Efficienza:</strong> Ottimizzazione dei carichi di lavoro e gestione delle priorità.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Competenze Richieste</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Hard Skills</p>
                      <ul className="text-[10px] text-slate-600 space-y-1 list-none p-0">
                        <li>• Project Management</li>
                        <li>• Pianificazione Task</li>
                        <li>• Controllo Qualità</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Soft Skills</p>
                      <ul className="text-[10px] text-slate-600 space-y-1 list-none p-0">
                        <li>• Problem Solving</li>
                        <li>• Coordinamento Team</li>
                        <li>• Comunicazione Efficace</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-[10px] text-slate-500 italic">"L’Executive non definisce la strategia, ma ne garantisce l’esecuzione impeccabile."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'account' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Account Manager</h1>
              <p className="text-lg">L’Account Manager è il punto di connessione tra commerciale, strategia e operatività. È responsabile della gestione progettuale, del coordinamento tra i reparti e della formalizzazione operativa.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Target className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <ul className="text-sm text-brand-blue/80 space-y-1 mb-0 list-none p-0">
                  <li>• Gestione Aziende Partner attivi e sviluppo nuove progettualità</li>
                  <li>• Gestione upselling e coordinamento director</li>
                  <li>• Caricamento e gestione commesse su Chronos</li>
                  <li>• Caricamento documentazione amministrativa e file di progetto su Drive</li>
                  <li>• Supervisione della documentazione di progetto</li>
                </ul>
              </div>

              <h2>1. Gestione Nuovi Progetti & Upselling</h2>
              <p>Ogni progetto entra nel flusso operativo attraverso tre modalità principali:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4"><Plus className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Nuovo Partner</h4>
                  <p className="text-xs text-slate-500">Acquisizione commerciale o contatto diretto. Richiede progettazione completa e strategia.</p>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-4"><TrendingUp className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Upselling</h4>
                  <p className="text-xs text-slate-500">Nuove attività su partner esistente. Progettazione rapida e integrata nel progetto attivo.</p>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4"><RefreshCw className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Ongoing</h4>
                  <p className="text-xs text-slate-500">Sviluppo naturale e operativo della collaborazione in corso. Flusso meno strategico.</p>
                </div>
              </div>

              <section className="mb-12">
                <h3>Punto di Ingresso Decisionale</h3>
                <p>Ogni nuova opportunità (da Loris, Giulio o Partner) deve essere condivisa con il <strong>CMO</strong>, che agisce come filtro strategico:</p>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-brand-blue text-sm mb-2">Ruolo del CMO</h4>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Valuta la fattibilità del progetto</li>
                        <li>• Definisce il livello strategico necessario</li>
                        <li>• Decide il coinvolgimento dei director</li>
                        <li>• Orienta la struttura della proposta</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-white border border-slate-100 rounded-xl">
                        <p className="font-bold text-slate-800 text-[10px] uppercase mb-1">Percorso Director</p>
                        <p className="text-[10px] text-slate-500">Progetti complessi: Debrief interno con CMO, Director e Account.</p>
                      </div>
                      <div className="p-3 bg-white border border-slate-100 rounded-xl">
                        <p className="font-bold text-slate-800 text-[10px] uppercase mb-1">Percorso Account</p>
                        <p className="text-[10px] text-slate-500">Progetti semplici: Gestione diretta dell'Account con operativi.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h3>Sviluppo della Proposta</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Riunione Preliminare</h4>
                      <p className="text-xs text-slate-500 m-0">Definizione obiettivi, servizi, strategia e struttura della presentazione (Canva/PPT con template ufficiale).</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Project Integration</h4>
                      <p className="text-xs text-slate-500 m-0">I Director creano i contenuti tecnici; l'Account armonizza il documento garantendo coerenza totale.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Validazione & Formalizzazione</h4>
                      <p className="text-xs text-slate-500 m-0">Approvazione interna (CMO/Client Director) e caricamento commessa su Chronos dopo l'ok del Partner.</p>
                    </div>
                  </div>
                </div>
              </section>

              <h2>2. Gestione Operativa del Progetto</h2>
              <p>Una volta approvato, l'Account diventa il responsabile della <strong>delivery</strong> del progetto.</p>

              <div className="space-y-8">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-blue">Attivazione su Chronos</h3>
                  <p className="text-sm text-slate-500 mb-4">Passaggio obbligatorio prima dell'avvio operativo.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 text-xs mb-2">Pianificazione Risorse</h4>
                      <p className="text-[10px] text-slate-500">Inserimento task, microtask, ore previste per ogni team e risorse coinvolte.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 text-xs mb-2">Gestione Fornitori</h4>
                      <p className="text-[10px] text-slate-500">Caricamento partner esterni e costi previsti. Vidimazione finale del CMO o Client Director.</p>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-red">Organizzazione & Controllo</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0"><Users className="w-4 h-4" /></div>
                        <div>
                          <p className="font-bold text-slate-800 text-xs m-0">Comunicazione Interna</p>
                          <p className="text-[10px] text-slate-500">Solo strumenti ufficiali (Teams). Chat dedicate e call rapide. No corridoi.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0"><Folder className="w-4 h-4" /></div>
                        <div>
                          <p className="font-bold text-slate-800 text-xs m-0">Gestione File</p>
                          <p className="text-[10px] text-slate-500">Archiviazione ordinata su OneDrive. Cartelle aggiornate dall'inizio alla fine.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0"><Calendar className="w-4 h-4" /></div>
                        <div>
                          <p className="font-bold text-slate-800 text-xs m-0">Riunioni Settimanali</p>
                          <p className="text-[10px] text-slate-500">Brevi e operative per verificare on-time, ritardi o blocchi operativi.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center flex-shrink-0"><CheckSquare className="w-4 h-4" /></div>
                        <div>
                          <p className="font-bold text-slate-800 text-xs m-0">Controllo Creatività</p>
                          <p className="text-[10px] text-slate-500">Validazione Executive (qualità) → Validazione Account (coerenza progetto).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Gestione Richieste & Relazione</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-3">Richieste Extra (On Top/Urgenti)</h4>
                      <p className="text-xs text-slate-500 mb-4 leading-relaxed">Mai accettare automaticamente. Confronto obbligatorio con Responsabile di Reparto e CMO per valutare fattibilità e impatto.</p>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl text-[10px] text-slate-600 italic">
                        "Proteggere il carico di lavoro interno assicurando sostenibilità e priorità."
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-3">Relazione con il Partner</h4>
                      <ul className="text-xs text-slate-600 space-y-2">
                        <li>• <strong>Aggiornamenti:</strong> Report periodici su stato, attività e milestone.</li>
                        <li>• <strong>Tracciabilità:</strong> Ogni decisione deve essere documentata (no accordi informali).</li>
                        <li>• <strong>Gestione Ritardi:</strong> Comunicazione coordinata sempre con il CMO.</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 p-8 bg-white border border-slate-200 rounded-3xl">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">Schema Sintetico del Flusso</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  {[
                    'Ingresso Progetto (Loris/Giulio/Partner)',
                    'Condivisione con CMO (Filtro Strategico)',
                    'Decisione Percorso (Account / Director)',
                    'Sviluppo Documento Condiviso (Canva/PPT)',
                    'Integrazione Account (Project Integrator)',
                    'Validazione Interna (CMO/Client Director)',
                    'Caricamento Chronos & Attivazione',
                    'Monitoraggio & Delivery Progetto'
                  ].map((step, i) => (
                    <React.Fragment key={i}>
                      <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 w-full max-w-md text-center">
                        {step}
                      </div>
                      {i < 7 && <ArrowDown className="w-4 h-4 text-brand-red" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                <h3 className="text-brand-blue mt-0">Principi Operativi Fondamentali</h3>
                <ul className="text-sm text-brand-blue/80 space-y-2 mb-0">
                  <li><CheckCircle2 className="w-4 h-4 inline mr-2 text-brand-red" /> Coinvolgere sempre il CMO nei nuovi progetti.</li>
                  <li><CheckCircle2 className="w-4 h-4 inline mr-2 text-brand-red" /> Garantire allineamento costante con la direzione.</li>
                  <li><CheckCircle2 className="w-4 h-4 inline mr-2 text-brand-red" /> Mantenere una visione completa e tracciabile del progetto.</li>
                  <li><CheckCircle2 className="w-4 h-4 inline mr-2 text-brand-red" /> Assicurare la corretta formalizzazione su Chronos.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeSection === 'social' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Social Media Manager</h1>
              <p className="text-lg">Il Social Media Manager è responsabile della progettazione, gestione e ottimizzazione della comunicazione social dei Aziende Partner PubliOne.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Target className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Trasformare il brief dell'Azienda Partner in una strategia editoriale coerente, creativa e performante, coordinando le attività operative fino alla pubblicazione e alla reportistica. Il ruolo integra attività strategiche, creative, operative e analitiche.</p>
              </div>

              <h2>1. Flusso di Lavoro</h2>
              <div className="space-y-8">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-blue">Fase 1: Strategia e Analisi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Interpretazione Brief</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Analisi obiettivi, posizionamento brand, target, tono di voce e KPI. Se incompleto, è responsabilità del SMM ricercare le informazioni in autonomia per non bloccare il processo.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Benchmark e Insight</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Analisi competitor e pagine rilevanti. Identificazione formati performanti e trend di comunicazione da inserire nelle slide di strategia.</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">Pilastri di Comunicazione (Hub & Spoke)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Pillar Content</p>
                        <p className="text-[10px] text-slate-500">Contenuto principale, ampio e completo (es. Guida definitiva).</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Cluster Content</p>
                        <p className="text-[10px] text-slate-500">Post/Video satelliti che approfondiscono sotto-argomenti specifici.</p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-slate-200">
                        <p className="font-bold text-brand-blue text-[10px] uppercase mb-1">Cross-reference</p>
                        <p className="text-[10px] text-slate-500">Rimandi interni (link in bio, tag) per trattenere l'utente nell'ecosistema.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-red">Fase 2: Produzione e Validazione</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center font-bold text-sm">3gg</div>
                      <div>
                        <p className="font-bold text-slate-800 m-0 text-sm">Validazione Interna</p>
                        <p className="text-xs text-slate-500 m-0">Il progetto deve essere pronto 3 giorni prima della presentazione per il fine-tuning con l'Account e la validazione del CMO.</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                        <h4 className="font-bold text-slate-900 text-xs mb-2">Piano Editoriale Operativo</h4>
                        <ul className="text-[10px] text-slate-500 space-y-1">
                          <li>• Format contenuti e calendario</li>
                          <li>• Copy post e impaginazioni Canva</li>
                          <li>• Strategie dedicate per piattaforma</li>
                        </ul>
                      </div>
                      <div className="p-4 border border-slate-100 rounded-xl bg-slate-50">
                        <h4 className="font-bold text-slate-900 text-xs mb-2">Produzione Multimediale</h4>
                        <ul className="text-[10px] text-slate-500 space-y-1">
                          <li>• Progettazione grafiche e template</li>
                          <li>• Ideazione e montaggio video (Reel/TikTok)</li>
                          <li>• Adattamento formati</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-emerald-600">Fase 3: Gestione e Monitoraggio</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                      <h4 className="font-bold text-emerald-900 text-xs mb-2">Influencer & ADV</h4>
                      <p className="text-[10px] text-emerald-800">Ricerca, negoziazione e supervisione influencer. Gestione sponsorizzazioni (sponsored post) e ottimizzazione budget.</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                      <h4 className="font-bold text-emerald-900 text-xs mb-2">Community & Eventi</h4>
                      <p className="text-[10px] text-emerald-800">Programmazione post, gestione commenti/messaggi. Copertura live eventi (stories, real-time).</p>
                    </div>
                    <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                      <h4 className="font-bold text-emerald-900 text-xs mb-2">Reportistica Mensile</h4>
                      <p className="text-[10px] text-emerald-800">Performance, crescita, engagement. Report sintetico orientato agli insight (cosa ha funzionato e cosa migliorare).</p>
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2>Relazioni Interne</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-1 h-auto bg-brand-blue rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm m-0">Account Manager</p>
                        <p className="text-xs text-slate-500">Interfaccia principale, valida strategia e piano editoriale.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1 h-auto bg-emerald-500 rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm m-0">CMO</p>
                        <p className="text-xs text-slate-500">Supporto strategico creativo sulla base delle indicazioni dei Director.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1 h-auto bg-slate-400 rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm m-0">Responsabile di Reparto</p>
                        <p className="text-xs text-slate-500">Supervisione tecnica, organizzativa e stesura testi.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2>Competenze Richieste</h2>
                  <div className="flex flex-wrap gap-2 not-prose">
                    {['Analisi Brand', 'Piani Editoriali', 'Copywriting', 'Grafica (Canva)', 'Video Editing', 'Social Ads', 'Data Analysis', 'Influencer Marketing'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-medium text-slate-600 shadow-sm">{skill}</span>
                    ))}
                  </div>
                  <div className="mt-6 p-5 bg-white border border-slate-200 rounded-2xl">
                    <h4 className="text-slate-900 mt-0 mb-3 text-sm">Principi di Lavoro</h4>
                    <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                      <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-brand-red" /> Lavorare in autonomia</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-brand-red" /> Ricerca attiva informazioni</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-brand-red" /> Comunicazione costante con Account</li>
                      <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-brand-red" /> Rispetto rigoroso delle scadenze</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'seo' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>SEO, AEO, GEO & Marketing Automation</h1>
              <p className="text-lg">Il Director è responsabile di aumentare la visibilità organica, generare traffico qualificato e trasformare gli utenti in lead attraverso sistemi di automazione.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Target className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Integrare strategia, analisi e operatività tecnica per supportare la crescita digitale. Il ruolo si focalizza sull'ottimizzazione per i motori di ricerca (SEO), le risposte AI (AEO), la ricerca generativa (GEO) e la conversione automatizzata (Marketing Automation).</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-blue flex items-center gap-2"><Search className="w-5 h-5" /> SEO, AEO & GEO</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1 text-brand-blue">1. Analisi & Audit</h4>
                      <p className="text-xs text-slate-500">Audit tecnico (indicizzazione, velocità, struttura), analisi keyword e benchmark competitor per identificare opportunità di posizionamento.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1 text-brand-blue">2. Strategia Contenuti</h4>
                      <p className="text-xs text-slate-500">Definizione della struttura keyword, architettura delle informazioni e piano editoriale orientato alla visibilità organica.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1 text-brand-blue">3. Ottimizzazione</h4>
                      <ul className="text-[10px] text-slate-500 space-y-1 mt-2">
                        <li>• <strong>On-Page:</strong> Meta tag, heading, immagini, link interni.</li>
                        <li>• <strong>Tecnica:</strong> Sitemap, robots.txt, risoluzione errori.</li>
                        <li>• <strong>Off-Page:</strong> Link building e autorevolezza dominio.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-red flex items-center gap-2"><Zap className="w-5 h-5" /> Marketing Automation</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1 text-brand-red">1. Progettazione Funnel</h4>
                      <p className="text-xs text-slate-500">Creazione di landing page, form di acquisizione e lead magnet per trasformare il traffico in contatti qualificati.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1 text-brand-red">2. Automazione Flussi</h4>
                      <p className="text-xs text-slate-500">Progettazione di sequenze email automatiche, lead nurturing, follow-up e automazioni post-download.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1 text-brand-red">3. Gestione Dati</h4>
                      <p className="text-xs text-slate-500">Integrazione CRM, segmentazione dei lead e analisi delle performance (Open Rate, CTR, Conversioni).</p>
                    </div>
                  </div>
                </section>
              </div>

              <h2>Gestione Progetti Web & Sviluppo</h2>
              <p>Il SEO Director garantisce che ogni sito realizzato sia ottimizzato nativamente per i motori di ricerca.</p>
              
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800 text-lg">Flusso Operativo Web</h3>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 not-prose py-4">
                    {[
                      { label: 'Account', sub: 'Relazione Cliente' },
                      { label: 'Digital Manager', sub: 'Supervisione' },
                      { label: 'SEO Director', sub: 'Progettazione' },
                      { label: 'Team Tecnico', sub: 'Sviluppo' }
                    ].map((step, i, arr) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center text-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${i === 2 ? 'bg-brand-blue text-white' : 'bg-white border border-slate-200 text-slate-600'}`}>
                            {i+1}
                          </div>
                          <p className="font-bold text-slate-800 text-[10px] mt-2 mb-0">{step.label}</p>
                          <p className="text-[9px] text-slate-400 m-0">{step.sub}</p>
                        </div>
                        {i < arr.length - 1 && <div className="hidden md:block h-px w-12 bg-slate-200"></div>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-white border border-slate-200 rounded-xl">
                    <h4 className="font-bold text-slate-900 text-sm mb-2">Relazione & Separazione Ruoli</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Il Director non gestisce direttamente il cliente. La comunicazione avviene tramite l'Account Manager, che raccoglie richieste e condivide feedback.</p>
                  </div>
                  <div className="p-5 bg-white border border-slate-200 rounded-xl">
                    <h4 className="font-bold text-slate-900 text-sm mb-2">Collaborazione Creativa</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Lavora con i grafici per garantire che il layout rispetti la gerarchia delle informazioni, la leggibilità e l'ottimizzazione UX.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2>Relazioni Interne</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-1 h-auto bg-brand-blue rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm m-0">CMO & Strategist</p>
                        <p className="text-xs text-slate-500">Allineamento strategico e definizione della digital strategy.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1 h-auto bg-emerald-500 rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm m-0">Digital Manager</p>
                        <p className="text-xs text-slate-500">Coordinamento tecnico, validazione scelte e gestione fornitori.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1 h-auto bg-slate-400 rounded-full"></div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm m-0">Creative & Content Team</p>
                        <p className="text-xs text-slate-500">Produzione di contenuti ottimizzati e asset grafici strutturati.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2>Principi Operativi</h2>
                  <div className="p-6 bg-white border border-slate-200 rounded-2xl">
                    <ul className="text-[10px] text-slate-600 space-y-3 list-none p-0">
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <div>
                          <p className="text-slate-900 font-bold m-0">Approccio Data-Driven</p>
                          <p className="m-0 text-slate-500">Ogni decisione tecnica e strategica deve essere basata sull'analisi dei dati.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <div>
                          <p className="text-slate-900 font-bold m-0">Integrazione Strategica</p>
                          <p className="m-0 text-slate-500">Le attività SEO/Automation devono essere coerenti con la comunicazione globale.</p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <div>
                          <p className="text-slate-900 font-bold m-0">Ottimizzazione Continua</p>
                          <p className="m-0 text-slate-500">Monitoraggio costante e miglioramento incrementale delle performance.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'grafici' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Creative Designer / Visual Designer</h1>
              <p className="text-lg">I grafici sono responsabili della produzione creativa e visiva dei progetti dell’agenzia. Trasformano strategie e concept in materiali visivi concreti pronti per la produzione.</p>
              
              <div className="bg-brand-blue/5 p-6 rounded-2xl border border-brand-blue/10 mb-12">
                <h3 className="text-brand-blue mt-0 flex items-center gap-2"><Target className="w-5 h-5" /> Obiettivo del Ruolo</h3>
                <p className="text-sm text-brand-blue/80 mb-0">Operano sotto la supervisione del Creative Director (Paolo) e collaborano con Director, Account ed Executive per garantire standard creativi elevati e coerenza visiva.</p>
              </div>

              <h2>1. Ambiti di Lavoro</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mb-12">
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4"><Palette className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Branding</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Progettazione loghi</li>
                    <li>• Identità visiva</li>
                    <li>• Brand guidelines</li>
                    <li>• Materiali coordinati</li>
                  </ul>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4"><Layout className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Comunicazione</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Creatività social</li>
                    <li>• Visual per campagne</li>
                    <li>• Adattamenti grafici</li>
                    <li>• Banner e ADV</li>
                  </ul>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4"><Video className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Video & Motion</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Montaggio video</li>
                    <li>• Animazioni</li>
                    <li>• Reel e contenuti social</li>
                    <li>• Video corporate</li>
                  </ul>
                </div>
                <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4"><FileImage className="w-5 h-5" /></div>
                  <h4 className="font-bold text-slate-900 mb-2">Eventi & Presentazioni</h4>
                  <ul className="text-[10px] text-slate-500 space-y-1 list-none p-0">
                    <li>• Materiali espositivi</li>
                    <li>• Allestimenti grafici</li>
                    <li>• Impaginazione proposte</li>
                    <li>• Supporto visual commerciale</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">Ricezione & Pianificazione</h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">Le richieste arrivano da Executive, Account o Creative Director. Devono essere sempre documentate e inserite nei task di progetto.</p>
                  <div className="space-y-3">
                    <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3 items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <p className="text-[10px] text-slate-600 m-0 font-medium">Richieste formalizzate e chiare</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3 items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <p className="text-[10px] text-slate-600 m-0 font-medium">Caricamento ore su Chronos</p>
                    </div>
                    <div className="p-3 bg-white border border-slate-100 rounded-xl flex gap-3 items-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <p className="text-[10px] text-slate-600 m-0 font-medium">Rispetto del calendario di progetto</p>
                    </div>
                  </div>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-red">Gestione Revisioni & File</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Efficienza nelle Revisioni</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Applicare modifiche coerenti con il brief. Evitare revisioni infinite; coinvolgere il Creative Director per decisioni finali se le richieste diventano eccessive.</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-900 mb-1">Archiviazione Ordinata</h4>
                      <p className="text-[10px] text-slate-500 leading-relaxed">Caricare i file nella cartella OneDrive del progetto, mantenendo ordine nella struttura e nominando correttamente i file.</p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="mb-12">
                <h2>Processo di Produzione Creativa</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Brief Creativo</h4>
                      <p className="text-xs text-slate-500 m-0">Ricezione obiettivi, formato, canale e linee guida brand da Executive, Account o CD.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Sviluppo Proposta</h4>
                      <p className="text-xs text-slate-500 m-0">Creazione prima versione. Confronto con Creative Director o Director di area.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Revisione Interna</h4>
                      <p className="text-xs text-slate-500 m-0">Controllo Executive/CD su qualità grafica, coerenza brand e correttezza tecnica.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">Consegna Account</h4>
                      <p className="text-xs text-slate-500 m-0">Validazione finale coerenza progetto e allineamento con l'Azienda Partner.</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="p-8 bg-white border border-slate-200 rounded-3xl mb-12">
                <h2 className="text-slate-900 mt-0 mb-8 text-center">Struttura del Reparto Creativo</h2>
                <div className="flex flex-col items-center space-y-4 not-prose">
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 w-full max-w-md text-center">
                    Creative Director (Paolo)
                  </div>
                  <ArrowDown className="w-4 h-4 text-brand-red" />
                  <div className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 w-full max-w-md text-center">
                    Executive Creative Manager
                  </div>
                  <ArrowDown className="w-4 h-4 text-brand-red" />
                  <div className="px-6 py-3 bg-brand-red text-white rounded-xl text-xs font-bold w-full max-w-md text-center shadow-lg shadow-brand-red/20">
                    Creative Designers / Visual Designers
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand-blue/5 border border-brand-blue/10 rounded-2xl">
                <h3 className="text-brand-blue mt-0">Principi Operativi Fondamentali</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-brand-blue/80 m-0"><strong>Qualità:</strong> Garantire standard creativi elevati in ogni output.</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-brand-blue/80 m-0"><strong>Scadenze:</strong> Rispetto rigoroso delle tempistiche stabilite.</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-brand-blue/80 m-0"><strong>Collaborazione:</strong> Coordinamento costante con team e director.</p>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <p className="text-sm text-brand-blue/80 m-0"><strong>Organizzazione:</strong> Ordine impeccabile nei file e nei task.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'pr' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Ufficio PR</h1>
              <p className="text-lg">L’Ufficio PR è responsabile della gestione delle relazioni esterne dell’agenzia e delle Aziende Partner con media, stakeholder, partner e opinion leader.</p>
              
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-12">
                <h3 className="text-emerald-700 mt-0 flex items-center gap-2"><Radio className="w-5 h-5" /> 1. Obiettivo del Ruolo</h3>
                <p className="text-sm text-emerald-600/80 mb-0">Costruire e rafforzare la reputazione dei brand attraverso attività di comunicazione istituzionale, relazioni con i media e stakeholder strategici.</p>
              </div>

              <section className="mb-12">
                <h2>2. Posizionamento nella Struttura</h2>
                <p className="text-sm text-slate-600 mb-6">L’Ufficio PR opera in coordinamento con:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { role: 'Account Manager', desc: 'Gestione delle Aziende Partner.' },
                    { role: 'Director', icon: Briefcase, desc: 'Integrazione strategica dei progetti.' },
                    { role: 'CMO', icon: Target, desc: 'Allineamento tra le diverse aree.' },
                    { role: 'Creative & Content', icon: Palette, desc: 'Produzione materiali di comunicazione.' },
                    { role: 'Team Eventi', icon: Video, desc: 'Integrazione con produzioni live.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-emerald-600 text-[10px] mb-1 uppercase tracking-wider">{item.role}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>3. Ambiti di Attività</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Gestione relazioni con media e giornalisti',
                    'Sviluppo contatti con stakeholder e partner',
                    'Gestione delle opportunità editoriali',
                    'Supporto diffusione iniziative Partner',
                    'Comunicazione istituzionale'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">4. Relazioni con i Media</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Gestione e sviluppo rapporti con:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Giornalisti e Redazioni.</li>
                    <li className="flex gap-2">• Media di settore.</li>
                    <li className="flex gap-2">• Piattaforme editoriali.</li>
                    <li className="flex gap-2">• Creazione relazioni continuative.</li>
                  </ul>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">5. Costruzione Contenuti PR</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Produzione materiali istituzionali:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Comunicati stampa.</li>
                    <li className="flex gap-2">• Presentazioni istituzionali.</li>
                    <li className="flex gap-2">• Materiali informativi per stakeholder.</li>
                    <li className="flex gap-2">• Documenti di presentazione progetti.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">6. Opportunità Editoriali</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Monitoraggio contesto mediatico:</p>
                  <div className="space-y-2">
                    {['Articoli su testate di settore', 'Partecipazione a interviste', 'Interventi editoriali', 'Collaborazioni piattaforme'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">7. Collaborazione Account</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supporto alla gestione Partner:</p>
                  <div className="space-y-2">
                    {['Indicazioni opportunità', 'Aggiornamenti attività PR', 'Materiali di comunicazione', 'Coordinamento complessivo'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">8. Team Strategico</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Coerenza narrativa:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Definizione messaggi chiave.</li>
                    <li>• Posizionamento del brand.</li>
                    <li>• Linea narrativa delle attività PR.</li>
                  </ul>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">9. Eventi e Iniziative</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Promozione e visibilità:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Supporto visibilità iniziative pubbliche.</li>
                    <li>• Coordinamento comunicazione live.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">10. Partner & Stakeholder</h3>
                  <p className="text-[10px] text-slate-600 m-0">Sviluppo relazioni con associazioni di settore, istituzioni, enti e collaborazioni editoriali.</p>
                </section>
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">11. Monitoraggio Attività</h3>
                  <p className="text-[10px] text-slate-600 m-0">Monitoraggio uscite stampa, citazioni sui media e raccolta pubblicazioni per reportistica.</p>
                </section>
              </div>

              <section className="mb-12">
                <h2>12. Gestione Materiali e Documenti</h2>
                <p className="text-xs text-slate-600 mb-4">Archiviazione ordinata nelle cartelle di progetto:</p>
                <div className="flex flex-wrap gap-3">
                  {['Comunicati Stampa', 'Rassegne Stampa', 'Materiali Informativi', 'Documenti Presentazione'].map(doc => (
                    <div key={doc} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-700 shadow-sm">{doc}</div>
                  ))}
                </div>
              </section>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-12">
                <h3 className="mt-0 text-slate-800">13. Principi di Lavoro</h3>
                <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                  <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Costruzione relazioni continuative.</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Coerenza con la strategia di comunicazione.</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Collaborazione inter-reparto.</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-emerald-600" /> Gestione ordinata e documentata.</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeSection === 'content' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Content Coordinator</h1>
              <p className="text-lg">Responsabile del coordinamento dei contenuti testuali prodotti all’interno dei progetti dell’agenzia. Garantisce coerenza, qualità e uniformità dei testi.</p>
              
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 mb-12">
                <h3 className="text-indigo-700 mt-0 flex items-center gap-2"><FileText className="w-5 h-5" /> 1. Obiettivo del Ruolo</h3>
                <p className="text-sm text-indigo-600/80 mb-0">Assicurare che i contenuti siano allineati alla strategia del progetto, al posizionamento del brand e al tono di voce dell’Azienda Partner, migliorando chiarezza ed efficacia comunicativa.</p>
              </div>

              <section className="mb-12">
                <h2>2. Posizionamento nella Struttura</h2>
                <p className="text-sm text-slate-600 mb-6">Il Content Coordinator lavora in coordinamento con:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
                  {[
                    { role: 'Strategist', desc: 'Allineamento contenuti alla strategia.' },
                    { role: 'Social Media Manager', icon: LayoutDashboard, desc: 'Contenuti editoriali social.' },
                    { role: 'Team Creativo', icon: Palette, desc: 'Integrazione visiva e testuale.' },
                    { role: 'SEO & Digital', icon: Search, desc: 'Ottimizzazione contenuti digitali.' },
                    { role: 'Account Manager', icon: Users, desc: 'Allineamento esigenze Azienda Partner.' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                      <h4 className="font-bold text-indigo-600 text-[10px] mb-1 uppercase tracking-wider">{item.role}</h4>
                      <p className="text-[10px] text-slate-500 m-0">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12">
                <h2>3. Coordinamento dei Contenuti</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Revisione dei testi prodotti dai team operativi',
                    'Verifica della coerenza con il tono di voce',
                    'Controllo della chiarezza e della qualità',
                    'Suggerimenti editoriali per l’efficacia comunicativa'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-700">
                      <CheckCircle2 className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">4. Supporto ai Team</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supporto nella scrittura dei testi:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Fornire linee guida per la scrittura.</li>
                    <li className="flex gap-2">• Suggerire miglioramenti ai testi.</li>
                    <li className="flex gap-2">• Supportare la definizione dei messaggi chiave.</li>
                    <li className="flex gap-2">• Aiutare nella costruzione della struttura.</li>
                  </ul>
                </section>

                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">5. Intervento sui Progetti</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Intervento diretto quando necessario:</p>
                  <ul className="space-y-2 text-[10px] text-slate-600 list-none p-0">
                    <li className="flex gap-2">• Correggere o migliorare i testi.</li>
                    <li className="flex gap-2">• Riorganizzare la struttura dei contenuti.</li>
                    <li className="flex gap-2">• Adattare i contenuti al tono di voce.</li>
                    <li className="flex gap-2">• Migliorare leggibilità ed efficacia.</li>
                  </ul>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">6. Collaborazione Strategica</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Confronto con lo Strategist:</p>
                  <div className="space-y-2">
                    {['Messaggi chiave del progetto', 'Linea narrativa della comunicazione', 'Coerenza strategia-contenuti'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>

                <section className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">7. Collaborazione Team Social</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Supporto ai Social Media Manager:</p>
                  <div className="space-y-2">
                    {['Revisione dei copy dei post', 'Suggerimenti sui format testuali', 'Miglioramento struttura contenuti social'].map(item => (
                      <div key={item} className="px-3 py-2 bg-white border border-slate-100 rounded-lg text-[10px] font-medium text-slate-700">{item}</div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">8. Team Digital & SEO</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Efficacia dei contenuti online:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Supporto scrittura contenuti web.</li>
                    <li>• Miglioramento leggibilità testi digitali.</li>
                    <li>• Allineamento con strategia SEO.</li>
                  </ul>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">9. Linee Guida Editoriali</h3>
                  <p className="text-[10px] text-slate-500 mb-4">Definizione standard qualitativi:</p>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li>• Tono di voce del brand e stile.</li>
                    <li>• Struttura contenuti e messaggi chiave.</li>
                  </ul>
                </section>
              </div>

              <section className="mb-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="mt-0 text-slate-800">10. Revisione Materiali</h3>
                <p className="text-xs text-slate-600 mb-4">Intervento prima della consegna finale:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['Presentazioni', 'Materiali Istituzionali', 'Contenuti Digitali', 'Contenuti Social'].map(item => (
                    <div key={item} className="p-3 bg-white border border-slate-200 rounded-xl text-center">
                      <p className="text-[10px] text-indigo-700 font-bold m-0">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">11. Account Manager</h3>
                  <p className="text-[10px] text-slate-600 m-0">Garantisce che i contenuti siano coerenti con le aspettative dell’Azienda Partner.</p>
                </section>
                <section className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-slate-800">12. Gestione Documenti</h3>
                  <p className="text-[10px] text-slate-600 m-0">Contribuisce all’organizzazione e alla verifica della coerenza dei testi nei diversi documenti.</p>
                </section>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2>13. Competenze Richieste</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Copywriting', 'Editing', 'Tone of Voice', 'Editorial Strategy', 'Collaboration'].map(skill => (
                      <span key={skill} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded uppercase tracking-wider">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h3 className="mt-0 text-slate-800">14. Principi di Lavoro</h3>
                  <ul className="text-[10px] text-slate-600 space-y-2 list-none p-0">
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-indigo-600" /> Attenzione alla qualità dei contenuti.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-indigo-600" /> Coerenza tra strategia e comunicazione.</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-3 h-3 text-indigo-600" /> Supporto costante ai team operativi.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'meetings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1>Gestione Riunioni Interne</h1>
              <p>Le riunioni devono essere efficienti, con obiettivi chiari e orientate alla soluzione.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="mt-0">Tipologie</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Coordinamento Progetto:</strong> Brevi, operative, focalizzate sull'avanzamento.</li>
                    <li><strong>Operative:</strong> Gestione quotidiana tra Account, Exec e Director.</li>
                    <li><strong>Strategiche:</strong> Definizione concept e approccio (CMO + Directors).</li>
                  </ul>
                </div>
                <div className="bg-white p-6 border border-brand-blue/20 rounded-2xl shadow-sm">
                  <h3 className="mt-0 text-brand-blue">Regole d'Oro</h3>
                  <ul className="text-sm space-y-3">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Obiettivo chiaro prima di iniziare</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Solo le persone necessarie</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Orientamento alla soluzione (non solo problemi)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" /> Tracciabilità delle decisioni su Teams</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}

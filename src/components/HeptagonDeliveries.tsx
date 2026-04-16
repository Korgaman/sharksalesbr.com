import { motion, AnimatePresence } from "motion/react";
import { Users, TrendingUp, Share2, Database, Zap, Layout, Handshake, Info, X, CheckSquare } from "lucide-react";
import { useState } from "react";

const deliveriesData = [
  { 
    category: "Comercial",
    title: "Mentorias Comerciais", 
    icon: Users, 
    description: "Diagnóstico de time, estruturação de jornada e scripts sob medida.",
    id: "01",
    subDeliveries: [
      "Auditoria Completa de Processos de Venda",
      "Treinamento de SDRs e Closers de Elite",
      "Criação de Playbook Comercial Customizado",
      "Sessões de Roleplay para Quebra de Objeções"
    ]
  },
  { 
    category: "Marketing",
    title: "Tráfego Pago", 
    icon: TrendingUp, 
    description: "Gestão de Meta, Google e YouTube Ads com foco em ROI.",
    id: "02",
    subDeliveries: [
      "Estruturação de Campanhas Escaláveis",
      "Engenharia de Criativos de Alta Conversão",
      "Rastreamento Avançado via API de Conversão",
      "Dashboards de Performance 24/7 em Tempo Real"
    ]
  },
  { 
    category: "Social Selling",
    title: "Vitrine Digital", 
    icon: Share2, 
    description: "Gestão de perfil focada em autoridade e conversão estratégica.",
    id: "03",
    subDeliveries: [
      "Consultoria de Posicionamento Magnético",
      "Roteirização de Narrativas de Venda (Stories)",
      "Design de Identidade Visual para Conversão",
      "Editorial Estratégico focado em Autoridade"
    ]
  },
  { 
    category: "CRM",
    title: "Gestão de CRM", 
    icon: Database, 
    description: "Implementação e automação para rastreio total de oportunidades.",
    id: "04",
    subDeliveries: [
      "Automação de Follow-ups e Workflows",
      "Arquitetura de Funis de Vendas Inteligentes",
      "Saneamento e Qualificação da Base de Leads",
      "Relatórios de LTV e CAC Automatizados"
    ]
  },
  { 
    category: "IA",
    title: "SDR Digital", 
    icon: Zap, 
    description: "Inteligência Artificial que qualifica leads 24/7 em tempo real.",
    id: "05",
    subDeliveries: [
      "Treinamento de IA com Conhecimento do Produto",
      "Integração Fluida com Agendas e CRM",
      "Qualificação Semântica de Leads Frios e Quentes",
      "Escalabilidade Infinita de Atendimento Imediato"
    ]
  },
  { 
    category: "Conversão",
    title: "Páginas de Alta Performance", 
    icon: Layout, 
    description: "Landing Pages projetadas com engenharia de persuasão.",
    id: "06",
    subDeliveries: [
      "Copywriting com Gatilhos Mentais Avançados",
      "Design UX/UI Focado em Taxa de Conversão",
      "Otimização Extrema de Velocidade de Carregamento",
      "Análise de Calor (Heatmaps) e Testes A/B"
    ]
  },
  { 
    category: "Outsourcing",
    title: "Terceirização Comercial", 
    icon: Handshake, 
    description: "Assumimos a operação comercial da sua empresa.",
    id: "07",
    subDeliveries: [
      "Squad Shark Dedicado para Fechamentos",
      "Gestão de Lançamentos High-Ticket",
      "Fluxo Contínuo de Agendamentos Qualificados",
      "Gestão de Call Center e Recuperação de Vendas"
    ]
  }
];

export function HeptagonDeliveries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedDelivery, setSelectedDelivery] = useState<typeof deliveriesData[0] | null>(null);

  return (
    <div className="relative w-full py-20 px-4 overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background Heptagon SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] animate-[spin_60s_linear_infinite]">
          <polygon 
            points="50,5 91,25 99,69 70,98 30,98 1,69 9,25" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.2"
            className="text-shark-accent"
          />
        </svg>
      </div>

      {/* Grid for Mobile, Heptagon for Desktop */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="hidden lg:flex relative items-center justify-center h-[700px]">
          {/* Central Logo/Title */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="z-20 bg-shark-black/40 backdrop-blur-xl p-8 rounded-full border border-shark-accent/20 flex flex-col items-center justify-center text-center w-64 h-64 tech-border"
          >
            <div className="tech-corner-bl" />
            <Zap className="text-shark-accent mb-4 animate-pulse" size={40} />
            <h3 className="text-xl font-bold tracking-tighter uppercase font-display">Shark<br/><span className="text-shark-accent">Ecosystem</span></h3>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-2 font-mono">Sete Dimensões de<br/>Alta Performance</p>
          </motion.div>

          {/* Heptagon Cards */}
          {deliveriesData.map((item, i) => {
            const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
            const radius = 320;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, x, y }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute z-30"
              >
                <motion.div 
                  className={`relative w-64 p-6 neon-blue-card cursor-pointer group transition-all duration-500 ${hoveredIndex === i ? 'scale-110 -translate-y-2 border-shark-accent/40 shadow-shark-accent/20' : ''}`}
                  whileHover={{ zIndex: 50 }}
                  onClick={() => setSelectedDelivery(item)}
                >
                  <div className="tech-corner-bl" />
                  
                  {/* Icon Container */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-shark-accent/5 flex items-center justify-center text-shark-accent/40 group-hover:text-shark-accent group-hover:bg-shark-accent/10 transition-all duration-700 border border-shark-accent/10 group-hover:border-shark-accent/30 shadow-lg group-hover:shadow-shark-accent/20">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-shark-accent/60 block mb-1">{item.category}</span>
                      <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">ID: {item.id}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-sm font-bold uppercase tracking-tight text-white mb-2 leading-tight group-hover:text-shark-accent transition-colors font-display">{item.title}</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed font-light">{item.description}</p>
                  
                  {/* Hover Details Indicator */}
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: hoveredIndex === i ? 1 : 0, height: hoveredIndex === i ? 'auto' : 0 }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[9px] font-bold text-shark-accent uppercase tracking-widest">Clique para ver mais</span>
                      <Info size={12} className="text-shark-accent" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Connection Line to Center */}
                <svg className="absolute top-1/2 left-1/2 -z-10 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible">
                  <motion.line
                    x1="200"
                    y1="200"
                    x2={200 - x}
                    y2={200 - y}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-shark-accent/10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  />
                </svg>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Grid */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6 px-4">
          <div className="col-span-full text-center mb-8">
            <Zap className="text-shark-accent mx-auto mb-2" size={32} />
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">Shark Ecosystem</h3>
          </div>
          {deliveriesData.map((item, i) => {
             const Icon = item.icon;
             return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="neon-blue-card p-8 tech-border flex flex-col h-full cursor-pointer group"
                onClick={() => setSelectedDelivery(item)}
              >
                <div className="tech-corner-bl" />
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-shark-accent/5 flex items-center justify-center text-shark-accent border border-shark-accent/10 shadow-lg group-hover:bg-shark-accent/10 transition-all">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-shark-accent/60 block mb-1">{item.category}</span>
                    <span className="text-[10px] font-mono text-white/20 tracking-widest">ID: {item.id}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-white mb-4 font-display group-hover:text-shark-accent transition-colors">{item.title}</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">{item.description}</p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-shark-accent uppercase tracking-widest">Ver Detalhes</span>
                  <Info size={14} className="text-shark-accent" />
                </div>
              </motion.div>
             );
          })}
        </div>
<AnimatePresence>
          {selectedDelivery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-shark-black/80 backdrop-blur-md"
              onClick={() => setSelectedDelivery(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-shark-black border border-shark-accent/20 p-8 md:p-12 rounded-3xl tech-border shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="tech-corner-bl" />
                <button 
                  onClick={() => setSelectedDelivery(null)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-shark-accent/10 flex items-center justify-center text-shark-accent border border-shark-accent/20">
                    <selectedDelivery.icon size={32} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-shark-accent mb-1 block">
                      {selectedDelivery.category}
                    </span>
                    <h3 className="text-3xl font-bold uppercase tracking-tight text-white font-display">
                      {selectedDelivery.title}
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {selectedDelivery.subDeliveries.map((sub, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-shark-accent/30 transition-all hover:bg-shark-accent/5"
                    >
                      <CheckSquare size={16} className="text-shark-accent mt-1 shrink-0" />
                      <span className="text-sm text-white/70 font-light leading-relaxed group-hover:text-white transition-colors">
                        {sub}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <button 
                    onClick={() => setSelectedDelivery(null)}
                    className="btn-premium px-12 py-3"
                  >
                    Fechar Detalhes
                  </button>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-shark-accent/5 blur-[100px] -z-10" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

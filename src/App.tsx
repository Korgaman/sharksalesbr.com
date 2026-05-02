/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  Target, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  Phone,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Menu,
  X,
  Share2,
  Rocket,
  Award,
  Eye,
  Database
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

const WHATSAPP_LINK = "https://wa.me/5511964505424?text=Ol%C3%A1!%20Vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20Shark.";
const INSTAGRAM_LINK = "https://www.instagram.com/shark.salesbr/";
const LINKEDIN_LINK = "https://www.linkedin.com/company/sharksalesbr";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function Calculator() {
  const [leads, setLeads] = useState(50);
  const [ticket, setTicket] = useState(250);
  const [conversion, setConversion] = useState(5);

  // Sem SDR Digital (60% de atendimento, conversão base)
  const semSdrLeads = Math.round(leads * 0.6);
  const semSdrVendas = Math.round(semSdrLeads * 30 * (conversion / 100));
  const semSdrReceita = semSdrVendas * ticket;

  // Com SDR Digital (100% de atendimento, +30% na conversão)
  const comSdrLeads = leads;
  const comSdrVendas = Math.round(comSdrLeads * 30 * ((conversion * 1.3) / 100));
  const comSdrReceita = comSdrVendas * ticket;

  const adicionalMes = comSdrReceita - semSdrReceita;
  const adicionalAno = adicionalMes * 12;

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-shark-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
        {/* Sliders Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Leads Slider */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-shark-accent">
              <Users size={16} />
              <span className="text-[12px] font-bold uppercase tracking-widest">Leads por dia</span>
            </div>
            <input 
              type="range" min="5" max="200" value={leads} 
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full accent-shark-accent bg-white/10 h-1.5 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-white/30 font-mono">005</span>
              <span className="text-3xl font-bold text-white font-mono">{leads}</span>
              <span className="text-[11px] text-white/30 font-mono">200</span>
            </div>
          </div>

          {/* Ticket Slider */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-shark-accent">
              <Database size={16} />
              <span className="text-[12px] font-bold uppercase tracking-widest">Ticket Médio (R$)</span>
            </div>
            <input 
              type="range" min="250" max="50000" step="250" value={ticket} 
              onChange={(e) => setTicket(Number(e.target.value))}
              className="w-full accent-shark-accent bg-white/10 h-1.5 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-white/30 font-mono">R$250</span>
              <span className="text-3xl font-bold text-white font-mono">R$ {ticket.toLocaleString()}</span>
              <span className="text-[11px] text-white/30 font-mono">R$50k</span>
            </div>
          </div>

          {/* Conversion Slider */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-shark-accent">
              <TrendingUp size={16} />
              <span className="text-[12px] font-bold uppercase tracking-widest">Taxa de Conversão (%)</span>
            </div>
            <input 
              type="range" min="1" max="40" value={conversion} 
              onChange={(e) => setConversion(Number(e.target.value))}
              className="w-full accent-shark-accent bg-white/10 h-1.5 rounded-full appearance-none cursor-pointer"
            />
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-white/30 font-mono">01%</span>
              <span className="text-3xl font-bold text-white font-mono">{conversion}%</span>
              <span className="text-[11px] text-white/30 font-mono">40%</span>
            </div>
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Sem SDR */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-3 text-white/40 mb-8">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <XCircle size={16} />
              </div>
              <span className="font-bold text-base tracking-tight">Sem SDR Digital</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-mono">
                <span className="text-white/40">Leads atendidos/dia</span>
                <span className="text-white font-medium">{semSdrLeads} (60%)</span>
              </div>
              <div className="flex justify-between text-sm font-mono">
                <span className="text-white/40">Vendas/mês</span>
                <span className="text-white font-medium">{semSdrVendas}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <span className="text-[12px] uppercase tracking-widest text-white/30 block mb-2 font-mono">Receita mensal estimada</span>
              <span className="text-4xl font-bold text-white font-mono">R$ {semSdrReceita.toLocaleString()}</span>
            </div>
          </div>

          {/* Com SDR */}
          <div className="bg-shark-accent/[0.02] border border-shark-accent/20 rounded-2xl p-8 relative">
            <div className="absolute top-6 right-8 px-3 py-1 bg-shark-accent/10 border border-shark-accent/20 rounded-full">
              <span className="text-[11px] font-bold text-shark-accent uppercase tracking-widest">24/7</span>
            </div>
            
            <div className="flex items-center gap-3 text-shark-accent mb-8">
              <div className="w-8 h-8 rounded-lg bg-shark-accent/10 flex items-center justify-center">
                <Zap size={16} />
              </div>
              <span className="font-bold text-base tracking-tight">Com SDR Digital</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-mono">
                <span className="text-white/40">Leads atendidos/dia</span>
                <span className="text-shark-accent font-medium">{comSdrLeads} (100%)</span>
              </div>
              <div className="flex justify-between text-sm font-mono">
                <span className="text-white/40">Vendas/mês</span>
                <span className="text-shark-accent font-medium">{comSdrVendas}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-shark-accent/10">
              <span className="text-[12px] uppercase tracking-widest text-white/30 block mb-2 font-mono">Receita mensal estimada</span>
              <span className="text-4xl font-bold text-shark-accent text-glow-blue font-mono">R$ {comSdrReceita.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Final Result Card */}
        <div className="bg-shark-accent/[0.05] border border-shark-accent/30 rounded-2xl p-10 text-center tech-border">
          <div className="tech-corner-bl" />
          <p className="text-sm text-white/60 uppercase tracking-[0.2em] mb-6 font-mono">Receita adicional que você está deixando na mesa</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-[12px] text-white/40 uppercase tracking-widest mb-2 font-mono">Por mês</p>
              <p className="text-5xl md:text-6xl font-black text-shark-accent font-mono">+R$ {adicionalMes.toLocaleString()}</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10" />
            <div className="text-center">
              <p className="text-[12px] text-white/40 uppercase tracking-widest mb-2 font-mono">Por ano</p>
              <p className="text-5xl md:text-6xl font-black text-white font-mono">+R$ {adicionalAno.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-white/20 text-center mt-8 italic">
          * Baseado em 100% de atendimento de leads e aumento médio de 30% na conversão com IA qualificando em tempo real.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <header>
        {/* High-Tech HUD Elements */}
        <div className="scan-line" />
        
        {/* Corner Brackets / HUD */}
      <div className="fixed top-6 left-6 z-[60] pointer-events-none opacity-20 hidden lg:block">
        <div className="text-[8px] font-mono tracking-widest uppercase mb-1">System Status: Active</div>
        <div className="w-12 h-px bg-shark-accent" />
        <div className="h-12 w-px bg-shark-accent" />
      </div>
      <div className="fixed top-6 right-6 z-[60] pointer-events-none opacity-20 hidden lg:block text-right">
        <div className="text-[8px] font-mono tracking-widest uppercase mb-1">Lat: 23.5505 S / Long: 46.6333 W</div>
        <div className="flex justify-end">
          <div className="w-12 h-px bg-shark-accent" />
        </div>
        <div className="flex justify-end">
          <div className="h-12 w-px bg-shark-accent" />
        </div>
      </div>
      <div className="fixed bottom-6 left-6 z-[60] pointer-events-none opacity-20 hidden lg:block">
        <div className="h-12 w-px bg-shark-accent" />
        <div className="w-12 h-px bg-shark-accent" />
        <div className="text-[8px] font-mono tracking-widest uppercase mt-1">Shark.OS v2.4.0</div>
      </div>

      {/* Deep Sea Light Rays */}
      <div className="deep-sea-rays" />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-shark-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating Particles (Life) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-shark-accent/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] flex items-center justify-center premium-blue-gradient text-white w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 group border border-white/10"
      >
        <WhatsAppIcon size={28} className="group-hover:rotate-12 transition-transform" />
      </a>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-shark-black/10 backdrop-blur-sm border-b border-white/[0.03] py-4' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <Zap className="text-shark-accent fill-shark-accent/20" size={20} />
              </div>
              <span className="font-display font-light text-xl tracking-[-0.05em] uppercase">
                SHARK<span className="text-shark-accent font-medium">SALES</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-10">
                <a href="#quem-somos" className="nav-link">QUEM SOMOS</a>
                <a href="#servicos" className="nav-link">SERVIÇOS</a>
                <a href="#social-selling" className="nav-link">SOCIAL SELLING</a>
                <a href="#metodologia" className="nav-link">METODOLOGIA</a>
              </div>
              <div className="flex items-center gap-6 border-l border-white/[0.05] pl-12">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-shark-accent transition-colors"><Instagram size={16} /></a>
                <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-shark-accent transition-colors"><Linkedin size={16} /></a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-shark-accent transition-colors"><WhatsAppIcon size={16} /></a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium py-2.5 px-8 text-[8px]">SAIBA MAIS</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 w-full bg-shark-black/95 backdrop-blur-3xl border-b border-white/[0.05] p-10 flex flex-col gap-8 text-center"
            >
              <a href="#quem-somos" onClick={() => setIsMenuOpen(false)} className="nav-link text-xs">QUEM SOMOS</a>
              <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="nav-link text-xs">SERVIÇOS</a>
              <a href="#social-selling" onClick={() => setIsMenuOpen(false)} className="nav-link text-xs">SOCIAL SELLING</a>
              <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="nav-link text-xs">METODOLOGIA</a>
              <div className="flex justify-center gap-8 py-4">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-white"><Instagram size={20} /></a>
                <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="text-white"><Linkedin size={20} /></a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white"><WhatsAppIcon size={20} /></a>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-premium flex items-center justify-center gap-3 py-3 px-6 rounded-xl">
                <WhatsAppIcon size={16} />
                <span className="text-[10px] font-bold tracking-widest">SAIBA MAIS</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      </header>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 max-w-7xl mx-auto px-8 lg:px-16 text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-8 flex justify-center items-center gap-4"
            >
              <div className="w-8 h-px bg-shark-accent/30" />
              <span className="sub-title font-mono text-[10px]">Aceleração Comercial</span>
              <div className="w-8 h-px bg-shark-accent/30" />
            </motion.div>
            <h1 className="hero-title mb-10">
              Seu Negócio <br />
              <span className="text-shark-accent text-glow-blue font-medium">no Topo.</span>
            </h1>
            <p className="text-base md:text-lg text-white mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
              Transformamos marketing e vendas em uma <span className="text-shark-accent font-normal">máquina previsível de crescimento</span> através de inteligência comercial de elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="#contato" className="btn-premium flex items-center justify-center gap-4 group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                Marcar Reunião Estratégica <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Hero Data Readout */}
            <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
              {[
                { label: "STATUS", value: "OPTIMIZED" },
                { label: "CONVERSION", value: "+248%" },
                { label: "EFFICIENCY", value: "MAX" },
                { label: "LATENCY", value: "0.02ms" }
              ].map((item, i) => (
                <div key={i} className="text-left">
                  <div className="text-[8px] font-mono uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
                  <div className="text-xs font-mono text-shark-accent">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-shark-accent/5 blur-[150px] rounded-full -z-10" />
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <div className="section-divider mx-auto" />
              <h2 className="text-3xl md:text-5xl font-light mb-14 uppercase leading-tight tracking-tight text-white">
                Mais do que uma mentoria, somos o <span className="text-shark-accent font-medium">braço estratégico</span> das empresas que buscam o domínio.
              </h2>
              <p className="text-lg text-white leading-relaxed font-light tracking-wide">
                A Shark Sales redefine a jornada comercial. Unimos tecnologia, psicologia de vendas e gestão de tráfego de alta performance para colocar sua marca em uma posição de autoridade absoluta no mercado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mercado vs Shark Sales */}
      <section className="py-24 border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl font-light mb-10 uppercase leading-[1.1] tracking-tighter text-white">
                O mercado te mantém no <span className="text-white/40">cardume.</span> <br />
                Nós despertamos o <span className="text-shark-accent font-medium">predador.</span>
              </h2>
              <p className="text-lg text-white font-light tracking-wide max-w-md">
                Enquanto outros entregam volume, nós entregamos precisão. Saia da dependência e construa um ecossistema de vendas autossustentável.
              </p>
            </motion.div>

            <div className="grid gap-8">
              <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-card p-10 flex gap-8 items-start">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 opacity-40">
                  <XCircle className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3 uppercase tracking-[0.2em] text-white">O Cardume (Mercado)</h4>
                  <p className="text-base text-white font-light leading-relaxed">Estratégias genéricas, falta de acompanhamento e resultados que flutuam conforme a sorte.</p>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="glass-card p-10 flex gap-8 items-start border-l border-shark-accent/30">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-shark-accent" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3 uppercase tracking-[0.2em] text-shark-accent">O Predador (Shark Sales)</h4>
                  <p className="text-base text-white font-light leading-relaxed">Método validado, acompanhamento consultivo e foco total em escala previsível e sustentável.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Entregas */}
      <section id="servicos" className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="section-divider mx-auto" />
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">Nossas Entregas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                category: "Comercial",
                title: "Mentorias Comerciais", 
                icon: Users, 
                description: "Diagnóstico de time, estruturação de jornada e scripts sob medida.",
                features: ["Metodologia Prática", "Resultados Mensuráveis", "Previsibilidade"],
                id: "01"
              },
              { 
                category: "Marketing",
                title: "Tráfego Pago", 
                icon: TrendingUp, 
                description: "Gestão de Meta, Google e YouTube Ads com foco em ROI.",
                features: ["Criativos de Alta Conversão", "Dashboards em Tempo Real", "Otimização de CPL"],
                id: "02"
              },
              { 
                category: "Social Selling",
                title: "Vitrine Digital", 
                icon: Share2, 
                description: "Gestão de perfil focada em autoridade e conversão estratégica.",
                features: ["Roteiros de Stories", "Narrativas de Venda", "Design Profissional"],
                id: "03"
              },
              { 
                category: "CRM",
                title: "Gestão de CRM", 
                icon: Database, 
                description: "Implementação e automação para rastreio total de oportunidades.",
                features: ["Integração de Funil", "Automação de Follow-up", "Escalabilidade"],
                id: "04"
              },
              { 
                category: "IA",
                title: "SDR Digital", 
                icon: Zap, 
                description: "Inteligência Artificial que qualifica leads 24/7 em tempo real.",
                features: ["Atendimento Imediato", "Qualificação Automática", "Escala Ilimitada"],
                id: "05"
              },
              { 
                category: "Tech",
                title: "Site de alta performance", 
                icon: Rocket, 
                description: "Desenvolvimento de landing pages e sites ultra-velozes focados em conversão.",
                features: ["Carregamento Instantâneo", "SEO Avançado", "Design Responsivo"],
                id: "06"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="neon-blue-card p-8 group flex flex-col h-full hover:bg-shark-accent/[0.03] tech-border"
              >
                <div className="tech-corner-bl" />
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 flex items-center justify-center text-shark-accent/40 group-hover:text-shark-accent transition-all duration-700">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-shark-accent/60 block mb-1">{item.category}</span>
                    <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">ID: {item.id}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium mb-4 uppercase tracking-tight text-white font-display">{item.title}</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">{item.description}</p>
                
                <div className="space-y-3 mt-auto">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-shark-accent/40" />
                      <span className="text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculadora de Impacto */}
      <section className="py-24 bg-white/[0.01] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <motion.div 
              {...fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 bg-shark-accent/10 border border-shark-accent/20 rounded-full mb-8"
            >
              <Zap size={12} className="text-shark-accent" />
              <span className="text-[10px] font-bold text-shark-accent uppercase tracking-widest">SDR Digital com IA</span>
            </motion.div>
            <motion.h2 
              {...fadeIn}
              className="text-4xl md:text-6xl font-black mb-6 uppercase leading-tight tracking-tighter text-white"
            >
              Quanto você perde por <span className="text-shark-accent text-glow-blue">não ter IA</span> <br className="hidden md:block" /> trabalhando 24/7?
            </motion.h2>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60 font-light max-w-2xl mx-auto"
            >
              Simule o impacto real de um SDR Digital na sua receita mensal.
            </motion.p>
          </div>

          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Calculator />
          </motion.div>
        </div>
      </section>

      {/* Social Selling - Destaque Principal */}
      <section id="social-selling" className="py-24 bg-white/[0.01] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn}>
              <span className="sub-title mb-6 block">Aceleração Comercial</span>
              <h3 className="text-4xl md:text-6xl font-light mb-10 uppercase leading-[1.1] tracking-tighter text-white">
                O Ecossistema de Vendas <span className="text-shark-accent font-medium">Shark Sales</span>
              </h3>
              <p className="text-xl text-white font-light mb-16 italic tracking-wide">
                "Sua rede social deixa de ser conteúdo. E passa a ser uma máquina de prospecção silenciosa."
              </p>
              <div className="grid sm:grid-cols-2 gap-y-10 gap-x-12">
                {[
                  { title: "Social Selling Estratégico", icon: Target },
                  { title: "Autoridade Imediata", icon: Award },
                  { title: "Conteúdo de Performance", icon: Zap },
                  { title: "Engenharia de Stories", icon: Rocket },
                  { title: "Social Selling & Vitrine Digital", icon: Share2 },
                  { title: "Curadoria de Tendências", icon: Eye },
                  { title: "Captação de Leads", icon: Database },
                  { title: "Inteligência de Dados", icon: BarChart3 }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <item.icon size={14} className="text-shark-accent/60 group-hover:text-shark-accent transition-colors" />
                    <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-white group-hover:text-white transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="relative aspect-square flex items-center justify-center p-12"
            >
              <div className="absolute inset-0 bg-shark-accent/[0.03] blur-[120px] rounded-full" />
              <div className="relative w-full h-full border border-white/[0.05] flex items-center justify-center overflow-hidden rounded-3xl tech-border">
                <div className="tech-corner-bl" />
                {/* Schematic Grid Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle, #00A3FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />
                <div className="text-center relative z-10">
                  <div className="text-[80px] font-light text-white/[0.02] leading-none mb-4 tracking-tighter font-mono">SHARK</div>
                  <div className="text-2xl font-medium text-shark-accent/40 tracking-[0.4em] uppercase font-mono">ECOSYSTEM</div>
                  <div className="mt-8 flex justify-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-shark-accent animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-shark-accent/40" />
                    <div className="w-2 h-2 rounded-full bg-shark-accent/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metodologia Shark */}
      <section id="metodologia" className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="section-divider mx-auto" />
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">Metodologia</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Diagnóstico Preciso", icon: Target },
              { title: "Soluções Integradas", icon: Zap },
              { title: "Acompanhamento Próximo", icon: Users },
              { title: "Escala com Inteligência", icon: ShieldCheck },
              { title: "Otimização Contínua", icon: BarChart3 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="neon-blue-card p-10 text-center flex flex-col items-center group"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-8 text-shark-accent/20 group-hover:text-shark-accent transition-colors">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <h5 className="text-[11px] font-medium uppercase tracking-[0.2em] text-white group-hover:text-white transition-colors leading-relaxed">{item.title}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Jornada de Implementação */}
      <section className="py-24 bg-white/[0.005] border-y border-white/[0.02]">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-20">
            <div className="section-divider mx-auto" />
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white">Jornada de <span className="text-shark-accent font-medium">Implementação</span></h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Onboarding High-Ticket", desc: "Alinhamento estratégico e definição de KPIs de elite.", id: "01" },
              { title: "Engenharia de Processos", desc: "Estruturação técnica do ecossistema e CRM.", id: "02" },
              { title: "Ativação de Demanda", desc: "Lançamento das campanhas e ativação do SDR Digital.", id: "03" },
              { title: "Escala & Dominância", desc: "Otimização contínua para maximização de ROI.", id: "04" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="neon-blue-card p-8 group flex flex-col h-full hover:bg-shark-accent/[0.03] tech-border relative"
              >
                <div className="tech-corner-bl" />
                
                {/* Step Number Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 rounded-lg bg-shark-accent/10 flex items-center justify-center text-shark-accent font-mono text-xs font-bold border border-shark-accent/20">
                    {step.id}
                  </div>
                  <div className="text-[10px] font-mono text-white/20 tracking-widest uppercase">Phase: {step.id}</div>
                </div>

                <h6 className="text-lg font-medium uppercase tracking-tight text-white group-hover:text-shark-accent transition-colors duration-700 mb-4 font-display">
                  {step.title}
                </h6>
                <p className="text-sm text-white/60 font-light leading-relaxed tracking-wide">{step.desc}</p>
                
                {/* Decorative Connector (Desktop Only) */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 z-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Reunião Estratégica */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-7xl font-light mb-12 uppercase leading-[1.1] tracking-tighter text-white">
              Pronto para escalar com <span className="text-shark-accent font-medium">previsibilidade?</span>
            </h2>
            <p className="text-lg md:text-xl mb-16 text-white font-light tracking-wide max-w-2xl mx-auto">
              Em uma reunião estratégica, identificamos seus gargalos e desenhamos o caminho para transformar seu processo em uma máquina de vendas de elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a href="#contato" className="btn-premium px-14">Agendar Reunião</a>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Contato / Formulário */}
        <section id="contato" className="py-24 border-t border-white/[0.03]">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-32">
              <motion.div {...fadeIn}>
                <div className="section-divider" />
                <h2 className="text-4xl md:text-6xl font-light mb-10 uppercase leading-[1.1] tracking-tighter text-white">
                  Seu negócio está prestes a sair do <span className="text-shark-accent font-medium">cardume.</span>
                </h2>
                <p className="text-lg text-white font-light mb-16 tracking-wide">
                  Preencha os dados abaixo. Nossa equipe de inteligência comercial entrará em contato em até 3 dias úteis.
                </p>
                <div className="space-y-10">
                  <div className="flex items-center gap-8 group">
                    <div className="w-12 h-12 bg-white/[0.02] flex items-center justify-center group-hover:bg-shark-accent/10 transition-colors">
                      <Instagram size={20} className="text-white group-hover:text-shark-accent" />
                    </div>
                    <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-white hover:text-white transition-colors" aria-label="Acesse nosso Instagram">@shark.salesbr</a>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-12 h-12 bg-white/[0.02] flex items-center justify-center group-hover:bg-shark-accent/10 transition-colors">
                      <Linkedin size={20} className="text-white group-hover:text-shark-accent" />
                    </div>
                    <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-white hover:text-white transition-colors" aria-label="Acesse nosso LinkedIn">Shark Sales</a>
                  </div>
                </div>
              </motion.div>

            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="glass-card p-14"
            >
              <form className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">Nome</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/[0.05] py-4 focus:border-shark-accent outline-none transition-colors font-light text-base placeholder:text-white/5" placeholder="Nome completo" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">Empresa</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/[0.05] py-4 focus:border-shark-accent outline-none transition-colors font-light text-base placeholder:text-white/5" placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">WhatsApp</label>
                    <input type="tel" className="w-full bg-transparent border-b border-white/[0.05] py-4 focus:border-shark-accent outline-none transition-colors font-light text-base placeholder:text-white/5" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">E-mail</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/[0.05] py-4 focus:border-shark-accent outline-none transition-colors font-light text-base placeholder:text-white/5" placeholder="seu@email.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-white">Desafio Atual</label>
                  <textarea rows={2} className="w-full bg-transparent border-b border-white/[0.05] py-4 focus:border-shark-accent outline-none transition-colors font-light text-base placeholder:text-white/5 resize-none" placeholder="Qual seu maior gargalo?" />
                </div>
                <button type="submit" className="btn-premium w-full">Enviar Solicitação</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="py-16 border-t border-white/[0.03] bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-shark-accent flex items-center justify-center rounded-sm">
                  <span className="text-shark-black font-black text-lg">S</span>
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">SHARK SALES</span>
              </div>
              <p className="text-[12px] uppercase tracking-[0.3em] text-white/40">Aceleração Comercial de Elite</p>
            </div>
            
            <div className="flex justify-center gap-10">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-shark-accent hover:border-shark-accent transition-all duration-500">
                <Instagram size={18} />
              </a>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-shark-accent hover:border-shark-accent transition-all duration-500">
                <Linkedin size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-shark-accent hover:border-shark-accent transition-all duration-500">
                <WhatsAppIcon size={18} />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-[11px] font-medium text-white uppercase tracking-widest">
                Shark Sales
              </p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">
                CNPJ: 65.555.420/0001-80
              </p>
              <p className="text-[9px] text-white/20 uppercase tracking-widest mt-2">
                © 2026 Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Shield, Zap, TrendingUp, Users, Calendar, Video } from 'lucide-react';
import { useInView } from "../hooks/useInView";
import { siteConfig } from "../../config/site";
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: "Asesoría Online",
    price: "Flexible",
    desc: "Acompañamiento global. Nutrición basada en ciencia sin importar dónde estés.",
    icon: Video,
    features: ["Plan nutricional personalizado", "Seguimiento vía WhatsApp", "Ajustes semanales"]
  },
  {
    title: "Pack 3 Meses",
    price: "Premium",
    desc: "Transformación profunda. El método completo para resultados sostenibles.",
    icon: Zap,
    features: ["Análisis metabólico", "Guía de suplementación", "Recetario exclusivo"]
  },
  {
    title: "Presencial",
    price: "Elite",
    desc: "La experiencia completa en Caracas. Evaluación antropométrica in-situ.",
    icon: Users,
    features: ["Medición de pliegues", "Bioimpedancia", "Consulta 1-a-1"]
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-zinc-900 overflow-hidden">
      <div className="container-cfl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            className="nike-title mb-8 tracking-tight"
          >
            Invierte <br /> <span className="text-[#260000]">EN TI.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-white/40 font-bold uppercase tracking-widest text-sm"
          >
            Soluciones de alto rendimiento para objetivos reales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 100,
                scale: { duration: 0.4 } 
              }}
              className="relative group bg-zinc-950 p-8 md:p-12 border border-white/5 hover:border-[#260000]/50 transition-all rounded-[2.5rem] overflow-hidden"
            >
              {/* Animated Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#260000]/10 blur-[60px] group-hover:bg-[#260000]/30 transition-all duration-700" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-[#260000]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[#260000] font-black tracking-[0.3em] uppercase text-[10px] mb-2 block">{s.price}</span>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">{s.desc}</p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-white/60">
                      <div className="w-1.5 h-1.5 bg-[#260000] rotate-45" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a 
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-white text-black font-black italic tracking-widest uppercase text-xs text-center hover:bg-[#260000] hover:text-white transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(38,0,0,0.3)]"
                >
                  Me interesa
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

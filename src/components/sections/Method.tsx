import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Brain, Activity } from 'lucide-react';

const STEPS = [
  {
    icon: Target,
    title: "Diagnóstico",
    desc: "Análisis profundo de tu punto de partida. No solo peso, sino contexto real.",
    accent: "01"
  },
  {
    icon: Brain,
    title: "Estrategia",
    desc: "Diseño de un plan que se adapta a tu vida, no al revés. Ciencia aplicada.",
    accent: "02"
  },
  {
    icon: Activity,
    title: "Ejecución",
    desc: "Acompañamiento constante. El motor de tu cambio es la consistencia.",
    accent: "03"
  }
];

const Method = () => {
  return (
    <section id="metodologia" className="section-padding bg-black text-white relative">
      <div className="container-cfl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="nike-title mb-10">Meta <br /> <span className="text-white/20">Programada.</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#260000] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-white" />
                </div>
                <div>
                  <h4 className="font-black italic uppercase tracking-tighter text-xl mb-2">Ciencia Sin Excusas</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Metodología basada en evidencia clínica y deportiva. Sin hacks, solo resultados.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0">
                  <Activity className="text-black" />
                </div>
                <div>
                  <h4 className="font-black italic uppercase tracking-tighter text-xl mb-2">Rendimiento Total</h4>
                  <p className="text-white/40 text-sm leading-relaxed">Optimizamos cada variable: nutrición, descanso y suplementación estratégica.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, filter: 'grayscale(1)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'grayscale(0)' }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[4rem] border-8 border-white/5">
              <img 
                src="/images/method-action.jpg" 
                alt="Cristian in action" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Athletic Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-[#260000] p-10 rounded-full w-40 h-40 flex flex-col items-center justify-center border-4 border-black text-center group hover:scale-110 transition-transform">
              <span className="font-black italic text-4xl mb-1">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Enfoque</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative group pt-16"
            >
              <span className="absolute top-0 left-0 text-[10rem] font-black italic text-white/[0.03] leading-none pointer-events-none group-hover:text-[#260000]/10 transition-colors">
                {step.accent}
              </span>
              <div className="relative z-10">
                <div className="w-20 h-2px bg-[#260000] mb-8 group-hover:w-32 transition-all duration-500" />
                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 group-hover:pl-4 transition-all">{step.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm max-w-xs">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;

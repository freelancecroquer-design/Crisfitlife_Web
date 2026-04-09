import React from 'react';
import { motion } from 'framer-motion';
import { Target, ClipboardList, AppWindow, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    title: "Análisis 360",
    text: "Evaluamos fisiología, hábitos y psicología antes de trazar un solo gramo."
  },
  {
    num: "02",
    title: "Ingeniería Dietética",
    text: "Planes precisos que se adaptan a tu presupuesto y vida social real."
  },
  {
    num: "03",
    title: "Optimización Continua",
    text: "Ajsutes semanales basados en data para garantizar el progreso."
  }
];

const Method = () => {
  return (
    <section id="metodologia" className="section-padding bg-zinc-50 overflow-hidden">
      <div className="container-cfl">
        
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="nike-title text-black mb-8"
            >
              Cómo <br /> <span className="text-zinc-300">Ganamos.</span>
            </motion.h2>
            <p className="text-xl font-bold tracking-tight text-zinc-500 max-w-sm">
              Un sistema refinado durante años con atletas elite, ahora disponible para ti.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1 relative group"
          >
            {/* New Methodology Action Photo as requested */}
            <div className="aspect-video overflow-hidden rounded-[2rem] shadow-2xl photo-mask-red">
              <img 
                src="/images/method-action.jpg" 
                alt="Cristian Cardona en acción" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-2xl hidden md:block">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#260000]">Resultados Garantizados</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-white border border-zinc-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
            >
              <span className="absolute top-6 right-8 font-black text-6xl text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity">
                {step.num}
              </span>
              <div className="flex flex-col h-full relative z-10">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg mb-8 group-hover:bg-[#260000] transition-colors">
                   <Target className="w-5 h-5" />
                </div>
                <h3 className="font-body font-black text-2xl uppercase tracking-tighter mb-4">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {step.text}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#260000] opacity-0 group-hover:opacity-100 transition-all">
                  Saber más <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Quote Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 bg-black rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#260000]/20 to-transparent pointer-events-none" />
          <h4 className="font-display italic text-3xl md:text-5xl text-white mb-8 relative z-10">
            "La nutrición no es solo comida, es el combustible de tus ambiciones."
          </h4>
          <a href="#contacto" className="btn-premium relative z-10">
            Únete al equipo
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Method;

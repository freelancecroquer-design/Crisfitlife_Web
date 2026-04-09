import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "¿Necesito vivir en Venezuela para una asesoría?",
    a: "Para nada. Mi modalidad Online está diseñada para atender a pacientes en cualquier parte del mundo. He trabajado con personas en España, Estados Unidos, Chile y más, logrando los mismos resultados que en presencial."
  },
  {
    q: "¿Tengo que comprar suplementos costosos?",
    a: "No es obligatorio. Mi enfoque es 'Alimentación Primero'. Los suplementos son solo herramientas opcionales que sugiero únicamente si tu contexto y objetivos realmente lo requieren."
  },
  {
    q: "¿Cómo son los planes de comida?",
    a: "Son 100% personalizados. No te daré una lista genérica. Diseñamos un menú que respeta tus gustos, presupuesto y tiempo disponible para cocinar. La adherencia es lo más importante."
  },
  {
    q: "¿Qué métodos de pago aceptas?",
    a: "Acepto pagos en bolívares (Tasa BCV) vía Pago Móvil, transferencias Zelle y otros métodos digitales. La idea es que el proceso de inscripción sea lo más fluido posible."
  }
];

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-cfl mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-body text-xs font-black tracking-[0.4em] uppercase mb-4 block"
          >
            Preguntas Frecuentes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-display text-4xl md:text-5xl"
          >
            Despeja tus <span className="italic">dudas</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`border-b transition-all duration-300 ${activeIdx === idx ? 'border-primary' : 'border-slate-100'}`}
            >
              <button
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className={`font-display text-xl md:text-2xl pr-8 ${activeIdx === idx ? 'text-primary' : 'text-slate-400'}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeIdx === idx ? 'bg-primary border-primary text-white' : 'border-slate-200 text-slate-300'}`}>
                  {activeIdx === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-slate-500 leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

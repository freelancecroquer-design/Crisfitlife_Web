import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "C. R.",
    text: "Mi vida cambió por completo. No solo bajé 12 kilos, sino que recuperé la energía que creí haber perdido hace 10 años. Cristian entiende el ritmo de vida real.",
    plan: "Paquete 3 Meses Online"
  },
  {
    name: "M. A.",
    text: "Lo que más valoro es que no siento que estoy a dieta. Es un aprendizaje constante sobre cómo nutrirme sin dejar de disfrutar las reuniones sociales.",
    plan: "Asesoría Presencial"
  },
  {
    name: "J. L.",
    text: "La atención al detalle en el seguimiento es increíble. Siento que tengo un experto de mi lado 24/7. Los resultados hablan por sí solos.",
    plan: "Pack 3 Meses Presencial"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding bg-zinc-950 text-white overflow-hidden">
      <div className="container-cfl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              /* SURGICAL FIX: Normal tracking to avoid overlapping letters in "Reales." */
              className="font-black text-6xl md:text-9xl uppercase leading-[0.9] italic tracking-normal"
            >
              Testimonios <br /> <span className="text-white/30 tracking-tight">Reales.</span>
            </motion.h2>
          </div>
          
          {/* SURGICAL FIX: Fully illuminated yellow stars */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-1 mb-4"
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative group p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-[2rem]"
            >
              <div className="relative z-10">
                <p className="font-display text-xl md:text-2xl leading-relaxed mb-8 text-white/80 italic">
                  "{t.text}"
                </p>
                <div className="flex flex-col gap-1 border-l-2 border-[#260000] pl-6">
                  <span className="font-black tracking-[0.2em] uppercase text-xs">{t.name}</span>
                  <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{t.plan}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* High-Level CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 rounded-[3rem] overflow-hidden bg-[#260000] relative p-12 md:p-20 group"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/soccer.jpg" 
              alt="Cristian Cardona Action" 
              className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-2xl">
              <h3 className="nike-title text-white mb-6">Tu momento es hoy.</h3>
              <p className="text-white/60 text-lg uppercase font-bold tracking-widest">¿ESTÁS LISTO PARA EL SIGUIENTE NIVEL?</p>
            </div>
            <a href="https://wa.me/584125386952" className="btn-premium bg-white text-black hover:bg-zinc-100">
              AGENDAR AHORA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

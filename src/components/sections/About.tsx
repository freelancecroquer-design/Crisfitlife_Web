import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre-cris" className="section-padding bg-white overflow-hidden">
      <div className="container-cfl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          
          {/* Photos: High-Level Reveal Effects RESTORED */}
          <div className="md:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 group"
            >
              {/* Main Photo: Caracas FC Shirt with RESTORED COLOR REVEAL */}
              <div className="aspect-[4/5] overflow-hidden bg-zinc-100 photo-border-effect">
                <img 
                  src="/images/caracas-fc.jpg" 
                  alt="Cristian Cardona Caracas FC" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              
              {/* Floating Aesthetic Labels */}
              <div className="absolute -right-8 bottom-12 [writing-mode:vertical-lr] rotate-180 hidden lg:block">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-300">
                  EST. 2026 // CARACAS FC NUTRITION
                </span>
              </div>
            </motion.div>

            {/* Background Decorative Text */}
            <h3 className="absolute -top-12 -left-20 nike-title opacity-5 text-black -z-10 select-none">
              DETERMINATION
            </h3>
          </div>

          {/* Content: Editorial Layout */}
          <div className="md:col-span-5 flex flex-col gap-10 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#260000] mb-6 block">
                Hablar Humano
              </span>
              <h2 className="nike-title mb-8">
                Deporte, <br /> <span className="text-[#260000]">Ciencia</span> <br /> & Alma.
              </h2>
              
              <div className="space-y-6 text-zinc-500 font-medium text-lg leading-relaxed max-w-md">
                <p>
                  No soy solo un nutricionista. Soy el aliado estratégico de atletas de alto rendimiento y personas reales que buscan su mejor versión.
                </p>
                <p>
                  Mi labor en el <strong>Caracas Fútbol Club</strong> me ha enseñado que la nutrición es el motor del éxito, pero que sin empatía, el motor no arranca.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-8"
            >
              <a href="#metodologia" className="btn-premium btn-red">
                Descubre mi visión
              </a>
              <div className="h-[1px] w-20 bg-zinc-200 hidden md:block" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

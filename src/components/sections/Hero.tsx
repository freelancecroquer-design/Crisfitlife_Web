import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background with the RESTORED RED INTENSITY */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/workspace.jpg" 
          alt="Athlete Workspace" 
          className="w-full h-full object-cover grayscale brightness-75 object-center"
        />
        {/* Intenso Rojo Monocromático kept at 85% opacity */}
        <div className="absolute inset-0 bg-[#260000]/85 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content - REPOSITIONED CONTENT FOR MAX VISIBILITY */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 max-w-5xl mx-auto text-center translate-y-[-10px]">
        {/* BIG WHITE LOGO - Slightly scaled for 14" screen harmony */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-10 md:mb-14"
        >
          <img 
            src="/images/logo.png" 
            alt="Cris Fit Life" 
            className="w-full h-auto brightness-0 invert drop-shadow-[0_20px_60px_rgba(255,255,255,0.1)] max-w-4xl mx-auto"
          />
        </motion.div>

        {/* REDESIGNED TRANSFORM BUTTON - RETURNED/RESTORED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          <a
            href="#servicios" 
            className="relative flex items-center gap-6 bg-white text-black py-5 md:py-6 px-10 md:px-14 rounded-none font-black tracking-[0.3em] uppercase text-[10px] md:text-xs overflow-hidden transition-all duration-300 hover:pr-16"
          >
            {/* Shimmer / Liquid Effect */}
            <div className="absolute inset-0 bg-zinc-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            
            <span className="relative z-10">Comienza tu transformación</span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            
            {/* Corner Accents - Nike Elite vibe */}
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#260000]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#260000]" />
          </a>
          
          {/* Subtle Outer Border Animation */}
          <div className="absolute -inset-2 border border-white/10 group-hover:border-white/40 transition-colors duration-500 -z-10" />
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-0 top-0 w-[1px] bg-white/5 hidden lg:block" />
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-30"
      >
        <span className="text-white text-[8px] font-black tracking-[0.4em] uppercase italic">Scroll</span>
        <div className="w-[1px] h-10 bg-white" />
      </motion.div>
    </section>
  );
};

export default Hero;

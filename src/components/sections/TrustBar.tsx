import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const ITEMS = [
    "HABITOS REALES", "ACOMPAÑAMIENTO HUMANO", "CIENCIA APLICADA", 
    "PERSONALIZACIÓN TOTAL", "RENDIMIENTO ELITE", "ESTILO DE VIDA"
  ];

  return (
    <div className="bg-black py-4 overflow-hidden border-y border-white/10">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-16 items-center px-8"
        >
          {[...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
            <span 
              key={idx} 
              className="text-white font-body font-black text-sm uppercase tracking-[0.4em] italic opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustBar;

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {/* Main Botón WhatsApp - Tooltip REMOVEL as requested */}
      <motion.a
        href="https://wa.me/584125386952?text=Hola%20Cristian%21%20Quisiera%20iniciar%20mi%20proceso%20fitness."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative group block"
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity rounded-full" />
        
        {/* Dynamic Rings */}
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute inset-0 bg-emerald-400 rounded-full"
        />

        {/* Main Icon Circle */}
        <div className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
          <MessageCircle className="w-8 h-8 fill-white" />
          
          {/* Shimmer Effect */}
          <motion.div 
            animate={{ left: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </div>

        {/* Badge Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;

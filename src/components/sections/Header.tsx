import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const NAV_LINKS = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-cris' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 flex items-center ${
        scrolled ? 'bg-white h-16 shadow-premium' : 'bg-transparent h-20 md:h-24'
      }`}>
        <div className="container-cfl flex items-center justify-between px-6 w-full mx-auto">
          {/* Logo with Color Inversion */}
          <a href="#inicio" className="relative z-[210]">
            <img 
              src="/images/logo.png" 
              alt="Cris Fit Life" 
              className={`h-9 md:h-11 w-auto transition-all duration-500 ${
                (scrolled || isOpen) ? 'brightness-100 invert' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Action / Menu Trigger */}
          <div className="flex items-center gap-4">
            <button className={`hidden md:block py-3 px-8 text-[10px] font-black tracking-widest uppercase transition-all duration-300 border-2 ${
              (scrolled || isOpen) 
                ? 'border-black text-black hover:bg-black hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-black hover:border-white'
            }`}>
              Agenda Online
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[210] w-12 h-12 flex items-center justify-center group outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="text-black"
                  >
                    <X className="w-8 h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="ball"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center justify-center"
                  >
                    {/* USING EXACT USER-PROVIDED FILES FOR BLACK/WHITE STATES */}
                    <img 
                      src={scrolled ? "/images/icon_black.png" : "/images/icon_white.png"} 
                      alt="Jabulani Icon" 
                      className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-700 group-hover:rotate-[360deg] group-active:rotate-[360deg] rounded-full"
                      style={{ 
                        boxShadow: scrolled ? '0 0 20px rgba(0,0,0,0.1)' : '0 0 20px rgba(255,255,255,0.2)',
                        mixBlendMode: scrolled ? 'multiply' : 'screen'
                      }} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Side Tray Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[180]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[190] shadow-2xl flex flex-col pt-24"
            >
               <div className="flex-grow flex flex-col justify-center px-12 gap-10">
                <nav className="flex flex-col gap-4">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-body font-black text-4xl md:text-5xl uppercase tracking-tighter hover:italic hover:pl-4 transition-all text-[#260000]"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 border-t border-white/5">
      <div className="container-cfl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Compact Brand Info */}
        <div className="flex items-center gap-4">
          <span className="font-body font-black text-white text-lg tracking-tighter">CRIS</span>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-bold italic">Fit Life</span>
        </div>

        {/* Reduced Navigation/Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
          <p className="text-[10px] text-white/30 tracking-widest uppercase font-bold">
            © {new Date().getFullYear()} — LIC. CRISTIAN CARDONA
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/crisfitlife" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-[10px] font-black tracking-widest uppercase">Instagram</a>
            <a href="https://wa.me/584125386952" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-[10px] font-black tracking-widest uppercase">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

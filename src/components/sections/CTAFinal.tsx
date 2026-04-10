import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { siteConfig } from "../../config/site";

export function CTAFinal() {
    const { ref, inView } = useInView(0.15);

    return (
        <section
            id="contacto"
            aria-labelledby="cta-heading"
            className="relative overflow-hidden section-padding bg-zinc-950"
            style={{ minHeight: "600px", display: "flex", alignItems: "center" }}
        >
            {/* Grain texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
                aria-hidden="true"
            />

            <div className="container-cfl mx-auto px-6 relative z-10 text-center" ref={ref as React.Ref<HTMLDivElement>}>
                <motion.div
                    className="flex flex-col items-center gap-10"
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Brand Badge */}
                    <div className="w-16 h-16 bg-[#260000]/20 rounded-2xl flex items-center justify-center border border-[#260000]/30 shadow-[0_0_30px_rgba(38,0,0,0.2)]">
                        <span className="text-2xl">🌱</span>
                    </div>

                    {/* Headline */}
                    <div className="max-w-4xl">
                        <h2 id="cta-heading" className="nike-title text-white mb-6">
                            Tu momento <br /> <span className="text-white/20 italic">Es Hoy.</span>
                        </h2>
                        <p className="text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                            ¿ESTÁS LISTO PARA EL SIGUIENTE NIVEL?
                        </p>
                    </div>

                    {/* Body */}
                    <p className="text-zinc-500 font-medium text-lg leading-relaxed max-w-xl mx-auto">
                        Escribime hoy. Sin compromiso. Con gusto te cuento cómo funciona el proceso y cuál plan se adapta mejor a tus objetivos.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center">
                        <a
                            href={siteConfig.contact.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-premium btn-red"
                        >
                            WhatsApp Directo
                        </a>
                        <a
                            href={`mailto:${siteConfig.contact.email}?subject=Asesoría Nutritional`}
                            className="btn-premium bg-white text-black hover:bg-zinc-100"
                        >
                            Enviar Email
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/5">
                        <div className="flex flex-col gap-2">
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Contacto</span>
                            <a href={siteConfig.links.whatsapp} className="text-xs font-black tracking-widest uppercase hover:text-[#260000] transition-colors">{siteConfig.contact.phone}</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Email</span>
                            <a href={`mailto:${siteConfig.contact.email}`} className="text-xs font-black tracking-widest uppercase hover:text-[#260000] transition-colors">{siteConfig.contact.email}</a>
                        </div>
                         <div className="flex flex-col gap-2">
                            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">Social</span>
                            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest uppercase hover:text-[#260000] transition-colors">Instagram</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CTAFinal;

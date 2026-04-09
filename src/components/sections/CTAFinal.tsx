import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const WA_LINK = "https://wa.me/584125386952?text=Hola%20Cristian%2C%20quiero%20comenzar%20mi%20asesor%C3%ADa%20nutricional.";
const EMAIL = "crisfitlifeinfo@gmail.com";

export function CTAFinal() {
    const { ref, inView } = useInView(0.15);

    return (
        <section
            id="contacto"
            aria-labelledby="cta-heading"
            className="relative overflow-hidden"
            style={{ background: "var(--gradient-dark)", minHeight: "520px", display: "flex", alignItems: "center" }}
        >
            {/* Decorative elements */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15"
                style={{
                    background: "radial-gradient(circle, hsl(168 46% 49%) 0%, transparent 65%)",
                    transform: "translate(30%, -30%)",
                }}
                aria-hidden="true"
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
                style={{
                    background: "radial-gradient(circle, hsl(11 85% 66%) 0%, transparent 65%)",
                    transform: "translate(-30%, 30%)",
                }}
                aria-hidden="true"
            />

            {/* Grain texture */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
                aria-hidden="true"
            />

            <div className="container-narrow mx-auto px-4 py-24 relative z-10 text-center" ref={ref as React.Ref<HTMLDivElement>}>
                <motion.div
                    className="flex flex-col items-center gap-8"
                    initial={{ opacity: 0, y: 32 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Icon */}
                    <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(66,184,158,0.15)", border: "1px solid rgba(66,184,158,0.3)" }}
                        aria-hidden="true"
                    >
                        <span className="text-2xl">🌿</span>
                    </div>

                    {/* Headline */}
                    <div className="flex flex-col gap-3">
                        <p className="text-label-light">¿Listo para empezar?</p>
                        <h2 id="cta-heading" className="heading-hero text-white max-w-xl mx-auto">
                            El primer paso{" "}
                            <em
                                className="not-italic"
                                style={{
                                    color: "transparent",
                                    WebkitTextStroke: "1.5px hsl(168 46% 65%)",
                                }}
                            >
                                es el más fácil.
                            </em>
                        </h2>
                    </div>

                    {/* Body */}
                    <p
                        className="text-base md:text-lg leading-relaxed max-w-lg font-body"
                        style={{ color: "rgba(247,247,242,0.72)" }}
                    >
                        Escribime hoy. Sin compromiso, sin formularios largos. Con gusto te cuento
                        cómo funciona el proceso y cuál plan se adapta mejor a tus objetivos.
                    </p>

                    {/* Trust micro */}
                    <p
                        className="text-xs font-body"
                        style={{ color: "rgba(247,247,242,0.4)" }}
                    >
                        Lic. en Nutrición y Dietética · UCV · Nutricionista del Caracas FC
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="final-cta-whatsapp"
                            className="btn-base btn-whatsapp text-base px-8 py-4 animate-pulse-cta"
                            style={{ borderRadius: "9999px" }}
                            aria-label="Escribir a Cristian Cardona por WhatsApp"
                        >
                            <WhatsAppIcon />
                            Escribir por WhatsApp
                        </a>
                        <a
                            href={`mailto:${EMAIL}?subject=Consulta asesoría nutricional`}
                            id="final-cta-email"
                            className="btn-base btn-ghost-dark text-base px-8 py-4"
                            style={{ borderRadius: "9999px" }}
                            aria-label="Enviar email a Cris Fit Life"
                        >
                            <EmailIcon />
                            Enviar email
                        </a>
                    </div>

                    {/* Contact info pills */}
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                        <a
                            href="https://wa.me/584125386952"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-body transition-colors"
                            style={{ color: "rgba(247,247,242,0.55)" }}
                            aria-label="Teléfono WhatsApp"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" aria-hidden="true" />
                            +58 412 538 6952
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="flex items-center gap-2 text-sm font-body transition-colors"
                            style={{ color: "rgba(247,247,242,0.55)" }}
                            aria-label="Email de contacto"
                        >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(var(--primary))" }} aria-hidden="true" />
                            {EMAIL}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function WhatsAppIcon() {
    return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.852L.057 23.98l6.289-1.466A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 21.818a9.878 9.878 0 01-5.03-1.372l-.361-.214-3.733.871.938-3.622-.235-.372A9.848 9.848 0 012.177 12c0-5.435 4.417-9.852 9.852-9.852 5.435 0 9.852 4.417 9.852 9.852s-4.417 9.818-9.852 9.818z" fillRule="evenodd" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

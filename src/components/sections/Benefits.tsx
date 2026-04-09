import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const DIFFERENTIALS = [
    {
        id: "personalizado",
        icon: "🎯",
        title: "Plan 100% personalizado",
        body: "Sin plantillas genéricas. Cada plan parte de tu historia, objetivos, metabolismo y estilo de vida.",
        highlight: false,
    },
    {
        id: "educacion",
        icon: "📚",
        title: "Educación, no dependencia",
        body: "Mi objetivo es que aprendas a comer bien por tu cuenta. Te doy herramientas, no solo un menú.",
        highlight: false,
    },
    {
        id: "acompañamiento",
        icon: "🤝",
        title: "Seguimiento real semanal",
        body: "No desaparezco después de darte un PDF. Estoy disponible cada semana para ajustar, responder y motivar.",
        highlight: true,
    },
    {
        id: "clinica",
        icon: "🩺",
        title: "Condiciones clínicas también",
        body: "Trabajo con HTA, dislipidemia, diabetes tipo 2, hígado graso, gastritis, alergias e intolerancias alimentarias.",
        highlight: false,
    },
    {
        id: "deporte",
        icon: "⚡",
        title: "Rendimiento deportivo",
        body: "Experiencia en optimizar composición corporal, energía y recuperación para atletas y personas activas.",
        highlight: false,
    },
    {
        id: "flexible",
        icon: "🔄",
        title: "Se adapta a tu realidad",
        body: "Tu plan debe encajar con tu trabajo, familia y presupuesto. Sin extremos, sin prohibiciones absolutas.",
        highlight: false,
    },
];

const COMPARISON = [
    { aspect: "¿Es personalizado?", cris: "Sí, desde la primera sesión", generic: "Plantilla genérica" },
    { aspect: "¿Hay seguimiento?", cris: "Semanal por WhatsApp", generic: "Solo en consulta" },
    { aspect: "¿Incluye educación?", cris: "Siempre, es el eje central", generic: "No siempre" },
    { aspect: "¿Online disponible?", cris: "Sí, en cualquier país", generic: "Depende" },
    { aspect: "¿Condiciones clínicas?", cris: "Sí, formación certificada", generic: "Limitado" },
];

export function Benefits() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            id="beneficios"
            aria-labelledby="benefits-heading"
            className="section-padding relative overflow-hidden"
            style={{ background: "hsl(var(--muted))" }}
        >
            {/* bg decoration */}
            <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, hsl(168 46% 80%) 0%, transparent 70%)",
                    transform: "translate(30%, -30%)",
                }}
                aria-hidden="true"
            />

            <div className="container-cfl mx-auto relative z-10" ref={ref as React.Ref<HTMLDivElement>}>
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-label mb-3">¿Por qué elegir CFL?</p>
                    <h2 id="benefits-heading" className="heading-section text-foreground mb-5">
                        Una asesoría diferente.{" "}
                        <span className="text-gradient-primary italic">Resultados que se sostienen.</span>
                    </h2>
                    <p className="text-body max-w-xl mx-auto">
                        No busco que dependas de mí indefinidamente. Busco que construyas hábitos
                        que perduren cuando yo ya no esté.
                    </p>
                </motion.div>

                {/* Differentials grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {DIFFERENTIALS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            id={`benefit-${item.id}`}
                            className={`card-base p-6 flex flex-col gap-3 group transition-all duration-300 hover:-translate-y-1 ${
                                item.highlight ? "border-primary/30" : ""
                            }`}
                            style={item.highlight ? {
                                background: "linear-gradient(135deg, hsl(168 46% 49% / 0.06) 0%, hsl(var(--surface)) 100%)",
                                borderColor: "hsl(168 46% 49% / 0.3)",
                            } : {}}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                            <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                            <p className="text-body text-sm">{item.body}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison table */}
                <motion.div
                    className="card-base overflow-hidden"
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div
                        className="px-6 py-4 border-b"
                        style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--surface-warm))" }}
                    >
                        <p className="font-heading text-lg font-semibold text-foreground">
                            Cris Fit Life vs. asesoría genérica
                        </p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full" aria-label="Comparación entre Cris Fit Life y asesoría genérica">
                            <thead>
                                <tr style={{ background: "hsl(var(--muted))" }}>
                                    <th className="py-3 px-6 text-left text-xs font-semibold tracking-wider uppercase font-body" style={{ color: "hsl(var(--muted-foreground))" }}>
                                        Aspecto
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold tracking-wider uppercase font-body" style={{ color: "hsl(var(--primary))" }}>
                                        Cris Fit Life ✓
                                    </th>
                                    <th className="py-3 px-6 text-left text-xs font-semibold tracking-wider uppercase font-body text-muted-foreground">
                                        Asesoría genérica
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {COMPARISON.map((row, i) => (
                                    <tr
                                        key={row.aspect}
                                        style={{ borderTop: i > 0 ? "1px solid hsl(var(--border))" : "none" }}
                                    >
                                        <td className="py-4 px-6 text-sm font-medium text-foreground font-body">{row.aspect}</td>
                                        <td className="py-4 px-6 text-sm font-body" style={{ color: "hsl(var(--primary-dark))" }}>
                                            <span className="flex items-center gap-2">
                                                <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--primary-light))" }} aria-hidden="true">
                                                    <svg className="w-2 h-2" viewBox="0 0 10 10" fill="none">
                                                        <path d="M2 5L4 7L8 3" stroke="hsl(168 46% 40%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                                {row.cris}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-sm text-muted-foreground font-body">{row.generic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

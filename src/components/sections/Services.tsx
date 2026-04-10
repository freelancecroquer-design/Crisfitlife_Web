import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const WA_LINK_BASE = "https://wa.me/584125386952?text=Hola%20Cristian%2C%20me%20interesa%20el%20plan%20";

type PlanKey = "presencial" | "online" | "especiales";

const PLANS = {
  presencial: [
    {
      id: "p-primera",
      title: "Primera Asesoría (1 mes)",
      price: "100",
      features: ["Consulta inicial completa", "Mediciones corporales", "Plan personalizado", "Apoyo por WhatsApp"],
      wa: "Presencial%20Primera%20Vez"
    },
    {
      id: "p-pack3",
      title: "Pack 3 Meses",
      price: "230",
      featured: true,
      features: ["3 meses de seguimiento", "Controles mensuales", "Mediciones incluidas", "Plan Dinámico", "Ahorro significativo"],
      wa: "Pack%20Presencial%203%20Meses"
    }
  ],
  online: [
    {
      id: "o-primera",
      title: "Primera Online (1 mes)",
      price: "50",
      features: ["Videollamada 40 min", "Análisis clínico", "Plan personalizado", "Apoyo por WhatsApp"],
      wa: "Online%20Primera%20Vez"
    },
    {
      id: "o-pack3",
      title: "Pack 3 Meses Online",
      price: "130",
      featured: true,
      features: ["12 semanas seguimiento", "3 Videollamadas", "Ajustes semanales", "Educación continua"],
      wa: "Pack%20Online%203%20Meses"
    }
  ],
  especiales: [
    {
      id: "e-pareja",
      title: "Asesoría Pareja",
      price: "180",
      features: ["Dos planes individuales", "Estrategias conjuntas", "Mismos beneficios", "Precio preferencial"],
      wa: "Asesoría%20Pareja"
    },
    {
      id: "e-mediciones",
      title: "Solo Mediciones",
      price: "40",
      features: ["Plicometría / Composición", "Informe detallado", "Sin plan alimenticio", "Ideal para control pro"],
      wa: "Solo%20Mediciones"
    }
  ]
};

const TAB_DATA: { key: PlanKey; label: string }[] = [
  { key: "presencial", label: "Presencial" },
  { key: "online", label: "Online" },
  { key: "especiales", label: "Especiales" }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<PlanKey>("presencial");

  return (
    <section id="servicios" className="section-padding bg-zinc-50">
      <div className="container-cfl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-black font-body font-black text-6xl md:text-8xl uppercase tracking-tighter italic"
          >
            Invierte en ti
          </motion.h2>
        </div>

        {/* New Nike-Style Pill Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-zinc-200 p-1 rounded-full">
            {TAB_DATA.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all ${
                  activeTab === tab.key 
                  ? "bg-black text-white" 
                  : "text-zinc-500 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {PLANS[activeTab].map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex flex-col p-10 bg-white border border-zinc-200 transition-all ${
                  plan.featured ? "ring-2 ring-black" : ""
                }`}
              >
                <div className="mb-8">
                  <h3 className="font-body font-black text-3xl uppercase tracking-tighter">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-5xl font-black italic tracking-tighter">${plan.price}</span>
                    <span className="text-xs font-black uppercase opacity-40">/ USD</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-10 flex-grow">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-4 items-center text-xs font-bold uppercase tracking-tight text-zinc-500">
                      <div className="h-1 w-1 bg-black rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WA_LINK_BASE}${plan.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium flex items-center justify-center gap-3 w-full"
                >
                  Me interesa <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;

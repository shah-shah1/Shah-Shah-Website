import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Cpu } from "lucide-react";

import pPressure from "./p-pressure.jpg";
import pHeat from "./p-heat.jpg";
import pTank from "./p-tank.jpg";
import pProcess from "./p-process.jpg";
import pCustom from "./p-custom.jpg";

const engineeringProducts = [
  { title: "Pressure Vessels", desc: "ASME-grade heavy-wall vessels engineered for extreme pressure-temperature cycles.", img: pPressure },
  { title: "Heat Exchangers", desc: "High-integrity shell-and-tube and bespoke regenerative thermal solutions.", img: pHeat },
  { title: "Storage Tanks", desc: "Large-capacity atmospheric and pressurized storage for critical process liquids.", img: pTank },
  { title: "Process Equipments", desc: "Reactors, Columns, Centrifugal Systems, Sparkler Filters and more", img: pProcess },
  { title: "Custom Manufacturing", desc: "Heavy-gauge complex metal structures fabricated strictly to client specification.", img: pCustom },
];

export function Products() {
  const [activeTab, setActiveTab] = useState<"engineering" | "mill-scale">("engineering");

  // Track the hash to seamlessly switch tabs when user interacts with the nav dropdown
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#mill-scale") {
        setActiveTab("mill-scale");
      } else if (hash === "#engineering" || hash === "#products") {
        setActiveTab("engineering");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section id="products" className="relative py-20 lg:py-28 overflow-hidden bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.03),transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" /> Our Divisions
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Industrial Expertise.
              <br />
              <span className="text-gradient-gold italic">Two core pillars.</span>
            </h2>
          </div>

        </div>

        {/* Division Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass p-1.5 rounded-full border border-white/10 flex items-center gap-1.5 max-w-md w-full sm:w-auto">
            <button
              onClick={() => {
                setActiveTab("engineering");
                window.location.hash = "#engineering";
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === "engineering"
                  ? "bg-gold text-background shadow-glow scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Cpu className="size-4" />
              <span>Engineering</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("mill-scale");
                window.location.hash = "#mill-scale";
              }}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === "mill-scale"
                  ? "bg-gold text-background shadow-glow scale-[1.02]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              <Scale className="size-4" />
              <span>Mill Scale</span>
            </button>
          </div>
        </div>

        {/* Active Division Panel */}
        <AnimatePresence mode="wait">
          {activeTab === "engineering" ? (
            <motion.div
              key="engineering"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              id="engineering"
              className="scroll-mt-28"
            >
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
                {engineeringProducts.map((p, i) => (
                  <motion.div
                    key={p.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-card aspect-[4/2.6] sm:aspect-[4/2.5] block transition-all duration-300 hover:border-gold/20"
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover opacity-60 transition-all duration-[1200ms] group-hover:scale-105 group-hover:opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                    <div className="relative h-full flex flex-col justify-end p-5 lg:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display text-lg lg:text-xl font-semibold leading-tight text-white mb-1.5 group-hover:text-gold transition-colors duration-300">
                            {p.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mill-scale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              id="mill-scale"
              className="scroll-mt-28 max-w-5xl mx-auto"
            >
              {/* Mill Scale overview card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl border border-white/5 bg-gradient-card p-6 md:p-8 shrink-0">
                <div className="md:col-span-6 space-y-5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold px-2.5 py-1 bg-gold/10 border border-gold/20 rounded-full inline-block">
                    High-Purity Raw Material
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-white">
                    Mill Scale for Steel & Sintering Applications
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mill scale is an iron-rich by-product generated during the hot rolling of steel, containing valuable iron oxides with high metallurgical value. Our mill scale is carefully sourced, screened, and handled under strict quality controls to ensure consistent composition, low contamination, and reliable performance.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    It serves as a cost-effective high-Fe raw material for sintering, pelletizing, blast furnace operations, ferroalloy production, and other steelmaking applications where quality and consistency are critical.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="bg-white/5 px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground border border-white/5">High Iron Content</span>
                    <span className="bg-white/5 px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground border border-white/5">Consistent Quality</span>
                    <span className="bg-white/5 px-3 py-1.5 rounded-lg text-xs font-semibold text-foreground border border-white/5">Export Ready Supply</span>
                  </div>
                </div>

                {/* Data analysis or specifications table */}
                <div className="md:col-span-6 glass rounded-2xl p-5 border border-white/5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gold mb-4 flex items-center gap-2">
                    <Scale className="size-4" />
                    <span>REPRESENTATIVE PRODUCT OVERVIEW</span>
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-white/10 text-muted-foreground font-mono">
                          <th className="py-2.5">Category</th>
                          <th className="py-2.5">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-foreground/90 font-sans">
                        <tr className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 font-medium text-white">Product Type</td>
                          <td className="py-3 text-muted-foreground">Iron-Rich Mill Scale</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 font-medium text-white">Composition</td>
                          <td className="py-3 text-muted-foreground">FeO, Fe₂O₃</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 font-medium text-white">Appearance</td>
                          <td className="py-3 text-muted-foreground">Bluish-Black Iron Oxide Scale</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 font-medium text-white">Source</td>
                          <td className="py-3 text-muted-foreground">Hot Rolled Steel Production</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 font-medium text-white">Applications</td>
                          <td className="py-3 text-muted-foreground">Sintering, Pelletizing, Steelmaking & Ferroalloys</td>
                        </tr>
                        <tr className="hover:bg-white/[0.01] transition-colors">
                          <td className="py-3 font-medium text-white">Supply</td>
                          <td className="py-3 text-muted-foreground">Domestic & Export Markets</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

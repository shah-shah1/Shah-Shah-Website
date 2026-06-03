import { motion } from "motion/react";
import { Cog, Clock, BadgeDollarSign, Users, Cpu, ShieldCheck } from "lucide-react";

const items = [
  { Icon: Cog, t: "Precision Engineering", d: "Tolerances measured in microns. Quality measured in trust." },
  { Icon: Clock, t: "Timely Delivery", d: "Disciplined planning. Predictable schedules." },
  { Icon: BadgeDollarSign, t: "Cost Effective", d: "Optimised processes, transparent pricing." },
  { Icon: Users, t: "Skilled Workforce", d: "Certified welders, engineers and project managers." },
  { Icon: Cpu, t: "Advanced Machinery", d: "Modern CNC, rolling and bending infrastructure." },
  { Icon: ShieldCheck, t: "Safety First", d: "Audited safety protocols on every project." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-12 lg:mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" /> Why Shah & Shah
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            A partner engineered for
            <span className="text-gradient-gold italic font-light"> the long run.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {items.map(({ Icon, t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative bg-card p-6 lg:p-7 hover:bg-gradient-card transition-all duration-500"
            >
              <div className="size-10 rounded-lg glass flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                <Icon className="size-4" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              <div className="absolute top-5 right-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

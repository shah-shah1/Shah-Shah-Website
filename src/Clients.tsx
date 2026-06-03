import { motion } from "motion/react";
import { Handshake } from "lucide-react";

const clientLogos = [
  {
    name: "Jindal Steel & Power",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M220 35 C230 15, 250 10, 280 5 C260 25, 235 45, 225 45 C215 45, 205 35, 195 28 C190 24, 185 24, 180 26 L175 30 C182 25, 190 20, 195 24 C205 32, 215 45, 220 35 Z" fill="url(#jindalGrad)" />
        <text x="10" y="32" fill="white" className="font-sans font-black italic" style={{ fontSize: "32px", fontWeight: "900", fontStyle: "italic" }}>JINDAL</text>
        <text x="10" y="50" fill="#9CA3AF" className="font-sans font-bold" style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.2em" }}>STEEL & POWER</text>
        <defs>
          <linearGradient id="jindalGrad" x1="175" y1="30" x2="280" y2="5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="35%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#22C55E" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: "Sun Flag Steel",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 5)">
          <line x1="10" y1="5" x2="10" y2="45" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 8 C18 5, 22 11, 30 8 C38 5, 42 11, 50 8 L50 28 C42 31, 38 25, 30 28 C22 31, 18 25, 10 28 Z" fill="#EF4444" />
          <circle cx="30" cy="18" r="4.5" fill="white" />
          <path d="M30 10 L30 13 M30 23 L30 26 M22 18 L25 18 M35 18 L38 18 M24 12 L26 14 M34 22 L36 24 M24 24 L26 22 M34 14 L36 12" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </g>
        <text x="75" y="30" fill="#3B82F6" className="font-sans font-black italic" style={{ fontSize: "22px", fontWeight: "900", fontStyle: "italic" }}>SUN FLAG</text>
        <text x="105" y="48" fill="#3B82F6" className="font-sans font-black italic" style={{ fontSize: "16px", fontWeight: "900", fontStyle: "italic", letterSpacing: "0.1em" }}>STEEL</text>
      </svg>
    )
  },
  {
    name: "AM/NS India",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="32" fill="#EF4444" className="font-sans font-black" style={{ fontSize: "34px", fontWeight: "900", letterSpacing: "-1px" }}>AM/NS</text>
        <text x="10" y="52" fill="white" className="font-sans font-extrabold" style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.3em" }}>INDIA</text>
        <text x="95" y="49" fill="#9CA3AF" className="font-sans font-medium" style={{ fontSize: "8.5px", fontWeight: "500" }}>ArcelorMittal Nippon Steel India</text>
      </svg>
    )
  },
  {
    name: "Welspun",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="38" fill="#3B82F6" className="font-serif font-bold" style={{ fontSize: "28px", fontWeight: "bold" }}>Welspun</text>
        <circle cx="150" cy="22" r="10" fill="#3B82F6" />
        <path d="M145 24 Q150 17, 155 24" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="157" cy="12" r="3" fill="#F59E0B" />
      </svg>
    )
  },
  {
    name: "Evonith Steel",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10)">
          <path d="M5 25 L15 15 L25 15 L15 25 Z" fill="#F97316" />
          <path d="M12 32 L22 22 L32 22 L22 32 Z" fill="#F97316" />
          <path d="M19 39 L29 29 L39 29 L29 39 Z" fill="#F97316" />
        </g>
        <text x="65" y="38" fill="white" className="font-sans font-black" style={{ fontSize: "25px", fontWeight: "900" }}>Evonith</text>
        <text x="160" y="38" fill="#F97316" className="font-sans font-black" style={{ fontSize: "25px", fontWeight: "900" }}>Steel</text>
      </svg>
    )
  },
  {
    name: "Electrotherm",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 320 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 5)">
          <circle cx="20" cy="20" r="16" fill="#EF4444" />
          <path d="M20 32 L20 42 L25 35 Z" fill="#EF4444" />
          <text x="12" y="25" fill="white" className="font-sans font-black" style={{ fontSize: "14px", fontWeight: "900" }}>ET</text>
        </g>
        <text x="55" y="32" fill="white" className="font-sans font-black" style={{ fontSize: "22px", fontWeight: "900", letterSpacing: "1px" }}>ELECTROTHERM</text>
        <text x="55" y="47" fill="#9CA3AF" className="font-sans font-bold" style={{ fontSize: "8px", fontWeight: "700" }}>Engineering & Technologies Division</text>
      </svg>
    )
  },
  {
    name: "Orissa Metaliks Private Limited (OMPL)",
    component: (
      <svg className="h-11 md:h-14 w-auto" viewBox="0 0 340 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 12 A18 18 0 1 0 35 48 C28 42, 28 18, 35 12 Z" fill="#F97316" />
        <text x="60" y="35" fill="white" className="font-sans font-black" style={{ fontSize: "26px", fontWeight: "900", letterSpacing: "1.5px" }}>OMPL</text>
        <text x="60" y="50" fill="#9CA3AF" className="font-sans font-bold" style={{ fontSize: "9px", fontWeight: "700" }}>ORISSA METALIKS PRIVATE LIMITED</text>
      </svg>
    )
  }
];

// Double the list for seamless looping marquee
const scrollItems = [...clientLogos, ...clientLogos];

export function Clients() {
  return (
    <section id="clients" className="relative py-20 md:py-24 bg-background overflow-hidden border-t border-white/5">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Head Typography Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/5 text-[11px] font-mono uppercase tracking-[0.2em] text-gold"
          >
            <Handshake className="size-3.5" />
            <span>TRUSTED PARTNERS</span>
          </motion.div>
        </div>
      </div>

      {/* Infinite Autoscroll Row */}
      <div className="relative py-4 select-none flex overflow-hidden w-full bg-white/[0.01] border-y border-white/5">
        {/* Gradient overlays to fade out the scrolling edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-12 md:gap-20 items-center justify-start shrink-0 min-w-full px-6 md:px-10"
        >
          {scrollItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="shrink-0 opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-300 transform"
              title={item.name}
            >
              {item.component}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

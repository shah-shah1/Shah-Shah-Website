import { motion } from "motion/react";

import customFabParts from "./assets/images/4036802F-F3D8-438C-8417-C5EA9E0500F5_1_105_c.jpeg";
import customHeatExch from "./assets/images/C2079A26-9410-4D58-9AC1-DC2556CB0491_1_201_a.jpeg";
import pexelsConnorLucock from "./assets/images/pexels-connor-lucock-259838-28929545.jpg";
import pexelsDiegoOrtiz from "./assets/images/pexels-diego-ortiz-72152225-16243157.jpg";
import pexelsElif from "./assets/images/pexels-elif-144471719-10395742.jpg";
import pexelsMichaelOrshan1 from "./assets/images/pexels-michael-orshan-2159363670-36003964.jpg";
import pexelsMichaelOrshan2 from "./assets/images/pexels-michael-orshan-2159363670-36003972.jpg";
import pexelsTkirkgoz from "./assets/images/pexels-tkirkgoz-16694002.jpg";

const photos = [
  { src: pexelsMichaelOrshan1, alt: "Welding detail" },
  { src: pexelsMichaelOrshan2, alt: "Precision welding joint" },
  { src: pexelsTkirkgoz, alt: "Machining boring operation" },
  { src: customFabParts, alt: "Custom punched brackets" },
  { src: customHeatExch, alt: "CNC structural anchors" },
  { src: pexelsConnorLucock, alt: "Structural steel truss node" },
  { src: pexelsElif, alt: "Pressurized vessel dome" },
  { src: pexelsDiegoOrtiz, alt: "Precision grind refinement" },
];

export function Gallery() {
  return (
    <section id="work" className="relative py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-10 md:mb-12 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6 text-xs tracking-[0.3em] text-gold uppercase"
          >
            <span className="h-px w-10 bg-gold" />
            Archival
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl leading-[1.1] tracking-tight text-foreground"
          >
            <span className="italic text-gradient-gold">Built to spec.</span>
            <br />
            Built to last.
          </motion.h2>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="group relative overflow-hidden rounded-sm bg-muted/20"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] brightness-75 group-hover:brightness-90"
                />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}


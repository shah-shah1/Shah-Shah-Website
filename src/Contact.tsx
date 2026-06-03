import * as React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone required").max(20),
  requirement: z.string().trim().min(5, "Tell us a bit more").max(1500),
});

export function Contact() {
  const [iframeLoading, setIframeLoading] = useState(true);

  React.useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
          const iframe = el as HTMLIFrameElement;
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };

    // @ts-ignore
    if (typeof Tally !== "undefined") {
      v();
    } else if (document.querySelector(`script[src="${w}"]`) === null) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    } else {
      v();
    }
  }, []);

  return (
    <section id="contact" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Contact
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]"
            >
              Let's build something
              <span className="text-gradient-gold italic font-light"> precise.</span>
            </motion.h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Share your requirement — our engineering team will respond with a
              tailored proposal within one business day.
            </p>

            <div className="mt-12 space-y-5">
              <a href="tel:+919766101339" className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 text-sm">
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <Phone className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Phone</div>
                  <div className="font-display text-lg">+91 97661 01339</div>
                </div>
              </a>
              <a href="mailto:rushabh@shahnshah.in" className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 text-sm">
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <Mail className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</div>
                  <div className="font-display text-lg">rushabh@shahnshah.in</div>
                </div>
              </a>
              <a
                href="https://wa.me/+919766101339"
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 text-sm"
              >
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <MessageCircle className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">WhatsApp</div>
                  <div className="font-display text-lg">Chat with us</div>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/QW8Xy1ANcYmaLsxcA"
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[3.5rem_1fr] items-start gap-4 text-sm"
              >
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all shrink-0 mt-0.5">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Head Office</div>
                  <div className="font-display text-base leading-relaxed mt-1 text-white">
                    H-4 Sam Plaza, Irani Road, Dahanu Road, District: Palghar,
                    Maharashtra - 401602.
                  </div>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/W4vxEecGDbX1MxDD8"
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[3.5rem_1fr] items-start gap-4 text-sm"
              >
                <span className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all shrink-0 mt-0.5">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Workshop</div>
                  <div className="font-display text-base leading-relaxed mt-1 text-white">
                    New Survey No 2212, Shri Hari Industrial Park, Plot no 6C, Solsumba, Umargam, Gujarat 396171
                  </div>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#fbfbfa] text-stone-900 rounded-3xl p-5 sm:p-6 lg:p-8 shadow-elevated border border-stone-200/60 overflow-hidden relative"
          >
            {/* Tally Form Embed Container */}
            <div className="w-full relative min-h-[220px] h-full rounded-2xl overflow-hidden bg-transparent">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fbfbfa] text-stone-600 gap-3">
                  <div className="size-8 rounded-full border-2 border-stone-200 border-t-gold animate-spin" />
                  <span className="text-xs font-mono tracking-wider uppercase text-stone-400">Loading secure form...</span>
                </div>
              )}
              <iframe
                data-tally-src="https://tally.so/embed/J9MQG4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
                loading="lazy"
                width="100%"
                height="300"
                style={{ border: "none" }}
                onLoad={() => setIframeLoading(false)}
                title="Project Inquiry"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="https://wa.me/+919766101339"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gradient-gold text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition"
      >
        <MessageCircle className="size-6" />
      </a>

      <footer className="mt-32 pt-10 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-gold" />
            <span className="font-display text-foreground">Shah & Shah</span>
            <span>· Metal Fabrication & Engineering</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-4" />
            <span>Serving industries nationwide · India</span>
          </div>
          <div>© {new Date().getFullYear()} Shah & Shah. All rights reserved.</div>
        </div>
      </footer>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg font-display transition-colors"
      />
    </div>
  );
}

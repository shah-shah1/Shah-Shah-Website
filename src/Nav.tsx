import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoBrand from "./assets/images/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-full py-3 px-5 lg:px-8"
            : ""
        }`}
      >
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative flex items-center">
            <img 
              src={logoBrand} 
              alt="Shah & Shah Logo" 
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] ${
                scrolled ? "h-12 sm:h-14 lg:h-16" : "h-16 sm:h-20 lg:h-24"
              }`}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = document.getElementById('logo-text-fallback');
                if (fallback) {
                  fallback.classList.remove('hidden');
                  fallback.classList.add('inline-block');
                }
              }}
            />
            {/* Elegant text fallback which renders if logo image is loading/missing */}
            <span 
              id="logo-text-fallback" 
              className="hidden font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground group-hover:opacity-90 transition-opacity"
            >
              Shah <span className="font-serif italic text-gold">&</span> Shah
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}

          {/* Interactive Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <button
              onClick={() => setSubmenuOpen((v) => !v)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full flex items-center gap-1 cursor-pointer focus:outline-none"
            >
              <span>Products</span>
              <ChevronDown className="size-3.5 transition-transform duration-300" style={{ transform: submenuOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </button>

            <AnimatePresence>
              {submenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-44 rounded-xl glass border border-white/10 shadow-xl p-1.5 z-50 flex flex-col gap-0.5"
                >
                  <a
                    href="#mill-scale"
                    className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold hover:bg-white/5 hover:text-gold rounded-lg transition-all text-muted-foreground hover:text-foreground"
                  >
                    Mill Scale
                  </a>
                  <a
                    href="#engineering"
                    className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold hover:bg-white/5 hover:text-gold rounded-lg transition-all text-muted-foreground hover:text-foreground"
                  >
                    Engineering
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#clients"
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
          >
            Clients
          </a>

          <a
            href="#work"
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition"
        >
          Request Quote
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full glass"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mx-6 mt-3 glass rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm text-foreground/90 hover:text-gold transition-colors block"
              >
                {l.label}
              </a>
            ))}

            {/* Mobile Products Accordion */}
            <div className="border-t border-white/5 py-1">
              <button
                onClick={() => setMobileSubmenuOpen((v) => !v)}
                className="w-full text-left px-4 py-3 text-sm text-foreground/90 hover:text-gold transition-colors flex items-center justify-between"
              >
                <span>Products</span>
                <ChevronDown className="size-4 transition-transform" style={{ transform: mobileSubmenuOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>
              
              {mobileSubmenuOpen && (
                <div className="pl-6 flex flex-col gap-1 bg-white/[0.01] rounded-lg py-1.5 mt-1">
                  <a
                    href="#mill-scale"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-gold block"
                  >
                    Mill Scale
                  </a>
                  <a
                    href="#engineering"
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-gold block"
                  >
                    Engineering
                  </a>
                </div>
              )}
            </div>

            <a
              href="#clients"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm text-foreground/90 hover:text-gold transition-colors border-t border-white/5 block"
            >
              Clients
            </a>

            <a
              href="#work"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm text-foreground/90 hover:text-gold transition-colors border-t border-white/5 block"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm text-foreground/90 hover:text-gold transition-colors border-t border-white/5 block"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center text-sm font-medium px-5 py-3 rounded-full bg-gradient-gold text-primary-foreground block"
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

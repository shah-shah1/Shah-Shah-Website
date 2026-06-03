import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Clients } from "@/components/site/Clients";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Contact } from "@/components/site/Contact";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <main className="relative bg-background text-foreground antialiased min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Clients />
      <Gallery />
      <WhyUs />
      <Contact />
      <Toaster />
    </main>
  );
}

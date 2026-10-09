import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

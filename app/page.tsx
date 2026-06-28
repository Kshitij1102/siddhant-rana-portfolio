import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <section className="bg-white">
        <About />
      </section>

      {/* Services */}
      <section className="bg-red-50">
        <Services />
      </section>

      {/* Why Choose */}
      <section className="bg-white">
        <WhyChoose />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
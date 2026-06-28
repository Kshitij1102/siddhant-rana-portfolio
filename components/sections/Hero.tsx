import HeroContent from "@/components/hero/HeroContent";
import HeroImage from "@/components/hero/HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">
      {/* Background Glow */}

      <div className="absolute -right-28 top-0 h-[620px] w-[620px] rounded-full bg-red-100 opacity-40 blur-3xl" />

      <div className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-red-50 opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid w-full items-center gap-8 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </div>
    </section>
  );
}
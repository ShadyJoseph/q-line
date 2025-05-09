import CTAcontactus from "./sections/CTAcontactus";
import HeroSection from "./sections/HeroBanner";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] scroll-smooth">
      <HeroSection />

      {/* Optional spacer section or services block */}
      {/* <OurServices /> */}
      {/* <Partnerships /> */}

      {/* CTA Section Targeted by #get-started */}
      <section id="get-started" className="mt-32 px-8 sm:px-20">
        <CTAcontactus />
      </section>
    </div>
  );
}

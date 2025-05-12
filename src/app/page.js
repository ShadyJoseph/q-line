import Scroller from "@/components/Scroller";
import HeroSection from "./sections/HeroBanner";
import ServicesSection from "./sections/OurServices";
import WhyChooseUs from "./sections/WhyChooseUs";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <Scroller />
      <Map />
    </main>
  );
}

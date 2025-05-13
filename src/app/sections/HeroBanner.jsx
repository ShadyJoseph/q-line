import HeroBannerAnimated from "./HeroBannerAnimated";

export default function HeroSection() {
  return (
    <section className="relative bg-background text-foreground py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 dark:bg-[linear-gradient(to_right,#1f29371a_1px,transparent_1px),linear-gradient(to_bottom,#1f29371a_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-background to-foreground/5" />
      <HeroBannerAnimated />
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#ffffff_80%)] opacity-15" />
    </section>
  );
}

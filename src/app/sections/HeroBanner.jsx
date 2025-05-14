'use client';

import HeroBannerAnimated from './HeroBannerAnimated';

export default function HeroSection() {
  return (
    <section className="relative bg-background text-foreground py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Simplified background for performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-foreground/5" />
      <HeroBannerAnimated />
    </section>
  );
}
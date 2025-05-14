'use client';

import HeroBannerAnimated from './HeroBannerAnimated';

export default function HeroSection() {
  return (
    <section className="relative bg-white text-foreground py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* White background, removed gradient overlay */}
      <HeroBannerAnimated />
    </section>
  );
}
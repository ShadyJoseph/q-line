"use client";

import { Button } from "@/components/ui/button";
import MotionDiv from "../MotionDiv";
import MotionLink from "../MotionLink";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], type: "spring", bounce: 0.2 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a4a4a10_1px,transparent_1px),linear-gradient(to_BOTTOM,#4a4a4a10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-background animate-gradient-bg" />

      <MotionDiv
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="region"
        aria-label="Hero section"
      >
        <MotionDiv variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground dark:from-foreground dark:to-muted-foreground transition-all duration-1000">
            Welcome to <span className="text-foreground">Q-line</span>
          </h1>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
            Unlock a world of innovation with our cutting-edge technology platform. Start your journey today.
          </p>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <MotionLink
            href="#get-started"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            whileFocus={{ scale: 1.1 }}
            className="inline-block"
          >
            <Button
              className="relative bg-primary text-primary-foreground hover:bg-primary/95 dark:hover:bg-primary/90 hover:shadow-2xl focus:ring-2 focus:ring-ring transition-all duration-300 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-xl shadow-lg overflow-hidden group"
              aria-label="Get started with Q-line platform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-muted/50 to-muted-foreground/50 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative font-semibold">Get Started</span>
            </Button>
          </MotionLink>
        </MotionDiv>
      </MotionDiv>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--muted)_80%)] opacity-30 transform translate-y-12" />
    </section>
  );
}
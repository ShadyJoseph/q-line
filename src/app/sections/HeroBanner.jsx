"use client";

import { Button } from "@/components/ui/button";
import MotionDiv from "../MotionDiv";
import MotionLink from "../MotionLink";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", type: "spring", bounce: 0.3 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-background animate-gradient-bg" />
      
      <MotionDiv
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="region"
        aria-label="Hero section"
      >
        <MotionDiv variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground dark:from-foreground dark:to-muted-foreground transition-all duration-700 ease-in-out">
            Welcome to <span className="text-foreground">Q-line</span>
          </h1>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Discover a world of possibilities with our cutting-edge platform.
            Join us today and start exploring.
          </p>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <MotionLink
            href="#get-started"
            whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.92 }}
            className="inline-block"
          >
            <Button
              className="relative bg-primary text-primary-foreground hover:bg-primary/90 dark:hover:bg-primary/80 hover:shadow-xl transition-all duration-300 ease-in-out text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg overflow-hidden group"
              aria-label="Get started with Q-line platform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-muted to-muted-foreground opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <span className="relative">Get Started</span>
            </Button>
          </MotionLink>
        </MotionDiv>
      </MotionDiv>

      {/* Parallax effect layer */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--muted)_100%)] opacity-50 transform translate-y-10" />
    </section>
  );
}
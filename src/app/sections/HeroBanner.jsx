"use client";

import MotionDiv from "../MotionDiv";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import QLogo from "../../../public/images/QLogo.png";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delay: 0,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], type: "spring", stiffness: 160 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], type: "spring", stiffness: 140 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.05, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0 },
    },
  };

  const headingText = "Welcome to Q-line";
  const letters = headingText.split("");

  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center bg-background text-foreground overflow-hidden min-h-screen">
      {/* Sharp black-and-white grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-background to-foreground/5" />

      <MotionDiv
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="region"
        aria-label="Hero section"
      >
        {/* Logo */}
        <MotionDiv variants={logoVariants} className="mb-8">
          <Image
            src={QLogo}
            alt="Q-line logo"
            width={100}
            height={100}
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto object-contain"
            priority
          />
        </MotionDiv>

        {/* Typing Animation for Heading */}
        <MotionDiv variants={textVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-background">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                className={letter === "Q" ? "text-foreground" : ""}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </MotionDiv>

        <MotionDiv variants={textVariants}>
          <p className="text-base sm:text-lg md:text-xl text-foreground mb-10 max-w-sm sm:max-w-md md:max-w-2xl mx-auto leading-relaxed font-light">
            Unleash innovation with our cutting-edge technology platform. Start your journey today.
          </p>
        </MotionDiv>

        {/* Minimalist CTA Button with White Hover */}
        <MotionDiv variants={buttonVariants} className="flex justify-center mt-6">
          <Link href="#get-started" passHref>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-6 py-2 bg-foreground text-background border border-background rounded-radius-sm font-medium text-base sm:text-lg shadow-sm hover:bg-background hover:text-foreground hover:border-foreground transition-all duration-200 flex items-center gap-2 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
        </MotionDiv>
      </MotionDiv>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)] opacity-15" />
    </section>
  );
}
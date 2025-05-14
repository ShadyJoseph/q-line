'use client';

import MotionDiv from "../MotionDiv";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import QLogo from "../../../public/images/QLogo.png";

export default function HeroBannerAnimated() {
  // Simplified container variants for faster initial render
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3, // Reduced duration
        staggerChildren: 0.05, // Faster stagger
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3, // Reduced duration
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced duration
        ease: "easeOut",
      },
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
  const headingText = "Welcome to Q-line";
    const letters = headingText.split("");
  return (
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
          loading="eager" // Ensure immediate loading
          quality={75} // Optimize image quality
        />
      </MotionDiv>
      {/* Heading (no letter-by-letter animation) */}
      <MotionDiv variants={textVariants}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-gray-300">
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
      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center mt-8"
      >
        <Link href="#get-started" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-3 bg-neutral-900 border-2 border-white text-white rounded-full flex items-center gap-2 overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Get Started
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-3 transition-all duration-300 relative z-10 group-hover:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </motion.button>
        </Link>
      </motion.div>
    </MotionDiv>
  );
}
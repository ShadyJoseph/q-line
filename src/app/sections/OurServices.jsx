"use client";

import { Button } from "@/components/ui/button";
import MotionDiv from "../MotionDiv";
import MotionLink from "../MotionLink";
import { services } from "../data";
import { motion } from "framer-motion";

export default function ServicesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 140,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative bg-white text-foreground py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* White background, overlays removed */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionDiv
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Our Solutions"
        >
          <MotionDiv variants={cardVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter bg-clip-text text-black">
              Our Solutions
            </h2>
          </MotionDiv>
          <MotionDiv variants={cardVariants}>
            <p className="text-base sm:text-lg md:text-xl text-foreground mt-3 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed font-light">
              Explore our cutting-edge services crafted to elevate your business
              with advanced technology.
            </p>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <MotionDiv
              key={service.id}
              className="bg-card text-card-foreground rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 border border-border/50 overflow-hidden group focus-within:ring-2 focus-within:ring-primary/30 dark:focus-within:ring-primary/50"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              whileFocus={{ scale: 1.03 }}
            >
              <div className="p-6 sm:p-7">
                <motion.div
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/90 text-primary-foreground rounded-full mb-4 transition-transform duration-200 group-hover:scale-105"
                >
                  <i
                    className={`fas ${service.icon} text-xl sm:text-2xl`}
                    aria-hidden="true"
                  />
                </motion.div>
                <motion.h3
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-lg sm:text-xl font-semibold mb-2 text-foreground tracking-tight"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-foreground text-sm sm:text-base leading-relaxed mb-5"
                >
                  {service.description}
                </motion.p>
                <MotionLink
                  href={service.link}
                  variants={childVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  whileFocus={{ scale: 1.03 }}
                  className="inline-block"
                >
                  <Button
                    className="relative px-4 sm:px-5 py-2 bg-foreground text-background border border-background rounded-lg font-medium text-sm sm:text-base shadow-sm hover:bg-background hover:text-foreground hover:border-foreground transition-all duration-200 flex items-center gap-2 group"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="relative z-10">Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200 relative z-10"
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
                  </Button>
                </MotionLink>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}

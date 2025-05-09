"use client";

import { Button } from "@/components/ui/button";
import MotionDiv from "../MotionDiv";
import MotionLink from "../MotionLink";
import { services } from "../data";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99], staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99], type: "spring", bounce: 0.2 } },
  };

  return (
    <section className="relative bg-background text-foreground py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a4a4a10_1px,transparent_1px),linear-gradient(to_bottom,#4a4a4a10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Our Solutions"
        >
          <MotionDiv variants={cardVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground dark:from-foreground dark:to-muted-foreground transition-all duration-1000">
              Our Solutions
            </h2>
          </MotionDiv>
          <MotionDiv variants={cardVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-4 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed">
              Discover our suite of innovative services designed to empower your business with advanced technology.
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
              className="bg-card text-card-foreground rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden group focus-within:ring-2 focus-within:ring-ring"
              variants={cardVariants}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
              whileFocus={{ scale: 1.04, rotate: 0.5 }}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-full mb-5 transition-transform duration-300 group-hover:scale-110">
                  <i className={`fas ${service.icon} text-2xl sm:text-3xl`} aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <MotionLink
                  href={service.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/95 dark:hover:bg-primary/90 transition-all duration-300 rounded-lg px-5 sm:px-6 py-2 sm:py-3 shadow-sm hover:shadow-md focus:ring-2 focus:ring-ring font-semibold"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
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
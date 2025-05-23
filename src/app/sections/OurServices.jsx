"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { services } from "../data";
import * as LucideIcons from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Defer rendering until component mounts to avoid hydration mismatches
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
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

  // Show loading state until the component is fully loaded
  if (!isLoaded) {
    return (
      <motion.div
        className="min-h-[300px] bg-gray-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-black/70 text-lg">Loading...</div>
      </motion.div>
    );
  }

  return (
    <section
      className="relative bg-gray-50 text-black py-20 sm:py-24 lg:py-32 overflow-hidden"
      aria-label="Our Printing Solutions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={cardVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black font-sans">
              Our Solutions
            </h2>
          </motion.div>
          <motion.div variants={cardVariants}>
            <p className="text-lg sm:text-xl lg:text-2xl text-black/70 mt-6 max-w-md sm:max-w-lg lg:max-w-3xl mx-auto leading-relaxed font-light font-sans">
              Discover Q-Line Print’s services, designed to bring your ideas to
              life with innovative design and high-quality printing.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={24}
            slidesPerView={1}
            direction="horizontal"
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass:
                "swiper-pagination-bullet !bg-black/30 !w-2.5 !h-2.5 !rounded-full !opacity-70",
              bulletActiveClass: "!bg-black !opacity-100 !scale-125",
            }}
            className="relative pb-20 px-4 sm:px-6"
            aria-label="Services carousel"
            grabCursor={true}
            lazyPreloadPrevNext={1}
            style={{ width: "100%", overflow: "visible" }}
          >
            {services.map((service) => {
              const IconComponent = LucideIcons[service.icon];
              return (
                <SwiperSlide
                  key={service.id}
                  className="swiper-slide flex justify-center items-center h-full"
                >
                  <motion.div
                    className="bg-white text-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50 overflow-hidden group focus-within:ring-2 focus-within:ring-black/20 w-[95%] max-w-[300px] min-h-[300px] sm:min-h-[320px] lg:min-h-[340px] flex flex-col mx-auto"
                    variants={cardVariants}
                    whileHover={{ scale: 1.04, y: -6 }}
                    whileFocus={{ scale: 1.04, y: -6 }}
                  >
                    <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-grow relative">
                      <motion.div
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-full mb-6 transition-shadow duration-300 group-hover:shadow-md"
                      >
                        {IconComponent ? (
                          <IconComponent
                            className="w-6 h-6 sm:w-7 sm:h-7"
                            aria-hidden="true"
                          />
                        ) : (
                          <span className="text-xl sm:text-2xl">?</span>
                        )}
                      </motion.div>
                      <motion.h3
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-lg sm:text-xl font-semibold mb-3 text-black tracking-tight font-sans"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p
                        variants={childVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-black/80 text-sm sm:text-base leading-relaxed font-sans flex-grow"
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
            <div className="flex justify-center items-center gap-4 mt-8 relative z-20">
              <div className="swiper-button-prev !text-white after:!content-[''] !w-10 !h-10 bg-black !rounded-full !shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div className="swiper-button-next !text-white after:!content-[''] !w-10 !h-10 bg-black !rounded-full !shadow-lg hover:scale-110 transition-all duration-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
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
              </div>
            </div>
            <div className="swiper-pagination !bottom-[-12px]"></div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

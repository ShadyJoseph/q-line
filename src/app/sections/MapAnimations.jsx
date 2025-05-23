"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const MapAnimations = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Defer rendering until component mounts to avoid hydration mismatches
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Animation variants for staggered effects
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const loaderVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    // Show loading state until the component is fully loaded
    if (!isLoaded) {
        return (
            <motion.div
                className="min-h-[300px] bg-background flex items-center justify-center"
                variants={loaderVariants}
                initial="hidden"
                animate="visible"
            >
                <Loader2 className="h-10 w-10 text-gray-600 animate-spin" aria-label="Loading map" />
            </motion.div>
        );
    }

    return (
        <section className="relative bg-background text-foreground py-12 sm:py-16 lg:py-20 overflow-hidden">
            {/* Refined background pattern aligned with HeroSection */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 dark:bg-[linear-gradient(to_right,#1f29371a_1px,transparent_1px),linear-gradient(to_bottom,#1f29371a_1px,transparent_1px)]" />
            <div className="absolute inset-0 bg-gradient-to-br from-background to-foreground/5" />

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-10 sm:mb-12 lg:mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    role="region"
                    aria-label="Our Location"
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter text-black">
                            Our Location
                        </h2>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <p className="text-base sm:text-lg md:text-xl text-foreground mt-3 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed font-light">
                            In the heart of Cairo
                        </p>
                    </motion.div>
                </motion.div>

                {/* Map container with animation */}
                <motion.div
                    className="max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-xl transition-all duration-300"
                    initial={{ scale: 0.98, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                    {children}
                </motion.div>

                {/* Address */}
                <motion.div
                    className="mt-8 text-center px-4 sm:px-6 lg:px-8"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p
                        className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium"
                        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                        24-A El Obour Buildings, Salah Salem Street, Manshiyet El Bakri, <br />
                        Heliopolis, Cairo Governorate 4471141, Egypt
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MapAnimations;

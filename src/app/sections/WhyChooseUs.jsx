"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const questions = [
    {
        q: "Who are you?",
        a: "Q-Line is a highly regarded provider of integrated printing, marketing, and logistics services.",
    },
    {
        q: "How can you help me?",
        a: "We help you overcome business challenges by creating powerful solutions for you. Find partners, grow your brand, and let us handle the rest.",
    },
    {
        q: "How do you provide support?",
        a: "We assist businesses at all stages, from market entry to sustaining presence and unlocking growth opportunities.",
    },
    {
        q: "What should I do now?",
        a: (
            <>
                Just get in touch! Today to learn more about how Q-Line can help you grow.
            </>
        ),
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: 0.2 + i * 0.15, duration: 0.5, type: "spring", stiffness: 80 },
    }),
};

export default function WhyChooseUs() {
    return (
        <section className="w-full bg-neutral-900 min-h-screen flex items-center justify-center py-20 px-0">
            <div className="w-full flex flex-col items-center justify-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white"
                >
                    Why Choose Us
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-300 text-center mb-12 max-w-2xl"
                >
                    Explore the common questions and answers about Q-Line
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-10 w-full px-4 md:px-12 items-start">
                    {questions.map((item, i) => (
                        <motion.div
                            key={item.q}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="group flex items-start gap-4 bg-neutral-900 rounded-xl p-6 mx-auto max-w-xl min-h-[180px]"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-colors transition-transform duration-300 group-hover:bg-black group-hover:-translate-y-3">
                                <span className="text-black text-xl font-bold transition-colors duration-300 group-hover:text-white">?</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                                <div className="text-gray-200 text-base leading-relaxed">{item.a}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Contact Us Button (styled like CTA section) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center mt-8"
                >
                    <Link href="/get-started" passHref>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="group relative px-8 py-3 bg-neutral-900 border-2 border-white text-white rounded-full flex items-center gap-2 overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10 group-hover:text-black transition-colors duration-300">Contact Us</span>
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
            </div>
        </section>
    );
} 
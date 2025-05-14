"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const questions = [
  {
    q: "Who is Q-Line?",
    a: "Q-Line is an award-winning, family-owned organization specializing in printing, marketing, and logistics services. We supply businesses and educational sectors with high-quality printed materials, books, and custom solutions, driven by a reputation for quality and innovation.",
  },
  {
    q: "What services do you offer?",
    a: "As your trusted print partner, we simplify your printing needs with a wide range of services, including graphic designing, offset and digital printing, wide format printing, packaging, finishing, and more. From flyers and brochures to stickers and custom boxes, our experienced team delivers innovative solutions to help your brand stand out.",
  },
  {
    q: "How can Q-Line help my business?",
    a: "We guide you through creating stunning designs and managing complex print projects, offering expert support to break through competition and capture your audience’s attention. Whether you’re a local business or a national brand, our resources and innovative approaches drive your success.",
  },
  {
    q: "What’s the next step?",
    a: (
      <>
        Contact us today to discover how Q-Line’s tailored printing and
        marketing solutions can elevate your business!
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
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 80,
    },
  }),
};

export default function WhyChooseUs() {
  return (
    <section
      id="get-started"
      className="w-full bg-neutral-900 flex items-center justify-center py-20 px-0 mb-5"
    >
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
          transition={{ duration: 0.6, delay: 0.1 }}
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
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:bg-black group-hover:-translate-y-3">
                <span className="text-black text-xl font-bold transition-colors duration-300 group-hover:text-white">
                  ?
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                <div className="text-gray-200 text-base leading-relaxed">
                  {item.a}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Contact Us Button (styled like CTA section) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-3 bg-neutral-900 border-2 border-white text-white rounded-full flex items-center gap-2 overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Contact Us
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
      </div>
    </section>
  );
}

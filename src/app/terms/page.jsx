"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const termsSections = [
  {
    title: "Introduction",
    content: (
      <p className="text-gray-800 leading-relaxed">
        Welcome to Q-Line Print, your trusted partner for innovative printing
        and design solutions. These Terms and Conditions govern the use of our
        website and services, including graphic design, printing, and custom
        packaging.
      </p>
    ),
  },
  {
    title: "Acceptance of Terms",
    content: (
      <p className="text-gray-800 leading-relaxed">
        By accessing our website or engaging with Q-Line Print’s services, you
        agree to these Terms and Conditions. If you do not agree with any part
        of these terms, please refrain from using our website or services.
      </p>
    ),
  },
  {
    title: "User Responsibilities",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        {[
          "Provide accurate project specifications and information for printing and design orders.",
          "Safeguard your Q-Line Print account credentials.",
          "Comply with all applicable laws when using our services.",
          "Avoid unauthorized use of our printing and design resources.",
        ].map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="text-gray-800"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p className="text-gray-800 leading-relaxed">
        All content, designs, and materials on our website, including flyers,
        brochures, packaging designs, and educational books, are the property of
        Q-Line Print or its licensors. Unauthorized use is prohibited.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p className="text-gray-800 leading-relaxed">
        Q-Line Print is not liable for any damages resulting from the use or
        inability to use our website or services, including issues related to
        printing, packaging, or design deliverables.
      </p>
    ),
  },
  {
    title: "Changes to Terms",
    content: (
      <p className="text-gray-800 leading-relaxed">
        We may update these Terms and Conditions to reflect changes in our
        printing and design services. Continued use of our website or services
        constitutes acceptance of the updated terms.
      </p>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p className="text-gray-800 leading-relaxed mb-2">
          For questions about these Terms and Conditions or our services, please
          reach out to Q-Line Print at:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {[
            "emad.hanna@qline-eg.com",
            "+20 100 501 8500",
            "Heliopolis, Cairo",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="text-gray-800"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </>
    ),
  },
];

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <div className="w-full px-0 sm:px-8 lg:px-0 xl:px-0 py-16 mx-0 lg:mx-[50px] lg:ml-[15px]">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Q-Line Print Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-2"></div>
        </motion.div>

        <div className="space-y-12 text-left lg:pl-0 pl-4">
          {termsSections.map((section, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.section
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group"
              >
                <h2 className="text-xl font-bold mb-3 text-black flex items-center">
                  {section.title}
                </h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-800 leading-relaxed"
                >
                  {section.content}
                </motion.div>
              </motion.section>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;

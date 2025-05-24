"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Q-Line Print</title>
        <meta
          name="description"
          content="Read Q-Line Print's Privacy Policy to learn how we handle your data when you use our printing and design services. Your privacy is our priority."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy | Q-Line Print" />
        <meta
          property="og:description"
          content="Learn how Q-Line Print collects, uses, and protects your information through our Privacy Policy."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.qline-eg.com/privacy" />
        <meta property="og:site_name" content="Q-Line Print" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <div className="w-full px-0 sm:px-8 lg:px-0 xl:px-0 py-16 mx-0 lg:mx-[50px] lg:ml-[15px]">
          <motion.header
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <div className="w-full text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                Q-Line Print Privacy Policy
              </h1>
              <div className="w-24 h-1 bg-black mx-auto mb-2"></div>
            </div>
          </motion.header>

          <main className="space-y-12 text-left lg:pl-0 pl-4">
            {[
              {
                number: "1",
                title: "Introduction",
                content: () => (
                  <p className="text-gray-800 leading-relaxed">
                    At Q-Line Print, we value your privacy. This Privacy Policy
                    outlines how we collect, use, disclose, and protect your
                    information when you visit our website or engage with our
                    printing and design services.
                  </p>
                ),
              },
              {
                number: "2",
                title: "Information We Collect",
                content: () => (
                  <>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      2.1 Personal Information
                    </h3>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      We may collect personal information you provide when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      {[
                        "Create an account for ordering printing services",
                        "Submit a print or design order",
                        "Sign up for our promotional updates",
                        "Contact our support team for project assistance",
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
              {
                number: "3",
                title: "How We Use Your Information",
                content: () => (
                  <>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      We use your information to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      {[
                        "Process and fulfill your printing and packaging orders",
                        "Communicate updates about your design or print projects",
                        "Send you tailored promotions about our services",
                        "Enhance our website and printing solutions",
                        "Meet legal and regulatory requirements",
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
              {
                number: "4",
                title: "Information Sharing",
                content: () => (
                  <>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      Q-Line Print does not sell or rent your personal
                      information. We may share your information with:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      {[
                        "Trusted partners who support our printing and design operations",
                        "Payment processors to facilitate secure order transactions",
                        "Authorities when required by applicable laws",
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
              {
                number: "5",
                title: "Data Security",
                content: () => (
                  <p className="text-gray-800 leading-relaxed">
                    We employ robust security measures to safeguard your
                    personal information, ensuring the confidentiality of your
                    printing and design project details.
                  </p>
                ),
              },
              {
                number: "6",
                title: "Your Rights",
                content: () => (
                  <>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      {[
                        "Access your personal and order-related information",
                        "Correct inaccuracies in your account or project details",
                        "Request deletion of your personal data",
                        "Opt-out of promotional communications about our services",
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
              {
                number: "7",
                title: "Contact Us",
                content: () => (
                  <>
                    <p className="text-gray-800 leading-relaxed mb-2">
                      If you have questions about this Privacy Policy or our
                      printing and design services, please contact Q-Line Print
                      at:
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
              {
                number: "8",
                title: "Updates to This Policy",
                content: () => (
                  <p className="text-gray-800 leading-relaxed">
                    We may revise this Privacy Policy to reflect changes in our
                    printing and design services or legal requirements. Updates
                    will be indicated by a revised date and effective upon
                    posting.
                  </p>
                ),
              },
            ].map((section, index) => {
              const ref = useRef(null);
              const isInView = useInView(ref, { once: true, margin: "-100px" });
              return (
                <motion.section
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group"
                >
                  <h2 className="text-xl font-bold mb-3 text-black flex items-center">
                    {section.title}
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-800 leading-relaxed"
                  >
                    {section.content(isInView)}
                  </motion.div>
                </motion.section>
              );
            })}
          </main>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;

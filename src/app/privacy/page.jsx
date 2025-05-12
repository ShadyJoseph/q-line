"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PrivacyPolicy = () => {
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
                    <div className="w-full text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">Privacy Policy</h1>
                        <div className="w-24 h-1 bg-black mx-auto mb-2"></div>
                    </div>
                </motion.div>

                <div className="space-y-12 text-left lg:pl-0 pl-4">
                    {[
                        {
                            number: "1",
                            title: "Introduction",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    At Q-Line, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                            )
                        },
                        {
                            number: "2",
                            title: "Information We Collect",
                            content: () => (
                                <>
                                    <h3 className="text-lg font-semibold text-black mb-2">2.1 Personal Information</h3>
                                    <p className="text-gray-800 leading-relaxed mb-2">
                                        We may collect personal information that you voluntarily provide to us when you:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        {['Register for an account', 'Place an order', 'Subscribe to our newsletter', 'Contact our customer service'].map((item, index) => (
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
                            )
                        },
                        {
                            number: "3",
                            title: "How We Use Your Information",
                            content: () => (
                                <>
                                    <p className="text-gray-800 leading-relaxed mb-2">
                                        We use the information we collect to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        {[
                                            'Process your orders and payments',
                                            'Communicate with you about your orders',
                                            'Send you marketing communications',
                                            'Improve our website and services',
                                            'Comply with legal obligations'
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
                            )
                        },
                        {
                            number: "4",
                            title: "Information Sharing",
                            content: () => (
                                <>
                                    <p className="text-gray-800 leading-relaxed mb-2">
                                        We do not sell or rent your personal information to third parties. We may share your information with:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        {[
                                            'Service providers who assist in our operations',
                                            'Payment processors for secure transactions',
                                            'Legal authorities when required by law'
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
                            )
                        },
                        {
                            number: "5",
                            title: "Data Security",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                                </p>
                            )
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
                                            'Access your personal information',
                                            'Correct inaccurate information',
                                            'Request deletion of your information',
                                            'Opt-out of marketing communications'
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
                            )
                        },
                        {
                            number: "7",
                            title: "Contact Us",
                            content: () => (
                                <>
                                    <p className="text-gray-800 leading-relaxed mb-2">
                                        If you have any questions about this Privacy Policy, please contact us at:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-1">
                                        {[
                                            'privacy@q-line.com',
                                            '[Your Contact Number]',
                                            '[Your Business Address]'
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
                            )
                        },
                        {
                            number: "8",
                            title: "Updates to This Policy",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
                                </p>
                            )
                        }
                    ].map((section, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { once: true, margin: "-100px" });
                        return (
                            <motion.section
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="group"
                            >
                                <h2 className="text-xl font-bold mb-3 text-black flex items-center">
                                    {section.title}
                                </h2>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-gray-800 leading-relaxed"
                                >
                                    {section.content(isInView)}
                                </motion.div>
                            </motion.section>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy; 
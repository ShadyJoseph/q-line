"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
                    <div className="w-full text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">Terms & Conditions</h1>
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
                                    Welcome to Q-Line. These Terms and Conditions outline the rules and regulations for the use of our website and services.
                                </p>
                            )
                        },
                        {
                            number: "2",
                            title: "Acceptance of Terms",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    By accessing this website, we assume you accept these terms and conditions. Do not continue to use Q-Line if you do not agree to all of the terms and conditions stated on this page.
                                </p>
                            )
                        },
                        {
                            number: "3",
                            title: "User Responsibilities",
                            content: () => (
                                <ul className="list-disc pl-6 space-y-1">
                                    {[
                                        'Provide accurate and up-to-date information.',
                                        'Maintain the confidentiality of your account credentials.',
                                        'Comply with all applicable laws and regulations.',
                                        'Do not misuse our services.'
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
                            )
                        },
                        {
                            number: "4",
                            title: "Intellectual Property",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of Q-Line or its licensors.
                                </p>
                            )
                        },
                        {
                            number: "5",
                            title: "Limitation of Liability",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    Q-Line will not be held liable for any damages arising from the use or inability to use the website or services.
                                </p>
                            )
                        },
                        {
                            number: "6",
                            title: "Changes to Terms",
                            content: () => (
                                <p className="text-gray-800 leading-relaxed">
                                    We reserve the right to revise these terms at any time. By using this website, you are expected to review these terms on a regular basis.
                                </p>
                            )
                        },
                        {
                            number: "7",
                            title: "Contact Us",
                            content: () => (
                                <>
                                    <p className="text-gray-800 leading-relaxed mb-2">
                                        If you have any questions about these Terms and Conditions, please contact us at:
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

export default Terms; 
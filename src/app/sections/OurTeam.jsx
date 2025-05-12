"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const teamMembers = [
    {
        name: 'Youssef Kamal',
        position: 'Front-End Developer',
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Laila Hassan',
        position: 'UI/UX Designer',
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Omar Fathy',
        position: 'Back-End Engineer',
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Nour El-Din',
        position: 'Project Manager',
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Sara Khaled',
        position: 'Marketing Specialist',
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        name: 'Mohamed Adel',
        position: 'DevOps Engineer',
        img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const OurTeam = () => {
    return (
        <section className="bg-white py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-black mb-4">Welcome to Our Team</h1>
                    <p className="text-gray-600 mb-8">
                        Meet our team, discover our values, and learn how we balance work, life, and everything in between.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-1.5"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1, zIndex: 1, ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? { scale: 1.02 } : {}) }}
                            transition={{ duration: 0.3 }}
                            className="relative group bg-gray-200 h-64 w-full flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-black flex flex-col items-center justify-center text-white"
                            >
                                <p className="text-lg font-semibold">{member.name}</p>
                                <p className="text-sm">{member.position}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurTeam; 
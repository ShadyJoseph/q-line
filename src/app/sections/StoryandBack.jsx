"use client";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {
        y: 50,
        opacity: 0,
        scale: 0.8
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

const imageVariants = {
    hidden: {
        y: 50,
        opacity: 0,
        scale: 0.8
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8
        }
    }
};

export default function StoryandBack() {
    return (
        <div className="bg-white">
            {/* Mobile Section */}
            <div className="block lg:hidden">
                {/* About Us Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.8
                    }}
                    className="max-w-xl mx-auto px-4 pt-12 pb-6"
                >
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-black mb-3">About Us</h1>
                        <div className="w-16 h-1 bg-black mx-auto"></div>
                    </div>
                </motion.div>
                {/* Our Story */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl mx-auto px-4 pb-8"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl font-bold mb-4 text-center"
                    >
                        Our Story
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-base text-gray-800 leading-relaxed mb-4 text-center"
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed alias repellendus perferendis earum facilis est soluta consequuntur placeat hic aliquid exercitationem, ex molestias nam veniam distinctio maxime culpa magnam autem.
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                        className="text-base text-gray-800 leading-relaxed mb-4 text-center"
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Similique dolorem quas placeat expedita aliquid rerum tempore amet, sequi ipsa ad, adipisci exercitationem nihil, sapiente laborum minus doloribus consequuntur sed.
                    </motion.p>
                    {/* Cool 3-image layout */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-3 items-stretch"
                    >
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-2 h-44 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                alt="Workspace 1"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="h-32 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                alt="Workspace 2"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="h-32 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                alt="Workspace 3"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
                {/* Our Workspace */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl mx-auto px-4 pb-12"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-xl font-bold mb-4 text-center"
                    >
                        Our Workspace
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-base text-gray-800 leading-relaxed mb-4 text-center"
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Impedit quae vel rem tenetur illum aspernatur. Ea, facere soluta cumque laboriosam repudiandae quaerat inventore dolores saepe pariatur, adipisci atque voluptates doloribus!
                    </motion.p>
                    <motion.p
                        variants={itemVariants}
                        className="text-base text-gray-800 leading-relaxed mb-4 text-center"
                    >
                        Lorem ipsum dolor, sit amet consectetur adipiscing elit. Iure aliquid laudantium minus distinctio exercitationem odio non nihil blanditiis quae, beatae assumenda ad reiciendis soluta dolorem. Natus repellendus quidem dolorem tempore!
                    </motion.p>
                    {/* Cool 3-image layout */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-3 items-stretch"
                    >
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="col-span-2 h-44 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                alt="Workspace 1"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="h-32 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                alt="Workspace 2"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="h-32 rounded-xl overflow-hidden shadow-md"
                        >
                            <img
                                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                alt="Workspace 3"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            {/* Desktop Section */}
            <div className="hidden lg:block">
                {/* About Us Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.8
                    }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
                >
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">About Us</h1>
                        <div className="w-24 h-1 bg-black mx-auto"></div>
                    </div>
                </motion.div>

                {/* Our Story Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                        {/* Text Section */}
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">OurStory</h2>
                            <div className="space-y-4">
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed alias
                                    repellendus perferendis earum facilis est soluta consequuntur
                                    placeat hic aliquid exercitationem, ex molestias nam veniam
                                    distinctio maxime culpa magnam autem.
                                </p>
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Similique
                                    dolorem quas placeat expedita aliquid rerum tempore amet, sequi
                                    ipsa ad, adipisci exercitationem nihil, sapiente laborum minus
                                    doloribus consequuntur sed.
                                </p>
                            </div>
                        </div>
                        {/* Images Section */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="lg:w-1/2 flex flex-col lg:flex-row gap-4 mt-8 lg:mt-0"
                        >
                            {/* Stacked 1x2 Images */}
                            <div className="flex-1 flex flex-col gap-4">
                                <motion.div
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                        alt="Workspace 1"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                        alt="Punch Today"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                            {/* Single 1x1 Image */}
                            <motion.div
                                variants={imageVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 relative h-100 sm:h-[29rem] w-full overflow-hidden rounded-lg"
                            >
                                <img
                                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                    alt="Plant"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Our Workspace Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                        {/* Images Section */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="lg:w-1/2 flex flex-col lg:flex-row gap-4 order-2 lg:order-1"
                        >
                            {/* Single 1x1 Image */}
                            <motion.div
                                variants={imageVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="flex-1 relative h-100 sm:h-[29rem] w-full overflow-hidden rounded-lg"
                            >
                                <img
                                    src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                    alt="Team 3"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            {/* Stacked 1x2 Images */}
                            <div className="flex-1 flex flex-col gap-4">
                                <motion.div
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                        alt="Team 1"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    variants={imageVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                                >
                                    <img
                                        src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                        alt="Team 2"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                        {/* Text Section */}
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">Our Workspace</h2>
                            <div className="space-y-4">
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Impedit
                                    quae vel rem tenetur illum aspernatur. Ea, facere soluta cumque
                                    laboriosam repudiandae quaerat inventore dolores saepe pariatur,
                                    adipisci atque voluptates doloribus!
                                </p>
                                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                                    Lorem ipsum dolor, sit amet consectetur adipiscing elit. Iure
                                    aliquid laudantium minus distinctio exercitationem odio non nihil
                                    blanditiis quae, beatae assumenda ad reiciendis soluta dolorem.
                                    Natus repellendus quidem dolorem tempore!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
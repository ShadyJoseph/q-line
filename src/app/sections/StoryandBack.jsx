"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const imageVariants = {
  hidden: {
    y: 50,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
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
            duration: 0.8,
          }}
          className="max-w-xl mx-auto px-4 pt-12 pb-6"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-3">
              About Q-Line Print
            </h1>
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
            Q-Line Print began with a vision to simplify printing for businesses
            and schools. As an award-winning, family-owned company, we've built
            a reputation for quality and innovation, delivering tailored design
            and printing solutions across the nation.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-800 leading-relaxed mb-4 text-center"
          >
            From crafting eye-catching flyers to producing educational books,
            our team combines creativity and expertise to help clients stand
            out. We guide you through every step, making complex projects
            seamless and impactful.
          </motion.p>
          {/* Cool 3-image layout */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-3 items-stretch"
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="col-span-2 h-44 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/images/OurStory3.jpg"
                alt="Workspace 1"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading="eager"
              />
            </motion.div>
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-32 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/images/OurStory2.jpg"
                alt="Workspace 2"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading="eager"
              />
            </motion.div>
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-32 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/images/OurStory1.jpg"
                alt="Workspace 3"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading="eager"
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
            Our state-of-the-art facility is where creativity meets precision.
            Equipped for offset, digital, and wide-format printing, we produce
            everything from custom packaging to vibrant stickers with unmatched
            quality.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-800 leading-relaxed mb-4 text-center"
          >
            Our team thrives in a collaborative environment, working closely
            with clients to turn ideas into reality. Whether it's a school
            textbook or a marketing brochure, we ensure every project shines.
          </motion.p>
          {/* Cool 3-image layout */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-3 items-stretch"
          >
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="col-span-2 h-44 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/images/OurWorkplace1.jpg"
                alt="Workspace 1"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading="eager"
              />
            </motion.div>
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-32 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/images/OurWorkplace2.jpg"
                alt="Workspace 2"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading="eager"
              />
            </motion.div>
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-32 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/images/OurWorkplace3.jpg"
                alt="Workspace 3"
                className="w-full h-full object-cover"
                style={{
                  imageRendering: "auto",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)",
                }}
                loading="eager"
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
            duration: 0.8,
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              About Q-Line Print
            </h1>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
        </motion.div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            {/* Text Section */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  Founded as a family-owned business, Q-Line Print has grown
                  into an award-winning leader in printing and design. Our
                  passion for quality and innovation drives us to serve clients
                  locally and nationally with unmatched expertise.
                </p>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  We specialize in creating standout materials, from flyers and
                  brochures to educational books and custom packaging. Our team
                  guides clients through every project, ensuring seamless
                  execution and impactful results.
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
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/OurStory2.jpg"
                    alt="Workspace 1"
                    className="w-full h-full object-cover"
                    style={{
                      imageRendering: "auto",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                    loading="eager"
                  />
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/OurStory3.jpg"
                    alt="Punch Today"
                    className="w-full h-full object-cover"
                    style={{
                      imageRendering: "auto",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                    loading="eager"
                  />
                </motion.div>
              </div>
              {/* Single 1x1 Image */}
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 relative h-100 sm:h-[29rem] w-full overflow-hidden rounded-lg"
              >
                <img
                  src="/images/OurStory1.jpg"
                  alt="Plant"
                  className="w-full h-full object-cover"
                  loading="eager"
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
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex-1 relative h-100 sm:h-[29rem] w-full overflow-hidden rounded-lg"
              >
                <img
                  src="/images/OurWorkplace3.jpg"
                  alt="Team 3"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
              {/* Stacked 1x2 Images */}
              <div className="flex-1 flex flex-col gap-4">
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/OurWorkplace2.jpg"
                    alt="Team 1"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-48 sm:h-56 w-full overflow-hidden rounded-lg"
                >
                  <img
                    src="/images/OurWorkplace1.jpg"
                    alt="Team 2"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
              </div>
            </motion.div>
            {/* Text Section */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">
                Our Workspace
              </h2>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  Our cutting-edge workspace is designed for creativity and
                  precision. With advanced equipment for offset, digital, and
                  wide-format printing, we craft everything from vibrant
                  stickers to custom packaging with excellence.
                </p>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  Our collaborative team works hand-in-hand with clients,
                  turning ideas into reality. Whether it's a school textbook or
                  a marketing campaign, we deliver results that make an impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

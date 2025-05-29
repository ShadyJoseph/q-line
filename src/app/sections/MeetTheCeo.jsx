"use client";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin } from "react-icons/fa"; // Removed WhatsApp icon

const MeetTheCeo = () => {
  return (
    <section className="py-16 bg-white mb-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-full mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-4 text-gray-800"
          >
            Meet The CEO
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-black mx-auto mb-12"
          />

          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="w-full md:w-1/3 relative">
              <div className="relative w-full h-[calc(100vh-450px)] overflow-hidden">
                <motion.img
                  src="/images/Qline-Emad.jpg"
                  alt="Emad Hanna - CEO"
                  className="w-full h-full object-cover shadow-2xl"
                  style={{
                    imageRendering: "auto",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-semibold mb-6 text-gray-800 text-center md:text-left">
                About Emad Hanna
              </h3>
              <div className="space-y-6 text-center md:text-left">
                <p className="text-gray-600 leading-relaxed">
                  <span>
                    Emad Hanna brings over{" "}
                    <strong>two decades of leadership and innovation</strong> to
                    the table, with deep expertise in
                    <strong> account management</strong>,{" "}
                    <strong>service delivery</strong>, and{" "}
                    <strong>operations</strong>—particularly in
                    <strong> document outsourcing</strong> and{" "}
                    <strong>printing technologies</strong>. His impressive
                    career at
                    <strong> Xerox Egypt</strong> saw him thrive in key roles
                    like <strong>Service Delivery Manager</strong> and
                    <strong> Operations Manager</strong>, where he led{" "}
                    <strong>strategic planning</strong>,{" "}
                    <strong>streamlined operations</strong>, and ensured{" "}
                    <strong>top-tier quality</strong> across sectors such as{" "}
                    <strong>banking</strong>, <strong>telecom</strong>, and
                    <strong> IT</strong>. Emad is known for his strong command
                    of <strong>cost control</strong>,{" "}
                    <strong>vendor partnerships</strong>, and{" "}
                    <strong>team leadership</strong>. With hands-on knowledge in{" "}
                    <strong>offset and digital printing</strong> ,
                    <strong>advertising media</strong>, and{" "}
                    <strong> exhibition logistics</strong>, he pairs{" "}
                    <strong>technical know-how</strong>
                    with a sharp focus on <strong>customer satisfaction</strong>
                    —consistently driving <strong>growth</strong>,
                    <strong> efficiency</strong>, and <strong>results</strong>.
                    With a solid foundation in both{" "}
                    <strong>strategy and execution</strong>, Emad Hanna combines{" "}
                    <strong>technical expertise </strong>
                    with <strong>strong leadership</strong> to deliver{" "}
                    <strong>measurable impact</strong>. His background spans
                    <strong> high-pressure industries</strong> where he has{" "}
                    <strong>optimized workflows</strong>, built
                    <strong> strong client relationships</strong>, and led{" "}
                    <strong>cross-functional teams</strong>—all while
                    maintaining a commitment to <strong>excellence</strong> and{" "}
                    <strong>innovation</strong>.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Circles and Line Section */}
          <div className="mt-12 relative">
            <div className="absolute -left-0 top-0 bottom-0 w-1 bg-black"></div>
            <div className="pl-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    1
                  </span>
                </motion.div>
                <div className="ml-10 text-center md:text-left">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Innovation & Excellence
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Committed to innovation in document solutions and client
                    satisfaction, driving excellence in every project.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    2
                  </span>
                </motion.div>
                <div className="ml-10 text-center md:text-left">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Global Leadership
                  </h4>
                  <p className="text-gray-600 mt-2">
                    A proven leader in transforming operational workflows for
                    global enterprises, setting new industry standards.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    3
                  </span>
                </motion.div>
                <div className="ml-10 text-center md:text-left">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Team Development
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Passionate about mentoring teams and optimizing business
                    processes, fostering growth and innovation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheCeo;

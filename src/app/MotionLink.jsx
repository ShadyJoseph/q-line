import dynamic from "next/dynamic";

const MotionLink = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.a),
  { ssr: false }
);


export default MotionLink;
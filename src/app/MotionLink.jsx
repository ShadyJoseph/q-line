"use client";
import dynamic from "next/dynamic";

const MotionLink = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.a),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200 rounded-lg" style={{ minHeight: "20px" }} />
  }
);

export default MotionLink;
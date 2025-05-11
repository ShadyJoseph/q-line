"use client";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
    () => import("framer-motion").then((mod) => mod.motion.div),
    {
        ssr: false,
        loading: () => <div className="animate-pulse bg-gray-200 rounded-lg" style={{ minHeight: "100px" }} />
    }
);

export default MotionDiv;
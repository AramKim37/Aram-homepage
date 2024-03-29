import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        y: 1000,
        opacity: 0,
      }}
      animate={{
        y: 0,
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-10"
    >
      <div className="absolute border border-[#464343] rounded-full h-[200px] w-[200px] mt-52 ping_animation" />
      <div className="absolute border border-[#464343] rounded-full h-[300px] w-[300px] mt-52 ping_animation" />
      <div className="absolute border border-[#464343] rounded-full h-[400px] w-[400px] mt-52 ping_animation" />
      <div className="absolute border border-[#5aa5e6] rounded-full opacity-20 h-[500px] w-[500px] mt-52 animate-pulse" />
      <div className="absolute border animate-pulse border-[#6184a2] h-[700px] w-[700px] rounded-full mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;

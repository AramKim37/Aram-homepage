"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "@/public/image/react.svg";

const Skill = () => {
  const [direction, setDirection] = useState(true);
  return (
    // <div className="group relative flex h-screen cursor-pointer">
    //   <motion.img
    //     initial={{
    //       x: direction ? -200 : 200,
    //       opacity: 0,
    //     }}
    //     transition={{
    //       duration: 2,
    //     }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     src={React.src}
    //     className="h-24 w-24 rounded-full border border-gray-500 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale trasition duration-300 ease-in-out"
    //   />
    //   <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full">
    //     <div className="flex items-center h-full justify-center">
    //       <p className="text-2xl text-black opacity-100 font-bold">100%</p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <motion.img
        initial={{
          x: direction ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={React.src}
        className="h-24 w-24 rounded-full border border-gray-500 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale trasition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full">
        <div className="flex items-center h-full justify-center">
          <p className="text-2xl text-black opacity-100 font-bold">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

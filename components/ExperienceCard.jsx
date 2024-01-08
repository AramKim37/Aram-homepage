"use client";
import { motion } from "framer-motion";
import Capstone from "@/public/image/capstone.png";
import Bootcamp from "@/public/image/bootcamp.png";
import React from "@/public/image/react.svg";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/*w-screen하면 한페이지당 하나씩만 가능해짐 */}
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={Capstone.src}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4>Capstone Project</h4>
        <p>SAIT</p>
        <div className="flex space-x-2 my-2">
          <Image src={React} alt="react" className="h-10 w-10 rounded-full" />
          <Image src={React} alt="react" className="h-10 w-10 rounded-full" />
          <Image src={React} alt="react" className="h-10 w-10 rounded-full" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work...End work</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

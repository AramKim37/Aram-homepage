"use client";
import { motion } from "framer-motion";
import Capstone from "@/public/image/capstone.png";
import Bootcamp from "@/public/image/bootcamp.png";

const ExperienceCard = () => {
  return (
    <article>
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
        <div className="flex space-x-2 my-2">icons</div>
        <p>Started work...End work</p>
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

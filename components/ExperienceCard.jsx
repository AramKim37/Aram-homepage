"use client";
import { motion } from "framer-motion";
import Capstone from "@/public/image/capstone.png";
import Bootcamp from "@/public/image/bootcamp.png";

const ExperienceCard = () => {
  return (
    <div className="flex items-center justify-center space-x-10 snap-center flex-shrink-0">
      <article className="flex flex-col rounded-lg items-center snap-center flex-shrink-0 space-y-7 p-10 bg-[#292929] w-[500px] md:w-[600px] xl:w-[900px]">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          src={Capstone.src}
          className="w-32 h-32 rounded-sm object-cover xl:w-[200px] xl:h-[200px] object-center"
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">CEO of papafam</h4>
          <p className="font-bold text-2xl mt-1">papafam</p>
          <div className="flex space-x-2 my-2">
            {/*tech used */}
            {/*tech used */}
            {/*tech used */}
          </div>
          <p className="uppercase py-5 text-gray-300">
            Satarted work...end work
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
          </ul>
        </div>
      </article>

      <article className="flex flex-col rounded-lg items-center snap-center flex-shrink-0 space-y-7 p-10 bg-[#292929] w-[500px] md:w-[600px] xl:w-[900px]">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
          src={Capstone.src}
          className="w-32 h-32 rounded-sm object-cover xl:w-[200px] xl:h-[200px] object-center"
        />
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">CEO of papafam</h4>
          <p className="font-bold text-2xl mt-1">papafam</p>
          <div className="flex space-x-2 my-2">
            {/*tech used */}
            {/*tech used */}
            {/*tech used */}
          </div>
          <p className="uppercase py-5 text-gray-300">
            Satarted work...end work
          </p>
          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
            <li>ajsldfkjasdlfk;jasdl;fkasdj</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;

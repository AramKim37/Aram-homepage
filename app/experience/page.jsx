"use client";

import { motion } from "framer-motion";
import { experienceCard } from "@/data/data.js";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import Hamburger from "@/public/image/hamburger.svg";

const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isClicked = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-max-full flex flex-col justify-center items-center mx-auto p-10 min-h-screen relative">
      <div className=" absolute top-0 right-0 p-5 flex items-center justify-center">
        <div className="flex flex-col items-end justify-center">
          <button
            onClick={isClicked}
            className="px-4 py-1 my-3 text-gray-500 rounded-sm uppercase  font-bold  hover:font-bold"
          >
            <Image src={Hamburger} width={32} height={32} alt="menu" />
          </button>
          <SideBar isOpen={isOpen} isClicked={isClicked} />
        </div>
      </div>
      <h1 className="pb-20 uppercase text-center tracking-[20px] font-extrabold text-gray-500 text-2xl 2xl:text-4xl">
        experience
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-20">
        {experienceCard.map((card) => (
          <div key={card.id} className="w-full h-full">
            <div className="flex flex-col mx-auto items-center justify-evenly w-[400px] h-[400px] bg-[#212121] text-gray-500 rounded-xl card ">
              <motion.img
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={card.image}
                width={150}
                height={150}
                alt="exp_image"
                className="md:w-[200px] md:h-[200px] p-5 rounded-xl object-cover object-center"
              />
              <motion.div
                initial={{ opacity: 0, y: 300 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5"
              >
                <h3 className="text-center md:text-2xl">{card.title}</h3>
                <div className="flex items-center justify-center gap-5">
                  {Object.entries(card.icons[0]).map(([key, value]) => (
                    <Image
                      key={key}
                      src={value}
                      alt="icons"
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
                <div className="w-[400px] flex flex-col justify-start">
                  {Object.entries(card.desc[0]).map(([key, value]) => (
                    <li className="md:text-[20px]" key={key}>
                      {value}
                    </li>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceCard } from "@/data/data.js";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="w-full flex flex-col space-y-4 items-center justify-center text-center p-10 "
    >
      <h1 className="pb-20 uppercase text-center tracking-[20px]  text-gray-500 text-2xl 2xl:text-4xl">
        experience
      </h1>
      <div className="w-full h-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
          {experienceCard.map((item, index) => (
            <div key={item.id} className="">
              <div className="w-full relative">
                <div className="flex items-center justify-center w-[400px] h-[400px]">
                  <Image
                    src={item.image}
                    alt="capstone"
                    width={320}
                    height={320}
                    objectFit="cover"
                    className="w-full h-full object-center object-cover rounded-xl "
                  />
                </div>
                <div className="absolute w-full h-full bottom-0 flex flex-col items-center justify-evenly  bg-gray-500">
                  <h1>{item.title}</h1>
                  <div className="flex space-x-5">
                    {Object.entries(item.icons[0]).map(([key, value]) => (
                      <div key={key} className="">
                        <Image
                          src={value}
                          alt="icons"
                          width={32}
                          height={32}
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    {Object.entries(item.desc[0]).map(([key, value]) => (
                      <li className="text-left" key={key}>
                        {value}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div className="flex overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center md:flex-row">
    //   {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
    //     Experience
    //   </h3> */}
    //   <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#38598b]/40">
    //     <ExperienceCard />
    //   </div>
    // </div>
  );
};

export default WorkExperience;

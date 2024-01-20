"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col space-y-4 items-center justify-center text-center p-10 "
    >
      <h1 className="pb-20 uppercase text-center tracking-[20px]  text-gray-500 text-2xl 2xl:text-4xl">
        experience
      </h1>
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

"use client";
import Image from "next/image";
import React from "react";
import BootCamp from "@/public/image/bootcamp.png";
import { motion } from "framer-motion";
import { projectItems } from "@/data/data.js";

const Projects = () => {
  console.log(projectItems.img);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen pt-[200px] pb-[200px] relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto itmes-center z-0"
    >
      <h3 className="absolute top-24 text-gray-500 tracking-[20px] text-2xl uppercase">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#38598b]/40">
        {projectItems.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <div className="relative flex flex-col items-center w-[500px] h-[600px]">
              <motion.img
                initial={{ opacity: 0, y: -500 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                src={project.img}
                alt="bootcamp"
                className="w-[500px] h-[500px] object-cover block"
              />
              <div className="absolute left-0 w-full h-full bg-black bg-opacity-70 opacity-0 flex flex-col items-center justify-end transition-opacity duration-300 hover:opacity-100">
                <p className="md:text-lg text-center md:text-left ">
                  {project.desc}
                  <button>Go</button>
                </p>
              </div>
            </div>
            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-center font-semibold md:text-4xl">
                Case Study {i + 1} of {projectItems.length}: {project.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-[100%] absolute top-[30%] bg-gray-500 left-0 h-[500px] -skew-y-12"
      />
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 500 }}
        transition={{ duration: 1.5 }}
        className="w-[100%] absolute top-[30%] bg-gray-500 left-0 h-[500px] -skew-y-12"
      />
    </motion.div>
  );
};

export default Projects;

"use client";
import Image from "next/image";
import React from "react";
import BootCamp from "@/public/image/bootcamp.png";
import { motion } from "framer-motion";
import { projectItems } from "@/data/data.js";

const Projects = () => {
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
      {projectItems.map((item, id) => (
        <div key="id">{item.title}</div>
      ))}
      {/* <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#38598b]/40">
        {Items..map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <motion.img
              initial={{ opacity: 0, y: -500 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src={BootCamp.src}
              alt="bootcamp"
            />
            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-center font-semibold text-4xl">
                Case Study {i + 1} of {projects.length}: UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                illum dignissimos libero modi? Id delectus tempore libero omnis
                earum perferendis sequi? Velit ullam quae aut perferendis
                voluptatem, tempora obcaecati amet?
              </p>
            </div>
          </div>
        ))}
      </div> */}
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

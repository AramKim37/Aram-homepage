"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectItems } from "@/data/data.js";
import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import Hamburger from "@/public/image/hamburger.svg";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isClicked = () => {
    setIsOpen(!isOpen);
  };
  const [expandedCard, setExpandedCard] = useState(null);
  const handleCard = (index) => {
    setExpandedCard(index === expandedCard ? -1 : index);
  };

  const cardVariant = {
    expanded: {
      width: "500px",
    },
    collapsed: {
      width: "200px",
    },
  };

  return (
    <section className="flex flex-col w-full items-center justify-center min-h-screen relative">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <h1 className="text-2xl 2xl:text-4xl font-extrabold text-center text-gray-500 tracking-[20px] uppercase">
          Projects
        </h1>
        <p className="mt-4 text-xl text-gray-500 text-center">
          Click projects and echeck out latest works
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5 bg-[#212121] rounded-xl p-10">
        {projectItems.map((index) => (
          <div key={index} className="">
            <motion.div
              key={index}
              className={`cursor-pointer h-[400px] bg-cover bg-center bg-blue-400 rounded-[20px] ${
                index === expandedCard ? "expanded" : ""
              }`}
              variants={cardVariant}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              animate={index === expandedCard ? "expanded" : "collapsed"}
              transition={{ duration: 1 }}
              onClick={() => handleCard(index)}
              style={{
                backgroundImage: `url(${index.img})`,
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px]  bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-extrabold text-white text-center m-2">
                    {index.title}
                  </h2>
                  {index === expandedCard && (
                    <div className="text-center">
                      <p className="m-2 text-gray-200 text-center text-semibold p-2">
                        {index.desc}
                      </p>
                      <Link href={index.url} target="_blank">
                        <button className="px-5 py-1 m-2 text-gray-300 text-extrabold uppercase border-transparent rounded-full hover:border-2 hover:text-gray-500 hover:border-white hover:bg-white">
                          exproler
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
    // <div
    //   id="about"
    //   className="w-full flex flex-col space-y-4 items-center justify-center text-center p-10 "
    // >
    //   <h1 className="pb-20 uppercase text-center tracking-[20px]  text-gray-500 text-2xl 2xl:text-4xl">
    //     projects
    //   </h1>
    //   <div className="w-full flex flex-wrap items-center justify-center gap-5">
    //     {projectItems.map((item) => (
    //       <div
    //         key={item.id}
    //         className="relative w-[300px] h-[500px] flex flex-col items-center overflow-hidden group hover:bg-gray-500 "
    //       >
    //         <Image
    //           alt="project"
    //           src={item.img}
    //           width={150}
    //           height={150}
    //           className="w-[300px] h-[500px] group-hover:opacity-30"
    //         />
    //         <div className="absolute w-full h-full top-0 -right-[500px] flex flex-col items-center justify-center transform duration-500 group-hover:right-0  hover:bg-[#08080838]">
    //           <h2 className="text-xl">{item.title}</h2>
    //           <p className="text-[12px]">{item.desc}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    // <motion.div
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   transition={{ duration: 1.5 }}
    //   className="h-screen pt-[200px] pb-[200px] relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto itmes-center z-0"
    // >
    //   <h3 className="absolute top-24 text-gray-500 tracking-[20px] text-2xl uppercase">
    //     Projects
    //   </h3>

    //   <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#38598b]/40">
    //     {projectItems.map((project, i) => (
    //       <div
    //         key={i}
    //         className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
    //       >
    //         <div className="relative flex flex-col items-center w-[500px] h-[600px]">
    //           <motion.img
    //             initial={{ opacity: 0, y: -500 }}
    //             whileInView={{ opacity: 1, y: 0 }}
    //             transition={{ duration: 1.5 }}
    //             viewport={{ once: true }}
    //             src={project.img}
    //             alt="bootcamp"
    //             className="w-[300px] h-[300px] object-cover"
    //           />

    //           <p className="md:text-lg text-center md:text-left flex flex-col ">
    //             {project.desc}
    //             <button className="">exproler</button>
    //           </p>
    //         </div>

    //         <div className="space-y-10 px-10 md:px-10 max-w-6xl">
    //           <h4 className="text-center font-semibold md:text-4xl">
    //             Case Study {i + 1} of {projectItems.length}: {project.title}
    //           </h4>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //   <motion.div
    //     initial={{ opacity: 0, x: 500 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     transition={{ duration: 1.5 }}
    //     className="w-[100%] absolute top-[50%] bg-gray-500 left-0 h-[300px] -skew-y-12"
    //   />
    //   <motion.div
    //     initial={{ opacity: 0, x: -500 }}
    //     whileInView={{ opacity: 1, x: 500 }}
    //     transition={{ duration: 1.5 }}
    //     className="w-[100%] absolute top-[50%] bg-gray-500 left-0 h-[300px] -skew-y-12"
    //   />
    // </motion.div>
  );
};

export default Projects;

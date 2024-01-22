"use client";
import { motion } from "framer-motion";
import Capstone from "@/public/image/capstone.png";
import Bootcamp from "@/public/image/bootcamp.png";
import React from "@/public/image/react.svg";
import MongoDB from "@/public/image/mongodb.svg";
import Express from "@/public/image/express.svg";
import Nodejs from "@/public/image/node.svg";
import GraphQl from "@/public/image/graphql.svg";
import Typescript from "@/public/image/typescript.svg";
import Jest from "@/public/image/jest.svg";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <div className="flex overflow-hidden flex-col text-left max-w-full px-10 justify-evenly mx-auto items-center md:flex-row">
      <h3 className="uppercase tracking-[20px] font-extrabold  text-gray-500 text-2xl hidden md:block md:top-40">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-12 pb-[20px] mb-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#38598b]/40 md:p-10">
        <article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 text-center overflow-hidden md:text-base">
          <div className="flex flex-col w-full items-center overflow-auto">
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
              className="w-32 h-32 rounded-xl xl:w-[200px] xl:h-[200px] object-cover object-center"
            />
            <div className="flex flex-col items-center px-2 pt-5 md:px-10">
              <h4 className="uppercase text-[12px] md:text-base">
                Capstone Project
              </h4>
              <p className="text-[12px] md:text-base">SAIT</p>
              <div className="flex space-x-2 my-2 ">
                <Image src={React} alt="react" className="w-7 rounded-full" />
                <Image src={MongoDB} alt="react" className="w-7 rounded-full" />
                <Image src={Nodejs} alt="react" className="w-7 rounded-full" />
              </div>
              <p className="uppercase py-5 text-gray-300">2021</p>
              <ul className="text-[12px] list-disc space-y-4 ml-5 md:text-lg text-left">
                <li>Brainstorm innovative ideas for the project</li>
                <li>Iplement payment system(stripe)</li>
                <li>Works closely with the project team</li>
                <li>Collaborate with Github</li>
              </ul>
            </div>
          </div>
        </article>
        <article className="flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 text-center overflow-hidden md:text-base">
          <div className="flex flex-col w-full items-center overflow-auto">
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
              src={Bootcamp.src}
              className="w-32 h-32 rounded-xl xl:w-[200px] xl:h-[200px] object-cover object-center"
            />
            <div className="flex flex-col items-center px-2 pt-5 md:px-10">
              <h4 className="uppercase text-[12px] md:text-base">
                Full Stack Development Program
              </h4>
              <p className="text-[12px] md:text-base">
                Harvest Talent Incubator with neo
              </p>
              <div className="flex space-x-2 my-2 ">
                <Image src={React} alt="react" className="w-7 rounded-full" />
                <Image src={MongoDB} alt="react" className="w-7 rounded-full" />
                <Image
                  src={Typescript}
                  alt="react"
                  className="w-7 rounded-full"
                />
                <Image src={Jest} alt="react" className="w-7 rounded-full" />
                <Image src={GraphQl} alt="react" className="w-7 rounded-full" />
              </div>
              <p className="uppercase py-5 text-gray-300">2022</p>
              <ul className="text-[12px] list-disc space-y-4 ml-5 md:text-lg text-left">
                <li>Advance creativity</li>
                <li>Improved Problem-solving skills</li>
                <li>Experience Jest test</li>
                <li>Real Industrial workflow experience</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ExperienceCard;

"use client";
import { motion } from "framer-motion";
import Aram from "@/public/image/me.jpeg";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Resume from "@/public/image/resume.png";
import Capstone from "@/public/image/capstone.png";
import BootCamp from "@/public/image/bootcamp.png";
import React from "@/public/image/react.svg";
import MongoDB from "@/public/image/mongodb.svg";
import Express from "@/public/image/express.svg";
import Nodejs from "@/public/image/node.svg";
import GraphQl from "@/public/image/graphql.svg";
import Typescript from "@/public/image/typescript.svg";
import Jest from "@/public/image/jest.svg";
import Skill from "./Skill";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <div
      id="about"
      className="flex flex-col space-y-4 items-center justify-center text-center p-10 min-h-screen"
    >
      <h1 className="uppercase text-center font-extrabold text-gray-500 pb-10 text-2xl md:text-3xl">
        About
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          src={Aram.src}
          className="flex mx-auto md:mb-0 flex-shrink-0 w-[350px] h-[250px] object-cover rounded-xl  md:w-[300px] md:h-[500px] xl:w-[500px] xl:h-[500px] 2xl:h-[700px] pb-5 md:pb-0"
        />
        <div className="flex flex-col w-[350px] justify-center md:justify-between space-y-1 rounded-xl m-1 about-shadow items-center md:w-[600px] md:h-[500px] overflow-scroll">
          <div className="flex gap-1 items-center justify-between">
            <button className="heroButton" onClick={() => setActive("exp")}>
              Experience
            </button>
            <button className="heroButton" onClick={() => setActive("edu")}>
              Education
            </button>
            <button className="heroButton" onClick={() => setActive("skill")}>
              Skiils
            </button>
            <button className="heroButton" onClick={() => setActive("who")}>
              Me
            </button>
          </div>
          <div className="flex items-center justify-center p-10">
            {active !== "exp" && active !== "edu" && active !== "skill" && (
              <div className="w-full h-[350px] flex flex-col items-center justify-between">
                <p className="text-[20x] md:text-lg text-gray-500 text-left 2xl:text-3xl">
                  Graduate of the Southern Alberta Institute of Technology in
                  the information Technology - Software Development Program.
                  Since I started studying computer science, I am always
                  passionate and motivated about coding. Also, I am very
                  persistent and a lifelong learner. So I am willing to learn
                  new tech skills. In addtion, I am a qualified developer with
                  strong creative and analytical skills.
                </p>
                <div className="flex items-center justify-center gap-5 w-full">
                  <SocialIcon
                    url="https://www.linkedin.com/in/aram-kim/"
                    fgColor="#64748b"
                    bgColor="transparent"
                    target="_blank"
                    style={{ width: 60, height: 60 }}
                    className="hover:bg-white hover:rounded-xl"
                  />
                  <SocialIcon
                    url="https://github.com/AramKim37"
                    fgColor="#64748b"
                    bgColor="transparent"
                    target="_blank"
                    style={{ width: 60, height: 60 }}
                    className="hover:bg-white hover:rounded-xl"
                  />
                  <a
                    href="/image/Aram_Resume.pdf"
                    download
                    className="relative"
                  >
                    <button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="heroButton border-gray-500 font-bold hover:bg-white hover:animate-bounce hover:font-bold"
                    >
                      resume
                    </button>
                    {isHovered && (
                      <Image
                        src={Resume}
                        alt="resume"
                        width={100}
                        height={100}
                        className="absolute object-cover rounded-xl left-[120px] -top-7 "
                      />
                    )}
                  </a>
                </div>
              </div>
            )}
            {active === "exp" && (
              <div className=" flex flex-col h-[350px] md:flex-row items-center justify-between gap-10 ">
                <div className="flex flex-col items-center justify-center gap-5">
                  <Image
                    src={Capstone}
                    alt="capstone"
                    width={150}
                    height={100}
                    className="object-cover object-center rounded-xl"
                  />
                  <div className="w-full">
                    <h1 className="text-gray-500 text-xl">Capstone Project</h1>
                    <div className="flex items-center justify-center p-2 gap-5">
                      <Image src={React} alt="react" width={24} height={24} />
                      <Image src={GraphQl} alt="react" width={24} height={24} />
                      <Image src={Nodejs} alt="react" width={24} height={24} />
                    </div>
                    <div className="text-gray-500 w-full">
                      <h3>2021</h3>
                      <div className="text-center md:text-left">
                        <li>Brainstorm innovative ideas for the project</li>
                        <li>Implement payment system(Stripe)</li>
                        <li>Works closely with the projcet team</li>
                        <li>Collaborate with Github</li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                  <Image
                    src={BootCamp}
                    alt="bootcamp"
                    width={150}
                    height={100}
                    className="object-cover object-center rounded-xl"
                  />
                  <div className="w-full">
                    <h1 className="text-gray-500 text-xl">
                      Full Stack Development Program
                    </h1>
                    <div className="flex items-center justify-center p-2 gap-5">
                      <Image src={React} alt="react" width={24} height={24} />
                      <Image
                        src={Typescript}
                        alt="react"
                        width={24}
                        height={24}
                      />
                      <Image src={MongoDB} alt="react" width={24} height={24} />
                      <Image src={GraphQl} alt="react" width={24} height={24} />
                      <Image src={Jest} alt="react" width={24} height={24} />
                    </div>
                    <div className="text-gray-500 w-full">
                      <h3>2021</h3>
                      <div className="text-center md:text-left">
                        <li>Advance creativity</li>
                        <li>Improved Problem-solving Skills</li>
                        <li>Experience Jest Test</li>
                        <li>Real Industrial workflow</li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === "edu" && (
              <div className="w-full flex flex-col items-center justify-center h-[350px] text-gray-500">
                <h1 className="text-2xl flex flex-col items-center justify-center gap-5">
                  <span className="text-[#5aa5e6]">SAIT</span>Diploma in
                  Software Development
                  <span>Sept.2019 - May.2021</span>
                </h1>
                <p className="text-red-500 text-2xl pt-5">Calgary, AB</p>
              </div>
            )}
            {active === "skill" && (
              <div className="w-full h-[350px] flex flex-col items-center justify-between ">
                <Skill />
              </div>
            )}
            {active !== "exp" &&
              active !== "edu" &&
              active !== "skill" &&
              active === "who" &&
              ""}
          </div>

          {/* <div className="flex items-center gap-5 justify-center">
            <SocialIcon
              url="https://www.linkedin.com/in/aram-kim/"
              fgColor="#64748b"
              bgColor="transparent"
              target="_blank"
              style={{ width: 60, height: 60 }}
              className="hover:bg-white hover:rounded-xl"
            />
            <SocialIcon
              url="https://github.com/AramKim37"
              fgColor="#64748b"
              bgColor="transparent"
              target="_blank"
              style={{ width: 60, height: 60 }}
              className="hover:bg-white hover:rounded-xl"
            />
            <a href="/image/Aram_Resume.pdf" download className="relative">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="heroButton border-gray-500 font-bold hover:bg-white hover:animate-bounce hover:font-bold"
              >
                resume
              </button>
              {isHovered && (
                <Image
                  src={Resume}
                  alt="resume"
                  width={100}
                  height={100}
                  className="absolute object-cover rounded-xl left-[120px] -top-7 "
                />
              )}
            </a>
          </div> */}
        </div>
      </div>
    </div>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     whileInView={{ opacity: 1 }}
    //     transition={{ duration: 3.5 }}
    //     className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen md:gap-2 pt-32"
    //   >
    //     <h3 className="absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl hidden md:block md:top-40">
    //       About
    //     </h3>

    //     <motion.img
    //       initial={{
    //         x: -200,
    //         opacity: 0,
    //       }}
    //       transition={{ duration: 1.5 }}
    //       whileInView={{
    //         x: 0,
    //         opacity: 1,
    //       }}
    //       viewport={{ once: true }}
    //       src={Aram.src}
    //       className="pt-2 md:mb-0 flex-shrink-0 w-36 h-44 rounded-xl object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[350px]"
    //     />

    //     <div className="px-2 text-left mb-10 md:px-10">
    //       <h4 className="text-sm text-center pb-5 md:text-left font-semibold pt-10 md:text-4xl md:pt-0 text-gray-500 ">
    //         Who I am
    //       </h4>
    //       <p className="text-[12px] md:pt-5 text-gray-500 md:text-base md:text-[12px]">
    //         Graduate of the Southern Alberta Institute of Technology in the
    //         information Technology - Software Development Program. Since I started
    //         studying computer science, I am always passionate and motivated about
    //         coding. Also, I am very persistent and a lifelong learner. So I am
    //         willing to learn new tech skills. In addtion, I am a qualified
    //         developer with strong creative and analytical skills.
    //       </p>
    //       <div className="flex pt-5 items-center gap-5 justify-center md:justify-end">
    //         <SocialIcon
    //           url="https://www.linkedin.com/in/aram-kim/"
    //           fgColor="#64748b"
    //           bgColor="transparent"
    //           target="_blank"
    //           style={{ width: 40, height: 40 }}
    //           className="hover:bg-white hover:rounded-xl"
    //         />
    //         <SocialIcon
    //           url="https://github.com/AramKim37"
    //           fgColor="#64748b"
    //           bgColor="transparent"
    //           target="_blank"
    //           style={{ width: 40, height: 40 }}
    //           className="hover:bg-white hover:rounded-xl"
    //         />
    //         <a href="/image/Aram_Resume.pdf" download className="relative">
    //           <button
    //             onMouseEnter={() => setIsHovered(true)}
    //             onMouseLeave={() => setIsHovered(false)}
    //             className="heroButton border-gray-500 font-bold hover:bg-white hover:animate-bounce hover:font-bold"
    //           >
    //             resume
    //           </button>
    //           {isHovered && (
    //             <Image
    //               src={Resume}
    //               alt="resume"
    //               width={100}
    //               height={100}
    //               className="absolute object-cover rounded-xl max-[370px]:hidden  md:block"
    //             />
    //           )}
    //         </a>
    //       </div>
    //     </div>
    //   </motion.div>
    // );
  );
};

export default About;

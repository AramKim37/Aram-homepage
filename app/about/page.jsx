"use client";
import { motion } from "framer-motion";
import Aram from "@/public/image/me.jpeg";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Resume from "@/public/image/resume.png";
import SideBar from "@/components/SideBar";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex w-full">
      <div className="flex flex-col space-y-4 items-center justify-center text-center p-10 min-h-screen">
        <h1 className="md:pb-20 uppercase text-center tracking-[20px] font-extrabold text-gray-500 text-2xl 2xl:text-4xl">
          About
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex items-center justify-center pb-10 ml-0">
            <SideBar />
          </div>
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
            className="flex mx-auto basis-1/2 pt-2 md:mb-0 flex-shrink-0 w-[200px] h-[250px] object-cover rounded-xl md:w-[300px] md:h-[550px] xl:w-[500px] xl:h-[500px] 2xl:h-[700px] pb-5 md:pb-0"
          />
          <div className="flex flex-col md:justify-between space-y-10">
            <h3 className="flex mx-auto text-2xl text-center text-gray-500 md:text-left md:mx-0 md:pt-10 md:text-2xl 2xl:text-4xl">
              Who I am
            </h3>
            <p className="text-[20x] md:text-lg text-gray-500 text-left 2xl:text-3xl">
              Graduate of the Southern Alberta Institute of Technology in the
              information Technology - Software Development Program. Since I
              started studying computer science, I am always passionate and
              motivated about coding. Also, I am very persistent and a lifelong
              learner. So I am willing to learn new tech skills. In addtion, I
              am a qualified developer with strong creative and analytical
              skills.
            </p>
            <div className="flex pt-5 items-center gap-5 justify-center md:justify-start">
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
            </div>
          </div>
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

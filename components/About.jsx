"use client";
import { motion } from "framer-motion";
import Aram from "@/public/image/me.jpeg";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl max-[375px]:hidden">
        About
      </h3>

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
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[350px]"
      />

      <div className="space-y-4 px-0 md:px-10">
        <h4 className="text-xl font-semibold md:text-3xl text-gray-500">
          Who I am
        </h4>
        <p className="text-[12px] text-gray-500 md:text-base max-[280px]:text-[10px]">
          Graduate of the Southern Alberta Institute of Technology in the
          information Technology - Software Development Program. Since I started
          studying computer science, I am always passionate and motivated about
          coding. Also, I am very persistent and a lifelong learner. So I am
          willing to learn new tech skills. In addtion, I am a qualified
          developer with strong creative and analytical skills. Team player with
          an eye for detail, extremely motivated to constantly develop my skills
          and grow professionally. I am confident that I will work well with a
          team.
        </p>
        <div className="flex items-center justify-center md:justify-end">
          <SocialIcon
            url="https://www.linkedin.com/in/aram-kim/"
            fgColor="#64748b"
            bgColor="transparent"
            style={{ width: 50, height: 50 }}
          />
          <SocialIcon
            url="https://github.com/AramKim37"
            fgColor="#64748b"
            bgColor="transparent"
            style={{ width: 50, height: 50 }}
          />
          <a href="/image/resume.pdf" download>
            <button className="heroButton">resume</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

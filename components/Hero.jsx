"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Me from "@/public/image/me.jpeg";
import Aram from "@/public/image/aram.jpg";
// import Link from "next/link";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Aram Kim",
      "Make it happen to something",
      "<Try hard to be better />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      id="#hero"
      className="w-full min-h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden md:space-y-8 "
    >
      <BackgroundCircles />
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5 }}
        src={Aram.src}
        className="relative rounded-full h-32 w-32 mx-auto object-cover border-2 border-[#f5e9e9] animate-pulse md:h-40 md:w-40"
      />
      <div className="z-10">
        <h2 className="md:text-sm text-[12px] uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-lg lg:text-4xl font-semibold scroll-px-10 md:text-3xl">
          <span className="mr-3 text-white">{text}</span>
          <Cursor cursorColor="#5aa5e6" />
        </h1>
        {/* <div>
          <Link href="#about" smooth={true} duration={500}>
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience" smooth={true} duration={500}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#testimonials" smooth={true} duration={500}>
            <button className="heroButton">testimonials</button>
          </Link>
          <Link href="#projects" smooth={true} duration={500}>
            <button className="heroButton">Projects</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

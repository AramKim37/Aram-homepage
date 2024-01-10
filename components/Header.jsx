"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-around mx-auto max-w-7xl z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <Link href="#hero">
          <h1 className="uppercase md:inline-flex text-sm text-gray-400">
            Aram`s Home
          </h1>
        </Link>
        {/* Social Icons */}
        {/* <SocialIcon
          url="https://github.com/AramKim37"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/aram-kim/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/aram-kim/"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </motion.div>
      <motion.div
        initial={{
          x: -2000,
          // y: 2500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          // y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        classname="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          {/* <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          /> */}
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

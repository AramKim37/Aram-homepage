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
          <h1 className="uppercase  md:inline-flex text-sm text-gray-400 md:text-m">
            Aram Kim
          </h1>
        </Link>
        {/* Social Icons */}
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
          <div className="flex space-x-3 items-center hover:animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 fill-gray-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>

            <p className="uppercase hidden text-sm md:inline-flex md:text-m text-gray-400">
              Get In Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

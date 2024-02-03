"use client";

import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Mail from "@/public/image/mail.svg";
import Image from "next/image";
import Logo from "@/public/image/logo.svg";
import Hamburger from "@/public/image/hamburger.svg";
import Xmark from "@/public/image/x.svg";

const Header = () => {
  return (
    <header className="px-10 flex items-center justify-between mx-auto w-full">
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
        <Link href="#initial">
          <h1 className="flex gap-2 uppercase bg-transparent md:inline-flex text-sm text-gray-400 md:text-m">
            <Image src={Logo} alt="logo" className="w-20 h-20 fill-[#e6e6e6]" />
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
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <div className="space-x-3 items-center hover:animate-bounce md:flex">
            <motion.img
              whileHover={{ scale: 1.3 }}
              src={Mail.src}
              className="w-5 h-5"
            />

            <p className="hidden uppercase text-sm md:inline-flex md:text-m text-gray-400">
              Get In Touch
            </p>
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

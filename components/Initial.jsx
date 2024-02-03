import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import { motion } from "framer-motion";
import Logo from "@/public/image/logo.svg";
import Image from "next/image";

const Initial = () => {
  return (
    <div
      id="initial"
      className="w-full flex flex-col justify-center items-center text-white px-10 min-h-screen "
    >
      <motion.div
        initial={{ scale: 0.4, y: 500 }}
        animate={{ opacity: 0, scale: 10, y: 400 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image src={Logo} width={100} height={100} alt="logo" />
      </motion.div>
      <div className="w-full flex items-center justify-center md:justify-start">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          transition={{ duration: 1.5, delay: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-8xl font-extrabold flex flex-col justify-start uppercase"
        >
          <h1>Welcome to my</h1>
        </motion.div>
      </div>
      <div className="w-full flex items-ceneter justify-center md:justify-start">
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          transition={{ duration: 1.5, delay: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="headerText text-3xl md:text-8xl uppercase font-extrabold"
        >
          World!
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        transition={{ duration: 1.5, delay: 2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full text-right leading-10 py-20"
      >
        <span className="text-base md:text-5xl text-right">
          I`m Aram, an Software developer who is enthusiastic about creating
          engaging and delightful Tech experiences{" "}
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        transition={{ duration: 1.5, delay: 2 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="light-button flex flex-col items-center p-5"
      >
        {/* <Link href="#hero">
          <button className="bt">
            <div className="light-holder">
              <div className="dot"></div>
              <div className="light"></div>
            </div>
            <div className="button-holder m-5">
              <p className="uppercase text-2xl">explore </p>
            </div>
          </button>
        </Link> */}
      </motion.div>
    </div>
  );
};

export default Initial;

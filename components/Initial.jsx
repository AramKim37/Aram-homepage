import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import { motion } from "framer-motion";
import Logo from "@/public/image/logo.svg";
import Image from "next/image";

const Initial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 5 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <Image src={Logo} width={100} height={100} alt="logo" />
    </motion.div>
    // <div className="w-max-7xl h-screen flex flex-col justify-center text-white px-20 snap-center relative">
    //   <motion.div
    //     initial={{ opacity: 0, x: -300 }}
    //     transition={{ duration: 1.5 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     className="text-7xl md:text-8xl font-extrabold flex flex-col justify-start uppercase"
    //   >
    //     Welcome to my
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0, x: 300 }}
    //     transition={{ duration: 1.5 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     className="headerText text-7xl md:text-8xl uppercase font-extrabold"
    //   >
    //     world!
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0, y: 300 }}
    //     transition={{ duration: 1.5 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     className="w-full text-right leading-10 py-20"
    //   >
    //     <span className="text-3xl md:text-5xl text-right">
    //       I`m Aram, an Software developer who is enthusiastic about creating
    //       engaging and delightful Tech experiences{" "}
    //     </span>
    //   </motion.div>
    //   <motion.div
    //     initial={{ opacity: 0, x: -300 }}
    //     transition={{ duration: 1.5 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     className="light-button flex flex-col items-center p-5"
    //   >
    //     <Link href="/main">
    //       <button className="bt">
    //         <div className="light-holder">
    //           <div className="dot"></div>
    //           <div className="light"></div>
    //         </div>
    //         <div className="button-holder m-5">
    //           <p className="uppercase text-2xl">explore </p>
    //         </div>
    //       </button>
    //     </Link>
    //   </motion.div>
    // </div>
  );
};

export default Initial;

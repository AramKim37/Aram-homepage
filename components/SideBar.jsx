import React, { useState } from "react";
import Home from "@/public/image/home.svg";
import Experience from "@/public/image/experience.svg";
import Projects from "@/public/image/projects.svg";
import Skills from "@/public/image/skills.svg";
import About from "@/public/image/about.svg";
import Contact from "@/public/image/contact.svg";
import Image from "next/image";
import Logo from "@/public/image/logo.svg";
import Link from "next/link";

const SideBar = ({ isOpen }) => {
  return (
    <div className="text-gray-500 uppercase relative">
      {isOpen && (
        <ul className="w-[150px] absolute top-0 right-0 p-5 bg-[#212121] rounded-sm shadow-lg shadow-indigo-500/50 flex flex-col gap-1 cursor-pointer">
          <Link href="/">
            <li>
              <Image src={Logo} alt="logo" width={36} height={36} />
            </li>
          </Link>
          <Link href="/hero">
            <li className="hover:text-white">home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-white">about</li>
          </Link>
          <Link href="/experience">
            <li className="hover:text-white">experience</li>
          </Link>
          <Link href="/projects">
            <li className="hover:text-white">projects</li>
          </Link>
          <Link href="/skills">
            <li className="hover:text-white">skills</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-white">contact</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default SideBar;

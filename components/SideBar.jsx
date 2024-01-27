import React from "react";
import Home from "@/public/image/home.svg";
import Experience from "@/public/image/experience.svg";
import Projects from "@/public/image/projects.svg";
import Skills from "@/public/image/skills.svg";
import About from "@/public/image/about.svg";
import Contact from "@/public/image/contact.svg";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="">
      <div className="w-fit flex md:flex-col items-center justify-center gap-2 bg-slate-400 p-2">
        <div>
          <Image src={Home} alt="" width={40} height={40} />
          <span className="">HOME</span>
        </div>
        <Image src={Experience} alt="" width={40} height={40} />
        <Image src={Projects} alt="" width={40} height={40} />
        <Image src={Skills} alt="" width={40} height={40} />
        <Image src={About} alt="" width={40} height={40} />
        <Image src={Contact} alt="" width={40} height={40} />
      </div>
    </div>
  );
};

export default SideBar;

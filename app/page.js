"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center text-white">
      <div>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        {/* <Skills />
        <Contact /> */}
      </div>
    </main>
  );
}

"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Initial from "@/components/Initial";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <main className="">
      <div>
        <Initial />
        {/* <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact /> */}
      </div>
    </main>
  );
}

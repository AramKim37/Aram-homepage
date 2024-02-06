"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Initial from "@/components/Initial";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Topbar from "@/components/TopBar";
import WorkExperience from "@/components/WorkExperience";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen">
      <Topbar />
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <WorkExperience />
      </section>
      <section>
        <Projects />
      </section>
      <section className="">
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}

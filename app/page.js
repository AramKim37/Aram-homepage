"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Initial from "@/components/Initial";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 50000);
    };
    loader();
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory overflow-scroll">
      {isLoading ? <Initial /> : <Hero />}
      {/* <Initial /> */}
      {/* <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact /> */}
    </main>
  );
}

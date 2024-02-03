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
      }, 5000);
    };
    loader();
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen snap-y snap-mandatory overflow-scroll z-0">
      {isLoading ? (
        <div className="snap-center">
          <Initial />
        </div>
      ) : (
        <>
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
          {/* <section className="snap-center">
        <Skills />
      </section> */}
          <section>
            <Contact />
          </section>
        </>
      )}
    </main>
  );
}

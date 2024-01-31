import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll ">
      <section className="snap-center">
        <Hero />
      </section>
      <section className="snap-center">
        <About />
      </section>
      <section className="snap-center">
        <WorkExperience />
      </section>
      <section className="snap-center">
        <Projects />
      </section>
      <section className="snap-center">
        <Skills />
      </section>
      <section className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default page;

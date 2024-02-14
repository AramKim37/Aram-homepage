"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Topbar from "@/components/TopBar";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen">
      <Topbar />
      <section id="hero" className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <About />
      </section>
      <section className="w-full">
        <Projects />
      </section>
      <section className="w-full">
        <Testimonials />
      </section>
      <section className="w-full">
        <Contact />
      </section>
    </main>
  );
}

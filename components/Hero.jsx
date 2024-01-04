"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Me from "@/public/image/me.jpeg";
import Aram from "@/public/image/aram.jpg";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Aram Kim",
      "<Make it happen to something />",
      "<Try hard to be better />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={Me}
        alt="Me"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>
        <div>
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

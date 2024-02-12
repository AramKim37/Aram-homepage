"use client";

import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const Skill = () => {
  return (
    <div className="w-[300px] md:w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl text-gray-500 w-full text-left pb-10">
        Tech Stack
      </h1>
      <div className="bg-white flex flex-col gap-5 ">
        <ul className=" text-gray-500 uppercase flex items-center md:text-3xl justify-center gap-5 scroll">
          <li>react</li>
          <li>nodejs</li>
          <li>javascript</li>
          <li>nextjs</li>
          <li>html</li>
          <li>Java</li>
        </ul>
        <ul className=" text-gray-500 uppercase flex items-center md:text-3xl justify-center gap-5 scroll-opposite">
          <li>css</li>
          <li>mongodb</li>
          <li>expressjs</li>
          <li>nextjs</li>
          <li>graphql</li>
          <li>Tailwind</li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;

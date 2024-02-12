"use client";

import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const Skill = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl text-gray-500 w-full text-center pb-10">
        Tech Stack
      </h1>
      <div className="bg-[#212121] flex flex-col gap-5 h-[200px] w-[200px] md:w-[600px] md:rounded-xl overflow-hidden items-center justify-center rounded-full">
        <ul className=" text-gray-500 uppercase  flex items-center text-[14px] md:text-3xl justify-center gap-5 scroll">
          <li>react</li>
          <li>nodejs</li>
          <li>javascript</li>
          <li>nextjs</li>
          <li>html</li>
          <li>Java</li>
        </ul>
        <ul className=" text-gray-500 uppercase flex items-center text-[14px] md:text-3xl justify-center gap-5 scroll-opposite">
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

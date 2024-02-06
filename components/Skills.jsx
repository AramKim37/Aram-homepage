import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="uppercase text-gray-500 text-xl text-center">Skills</h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3> */}
      <div className="grid grid-cols-4 gap-5">
        <Skill />
      </div>
    </div>
  );
};

export default Skills;

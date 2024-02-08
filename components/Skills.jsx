import React, { useEffect } from "react";
import TagCloud from "TagCloud";

const Skills = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "NextJS",
        "MONGODB",
        "NodeJS",
        "TAILWIND",
        "JAVA",
        "ES6",
        "GIT",
        "GITHUB",
        "EXPRESS",
      ];
      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <div id="skills" className="text-shpere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default Skills;

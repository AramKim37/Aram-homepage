import React from "react";

const Initial = () => {
  return (
    <div className="w-max-7xl min-h-screen flex flex-col justify-center text-white px-20 ">
      <h1 className="text-7xl md:text-8xl font-extrabold flex flex-col justify-start uppercase">
        Welcome to my <span className="headerText">world!</span>
      </h1>
      <div className="w-full text-right leading-10 py-20">
        <span className="text-3xl md:text-5xl text-right">
          I`m Aram, an Software developer who is enthusiastic about creating
          engaging and delightful Tech experiences{" "}
        </span>
      </div>
      <div className="light-button flex flex-col p-5">
        <button className="bt">
          <div className="light-holder">
            <div className="dot"></div>
            <div className="light"></div>
          </div>
          <div className="button-holder uppercase">
            <p>explore</p>
          </div>
        </button>
      </div>

      {/* <button className="flex justify-start">explore my world</button> */}
    </div>
  );
};

export default Initial;

"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceCard } from "@/data/data.js";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div className="w-max-full flex flex-col items-center mx-auto p-20">
      <h1 className="uppercase tracking-[20px] text-gray-500 text-2xl p-10">
        experience
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-20">
        {experienceCard.map((card) => (
          <div key={card.id} className="w-full h-full">
            <div className="flex flex-col mx-auto items-center justify-evenly w-[400px] h-[400px] bg-[#212121] text-gray-500 rounded-xl card md:w-[500px] md:h-[500px]">
              <Image
                src={card.image}
                width={150}
                height={150}
                alt="exp_image"
                className="md:w-[300px] md:h-[200px] rounded-xl object-cover object-center"
              />
              <div className="flex flex-col gap-5">
                <h3 className="text-center md:text-2xl">{card.title}</h3>
                <div className="flex items-center justify-center gap-5">
                  {Object.entries(card.icons[0]).map(([key, value]) => (
                    <Image
                      key={key}
                      src={value}
                      alt="icons"
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
                <div className="w-[400px] flex flex-col justify-start">
                  {Object.entries(card.desc[0]).map(([key, value]) => (
                    <li className="md:text-[20px]" key={key}>
                      {value}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <div
    //   id="experience"
    //   className="w-full flex flex-col space-y-4 items-center justify-center text-center p-10 "
    // >
    //   <h1 className="pb-20 uppercase text-center tracking-[20px]  text-gray-500 text-2xl 2xl:text-4xl">
    //     experience
    //   </h1>
    //   <div className="w-full flex items-center justify-center">
    //     <div className="flex flex-col md:flex-row items-center justify-center space-x-10">
    //       {experienceCard.map((item, index) => (
    //         <div key={item.id} className="">
    //           <div className="w-full bg-gray-500 p-5 mt-5 flex flex-col items-center justify-center mx-auto">
    //             <div className="flex items-center justify-center w-[400px] h-[400px] ">
    //               <Image
    //                 src={item.image}
    //                 alt="capstone"
    //                 width={320}
    //                 height={320}
    //                 objectFit="cover"
    //                 className="w-full h-full object-center object-cover rounded-xl "
    //               />
    //             </div>
    //             <div className="w-full h-full bottom-0 flex flex-col items-center justify-evenly   mt-10">
    //               <h1>{item.title}</h1>
    //               <div className="flex space-x-5">
    //                 {Object.entries(item.icons[0]).map(([key, value]) => (
    //                   <div key={key} className="">
    //                     <Image
    //                       src={value}
    //                       alt="icons"
    //                       width={32}
    //                       height={32}
    //                       className=""
    //                     />
    //                   </div>
    //                 ))}
    //               </div>
    //               <div>
    //                 {Object.entries(item.desc[0]).map(([key, value]) => (
    //                   <li className="text-left" key={key}>
    //                     {value}
    //                   </li>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default WorkExperience;

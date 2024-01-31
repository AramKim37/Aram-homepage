"use client";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceCard } from "@/data/data.js";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div
      id="experience"
      className="w-max-full flex flex-col justify-center items-center mx-auto p-10 min-h-screen"
    >
      <h1 className="pb-20 uppercase text-center tracking-[20px] font-extrabold text-gray-500 text-2xl 2xl:text-4xl">
        experience
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-20">
        {experienceCard.map((card) => (
          <div key={card.id} className="w-full h-full">
            <div className="flex flex-col mx-auto items-center justify-evenly w-[300px] h-auto md:w-[400px] md:h-[400px] bg-[#212121] text-gray-500 rounded-xl card ">
              <motion.img
                initial={{ opacity: 0, y: -300 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={card.image}
                width={150}
                height={150}
                alt="exp_image"
                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-5 rounded-xl object-cover object-center"
              />
              <motion.div
                initial={{ opacity: 0, x: -300 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-5"
              >
                <h3 className="text-center text-[12px] md:text-2xl">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center gap-5">
                  {Object.entries(card.icons[0]).map(([key, value]) => (
                    <Image
                      key={key}
                      src={value}
                      alt="icons"
                      width={12}
                      height={12}
                      className="md:w-[24px] md:h-[24px]"
                    />
                  ))}
                </div>
                <div className="w-full flex flex-col md:justify-start">
                  {Object.entries(card.desc[0]).map(([key, value]) => (
                    <li className="text-[12px] md:text-[20px]" key={key}>
                      {value}
                    </li>
                  ))}
                </div>
              </motion.div>
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

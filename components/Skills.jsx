"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/react";

const Skills = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jinseok Lee",
      test: "Aram has good potential for leadership, I have seen several times that he leads the team as a good leader. Also, he is not a person who easily giving up finding solutions, he has always tried to figure solutions out even if the problem is quite complex.",
    },
    {
      id: 2,
      name: "Seolhi Kim",
      test: "I always amazed by Aram’s willingness to take on challenges and his handling ability on the challenges. He is very good at taking constructive criticism and is always open to feedback on his work. Aram has excellent time management skills and he is an amazing team player.",
    },
    {
      id: 3,
      name: "Sean Kim",
      test: "Aram is super hard-working person, but at the same time very sincere and fun-loving person. He has the grit to tackle difficult challenges until it is solved. Also, he is a great team player with great communication skills. He is a responsible person who finishes his part on time and provide tips and feedback to team members. I was certain that he always tries his best to help the team. It is notable that he also has great organization skills as he provided project plan documentation. I hope I have the chance to work with him again.",
    },
    {
      id: 4,
      name: "Ray Kim",
      test: "Aram is a person who is always self-motivated and doing his best on his work. During a project at SAIT, he showed me his enthusiasm and patience about coding. Also, he is a pleasant person to be with so I believe that he would be a great teammate in any organizations.",
    },
    {
      id: 5,
      name: "Eunsuk Lee",
      test: "Aram is an impressive team member who always gets the job done. He has had the pleasure of studying with Aram as he has been majoring in software development for the past two years. His greatest strengths are his great UX design skills during the project in the frontend that made this his capstone project shine. As an idea bank, he had no one to follow his flashing ideas, and he was the team's mood maker with a great sense of humour. As a good team player, I would recommend Aram to anyone looking for a reliable software developer without hesitation!",
    },
    {
      id: 6,
      name: "Sungdo Lee",
      test: "I believe he is a great team player since he has a well-organized and self-motivated mind. He also has a great professional skills such as coding, operating system and database.",
    },
  ];
  return (
    <section id="testimonials" className="">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl text-gray-500 uppercase">Testimonials</h2>
        <h5 className="pb-10 text-xl text-gray-500">Feedback from my peers</h5>
      </div>
      <Swiper
        className="w-[300px] h-[500px] md:w-[800px] md:h-[300px]"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide
            className="bg-[#212121] text-center p-10 rounded-xl"
            key={test.id}
          >
            <div className="flex items-center gap-10 pb-10 justify-center text-gray-500">
              <h5 className="text-[#5aa5e6] text-xl">{test.name}</h5>
            </div>
            <div className="text-white flex flex-col items-center">
              <p className="">{test.test}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skills;

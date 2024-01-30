"use client";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Hamburger from "@/public/image/hamburger.svg";
import { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isClicked = () => {
    setIsOpen(!isOpen);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:aramkim37@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}. From : ${data.email}`;
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center mx-auto relative">
      <div className=" absolute top-0 right-0 p-5 flex items-center justify-center">
        <div className="flex flex-col items-end justify-center">
          <button
            onClick={isClicked}
            className="px-4 py-1 my-3 text-gray-500 rounded-sm uppercase  font-bold  hover:font-bold"
          >
            <Image src={Hamburger} width={32} height={32} alt="menu" />
          </button>
          <SideBar isOpen={isOpen} isClicked={isClicked} />
        </div>
      </div>
      <h1 className="text-2xl 2xl:text-4xl font-extrabold text-center text-gray-500 tracking-[20px] uppercase">
        contact
      </h1>
      <p className="mt-4 text-xl text-gray-500 text-center">Let`s talk</p>

      <form
        className="flex flex-col gap-1 w-fit mx-auto md:px-10 md:py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-1 md:flex-row ">
          <input
            {...register("name")}
            className="contactInput"
            type="text"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="contactInput"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contactInput"
            type="text"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#e7eaf6]/40 py-6 mb-12 px-10 rounded-md text-[#38598b] font-bold text-[12px] heroButton animate-pulse md:py-5 md:text-xl md:mb-0"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

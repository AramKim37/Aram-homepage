"use client";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

const Contact = () => {
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
    <div
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center mx-auto"
    >
      <h1 className="text-2xl md:text-3xl font-extrabold text-center text-gray-500 uppercase">
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

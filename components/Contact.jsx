"use client";
import { useForm } from "react-hook-form";

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
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-center gap-5 mx-auto items-center md:gap-10">
      <div className="text-center">
        <h4 className="text-m pt-10 text-gray-500/70 uppercase md:text-xl">
          Let`s talk
        </h4>
      </div>
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
            className="bg-[#e7eaf6]/40 py-2 mb-12 px-10 rounded-md text-[#38598b] font-bold text-[12px] heroButton animate-pulse md:py-5 md:text-xl md:mb-0"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

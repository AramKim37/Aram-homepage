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
    console.log(data);
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        contact
      </h3>
      <div className="text-center space-y-3">
        <h4 className="text-3xl text-gray-500">Let`s talk</h4>
      </div>
      <form
        className="flex flex-col space-y-2 w-fit mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex space-x-2 ">
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
          className="bg-[#e7eaf6]/40 py-5 px-10 rounded-md text-[#38598b] font-bold text-lg heroButton animate-pulse"
        >
          Submit
        </button>
        <div className="w-full relative">
          <div className="border-t absolute w-20 border-[#38598b] flex items-center justify-center line" />
        </div>
      </form>
    </div>
  );
};

export default Contact;

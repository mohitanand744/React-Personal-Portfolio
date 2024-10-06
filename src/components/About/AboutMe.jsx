import React from "react";
import Button from "../common/Buttons/Button";

const AboutMe = () => {
  return (
    <div className="about grid gap-16 grid-cols-1 lg:grid-cols-12 lg:mt-72">
      <div className="col-span-5 p-2">
        <div className="flex lg:justify-center items-center">
          <img
            className="profileImageContainer text-center w-[25rem] md:w-[30rem] md:h-[40rem] lg:w-[40rem] lg:h-[50rem] rounded-[4rem] object-cover"
            src="/p2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-7 ">
        <h1 className="highLight-text text-[3rem] lg:text-[4rem]">About me</h1>
        <div className="flex justify-between gap-4 flex-wrap w-[90%] mt-10 text-white">
          <div className="flex flex-col gap-2 text-2xl lg:text-3xl">
            <p className="font-bold">
              Name: <span className="font-normal">Mohit Anand</span>
            </p>{" "}
            <p className="font-bold">
              Email:{" "}
              <span className="font-normal">anandmohit744@gmail.com</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-2xl lg:text-3xl">
            <p className="font-bold">
              Role: <span className="font-normal">Frontend Developer</span>
            </p>{" "}
            <p className="font-bold">
              Freelance: <span className="font-normal">Available</span>
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-16  text-2xl lg:text-3xl text-white lg:pr-28">
          <p>
            A dedicated Frontend Developer with hands-on experience in building
            scalable web applications using React.js, Bootstrap, and Tailwind
            CSS. Currently interning at WeboConnect, I focus on enhancing user
            experiences and improving performance through dynamic interfaces and
            API integration. Transitioning into programming after overcoming a
            spinal cord injury, I bring resilience, adaptability, and a passion
            for creating impactful web solutions. I am continually expanding my
            skills, currently learning backend technologies to further enrich my
            projects.
          </p>
        </div>
        <div className="mt-10 lg:mt-20">
          <Button text={"Resume"} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
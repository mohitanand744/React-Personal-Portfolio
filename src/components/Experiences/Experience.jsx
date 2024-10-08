import React from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import useContextData from "../../Hook/useContextData";

const Experience = () => {
  const { experience } = useContextData();

  return (
    <div id="Experience" className="px-4 mb-72">
      <center className="my-10 mx-auto w-[96%] lg:w-[44%]" data-aos="zoom-in">
        <SectionHeading text={"Experience"} />
        <p className="text-white text-xl lg:text-2xl">
          Experienced in building responsive web apps with React, Bootstrap, and
          Tailwind. Expanding into backend with Node.js and MongoDB to grow as a
          full-stack developer.
        </p>
      </center>

      <div className="scrollButtons block md:hidden relative h-[4rem]">
        <img
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4"
          src="/rightArrow.png"
          alt=""
        />
        <img
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg]"
          src="/rightArrow.png"
          alt=""
        />
      </div>

      <div
        data-aos="zoom-in"
        className="timeline p-3 hide-ScrollBar mx-auto lg:w-[70%] my-6 flex md:flex-col gap-10 overflow-x-auto"
      >
        {experience.map((experience, i) => (
          <div
            data-aos="zoom-in"
            key={i}
            className="experienceBox custom-shadow p-7 sm:p-10 mx-auto text-white w-[100%] md:w-[90%] backdrop-blur-sm bg-black/40 rounded-3xl flex-none"
          >
            <div className="flex gap-4 mb-5 w-full">
              <img
                className="w-[3rem] h-[3rem] my-auto lg:w-[4rem] object-cover"
                src={experience.logo}
                alt=""
              />
              <div className="w-full">
                <h1 className="text-2xl lg:text-4xl">{experience.company} </h1>
                <p className="text-lg sm:text-xl">
                  {experience.start_date} - {experience.end_date}
                </p>
              </div>
              <div className="w-full">
                <p className="float-end text-lg sm:text-xl lg:text-2xl">
                  Role: {experience.position}
                </p>
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

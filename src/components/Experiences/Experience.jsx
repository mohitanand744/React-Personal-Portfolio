import React, { useRef } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import useContextData from "../../Hook/useContextData";

const Experience = () => {
  const { experience, skills } = useContextData();
  const scrollContainers = useRef([]);
  const scrollExperienceContainers = useRef();

  const scroll = (index, direction) => {
    const scrollAmount = 150;
    const container = scrollContainers.current[index]; // Get the correct container

    container?.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollExperienceBox = (direction) => {
    const container = scrollExperienceContainers.current;
    const { offsetWidth } = container;

    const scrollAmount = offsetWidth;

    container?.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const skillsUsed = skills.filter((skill) => skill.category === "frontend");

  return (
    <div id="Experience" className="sm:px-4 mt-36 md:my-44">
      <center className="my-10 mx-auto w-[96%] lg:w-[44%]" data-aos="zoom-in">
        <SectionHeading text={"Experience"} />
        <p className="text-xl text-white lg:text-2xl">
          Experienced in building responsive web apps with React, Bootstrap, and
          Tailwind. Expanding into backend with Node.js and MongoDB to grow as a
          full-stack developer.
        </p>
      </center>

      <div className="scrollButtons relative md:hidden h-[3rem]">
        <img
          loading="lazy"
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4 cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Right"
          onClick={() => scrollExperienceBox("right")}
        />
        <img
          loading="lazy"
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg] cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Left"
          onClick={() => scrollExperienceBox("left")}
        />
      </div>

      <div
        data-aos="zoom-in"
        ref={scrollExperienceContainers}
        className="timeline p-[1rem] hide-ScrollBar mx-auto md:w-[60rem] lg:w-[90rem] my-6 flex md:flex-col gap-10 overflow-x-scroll overflow-y-hidden"
      >
        {experience.map((experienceItem, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="experienceBox custom-shadow p-7 sm:p-10 mx-auto text-white w-[100%] md:w-[90.4%] backdrop-blur-sm bg-black/40 rounded-3xl flex-none"
          >
            <div className="flex flex-wrap w-full gap-4 mb-5 sm:flex-nowrap">
              <img
                loading="lazy"
                className={`${
                  experienceItem.company === "WeboConnect" ? "" : "w-[3.9rem]"
                } h-[4rem] sm:h-[3rem] lg:h-[4rem] my-auto lg:w-[6rem] object-cover`}
                src={experienceItem.logo}
                alt={experienceItem.company}
              />
              <div className="w-full">
                <h1 className="flex flex-wrap items-center text-3xl lg:text-4xl sm:gap-3">
                  {experienceItem.company}{" "}
                  <span className="text-2xl ">[ {experienceItem.type} ]</span>
                </h1>
                <p className={`text-lg sm:text-2xl`}>
                  {experienceItem.start_date} -{" "}
                  <span
                    className={`${
                      experienceItem.end_date === "Working..." &&
                      "text-green-500"
                    }`}
                  >
                    {experienceItem.end_date}
                  </span>
                </p>
              </div>
              <div className="w-full">
                <p className="text-lg sm:float-end sm:text-xl lg:text-2xl">
                  Role: {experienceItem.position}
                </p>
              </div>
            </div>
            <p className="text-xl lg:text-2xl">{experienceItem.description}</p>
            <div className="relative flex items-center w-full mt-6 mb-3">
              <h3 className="text-2xl md:text-3xl">Skills Used</h3>
              <div className="scrollButtons h-[4rem]">
                <img
                  loading="lazy"
                  className="w-[3.6rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4 cursor-pointer"
                  src="/rightArrow.png"
                  alt="Scroll Right"
                  onClick={() => scroll(index, "right")}
                />
                <img
                  loading="lazy"
                  className="w-[3.6rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg] cursor-pointer"
                  src="/rightArrow.png"
                  alt="Scroll Left"
                  onClick={() => scroll(index, "left")}
                />
              </div>
            </div>
            <div
              ref={(el) => (scrollContainers.current[index] = el)}
              className="flex w-full gap-8 overflow-x-scroll hide-ScrollBar"
            >
              {skillsUsed.map((skill, i) => (
                <button
                  key={i}
                  className="border-b-2 h-14 md:h-20 px-6 md:px-10 active:scale-[0.88] transition-all duration-300 text-xl md:text-2xl ease rounded-3xl border-slate-600 custom-shadow2"
                >
                  {skill.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

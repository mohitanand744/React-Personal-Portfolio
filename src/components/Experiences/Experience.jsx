import React, { lazy, Suspense, useRef } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import useContextData from "../../Hook/useContextData";
const ExperienceCard = lazy(() => import("./../Cards/ExperienceCard"));

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
          <Suspense
            key={index}
            fallback={<span className="loading loading-ring loading-lg"></span>}
          >
            <ExperienceCard
              index={index}
              experienceItem={experienceItem}
              scrollContainers={scrollContainers}
              scroll={scroll}
              skillsUsed={skillsUsed}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Experience;

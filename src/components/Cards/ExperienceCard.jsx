import React from "react";
import ExperienceAccordion from "../Accordion/ExperienceAccordion";
import SkillsSlider from "../slider/skillsSlider";

const ExperienceCard = ({
  experienceItem,
  index,
  scrollContainers,
  scroll,
  skillsUsed,
}) => {
  return (
    <div
      data-aos="zoom-in"
      className="flex-none w-full h-fit text-white experienceBox custom-shadow p-7 sm:p-10 backdrop-blur-sm backdrop-saturate-150 rounded-[4rem]"
    >
      {/* Top Section */}
      <div className="flex flex-wrap justify-between gap-4 mb-2">
        <div className="flex flex-wrap gap-4 mb-5 sm:flex-nowrap">
          <img
            loading="lazy"
            className={`rounded-full w-[4.6rem] custom-shadow  h-[4.5rem] border border-gray-400 my-auto object-cover`}
            src={experienceItem.logo}
            alt={experienceItem.company}
          />

          <div className="">
            <h1 className="flex flex-wrap items-center text-3xl lg:text-4xl sm:gap-3">
              <span className="me-2 md:me-0">{experienceItem.company}</span>{" "}
              <a
                target="_blank"
                className="ml-4"
                href={experienceItem.companyLinkedin}
              >
                <img
                  className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[4rem] md:w-[3.4rem]"
                  src="/linkedin.png"
                  alt="icon"
                />
              </a>
            </h1>

            {/* Company Location */}
            <p className="text-lg sm:text-2xl">
              Location:{" "}
              <span className="highLight-text">
                {experienceItem.companyLocation}
              </span>
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col gap-1 text-lg flex-nowrap sm:text-xl lg:text-2xl">
            <p className="text-nowrap">
              {" "}
              Role:{" "}
              <span className="highLight-text">{experienceItem.role}</span>
            </p>
            <p className="text-nowrap">
              {" "}
              Working Mode:{" "}
              <span className="highLight-text">{experienceItem.location}</span>
            </p>
            <p className="text-nowrap">
              {" "}
              Duration:{" "}
              <span className="highLight-text">{experienceItem.duration}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Roles Loop Section */}
      <div className="flex flex-col gap-8">
        <ExperienceAccordion experienceItem={experienceItem} />
      </div>

      <SkillsSlider
        scrollContainers={scrollContainers}
        index={index}
        scroll={scroll}
        skillsUsed={skillsUsed}
      />
    </div>
  );
};

export default ExperienceCard;

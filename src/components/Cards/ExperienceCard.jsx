import React from "react";

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
      className="experienceBox custom-shadow p-7 sm:p-10 mx-auto text-white w-[100%] md:w-[90.4%] backdrop-blur-sm bg-black/40 rounded-3xl flex-none"
    >
      <div className="flex flex-wrap w-full gap-4 mb-5 sm:flex-nowrap">
        <img
          loading="lazy"
          className={`${
            experienceItem.company === "WeboConnect"
              ? "rounded-full w-[4.6rem] h-[4.5rem] border-2 border-gray-400"
              : "w-[3.9rem] h-[4rem] sm:h-[3rem] lg:h-[4rem]  lg:w-[6rem]"
          }  my-auto object-cover`}
          src={experienceItem.logo}
          alt={experienceItem.company}
        />
        <div className="w-full">
          <h1 className="flex flex-wrap items-center text-3xl lg:text-4xl sm:gap-3">
            <span className="me-2 md:me-0"> {experienceItem.company}</span>{" "}
            <span className="text-2xl ">
              {" "}
              <span className="highLight-text">[</span> {experienceItem.type}{" "}
              <span className="highLight-text">]</span>
            </span>
            <a
              target="_blank"
              className="ml-4"
              href={experienceItem.companyLinkdin}
            >
              <img
                className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[4rem] md:w-[3.4rem]"
                src="/linkedin.png"
                alt="icon"
              />
            </a>
          </h1>
          <p className={`text-lg sm:text-2xl`}>
            {experienceItem.start_date} -{" "}
            <span
              className={`${
                experienceItem.end_date === "Working..." && "text-green-500"
              }`}
            >
              {experienceItem.end_date}
            </span>
          </p>
        </div>
        <div className="w-full">
          <p className="flex flex-col gap-1 text-lg sm:float-end sm:text-xl lg:text-2xl">
            <span>
              {" "}
              Role:{" "}
              <span className="highLight-text">{experienceItem.position}</span>
            </span>
            <span>
              {" "}
              Location:{" "}
              <span className="highLight-text">{experienceItem.location}</span>
            </span>
          </p>
        </div>
      </div>
      <p className="text-xl lg:text-2xl">{experienceItem.description}</p>
      <div className="relative flex items-center w-full mt-6 mb-3">
        <h3 className="text-2xl md:text-3xl">Skills Used:</h3>
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
            className="border-b-2 whitespace-nowrap  py-3 px-5 active:scale-[0.88] transition-all duration-300 text-xl  ease rounded-3xl border-slate-600 custom-shadow2"
          >
            {skill.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;

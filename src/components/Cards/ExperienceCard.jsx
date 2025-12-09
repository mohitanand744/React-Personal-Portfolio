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
        {experienceItem.roles.map((role, rIndex) => (
          <div key={rIndex} className="p-5 border-b-[1px] rounded-2xl">
            <h2 className="mb-1 text-2xl lg:text-3xl">
              <span className="highLight-text">{role.position}</span>{" "}
              <span className="text-xl"> [{role.type}]</span>
            </h2>

            <p className="text-lg sm:text-xl">
              {role.start_date} -{" "}
              <span
                className={`${
                  role.end_date === "Working..." && "text-green-500"
                }`}
              >
                {role.end_date}
              </span>
            </p>

            <p className="text-lg sm:text-xl">
              Duration: <span className="highLight-text">{role.duration}</span>
            </p>

            <p className="mt-3 text-xl lg:text-2xl">{role.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
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
            className="border-b-2 whitespace-nowrap py-3 px-5 active:scale-[0.88] transition-all duration-300 text-xl ease rounded-3xl border-slate-600 custom-shadow2"
          >
            {skill.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;

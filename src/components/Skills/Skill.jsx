import React, { useState } from "react";
import useContextData from "../../Hook/useContextData";
import SectionHeading from "../common/Heading/SectionHeading";

const Skill = () => {
  const [showSkills, setShowSkills] = useState("all");
  const { skills } = useContextData();

  const filterSkillsCategory = skills.filter(
    (skill) => showSkills === "all" || skill.category === showSkills
  );

  return (
    <div
      id="Skills"
      data-aos="zoom-in"
      className="px-3 mt-32 skills h-fit md:my-44 lg:px-10"
    >
      <center className="my-10 mx-auto w-[96%] lg:w-[40%] mb-14">
        <SectionHeading text={"Skills"} />
        <p className="text-xl text-white lg:text-2xl ">
          Expertise in multiple frameworks and a passion for continuous
          learning, seeking to expand my skills as a full-stack developer.
        </p>
      </center>

      {/* FILTER BUTTONS */}
      <div
        data-aos="zoom-in"
        className="flex w-full justify-center items-center flex-wrap text-white text-[1.3rem] md:text-3xl gap-4 md:gap-16"
      >
        <button
          data-aos="flip-left"
          onClick={() => setShowSkills("all")}
          className={`${
            showSkills === "all" ? " highLight-text" : ""
          } border-b-2 h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          All
        </button>

        <button
          data-aos="flip-right"
          onClick={() => setShowSkills("frontend")}
          className={`${
            showSkills === "frontend" ? " highLight-text" : ""
          } border-b-2 h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Frontend
        </button>

        <button
          data-aos="flip-left"
          onClick={() => setShowSkills("backend")}
          className={`${
            showSkills === "backend" ? " highLight-text " : ""
          } border-b-2 h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Backend
        </button>

        {/* ✅ NEW TOOLS BUTTON */}
        <button
          data-aos="flip-right"
          onClick={() => setShowSkills("tools")}
          className={`${
            showSkills === "tools" ? " highLight-text " : ""
          } border-b-2 h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Others
        </button>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 gap-4 mx-auto my-16 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
        {filterSkillsCategory.map((skill) => (
          <div
            key={skill.title}
            data-aos="zoom-in"
            className="flex flex-col px-3 text-center justify-center items-center bg-[#00000081] py-5 rounded-3xl text-xl md:text-2xl font-bold custom-shadow"
          >
            {/* IMAGE WRAPPER */}
            <div className="w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem] flex items-center justify-center">
              <img
                loading="lazy"
                className="object-contain max-w-full max-h-full"
                src={skill.image}
                alt={skill.title}
              />
            </div>

            <p className="mt-3 text-lg text-white sm:text-xl">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

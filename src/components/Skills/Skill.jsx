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
      className="skills h-fit  my-44 px-3 lg:px-10"
    >
      <center className="my-10 mx-auto w-[96%] lg:w-[40%] mb-14">
        <SectionHeading text={"Skills"} />
        <p className="text-white text-xl lg:text-2xl ">
          Expertise in multiple frameworks and a passion for continuous
          learning, seeking to expand my skills as a full-stack developer.
        </p>
      </center>

      <div
        data-aos="zoom-in"
        className="flex justify-center items-center flex-wrap text-white text-[1.6rem] md:text-4xl gap-8 md:gap-16"
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
      </div>

      <div className="w-[97%] md:w-[78%] lg:w-[60%] mx-auto flex rounded-3xl my-16 gap-14 justify-center flex-wrap  items-center">
        {filterSkillsCategory.map((skill, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            className="flex flex-col gap-3 justify-center items-center text-xl md:text-2xl font-bold"
          >
            <img src={skill.image} alt="" />
            <p className="text-white">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

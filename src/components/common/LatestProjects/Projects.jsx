import React, { useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import useContextData from "../../../Hook/useContextData";
import Button from "../Buttons/Button";

const Projects = () => {
  const { projects } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const readMoreFun = (i) => {
    setIsExpanded(i);
    setReadMore((readMore) => !readMore);
  };

  const latestProjects = projects.filter(
    (project) => project.projectTime === "Latest"
  );

  const shortenDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Add ellipsis after truncating
    }
    return description;
  };

  return (
    <div id="Projects" className="projects mb-96">
      <center className="my-10 mx-auto w-[96%] lg:w-[44%]" data-aos="zoom-in">
        <SectionHeading text={"Latest Work"} />
        <p className="text-white text-xl lg:text-2xl flex items-center justify-center gap-5">
          Source Code
          <img className=" w-[2rem] movingRight" src="/download.png" />
          <a
            href="https://github.com/mohitanand744"
            className="activeName flex items-center gap-2"
            target="_blank"
          >
            GitHub
            <img src="/github.png" className="w-[3.6rem]" alt="github" />
          </a>
        </p>
      </center>

      <div className="scrollButtons w-[90%] relative lg:hidden h-[0.3rem]">
        <img
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4 cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Right"
        />
        <img
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg] cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Left"
        />
      </div>

      <div className="latestWork w-[78%] mx-auto lg:justify-center my-24 hide-ScrollBar flex overflow-x-scroll  lg:flex-wrap  gap-8">
        {latestProjects.map((project, i) => (
          <div
            key={i}
            className="projectBox rounded-3xl flex flex-col justify-between gap-4 py-8 p-6 custom-shadow  md:w-[35rem] h-[44rem]"
          >
            <div className="imgContainer   w-[97%] h-[15rem] md:h-[20rem] mx-auto">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={project.image}
                alt=""
              />
            </div>

            <div className="text-white  w-[95%] mx-auto mt-4">
              <h2 className="text-4xl mb-3 highLight-text">{project.title}</h2>
              <p className="text-2xl">
                {isExpanded === i && readMore
                  ? project.description
                  : shortenDescription(project.description, 50)}
                <span
                  className="cursor-pointer highLight-text"
                  onClick={() => {
                    readMoreFun(i);
                  }}
                >
                  {isExpanded === i && readMore ? "read less" : "read more"}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-5 px-3">
              <h2 className="text-white text-2xl">Skills Used :</h2>
              <div className=" flex items-center flex-wrap gap-6">
                <p className="text-center text-white  text-xl lg:text-2xl">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="me-3">
                      {skill},
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex gap-5 justify-evenly text-white">
              <button
                className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
              >
                <a href=""> Live Demo</a>
              </button>
              <button
                className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
              >
                <a href="">GitHub</a>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => alert("Working on it...")}
        className=" flex justify-center w-[100%] md:w-[55%] mx-auto"
      >
        <Button text={"All Projects"} />
      </div>
    </div>
  );
};

export default Projects;

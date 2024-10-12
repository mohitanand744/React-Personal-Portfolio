import React, { useRef, useState } from "react";
import SectionHeading from "../Heading/SectionHeading";
import useContextData from "../../../Hook/useContextData";
import Button from "../Buttons/Button";

const Projects = () => {
  const { projects } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [filterProjects, setFilterProject] = useState("Frontend");
  const scrollContainer = useRef();

  const readMoreFun = (i) => {
    setIsExpanded(i);
    if (i === isExpanded) {
      setReadMore((readMore) => !readMore);
    }
  };

  const latestProjects = projects.filter(
    (project) =>
      project.projectTime === "Latest" && project.category === filterProjects
  );

  const shortenDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Add ellipsis after truncating
    }
    return description;
  };

  const scrollContainerFun = (direction) => {
    const container = scrollContainer.current;

    const { offsetWidth } = container;

    container.scrollBy({
      left: direction === "right" ? offsetWidth : -offsetWidth,
      behavior: "smooth",
    });
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

      <div
        data-aos="zoom-in"
        className="flex justify-center items-center flex-wrap text-white text-[1.6rem] md:text-3xl gap-8 md:gap-16"
      >
        <button
          onClick={() => setFilterProject("Frontend")}
          data-aos="flip-right"
          className={`border-b-2 h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Frontend
        </button>
        <button
          onClick={() => setFilterProject("Full Stack")}
          data-aos="flip-left"
          className={`border-b-2 h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Full Stack
        </button>
      </div>

      <div className="scrollButtons w-[90%] relative lg:hidden my-6">
        <img
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4 cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Right"
          onClick={() => scrollContainerFun("right")}
        />
        <img
          className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg] cursor-pointer"
          src="/rightArrow.png"
          alt="Scroll Left"
          onClick={() => scrollContainerFun("left")}
        />
      </div>

      <div
        ref={scrollContainer}
        className="latestWork w-[78%]  mx-auto lg:justify-center my-28 hide-ScrollBar flex overflow-x-scroll  lg:flex-wrap  gap-8"
      >
        {latestProjects.map((project, i) => (
          <div
            key={i}
            className="projectBox rounded-3xl flex flex-col justify-between gap-6 py-8 p-6 custom-shadow w-[35rem] h-fit"
          >
            <div className="imgContainer   w-[97%] h-[15rem] md:h-[20rem] mx-auto">
              <img
                className="w-full h-full rounded-3xl object-cover"
                src={project.image}
                alt=""
              />
            </div>

            <div className="text-white  w-[95%] mx-auto">
              <h2 className="text-4xl highLight-text">{project.title}</h2>
              <p className="text-xl sm:text-2xl">
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
            <div className="flex flex-wrap gap-2 px-3">
              <h2 className="text-white text-xl sm:text-2xl">Skills Used :</h2>
              <div className=" flex items-center flex-wrap">
                <p className="text-center text-white  text-xl lg:text-2xl">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="me-3">
                      {skill},
                    </span>
                  ))}
                </p>
              </div>
            </div>
            {project.github_url && (
              <div className="flex gap-5 justify-evenly text-white">
                <>
                  <a href={project.live_url} target="_blank">
                    <button
                      className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
                    >
                      {" "}
                      Live Demo
                    </button>
                  </a>
                  <a href={project.github_url} target="_blank">
                    <button
                      className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
                    >
                      GitHub
                    </button>
                  </a>
                </>
              </div>
            )}
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

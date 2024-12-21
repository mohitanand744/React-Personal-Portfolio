import React, { useRef, useState } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import useContextData from "../../Hook/useContextData";
import Button from "../common/Buttons/Button";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";

const Projects = () => {
  const { projects } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [filterProjects, setFilterProject] = useState("Frontend");
  const scrollContainer = useRef();

  const readMoreFun = (i) => {
    if (i === isExpanded) {
      // If the same project is clicked again, just toggle readMore
      setReadMore((prevReadMore) => !prevReadMore);
    } else {
      // If a different project is clicked, expand it and set readMore to true
      setIsExpanded(i);
      setReadMore(true);
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
      left: direction === "right" ? 320 : -320,
      behavior: "smooth",
    });
  };

  return (
    <div id="Projects" className="mb-32 projects h-fit">
      <center className="my-10 mx-auto w-[96%] lg:w-[44%]" data-aos="zoom-in">
        <SectionHeading text={"Latest Work"} />
        <p className="flex items-center justify-center gap-5 text-xl text-white lg:text-2xl">
          Source Code
          <img
            loading="lazy"
            className=" w-[1rem] h-[2rem] movingRight"
            src="/download.png"
          />
          <a
            href="https://github.com/mohitanand744"
            className="flex items-center gap-2 activeName"
            target="_blank"
          >
            GitHub
            <img
              loading="lazy"
              src="/github.png"
              className="w-[3.6rem]"
              alt="github"
            />
          </a>
        </p>
      </center>

      <div
        data-aos="zoom-in"
        className="flex justify-center items-center flex-wrap text-white text-[1.6rem] md:text-3xl gap-7 md:gap-10"
      >
        <button
          onClick={() => setFilterProject("Frontend")}
          className={`border-b-2 ${
            filterProjects === "Frontend" && "highLight-text"
          } h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Frontend
        </button>
        <button
          onClick={() => setFilterProject("Full Stack")}
          className={`border-b-2 ${
            filterProjects === "Full Stack" && "highLight-text"
          } h-16 w-[10rem] md:w-[13rem] active:scale-[0.88] transition-all duration-300 ease rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Full Stack
        </button>
      </div>

      <div
        data-aos="flip-left"
        className="scrollButtons w-[95%] relative lg:hidden my-6"
      >
        {latestProjects.length <= 1 ? (
          ""
        ) : (
          <>
            <img
              loading="lazy"
              className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-4 cursor-pointer"
              src="/rightArrow.png"
              alt="Scroll Right"
              onClick={() => scrollContainerFun("right")}
            />
            <img
              loading="lazy"
              className="w-[4rem] absolute active:scale-90 transition-all duration-200 ease-linear right-20 rotate-[180deg] cursor-pointer"
              src="/rightArrow.png"
              alt="Scroll Left"
              onClick={() => scrollContainerFun("left")}
            />
          </>
        )}
      </div>
      <div
        ref={scrollContainer}
        className={`latestWork w-[32rem] md:w-[80%]  mx-auto ${
          latestProjects.length <= 1 && "justify-center"
        } lg:justify-center my-28 hide-ScrollBar flex overflow-x-scroll overflow-y-hidden  lg:flex-wrap  gap-8`}
      >
        {latestProjects.map((project, i) => (
          <Card
            key={i}
            image={project.image}
            title={project.title}
            description={project.description}
            index={i}
            isExpanded={isExpanded}
            readMore={readMore}
            readMoreFun={readMoreFun}
            skills={project.skills}
            github_url={project.github_url}
            live_url={project.live_url}
            shortenDescription={shortenDescription}
          />
        ))}
      </div>
      <div className="flex justify-center md:w-[53%] mx-auto">
        <Button url={"/projects"} text={"All Projects"} />
      </div>
    </div>
  );
};

export default Projects;

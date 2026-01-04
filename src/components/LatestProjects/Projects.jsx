import React, { lazy, Suspense, useRef, useState } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import useContextData from "../../Hook/useContextData";
import Button from "../common/Buttons/Button";
import { Link } from "react-router-dom";
const Card = lazy(() => import("../Cards/Card"));

const Projects = () => {
  const { projects } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);
  const [filterType, setFilterType] = useState("initial");
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
  const filteredProjects = projects.filter((project) => {
    if (filterType === "initial") {
      return project.level === "Intermediate";
    } else if (filterType === "production") {
      return project.level === "Hard";
    }
    return true;
  });

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
        <p className="text-xl text-white lg:text-2xl">
          Here's a showcase of my coding journey, from initial learning stages
          to production-ready applications. Each project represents a milestone
          in my growth as a developer.
        </p>
      </center>

      {/* Filter Buttons */}
      <div data-aos="zoom-in" className="grid w-full grid-cols-2 gap-8 mb-24">
        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => setFilterType("initial")}
            className={`relative group p-4 w-full active:scale-[0.95] border-b-2 border-t  transition-all duration-300 ease rounded-2xl ${
              filterType === "initial" ? "custom-shadow3" : ""
            }`}
          >
            <span
              className={`text-2xl md:text-3xl font-bold ${
                filterType === "initial" ? "highLight-text" : "text-white"
              }`}
            >
              Learning Journey Projects
            </span>
          </button>
          <div className="mt-3 text-lg text-center text-gray-300 md:text-2xl">
            Created during initial learning phase
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <button
            onClick={() => setFilterType("production")}
            className={`relative group p-4 w-full active:scale-[0.95] border-b-2 border-t  transition-all duration-300 ease rounded-2xl ${
              filterType === "production" ? "custom-shadow3" : ""
            }`}
          >
            <span
              className={`text-2xl md:text-3xl font-bold ${
                filterType === "production" ? "highLight-text" : "text-white"
              }`}
            >
              Production Ready Projects
            </span>
          </button>
          <div className="mt-3 text-lg text-center text-gray-300 md:text-2xl">
            Building experience with real-world applications
          </div>
        </div>
      </div>

      {/* Section Title based on selection */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {filterType === "initial" ? (
            <>
              <span className="highLight-text">Learning Stage</span> Projects
            </>
          ) : (
            <>
              <span className="highLight-text">Production Level</span> Projects
            </>
          )}
        </h2>
        <p className="max-w-2xl mx-auto mt-3 text-2xl text-gray-300">
          {filterType === "initial"
            ? "Projects I built while learning frontend development. These represent my foundational skills and early experiments."
            : "Advanced projects I'm building while learning backend development. Focused on real world applications and scalability."}
        </p>
      </div>

      <div
        data-aos="flip-left"
        className="scrollButtons w-[98%] relative md:hidden "
      >
        {filteredProjects.length <= 1 ? (
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
      {filteredProjects.length >= 4 ? (
        <>
          <div
            ref={scrollContainer}
            className={`latestWork  mt-20 md:w-[98%]  mx-auto lg:justify-center my-16 hide-ScrollBar flex md:grid grid-cols-12 p-4 overflow-y-hidden  overflow-x-scroll gap-8`}
          >
            {filteredProjects.slice(0, 4).map((project, i) => (
              <Suspense
                className="w-full"
                key={i}
                fallback={
                  <span className="loading loading-ring loading-lg"></span>
                }
              >
                <Card
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
                  docs={project.Docs}
                />
              </Suspense>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="px-4 w-full sm:w-[33rem] mx-auto my-20">
            {filteredProjects.slice(0, 4).map((project, i) => (
              <Suspense
                className="w-full"
                key={i}
                fallback={
                  <span className="loading loading-ring loading-lg"></span>
                }
              >
                <Card
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
                  docs={project.Docs}
                />
              </Suspense>
            ))}
          </div>
        </>
      )}

      <div className="flex justify-center md:w-[53%] mx-auto">
        <Button url={"/projects"} text={"All Projects"} />
      </div>
    </div>
  );
};

export default Projects;

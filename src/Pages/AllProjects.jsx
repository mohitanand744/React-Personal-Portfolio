import React, { useEffect, useState } from "react";
import SectionHeading from "../components/common/Heading/SectionHeading";
import useContextData from "../Hook/useContextData";
import Card from "../components/Cards/Card";
import Pagination from "../components/Paginations/Pagination";
import ProjectsNotFound from "../components/Errors/ProjectsNotFound";
import CursorFollowing from "../components/CurserAnimations/CursorFollowing";
import { Outlet } from "react-router-dom";

const AllProjects = () => {
  const {
    projects,
    userInput,
    pathname,
    handleUserInput,
    setUserInput,
    setToggle,
  } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const userInputWords = userInput.trim().toLowerCase().split(/\s+/); // Array Of Words..

  // Pagination States

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(
    window.innerWidth < 848 ? 4 : 8
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setProjectsPerPage(window.innerWidth < 848 ? 4 : 8);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [userInput]);

  const filterProject = projects.filter((project) => {
    return userInputWords.every(
      (word) =>
        project.title.toLowerCase().includes(word) ||
        project.description.toLowerCase().includes(word) ||
        project.category.toLowerCase().includes(word) ||
        project.skills.some((skill) => skill.toLowerCase().includes(word))
    );
  });

  const totalPages = Math.ceil(filterProject.length / projectsPerPage);

  // First Approach

  /* const lastIndex = currentPage * projectsPerPage
const firstIndex = lastIndex - projectsPerPage

const sliceProjects = filterProject.slice(firstIndex, lastIndex); */

  // second Approach
  const startIndex = (currentPage - 1) * projectsPerPage;
  const sliceProjects = filterProject.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

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

  const shortenDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Add ellipsis after truncating
    }
    return description;
  };

  return pathname === "/projects" ? (
    <>
      <div
        id="Home"
        className="allProjects min-h-[100vh] px-10"
        onClick={() => setToggle(false)}
      >
        <CursorFollowing />

        <center
          className="flex flex-wrap items-center justify-between gap-10 px-3 mt-32 sm:mt-16 "
          data-aos="zoom-in"
        >
          <div className="mx-auto text-center sm:mx-0 sm:text-start">
            <SectionHeading text={"All Projects"} />

            <div className="gap-3 mb-6 ">
              <p className="flex items-center justify-center gap-5 text-xl text-white lg:text-2xl">
                Source Code
                <img
                  className=" w-[1rem] h-[2rem] movingRight"
                  src="/download.png"
                />
                <a
                  href="https://github.com/mohitanand744"
                  className="flex items-center gap-2 activeName"
                  target="_blank"
                >
                  GitHub
                  <img src="/github.png" className="w-[3.6rem]" alt="github" />
                </a>
              </p>
            </div>
          </div>

          <div className="text-end">
            <div className="relative hidden sm:block">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Search projects (e.g., 'React', 'Clone', 'Html')"
                className="w-[38rem] sm:w-[30rem] md:w-[40rem] text-white backdrop-blur-sm bg-black/60 outline-none border-t-[1px] border-b-[1px] rounded-3xl py-5 px-6 custom-shadow2 md:text-2xl"
              />

              {userInput !== "" ? (
                <img
                  loading="lazy"
                  className="absolute top-5 right-5 w-[1.8rem] cursor-pointer"
                  src="https://img.icons8.com/nolan/64/delete-sign.png"
                  alt="delete-sign"
                  onClick={() => setUserInput("")}
                />
              ) : (
                <img
                  loading="lazy"
                  className="absolute top-5 right-5 w-[1.8rem] cursor-pointer"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-search-food-delivery-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                  alt="search"
                />
              )}
            </div>
            <p className="mt-10 text-[2rem] text-white">
              Total Projects:{" "}
              <span className="font-medium text-green-400">
                {filterProject.length}
              </span>
            </p>
          </div>
        </center>

        <div className="flex flex-wrap justify-center gap-10 mt-8 mb-16">
          {filterProject.length > 0 ? (
            sliceProjects.map((project, i) => (
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
            ))
          ) : (
            <ProjectsNotFound />
          )}
        </div>

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  ) : (
    <Outlet />
  );
};

export default AllProjects;

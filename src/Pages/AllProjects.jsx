import React, { useEffect, useState } from "react";
import SectionHeading from "../components/common/Heading/SectionHeading";
import useContextData from "../Hook/useContextData";
import Card from "../components/Cards/Card";
import Pagination from "../components/Paginations/Pagination";
import ProjectsNotFound from "../components/Errors/ProjectsNotFound";

const AllProjects = () => {
  const { projects, userInput } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const userInputWords = userInput.trim().toLowerCase().split(/\s+/); // Array Of Words..

  // Pagination States

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

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

  return (
    <div className="allProjects min-h-[100vh] px-10">
      <center
        className="mt-32 sm:mt-16 mx-auto w-[96%] lg:w-[44%]"
        data-aos="zoom-in"
      >
        <SectionHeading text={"All Projects"} />

        <div className="flex justify-center flex-wrap items-center my-6 gap-3">
          <p className="text-white text-xl lg:text-2xl flex items-center justify-center gap-5">
            Source Code
            <img
              className=" w-[1rem] h-[2rem] movingRight"
              src="/download.png"
            />
            <a
              href="https://github.com/mohitanand744"
              className="activeName flex items-center gap-2"
              target="_blank"
            >
              GitHub
              <img src="/github.png" className="w-[3.6rem]" alt="github" />
            </a>
          </p>

          <p className="text-2xl  text-white">
            Total Projects: {filterProject.length}
          </p>
        </div>
      </center>

      <div className="flex flex-wrap justify-center gap-10 mt-16">
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
  );
};

export default AllProjects;

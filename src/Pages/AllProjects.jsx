import React, { useState } from "react";
import SectionHeading from "../components/common/Heading/SectionHeading";
import useContextData from "../Hook/useContextData";
import Card from "../components/Cards/Card";

const AllProjects = () => {
  const { projects, userInput } = useContextData();
  const [isExpanded, setIsExpanded] = useState(null);
  const [readMore, setReadMore] = useState(false);

  const filterProject = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(userInput) ||
      project.description.toLowerCase().includes(userInput) ||
      project.category.toLowerCase().includes(userInput) ||
      project.skills.some((skill) => skill.toLowerCase().includes(userInput))
  );

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

        <div className="flex justify-center items-center my-6 gap-3">
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
              <img src="/github.png" className="w-[3.6rem]" alt="github" /> |
            </a>
          </p>

          <p className="text-2xl  text-white">
            Total Projects: {filterProject.length}
          </p>
        </div>
      </center>

      <div className="flex flex-wrap justify-center gap-10 mt-16">
        {filterProject.map((project, i) => (
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
    </div>
  );
};

export default AllProjects;

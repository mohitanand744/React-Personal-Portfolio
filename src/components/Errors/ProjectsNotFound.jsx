import React from "react";

const ProjectsNotFound = () => {
  return (
    <center>
      <div className="">
        <img
          className="w-[18rem] md:w-[25rem]"
          src="/emptySearchResult.webp"
          alt=""
        />
        <h2 className="text-[#4a5366] text-2xl md:text-4xl font-bold">
          Search Result: Not Found!!
        </h2>
      </div>
    </center>
  );
};

export default ProjectsNotFound;

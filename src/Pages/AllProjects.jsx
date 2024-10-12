import React from "react";
import SectionHeading from "../components/common/Heading/SectionHeading";

const AllProjects = () => {
  return (
    <div className="allProjects h-[85vh]">
      <center
        className="my-32 sm:my-16 mx-auto w-[96%] lg:w-[44%]"
        data-aos="zoom-in"
      >
        <SectionHeading text={"All Projects"} />

        <p className="text-white text-xl lg:text-2xl flex items-center justify-center gap-5">
          Source Code
          <img className=" w-[1rem] h-[2rem] movingRight" src="/download.png" />
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
    </div>
  );
};

export default AllProjects;

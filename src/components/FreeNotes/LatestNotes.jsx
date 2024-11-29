import React, { useEffect, useState } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import FilterButtons from "../common/Buttons/FilterButtons";
import useContextData from "../../Hook/useContextData";

const LatestNotes = () => {
  const [active, setActive] = useState("JavaScript");
  const { Notes } = useContextData();

  const filterNotes = Notes.filter((note) =>
    note.title.toLowerCase().includes(active.toLowerCase())
  );

  return (
    <div className="h-fit w-[99%] md:w-[86%] lg:w-[99%] mx-auto ">
      <center
        className="mt-32 sm:mt-16 mx-auto w-[96%] lg:w-[44%]"
        data-aos="zoom-in"
      >
        <SectionHeading text={"In-Depth Dev Notes"} />

        <p className="text-xl text-white lg:text-2xl">
          Offering detailed, in-depth notes on JavaScript, React, Node.js, and
          the MERN stack for students at a small fee. My goal is to provide the
          best learning resources for web development, helping you master each
          topic with clarity and practical insights.
        </p>
      </center>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 md:grid-cols-12 items-center gap-20 justify-center my-24 w-[97%] lg:w-[80%] mx-auto"
      >
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3 ">
          <div
            data-aos="flip-left"
            className="flex flex-wrap items-center justify-center gap-10 overflow-x-scroll text-3xl text-white md:flex-nowrap md:flex-col hide-ScrollBar timestamp"
          >
            <FilterButtons
              customStyling={`w-[15rem] md:w-full lg:w-[17rem]  ${
                active === "JavaScript" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"JavaScript"}
              onClickFun={() => setActive("JavaScript")}
            />
            <FilterButtons
              customStyling={`w-[15rem] md:w-full lg:w-[17rem]  ${
                active === "react" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"React Js"}
              onClickFun={() => setActive("react")}
            />{" "}
            <FilterButtons
              customStyling={`w-[15rem] md:w-full lg:w-[17rem]  ${
                active === "node" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"Node Js"}
              onClickFun={() => setActive("node")}
            />{" "}
            <FilterButtons
              customStyling={`w-[15rem] md:w-full lg:w-[17rem]  ${
                active === "dsa" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"DSA"}
              onClickFun={() => setActive("dsa")}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-9">
          {filterNotes.map((note) => (
            <div
              key={note.id}
              data-aos="zoom-in"
              className="custom-shadow h-[100%] w-full overflow-hidden rounded-[2rem]"
            >
              <div className="flex flex-col items-center justify-between w-full h-full p-10 txt custom-shadow2 backdrop-blur-sm bg-black/30">
                <div className="flex flex-col justify-between gap-3 ">
                  <img
                    className="w-[5.6rem] md:w-[8rem]"
                    src={note.image}
                    alt=""
                  />
                  <h2 className="text-[1.5rem] sm:text-[1.7rem] md:text-4xl leading-[30px] text-white font-semibold highLight-text">
                    {note.title}
                  </h2>
                  <p className="text-lg text-white sm:text-xl md:text-2xl">
                    {note.description}
                  </p>
                  <div className="flex items-center justify-between gap-10 mt-5 ">
                    <div className="flex gap-5">
                      <FilterButtons
                        onClickFun={() => alert("Coming Soon")}
                        customStyling={"w-[9rem] sm:w-[15rem]"}
                        text={"Buy Notes"}
                      />
                      <FilterButtons
                        onClickFun={() => alert("Coming Soon")}
                        customStyling={"w-[9rem] sm:w-[15rem]"}
                        text={"Notes Demo"}
                      />
                    </div>
                    <div className="price me-6">
                      <p className="text-2xl text-white sm:text-3xl highLight-text">
                        ₹ {note.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNotes;

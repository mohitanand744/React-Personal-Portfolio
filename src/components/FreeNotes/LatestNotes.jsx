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

        <p className="text-white text-xl lg:text-2xl">
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
        <div className="col-span-1 md:col-span-3">
          <div
            data-aos="flip-left"
            className="flex flex-wrap md:flex-nowrap md:flex-col gap-10 hide-ScrollBar text-3xl items-center justify-center overflow-x-scroll  text-white timestamp"
          >
            <FilterButtons
              customStyling={`w-[15rem] md:w-[13rem] lg:w-[17rem]  ${
                active === "JavaScript" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"JavaScript"}
              onClickFun={() => setActive("JavaScript")}
            />
            <FilterButtons
              customStyling={`w-[15rem] md:w-[13rem] lg:w-[17rem]  ${
                active === "react" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"React Js"}
              onClickFun={() => setActive("react")}
            />{" "}
            <FilterButtons
              customStyling={`w-[15rem] md:w-[13rem] lg:w-[17rem]  ${
                active === "node" ? "custom-shadow3" : "custom-shadow2"
              }`}
              text={"Node Js"}
              onClickFun={() => setActive("node")}
            />{" "}
            <FilterButtons
              customStyling={`w-[15rem] md:w-[13rem] lg:w-[17rem]  ${
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
              <div className="txt p-10 h-full  w-full flex justify-between flex-col custom-shadow2 items-center  backdrop-blur-sm bg-black/30">
                <div className="flex flex-col gap-3 justify-between ">
                  <img
                    className="w-[5.6rem] md:w-[8rem]"
                    src={note.image}
                    alt=""
                  />
                  <h2 className="text-[1.7rem] md:text-4xl leading-[30px] text-white font-semibold highLight-text">
                    {note.title}
                  </h2>
                  <p className="text-xl md:text-3xl text-white">
                    {note.description}
                  </p>
                  <div className=" flex justify-between items-center gap-10 mt-5">
                    <div className="flex gap-5">
                      <FilterButtons
                        onClickFun={() => alert("Coming Soon")}
                        customStyling={"w-[10rem] sm:w-[15rem]"}
                        text={"Buy Notes"}
                      />
                      <FilterButtons
                        onClickFun={() => alert("Coming Soon")}
                        customStyling={"w-[10rem] sm:w-[15rem]"}
                        text={"Notes Demo"}
                      />
                    </div>
                    <div className="price me-6">
                      <p className="text-3xl text-white highLight-text">
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

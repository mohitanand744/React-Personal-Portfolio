import React from "react";
import SectionHeading from "../common/Heading/SectionHeading";

const LatestNotes = () => {
  return (
    <div className="h-fit">
      <center
        className="mt-32 sm:mt-16 mx-auto w-[96%] lg:w-[44%]"
        data-aos="zoom-in"
      >
        <SectionHeading text={"Latest Notes"} />

        <p className="text-white text-xl lg:text-2xl">
          Offering detailed, in-depth notes on JavaScript, React, Node.js, and
          the MERN stack for students at a small fee. My goal is to provide the
          best learning resources for web development, helping you master each
          topic with clarity and practical insights.
        </p>
      </center>

      {/* <div className="noteCards w-[80%] my-32 mx-auto">
        <div className="notesCard hover:cursor-pointer relative overflow-hidden  w-[39rem] h-[40rem] rounded-[4rem] ">
          <img
            className="h-[100%] w-[100%] object-cover"
            src="/javascript.png"
            alt=""
          />

          <div className="txt p-6 px-10 text-center absolute top-0 w-full flex justify-between flex-col custom-shadow2 items-center bottom-0 backdrop-blur-sm bg-black/30">
            <div className="flex justify-center flex-col gap-3 items-center">
              <img className="w-[8rem] " src="/js.png" alt="" />
              <h2 className="text-4xl leading-[30px] text-white ">
                JavaScript Basic to Advance Full Notes
              </h2>
              <p className="text-2xl text-white text-left">
                My JavaScript notes cover everything from the basics to advanced
                topics, including variables, data types, functions, DOM
                manipulation, ES6+ features, asynchronous programming, and more.
                Perfect for learners looking to master both fundamental and
                modern JavaScript concepts
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <button
                className={`highLight-text mt-5 w-[14rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-400 custom-shadow2 border-b-2 `}
              >
                {" "}
                Download Notes
              </button>
              <button
                className={`highLight-text mt-5 w-[14rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-400 custom-shadow2 border-b-2 `}
              >
                {" "}
                Notes Demo
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div
        onClick={() => alert("working on it")}
        className="grid grid-cols-1 md:grid-cols-12 items-center gap-20 justify-center my-24 w-[97%] lg:w-[80%] mx-auto"
      >
        {/* Sidebar */}
        <div className="col-span-1 md:col-span-3">
          <div className="flex flex-wrap md:flex-col gap-10 hide-ScrollBar text-3xl items-center overflow-x-scroll  text-white timestamp">
            <button className="title highLight-text w-[17rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-3xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2">
              JavaScript
            </button>
            <button className="title highLight-text w-[17rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-3xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2">
              React JS
            </button>
            <button className="title highLight-text w-[17rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-3xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2">
              Node JS
            </button>
            <button className="title highLight-text w-[17rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-3xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2">
              DSA
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-9">
          <div className="custom-shadow  h-[100%] w-full overflow-hidden rounded-[2rem]">
            <div className="txt p-8 px-10 h-full  w-full flex justify-between flex-col custom-shadow2 items-center  backdrop-blur-sm bg-black/30">
              <div className="flex flex-col gap-3 justify-between ">
                <img className="w-[8rem]" src="/js.png" alt="" />
                <h2 className="text-4xl leading-[30px] text-white ">
                  JavaScript Basic to Advance Full Notes
                </h2>
                <p className="text-2xl text-white">
                  My JavaScript notes cover everything from the basics to
                  advanced topics, including variables, data types, functions,
                  DOM manipulation, ES6+ features, asynchronous programming, and
                  more. Perfect for learners looking to master both fundamental
                  and modern JavaScript concepts
                </p>
                <div className="float-end flex gap-10">
                  <button
                    className={`highLight-text mt-5 w-[14rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-400 custom-shadow2 border-b-2 `}
                  >
                    {" "}
                    Download Notes
                  </button>
                  <button
                    className={`highLight-text mt-5 w-[14rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-400 custom-shadow2 border-b-2 `}
                  >
                    {" "}
                    Notes Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNotes;

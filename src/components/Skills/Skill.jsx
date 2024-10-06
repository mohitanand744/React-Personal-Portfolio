import React, { useState } from "react";

const Skill = () => {
  const [showSkills, setShowSkills] = useState("frontend");

  return (
    <div className="skills h-[60rem] my-44">
      <center className="text-[4rem] highLight-text my-10">Skills</center>

      <div className="flex justify-center text-white text-4xl gap-16">
        <button
          onClick={() => setShowSkills("frontend")}
          className={`${
            showSkills === "frontend"
              ? "border-b-[3px] highLight-text"
              : "border-b-2"
          }   p-4 w-[13rem] rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Frontend
        </button>
        <button
          onClick={() => setShowSkills("backend")}
          className={`${
            showSkills === "backend"
              ? "border-b-[3px] highLight-text "
              : "border-b-2"
          }   p-4 w-[13rem] rounded-3xl border-slate-600 custom-shadow2 `}
        >
          Backend
        </button>
      </div>

      {showSkills === "frontend" ? (
        <>
          <div className="flex rounded-3xl my-16 gap-14 justify-center flex-wrap  items-center ">
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/html.png" alt="" />
              <p className="text-white">HTML</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/css.png" alt="" />

              <p className="text-white">CSS</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/js.png" alt="" />
              <p className="text-white">JavaScript</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/react.png" alt="" />

              <p className="text-white">React</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/tailwind.png" alt="" />

              <p className="text-white">Tailwind</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/bootstrap.png" alt="" />

              <p className="text-white">Bootstrap</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/responsive.png" alt="" />
              <p className="text-white">Responsive Design</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/github.png" alt="" />
              <p className="text-white">Git | GitHub</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/api.png" alt="" />

              <p className="text-white">API</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex rounded-3xl my-16 gap-14 justify-center flex-wrap  items-center">
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/express.png" alt="" />
              <p className="text-white">Express</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/node-js.png" alt="" />
              <p className="text-white">Node</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center text-2xl font-bold">
              <img src="/mongoDB.png" alt="" />
              <p className="text-white">MongoDB</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Skill;

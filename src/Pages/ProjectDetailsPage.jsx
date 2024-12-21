import React from "react";
import useContextData from "../Hook/useContextData";
import { useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

const ProjectDetailsPage = () => {
  const { projects } = useContextData();
  const { name } = useParams();

  const filterProject = projects.filter(
    (project) =>
      project.title.toLowerCase().replaceAll(" ", "") === name.toLowerCase()
  );

  console.log(filterProject);

  return (
    <div className="min-h-[100vh]">
      <center className="my-10 text-3xl font-semibold text-green-400">
        Working on this Page!!..
      </center>

      <div className="my-10 projectsImages">
        <Marquee
          gradient={true}
          gradientColor={[183, 0, 255]}
          direction="right"
          speed={140}
          pauseOnHover
          margin={20}
        >
          <div className="  h-[35rem] mr-16 ">
            <img
              className="object-cover w-full h-full rounded-3xl"
              src="/pokiWorld1.png"
              alt=""
            />
          </div>
          <div className="  h-[35rem] mr-16 ">
            <img
              className="object-cover w-full h-full rounded-3xl"
              src="/pokiWorld2.png"
              alt=""
            />
          </div>
          <div className="  h-[35rem] mr-16">
            <img
              className="object-cover w-full h-full rounded-3xl"
              src="/pokiWorld3.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
      <div className="grid grid-cols-12 mx-10">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <div className="">
            <h1 className="text-3xl md:text-[3rem] highLight-text">
              Pokemon World
            </h1>

            <p className="mt-3 text-xl text-white md:text-3xl">
              React project that dynamically displays Pokémon data by leveraging
              the Pokémon API, and I’m thrilled with the results! This project
              was a great learning experience, combining API integration with
              reusable and scalable React components.Check out the demo look of
              the website
            </p>

            <div className="flex gap-5 my-6 text-white">
              <>
                <a href={"live_url"} target="_blank">
                  <button
                    className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
                  >
                    {" "}
                    Live Demo
                  </button>
                </a>
                <a href={"github_url"} target="_blank">
                  <button
                    className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
                  >
                    GitHub
                  </button>
                </a>
              </>
            </div>
          </div>
        </div>
        <div className="col-span-12 mb-6 md:col-span-6 lg:col-span-5">
          <div className="custom-shadow3 p-8 rounded-[4rem]">
            <center className="mb-4 text-3xl md:text-4xl highLight-text">
              Skills Used
            </center>
            <div className="grid w-full grid-cols-12 gap-4 ">
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>{" "}
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
              <div
                data-aos="zoom-in"
                className="flex flex-col col-span-4 justify-center items-center bg-[#00000081] py-5 rounded-[3rem] text-xl md:text-2xl font-bold custom-shadow"
              >
                <img
                  loading="lazy"
                  className="w-[3.8rem] md:w-[6rem]"
                  src={"/react.png"}
                  alt=""
                />
                <p className="text-lg text-white sm:text-xl">Demo Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

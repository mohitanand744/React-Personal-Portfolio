import React from "react";
import { useNavigate } from "react-router-dom";
import SkillsSlider from "../slider/skillsSlider";

const Card = ({
  image,
  title,
  description,
  index,
  isExpanded,
  readMore,
  readMoreFun,
  skills,
  github_url,
  live_url,
  shortenDescription,
  docs,
}) => {
  const navigate = useNavigate();

  return (
    <div
      data-aos="flip-left"
      //onClick={() => navigate(`/projects/${title.replaceAll(" ", "")}`)}
      className="flex flex-col items-start justify-between w-full col-span-12 gap-3 p-6 py-8 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 projectBox rounded-3xl custom-shadow h-fit "
    >
      <div className="imgContainer relative w-[97%] h-[19rem] md:h-[20rem] mx-auto">
        <img
          loading="lazy"
          className="object-cover w-full h-full rounded-3xl"
          src={image || "/react poster.jpg"}
          alt=""
        />

        {docs && (
          <a
            href={
              "https://github.com/mohitanand744/Book-Store-React-MySQL-/archive/refs/heads/main.zip"
            }
          >
            <div className="absolute active:scale-75 transition-all duration-200 ease-in  cursor-pointer group h-20 w-20 rounded-full flex justify-center items-center custom-shadow bg-[#000000af] top-3 right-3">
              <img src="/download.png" alt="" className="w-8 shadow-2xl" />

              <div className="absolute left-[-16rem] text-nowrap text-xl  group-hover:scale-100 group-active:scale-100 scale-50 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white bg-[#000000cc] px-4 py-2 rounded-full">
                <p>Download Project Zip</p>
              </div>
            </div>
          </a>
        )}
      </div>

      <div className="text-white  w-[95%] mx-auto">
        <h2 className="text-4xl highLight-text">{title}</h2>
        <p className="text-xl sm:text-2xl">
          {isExpanded === index && readMore
            ? description
            : shortenDescription(description, 50)}
          <span
            className="cursor-pointer highLight-text"
            onClick={(e) => {
              e.stopPropagation();
              readMoreFun(index);
            }}
          >
            {isExpanded === index && readMore ? " read less" : " read more"}
          </span>
        </p>
      </div>
      <SkillsSlider index={index} skillsUsed={skills} />
      {github_url && (
        <div className="flex gap-5 mx-auto text-white justify-evenly">
          <>
            <a href={live_url} target="_blank">
              <button
                className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
              >
                {" "}
                Live Demo
              </button>
            </a>
            <a href={github_url} target="_blank">
              <button
                className={`highLight-text  w-[13rem] h-14 active:scale-[0.88] transition-all duration-300 text-xl sm:text-2xl ease rounded-3xl border-slate-600 custom-shadow2 border-b-2 `}
              >
                GitHub
              </button>
            </a>
          </>
        </div>
      )}
    </div>
  );
};

export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

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
}) => {
  const navigate = useNavigate();

  return (
    <div
      data-aos="flip-left"
      // onClick={() => navigate(`/projects/${title.replaceAll(" ", "")}`)}
      className="projectBox rounded-3xl flex flex-col items-start justify-between gap-6 py-8 p-6 custom-shadow w-[34rem] h-fit "
    >
      <div className="imgContainer w-[97%] h-[17rem] md:h-[20rem] mx-auto">
        <img
          loading="lazy"
          className="object-cover w-full h-full rounded-3xl"
          src={image}
          alt=""
        />
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
            {isExpanded === index && readMore ? "read less" : "read more"}
          </span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-3">
        <h2 className="text-xl text-white sm:text-2xl">Skills Used :</h2>
        <div className="flex flex-wrap items-center ">
          <p className="flex flex-wrap w-full text-xl text-center text-white lg:text-2xl">
            {skills.map((skill, i) => (
              <span key={i} className="me-1 ">
                {skill},
              </span>
            ))}
          </p>
        </div>
      </div>
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

import React from "react";

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
  return (
    <div
      data-aos="flip-left"
      className="projectBox rounded-3xl flex flex-col justify-between gap-6 py-8 p-6 custom-shadow w-[35rem] h-fit"
    >
      <div className="imgContainer   w-[97%] h-[15rem] md:h-[20rem] mx-auto">
        <img
          className="w-full h-full rounded-3xl object-cover"
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
            onClick={() => {
              readMoreFun(index);
            }}
          >
            {isExpanded === index && readMore ? "read less" : "read more"}
          </span>
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-3">
        <h2 className="text-white text-xl sm:text-2xl">Skills Used :</h2>
        <div className=" flex items-center flex-wrap">
          <p className="text-center text-white  flex flex-wrap w-full text-xl lg:text-2xl">
            {skills.map((skill, i) => (
              <span key={i} className="me-1 ">
                {skill},
              </span>
            ))}
          </p>
        </div>
      </div>
      {github_url && (
        <div className="flex gap-5 justify-evenly text-white">
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

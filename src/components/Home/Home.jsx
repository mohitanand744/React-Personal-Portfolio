import React from "react";
import Button from "../common/Buttons/Button";

const Home = () => {
  return (
    <div id="Home" className="hero mt-32 lg:mt-64 px-3 lg:px-10">
      <div
        data-aos="zoom-in"
        className="grid gap-10 grid-cols-1 lg:grid-cols-12"
      >
        <div className="lg:col-span-7 h-[48vh] order-2 lg:order-1">
          <div className="flex justify-center items-center gap-3 h-full ">
            <ul className="list-none flex flex-col w-[7rem] md:w-[6rem] gap-2">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/mohit-anand-developer"
                >
                  {" "}
                  <img
                    className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[4rem] sm:w-[4rem] md:w-[5rem] "
                    src="/linkedin.png"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/mohitanand744">
                  {" "}
                  <img
                    className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[4rem] sm:w-[4rem] md:w-[5rem] "
                    src="/github.png"
                    alt="icon"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/v3_beast_rider123/"
                >
                  {" "}
                  <img
                    className="hover:rotate-[360deg] transition-all duration-500 hover:scale-110 ease-linear w-[4rem] sm:w-[4rem] md:w-[5rem] "
                    src="insta.png"
                    alt="icon"
                  />{" "}
                </a>
              </li>
            </ul>

            <div className="head">
              <h1 className="font-bold text-white text-[3rem] sm:text-[3rem] md:text-[5rem] leading-10  md:leading-[4rem] lg:leading-[5rem]">
                Hi There, I'm <span className="highLight-text ">Mohit</span>{" "}
                <br />{" "}
                <span className=" text-[2rem] sm:text-[2.3rem] md:text-[3.8rem] ">
                  {" "}
                  a <span className="highLight-text">Web Developer</span>
                </span>
              </h1>

              <p className="text-white text-[1.5rem] sm:text-md md:text-3xl mt-5">
                Frontend Developer @WeboConnect | Teamwork Makes The Dream work.
              </p>

              <div className="flex gap-3 lg:gap-5 text-white mt-4">
                <Button
                  text={"Hire me"}
                  url={"https://www.linkedin.com/in/mohit-anand-developer"}
                />
                <Button
                  text={"1:1 Call"}
                  url={"https://topmate.io/mohit_anand_developer"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 order-1 lg:order-2">
          <div
            data-aos="flip-right"
            className="flex justify-center items-center "
          >
            <div className="ms-2 profileImageContainer w-[26rem] md:w-[38rem] h-[26rem] md:h-[38rem] rounded-full">
              <img
                className="w-full h-full rounded-full object-cover"
                src="/hero-profile.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

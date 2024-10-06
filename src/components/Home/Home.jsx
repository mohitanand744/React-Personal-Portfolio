import React from "react";
import Button from "../common/Buttons/Button";

const Home = () => {
  return (
    <div className="hero px-2 md:px-10 mt-36 lg:mt-52">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-7 col-md-12 col-12 h-[48vh] order-2 lg:order-1">
          <div className="flex justify-center items-center gap-3 h-full ">
            <ul className="list-none flex flex-col gap-2">
              <li>
                <img
                  className="w-[5rem] sm:w-[4rem] md:w-[5rem] "
                  src="/linkedin.png"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  className="w-[5rem] sm:w-[4rem] md:w-[5rem] "
                  src="/github.png"
                  alt="icon"
                />
              </li>
              <li>
                <img
                  className="w-[5rem] sm:w-[4rem] md:w-[5rem] "
                  src="insta.png"
                  alt="icon"
                />
              </li>
            </ul>

            <div className="head">
              <h1 className="font-bold text-white text-[2.3rem] sm:text-[3rem] md:text-[5rem]">
                Hi There, I'm <span className="highLight-text">Mohit</span>{" "}
                <br />{" "}
                <span className="text-[1.8rem] sm:text-[2.3rem] md:text-[3.8rem]">
                  {" "}
                  a <span className="highLight-text">Web Developer</span>
                </span>
              </h1>
              <p className="text-white text-[1.3rem] sm:text-md md:text-3xl">
                Frontend Developer @WeboConnect | Teamwork Makes The Dream work.
              </p>

              <div className="flex gap-5 text-white mt-4">
                <Button text={"Hire me"} />
                <Button text={"1:1 Call"} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-12 order-1 lg:order-2">
          <div className="flex justify-center items-center ">
            <div className="ms-2 profileImageContainer w-[28rem] md:w-[35rem] h-[28rem] md:h-[35rem] rounded-full">
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

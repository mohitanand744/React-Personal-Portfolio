import React, { useState } from "react";
import Button from "../common/Buttons/Button";
import SectionHeading from "../common/Heading/SectionHeading";
import DownloadButton from "../common/Buttons/DownloadButton";

const AboutMe = () => {
  const [readMore, setReadMore] = useState(false);

  const readMoreText = () => {
    setReadMore((readMore) => !readMore);
  };

  return (
    <div
      id="About"
      className="about h-fit grid w-[98%] mx-auto gap-16 grid-cols-1 lg:grid-cols-12 lg:mt-72 px-3 lg:px-10"
    >
      <div className="col-span-5 p-2">
        <div
          data-aos="flip-left"
          className="flex items-center lg:justify-center"
        >
          <img
            loading="lazy"
            className="profileImageContainer text-center w-[25rem] md:w-[25rem] md:h-[32rem] lg:w-[40rem] lg:h-[50rem] rounded-[4rem] object-cover"
            src="/profileImg.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-7 " data-aos="zoom-in">
        <SectionHeading text={"About me"} />
        <div className="flex justify-between gap-4 flex-wrap w-[90%] mt-10 text-white">
          <div className="flex flex-col gap-2 text-2xl lg:text-3xl">
            <p className="font-bold">
              Name: <span className="font-normal">Mohit Anand</span>
            </p>{" "}
            <p className="font-bold">
              Email:{" "}
              <span className="font-normal">
                <a href="mailto:name@email.com">anandmohit744@gmail.com</a>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-2xl lg:text-3xl">
            <p className="font-bold">
              Role: <span className="font-normal">Frontend Developer</span>
            </p>{" "}
            <p className="font-bold">
              Freelance: <span className="font-normal">Available</span>
            </p>
          </div>
        </div>
        <div className="mt-10 text-2xl text-white lg:mt-16 lg:text-3xl lg:pr-28">
          <p>
            A dedicated Frontend Developer with hands-on experience in building
            scalable web applications using React.js, Bootstrap, and Tailwind
            CSS. Currently Working at WeboConnect, I focus on enhancing user
            experiences and improving performance through dynamic interfaces and
            API integration. Transitioning into programming after overcoming a
            spinal cord injury, I bring resilience, adaptability{" "}
            {readMore &&
              ", and a passion for creating impactful web solutions. I am continually expanding my skills, currently learning backend technologies to further enrich my projects."}{" "}
            <span
              className="cursor-pointer highLight-text"
              onClick={readMoreText}
            >
              {readMore ? "read less" : "read more"}
            </span>
          </p>
        </div>

        <div className="mt-10 lg:mt-20">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

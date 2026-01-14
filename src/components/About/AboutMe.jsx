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
      className="grid grid-cols-1 gap-16 px-3 mx-auto about h-fit lg:grid-cols-12 lg:mt-72 "
    >
      <div className="col-span-5 p-2">
        <div data-aos="flip-left" className="flex items-center">
          <img
            loading="lazy"
            className="profileImageContainer text-center w-[25rem] md:w-[25rem] md:h-[32rem] h-[28rem] lg:w-[40rem] lg:h-[50rem] rounded-[4rem] object-cover"
            src="/profileImg.png"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-7 " data-aos="zoom-in">
        <div className="p-8 border-b-[1px] border-t-[1px] rounded-[4rem] custom-shadow">
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
                Role:{" "}
                <span className="font-normal">
                  Frontend Focused - Full Stack Developer
                </span>
              </p>{" "}
              <p className="font-bold">
                Freelance: <span className="font-normal">Available</span>
              </p>
            </div>
          </div>
          <div className="mt-10 text-2xl text-white lg:mt-16 lg:text-3xl lg:pr-28">
            <p>
              Frontend-focused Full-Stack Developer with hands-on experience
              building scalable, responsive, and high-performance web
              applications using React.js, Next.js, Tailwind CSS, Bootstrap, and
              TypeScript, along with backend development using Node.js,
              Express.js, and MySQL. Proficient in API integration,
              authentication flows, and performance optimization, with a strong
              focus on building reusable, maintainable UI components for
              real-world production environments.
              {readMore &&
                `Experienced in collaborating across design and backend workflows to deliver user centric features with clean architecture and modern UI/UX practices.
              Passionate about modern web technologies, writing clean and
              efficient code, and continuously learning to stay updated with the
              evolving web ecosystem.`}{" "}
              <span
                className="cursor-pointer highLight-text"
                onClick={readMoreText}
              >
                {readMore ? "read less" : "read more"}
              </span>
            </p>
          </div>

          <div className="mt-10 lg:mt-20">
            <DownloadButton text="Download Resume" url="/Mohit Anand.pdf" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

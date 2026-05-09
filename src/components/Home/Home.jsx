import React from "react";
import Button from "../common/Buttons/Button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="Home" className="mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Banner Section */}
        <div className="relative h-[300px] md:h-[400px] rounded-xl lg:h-[550px] w-full overflow-hidden group">
          <img
            src="/working_me.jpeg"
            alt="Cover Banner"
            className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center 83%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent"></div>

          {/* Subtle glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-50"></div>

          {/* Skill Icons in Bottom Right */}
          <div className="absolute bottom-24 right-4 md:bottom-8 md:right-10 flex gap-3 bg-black/70 z-[40]   backdrop-blur-md p-2 rounded-full border border-white/10">
            {[
              "/react.png",
              "/nextjs.png",
              "/api.png",
              "/typescript.png",
              "/node-js.png",
              "/js.png",
              "tailwind.png"].map((icon, index) => (
                <div
                  key={index}
                  className="hidden md:flex md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full group/item p-2 items-center justify-center group-hover/item:-translate-y-4 transition-all duration-300 cursor-pointer border border-white/5"
                >
                  <img
                    src={icon}
                    alt="skill"
                    className="w-full h-full group-hover/item:-translate-y-4 group-hover/item:scale-110 transition-all duration-300 cursor-pointer [will-change:transform] rounded-full object-contain"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="relative px-6 sm:px-10 pb-12 pointer-events-none">
          {/* Profile Picture & Social Icons Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end -mt-20 md:-mt-28 mb-6 z-20 relative pointer-events-auto">

            {/* Profile Picture Wrapper */}
            <div className="relative p-2 bg-[#030014] rounded-full z-20 shadow-2xl">
              <div className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-4 border-purple-500/40 relative">
                <img
                  src="/footer1.jpg"
                  alt="Mohit Anand"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-[#030014] rounded-full z-30"></div>
            </div>

            {/* Social Icons */}
            <ul className="flex gap-4 mt-6 md:mt-0 list-none z-20 relative">
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/mohit-anand-developer" rel="noreferrer">
                  <img
                    className="hover:-translate-y-2 hover:scale-110 transition-all duration-300 w-[3.5rem] md:w-[4rem]"
                    src="/linkedin.png"
                    alt="LinkedIn"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/mohitanand744" rel="noreferrer">
                  <img
                    className="hover:-translate-y-2 hover:scale-110 transition-all duration-300 w-[3.5rem] md:w-[4rem]"
                    src="/github.png"
                    alt="GitHub"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="mailto:anandmohit744@gmail.com" rel="noreferrer">
                  <img
                    className="hover:-translate-y-2 hover:scale-110 transition-all duration-300 w-[3.5rem] md:w-[4rem]"
                    src="/email.png"
                    alt="Email"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Text Content */}
          <div className="mt-4 text-left z-20 relative pointer-events-auto">
            <h1 className="font-bold text-white text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-tight">
              Hi There, I'm <span className="highLight-text">Mohit</span>
            </h1>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-gray-200 mt-2 font-medium">
              a <span className="highLight-text">Web Developer</span>
            </h2>

            <p className="text-gray-300 text-xl md:text-2xl mt-6 max-w-4xl leading-relaxed">
              Lead Software Engineer at Inklude Skillia |{" "}
              <span className="highLight-text font-medium">I specialize</span> in building high-performance web applications and scalable digital architectures | Delivering elite engineering solutions for global brands
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap max-w-4xl gap-4 lg:gap-6 mt-8">
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
      </motion.div>
    </div>
  );
};

export default Home;

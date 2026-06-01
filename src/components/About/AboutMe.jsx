import React from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import DownloadButton from "../common/Buttons/DownloadButton";
import { Target, BrainCircuit, Rocket } from "lucide-react";

const AboutMe = () => {
  const tags = [
    "React",
    "Node.js",
    "MySQL",
    "REST APIs",
    "AI-Assisted Development",
    "Scalable Backend Architecture",
    "Full Stack Engineering",
    "SaaS Development",
  ];

  const stats = [
    { label: "Experience", value: "1+ Years" },
    { label: "Development", value: "Full Stack" },
    { label: "Workflow", value: "AI-Assisted" },
    { label: "Focus", value: "Scalable SaaS" },
  ];

  return (
    <div
      id="About"
      className="grid grid-cols-1 gap-16 px-3 mx-auto about h-fit lg:grid-cols-12 lg:mt-72"
    >
      {/* Left Profile Image Column */}
      <div className="col-span-5 p-2">
        <div data-aos="flip-left" className="flex flex-col items-center lg:sticky lg:top-44">
          <img
            loading="lazy"
            className="profileImageContainer text-center w-[25rem] md:w-[25rem] md:h-[32rem] h-[28rem] lg:w-[40rem] lg:h-[50rem] rounded-[4rem] object-cover transition-all duration-300 hover:scale-[1.02]"
            src="/profileImg.png"
            alt="Mohit Anand Profile"
          />
        </div>
      </div>

      {/* Right Details Column */}
      <div className="col-span-7" data-aos="zoom-in">
        <div className="p-6 md:p-10 border-b-[1px] border-t-[1px] rounded-[3rem] md:rounded-[4rem] custom-shadow bg-[#080810ab] backdrop-blur-md min-h-[550px] flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <SectionHeading text={"About me"} />
            </div>

            {/* Profile Summary */}
            <div className="space-y-6 text-white mb-10">
              <p className="text-xl md:text-2xl lg:text-[20px]  text-gray-200">
                I’m <span className="font-semibold text-white">Mohit Anand</span>, a Frontend-Focused Full Stack Developer passionate about building scalable, high-performance web applications and continuously improving my backend engineering skills.
              </p>

              <p className="text-lg md:text-xl lg:text-[17px] text-gray-400 ">
                Frontend-Focused Full Stack Engineer with professional experience building responsive web platforms, AI-powered coaching products, and data analytics dashboards. Currently developing scalable client products at <span className="text-gray-200 font-medium">INKLUDE SKILLIA</span> and building <span className="text-gray-200 font-medium">NextChapter</span>, an AI-powered e-commerce & social platform, to deepen full-stack and backend mastery.
              </p>
            </div>

            {/* Professional Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-[13px] font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-center items-center md:items-start p-5 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-colors"
                >
                  <span className="text-white font-bold text-2xl md:text-3xl mb-1">{stat.value}</span>
                  <span className="text-gray-400 text-[12px] font-medium">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {/* Card 1 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <h4 className="text-white font-semibold text-2xl mb-3 flex items-center gap-2">
                  <Target size={20} className="text-purple-400" /> Current Focus
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Building scalable SaaS applications, improving backend architecture skills, and integrating AI-assisted engineering workflows into modern development processes.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                <h4 className="text-white font-semibold text-2xl mb-3 flex items-center gap-2">
                  <BrainCircuit size={20} className="text-blue-400" /> AI-Assisted Workflow
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  Using Ollama + Continue + Local AI Models for backend reviews, refactoring, SQL optimization, documentation, and productivity-focused engineering workflows.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent border border-white/10 hover:border-pink-500/30 transition-all duration-300">
                <h4 className="text-white font-semibold text-2xl mb-3 flex items-center gap-2">
                  <Rocket size={20} className="text-pink-400" /> Featured Project
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  <span className="text-white font-medium">NextChapter</span> — AI-powered E-commerce + Social Platform for Authors & Readers.
                </p>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-black/30 p-6 md:p-8 rounded-3xl border border-gray-800/60 mb-10">
              <div className="flex flex-col gap-1 text-base md:text-lg">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-2">Contact</p>
                <p className="text-white font-medium">Mohit Anand</p>
                <a
                  href="mailto:anandmohit744@gmail.com"
                  className="text-gray-300 hover:text-[#3cf] transition-colors"
                >
                  anandmohit744@gmail.com
                </a>
                <span className="text-green-400 mt-1">+91 8521227434</span>
              </div>
              <div className="flex flex-col gap-1 text-base md:text-lg">
                <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold mb-2">Current Role</p>
                <p className="text-gray-200">Frontend-Focused Full Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-8 border-t border-gray-800/60 flex flex-wrap items-center justify-between gap-4">
            <DownloadButton text="Download Resume" url="/Mohit Anand.pdf" />
            <span className="text-gray-500 text-sm md:text-base font-medium">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;


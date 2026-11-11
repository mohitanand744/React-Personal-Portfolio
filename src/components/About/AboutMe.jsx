import SectionHeading from "../common/Heading/SectionHeading";
import DownloadButton from "../common/Buttons/DownloadButton";
import useContextData from "../../Hook/useContextData";
import {
  Target,
  BrainCircuit,
  Rocket,
  Mail,
  Phone,
  User,
  Briefcase,
  Calendar,
} from "lucide-react";

const AboutMe = () => {
  const { experience } = useContextData();

  const presentCompany = experience?.find((exp) =>
    exp.roles?.some((role) => role.end_date?.toLowerCase() === "present")
  );
  const presentRole = presentCompany?.roles?.find(
    (role) => role.end_date?.toLowerCase() === "present"
  );
  const joiningDate = presentRole?.start_date || "Jun 2026";

  const tags = [
    "React",
    "Next",
    "Node.js",
    "MySQL",
    "REST APIs",
    "AI-Assisted Development",
    "Scalable Backend Architecture",
    "Low Level Systems Design",
    "High Performance",
    "System Design",
    "Full Stack Engineering",
    "SaaS Development",
  ];

  const stats = [
    { label: "Experience", value: "2+ Years", subtext: "Professional Track Record" },
    { label: "Development", value: "Full Stack", subtext: "Frontend-Focused Engineering" },
    { label: "Workflow", value: "AI-Assisted", subtext: "Ollama & Local LLMs" },
    { label: "Focus", value: "Scalable SaaS", subtext: "Performance & Systems" },
  ];

  return (
    <div id="About" className="w-full mt-16 md:mt-24 lg:mt-32 px-3 mx-auto">
      {/* 1. Full-Width Banner */}
      <div className="w-full mb-10 md:mb-14" data-aos="zoom-in">
        <div className="w-full overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-2xl border border-purple-500/20 group transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">
          <picture className="w-full block">
            <source
              media="(max-width: 768px)"
              srcSet="/Mohit-Anand-Full-Stack-Developer-Banner-mobile.png"
            />
            <img
              src="/Mohit-Anand-Full-Stack-Developer-Banner.png"
              alt="Mohit Anand - Full Stack Developer (Frontend-Focused) Banner"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              loading="lazy"
            />
          </picture>
        </div>
      </div>

      {/* 2. Redesigned Content Card */}
      <div
        data-aos="fade-up"
        className="w-full p-6 sm:p-10 md:p-14 border-b border-t rounded-[2.5rem] md:rounded-[3.5rem] custom-shadow bg-[#080810ab] backdrop-blur-md"
      >
        {/* Header Row */}
        <div className="mb-12 pb-6 border-b border-white/10">
          <SectionHeading text={"About me"} />
        </div>

        {/* Profile Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white mb-14">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-2xl md:text-3xl lg:text-[2.8rem] font-bold text-white leading-[1.3] md:leading-[1.35] lg:leading-[1.35]">
              Frontend-Focused <span className="highLight-text">Full Stack Developer</span> crafting modern, scalable applications.
            </h3>
            <p className="text-xl md:text-2xl lg:text-[2.2rem] text-gray-200 leading-[1.7] md:leading-[1.75] lg:leading-[1.8] pt-2">
              I’m <span className="font-semibold text-white">Mohit Anand</span>, passionate about building high-performance web products, scalable backend architectures, and leveraging modern AI-assisted engineering workflows.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-5">
            <p className="text-lg md:text-xl lg:text-[2rem] text-gray-300 leading-[1.7] md:leading-[1.75] lg:leading-[1.8]">
              Frontend-Focused Full Stack Engineer with professional experience building responsive web platforms, AI-powered coaching products, and data analytics dashboards. Currently developing scalable client products at <span className="text-white font-semibold">Cronix</span> and building <span className="text-white font-semibold">NextChapter</span>, an AI-powered e-commerce & social platform, to deepen full-stack and backend mastery.
            </p>
            <p className="text-lg md:text-xl lg:text-[2rem] text-gray-300 leading-[1.7] md:leading-[1.75] lg:leading-[1.8]">
              Committed to clean code principles, intuitive user experiences, scalable database modeling, and fast iteration speeds.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 md:p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-purple-500/40 hover:bg-white/[0.08] transition-all duration-300"
            >
              <span className="text-white font-extrabold text-3xl md:text-4xl lg:text-[3.4rem] leading-[1.2] block mb-2">
                {stat.value}
              </span>
              <span className="text-purple-400 text-lg md:text-xl lg:text-[1.9rem] font-semibold leading-[1.4] block mb-1">
                {stat.label}
              </span>
              <span className="text-gray-400 text-base md:text-lg lg:text-[1.6rem] leading-[1.5] block">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>

        {/* Technical Competencies Badges */}
        <div className="mb-16">
          <p className="text-gray-300 text-xl md:text-2xl lg:text-[2.2rem] uppercase tracking-wider font-semibold leading-[1.4] mb-6">
            Core Competencies & Stack
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-6 py-3.5 rounded-full text-base md:text-xl lg:text-[1.7rem] font-medium leading-[1.4] bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1 */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                <Target size={28} className="text-purple-400" />
              </div>
              <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-[2.4rem] leading-[1.3] mb-4">
                Current Focus
              </h4>
              <p className="text-gray-300 text-lg md:text-xl lg:text-[1.8rem] leading-[1.7] md:leading-[1.75] lg:leading-[1.8]">
                Building scalable SaaS applications, improving backend architecture skills, and integrating AI-assisted engineering workflows into modern development processes.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6">
                <BrainCircuit size={28} className="text-blue-400" />
              </div>
              <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-[2.4rem] leading-[1.3] mb-4">
                AI-Assisted Workflow
              </h4>
              <p className="text-gray-300 text-lg md:text-xl lg:text-[1.8rem] leading-[1.7] md:leading-[1.75] lg:leading-[1.8]">
                Using Ollama + Continue + Local AI Models for backend reviews, refactoring, SQL optimization, documentation, and productivity-focused engineering workflows.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent border border-white/10 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center mb-6">
                <Rocket size={28} className="text-pink-400" />
              </div>
              <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-[2.4rem] leading-[1.3] mb-4">
                Featured Project
              </h4>
              <p className="text-gray-300 text-lg md:text-xl lg:text-[1.8rem] leading-[1.7] md:leading-[1.75] lg:leading-[1.8]">
                <span className="text-white font-semibold">NextChapter</span> — AI-powered E-commerce + Social Platform for Authors & Readers.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Details & Action Footer Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/40 p-6 md:p-10 rounded-3xl border border-white/10 items-center">
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-1">
                <User size={24} className="text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-base md:text-lg lg:text-[1.6rem] uppercase tracking-wider font-semibold leading-[1.4] mb-1">
                  Name
                </p>
                <p className="text-white font-semibold text-xl md:text-2xl lg:text-[2.2rem] leading-[1.35]">
                  Mohit Anand
                </p>
                <p className="text-gray-300 text-base md:text-lg lg:text-[1.7rem] leading-[1.5] mt-1">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                <Briefcase size={24} className="text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-base md:text-lg lg:text-[1.6rem] uppercase tracking-wider font-semibold leading-[1.4] mb-1">
                  Current Role
                </p>
                <p className="text-white font-semibold text-xl md:text-2xl lg:text-[2.2rem] leading-[1.35]">
                  Cronix
                </p>
                <p className="text-gray-300 text-base md:text-lg lg:text-[1.7rem] leading-[1.5] mt-1">
                  Frontend-Focused Full Stack
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0 mt-1">
                <Mail size={24} className="text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-base md:text-lg lg:text-[1.6rem] uppercase tracking-wider font-semibold leading-[1.4] mb-1">
                  Email
                </p>
                <a
                  href="mailto:anandmohit744@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-xl md:text-2xl lg:text-[2.2rem] font-medium leading-[1.35] break-all block"
                >
                  anandmohit744@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center shrink-0 mt-1">
                <Phone size={24} className="text-pink-400" />
              </div>
              <div>
                <p className="text-gray-400 text-base md:text-lg lg:text-[1.6rem] uppercase tracking-wider font-semibold leading-[1.4] mb-1">
                  Phone
                </p>
                <a
                  href="tel:+918521227434"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-xl md:text-2xl lg:text-[2.2rem] font-medium leading-[1.35] block"
                >
                  +91 8521227434
                </a>
              </div>
            </div>
          </div>

          {/* Download Resume & Last Updated */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3 lg:border-l lg:border-white/10 lg:pl-8 pt-4 lg:pt-0">
            <DownloadButton text="Download Resume" url="/Mohit Anand.pdf" />
            <div className="flex items-center gap-2 text-gray-400 text-base md:text-lg lg:text-[1.6rem] mt-1">
              <Calendar size={18} className="text-purple-400" />
              <span>
                Last Updated: <span className="text-white font-semibold">{joiningDate}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

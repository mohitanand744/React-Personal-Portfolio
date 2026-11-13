import React, { useRef } from "react";
import SectionHeading from "../common/Heading/SectionHeading";
import {
  GraduationCap,
  Calendar,
  Sparkles,
  Code2,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const Education = () => {
  const methodologiesRef = useRef(null);

  const scrollMethodologies = (direction) => {
    if (!methodologiesRef.current) return;
    const amount = 260;
    methodologiesRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };
  const learningPillars = [
    {
      icon: Code2,
      title: "Full Stack Architecture",
      desc: "Deep focus on React, Next.js, Node.js, Express, state management, and modern component design.",
      color: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    },
    {
      icon: Database,
      title: "Systems & Database Design",
      desc: "Relational database modeling with MySQL, custom native migrations without ORMs, and query optimization.",
      color: "text-blue-400 bg-blue-500/15 border-blue-500/30",
    },
    {
      icon: Cpu,
      title: "AI-Assisted Engineering",
      desc: "Leveraging local LLMs (Ollama + Continue.dev) for code review, documentation, and accelerated engineering.",
      color: "text-pink-400 bg-pink-500/15 border-pink-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Production & Security Standards",
      desc: "JWT authentication, Google OAuth, HTTP-only cookies, error handling, and clean code principles.",
      color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    },
  ];

  const highlights = [
    "Project-Driven Hands-On Practice",
    "System Design & Low-Level Architecture",
    "Clean Code & Modular Patterns",
    "Local AI & Modern Developer Tooling",
    "Continuous Research & Self-Discipline",
  ];

  return (
    <section id="Education" className="w-full my-28 md:my-36">
      {/* Section Heading & Subtitle */}
      <center className="my-10 mx-auto w-[96%] lg:w-[48%]" data-aos="zoom-in">
        <SectionHeading text={"Education"} />
        <p className="text-xl md:text-2xl text-gray-300 leading-[1.7] mt-3">
          A continuous, self-directed journey focused on building scalable
          software, deep system architecture, and mastering modern full-stack
          engineering through hands-on practice.
        </p>
      </center>

      {/* Main Glassmorphic Education Card */}
      <div
        data-aos="fade-up"
        className="w-[96%] lg:w-[92%] xl:w-[88%] mx-auto p-5 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] custom-shadow bg-[#080810db] backdrop-blur-xl border border-white/10 relative overflow-hidden"
      >
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          {/* Avatar & Degree Info */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            {/* Modern Icon / Avatar with overlapping translucent circles (reference design) */}
            <div className="w-[6rem] h-[6rem] sm:w-[7rem] sm:h-[7rem] rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-pink-500/20 border-2 border-purple-500/30 flex items-center justify-center shrink-0 relative overflow-hidden shadow-lg p-2">
              {/* Reference-style overlapping circles watermark */}
              <div className="absolute -top-1 -left-1 w-10 h-10 rounded-full bg-blue-400/20 blur-[1px]"></div>
              <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-purple-400/20 blur-[1px]"></div>
              <GraduationCap
                size={32}
                className="text-purple-300 relative z-10 drop-shadow-md"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                <h3 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-white tracking-tight">
                  Self-Taught Software Developer
                </h3>
                <span className="hidden sm:inline-block px-3 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[1.2rem] font-semibold tracking-wide">
                  Autonomous Learning
                </span>
              </div>

              <p className="text-purple-400 text-[1.4rem] sm:text-[1.6rem] md:text-[1.7rem] font-medium">
                Independent Learning & Practical Development, Software Development
              </p>
            </div>
          </div>

          {/* Timeline & Learning Badge */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            {/* Timeline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/15 text-gray-200 text-[1.3rem] sm:text-[1.5rem] font-medium shadow-sm">
              <Calendar size={16} className="text-purple-400 shrink-0" />
              <span>Jan 2021 – Present</span>
              <span
                title="Active ongoing learning"
                className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse ml-1"
              ></span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-[1.2rem] sm:text-[1.3rem] font-semibold">
              <Sparkles size={14} className="text-purple-400" />
              <span>Lifelong Learner</span>
            </div>
          </div>
        </div>

        {/* Core Educational Philosophy & Summary */}
        <div className="pt-8 pb-6 relative z-10">
          <p className="text-[1.5rem] sm:text-[1.7rem] md:text-[1.8rem] text-gray-200 leading-[1.8] font-normal max-w-5xl">
            Focused on full-stack web development, scalable frontend
            architecture, backend systems, databases, and modern development
            workflows through hands-on projects, real-world experience, and
            continuous self-learning.
          </p>
        </div>

        {/* Modern Learning Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-6 relative z-10">
          {learningPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${pillar.color} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={20} />
                  </div>
                  <h4 className="text-white text-[1.6rem] sm:text-[1.7rem] font-bold mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-400 text-[1.3rem] sm:text-[1.4rem] leading-[1.6]">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology & Highlights Badges (Scrollable) */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-3 min-w-0 overflow-hidden w-full">
            <span className="text-gray-400 text-[1.4rem] font-medium shrink-0 flex items-center gap-2">
              <BookOpen size={16} className="text-purple-400 shrink-0" />
              <span className="whitespace-nowrap">Key Methodologies:</span>
            </span>

            {/* Scrollable Badges Container */}
            <div
              ref={methodologiesRef}
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
              className="flex items-center gap-2.5 overflow-x-auto hide-ScrollBar py-1.5 scroll-smooth select-none min-w-0"
            >
              {highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/30 text-gray-300 hover:text-white text-[1.2rem] sm:text-[1.3rem] font-medium transition-all"
                >
                  <CheckCircle2 size={13} className="text-purple-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Navigation Arrows (Existing rightArrow.png) */}
          <div className="flex items-center justify-end gap-2.5 shrink-0 self-end sm:self-auto">
            <img
              loading="lazy"
              className="w-[3rem] sm:w-[3.4rem] active:scale-90 transition-all duration-200 ease-linear rotate-[180deg] cursor-pointer"
              src="/rightArrow.png"
              alt="Scroll Left"
              onClick={() => scrollMethodologies("left")}
            />
            <img
              loading="lazy"
              className="w-[3rem] sm:w-[3.4rem] active:scale-90 transition-all duration-200 ease-linear cursor-pointer"
              src="/rightArrow.png"
              alt="Scroll Right"
              onClick={() => scrollMethodologies("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


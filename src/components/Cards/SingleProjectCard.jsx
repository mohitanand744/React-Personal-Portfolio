import React, { useState, useRef } from "react";
import {
  ExternalLink,
  Download,
  Sparkles,
  CheckCircle2,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

const SingleProjectCard = ({ project }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const skillsContainerRef = useRef(null);
  const featuresContainerRef = useRef(null);
  const pillarsContainerRef = useRef(null);

  const fullDescription =
    project.detailed_description || project.description || "";
  const maxDescLength = 350;
  const isTruncatable = fullDescription.length > maxDescLength;

  const scrollSkills = (direction) => {
    if (!skillsContainerRef.current) return;
    const amount = 300;
    skillsContainerRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const scrollFeatures = (direction) => {
    if (!featuresContainerRef.current) return;
    const amount = 340;
    featuresContainerRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const scrollPillars = (direction) => {
    if (!pillarsContainerRef.current) return;
    const amount = 280;
    pillarsContainerRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  // Key architecture bullet points
  const architectureHighlights = [
    {
      icon: Server,
      title: "Backend Architecture",
      desc: "API-first modular design (controllers, services, validators)",
      color: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    },
    {
      icon: Database,
      title: "Database & Migrations",
      desc: "Relational MySQL with custom native migration system (no ORM)",
      color: "text-blue-400 bg-blue-500/15 border-blue-500/30",
    },
    {
      icon: ShieldCheck,
      title: "Authentication & Security",
      desc: "JWT, Google OAuth, HTTP-only cookies & role-based access",
      color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
    },
    {
      icon: Cpu,
      title: "AI-Assisted Workflow",
      desc: "Ollama + Continue.dev for local LLM review & SQL optimization",
      color: "text-pink-400 bg-pink-500/15 border-pink-500/30",
    },
  ];

  // Features list from project data or fallback
  const featureList =
    project.features && project.features.length > 0
      ? project.features
      : [
        "AI-ready scalable bookstore ecosystem",
        "Modern responsive UI/UX across desktop and mobile",
        "Author profiles with blogs and community features",
        "Secure JWT and Google OAuth authentication",
        "Cookie-based authentication & session management",
        "Dynamic book discovery with advanced filtering",
        "Wishlist, cart & checkout management workflows",
        "Custom MySQL migration system without ORM dependency",
        "API-first backend designed for future mobile apps",
        "Local AI-assisted workflows using Ollama + Continue",
      ];

  return (
    <div
      data-aos="fade-up"
      className="w-[96%] lg:w-[94%] xl:w-[90%] mx-auto my-8 sm:my-12 p-4 sm:p-8 lg:p-12 rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] custom-shadow bg-[#080810db] backdrop-blur-xl border border-white/10 relative overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 relative z-10">
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-[1.3rem] md:text-[1.4rem] font-semibold">
            <Sparkles size={16} className="text-purple-400" />
            <span>Featured Production Project</span>
          </div>

          {project.category && (
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[1.3rem] md:text-[1.4rem] font-medium">
              {project.category}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[1.3rem] md:text-[1.4rem] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{project.status || "In Progress"}</span>
          </div>

          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[1.3rem] font-medium">
            Production Grade
          </span>
        </div>
      </div>

      {/* Main Title & Tagline */}
      <div className="mt-8 mb-10 relative z-10">
        <h3 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold text-white tracking-tight leading-[1.3] mb-4">
          {project.title}
        </h3>
        <p className="text-xl sm:text-2xl lg:text-[1.8rem] text-purple-200/90 leading-[1.7] max-w-4xl">
          {project.description}
        </p>
      </div>

      {/* Split Grid Content: Left Visuals & CTAs | Right Deep Dive & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
        {/* Left Column: Interactive Mockup & CTAs (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          {/* Browser-style Window Mockup */}
          <div className="rounded-3xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
            {/* Window Title Bar */}
            <div className="px-4 py-3 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="text-gray-400 text-[1.2rem] font-mono px-3 py-0.5 rounded-full bg-white/5 border border-white/10 truncate max-w-[20rem]">
                nxtchapter.netlify.app
              </div>
              <div className="w-12"></div>
            </div>

            {/* Main Screenshot Preview */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img
                src={project.image || "/BookStore.png"}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 sm:py-4 px-3 sm:px-6 rounded-full custom-button text-white font-semibold text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] flex items-center justify-center gap-2 sm:gap-2.5 shadow-lg active:scale-95 transition-all cursor-pointer text-center whitespace-nowrap min-w-0"
              >
                <span>Live Demo</span>
                <ExternalLink size={17} className="shrink-0" />
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noreferrer"
                className="py-3.5 sm:py-4 px-3 sm:px-6 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/20 hover:border-purple-500/50 text-white font-semibold text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] flex items-center justify-center gap-2 sm:gap-3 transition-all active:scale-95 cursor-pointer text-center whitespace-nowrap min-w-0"
              >
                <img
                  src="/github.png"
                  alt="GitHub"
                  className="w-[2.6rem] h-[2.6rem] sm:w-[3.2rem] sm:h-[3.2rem] object-contain shrink-0"
                />
                <span>Source Code</span>
              </a>
            )}

            {project.Docs && (
              <a
                href="https://github.com/mohitanand744/Book-Store-React-MySQL-/archive/refs/heads/main.zip"
                download
                className="col-span-2 py-3.5 px-4 sm:px-6 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-gray-300 hover:text-white text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] font-medium flex items-center justify-center gap-2 transition-all cursor-pointer text-center whitespace-nowrap"
              >
                <Download size={17} className="text-purple-400 shrink-0" />
                <span>Download Project ZIP Package</span>
              </a>
            )}
          </div>

          {/* Architecture Pillars (Scrollable) */}
          <div className="p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <h4 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-bold text-white flex items-center gap-2.5">
                  <Layers size={18} className="text-purple-400 shrink-0" />
                  <span>System & Architecture Pillars</span>
                </h4>
                <span className="hidden sm:inline-block shrink-0 whitespace-nowrap text-[1.2rem] px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                  {architectureHighlights.length} Pillars
                </span>
              </div>

              {/* Mobile count + Arrows row */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <span className="sm:hidden inline-block shrink-0 whitespace-nowrap text-[1.2rem] px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                  {architectureHighlights.length} Pillars
                </span>

                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <img
                    loading="lazy"
                    className="w-[3.2rem] sm:w-[3.4rem] md:w-[3.6rem] active:scale-90 transition-all duration-200 ease-linear rotate-[180deg] cursor-pointer"
                    src="/rightArrow.png"
                    alt="Scroll Left"
                    onClick={() => scrollPillars("left")}
                  />
                  <img
                    loading="lazy"
                    className="w-[3.2rem] sm:w-[3.4rem] md:w-[3.6rem] active:scale-90 transition-all duration-200 ease-linear cursor-pointer"
                    src="/rightArrow.png"
                    alt="Scroll Right"
                    onClick={() => scrollPillars("right")}
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Pillars Container */}
            <div
              ref={pillarsContainerRef}
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
              className="flex items-stretch gap-3.5 overflow-x-auto hide-ScrollBar py-1.5 scroll-smooth select-none"
            >
              {architectureHighlights.map((arch, idx) => {
                const IconComponent = arch.icon;
                return (
                  <div
                    key={idx}
                    className="w-[22rem] sm:w-[26rem] max-w-[80vw] shrink-0 p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-purple-500/30 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${arch.color}`}
                      >
                        <IconComponent size={16} />
                      </div>
                      <span className="text-white text-[1.4rem] font-semibold">
                        {arch.title}
                      </span>
                    </div>
                    <p className="text-gray-400 text-[1.3rem] leading-snug">
                      {arch.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Deep Dive, Features & Tech Stack (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* Detailed Description */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10">
            <h4 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold highLight-text mb-4">
              Detailed Architecture & Engineering
            </h4>
            <p className="text-gray-300 text-[1.5rem] md:text-[1.7rem] leading-[1.8] font-normal">
              {isReadMore || !isTruncatable
                ? fullDescription
                : `${fullDescription.slice(0, maxDescLength)}... `}
              {isTruncatable && (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="cursor-pointer highLight-text hover:underline ml-1.5 font-semibold inline-block"
                >
                  {isReadMore ? "read less" : "read more"}
                </span>
              )}
            </p>
          </div>

          {/* Core System Features (Scrollable) */}
          <div className="p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <h4 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-bold text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>Key Features & Engineering Highlights</span>
                </h4>
                <span className="hidden sm:inline-block shrink-0 whitespace-nowrap text-[1.2rem] px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                  {featureList.length} Highlights
                </span>
              </div>

              {/* Mobile count + Arrows row */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <span className="sm:hidden inline-block shrink-0 whitespace-nowrap text-[1.2rem] px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                  {featureList.length} Highlights
                </span>

                <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                  <img
                    loading="lazy"
                    className="w-[3.2rem] sm:w-[3.4rem] md:w-[3.6rem] active:scale-90 transition-all duration-200 ease-linear rotate-[180deg] cursor-pointer"
                    src="/rightArrow.png"
                    alt="Scroll Left"
                    onClick={() => scrollFeatures("left")}
                  />
                  <img
                    loading="lazy"
                    className="w-[3.2rem] sm:w-[3.4rem] md:w-[3.6rem] active:scale-90 transition-all duration-200 ease-linear cursor-pointer"
                    src="/rightArrow.png"
                    alt="Scroll Right"
                    onClick={() => scrollFeatures("right")}
                  />
                </div>
              </div>
            </div>

            {/* Scrollable Features Container (2 Compact Rows) */}
            <div
              ref={featuresContainerRef}
              onWheel={(e) => {
                if (e.deltaY !== 0) {
                  e.currentTarget.scrollLeft += e.deltaY;
                }
              }}
              className="grid grid-rows-2 grid-flow-col gap-3 overflow-x-auto hide-ScrollBar py-1.5 scroll-smooth select-none"
            >
              {featureList.map((feat, idx) => (
                <div
                  key={idx}
                  className="w-[26rem] sm:w-[30rem] md:w-[32rem] max-w-[85vw] shrink-0 flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <CheckCircle2
                    size={18}
                    className="text-purple-400 shrink-0 mt-0.5"
                  />
                  <span className="text-gray-200 text-[1.4rem] md:text-[1.5rem] leading-[1.6]">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Core Competencies (Scrollable) */}
          {project.skills && project.skills.length > 0 && (
            <div className="p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <h4 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-bold text-white">
                    Technologies & Engineering Stack
                  </h4>
                  <span className="hidden sm:inline-block shrink-0 whitespace-nowrap text-[1.2rem] px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                    {project.skills.length} Skills
                  </span>
                </div>

                {/* Mobile count + Arrows row */}
                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                  <span className="sm:hidden inline-block shrink-0 whitespace-nowrap text-[1.2rem] px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-semibold">
                    {project.skills.length} Skills
                  </span>

                  <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                    <img
                      loading="lazy"
                      className="w-[3.2rem] sm:w-[3.4rem] md:w-[3.6rem] active:scale-90 transition-all duration-200 ease-linear rotate-[180deg] cursor-pointer"
                      src="/rightArrow.png"
                      alt="Scroll Left"
                      onClick={() => scrollSkills("left")}
                    />
                    <img
                      loading="lazy"
                      className="w-[3.2rem] sm:w-[3.4rem] md:w-[3.6rem] active:scale-90 transition-all duration-200 ease-linear cursor-pointer"
                      src="/rightArrow.png"
                      alt="Scroll Right"
                      onClick={() => scrollSkills("right")}
                    />
                  </div>
                </div>
              </div>

              {/* Scrollable Container (2 Compact Rows) */}
              <div
                ref={skillsContainerRef}
                onWheel={(e) => {
                  if (e.deltaY !== 0) {
                    e.currentTarget.scrollLeft += e.deltaY;
                  }
                }}
                className="grid grid-rows-2 grid-flow-col gap-2.5 overflow-x-auto hide-ScrollBar py-1.5 scroll-smooth select-none"
              >
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="shrink-0 whitespace-nowrap px-4 py-2 rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white text-[1.3rem] md:text-[1.4rem] font-medium transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;


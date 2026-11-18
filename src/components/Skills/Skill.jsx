import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Wrench,
  Search,
  X,
  Layers,
  Sparkles,
  Cpu,
  Database,
  Terminal,
  Zap,
  ArrowRight,
} from "lucide-react";
import useContextData from "../../Hook/useContextData";
import SectionHeading from "../common/Heading/SectionHeading";

// Core Technology Architecture Pillars
const corePillars = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
    borderGlow: "hover:border-cyan-500/50 hover:shadow-[0_10px_35px_rgba(6,182,212,0.25)]",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    badge: "18 Technologies",
    description:
      "Modern SPA/SSR architectures, reusable component patterns, state management, and WCAG accessibility standards.",
    highlights: [
      "React.js & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Framer Motion",
      "Responsive UI/UX",
    ],
  },
  {
    id: "backend",
    title: "Backend & Scalability",
    icon: Server,
    gradient: "from-purple-500 to-pink-500",
    borderGlow: "hover:border-purple-500/50 hover:shadow-[0_10px_35px_rgba(168,85,247,0.25)]",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    badge: "24 Technologies",
    description:
      "Modular API-first services, robust JWT/OAuth authentication, database migrations, and SQL schema optimization.",
    highlights: [
      "Node.js & Express",
      "RESTful APIs",
      "MySQL & PostgreSQL",
      "JWT & Cookie Auth",
      "Database Migrations",
      "Stream Processing",
    ],
  },
  {
    id: "tools",
    title: "Tooling, DevOps & AI",
    icon: Terminal,
    gradient: "from-emerald-500 to-teal-500",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-[0_10px_35px_rgba(16,185,129,0.25)]",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    badge: "23 Tools & Workflows",
    description:
      "Modern engineering workflows, local AI assistant tooling, version control, automated deployments, and debugging.",
    highlights: [
      "Local AI (Ollama + Continue)",
      "Docker Containerization",
      "Git & GitHub Workflows",
      "Postman API Testing",
      "AWS & Cloud Services",
      "Vercel & Netlify CI/CD",
    ],
  },
];

// Category filter tabs
const categories = [
  { id: "all", label: "All Stack", icon: Layers, countKey: "all" },
  { id: "frontend", label: "Frontend", icon: Code2, countKey: "frontend" },
  { id: "backend", label: "Backend", icon: Server, countKey: "backend" },
  { id: "tools", label: "Tools & DevOps", icon: Wrench, countKey: "tools" },
];

const Skill = () => {
  const { skills } = useContextData();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const filterSectionRef = useRef(null);

  // Smooth scroll to filter section when selecting a pillar
  const handlePillarClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");

    setTimeout(() => {
      if (filterSectionRef.current) {
        const yOffset = -90; // offset for sticky navbar
        const y =
          filterSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }
    }, 60);
  };

  // Category counts
  const counts = useMemo(() => {
    return {
      all: skills.length,
      frontend: skills.filter((s) => s.category === "frontend").length,
      backend: skills.filter((s) => s.category === "backend").length,
      tools: skills.filter((s) => s.category === "tools").length,
    };
  }, [skills]);

  // Filter skills based on category and live search
  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return skills.filter((skill) => {
      const matchesCategory =
        selectedCategory === "all" || skill.category === selectedCategory;
      const matchesSearch =
        query === "" ||
        skill.title.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [skills, selectedCategory, searchQuery]);

  // Skill Card Component with hover expansion, 3D flip effects, and scale
  const SkillCard = ({ skill }) => (
    <motion.div
      key={skill.title}
      layout
      initial={{ opacity: 0, scale: 0.88, rotateY: 35 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 0.88, rotateY: -35 }}
      transition={{
        type: "spring",
        stiffness: 360,
        damping: 24,
        duration: 0.3,
      }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="relative w-full h-[14rem] sm:h-[15.5rem] flex items-center justify-center hover:z-50"
    >
      <div
        className="group absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hover:w-max hover:min-w-full hover:max-w-[min(32rem,calc(100vw-3rem))] z-10 hover:z-50 hover:-translate-y-2.5 hover:scale-105 sm:hover:scale-108 flex flex-col items-center justify-center px-4 sm:px-6 py-3.5 sm:py-4 rounded-3xl bg-[#090717]/90 hover:bg-[#120d2c]/98 border border-white/10 hover:border-purple-500/60 backdrop-blur-xl transition-all duration-300 ease-out hover:shadow-[0_20px_45px_rgba(147,51,234,0.35),0_0_20px_rgba(236,72,153,0.2)] select-none cursor-default"
      >
        {/* Ambient neon aura blooming behind card */}
        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-cyan-500/25 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 pointer-events-none" />

        {/* Top edge glowing light beam */}
        <div className="absolute -top-px inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Ambient inner gradient glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/10 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Icon wrapper with 3D Holographic Coin Flip on hover */}
        <div
          style={{ perspective: "800px" }}
          className="relative w-[4.4rem] h-[4.4rem] sm:w-[5.2rem] sm:h-[5.2rem] flex items-center justify-center p-2 rounded-2xl bg-white/[0.04] border border-white/5 group-hover:border-purple-500/40 group-hover:bg-purple-500/15 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shrink-0 shadow-sm group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]"
        >
          <img
            loading="lazy"
            className="object-contain max-w-full max-h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(360deg)] drop-shadow-md"
            src={skill.image}
            alt={skill.title}
            onError={(e) => {
              e.target.style.opacity = "0.5";
            }}
          />
        </div>

        {/* Title: Truncated by default, expands to full text with radiant sheen on hover */}
        <p className="mt-2.5 text-center text-white font-semibold text-[1.35rem] sm:text-[1.5rem] tracking-wide transition-all duration-300 truncate w-full max-w-full group-hover:w-auto group-hover:max-w-none group-hover:whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-100 group-hover:to-pink-200 px-1">
          {skill.title}
        </p>

        {/* Category micro chip with 3D flip & glow */}
        <span
          style={{ perspective: "600px" }}
          className="mt-1 px-2.5 py-0.5 rounded-full text-[1rem] font-medium uppercase tracking-wider bg-white/[0.04] text-gray-400 group-hover:text-pink-200 group-hover:bg-purple-500/20 group-hover:border-purple-400/40 group-hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] border border-white/5 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(360deg)] shrink-0 whitespace-nowrap"
        >
          {skill.category}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section
      id="Skills"
      className="px-4 sm:px-6 md:px-10 mt-28 md:mt-40 skills h-fit max-w-7xl mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mx-auto max-w-3xl mb-14">
        <SectionHeading text={"Skills & Engineering Stack"} />
        <p className="text-[1.6rem] md:text-[2rem] text-gray-300 mt-4 leading-relaxed font-normal">
          Full-Stack expertise spanning production-grade frontend architectures,
          modular backend APIs, relational databases, and modern AI-assisted engineering workflows.
        </p>
      </div>

      {/* Core Engineering Pillars (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {corePillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              onClick={() => handlePillarClick(pillar.id)}
              className={`group relative p-6 sm:p-7 rounded-[2.2rem] bg-[#090717]/90 border border-white/10 ${pillar.borderGlow} backdrop-blur-xl transition-all duration-300 cursor-pointer flex flex-col justify-between`}
            >
              <div>
                {/* Top Row: Icon Badge & Skills Count */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center border ${pillar.iconBg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-[2.2rem] h-[2.2rem]" />
                  </div>
                  <span className="text-[1.15rem] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/25 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
                    {pillar.badge}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="text-[2rem] font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[1.3rem] text-gray-300/90 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Highlight Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillar.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 rounded-xl text-[1.15rem] font-medium bg-white/[0.04] text-gray-200 border border-white/5 group-hover:border-purple-500/20 group-hover:bg-white/[0.07] transition-all"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Hint / Button */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handlePillarClick(pillar.id);
                }}
                className="flex items-center justify-between text-[1.25rem] font-semibold text-purple-400 group-hover:text-purple-300 transition-colors pt-3 border-t border-white/10 cursor-pointer"
              >
                <span>Filter {pillar.title}</span>
                <ArrowRight className="w-[1.6rem] h-[1.6rem] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Control Bar: Search Input & Category Filter Tabs */}
      <div
        ref={filterSectionRef}
        id="skills-filter-section"
        className="flex flex-col lg:flex-row items-center justify-between gap-5 mb-12 p-3 sm:p-4 rounded-3xl bg-[#090717]/80 border border-white/10 backdrop-blur-2xl scroll-mt-28"
      >
        {/* Category Tabs */}
        <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-3 w-full lg:w-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-2xl text-[1.3rem] sm:text-[1.4rem] font-semibold transition-all duration-300 outline-none ${
                  isSelected
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/80 to-pink-600/80 shadow-[0_0_20px_rgba(168,85,247,0.4)] -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <Icon className="w-[1.6rem] h-[1.6rem]" />
                <span>{cat.label}</span>
                <span
                  className={`text-[1.1rem] px-2 py-0.5 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white font-bold"
                      : "bg-white/[0.06] text-gray-400"
                  }`}
                >
                  {counts[cat.countKey]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Bar */}
        <div className="relative w-full lg:w-[320px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[1.8rem] h-[1.8rem] text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 65+ technologies..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-400 text-[1.3rem] outline-none focus:border-purple-500/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Results Meta Info (Active when search or category filtered) */}
      {(searchQuery.trim() !== "" || selectedCategory !== "all") && (
        <div className="flex items-center justify-between px-3 mb-8">
          <p className="text-[1.35rem] text-gray-300">
            Showing{" "}
            <span className="font-bold text-white text-[1.5rem]">
              {filteredSkills.length}
            </span>{" "}
            {filteredSkills.length === 1 ? "technology" : "technologies"}
            {searchQuery && (
              <span>
                {" "}
                matching &ldquo;<span className="text-purple-300">{searchQuery}</span>&rdquo;
              </span>
            )}
            {selectedCategory !== "all" && (
              <span> in {selectedCategory.toUpperCase()}</span>
            )}
          </p>

          {(searchQuery || selectedCategory !== "all") && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[1.25rem] text-purple-400 hover:text-pink-300 underline underline-offset-4 transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      )}

      {/* Skills Grid Display */}
      {selectedCategory === "all" && searchQuery.trim() === "" ? (
        /* Categorized Sections View when "All" is active and no search query */
        <div className="space-y-16">
          {["frontend", "backend", "tools"].map((catKey) => {
            const catSkills = skills.filter((s) => s.category === catKey);
            const titleMap = {
              frontend: "Frontend Ecosystem",
              backend: "Backend & Database Architecture",
              tools: "Developer Tooling & Infrastructure",
            };
            const iconMap = {
              frontend: Code2,
              backend: Server,
              tools: Wrench,
            };
            const CategoryIcon = iconMap[catKey];

            return (
              <div key={catKey} className="relative">
                {/* Category Section Header */}
                <div className="flex items-center justify-between gap-3 mb-8 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-[3.6rem] h-[3.6rem] sm:w-[4rem] sm:h-[4rem] rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                      <CategoryIcon className="w-[1.8rem] h-[1.8rem] sm:w-[2rem] sm:h-[2rem]" />
                    </div>
                    <h3 className="text-[1.8rem] sm:text-[2.2rem] font-bold text-white tracking-wide">
                      {titleMap[catKey]}
                    </h3>
                  </div>
                  <span className="shrink-0 whitespace-nowrap text-[1.15rem] sm:text-[1.25rem] font-semibold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-3.5 py-1 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                    {catSkills.length} Skills
                  </span>
                </div>

                {/* Grid of Cards */}
                <motion.div
                  layout
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5"
                >
                  {catSkills.map((skill) => (
                    <SkillCard key={skill.title} skill={skill} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Filtered Grid View (when specific tab or search is active) */
        <AnimatePresence mode="popLayout">
          {filteredSkills.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5"
            >
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.title} skill={skill} />
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 px-6 rounded-3xl bg-[#090717]/60 border border-white/10 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-4 text-purple-300">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="text-[1.8rem] font-bold text-white mb-2">
                No matching technologies found
              </h4>
              <p className="text-[1.3rem] text-gray-400 mb-6 font-normal">
                No skills matched &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-[1.3rem] shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all"
              >
                Clear Search & Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
};

export default Skill;

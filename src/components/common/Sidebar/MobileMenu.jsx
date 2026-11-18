import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Monitor,
  Cpu,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Send,
  ChevronRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import useContextData from "../../../Hook/useContextData";

const menuItems = [
  {
    name: "Home",
    id: "Home",
    desc: "Overview & Introduction",
    icon: Home,
    color: "from-cyan-500 to-blue-500",
    accent: "text-cyan-400",
    glow: "rgba(6,182,212,0.35)",
  },
  {
    name: "About Me",
    id: "About",
    desc: "Story, Stack & Philosophy",
    icon: User,
    color: "from-purple-500 to-indigo-500",
    accent: "text-purple-400",
    glow: "rgba(168,85,247,0.35)",
  },
  {
    name: "Workplace",
    id: "Workplace",
    desc: "Local AI & Engineering Setup",
    icon: Monitor,
    color: "from-pink-500 to-purple-500",
    accent: "text-pink-400",
    glow: "rgba(236,72,153,0.35)",
  },
  {
    name: "Skills",
    id: "Skills",
    desc: "Tech Stack & Core Competencies",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    accent: "text-emerald-400",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    name: "Experience",
    id: "Experience",
    desc: "Cronix & BazaarNxt Roles",
    icon: Briefcase,
    color: "from-amber-500 to-orange-500",
    accent: "text-amber-400",
    glow: "rgba(245,158,11,0.35)",
  },
  {
    name: "Education",
    id: "Education",
    desc: "Self-Taught Path & Foundations",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    accent: "text-blue-400",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    name: "Projects",
    id: "Projects",
    desc: "Full-Stack & Production Apps",
    icon: FolderGit2,
    color: "from-fuchsia-500 to-pink-500",
    accent: "text-fuchsia-400",
    glow: "rgba(217,70,239,0.35)",
  },
  {
    name: "Contact",
    id: "Contact",
    desc: "Get in Touch & Collaborate",
    icon: Send,
    color: "from-rose-500 to-pink-500",
    accent: "text-rose-400",
    glow: "rgba(244,63,94,0.35)",
  },
];

// Unique 3D Glass Spring Card Variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: -28,
    scale: 0.92,
    rotateX: -10,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 26,
      stiffness: 340,
      mass: 0.85,
      staggerChildren: 0.035,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    rotateX: -6,
    filter: "blur(8px)",
    transition: {
      duration: 0.22,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

// Cascading Staggered Items Variant
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.95,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 28,
    },
  },
  exit: {
    opacity: 0,
    x: -12,
    transition: { duration: 0.12 },
  },
};

// Header Pill Pop Variant
const headerPillVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 26,
    },
  },
};

// Footer Slide-Up Variant
const footerVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 26,
      delay: 0.28,
    },
  },
};

const MobileMenu = () => {
  const { active, setActive, scrollToSection, setToggle, toggle } =
    useContextData();
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate("/");
    setActive(id);
    setToggle(false);
    scrollToSection(id);
  };

  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <>
          {/* Dark backdrop overlay with blur */}
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[99990] md:hidden"
            onClick={() => setToggle(false)}
          />

          {/* Floating Modern Island Card */}
          <motion.nav
            key="mobile-card"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
            aria-label="Mobile Navigation"
            className="fixed top-[8.2rem] inset-x-3 sm:inset-x-6 max-w-[440px] mx-auto z-[99995] md:hidden rounded-[2.4rem] bg-[#090717]/95 border border-purple-500/35 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(139,92,246,0.25)] p-4 max-h-[calc(100vh-9.6rem)] overflow-y-auto hide-ScrollBar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Cyberpunk Glow Aura */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-pink-600/15 to-cyan-500/20 rounded-[2.5rem] blur-xl -z-10 opacity-70 pointer-events-none" />

            {/* Header Pill */}
            <motion.div
              variants={headerPillVariants}
              className="flex items-center justify-between px-3.5 py-2 rounded-2xl bg-gradient-to-r from-purple-900/30 via-purple-950/20 to-black/40 border border-purple-500/25 mb-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="text-[1.1rem] font-semibold text-cyan-300 tracking-wider uppercase">
                  Full Stack Developer
                </span>
              </div>
              <span className="text-[1.1rem] text-purple-300/80 font-medium tracking-wide">
                Mohit Anand
              </span>
            </motion.div>

            {/* Navigation List with Cascading Wave */}
            <div className="flex flex-col gap-1.5">
              {menuItems.map((item) => {
                const isActive = active === item.id;
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.015, x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => handleItemClick(item.id)}
                    className={`group relative flex items-center justify-between w-full px-3.5 py-2.5 rounded-2xl transition-colors duration-200 outline-none text-left ${
                      isActive
                        ? "bg-gradient-to-r from-purple-900/60 via-purple-800/35 to-pink-900/25 border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                        : "hover:bg-white/[0.05] border border-transparent text-gray-300 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Icon Badge with micro spring bounce */}
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className={`w-[3.6rem] h-[3.6rem] rounded-xl flex items-center justify-center shrink-0 border transition-all duration-200 ${
                          isActive
                            ? `bg-gradient-to-br ${item.color} text-white shadow-md border-transparent`
                            : `bg-white/[0.04] border-white/10 ${item.accent} group-hover:bg-white/[0.08]`
                        }`}
                      >
                        <Icon className="w-[1.8rem] h-[1.8rem]" />
                      </motion.div>

                      {/* Text Block */}
                      <div className="flex flex-col truncate">
                        <span
                          className={`text-[1.5rem] leading-tight font-semibold tracking-wide transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-gray-200 group-hover:text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="text-[1.1rem] text-gray-400 font-normal truncate mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </div>

                    {/* Right Arrow */}
                    <div className="flex items-center gap-2 shrink-0 ps-2">
                      <ChevronRight
                        className={`w-[1.6rem] h-[1.6rem] transition-all duration-200 ${
                          isActive
                            ? "text-pink-400 translate-x-1"
                            : "text-gray-500 group-hover:text-purple-300 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Actions & Social Footer */}
            <motion.div
              variants={footerVariants}
              className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between gap-2.5"
            >
              {/* Quick CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                href="https://topmate.io/mohit_anand_developer"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-[1.25rem] shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all"
              >
                <Sparkles className="w-[1.4rem] h-[1.4rem]" />
                <span>Book 1:1 Call</span>
              </motion.a>

              {/* Social Icons */}
              <div className="flex items-center gap-1.5">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  href="https://github.com/mohitanand744"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[3.4rem] h-[3.4rem] rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-[1.6rem] h-[1.6rem]" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  href="https://www.linkedin.com/in/mohit-anand-developer"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[3.4rem] h-[3.4rem] rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 hover:text-blue-300 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-[1.6rem] h-[1.6rem]" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  href="mailto:anandmohit744@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[3.4rem] h-[3.4rem] rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-rose-400 hover:text-rose-300 hover:border-rose-500/50 hover:bg-rose-500/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-[1.6rem] h-[1.6rem]" />
                </motion.a>
              </div>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

import React from "react";
import {
  ExternalLink,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const yOffset = -120; // Height of the navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  const navLinks = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Workplace", id: "Workplace" },
    { name: "Skills", id: "Skills" },
    { name: "Experience", id: "Experience" },
    { name: "Projects", id: "Projects" },
    { name: "Contact", id: "Contact" },
  ];

  const resourceLinks = [
    {
      name: "1:1 Mentorship / Call",
      url: "https://topmate.io/mohit_anand_developer",
      isExternal: true,
    },
    {
      name: "Download Resume",
      url: "/Mohit Anand.pdf",
      isExternal: true,
    },
    {
      name: "GitHub Profile",
      url: "https://github.com/mohitanand744",
      isExternal: true,
    },
    {
      name: "LinkedIn Network",
      url: "https://www.linkedin.com/in/mohit-anand-developer",
      isExternal: true,
    },
  ];

  const socialIcons = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohit-anand-developer",
      icon: "/linkedin.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/mohitanand744",
      icon: "/github.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/v3_beast_rider123/",
      icon: "/insta.png",
    },
    {
      name: "Email",
      url: "mailto:anandmohit744@gmail.com",
      icon: "/email.png",
    },
  ];

  return (
    <footer className="w-full mt-24">
      {/* Main Footer Container */}
      <div className="footer-content custom-shadow rounded-t-[2.5rem] md:rounded-t-[3.5rem] text-white w-full bg-[#080810ab] backdrop-blur-md border-t border-white/10 px-6 sm:px-10 lg:px-16 py-14 md:py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-[6.5rem] h-[6.5rem] md:w-20 md:h-20 rounded-full overflow-hidden p-1 border-2 border-purple-500/40 custom-shadow shrink-0">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full"
                  src="/footer1.jpg"
                  alt="Mohit Anand"
                />
              </div>
              <div>
                <h3 className="text-[2.2rem] md:text-3xl lg:text-[2.6rem] font-bold text-white">
                  Mohit Anand
                </h3>
                <p className="text-purple-400 text-[1.6rem] md:text-lg lg:text-[1.7rem] font-medium mt-1">
                  Full Stack Frontend Developer
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-[1.5rem] md:text-[1.7rem] leading-[1.7] max-w-md">
              Crafting scalable web applications, modern backend architectures,
              and AI-assisted workflows with a strong focus on clean code and performance.
            </p>

            {/* Social Icons Row */}
            <div className="pt-2 flex items-center gap-4">
              {socialIcons.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  className="w-[4.4rem] h-[4.4rem] md:w-[4.8rem] md:h-[4.8rem] rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 & 3: Navigation & Resources (Side-by-Side on Mobile/Tablet) */}
          <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Navigation Links */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="text-[1.8rem] md:text-[2rem] font-bold highLight-text uppercase tracking-wider mb-5">
                Navigation
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white text-[1.6rem] md:text-[1.7rem] leading-[1.7] transition-all duration-200 hover:translate-x-1 cursor-pointer block py-0.5"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Connect */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h4 className="text-[1.8rem] md:text-[2rem] font-bold highLight-text uppercase tracking-wider mb-5">
                Connect
              </h4>
              <ul className="space-y-4">
                {resourceLinks.map((r, idx) => (
                  <li key={idx}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-white text-[1.6rem] md:text-[1.7rem] leading-[1.7] transition-all duration-200 flex items-center gap-2 group justify-center sm:justify-start py-0.5"
                    >
                      <span>{r.name}</span>
                      <ExternalLink
                        size={16}
                        className="text-purple-400 opacity-70 group-hover:opacity-100 shrink-0"
                      />
                    </a>
                  </li>
                ))}
                <li className="flex items-center gap-2.5 justify-center sm:justify-start pt-1">
                  <span className="text-gray-400 text-[1.6rem] md:text-[1.7rem]">Tech Notes</span>
                  <span className="text-[1.2rem] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                    Soon
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter / Stay in the Loop (Coming Soon) */}
          <div className="md:col-span-6 lg:col-span-3 flex flex-col items-center md:items-start text-center md:text-left p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
              <h4 className="text-[2rem] md:text-[2.2rem] font-bold text-white">
                Stay in the Loop
              </h4>
              <span className="text-[1.3rem] px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold tracking-wide">
                Coming Soon
              </span>
            </div>
            <p className="text-gray-300 text-[1.5rem] md:text-[1.6rem] leading-[1.7] mb-5">
              Get updates on new project releases, technical blogs, and full-stack insights.
            </p>

            <div className="w-full p-4 sm:p-5 rounded-2xl bg-purple-500/[0.06] border border-purple-500/20 flex items-start gap-4 text-left">
              <div className="w-[4.2rem] h-[4.2rem] rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles size={20} className="text-purple-400" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-[1.6rem] md:text-[1.8rem] font-semibold">
                  Feature in Progress
                </p>
                <p className="text-gray-400 text-[1.4rem] md:text-[1.5rem] leading-[1.6] mt-1">
                  Automated newsletter & project update alerts will be live soon!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[1.5rem] md:text-[1.6rem] leading-[1.7] text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Mohit Anand</span>. All rights reserved.
          </p>

          <p className="text-gray-400">
            Designed & Engineered with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

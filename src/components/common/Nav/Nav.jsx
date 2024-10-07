import React, { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const yOffset = -230; // Height of the navbar
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className="flex justify-between items-center text-white px-16 py-8 backdrop-blur-sm bg-black/30 rounded-b-3xl fixed top-0 z-50 left-0 right-0">
      <div className="bg-white rounded-full" data-aos="fade-right">
        <img src="/logo2.png" className="w-[4rem] md:w-[5.7rem]" alt="logo" />
      </div>

      <nav
        className="hidden sm:flex gap-8 text-xl md:text-3xl"
        data-aos="fade-left"
      >
        <p
          onClick={() => {
            setActive("Home");
            scrollToSection("Home");
          }}
          className={`cursor-pointer navlinks ${
            active === "Home" ? "active" : ""
          }`}
        >
          Home
        </p>
        <p
          onClick={() => {
            setActive("About");
            scrollToSection("About");
          }}
          className={`cursor-pointer navlinks ${
            active === "About" ? "active" : ""
          }`}
        >
          About
        </p>
        <p
          onClick={() => {
            setActive("Skills");
            scrollToSection("Skills");
          }}
          className={`cursor-pointer navlinks ${
            active === "Skills" ? "active" : ""
          }`}
        >
          Skills
        </p>
        <p
          onClick={() => {
            setActive("Projects");
            scrollToSection("Projects");
          }}
          className={`cursor-pointer navlinks ${
            active === "Projects" ? "active" : ""
          }`}
        >
          Projects
        </p>
        <p
          onClick={() => {
            setActive("Experience");
            scrollToSection("Experience");
          }}
          className={`cursor-pointer navlinks ${
            active === "Experience" ? "active" : ""
          }`}
        >
          Experience
        </p>
        <p
          onClick={() => {
            setActive("Contact");
            scrollToSection("Contact");
          }}
          className={`cursor-pointer navlinks ${
            active === "Contact" ? "active" : ""
          }`}
        >
          Contact
        </p>
      </nav>

      {/* Mobile menu toggle */}
      <div className="block sm:hidden" data-aos="fade-left">
        <img
          className="menu w-[4rem] active:rotate-[360deg] transition-all duration-500 ease-linear"
          src="./menu.png"
          onClick={toggleMenu}
          alt="menu"
        />
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`fixed top-[7.5rem] list-none py-8 w-[90%] max-w-full flex sm:hidden flex-col gap-3 items-center justify-center text-3xl rounded-3xl custom-shadow backdrop-blur-sm bg-black/70 transition-all duration-300 ease-linear ${
          toggle
            ? "scale-100 opacity-100 right-6"
            : "scale-0 opacity-0 right-[-100%]"
        }`}
      >
        <p
          onClick={() => {
            setActive("Home");
            scrollToSection("Home");
          }}
          className={`cursor-pointer w-[13rem] text-center navlinks ${
            active === "Home" ? "active" : ""
          }`}
        >
          Home
        </p>
        <p
          onClick={() => {
            setActive("About");
            scrollToSection("About");
          }}
          className={`cursor-pointer w-[13rem] text-center navlinks ${
            active === "About" ? "active" : ""
          }`}
        >
          About
        </p>
        <p
          onClick={() => {
            setActive("Skills");
            scrollToSection("Skills");
          }}
          className={`cursor-pointer w-[13rem] text-center navlinks ${
            active === "Skills" ? "active" : ""
          }`}
        >
          Skills
        </p>
        <p
          onClick={() => {
            setActive("Projects");
            scrollToSection("Projects");
          }}
          className={`cursor-pointer w-[13rem] text-center navlinks ${
            active === "Projects" ? "active" : ""
          }`}
        >
          Projects
        </p>
        <p
          onClick={() => {
            setActive("Experience");
            scrollToSection("Experience");
          }}
          className={`cursor-pointer w-[13rem] text-center navlinks ${
            active === "Experience" ? "active" : ""
          }`}
        >
          Experience
        </p>
        <p
          onClick={() => {
            setActive("Contact");
            scrollToSection("Contact");
          }}
          className={`cursor-pointer w-[13rem] text-center navlinks ${
            active === "Contact" ? "active" : ""
          }`}
        >
          Contact
        </p>
      </div>
    </header>
  );
};

export default Nav;

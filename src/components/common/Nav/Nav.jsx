import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import useContextData from "../../../Hook/useContextData";

const Nav = () => {
  const {
    userInput,
    setUserInput,
    handleUserInput,
    active,
    setActive,
    scrollToSection,
    toggleMenu,
    toggle,
    setToggle,
    pathname,
  } = useContextData();
  const navigate = useNavigate();

  return (
    <header
      className="container custom-shadow sticky top-0 z-[99999] flex items-center justify-between w-full px-6 sm:px-10 h-[7.5rem] md:h-[8.5rem] text-white backdrop-blur-md bg-black/40 border-b-[1px] border-white/10 mb-2 rounded-b-3xl transition-all duration-300"
    >
      <div className="bg-white rounded-full">
        <Link
          to={"/"}
          onClick={() => {
            setActive("Home");
            setToggle(false);
            scrollToSection("Home");
          }}
        >
          <img
            src="/logo2.png"
            className="w-[4.2rem] md:w-[5.7rem]"
            alt="logo"
          />
        </Link>
      </div>

      <nav className="items-center hidden gap-8 text-xl font-medium md:flex md:text-3xl">
        <p
          onClick={() => {
            navigate("/");
            setActive("About");
            setToggle(false);
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
            navigate("/");
            setActive("Workplace");
            setToggle(false);
            scrollToSection("Workplace");
          }}
          className={`cursor-pointer navlinks ${
            active === "Workplace" ? "active" : ""
          }`}
        >
          Workplace
        </p>
        <p
          onClick={() => {
            navigate("/");
            setActive("Skills");
            setToggle(false);
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
            navigate("/");
            setActive("Experience");
            setToggle(false);
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
            navigate("/");
            setActive("Education");
            setToggle(false);
            scrollToSection("Education");
          }}
          className={`cursor-pointer navlinks ${
            active === "Education" ? "active" : ""
          }`}
        >
          Education
        </p>
        <p
          onClick={() => {
            navigate("/");
            setActive("Projects");
            setToggle(false);
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
            navigate("/");
            setActive("Contact");
            setToggle(false);
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
      <div className="block md:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          className={`flex items-center justify-center w-[4.4rem] h-[4.4rem] rounded-full border transition-all duration-300 cursor-pointer active:scale-90 ${
            toggle
              ? "bg-purple-900/40 border-pink-500/60 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.35)]"
              : "bg-purple-500/10 border-purple-500/30 text-white hover:border-purple-400"
          }`}
          aria-label={toggle ? "Close Navigation Menu" : "Open Navigation Menu"}
        >
          {toggle ? (
            <X className="w-[2.2rem] h-[2.2rem] text-pink-400 transition-transform duration-300 rotate-90" />
          ) : (
            <img
              className="menu w-full h-full object-cover rounded-full active:rotate-[360deg] transition-all duration-500 ease-linear cursor-pointer"
              src="/menu.png"
              alt="menu"
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Nav;

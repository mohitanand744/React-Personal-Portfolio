import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useContextData from "../../../Hook/useContextData";

const Nav = () => {
  const { userInput, setUserInput, handleUserInput } = useContextData();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();

  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const yOffset = -160; // Height of the navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="flex justify-between items-center text-white px-10 py-8 backdrop-blur-sm bg-black/30 rounded-b-3xl sticky top-0 z-50 w-full">
      <div className="bg-white rounded-full">
        <img src="/logo2.png" className="w-[4.5rem] md:w-[5.7rem]" alt="logo" />
      </div>
      {location.pathname === "/projects" && (
        <div className="absolute w-full right-0 left-0 top-0 sm:hidden">
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Search projects (e.g., 'React', 'Clone')"
            className="w-full outline-none border-none py-6 px-6  backdrop-blur-sm bg-black/80  custom-shadow3 text-xl md:text-2xl relative top-32 rounded-b-2xl left-0 right-0 "
          />
          {userInput !== "" && (
            <img
              className="absolute top-[9.5rem] right-5 w-[1.7rem] cursor-pointer"
              src="https://img.icons8.com/nolan/64/delete-sign.png"
              alt="delete-sign"
              onClick={() => setUserInput("")}
            />
          )}
        </div>
      )}
      <nav className="hidden sm:flex gap-8 text-xl md:text-3xl font-medium">
        {location.pathname === "/projects" ? (
          <>
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Search projects (e.g., 'React', 'Clone')"
                className="w-[30rem] md:w-[50rem] backdrop-blur-sm bg-black/60 outline-none border-none rounded-3xl py-5 px-6 custom-shadow3 md:text-2xl"
              />

              {userInput !== "" && (
                <img
                  className="absolute top-5 right-5 w-[1.8rem] cursor-pointer"
                  src="https://img.icons8.com/nolan/64/delete-sign.png"
                  alt="delete-sign"
                  onClick={() => setUserInput("")}
                />
              )}
            </div>
            <Link
              to={"/"}
              onClick={() => {
                setActive("Projects");
                setToggle(false);
                scrollToSection("Projects");
              }}
              className={`cursor-pointer navlinks flex items-center gap-3`}
            >
              Home
              <img
                className="w-[2rem] md:w-[3.6rem] rotate-45"
                src="https://img.icons8.com/nolan/64/logout-rounded.png"
                alt="logout-rounded"
              />
            </Link>
          </>
        ) : (
          <>
            <p
              onClick={() => {
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
          </>
        )}
      </nav>

      {/* Mobile menu toggle */}
      <div className="block sm:hidden">
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
        {location.pathname === "/projects" ? (
          <>
            <Link
              to={"/"}
              onClick={() => {
                setActive("Projects");
                setToggle(false);
                scrollToSection("Projects");
              }}
              className={`cursor-pointer navlinks flex items-center gap-3`}
            >
              Home
              <img
                className="w-[2rem] md:w-[3.6rem] rotate-45"
                src="https://img.icons8.com/nolan/64/logout-rounded.png"
                alt="logout-rounded"
              />
            </Link>
          </>
        ) : (
          <>
            <p
              onClick={() => {
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
          </>
        )}
      </div>
    </header>
  );
};

export default Nav;

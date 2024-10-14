import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useContextData from "../../../Hook/useContextData";

const Nav = () => {
  const { userInput, setUserInput, handleUserInput } = useContextData();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation();

    setToggle((toggle) => !toggle);
  };

  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const yOffset = -180; // Height of the navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="flex justify-between items-center text-white px-10 py-8 backdrop-blur-sm bg-black/30 rounded-b-3xl sticky top-0 z-50 w-full">
      <div className="bg-white rounded-full">
        <Link to={"/"}>
          <img
            src="/logo2.png"
            className="w-[4.5rem] md:w-[5.7rem]"
            alt="logo"
          />
        </Link>
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
          {userInput !== "" ? (
            <img
              className="absolute top-[9.4rem] right-5 w-[1.8rem] cursor-pointer"
              src="https://img.icons8.com/nolan/64/delete-sign.png"
              alt="delete-sign"
              onClick={() => setUserInput("")}
            />
          ) : (
            <img
              className="absolute top-[9.2rem] right-5 w-[1.8rem] cursor-pointer"
              src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-search-food-delivery-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
              alt="search"
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

              {userInput !== "" ? (
                <img
                  className="absolute top-5 right-5 w-[1.8rem] cursor-pointer"
                  src="https://img.icons8.com/nolan/64/delete-sign.png"
                  alt="delete-sign"
                  onClick={() => setUserInput("")}
                />
              ) : (
                <img
                  className="absolute top-5 right-5 w-[1.8rem] cursor-pointer"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-search-food-delivery-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                  alt="search"
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
        onClick={toggleMenu}
        className={`fixed -z-10 cursor-pointer top-[0rem] right-0  w-full backdrop-blur-lg bg-black/50 overflow-hidden transition-all duration-100 ${
          toggle ? "w-full h-[100vh]" : "w-0"
        }`}
      >
        <div
          className={`z-40 fixed top-[0rem] right-0 list-none  h-[100vh] flex sm:hidden flex-col gap-6  text-3xl rounded-s-3xl custom-shadow3 cursor-default  backdrop-blur-sm bg-black/80 transition-all duration-200 ease-linear overflow-hidden ${
            toggle ? "w-[68%] py-8 px-10" : "w-0 py-0 px-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="w-[2rem] cursor-pointer"
            src="https://img.icons8.com/nolan/64/delete-sign.png"
            alt="delete-sign"
            onClick={toggleMenu}
          />

          {location.pathname === "/projects" ? (
            <>
              <Link
                to={"/"}
                onClick={() => {
                  setActive("Projects");
                  setToggle(false);
                  scrollToSection("Projects");
                }}
                className={`cursor-pointer   flex items-center gap-3`}
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
                className={`cursor-pointer flex items-center gap-3 ${
                  active === "About" ? "active" : ""
                }`}
              >
                <img
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/user-default.png"
                  alt="user-default"
                />{" "}
                About
              </p>
              <p
                onClick={() => {
                  setActive("Skills");

                  setToggle(false);
                  scrollToSection("Skills");
                }}
                className={`cursor-pointer  flex items-center gap-3 ${
                  active === "Skills" ? "active" : ""
                }`}
              >
                <img
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/internship.png"
                  alt="user-settings"
                />{" "}
                Skills
              </p>
              <p
                onClick={() => {
                  setActive("Projects");

                  setToggle(false);
                  scrollToSection("Projects");
                }}
                className={`cursor-pointer   flex items-center gap-3 ${
                  active === "Projects" ? "active" : ""
                }`}
              >
                <img
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/group-of-projects.png"
                  alt="group-of-projects"
                />{" "}
                Projects
              </p>
              <p
                onClick={() => {
                  setActive("Experience");

                  setToggle(false);
                  scrollToSection("Experience");
                }}
                className={`cursor-pointer   flex items-center gap-3 ${
                  active === "Experience" ? "active" : ""
                }`}
              >
                <img
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/parse-resumes.png"
                  alt="parse-resumes"
                />{" "}
                Experience
              </p>
              <p
                onClick={() => {
                  setActive("Contact");

                  setToggle(false);
                  scrollToSection("Contact");
                }}
                className={`cursor-pointer  flex items-center gap-3 ${
                  active === "Contact" ? "active" : ""
                }`}
              >
                <img
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/new-post.png"
                  alt="new-post"
                />{" "}
                Contact
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;

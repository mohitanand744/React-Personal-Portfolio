import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useContextData from "../../../Hook/useContextData";

const Nav = () => {
  const {
    userInput,
    setUserInput,
    handleUserInput,
    active,
    setActive,
    scrollToSection,
  } = useContextData();
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation();

    setToggle((toggle) => !toggle);
  };

  useEffect(() => {
    userInput !== "" && scrollToSection("Home");
  }, [userInput]);

  return (
    <header className="flex justify-between items-center text-white px-10 py-8 backdrop-blur-sm bg-black/30 rounded-b-3xl sticky top-0 z-50 w-full">
      <div className="bg-white rounded-full">
        <Link to={"/"}>
          <img
            loading="lazy"
            src="/logo2.png"
            className="w-[4.5rem] md:w-[5.7rem]"
            alt="logo"
          />
        </Link>
      </div>
      {location.pathname === "/projects" ||
        (location.pathname === "/notes" && (
          <div className="absolute w-full  right-0 left-0 top-32 sm:hidden">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              placeholder="Search projects (e.g., 'React', 'Clone', 'Html')"
              className="w-full outline-none border-none py-6 px-6  backdrop-blur-sm bg-black/80  custom-shadow3 text-xl md:text-2xl relative rounded-b-2xl left-0 right-0 "
            />
            {userInput !== "" ? (
              <img
                loading="lazy"
                className="absolute  top-[1.3rem] right-6 w-[1.8rem] cursor-pointer"
                src="https://img.icons8.com/nolan/64/delete-sign.png"
                alt="delete-sign"
                onClick={() => setUserInput("")}
              />
            ) : (
              <img
                loading="lazy"
                className="absolute top-[1.3rem] right-6 w-[1.8rem] cursor-pointer"
                src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-search-food-delivery-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
                alt="search"
              />
            )}
          </div>
        ))}
      <nav className="hidden sm:flex gap-8 text-xl md:text-3xl font-medium">
        {location.pathname === "/projects" ? (
          <>
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Search projects (e.g., 'React', 'Clone', 'Html')"
                className="w-[38rem] md:w-[50rem] backdrop-blur-sm bg-black/60 outline-none border-none rounded-3xl py-5 px-6 custom-shadow3 md:text-2xl"
              />

              {userInput !== "" ? (
                <img
                  loading="lazy"
                  className="absolute top-5 right-5 w-[1.8rem] cursor-pointer"
                  src="https://img.icons8.com/nolan/64/delete-sign.png"
                  alt="delete-sign"
                  onClick={() => setUserInput("")}
                />
              ) : (
                <img
                  loading="lazy"
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
                loading="lazy"
                className="w-[2rem] md:w-[3.3rem]"
                src="https://img.icons8.com/nolan/64/home-page.png"
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
                setActive("Notes");
                setToggle(false);
                scrollToSection("Notes");
              }}
              className={`cursor-pointer navlinks ${
                active === "Notes" ? "active" : ""
              }`}
            >
              Dev Notes
            </p>
            <p
              onClick={() => {
                /* setActive("Blogs");
                setToggle(false);
                scrollToSection("Blogs");*/

                alert("Working on it...");
              }}
              className={`cursor-pointer navlinks ${
                active === "Blogs" ? "active" : ""
              }`}
            >
              Blogs
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
      <div
        className="block w-[4rem] h-[4rem] 
          sm:hidden cursor-pointer"
      >
        <img
          loading="lazy"
          className="menu w-full h-full object-cover  active:rotate-[360deg] transition-all duration-500 ease-linear cursor-pointer"
          src="./menu.png"
          alt="menu"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile dropdown menu */}
      <div
        onClick={toggleMenu}
        className={`fixed z-10 cursor-pointer top-0 h-[100vh] w-full backdrop-blur-lg bg-black/50 overflow-hidden ${
          toggle ? "left-0" : " -left-[100%]"
        }`}
      >
        <div
          className={` fixed top-0  list-none w-[26rem] py-8 px-10 h-[100%] flex sm:hidden flex-col gap-6 text-3xl rounded-e-3xl custom-shadow3 cursor-default backdrop-blur-sm bg-black/80 transition-all duration-200 ease-linear overflow-hidden ${
            toggle ? "left-0" : " -left-[100%]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            loading="lazy"
            className="w-[2rem] cursor-pointer absolute right-8 "
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
                className={`cursor-pointer mt-16  flex items-center gap-3`}
              >
                <img
                  loading="lazy"
                  className="w-[2.6rem]"
                  src="https://img.icons8.com/nolan/64/home-page.png"
                  alt="logout-rounded"
                />
                Home
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
                className={`cursor-pointer flex mt-16 gap-3 items-center ${
                  active === "About" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
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
                className={`cursor-pointer  flex  gap-3 items-center ${
                  active === "Skills" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
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
                className={`cursor-pointer   flex  gap-3 items-center ${
                  active === "Projects" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
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
                className={`cursor-pointer   flex  gap-3 items-center ${
                  active === "Experience" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/parse-resumes.png"
                  alt="parse-resumes"
                />{" "}
                Experience
              </p>
              <p
                onClick={() => {
                  setActive("Notes");
                  setToggle(false);
                  scrollToSection("Notes");
                }}
                className={`cursor-pointer flex gap-3 items-center ${
                  active === "Notes" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/create-new.png"
                  alt="new-post"
                />
                Dev Notes
              </p>
              <p
                onClick={() => {
                  /* setActive("Blogs");
                setToggle(false);
                scrollToSection("Blogs");*/

                  alert("Working on it...");
                }}
                className={`cursor-pointer flex gap-3 items-center ${
                  active === "Blogs" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
                  className="w-[3rem]"
                  src="https://img.icons8.com/nolan/64/bulleted-list.png"
                  alt="new-post"
                />
                Blogs
              </p>
              <p
                onClick={() => {
                  setActive("Contact");

                  setToggle(false);
                  scrollToSection("Contact");
                }}
                className={`cursor-pointer  flex  gap-3 items-center ${
                  active === "Contact" ? "active" : ""
                }`}
              >
                <img
                  loading="lazy"
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

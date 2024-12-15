import React from "react";
import useContextData from "../../../Hook/useContextData";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const { active, setActive, scrollToSection, toggleMenu, setToggle, toggle } =
    useContextData();

  return (
    <>
      {/* Mobile  menu */}
      <div
        onClick={toggleMenu}
        className={`fixed   cursor-pointer top-0 h-[100vh] transition-all duration-300  w-full md:hidden backdrop-blur-lg bg-black/50 overflow-hidden ${
          toggle ? "opacity-100 z-40" : " opacity-0 -z-50"
        }`}
      >
        <div
          className={`z-50 fixed top-0 text-white list-none w-full py-8 px-10 rounded-b-[5rem] flex md:hidden flex-col gap-6 text-3xl duration-200 custom-shadow3 cursor-default backdrop-blur-sm bg-black/80 transition-all ease-in overflow-hidden ${
            toggle ? "top-0" : " -top-[50rem]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="w-[2rem] cursor-pointer absolute right-8 "
            src="https://img.icons8.com/nolan/64/delete-sign.png"
            alt="delete-sign"
            onClick={toggleMenu}
          />

          <Link>
            <p
              onClick={() => {
                setActive("About");

                setToggle(false);
                scrollToSection("About");
              }}
              className={`cursor-pointer flex justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto mt-16 gap-16 items-center ${
                active === "About" ? "active" : ""
              }`}
            >
              About
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/user-default.png"
                alt="user-default"
              />{" "}
            </p>
          </Link>
          <Link>
            <p
              onClick={() => {
                setActive("Skills");

                setToggle(false);
                scrollToSection("Skills");
              }}
              className={`cursor-pointer justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto flex  gap-16 items-center ${
                active === "Skills" ? "active" : ""
              }`}
            >
              Skills
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/internship.png"
                alt="user-settings"
              />{" "}
            </p>
          </Link>
          <Link>
            <p
              onClick={() => {
                setActive("Projects");

                setToggle(false);
                scrollToSection("Projects");
              }}
              className={`cursor-pointer justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto  flex  gap-16 items-center ${
                active === "Projects" ? "active" : ""
              }`}
            >
              Projects
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/group-of-projects.png"
                alt="group-of-projects"
              />{" "}
            </p>
          </Link>
          <Link>
            <p
              onClick={() => {
                setActive("Experience");

                setToggle(false);
                scrollToSection("Experience");
              }}
              className={`cursor-pointer  justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto flex  gap-16 items-center ${
                active === "Experience" ? "active" : ""
              }`}
            >
              Experience
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/parse-resumes.png"
                alt="parse-resumes"
              />{" "}
            </p>
          </Link>
          <Link>
            <p
              onClick={() => {
                setActive("Notes");
                setToggle(false);
                scrollToSection("Notes");
              }}
              className={`cursor-pointer flex justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto gap-16 items-center ${
                active === "Notes" ? "active" : ""
              }`}
            >
              Dev Notes
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/create-new.png"
                alt="new-post"
              />
            </p>
          </Link>
          <Link>
            <p
              onClick={() => {
                /* setActive("Blogs");
                setToggle(false);
                scrollToSection("Blogs");*/

                alert("Working on it...");
              }}
              className={`cursor-pointer flex justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto gap-16 items-center ${
                active === "Blogs" ? "active" : ""
              }`}
            >
              Blogs
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/bulleted-list.png"
                alt="new-post"
              />
            </p>
          </Link>
          <Link>
            <p
              onClick={() => {
                setActive("Contact");

                setToggle(false);
                scrollToSection("Contact");
              }}
              className={`cursor-pointer justify-between px-3 w-[80%] sm:w-[50%] text-start mx-auto flex  gap-16 items-center ${
                active === "Contact" ? "active" : ""
              }`}
            >
              Contact
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/new-post.png"
                alt="new-post"
              />{" "}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

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
        className={`fixed z-40 cursor-pointer top-0 h-[100vh] w-full md:hidden backdrop-blur-lg bg-black/50 overflow-hidden ${
          toggle ? "left-0" : " -left-[100%]"
        }`}
      >
        <div
          className={`z-50 fixed top-0 text-white list-none w-[26rem] py-8 px-10 h-[100%] flex md:hidden flex-col gap-6 text-3xl rounded-e-3xl custom-shadow3 cursor-default backdrop-blur-sm bg-black/80 transition-all duration-200 ease-linear overflow-hidden ${
            toggle ? "left-0" : " -left-[100%]"
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
              className={`cursor-pointer flex mt-16 gap-3 items-center ${
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
          </Link>
          <Link>
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
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/internship.png"
                alt="user-settings"
              />{" "}
              Skills
            </p>
          </Link>
          <Link>
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
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/group-of-projects.png"
                alt="group-of-projects"
              />{" "}
              Projects
            </p>
          </Link>
          <Link>
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
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/parse-resumes.png"
                alt="parse-resumes"
              />{" "}
              Experience
            </p>
          </Link>
          <Link>
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
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/create-new.png"
                alt="new-post"
              />
              Dev Notes
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
              className={`cursor-pointer flex gap-3 items-center ${
                active === "Blogs" ? "active" : ""
              }`}
            >
              <img
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/bulleted-list.png"
                alt="new-post"
              />
              Blogs
            </p>
          </Link>
          <Link>
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
                className="w-[3rem]"
                src="https://img.icons8.com/nolan/64/new-post.png"
                alt="new-post"
              />{" "}
              Contact
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

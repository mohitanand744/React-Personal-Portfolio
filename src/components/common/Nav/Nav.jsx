import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    setToggle,
    pathname,
  } = useContextData();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between w-full px-10 py-8 text-white backdrop-blur-sm bg-black/30 rounded-b-3xl">
      <div className="bg-white rounded-full">
        <Link to={"/"}>
          <img
            src="/logo2.png"
            className="w-[4.5rem] md:w-[5.7rem]"
            alt="logo"
          />
        </Link>
      </div>
      {/* Mobile Searching... */}
      {/*  {pathname === "/projects" && (
        <div className="absolute left-0 right-0 block w-full top-32 sm:hidden">
          <input
            type="text"
            value={userInput}
            onChange={handleUserInput}
            placeholder="Search projects (e.g., 'React', 'Clone', 'Html')"
            className="relative left-0 right-0 w-full px-6 py-6 text-xl border-b-[1px]  rounded-2xl outline-none backdrop-blur-sm bg-black/80 custom-shadow2 md:text-2xl"
          />
          {userInput !== "" ? (
            <img
              className="absolute  top-[1.3rem] right-6 w-[1.8rem] cursor-pointer"
              src="https://img.icons8.com/nolan/64/delete-sign.png"
              alt="delete-sign"
              onClick={() => setUserInput("")}
            />
          ) : (
            <img
              className="absolute top-[1.3rem] right-6 w-[1.8rem] cursor-pointer"
              src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-search-food-delivery-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
              alt="search"
            />
          )}
        </div>
      )} */}
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
            navigate("/"); /* 
            setActive("Blogs");
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
      <div
        className="block w-[4.5rem] h-[4.5rem] 
          md:hidden cursor-pointer"
      >
        <img
          className="menu w-full h-full object-cover  active:rotate-[360deg] transition-all duration-500 ease-linear cursor-pointer"
          src="/menu.png"
          alt="menu"
          onClick={toggleMenu}
        />
      </div>
    </header>
  );
};

export default Nav;

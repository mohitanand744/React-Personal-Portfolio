import React, { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <header className="flex justify-between items-center text-white py-6">
      <div className="bg-white w-[4rem] md:w-[5.7rem] rounded-full">
        <img src="/logo2.png" className=" w-[4rem] md:w-[5.7rem]" />
      </div>

      <nav className="hidden sm:flex gap-8 text-xl md:text-3xl ">
        <p
          onClick={() => setActive("Home")}
          className={`cursor-pointer navlinks ${
            active === "Home" ? "active" : ""
          }`}
        >
          Home
        </p>
        <p
          onClick={() => setActive("About")}
          className={`cursor-pointer navlinks ${
            active === "About" ? "active" : ""
          }`}
        >
          About
        </p>
        <p
          onClick={() => setActive("Skills")}
          className={`cursor-pointer navlinks ${
            active === "Skills" ? "active" : ""
          }`}
        >
          Skills
        </p>
        <p
          onClick={() => setActive("Projects")}
          className={`cursor-pointer navlinks ${
            active === "Projects" ? "active" : ""
          }`}
        >
          Projects
        </p>
        <p
          onClick={() => setActive("Experience")}
          className={`cursor-pointer navlinks ${
            active === "Experience" ? "active" : ""
          }`}
        >
          Experience
        </p>
        <p
          onClick={() => setActive("Contact")}
          className={`cursor-pointer navlinks ${
            active === "Contact" ? "active" : ""
          }`}
        >
          Contact
        </p>
      </nav>
      <div className="block sm:hidden">
        <img
          className="menu w-[4rem] active:rotate-[360deg] transition-all duration-500 ease-linear"
          src="./menu.png"
          onClick={toggleMenu}
          alt="menu"
        />
      </div>

      <div
        className={`fixed top-[6.5rem] list-none py-8 w-[70%]  flex sm:hidden flex-col gap-3 items-center justify-center text-3xl rounded-3xl custom-shadow backdrop-blur-sm bg-black/40  ${
          toggle
            ? "scale-[1]  opacity-100 right-5"
            : "scale-0 opacity-0 right-[-100%]"
        } transition-all duration-300 ease-linear overflow-hidden`}
      >
        <p
          onClick={() => setActive("Home")}
          className={`cursor-pointer w-44 text-center navlinks ${
            active === "Home" ? "active" : ""
          }`}
        >
          Home
        </p>
        <p
          onClick={() => setActive("About")}
          className={`cursor-pointer w-44 text-center navlinks ${
            active === "About" ? "active" : ""
          }`}
        >
          About
        </p>
        <p
          onClick={() => setActive("Skills")}
          className={`cursor-pointer w-44 text-center navlinks ${
            active === "Skills" ? "active" : ""
          }`}
        >
          Skills
        </p>
        <p
          onClick={() => setActive("Projects")}
          className={`cursor-pointer w-44 text-center navlinks ${
            active === "Projects" ? "active" : ""
          }`}
        >
          Projects
        </p>
        <p
          onClick={() => setActive("Experience")}
          className={`cursor-pointer w-44 text-center navlinks ${
            active === "Experience" ? "active" : ""
          }`}
        >
          Experience
        </p>
        <p
          onClick={() => setActive("Contact")}
          className={`cursor-pointer w-44 text-center navlinks ${
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

/* 
 

<div className="dropdown-menu">
        <li>
          <a href="#home" className="s">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="./Pages/project.html">Projects</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#contact" className="btn">
            Contact
          </a>
        </li>
      </div> */

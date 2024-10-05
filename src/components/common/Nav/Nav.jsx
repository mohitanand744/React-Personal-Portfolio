import React, { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <header className="flex justify-between items-center text-white px-10 py-5">
      <div className="bg-white w-[3rem] md:w-[3.7rem] rounded-full">
        <img src="/logo2.png" className=" w-[3rem] md:w-[3.7rem]" />
      </div>

      <nav className="hidden sm:flex gap-5 text-lg md:text-xl ">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Skills</p>
        <p className="cursor-pointer">Projects</p>
        <p className="cursor-pointer">Experience</p>
        <p className="cursor-pointer">Contact</p>
      </nav>
      <div className="block sm:hidden">
        <img
          className="menu w-[2.8rem] active:rotate-[360deg] transition-all duration-500 ease-linear"
          src="./menu.png"
          onClick={toggleMenu}
          alt="menu"
        />
      </div>

      <div
        className={`fixed top-[5.5rem] list-none p-5 border border-slate-600 w-[70%] h-[15rem] flex sm:hidden flex-col gap-2 items-center justify-center text-lg rounded-3xl custom-shadow backdrop-blur-sm bg-black/30  ${
          toggle
            ? "scale-[1]  opacity-100 right-5"
            : "scale-50 opacity-0 right-[-100%]"
        } transition-all duration-500 ease-linear`}
      >
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

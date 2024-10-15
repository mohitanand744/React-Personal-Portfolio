import { createContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "./../Data/Skills.json";
import experience from "./../Data/Experience.json";
import projects from "./../Data/Projects.json";
import { useLocation } from "react-router-dom";

export const Store = createContext();

const StoreProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [userInput, setUserInput] = useState("");
  const [active, setActive] = useState("Home");

  const handleUserInput = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Store.Provider
        value={{
          skills,
          experience,
          projects,
          userInput,
          setUserInput,
          handleUserInput,
          active,
          setActive,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};

export default StoreProvider;

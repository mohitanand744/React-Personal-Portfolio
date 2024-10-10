import { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "./../Data/Skills.json";
import experience from "./../Data/Experience.json";
import projects from "./../Data/Projects.json";

export const Store = createContext();

const StoreProvider = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Store.Provider
        value={{
          skills,
          experience,
          projects,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};

export default StoreProvider;

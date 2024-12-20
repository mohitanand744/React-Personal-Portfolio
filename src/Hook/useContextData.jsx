import { useContext } from "react";
import { Store } from "../context/Store";

const useContextData = () => {
  const {
    skills,
    experience,
    projects,
    userInput,
    setUserInput,
    handleUserInput,
    isExpanded,
    setIsExpanded,
    active,
    setActive,
    scrollToSection,
    Notes,
    toggleMenu,
    toggle,
    setToggle,
    pathname,
  } = useContext(Store);

  return {
    skills,
    experience,
    projects,
    userInput,
    setUserInput,
    handleUserInput,
    isExpanded,
    setIsExpanded,
    active,
    setActive,
    scrollToSection,
    Notes,
    toggleMenu,
    toggle,
    setToggle,
    pathname,
  };
};

export default useContextData;

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
  };
};

export default useContextData;

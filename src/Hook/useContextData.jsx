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
  };
};

export default useContextData;

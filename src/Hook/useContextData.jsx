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
    userInputKeyWords,
    suggestions,
    setSuggestions,
    suggestionIndex,
    setSuggestionIndex,
    setShowSuggestionBox,
    showSuggestionsBox,
    suggestionBoxRef,
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
    userInputKeyWords,
    suggestions,
    setSuggestions,
    suggestionIndex,
    setSuggestionIndex,
    setShowSuggestionBox,
    showSuggestionsBox,
    suggestionBoxRef,
  };
};

export default useContextData;

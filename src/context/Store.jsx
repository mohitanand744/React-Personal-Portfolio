import { createContext, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import skills from "./../Data/Skills.json";
import experience from "./../Data/Experience.json";
import projects from "./../Data/Projects.json";
import Notes from "./../Data/Notes.json";
import { useLocation } from "react-router-dom";
import userInputKeyWords from "./../Data/UserInputsKeyWords.js";

export const Store = createContext();

const StoreProvider = ({ children }) => {
  const { pathname } = useLocation();
  const [userInput, setUserInput] = useState("");
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showSuggestionsBox, setShowSuggestionBox] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const suggestionBoxRef = useRef(null);

  const scrollIntoView = (index) => {
    if (suggestionBoxRef?.current) {
      const suggestionItems =
        suggestionBoxRef?.current.querySelectorAll(".suggestion-item");
      if (suggestionItems[index]) {
        suggestionItems[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const handleUserInput = (e) => {
    if (e.type === "change") {
      setUserInput(e.target.value.toLowerCase());
      setShowSuggestionBox(true);
    } else if (e.type === "keydown") {
      if (e.key === "ArrowDown") {
        setSuggestionIndex((prev) => {
          const newIndex = (prev + 1) % suggestions.length; // Cycle through suggestions
          scrollIntoView(newIndex);
          return newIndex;
        });
      } else if (e.key === "ArrowUp") {
        setSuggestionIndex((prev) => {
          const newIndex = (prev - 1 + suggestions.length) % suggestions.length; // Cycle backwards
          scrollIntoView(newIndex);
          return newIndex;
        });
      } else if (e.key === "Enter") {
        if (suggestionIndex >= 0 && suggestionIndex < suggestions.length) {
          setUserInput(suggestions[suggestionIndex]); // Set selected suggestion
        }
        setShowSuggestionBox(false); // Hide suggestion box after selection
        setSuggestions([]); // Clear suggestions
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
      easing: "ease-in-out",
    });
  }, []);

  // Scrolling to targeted Section
  const scrollToSection = (id) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;
      const yOffset = -100; // Height of the navbar
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
  };
  const toggleMenu = (e) => {
    e.stopPropagation();

    setToggle((toggle) => !toggle);
  };

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
          scrollToSection,
          Notes,
          toggleMenu,
          toggle,
          setToggle,
          pathname,
          userInputKeyWords,
          setShowSuggestionBox,
          showSuggestionsBox,
          suggestions,
          setSuggestions,
          suggestionIndex,
          setSuggestionIndex,
          suggestionBoxRef,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
};

export default StoreProvider;

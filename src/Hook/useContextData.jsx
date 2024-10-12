import React, { useContext } from "react";
import { Store } from "../context/Store";

const useContextData = () => {
  const {
    skills,
    experience,
    projects,
    userInput,
    setUserInput,
    handleUserInput,
  } = useContext(Store);

  return {
    skills,
    experience,
    projects,
    userInput,
    setUserInput,
    handleUserInput,
  };
};

export default useContextData;

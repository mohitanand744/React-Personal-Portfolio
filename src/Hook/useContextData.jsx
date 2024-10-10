import React, { useContext } from "react";
import { Store } from "../context/Store";

const useContextData = () => {
  const { skills, experience, projects } = useContext(Store);

  return { skills, experience, projects };
};

export default useContextData;

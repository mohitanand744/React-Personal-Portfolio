import React, { useContext } from "react";
import { Store } from "../context/Store";

const useContextData = () => {
  const { skills, experience } = useContext(Store);

  return { skills, experience };
};

export default useContextData;

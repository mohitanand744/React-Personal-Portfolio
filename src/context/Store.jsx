import { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Store.Provider value={{}}>{children}</Store.Provider>
    </>
  );
};

export default StoreProvider;

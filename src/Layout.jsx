import React, { useEffect, useState } from "react";
import Nav from "./components/common/Nav/Nav";
import { Outlet } from "react-router-dom";
import StoreProvider from "./context/Store";
import Loading from "./components/Loadings/Loading";
import Footer from "./components/common/Footers/Footer";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if the document is already loaded
    if (document.readyState === "complete") {
      setLoading(false); // If already loaded, no need to wait
    } else {
      window.addEventListener("load", handleLoad); // Otherwise, wait for load event
    }

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [loading]);

  return (
    <div>
      <StoreProvider>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Nav />
            <Outlet />
            <Footer />
          </>
        )}
      </StoreProvider>
    </div>
  );
};

export default Layout;

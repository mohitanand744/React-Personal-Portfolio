import React, { useEffect, useState } from "react";
import Nav from "./components/common/Nav/Nav";
import { Outlet } from "react-router-dom";
import StoreProvider from "./context/Store";
import Loading from "./components/Loadings/Loading";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoading(false);
    });
    return () => window.removeEventListener("load", () => {});
  }, []);

  return (
    <div>
      <StoreProvider>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Nav />
            <Outlet />
          </>
        )}
      </StoreProvider>
    </div>
  );
};

export default Layout;

import React, { useEffect, useState } from "react";
import Nav from "./components/common/Nav/Nav";
import { Outlet } from "react-router-dom";
import StoreProvider from "./context/Store";
import Loading from "./components/Loadings/Loading";
import Footer from "./components/common/Footers/Footer";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
            <Footer />
          </>
        )}
      </StoreProvider>
    </div>
  );
};

export default Layout;

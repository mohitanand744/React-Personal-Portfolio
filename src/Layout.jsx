import React from "react";
import Nav from "./components/common/Nav/Nav";
import { Outlet } from "react-router-dom";
import StoreProvider from "./context/Store";
import Footer from "./components/common/Footers/Footer";

const Layout = () => {
  return (
    <div>
      <StoreProvider>
        <Nav />
        <Outlet />
        <Footer />
      </StoreProvider>
    </div>
  );
};

export default Layout;

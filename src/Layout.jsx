import React from "react";
import Nav from "./components/common/Nav/Nav";
import { Outlet } from "react-router-dom";
import StoreProvider from "./context/Store";

const Layout = () => {
  return (
    <div>
      <StoreProvider>
        <Nav />
        <Outlet />
      </StoreProvider>
    </div>
  );
};

export default Layout;

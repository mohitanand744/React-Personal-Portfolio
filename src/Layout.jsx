import React from "react";
import Nav from "./components/common/Nav/Nav";
import { Outlet } from "react-router-dom";
import StoreProvider from "./context/Store";
import Footer from "./components/common/Footers/Footer";
import RealWorldExperience from "./components/RealWorldExperineceData/RealWorldExperience";
import MobileMenu from "./components/common/Sidebar/MobileMenu";

const Layout = () => {
  return (
    <div>
      <StoreProvider>
        <Nav />
        {/* ! Sidebar  */}
        <MobileMenu />
        <RealWorldExperience />
        <Outlet />
        <Footer />
      </StoreProvider>
    </div>
  );
};

export default Layout;

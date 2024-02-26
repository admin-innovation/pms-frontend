import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#F1F4F9] h-[100vh] p-[40px] flex">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;

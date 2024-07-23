import React from "react";
import { NavLink, redirect, Navigate } from "react-router-dom";
import { Outlet, Routes, Route } from "react-router-dom";
import Settings from "../pages/Settings";
import About from "../pages/About";
import Support from "../pages/Support";

const SettingsLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[45px]     bg-[white] rounded-[5px] flex  text-center">
        <NavLink
          to="account"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[30%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Account
        </NavLink>
        <NavLink
          to="support"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[30%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Help and Support
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[30%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          About
        </NavLink>
      </div>
      <div>
        {/* <Outlet /> */}
        <Routes>
          <Route path="account" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
          <Route path="/" element={<Navigate to="account" />} />
        </Routes>
      </div>
    </div>
  );
};

export default SettingsLayout;

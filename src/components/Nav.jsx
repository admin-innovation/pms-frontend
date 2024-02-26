import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { IoMdAnalytics } from "react-icons/io";
import { MdChecklist } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const Nav = () => {
  const activeLink =
    "text-[#205BB1] bg-[#1D53A117]  w-full h-[40px] shadow-lg shadow-[black]/10   flex  rounded-[10px]";
  const normal = "w-full   hover:bg-[";
  return (
    <div className="relative w-[303px] h-[90vh] bg-[white] rounded-[20px] flex flex-col items-center">
      <img src={logo} className="relative mt-[30px]" />
      <div className="flex flex-col w-full px-[20px] text-black gap-5 mt-[40px] ml-[40px]">
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isActive ? activeLink : normal
          }
        >
          <span className="flex gap-3 w-full items-center">
            <LuLayoutDashboard />
            <span>Dashboard</span>
          </span>
        </NavLink>
        <NavLink
          to="departments"
          className={({ isActive, isPending }) =>
            isActive ? activeLink : normal
          }
        >
          <span className="flex gap-3 w-full items-center">
            <GoBriefcase />
            <span>Departments</span>
          </span>
        </NavLink>
        <NavLink
          to="analytics"
          className={({ isActive, isPending }) =>
            isActive ? activeLink : normal
          }
        >
          <span className="flex gap-3 w-full items-center">
            <IoMdAnalytics />
            <span>Analytics</span>
          </span>
        </NavLink>
        <NavLink
          to="goals"
          className={({ isActive, isPending }) =>
            isActive ? activeLink : normal
          }
        >
          <span className="flex gap-3 w-full items-center">
            <MdChecklist />

            <span>Goals</span>
          </span>
        </NavLink>
      </div>
      <div className="flex flex-col w-full px-[20px] gap-4 mt-[80%] ">
        <div className="flex gap-3 w-full items-center pl-[10px]  ">
          <IoSettingsOutline />
          Settings
        </div>
        <div className="w-full border-solid border-[2px] border-[#4D7CC1] h-[40px] text-[#4D7CC1] rounded-[10px] flex items-center pl-[10px] gap-4 ">
          <span className="text-[30px]">
            <IoLogOutOutline />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

// const NavLink = ()=>{
//     return (
//         <></>
//     )
// }
export default Nav;

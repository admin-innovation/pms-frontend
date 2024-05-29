import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { IoMdAnalytics } from "react-icons/io";
import { MdChecklist } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const navItems = [
    { title: "Dashboard", link: "dashboard", icon: LuLayoutDashboard },
    { title: "Departments", link: "departments", icon: GoBriefcase },
    { title: "Analytics", link: "analytics", icon: IoMdAnalytics },
    { title: "Goals", link: "goals", icon: MdChecklist },
  ];

  return (
    <div className="relative w-[100px] md:w-[303px] h-[90vh] bg-[white] rounded-[20px] flex flex-col items-center">
      <img src={logo} className="relative mt-[30px]" />
      <div className="flex flex-col w-full px-[20px] text-black gap-5 mt-[40px] justify-between h-full ">
        <div className="flex flex-col items-center md:items-left w-full md:px-[20px] text-black gap-5 ">
          {navItems.map((item) => {
            return <CustomNavLink item={item} />;
          })}
        </div>
        <div className="flex flex-col w-full px-[20px] gap-4 pb-[30px] items-center md:items-left">
          <div className="flex flex-col items-center md:items-left w-full md:px-[20px] text-black gap-5 ">
            <CustomNavLink
              item={{
                icon: IoSettingsOutline,
                title: "Settings",
                link: "/settings",
              }}
            />
          </div>
          <div
            onClick={() => {
              navigate("/signin");
            }}
            className="md:w-full w-[40px] rounded-full  border-solid border-[2px] border-[#4D7CC1] h-[40px] text-[#4D7CC1] md:rounded-[10px] flex items-center justify-center md:justify-start pl-[10px] gap-4 hover:bg-[#e9f0f1] cursor-pointer "
          >
            <span className="text-[30px]">
              <IoLogOutOutline />
            </span>
            <span className="hidden md:block">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomNavLink = ({ item }) => {
  const activeLink =
    "text-[#205BB1] bg-[#1D53A117] h-[40px]  shadow-md shadow-[black]/10 font-medium  w-[40px] flex items-center   rounded-full md:w-full md:rounded-[10px] ";
  const normal =
    "md:w-full  hover:bg-[#1D53A117]/10 h-[40px] rounded-[10px] flex w-[40px]  items-center  ";
  return (
    <NavLink
      to={item.link}
      className={({ isActive, isPending }) => (isActive ? activeLink : normal)}
    >
      <span className="flex gap-3 w-full items-center justify-center md:justify-start text-[20px] md:text-[18px] md:pl-[10px]">
        <item.icon className="" />
        <span className="hidden md:block">{item.title}</span>
      </span>
    </NavLink>
  );
};
export default Nav;

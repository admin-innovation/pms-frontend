import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { user } from "../../data/temp";
import { useState, useEffect, useRef } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  // const [blur, setBlur] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     if (window.pageYOffset > "5px") {
  //     }
  //   });
  // }, []);
  return (
    <div className="h-full ">
      {" "}
      <div className="w-full flex items-center justify-center  gap-[20px] ">
        <p className="text-[20px] font-[700]">
          Welcome Back, {user.firstname} {user.lastname}
        </p>
        <div className="w-[40%] h-[30px] flex bg-[white] items-center rounded-[30px] ">
          <span className="text-[20px] pl-[20px] pr-[5px] text-slate-400">
            <CiSearch />
          </span>

          <input
            className="decorations-none no-underline outline-none w-full rounded-[30px]"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="relative flex">
            <span className="text-[30px] text-slate-700">
              <IoIosNotificationsOutline />
            </span>
            <span className="text-[red] absolute text-[10px] right-[5px] top-[4px] ">
              <GoDotFill className="" />
            </span>
          </div>
          <div className="relative flex">
            <span className="text-[30px] text-slate-700">
              <FiMessageSquare />
            </span>
            <span className="text-[red] absolute text-[10px] -right-[2px] top-[4px] ">
              <GoDotFill className="" />
            </span>
          </div>
          <div className="flex bg-[#585959] items-center px-[15px] py-[5px] rounded-[20px] relative gap-3 cursor-pointer">
            <NavLink to="/dashboard/settings">
              <div className="flex gap-2 items-center justify-center ">
                <img
                  src={user.profile_img}
                  className="w-[32px] h-[32px] rounded-[60%] object-cover relative "
                />
                <span className="text-white font-medium relative ">
                  Samiya Usman
                </span>
                <span className="text-white font-medium text-[20px]">
                  <IoMdMore />
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

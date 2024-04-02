import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import Notifications from "./Notifications";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getEmployee, fetchNotifications } from "../../backend/api";
import { CiChat1 } from "react-icons/ci";
import { setUser } from "../../backend/store/UserSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const [user, setUserData] = useState();
  const [searchParams] = useSearchParams();
  const [notifcations, setNotifications] = useState(null);
  const [viewNotifications, setViewNotifications] = useState(false);
  const userId = searchParams.get("userId");

  useEffect(() => {
    const fetchNotificationsData = async () => {
      try {
        const notifcations = await fetchNotifications(userId);
        if (notifcations) {
          setNotifications(notifcations.data);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    const fetchEmployee = async () => {
      try {
        const employee = await getEmployee(userId);
        setUserData(employee);
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    if (userId) {
      fetchEmployee();
      fetchNotificationsData();
    }

    // const intervalId = setInterval(fetchNotifications, 50000);
    // return () => clearInterval(intervalId);
  }, [userId]);

  if (user) {
    return (
      <div className="h-full ">
        <div className="w-full flex items-center justify-center  gap-[20px] ">
          <p className="text-[16px] font-[700]">
            Welcome Back, {user.first_name} {user.last_name}
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
            <div
              className="relative flex cursor-pointer group"
              onClick={() => {
                setViewNotifications(!viewNotifications);
              }}
            >
              {viewNotifications && (
                <Notifications notifcations={notifcations} />
              )}
              <span className="text-[30px] text-slate-700 ">
                <IoIosNotificationsOutline />
              </span>
              <span className="text-[red] absolute text-[10px] right-[5px] top-[4px] ">
                <GoDotFill className="" />
              </span>
            </div>
            <div className="relative flex">
              <span className="text-[30px] text-slate-700">
                <CiChat1 />
              </span>
              <span className="text-[red] absolute text-[10px] -right-[2px] top-[4px] ">
                <GoDotFill className="" />
              </span>
            </div>
            <div className="flex bg-[#585959] items-center px-[15px] py-[5px] rounded-[20px] relative gap-3 cursor-pointer">
              <NavLink to="/dashboard/settings">
                <div className="flex gap-2 items-center justify-center ">
                  <img
                    src="https://storage.googleapis.com/pms-dev-faac9.appspot.com/ProfilePictures/8.jpg"
                    className="w-[32px] h-[32px] rounded-[60%] object-cover relative "
                  />
                  <span className="text-white font-medium relative text-[10px]">
                    {user?.first_name} {user?.last_name}
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
  } else {
    return <div>Loading.....</div>;
  }
};

export default Header;

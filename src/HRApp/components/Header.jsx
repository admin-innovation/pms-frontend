import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import Notifications from "../../StaffApp/components/Notifications";
import { NavLink } from "react-router-dom";
import { CiChat1 } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import Chat from "./Chat";

const Header = () => {
  const [notificationsList, setNotificationsList] = useState(null);
  const [viewNotifications, setViewNotifications] = useState(false);
  const [viewChat, setViewChat] = useState(false);
  const [newNotification, setNewNotification] = useState(false);
  const closeChat = () => {
    setViewChat(!viewChat);
  };
  const user = useSelector((state) => state.user);
  const notifications = useSelector((state) => state.notifications);
  useEffect(() => {
    setNotificationsList(notifications.notifications);
    const New = notificationsList?.some((obj) => obj.opened === "False");
    if (New !== newNotification) {
      setNewNotification(New);
    }
  }, []);

  if (user) {
    return (
      <div className="h-full z-[10000] ">
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
                <Notifications notifcations={notificationsList} />
              )}
              <span className="text-[30px] text-slate-700 ">
                <IoIosNotificationsOutline />
              </span>
              {newNotification ? (
                <span className="text-[red] absolute text-[10px] right-[5px] top-[4px] ">
                  <GoDotFill className="" />
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="relative flex cursor-pointer">
              <span
                className="text-[30px] text-slate-700"
                onClick={() => setViewChat(!viewChat)}
              >
                <CiChat1 />
              </span>
              <span className="text-[red] absolute text-[10px] -right-[2px] top-[4px] ">
                <GoDotFill className="" />
              </span>
              {viewChat && <Chat closeChat={setViewChat} />}
            </div>
            <div className="flex bg-[#585959] items-center px-[15px] py-[5px] rounded-[20px] relative gap-3 cursor-pointer">
              <NavLink to="/dashboard/settings">
                <div className="flex gap-2 items-center justify-center ">
                  <img
                    src={user.profile_pic}
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

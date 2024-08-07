import React from "react";
import ReactDom from "react-dom";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const Notifications = () => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  return ReactDom.createPortal(
    <div className="fixed w-full h-screen inset-0 bg-black/10 z-[10000]">
      <div className="absolute w-[400px] h-[500px] bg-[white]  right-[80px] top-[80px]  py-[30px] rounded-[8px] overflow-y-scroll flex flex-col gap-3">
        <span className="text-[18px] font-bold px-[30px]">Notifications</span>
        <div className="flex flex-col  ">
          {notifications?.map((item, key) => {
            return (
              <div
                className={`${
                  item?.opened === "False"
                    ? "text-black font-medium"
                    : "text-[gray] font-extralight"
                } w-full relative flex pl-[10px] border-b-1 border-b-[gray]/20 py-[20px]  cursor-pointer bg-white
                `}
                data-action={item.event}
              >
                {item.message}
                <span className="text-[12px] text-[gray] absolute bottom-0 right-3">
                  {item.datetime}
                  {/* Time of action */}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Notifications;

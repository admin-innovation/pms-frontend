import React from "react";
import ReactDom from "react-dom";

const Notifications = (notifcations) => {
  return ReactDom.createPortal(
    <div className="absolute w-full h-full bg-black/10 z-[10000]">
      <div className="absolute w-[400px] h-[500px] bg-[white] right-[80px] top-[80px] px-[30px] py-[30px] rounded-[8px] ">
        <span className="text-[18px] font-bold">Notifications</span>
      </div>
    </div>,
    document.getElementById("home")
  );
};

export default Notifications;

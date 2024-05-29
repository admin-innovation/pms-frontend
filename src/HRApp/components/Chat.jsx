import React from "react";
import ReactDom from "react-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const Chat = ({ closeChat }) => {
  return ReactDom.createPortal(
    <div
      className="fixed w-screen h-screen inset-0 bg-black/10 z-[10000]"
      onClick={() => {
        closeChat(false);
      }}
    >
      <div className="absolute w-[500px] h-[90%] bg-[white] right-[80px] top-[60px] px-[30px] py-[30px] rounded-[8px] flex flex-col  ">
        <div className="w-full  flex gap-[40px] ">
          <div className="h-[30px] w-[80%] flex bg-[white] items-center rounded-[30px] border-[1px] border-[#205BB1] ">
            <span className="text-[20px] pl-[20px] pr-[5px] text-slate-400">
              <CiSearch />
            </span>

            <input
              className="decorations-none no-underline outline-none w-full rounded-[30px]"
              placeholder="Search"
            />
          </div>
          <span className="text-black size-[30px] justify-center rounded-full bg-[#6A91CB]/15  text-center flex items-center [font-medium text-[20px]">
            <IoMdMore />
          </span>
        </div>
        <div></div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

const ChatEntry = () => {
  return (
    <div>
      <div>
        {/* Profile Picture */}
        {/* employee Id */}
        {/* last Message */}
      </div>
    </div>
  );
};

export default Chat;

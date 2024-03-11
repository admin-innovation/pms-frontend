import React from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { goals } from "../data/temp";
// import { NavLink } from "react-router-dom";

const Goals = () => {
  const [activeView, setActiveView] = useState(null);

  return (
    <div className=" w-full flex flex-col gap-[10px] ">
      <div className="w-full">
        <p className="font-bold text-[16px]">Organiztional Goals</p>
      </div>
      <div className="w-full h-[45px]  bg-[white] rounded-[5px] flex justify-between px-[50px] text-center">
        <button className="text-[#205BB1] text-[16px] font-[700]">
          Short-Term
        </button>
        <button className="text-[#205BB1] text-[16px] font-[700]">
          Medium-Term
        </button>
        <button className="text-[#205BB1] text-[16px] font-[700]">
          Long-Term
        </button>
      </div>
      <div className=" w-full  bg-white rounded-[8px]  min-h-[70vh]">
        {goals.map((goalitem, key) => {
          return (
            <GoalEntry
              title={goalitem.title}
              achieved={goalitem.achieved}
              date_created={goalitem.date_created}
            />
          );
        })}
      </div>
      {/* <div className="bg-[#4D7CC1] rounded-[4px] text-white flex items-center px-[10px] py-[5px] gap-3 cursor-pointer hover:bg-[#072b61]"></div> */}
    </div>
  );
};

const GoalEntry = ({ title, achieved, date_created }) => {
  return (
    <div className="w-full h-[40px] flex justify-between px-[40px] hover:bg-[#f8f8ff]  transition-all duration-200 ease-in-out my-[20px]">
      <div className=" flex gap-3 items-center">
        <input type="checkbox" checked={achieved} />
        <label className="text-black text-[12px]">{title} Text enty </label>
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="w-[79px] h-[30px]  bg-[#EBF0F7] rounded-[4px] text-[#205BB1] font-[400] text-[12px] text-center flex items-center justify-center">
          Description
        </div>
        <p className="text-[9px] font-[300] text-[black]">{date_created}</p>
        <FaRegTrashCan className="hover:text-[red] cursor-pointer" />
      </div>
    </div>
  );
};
export default Goals;

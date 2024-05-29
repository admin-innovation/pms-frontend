import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";

const DepartmentalGoals = () => {
  const goals = useSelector((state) => state.goals);
  return (
    <div>
      <div>
        {goals.goals.map((item) => {
          return <GoalEntry {...item} />;
        })}
      </div>
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

export default DepartmentalGoals;

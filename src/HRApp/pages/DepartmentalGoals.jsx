import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";

const departments = {
  facilities: "Facilities",
  marketing: "Marketing",
  network: "Network",
  innovation: "Innovation",
  finance: "Finance",
  humanr: "Human Resources",
  budgeting: "Budgeting",
  infots: "Information Technology Services",
  administration: "Administration",
  broadcast: "Broadcast",
  sales: "Sales",
  business: "Business",
  satnav: "Satellite Navigation",
  broadband: "Broadband",
  satctrl: "Satellite Control",
};

const DepartmentalGoals = () => {
  const goals = useSelector((state) => state.goals);
  const subgoals = goals.goals.reduce((acc, goal) => {
    if (goal.subgoals && Array.isArray(goal.subgoals)) {
      return acc.concat(goal.subgoals);
    }
    return acc;
  }, []);

  return (
    <div>
      <div>
        <div className="w-full flex text-[15px] font-bold px-[40px] text-left">
          <div className=" flex items-center w-3/5"> Title</div>
          <div className="w-1/5"> Department</div>
          <div className="w-1/5"> Date Created</div>
          <div className="w-1/5"> Deadline </div>
          <div className="w-1/5"> </div>
        </div>
        {subgoals.map((item) => {
          return <GoalEntry {...item} />;
        })}
      </div>
    </div>
  );
};

const GoalEntry = ({ title, achieved, date_created, department, deadline }) => {
  return (
    <div className="w-full h-[40px] flex justify-between px-[40px] hover:bg-[#f8f8ff]  transition-all duration-200 ease-in-out my-[20px]">
      <div className=" flex gap-3 items-center w-3/5">
        <label className="text-black text-[12px]">{title}</label>
      </div>
      <div className="flex items-center w-1/4">{departments[department]}</div>
      <div className="flex gap-2 items-center w-1/5">
        <div>{deadline}</div>
      </div>
      <div className="flex gap-2 items-center w-1/5 ">
        <p className="text-[15px]  text-[red]">{date_created}</p>
      </div>
      <div className="flex items-center w-1/5">
        <div className="w-[79px] px-[5px] h-[30px]  bg-[#EBF0F7] rounded-[4px] text-[#205BB1] font-[400] text-[12px] text-center flex items-center justify-center">
          description
        </div>
      </div>
    </div>
  );
};

export default DepartmentalGoals;

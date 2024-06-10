import React from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";
import { AnimatePresence, motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// remeber to add departmental goals, should be a button that renders another page, could be a component? idk i'd ask vem

const Goals = () => {
  const [activeView, setActiveView] = useState(1);
  const [goalform, setGoalForm] = useState(false);
  const goals = useSelector((state) => state.goals.goals);
  const handleAddGoal = (e) => {
    setGoalForm(true);
  };

  const closeGoalForm = () => {
    setGoalForm(false);
  };
  const handleButtonClick = (buttonName) => {
    setActiveView(buttonName);
  };

  return (
    <div className=" w-full overflow-y-scroll  flex flex-col gap-[10px] mt-[30px] ">
      {goalform && <GoalForm close={closeGoalForm} />}
      <div className="w-full">
        <p className="font-bold text-[16px]">Organiztional Goals</p>
      </div>
      <div className="w-full h-[45px]  bg-[white] rounded-[5px] flex  text-center">
        {/* Add Search FIlters, short-term,long-term,middle-term, department */}
      </div>
      <div className=" w-full  bg-white rounded-[8px]  min-h-[70vh]">
        {goals?.map((goalitem, key) => {
          return <GoalEntry {...goalitem} />;
        })}
        <div className="w-full flex justify-end px-[40px] py-[30px]">
          <div
            className="bg-[#4D7CC1]  rounded-[4px] text-white flex items-center gap-3 cursor-pointer hover:bg-[#072b61] px-[10px] py-[10px]"
            onClick={handleAddGoal}
          >
            <IoMdAddCircle className="text-[25px]" />{" "}
            <span>Create new Goal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GoalEntry = ({
  title,
  achieved,
  sent_to_hr,
  subgoal,
  date_created,
  deadline,
  description,
}) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      <div className="w-full h-[40px] flex justify-between px-[40px] hover:bg-[#f8f8ff]  transition-all duration-200 ease-in-out my-[20px]">
        <div className=" flex gap-3 items-center">
          <label className="text-black text-[12px]">{title}</label>
        </div>
        <div className="flex items-center gap-[30px]">
          {sent_to_hr ? (
            <div className="w-[79px] h-[30px]  bg-[green]/30 rounded-[4px] text-[green] font-[400] text-[12px] text-center flex items-center justify-center">
              In Progress
            </div>
          ) : (
            <div className="w-[79px] h-[30px]  bg-[red]/30 rounded-[4px] text-[red] font-[400] text-[12px] text-center flex items-center justify-center">
              Hold
            </div>
          )}

          <p className="text-[9px] font-[300] text-[black]">{date_created}</p>
          <FaRegTrashCan className="hover:text-[red] cursor-pointer" />
        </div>
      </div>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0.5, height: 0 }}
            animate={{ opacity: 1, height: 200 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[200px]  bg-white rounded-[12px] drop-shadow-xl  flex flex-col  justify-between"
          >
            <div className="px-[30px] py-[20px]">{description}</div>
            <div>
              {subgoal?.map((item) => {
                return <div>{item.title}</div>;
              })}
            </div>
            <div className="px-[30px] py-[20px]">{deadline}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Goals;

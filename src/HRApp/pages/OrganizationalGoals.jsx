import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const OrganizationalGoals = () => {
  const goals = useSelector((state) => state.goals);
  const [organisationalGoals, setGoals] = useState(null);
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

const GoalEntry = ({
  title,
  achieved,
  date_created,
  approved,
  description,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className="relative w-full min-h-[40px] flex flex-col  px-[40px] hover:bg-[#f8f8ff]  transition-all duration-200 ease-in-out my-[20px]"
      onClick={() => {
        setDropdown(!dropdown);
      }}
    >
      <div className=" flex  justify-between">
        <div className=" flex gap-3 items-center">
          <span className="text-[black]">
            {approved ? (
              <IoCheckbox className="text-[#4D7CC1] text-[20px]" />
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
          </span>
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

      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial={{ opacity: 0.5, height: 0 }}
            animate={{ opacity: 1, height: 200 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[200px]   rounded-[12px]  flex flex-col  justify-between"
          >
            <div className="px-[30px] py-[20px]">{description}</div>
            {/* <div>
              {subgoal?.map((item) => {
                return <div>{item.title}</div>;
              })}
            </div> */}
            {/* <div className="px-[30px] py-[20px]">{deadline}</div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrganizationalGoals;

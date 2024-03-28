import React from "react";
import { ImCancelCircle } from "react-icons/im";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import ReactDom from "react-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const GoalForm = ({ close, addGoal }) => {
  const [dateValue, setdateValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const handleAddGoal = () => {
    addGoal((prev) => {
      return [...prev, { title: title, status: 0, achieved: false }];
    });
    close();
  };
  return ReactDom.createPortal(
    <motion.div className="absolute w-[100vw] h-[100vh] bg-[black]/50 z-[100] flex items-center justify-center">
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: easeInOut }}
        className=" w-[782px] h-[458px] bg-[white] rounded-[8px] p-[20px]"
      >
        <div
          className="w-full flex justify-between items-center"
          onClick={() => {
            close();
          }}
        >
          <p className="text-[18px] font-[800]">Create Goals Outline</p>
          <span className="text-[24px] cursor-pointer">
            <ImCancelCircle />
          </span>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label for="goal" className="text-[16px] font-[600]">
              Goal Title
            </label>
            <div className="w-full px-[30px] border-[1px] border-[gray] rounded-[8px] ">
              <input
                id="goal"
                onChange={(e) => {
                  setTitle(e.currentTarget.value);
                }}
                value={title}
                className="w-full   outline-none h-[35px]   flex items-center "
                placeholder="Goal Title"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label for="description" className="text-[16px] font-[600]">
              Description
            </label>
            <div className="w-full px-[30px] border-[1px] border-[gray] rounded-[8px] ">
              <textarea
                id="description"
                onChange={(e) => {
                  setDescription(e.currentTarget.value);
                }}
                value={description}
                className="h-[180px] w-full  outline-none rounded-[8px]"
                placeholder="write goal description here"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[400px]flex flex-col gap-2">
              <label className="text-[16px] font-[600]">Goal Deadline</label>

              {/* <Datepicker
                className="w-[100px]  relative outline-none border-[1px] border-black"
                asSingle={true}
                value={dateValue}
                onChange={setdateValue}
                showShortcuts={true}
              /> */}
              {/* <Datepicker /> */}
            </div>
            <div
              onClick={() => {
                handleAddGoal();
              }}
              className="w-[77px] h-[30px] bg-[#4D7CC1] text-center text-white rounded-[4px] text-[12px] font-[600] flex justify-center items-center cursor-pointer hover:bg-[#062b61]"
            >
              Add goal
            </div>
          </div>
        </div>
      </motion.form>
    </motion.div>,
    document.getElementById("home")
  );
};

export default GoalForm;

import React from "react";
import { ImCancelCircle } from "react-icons/im";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { addGoals } from "../../backend/api";
import { departments } from "../../data/temp";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { assignGoal } from "../../backend/api";

const GoalForm = ({ close }) => {
  const goals = useSelector((state) => state.goals.goals);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [department, setDepartment] = useState(null);
  const handleAssignGoal = async () => {
    try {
      const response = await assignGoal(selectedGoal, department);
      if (response) {
        close();
        setSelectedGoal(null);
        setDepartment(null);
        toast.success(
          `Goal with id: ${selectedGoal} has been assigned to ${department}`
        );
      }
    } catch {
      close();
      toast.error("Problem assigning Goal Try again later");
    }

    // Standardise models and api calls and responses
  };

  return ReactDom.createPortal(
    <motion.div className="absolute inset-0 w-[100vw] h-[100vh] bg-[black]/50 z-[100] flex items-center justify-center">
      <ToastContainer />
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
          <p className="text-[18px] font-[800]">Assign Organisational Goals</p>
          <span className="text-[24px] cursor-pointer">
            <ImCancelCircle />
          </span>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label for="goal" className="text-[16px] font-[600]">
              Select Goal
            </label>
            <div className="w-full px-[30px] border-[1px] border-[gray] rounded-[8px] ">
              <select
                id="goal"
                onChange={(e) => {
                  setSelectedGoal(e.currentTarget.value);
                }}
                value={selectedGoal}
                className="w-full   outline-none h-[35px]   flex items-center "
                placeholder="Goal Title"
              >
                {goals.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label for="description" className="text-[16px] font-[600]">
              Description
            </label>
            <div className="w-full px-[30px] border-[1px] border-[gray] rounded-[8px] ">
              <textarea
                id="description"
                value={
                  goals.find((goal) => goal._id === selectedGoal)?.description
                }
                className="h-[180px] w-full  outline-none rounded-[8px]"
                placeholder="write goal description here"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[200px] flex flex-col gap-2 mb-[50px]">
              <label className="text-[16px] font-[600]">Department</label>
              <div className="flex items-center gap-2">
                <span className="opacity-50">
                  <BsFillBriefcaseFill />
                </span>
                <select
                  className="outline-none"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.currentTarget.value);
                  }}
                >
                  {departments.map((item) => {
                    return <option value={item.value}>{item.title}</option>;
                  })}
                </select>
              </div>
            </div>
            <div
              onClick={() => {
                handleAssignGoal();
              }}
              className="w-[77px] h-[30px] bg-[#4D7CC1] text-center text-white rounded-[4px] text-[12px] font-[600] flex justify-center items-center cursor-pointer hover:bg-[#062b61]"
            >
              Add goal
            </div>
          </div>
        </div>
      </motion.form>
    </motion.div>,
    document.getElementById("root")
  );
};

export default GoalForm;

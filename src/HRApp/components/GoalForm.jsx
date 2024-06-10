import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { useState } from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { departments } from "../../data/temp";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { addSubGoal } from "../../backend/api";

const GoalForm = ({ close }) => {
  const goals = useSelector((state) => state.goals.goals);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [department, setDepartment] = useState(null);
  const handleAddSubGoal = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const formData = new FormData(event.target);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
    const day = String(currentDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    const subGoal = {
      subgoals: [
        {
          _id: uuidv4(),
          title: formData.get("goal"),
          description: formData.get("description"),
          deadline: formData.get("deadline"),
          department: formData.get("department"), // Ensure 'department' is part of form data
          date_created: formattedDate,
        },
      ],
    };

    try {
      const response = await addSubGoal(selectedGoal, subGoal);
      if (response) {
        close();
        toast.success(
          `Goal with id: ${selectedGoal} has been assigned to ${department}`
        );
      } else {
        throw new Error("Failed to add subgoal");
      }
    } catch (error) {
      console.error(error);
      close();
      toast.error("Problem assigning Goal. Try again later.");
    }
  };

  return ReactDom.createPortal(
    <>
      <motion.div className="absolute inset-0 w-[100vw] h-[100vh] bg-[black]/50 z-[30] flex items-center justify-center" />
      <div className="absolute inset-0 z-[50] w-full h-full overflow-hidden flex justify-center ">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, ease: easeInOut }}
          className="relative w-[782px]   bg-[#F1F4F9] rounded-[8px] p-[20px] overflow-y-scroll"
        >
          <div
            className=" w-full  flex justify-between items-center"
            onClick={() => {
              close();
            }}
          >
            <p className="text-[18px] font-[800]">Create Departmental Goals</p>
            <span className="text-[24px] cursor-pointer">
              <ImCancelCircle />
            </span>
          </div>
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label for="goal" className="text-[16px] font-[600]">
                Select Organisational Goal
              </label>
              <div className="w-full px-[30px] border-[1px] bg-white border-[gray] rounded-[8px] ">
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
              <div className="bg-white w-full px-[30px]  rounded-[8px] ">
                {goals.find((goal) => goal._id === selectedGoal)?.description}
              </div>
            </div>
            <div>
              <label for="goal" className="text-[16px] font-[600]">
                Departmental Goals
              </label>
              <div className="flex flex-col gap-2">
                {goals
                  .find((goal) => goal._id === selectedGoal)
                  ?.subgoals?.map((item) => {
                    return (
                      <div className="w-full flex justify-between bg-[white] px-[20px] py-[5px] rounded-[10px]">
                        <span className="font-medium">{item.title}</span>
                        <span className="px-[10px] py-[3px] border-black border-[1px] rounded-full">
                          {item.department}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <motion.div
              initial={{ height: "0%" }}
              animate={{
                height: selectedGoal ? "auto" : "0%", // Use 'auto' to allow content-based height
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full flex flex-col gap-2 overflow-hidden"
            >
              <label for="description" className="text-[16px] font-[600]">
                Add Departmental Goals
              </label>
              <form
                onSubmit={handleAddSubGoal}
                className="w-full flex flex-col gap-5"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="goal" className="text-[16px] font-[600]">
                    Goal Title
                  </label>
                  <div className="w-full bg-white px-[30px] border-[1px] border-[gray] rounded-[8px]">
                    <input
                      id="goal"
                      required
                      name="goal"
                      className="w-full outline-none h-[35px] flex items-center"
                      placeholder="Goal Title"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="text-[16px] font-[600]"
                  >
                    Description
                  </label>
                  <div className="w-full px-[30px] py-[10px] bg-white border-[1px] border-[gray] rounded-[8px]">
                    <textarea
                      id="description"
                      required
                      name="description"
                      className="h-[180px] w-full outline-none rounded-[8px]"
                      placeholder="Write goal description here"
                    />
                  </div>
                </div>
                <div className="w-full flex items-center  gap-[100px]">
                  <div className="w-[200px] flex flex-col gap-2 mb-[50px]">
                    <label
                      htmlFor="deadline"
                      className="text-[16px] font-[600]"
                    >
                      Goal Deadline
                    </label>
                    <input
                      id="deadline"
                      required
                      name="deadline"
                      className="outline-none px-[10px]"
                      type="date"
                    />
                  </div>

                  <div className="w-[200px] flex flex-col gap-2 mb-[50px]">
                    <label className="text-[16px] font-[600]">Department</label>
                    <div className="flex items-center bg-white px-[10px] gap-2">
                      <span className="opacity-50">
                        <BsFillBriefcaseFill />
                      </span>
                      <select
                        className="outline-none"
                        name="department"
                        id="department"
                        required
                        onChange={(e) => {
                          setDepartment(e.currentTarget.value);
                        }}
                      >
                        {departments.map((item) => {
                          return (
                            <option value={item.value}>{item.title}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="max-w-[200px] h-[30px] bg-[#4D7CC1] text-center text-white rounded-[4px] text-[12px] font-[600] flex justify-center items-center cursor-pointer hover:bg-[#062b61]"
                >
                  Add Departmental Goal
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default GoalForm;

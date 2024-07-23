import React from "react";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { goals } from "../../data/temp";
import { IoMdAddCircle } from "react-icons/io";
import TaskForm from "../components/TaskForm";
// import DepartmentGoals from "./DepartmentGoals";
import TaskReview from "./TaskReview";
import TaskHistory from "./TaskHistory";
import AssignedTask from "./AssignedTask";
import { Link, NavLink, Route, Routes, Navigate } from "react-router-dom";

const Task = () => {
  const [activeView, setActiveView] = useState(1);
  const [openForm, setOpenForm] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveView(buttonName);
  };
  return (
    <div className=" w-full flex flex-col gap-[10px] mt-[10px] -ml-4">
      {openForm && (
        <TaskForm
          close={() => {
            setOpenForm(false);
          }}
        />
      )}

      <div className="w-full h-[50px] relative px-[10px] bg-[white] py-[5px] rounded-[5px] flex text-center">
        <NavLink
          to={`departmental-goals`}
          className={` flex-1 text-[#205BB1] text-[16px] font-[700] rounded-[5px] justify-center items-center h-full flex ${
            activeView === 1
              ? "bg-[#1D53A117]/10 w-[30%] relative shadow-[black]/10"
              : ""
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Departmental Goals
        </NavLink>
        <NavLink
          to={`assign-tasks`}
          className={` flex-1 text-[#205BB1] text-[16px] font-[700] rounded-[5px] justify-center items-center h-full flex ${
            activeView === 2
              ? "bg-[#1D53A117]/10 w-[30%] relative shadow-md shadow-[black]/10"
              : ""
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Assign Tasks
        </NavLink>
        <NavLink
          to={`task-review`}
          className={` flex-1 text-[#205BB1] text-[16px] font-[700] rounded-[5px] justify-center items-center h-full flex ${
            activeView === 3 ? "bg-[#1D53A117]/10 shadow-[black]/10" : ""
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Task Review
        </NavLink>
        <NavLink
          to={`task-history`}
          className={` flex-1 text-[#205BB1] text-[16px] font-[700] rounded-[5px] justify-center items-center h-full flex ${
            activeView === 4 ? "bg-[#1D53A117]/10 shadow-[black]/10" : ""
          }`}
          onClick={() => handleButtonClick(4)}
        >
          Task History
        </NavLink>
      </div>

      <div className="relative h-screen overflow-y-scroll">
        <Routes>
          <Route path="/assign-tasks" element={<AssignedTask />} />
          <Route path="/task-review" element={<TaskReview />} />
          <Route path="/task-history" element={<TaskHistory />} />
          <Route path="" element={<Navigate to="assign-tasks" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Task;

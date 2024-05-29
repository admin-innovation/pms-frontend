import React from "react";
import { Route, Routes } from "react-router";
import OngoingTask from "./OngoingTask";
import TaskHistory from "./TaskHistory";
import TaskReview from "./TaskReview";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, redirect, Navigate } from "react-router-dom";
import { getTask } from "../../backend/api";

import { setTasks } from "../../backend/store/TaskSlice";

const TaskLayout = () => {
  const employee_id = useSelector((state) => state.user.id);

  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const fetchTasks = async (employee_id) => {
    try {
      const tasks = await getTask(employee_id);
      if (tasks) {
        dispatch(setTasks(tasks));
      }
    } catch (error) {
      console.error("Error fetching Tasks:", error);
    }
  };
  useEffect(() => {
    if (tasks?.length === 0 && employee_id.length > 0) {
      fetchTasks(employee_id);
    }
  }, []);
  //   }, []);
  return (
    <div className="w-full h-full">
      <div className="w-full h-[45px]     bg-[white] rounded-[5px] flex  text-center">
        <NavLink
          to="ongoing-tasks"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[30%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Ongoing Tasks
        </NavLink>
        <NavLink
          to="task-review"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[30%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Task Review
        </NavLink>
        <NavLink
          to="task-history"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[30%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Task History
        </NavLink>
      </div>
      <Routes>
        <Route path="ongoing-tasks" element={<OngoingTask />} />
        <Route path="task-review" element={<TaskReview />} />
        <Route path="task-history" element={<TaskHistory />} />
        <Route path="/" element={<Navigate to="ongoing-tasks" />} />
      </Routes>
    </div>
  );
};

export default TaskLayout;

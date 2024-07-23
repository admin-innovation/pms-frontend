import React from "react";
import { useState } from "react";

import { IoMdAddCircle } from "react-icons/io";
import GoalForm from "../components/GoalForm";
import { NavLink, Route, Routes } from "react-router-dom";
import OrganizationalGoals from "./OrganizationalGoals";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DepartmentalGoals from "./DepartmentalGoals";
const Goals = () => {
  const [goalform, setGoalForm] = useState(false);
  const goals = useSelector((state) => state.goals.goals);
  const handleAddGoal = (e) => {
    setGoalForm(true);
  };

  const [goalsList, setGoals] = useState([...goals]);
  const closeGoalForm = () => {
    setGoalForm(false);
  };

  return (
    <div className=" w-full flex flex-col gap-[10px] mt-[30px] ">
      {goalform && <GoalForm close={closeGoalForm} addGoal={setGoals} />}
      <div className="w-full items-center h-[45px] px-[20px] bg-[white] rounded-[5px] flex  text-center">
        <NavLink
          to="organisational_goals"
          className={({ isActive }) =>
            isActive
              ? "text-[#205BB1] py-[8px]  bg-[#F1F4F9] text-[16px] font-[700] flex-1 rounded-[5px]"
              : " flex-1 text-[#205BB1]  "
          }
        >
          Organiztional Goals
        </NavLink>
        <NavLink
          to="departmental_goals"
          className={({ isActive }) =>
            isActive
              ? "text-[#205BB1] py-[8px] bg-[#F1F4F9] text-[16px] font-[700] flex-1 rounded-[5px]"
              : " flex-1 text-[#205BB1]  "
          }
        >
          Departmental Goals
        </NavLink>
      </div>

      <div className=" w-full  bg-white rounded-[8px]  max-h-[80vh] overflow-y-scroll">
        <Routes>
          <Route path="departmental_goals" element={<DepartmentalGoals />} />
          <Route
            path="organisational_goals"
            element={<OrganizationalGoals />}
          />
          <Route path="" element={<Navigate to="organisational_goals" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Goals;

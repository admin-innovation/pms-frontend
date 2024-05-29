import React from "react";
import Evaluation from "./Evaluation";
import Complaints from "./Complaints";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

const ReportsLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[45px]     bg-[white] rounded-[5px] flex  text-center">
        <NavLink
          to="complaints"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[50%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Complaints
        </NavLink>

        <NavLink
          to="evaluations"
          className={({ isActive, isPending }) =>
            !isActive
              ? `text-[#205BB1] text-[16px] font-[700] flex-1 rounded-[5px] text-center flex items-center justify-center`
              : "bg-[#1D53A117]/10 w-[50%] text-[#205BB1]  font-[700] relative   shadow-[black]/10 text-center flex items-center justify-center"
          }
        >
          Evaluations
        </NavLink>
      </div>
      <Routes>
        <Route path="complaints" element={<Complaints />} />
        <Route path="evaluations" element={<Evaluation />} />
        <Route path="" element={<Navigate to="complaints" />} />
      </Routes>
    </div>
  );
};

export default ReportsLayout;

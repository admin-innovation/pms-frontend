import React from "react";
import { useState } from "react";
import Self_Appraisal from "./Self_Appraisal";
import Peer_Review from "./Peer_Review";
import Performance_Evaluation from "./Performance_Evaluation";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";

const ReviewLayout = () => {
  const [activeTab, setActiveTab] = useState(1);

  function handleClick(tabNumber) {
    setActiveTab(tabNumber);
  }
  return (
    <div className="relative flex flex-col w-full h-[115vh] -ml-4">
      <div className=" w-full flex items-center bg-white text-center h-[45px]  px-[10px] font-[700] rounded-[10px] overflow-hidden  mb-2 ">
        <div
          className={`w-full   items-center bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}
        >
          <NavLink
            to={`self_appraisal`}
            className={({ isActive }) =>
              isActive
                ? "bg-[rgba(29,83,161,0.09)] py-[3px]  w-full rounded-[5px] "
                : " w-full rounded-[10px]  "
            }
          >
            Self Appraisal
          </NavLink>
        </div>
        <div
          className={`w-full items-center bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}
        >
          <NavLink
            to={`peer_review`}
            className={({ isActive }) =>
              isActive
                ? "bg-[rgba(29,83,161,0.09)] py-[3px]  w-full rounded-[5px] "
                : " w-full rounded-[10px]  "
            }
            onClick={() => handleClick(1)}
          >
            Peer Review
          </NavLink>
        </div>
        <div
          className={`w-full items-center bg-[white] rounded-[5px] flex text-center text-[#205BB1]`}
        >
          <NavLink
            to={`performance_evaluation`}
            className={({ isActive }) =>
              isActive
                ? "bg-[rgba(29,83,161,0.09)] py-[3px]  w-full rounded-[5px] "
                : " w-full rounded-[10px]  "
            }
            onClick={() => handleClick(2)}
          >
            Performance Evaluation
          </NavLink>
        </div>
      </div>
      <div className="relative h-screen overflow-y-scroll">
        <Routes>
          <Route path="self_appraisal" element={<Self_Appraisal />} />
          <Route path="peer_review" element={<Peer_Review />} />
          <Route
            path="performance_evaluation"
            element={<Performance_Evaluation />}
          />

          <Route path="/" element={<Navigate to="self_appraisal" />} />
        </Routes>
      </div>
    </div>
  );
};

export default ReviewLayout;

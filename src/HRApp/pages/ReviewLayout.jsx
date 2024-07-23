import React from "react";
import { useState } from "react";
import Complaints from "./Complaints";
import Evaluation from "./Evaluation";
import Vacancies from "./Vacancies";
import PeerReview from "./PeerReview";
import SelfAprraisal from "./SelfAprraisal";
import { Link, NavLink, Route, Routes, Navigate } from "react-router-dom";

const ReviewLayout = () => {
  const [activeTab, setActiveTab] = useState(1);
  const subRoutes = [
    {
      title: "Self Appraisal",
      value: "self_appraisal",
    },
    {
      title: "Peer Review",
      value: "peer_review",
    },
    {
      title: "Performance Evaluation",
      value: "performance_evaluation",
    },
    {
      title: "Complaints",
      value: "complaint",
    },
    {
      title: "Vacancies",
      value: "vacancies",
    },
  ];
  function handleClick(tabNumber) {
    setActiveTab(tabNumber);
  }
  return (
    <div className="w-full h-full flex flex-col">
      <div className=" w-full flex h-[45px] text-center items-center bg-white  px-[20px] mt-[20px]  font-[700] rounded-[10px] overflow-hidden ">
        {subRoutes.map((item) => {
          return (
            <NavLink
              to={item.value}
              className={({ isActive }) =>
                isActive ? "  bg-[#F1F4F9] flex-1 py-[5px]" : " flex-1"
              }
            >
              <div className="text-[#205BB1]">{item.title}</div>
            </NavLink>
          );
        })}
      </div>
      <div>
        <Routes>
          <Route path="self_appraisal" element={<SelfAprraisal />} />
          <Route path="peer_review" element={<PeerReview />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="performance_evaluation" element={<Evaluation />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="/" element={<Navigate to="self_appraisal" />} />
        </Routes>
      </div>
    </div>
  );
};

export default ReviewLayout;

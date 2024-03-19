import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Departments } from "../data/temp";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Department = () => {
  const { department_id } = useParams();
  const data = Departments[department_id];

  return (
    <div className="w-full h-full flex flex-col gap-[8px]">
      <div className="relative bg-cover w-full h-[350px] rounded-[10px]">
        <div className=" relative w-full h-[40%]">
          <img
            className="z-10 absolute w-full h-full"
            style={{ objectFit: "cover" }}
            src={`/${data.wall_paper}`}
          />
          <span className="z-50 relative text-[40px] text-white font-[700]">
            {department_id}
          </span>
        </div>
        <div className="relative w-full h-[60%] bg-[white] flex">
          <div
            className="z-[10000] absolute -top-[70px] left-[100px] w-[167px] h-[167px] rounded-full  border-[4px] border-[white] bg-cover"
            style={{ backgroundImage: `url('/${data.HOD.profile_pic}')` }}
          />
          <div className="flex px-[120px] pt-[100px] gap-[50px]">
            <div className="text-center flex flex-col gap-[3px] relative">
              <p className="text-[25px] text-black font-[700]">
                {data.HOD.name}
              </p>
              <p className="text-[14px] text-black font-[500]">
                {data.HOD.position}
              </p>
            </div>
            <div className="flex flex-col pt-[10px] gap-[8px]">
              <span className="flex items-center gap-[20px]">
                <MdOutlineMail />
                <a className="text-[14px] text-[#205BB1] cursor-pointer">
                  {data.HOD.email}
                </a>
              </span>
              <span className="flex items-center gap-[20px]">
                <FaPhoneAlt />
                <a className="text-[14px] text-[#205BB1] cursor-pointer">
                  {data.HOD.phone}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[white] rounded-[8px] flex flex-wrap pb-[200px] gap-[20px] pt-[100px] px-[100px]">
        {data.employees?.map((employee, key) => {
          return <EmployeeCard employee={employee} />;
        })}
      </div>
    </div>
  );
};

const EmployeeCard = ({ employee }) => {
  return (
    <div className="w-[150px] h-[150px] flex flex-col gap-[10px] items-center justify-center rounded-[8px] bg-[#BACCE714]/10">
      <div
        className=" relative bg-cover w-[50%] h-[50%] rounded-full"
        style={{ backgroundImage: `url('/${employee.profile_pic}')` }}
      >
        <div
          className={`bottom-2 right-1 absolute w-[10px] h-[10px] bg-[#74B72E] border-[3px] border-[#BACCE714] rounded-full`}
        />
      </div>
      <div>
        <p className="text-[14px] font-[700]">{employee.name}</p>
      </div>
    </div>
  );
};
export default Department;

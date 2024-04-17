import React from "react";
import {
  Facilities,
  Marketing,
  Network,
  Innovation,
  Finance,
  HumanR,
  Budgeting,
  InfoTS,
  Administration,
  Broadcast,
  Sales,
  Business,
  SatNav,
  Broadband,
  SatCtrl,
} from "../../assets/index";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
// import { Departments } from "../../data/temp";
import { getAllDepartments } from "../../backend/api";

const Departments = () => {
  // const [departments, setDepartments] = useState();
  // useEffect(() => {
  //   // const fetchDepartmentsData = async () => {
  //   //   try {
  //   //     const data = await getAllDepartments();
  //   //     if (data) {
  //   //       // setDepartments(data.departments);
  //   //     }
  //   //   } catch (error) {
  //   //     console.error(`Error fetching Departments`, error);
  //   //   }
  //   // };
  //   // fetchDepartmentsData();
  // }, []);

  return (
    <div className="relative w-full h-full flex flex-col gap-[20px] mb-[20px]">
      <div className="relative w-full flex flex-col gap-[5px]">
        <div className="relative w-full h-[50px] rounded-[8px] font-[700px] bg-[#BACCE7] flex items-center">
          <p className="ml-[30px] text-[23px] font-bold">
            Directorate of Finance & Administration
          </p>
        </div>
        <div className="w-full flex gap-x-[10px]  gap-y-[10px] flex-wrap">
          <DepartmentTile
            title="Administration"
            image={Administration}
            link=""
          />
          <DepartmentTile title="Finance" image={Finance} link="" />
          <DepartmentTile title="Human Resources" image={HumanR} link="" />
          <DepartmentTile
            title="Budgeting and Planning"
            image={Budgeting}
            link=""
          />
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-[5px]">
        <div className="relative w-full h-[50px] rounded-[8px] font-[700px] bg-[#BACCE7] flex items-center">
          <p className="ml-[30px] text-[23px] font-bold">
            Directorate of Technical Services
          </p>
        </div>
        <div className="w-full flex gap-x-[10px] gap-y-[10px] flex-wrap">
          <DepartmentTile
            title="Information Technology Services"
            image={InfoTS}
            link=""
          />
          <DepartmentTile title="Satellite Navigation" image={SatNav} link="" />
          <DepartmentTile
            title="Network Operations Center"
            image={Network}
            link=""
          />
          <DepartmentTile title="Innovation" image={Innovation} link="" />
          <DepartmentTile
            title="Satellite Control and Operation"
            image={SatCtrl}
            link=""
          />
          <DepartmentTile
            title="Broadband Networks"
            image={Broadband}
            link=""
          />
          <DepartmentTile title="Broadcast" image={Broadcast} link="" />
          <DepartmentTile title="Facility" image={Facilities} link="" />
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-[5px]">
        <div className="relative w-full h-[50px] rounded-[8px] font-[700px] bg-[#BACCE7] flex items-center">
          <p className="ml-[30px] text-[23px] font-bold">
            Directorate of Marketing and Business Development
          </p>
        </div>
        <div className="w-full flex gap-x-[10px] gap-y-[10px] flex-wrap">
          <DepartmentTile title="Marketing" image={Marketing} link="" />
          <DepartmentTile title="Sales" image={Sales} link="" />
          <DepartmentTile title="Business Office" image={Business} link="" />
        </div>
      </div>
    </div>
  );
};

const DepartmentTile = ({ title, image, link }) => {
  const navigate = useNavigate();
  const handleDepartment = () => {
    navigate(`/departments/${title}`);
  };
  return (
    <div
      className="relative cursor-pointer w-[235px] bg-black min-h-[235px] rounded-[6px] text-white font-[700px] flex flex-col justify-end overflow-hidden"
      onClick={() => {
        handleDepartment();
      }}
    >
      <img
        src={image}
        className="absolute  object-cover w-full h-full  rounded-[6px] z-10 hover:scale-[1.4] transition-all duration-700 ease-in-out"
      />
      <div className="relative z-50 bottom-[20px] left-[30px] font-bold">
        {title}
      </div>
    </div>
  );
};

export default Departments;

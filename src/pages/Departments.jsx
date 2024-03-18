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
} from "../assets/index";

const Departments = () => {
  console.log(Facilities);
  return (
    <>
      <div className="w-[1320px] h-[50px] rounded-[8px] font-[700px] bg-[#BACCE7] flex flex-col justify-end">
        Directorate of Finance & Administration
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-2">
        <DepartmentTile title="Administration" image={Administration} link="" />
        <DepartmentTile title="Finance" image={Finance} link="" />
        <DepartmentTile title="Human Resources" image={HumanR} link="" />
        <DepartmentTile
          title="Budgeting and Planning"
          image={Budgeting}
          link=""
        />
      </div>

      <div className="w-[1320px] h-[50px] rounded-[8px] font-[700px] bg-[#BACCE7] flex flex-col justify-end">
        Directorate of Technical Services
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-2">
        <DepartmentTile
          title="Information Technology Services"
          image={InfoTS}
          link=""
        />
        <DepartmentTile title="Satellite Navigation" image={SatNav} link="" />
        <DepartmentTile
          title="Network Operation Center"
          image={Network}
          link=""
        />
        <DepartmentTile title="Innovation" image={Innovation} link="" />
        <DepartmentTile
          title="Satellite Control and Operation"
          image={SatCtrl}
          link=""
        />
        <DepartmentTile title="Broadband" image={Broadband} link="" />
        <DepartmentTile title="Broadcast" image={Broadcast} link="" />
        <DepartmentTile title="Facility" image={Facilities} link="" />
      </div>

      <div className="w-[1320px] h-[50px] rounded-[8px] font-[700px] bg-[#BACCE7] flex flex-col justify-end">
        Directorate of Marketing & Business Development
      </div>
      <div className="grid grid-cols-5 gap-x-2 gap-y-2">
        <DepartmentTile
          title="Marketing and Stakeholders Engagement"
          image={Marketing}
          link=""
        />
        <DepartmentTile title="Sales" image={Sales} link="" />
        <DepartmentTile title="Business Office" image={Business} link="" />
      </div>
    </>
  );
};
const DepartmentTile = ({ title, image, link }) => {
  return (
    <div
      className="bg-cover w-[235px] h-[235px] rounded-[6px] text-white font-[700px] flex flex-col justify-end"
      style={{ backgroundImage: `url("${image}")` }}
    >
      {title}
    </div>
  );
};
export default Departments;

import React from "react";
import {Facilities, Marketing, Network, Innovation, Finance, HumanR, Budgeting, InfoTS, Administration, Broadcast, Sales, Business, SatNav, Broadband, SatCtrl} from "../assets/index";

const Departments = () => {
  console.log(Facilities)
  return (
    <>
    <div>
      <p className=" text-black font-[600] text-[16px]">List Of Departments</p>
    </div>
    <div>

      <div className="grid grid-cols-5 gap-x-2 gap-y-2">
        <DepartmentTile title="Facility" image={Facilities} link=""/>
        <DepartmentTile title="Marketing and Stakeholders Engagement" image={Marketing} link=""/>
        <DepartmentTile title="Network Operation Center" image={Network} link=""/>
        <DepartmentTile title="Innovation" image={Innovation} link=""/>
        <DepartmentTile title="Finance" image={Finance} link=""/>
      

      
        <DepartmentTile title="Human Resources" image={HumanR} link=""/>
        <DepartmentTile title="Budgeting and Planning" image={Budgeting} link=""/>
        <DepartmentTile title="Information Technology Services" image={InfoTS} link=""/>
        <DepartmentTile title="Administration" image={Administration} link=""/>
        <DepartmentTile title="Broadcast" image={Broadcast} link=""/>
    

      
        <DepartmentTile title="Sales" image={Sales} link=""/>
        <DepartmentTile title="Business Office" image={Business} link=""/>
        <DepartmentTile title="Satellite Navigation" image={SatNav} link=""/>
        <DepartmentTile title="Broadband" image={Broadband} link=""/>
        <DepartmentTile title="Satellite Control and Operation" image={SatCtrl} link=""/>
      </div>

    </div>
    </>

  );


};
const DepartmentTile =({title, image ,link})=>{
  return(
    <div className="bg-cover w-[200px] h-[200px] rounded-[6px] text-white font-[700px] flex flex-col justify-end"   style={{backgroundImage:`url("${image}")`}}>
        {title}
    </div>
  )
}
export default Departments;

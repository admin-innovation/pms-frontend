import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Departments } from "../data/temp";
import { Bgimage } from "../assets";


const Department = () => {
  const { department_id } = useParams()

  return(
    <div>
      <div className="h-[340px] w-[1317px]">
        <div className="h-[200px] w-[1317px]  text-[#FFF] font-bold text-lg align-text-bottom text-center "
              style={{ backgroundImage: `url("${Bgimage}")` }}>
          {department_id}
        </div>
      </div>
    </div>    
  );
};


export default Department;

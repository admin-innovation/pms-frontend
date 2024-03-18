import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Department = () => {
  const { department_id } = useParams();
  return <div>Department {department_id}</div>;
};



export default Department;

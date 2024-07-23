import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { getEmployee, getNotifications } from "../../backend/api";
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { getGoals } from "../../backend/api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const [employee, setEmployeeData] = useState();

  useEffect(() => {
    const userId = JSON.parse(Cookies.get("user")).id;

    const dataLoad = async () => {
      await getEmployee(userId);
      await getGoals(1000);
      await getNotifications(userId);
    };
    console.log(userId);
    if (userId) {
      dataLoad();
    }
  }, []);

  return (
    <>
      <div className=" bg-[#F1F4F9]   flex flex-row  relative w-screen max-h-screen overflow-y-hidden overflow-x-hidden   py-[30px]   ">
        <ToastContainer />

        <div className="relative mx-[20px] h-screen ">
          <div className="top-[30px]">
            <Nav />
          </div>
        </div>

        <div className="relative  w-full min-h-screen overflow-y-scroll   flex flex-col items-center justify-center ">
          <div className="w-[80%] fixed top-[10px]    h-[80px] z-100  ">
            <Header />
          </div>
          <div className="w-full h-full relative flex  mt-[50px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

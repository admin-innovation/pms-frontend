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
  const contentRef = useRef(null);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const userId = JSON.parse(Cookies.get("user")).id;

    const dataLoad = async () => {
      await getEmployee(userId);
      await getGoals(1000);
      await getNotifications(userId);
    };

    if (userId) {
      dataLoad();
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current.scrollTop > 80) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener("scroll", handleScroll);

    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
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

        <div
          id="content"
          ref={contentRef}
          className="relative  w-full max-h-screen bg-blur overflow-y-scroll   flex flex-col gap-10  items-center justify-center "
        >
          <div
            className={`fixed top-[10px] w-[80%] h-[80px] z-[100] ${
              isBlurred ? "backdrop-blur-lg" : ""
            }`}
          >
            <Header />
          </div>
          <div className="relative z-[50] w-full h-full relative flex min-h-screen mt-[160px]  ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

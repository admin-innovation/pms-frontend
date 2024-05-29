import React from "react";
import { Link, Outlet } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";
import { setUser } from "../../backend/store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getEmployee, fetchNotifications } from "../../backend/api";
import { useState, useEffect, useRef } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Cookies from "js-cookie";
import { setGoals } from "../../backend/store/GoalSlice";
import { setNotifications } from "../../backend/store/NotificationSlice";
import { getGoals } from "../../backend/api";

const Layout = ({ children }) => {
  const [user, setUserData] = useState();
  const userId = Cookies.get("userId");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getNotifications = async () => {
      try {
        const notifications = await fetchNotifications(userId);
        dispatch(setNotifications(notifications.notifications));
      } catch (error) {
        console.error("Error fetching Goals:", error);
      }
    };
    const fetchGoalsData = async () => {
      try {
        const goals = await getGoals(1000);
        dispatch(setGoals(goals.goals));
      } catch (error) {
        console.error("Error fetching Goals:", error);
      }
    };

    const fetchEmployee = async (id) => {
      try {
        const employee = await getEmployee(userId);
        setUserData(employee);
        if (employee) {
          dispatch(setUser(employee));
          setUserData(employee);
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };
    if (userId) {
      fetchEmployee(userId);
      fetchGoalsData();
      getNotifications();

      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [dispatch]);

  return (
    <>
      <div className=" bg-[#F1F4F9]   flex flex-row  relative w-screen max-h-screen overflow-y-hidden overflow-x-hidden   py-[30px]   ">
        <div className="relative mx-[20px] h-screen ">
          <div className="top-[30px]">
            <Nav />
          </div>
        </div>

        <div className="relative  w-full min-h-screen overflow-y-scroll   flex flex-col items-center justify-center ">
          <div className="w-[80%] fixed top-[10px]    h-[80px] z-100  ">
            <Header />
          </div>
          <div className="w-full h-full relative flex min-h-screen mt-[50px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

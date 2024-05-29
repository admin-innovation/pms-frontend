import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { setUser } from "../../backend/store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee, fetchNotifications } from "../../backend/api";
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { setGoals } from "../../backend/store/GoalSlice";
import { getGoals, getTask } from "../../backend/api";
import { setTasks } from "../../backend/store/TaskSlice";

const Layout = () => {
  const [user, setUserData] = useState();
  const userId = Cookies.get("userId");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTasks = async (employee_id) => {
      try {
        const tasks = await getTask(employee_id);
        if (tasks) {
          dispatch(setTasks(tasks));
        }
      } catch (error) {
        console.error("Error fetching Tasks:", error);
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
      fetchTasks(userId);

      setIsLoading(false);
      if (user) {
        setIsLoading(false);
      }
    }
  }, [dispatch]);
  return (
    <div className=" flex flex-row gap-[rem] relative w-screen max-h-screen overflow-y-scroll  overflow-x-hidden   py-[30px]   pl-[20px] pr-[60px]">
      <div className="relative w-[25%]">
        <div className="fixed top-[30px]">
          <Nav />
        </div>
      </div>

      <div className="w-[78%]  h-full  relative  flex flex-col items-center justify-center ">
        <div className="w-[80%] fixed top-[10px]    h-[80px] z-100  ">
          <Header />
        </div>
        <div className="w-full h-full min-h-screen relative flex mt-[50px] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

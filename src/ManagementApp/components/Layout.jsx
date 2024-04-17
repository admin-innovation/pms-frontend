import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import { setUser } from "../../backend/store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getEmployee, fetchNotifications } from "../../backend/api";
import { useState, useEffect, useRef } from "react";
import LoadingScreen from "./LoadingScreen";
import Cookies from "js-cookie";
import { setGoals } from "../../backend/store/GoalSlice";
import { getGoals } from "../../backend/api";

// Find away that only verified users with tokens are allowed to login else go back to login

const Layout = ({ children }) => {
  const [user, setUserData] = useState();
  const [searchParams] = useSearchParams();
  const userId = Cookies.get("userId");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
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

      setIsLoading(false);
      if (user) {
        setIsLoading(false);
      }
    }
    fetchGoalsData();
  }, [dispatch]);
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <div className=" bg-[#F1F4F9]   flex flex-row gap-[rem] relative w-screen min-h-screen overflow-y-scroll  overflow-x-hidden   py-[30px]   pl-[20px] pr-[60px]">
      <div className="relative w-[25%]">
        <div className="fixed top-[30px]">
          <Nav />
        </div>
      </div>

      <div className="w-[78%]  h-full  relative  flex flex-col items-center justify-center ">
        <div className="w-[80%] fixed top-[10px]    h-[80px] z-100  ">
          <Header />
        </div>
        <div className="w-full h-full relative flex mt-[50px] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

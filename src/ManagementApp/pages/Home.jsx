import React from "react";
import { CiSearch } from "react-icons/ci";
import { CircularProgress } from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import ChartTasks from "../components/Chart";
import GoalForm from "../components/GoalForm";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router";
import { sendToHr } from "../../backend/api";
import { FaDropbox } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
// import loadingAnimation from

const Home = () => {
  const goals = useSelector((state) => state.goals);
  useEffect(() => {
    console.log("Goals state updated:", goals);
  }, [goals]);
  const [goalform, setGoalForm] = useState(false);
  const [goalPercentage, setGoalPercentage] = useState(0);
  useEffect(() => {
    if (goals.goals.length > 0) {
      const sum = goals.goals?.reduce((total, obj) => total + obj.status, 0);
      setGoalPercentage(sum);
    }
  }, [goals]);
  const handleAddGoal = (e) => {
    setGoalForm(true);
  };
  const closeGoalForm = () => {
    setGoalForm(false);
  };
  return (
    <div className="w-full flex flex-col rounded-[10px] mr-[20px]">
      {goalform && <GoalForm close={closeGoalForm} />}

      <div className="w-full gap-4  mt-[10px] flex flex-wrap">
        <div className="relative flex flex-wrap  bg-white min-h-[160px] min-w-[700px] rounded-[8px] items-center p-[30px] gap-6 ">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[16px] font-[700]">Goal Progress</p>
              <p className="font-[300] text-[12px] ">
                Progress of Goal based on tasks of all departments
              </p>
            </div>
            <div className="relative w-[250px] bg-[#D9D9D9] h-[8px] rounded-full">
              <div
                className="absolute h-full bg-[#74B72E] rounded-full"
                style={{ width: `${goalPercentage}%` }}
              />
            </div>
            <span className="text-[20px] font-[600] ">{goalPercentage}%</span>
          </div>
          <div className="relative w-[1px] h-[80%] bg-[#D9D9D9] rounded-full" />
          <div className="flex flex-wrap">
            {goals.goals.length > 0 ? (
              goals.goals
                .slice(0, 3)
                ?.map((item, key) => (
                  <GoalMeter status={item.status} id={item.title} />
                ))
            ) : (
              <div className="w-full h-full flex text-gray-400   flex-col items-center justify-center opacity-30 hover:opacity-75 cursor-pointer ">
                <span>Your don't have nay goals yet</span>
                <span className="text-[15px]">Add Goals</span>
                <span className="text-[30px]">
                  <FaDropbox />
                </span>
              </div>
            )}
          </div>
          {goals.goals.length > 0 ? (
            <a
              href="goals"
              className=" absolute text-[10px] cursor-pointer font-normal w-[50px] text-[white] h-[20px] flex items-center justify-center rounded-[4px] bg-[#4D7CC1] right-[30px] hover:bg-[#4772b2] bottom-[20px]"
            >
              more
            </a>
          ) : (
            <div
              className=" absolute text-[10px] cursor-pointer font-normal gap-2 py-[5px] px-[10px] text-[white]  flex items-center justify-center rounded-[4px] bg-[#4D7CC1] right-[30px] hover:bg-[#4772b2] bottom-[20px]"
              onClick={handleAddGoal}
            >
              <IoMdAddCircle className="text-[15px]" />{" "}
              <span>Create new Goal</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-h-[160px] bg-white rounded-[10px]">
          <Calendar className="" />
        </div>
      </div>
      <div className="w-full flex mt-[1rem] gap-4 ">
        <div className="flex-1  bg-white rounded-[8px] flex flex-col p-[20px]">
          <div className="w-full flex justify-between">
            <p className="text-[16px] font-[700]">Analytics Per Department</p>
            <div className="flex gap-4">
              <div className="w-[80px] h-[30px] text-center rounded-[4px] bg-[#6A91CB24]">
                This week
              </div>

              <div className="w-[57px] h-[30px] border-[1px] border-[#17417E] rounded-[4px] text-center cursor-pointer">
                Filter
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center mt-[1rem] flex-col gap-[1rem]">
            <div className="w-[70%] h-[30px] flex bg-[white] border-[1px] border-[#6A91CB] items-center rounded-[30px] ">
              <span className="text-[20px] pl-[20px] pr-[5px] text-slate-400">
                <CiSearch />
              </span>

              <input
                className="decorations-none no-underline outline-none w-full rounded-[30px]"
                placeholder="Facility"
              />
            </div>
            <div className="w-[70%] flex justify-between">
              <p className="text-[18px] font-[700]">
                HOD:{" "}
                <span className="text-[13px] font-[300]">Adoyiza Daniel</span>
              </p>
              <p className="text-[18px] font-[700]">
                No. of Staff: <span className="text-[13px] font-[300]">15</span>
              </p>
            </div>
          </div>
          <ChartTasks />
        </div>
        <div className="bg-[white] flex-1 h-full rounded-[8px]">
          <div className="flex w-full justify-between p-[20px]">
            <p className="font-[700] text-[16px]">Goals Window</p>
            <div
              className="bg-[#4D7CC1] rounded-[4px] text-white flex items-center px-[10px] py-[5px] gap-3 cursor-pointer hover:bg-[#072b61]"
              onClick={handleAddGoal}
            >
              <IoMdAddCircle className="text-[25px]" />{" "}
              <span>Create new Goal</span>
            </div>
          </div>
          <div className="px-[20px] w-full flex flex-col gap-5 pb-[20px] max-h-[500px] min-h-[300px]">
            {goals.goals.length > 0 ? (
              goals.goals
                .slice(0, 5)
                .map((item, key) => <GoalCheckBox key={key} item={item} />)
            ) : (
              <div className="w-full h-[300px] flex text-gray-400  flex-col items-center justify-center opacity-30 hover:opacity-75 cursor-pointer ">
                <span className="">Your don't have nay goals yet</span>
                <span className="text-[15px]">Create Goals</span>
                <span className="text-[30px]">
                  <FaDropbox />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

import { format, parseISO } from "date-fns";

const GoalCheckBox = ({ item }) => {
  const goal_id = item._id;
  const [loading, setLoading] = useState(false);
  const formattedDate = (date) => {
    return format(parseISO(date), "dd-MM-yyyy");
  };
  const send = async () => {
    try {
      setLoading(true);
      const data = await sendToHr(goal_id);
      if (data.status) {
        setLoading(false);
      }
    } catch {
      toast.error("error sending to Hr");
    }
  };
  return (
    <div className="flex w-full items-center justify-between">
      <label className=" flex items-center gap-4">
        <span className="text-[13px] font-[500]">{item.title}</span>
      </label>
      {!item.sent_to_hr ? (
        <span
          onClick={send}
          className="border-[1px] border-solid border-[#17417E] w-[80px] flex items-center justify-center text-[12px] font-[600] text-[#17417E] py-[3px] rounded-[4px] hover:bg-[#e0ecf2] cursor-pointer"
        >
          {!loading ? (
            "Send to HR"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
              width="20"
              height="20"
              style={{
                shapeRendering: "auto",
                display: "block",
                background: "transparent",
              }}
            >
              <circle
                strokeDasharray="164.93361431346415 56.97787143782138"
                r="35"
                strokeWidth="10"
                stroke="#17417E"
                fill="none"
                cy="50"
                cx="50"
              >
                <animateTransform
                  keyTimes="0;1"
                  values="0 50 50;360 50 50"
                  dur="1s"
                  repeatCount="indefinite"
                  type="rotate"
                  attributeName="transform"
                />
              </circle>
            </svg>
          )}
        </span>
      ) : (
        <span className="text-[12px] font-medium">
          {formattedDate(item.date_sent_to_hr)}
        </span>
      )}
    </div>
  );
};

const GoalMeter = ({ id, status }) => {
  return (
    <div className="flex  items-center justify-center text-left">
      <CircularProgress
        value={status}
        classNames={{
          svg: "w-[72px] h-[72px] ",
          indicator: "stroke-[#4D7CC1]",
          track: "stroke-[#E9EFF7]",
          value: "text-1xl font-semibold text-black",
        }}
        strokeWidth={20}
        showValueLabel={true}
      />
      <label className="text-[10px] w-[10ch] ">{id}</label>
    </div>
  );
};

const Calendar = () => {
  function getWeekCalendar(date) {
    const dayOfWeek = date.getDay();
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);

    const calendar = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(currentDate.getDate() + i);
      calendar.push(currentDate);
    }

    return calendar;
  }

  // Example usage
  const date = new Date();
  const today = date.getDate();
  const weekCalendar = getWeekCalendar(date);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sun"];

  return (
    <div className="relative flex  items-center justify-center w-full bg-[white] h-full rounded-[10px]">
      <span className=" absolute text-[16px] font-bold right-3 top-4">
        {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
      </span>
      <div className="relative w-full mx-[20px]  flex items-center justify-center">
        {weekCalendar.map((item, key) => {
          return (
            <div
              className={`transition-all duration-400 ease-in-out w-full h-full py-[10px]  font-[600] cursor-pointer rounded-[8px] flex flex-col text-[15px] items-center justify-center gap-[8px] ${
                today === item.getDate()
                  ? "bg-[#E9EFF7] drop-shadow-md"
                  : "hover: hover:bg-[#f7faff] "
              } `}
            >
              <span className="">{days[item.getDay()]}</span>
              <span>{item.getDate()}</span>
              <div className="rounded-full black w-[5px] h-[5px] bg-black" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

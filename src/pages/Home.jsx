import React from "react";
import { CiSearch } from "react-icons/ci";
import { CircularProgress } from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { goals } from "../data/temp";

import ChartTasks from "../components/Chart";
import GoalForm from "../components/GoalForm";

const Home = () => {
  const [goalsList, setGoals] = useState([...goals]);

  const percentage = 70;
  const [goalform, setGoalForm] = useState(false);
  const handleAddGoal = (e) => {
    setGoalForm(true);
  };
  const closeGoalForm = () => {
    setGoalForm(false);
  };
  return (
    <div className="w-full flex flex-col rounded-[10px] ">
      {goalform && <GoalForm close={closeGoalForm} addGoal={setGoals} />}

      <div className="w-full gap-4  mt-[10px] flex">
        <div className="flex bg-white h-[160px] w-[px] rounded-[8px] items-center p-[30px] gap-6 ">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[16px] font-[700]">Goal Progress</p>
              <p className="font-[300] text-[12px] ">
                Progress of Goal based on tasks of all departments
              </p>
            </div>
            <div className="relative w-[250px] bg-[#D9D9D9] h-[8px] rounded-full">
              <div
                className="absolute h-full bg-[#4D7CC1] rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="text-[20px] font-[600] ">{percentage}%</span>
          </div>
          <div className="relative w-[1px] h-[128px] bg-[#D9D9D9] rounded-full" />
          <div className="flex gap-6 ">
            <GoalMeter status={80} id="Goal 1" />
            <GoalMeter status={50} id="Goal 2" />
            <GoalMeter status={20} id="Goal 3" />
          </div>
        </div>
        <div className="w-[500px] h-[160px] bg-white rounded-[10px]">
          <Calendar className="" />
        </div>
      </div>
      <div className="w-full flex mt-[1rem] gap-4 ">
        <div className="w-[600px]  bg-white rounded-[8px] flex flex-col p-[20px]">
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
        <div className="bg-[white] w-[600px] h-full rounded-[8px]">
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
          <div className="px-[20px] w-full flex flex-col gap-5 pb-[20px]">
            {goalsList.map((item, key) => {
              return (
                <GoalCheckBox title={item.title} checked={item.achieved} />
              );
            })}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
const GoalCheckBox = ({ checked, title }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <label className=" flex items-center">
        <input className="w-[33px]" type="checkbox" checked={checked} />
        <span className="text-[13px] font-[500]">{title}</span>
      </label>
      {!checked ? (
        <span className="border-[1px] border-solid border-[#17417E] w-[80px] flex items-center justify-center text-[12px] font-[600] text-[#17417E] py-[3px] rounded-[4px] hover:bg-[#e0ecf2] cursor-pointer">
          Send to HR
        </span>
      ) : (
        <span className="text-[9px] font-[300]">29th March</span>
      )}
    </div>
  );
};

const GoalMeter = ({ id, status }) => {
  return (
    <CircularProgress
      label={id}
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
  console.log(weekCalendar);
  return (
    <div className="relative flex  items-center justify-center w-full bg-[white] h-full rounded-[10px]">
      <span className=" absolute text-[16px] font-bold right-3 top-4">
        {date.getDate()}-{date.getMonth()}-{date.getFullYear()}
      </span>
      <div className="relative w-full  flex items-center justify-center">
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

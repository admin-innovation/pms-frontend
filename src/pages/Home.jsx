import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { CircularProgress } from "@nextui-org/react";

const Home = () => {
  const User = {
    name: "Joe",
    profile_picture: "/joe.jpg",
  };
  const percentage = 70;
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <p className="text-[20px] font-[700]">Welcome Back, {User.name}</p>
        <div className="w-[40%] h-[30px] flex bg-[white] items-center rounded-[30px] ">
          <span className="text-[20px] pl-[20px] pr-[5px] text-slate-400">
            <CiSearch />
          </span>

          <input
            className="decorations-none no-underline outline-none w-full rounded-[30px]"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center">
          <div className="relative flex">
            <span className="text-[30px] text-slate-700">
              <IoIosNotificationsOutline />
            </span>
            <span className="text-[red] absolute text-[10px] right-[5px] top-[4px] ">
              <GoDotFill className="" />
            </span>
          </div>
          <div className="flex bg-[#585959]  py-[5px] px-[20px] items-center rounded-[20px] relative gap-3 h">
            <img
              src={User.profile_picture}
              className="w-[32px] h-[32px] rounded-[60%] object-cover relative right-[15px]"
            />
            <span className="text-white font-medium relative right-[20px]">
              John Doe
            </span>
            <span className="text-white font-medium text-[20px]">
              <IoMdMore />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full gap-4  mt-[10px] flex">
        <div className="flex bg-white h-[160px] w-[700px] rounded-[8px] items-center p-[30px] gap-6 ">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[16px] font-[700]">Goal Progress</p>
              <p className="font-[300] text-[12px] ">
                Progress of Goal based on tasks of all departments
              </p>
            </div>
            <div className="relative w-[333px] bg-[#D9D9D9] h-[8px] rounded-full">
              <div
                className="absolute h-full bg-[#4D7CC1] rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-[20px] font-[600] ">{percentage}%</span>
          </div>
          <div className="relative w-[1px] h-[128px] bg-[#D9D9D9] rounded-full" />
          <div className="w-[10vw] flex gap-6 ">
            <GoalMeter status={80} id="Goal 1" />
            <GoalMeter status={50} id="Goal 2" />
            <GoalMeter status={20} id="Goal 3" />
          </div>
        </div>
        <div className="w-[500px] h-[160px] bg-white rounded-[8px]"></div>
      </div>
      <div className="w-full flex mt-[1.5rem] ">
        <div className="w-[650px] h-[600px] bg-white rounded-[8px]"></div>
      </div>
      <div></div>
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
    // <div className="w-[70px] h-[70px] rounded-full border-[10px] border-[#E9EFF7] border-solid box-border relative flex items-center justify-center">
    //   <div className="flex flex-col text-[12px] font-[600] items-center justify-center w-full ">
    //     <p>#1</p>
    //     <p>Goal</p>
    //   </div>

    // {/* <div
    //   className="absolute  w-[70px] h-[70px] rounded-full border-[10px] border-[#4D7CC1] border-solid box-border"
    //   style={{
    //     clipPath: `inset(0 ${100 - status}% 0 0)`,
    //   }}
    // ></div> */}
    // </div>
  );
};

export default Home;

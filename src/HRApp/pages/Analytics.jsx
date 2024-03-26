import React from 'react';
import { useRef } from "react";
import Select from "react-select";
import { TopPerformerData, TopPerformerHR } from "../../data/temp";
import { CiSearch } from "react-icons/ci";
import ChartTasks from "../components/Chart";
import { CircularProgress } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import { FaCheckCircle } from "react-icons/fa";
import { goals } from "../../data/temp";

const Analytics = () => {
  const x = 100;
  const QuaterOptions = [
    { value: "3rd Quater", label: "3rd Quater" },
    { value: "1st Quater", label: "1st Quater" },
    { value: "2nd Quater", label: "2nd Quater" },
    { value: "4th Quater", label: "4th Quater" },
  ];

  const YearOptions = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ];

  return (
    <div className="w-full relative min-h-screen flex  flex-col gap-[10px]  ">
      <div className="w-[30%] flex gap-[10px]">
        <div className="w-[40%] text-[10px] font-bold">
          {/* Filter 1 */}
          <Select options={QuaterOptions} defaultValue={QuaterOptions[1]} />
        </div>
        <div className="w-[40%] text-[10px] font-bold">
          {/* Filter 1 */}
          <Select options={YearOptions} defaultValue={YearOptions[1]} />
        </div>
      </div>
      <div className=" w-full relative flex flex-row overflow-x-scroll gap-[20px] scrollbar-hide  ">
        <div className=" min-w-[600px]  bg-[white] rounded-[8px]">
          <div className="w-full h-full flex flex-col items-start  gap-6 px-[10px] py-[5px]">
            <p className="font-bold text-[16px]">Top Performer</p>
            <div className="w-full flex justify-between">
              <div className="relative flex items-center gap-3">
                <img
                  src="/joe.jpg"
                  className="w-[80px] h-[80px] rounded-[50%]"
                />

                <div className="w-full flex flex-col">
                  <p className="text-[14px] ">
                    <span className="font-[600] text-[16px] mr-[3px]">
                      Name:
                    </span>
                    {TopPerformerData.name}
                  </p>
                  <p className="text-[14px] ">
                    <span className="font-[600] text-[16px] mr-[3px]">
                      Department:
                    </span>
                    {TopPerformerData.department}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="flex flex-row">
                  <p className="text-[14px] font-[600]">Average task Rating:</p>
                  <ReactStars
                    count={5}
                    // FIx these stars
                    value={TopPerformerData.performance_rating}
                    isHalf={true}
                    edit={false}
                    emptyIcon={
                      <i className="far fa-star-o" aria-hidden="true"></i>
                    }
                    halfIcon={
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    }
                    fullIcon={<i className="fa fa-star"></i>}
                    size={15}
                    activeColor="#ffd700"
                  />
                </span>
                <span className="flex">
                  <p className="text-[14px] font-[600]">Average peer Rating:</p>
                  <ReactStars
                    count={5}
                    value={TopPerformerData.peer_rating}
                    isHalf={true}
                    edit={false}
                    emptyIcon={
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    }
                    // onChange={ratingChanged}
                    size={15}
                    activeColor="#ffd700"
                  />
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-row items-center gap-[5px] leading-[normal]">
                <span className="font-bold">Task completed:</span>
                <span className="text-sm">
                  {TopPerformerData.task_done.count}
                </span>
                <span className="text-xs text-[gray]">out of</span>
                <span className="text-sm">
                  {TopPerformerData.task_assigned.count}
                </span>
              </div>
              <div>
                <span className="font-bold">Avergae Mail Check time:</span>
                <span className="text-[gray] text-sm">
                  {TopPerformerData.average_mail_check_time} minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" min-w-[600px]  bg-[white] rounded-[8px]">
          <div className="w-full h-full flex flex-col items-start  gap-6 px-[10px] py-[5px]">
            <p className="font-bold text-[16px]">
              Top Performer per Department
            </p>
            <div className="w-full flex justify-between">
              <div className="relative flex items-center gap-3">
                <img
                  src="/samiya.png"
                  className="w-[80px] h-[80px] rounded-[50%]"
                />

                <div className="w-full flex flex-col">
                  <p className="text-[14px] ">
                    <span className="font-[600] text-[16px] mr-[3px]">
                      Name:
                    </span>
                    {TopPerformerHR.name}
                  </p>
                  <p className="text-[14px] ">
                    <span className="font-[600] text-[16px] mr-[3px]">
                      Department:
                    </span>
                    {TopPerformerHR.department}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="flex flex-row">
                  <p className="text-[14px] font-[600]">Average task Rating:</p>
                  <ReactStars
                    count={5}
                    // FIx these stars
                    value={TopPerformerHR.performance_rating}
                    isHalf={true}
                    edit={false}
                    emptyIcon={
                      <i className="far fa-star-o" aria-hidden="true"></i>
                    }
                    halfIcon={
                      <i className="fa fa-star-half-o" aria-hidden="true"></i>
                    }
                    fullIcon={<i className="fa fa-star"></i>}
                    size={15}
                    activeColor="#ffd700"
                  />
                </span>
                <span className="flex">
                  <p className="text-[14px] font-[600]">Average peer Rating:</p>
                  <ReactStars
                    count={5}
                    value={TopPerformerHR.peer_rating}
                    isHalf={true}
                    edit={false}
                    emptyIcon={
                      <i className="fa fa-star-o" aria-hidden="true"></i>
                    }
                    // onChange={ratingChanged}
                    size={15}
                    activeColor="#ffd700"
                  />
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex flex-row items-center gap-[5px] leading-[normal]">
                <span className="font-bold">Task completed:</span>
                <span className="text-sm">
                  {TopPerformerHR.task_done.count}
                </span>
                <span className="text-xs text-[gray]">out of</span>
                <span className="text-sm">
                  {TopPerformerHR.task_assigned.count}
                </span>
              </div>
              <div>
                <span className="font-bold">Avergae Mail Check time:</span>
                <span className="text-[gray] text-sm">
                  {TopPerformerHR.average_mail_check_time} minutes
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[400px]  bg-[white] rounded-[8px]"></div>
        <div className=" min-w-[400px]   bg-[white] rounded-[8px]"></div>
      </div>
      <div className="w-full font-bold text-[18px]">Goals</div>
      <div className="w-full grid grid-cols-4 gap-y-[20px]">
        {goals.map((goal, id) => {
          return <GoalTile goal={goal} />;
        })}
      </div>
      <div className="w-full font-bold text-[18px]">Analytics Graph</div>
      <div>
        <div className="w-full  bg-white rounded-[8px] flex flex-col p-[20px]">
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
              <div className="h-full flex items-center justify-center gap-[5px]">
                <p className="text-[18px] font-bold">Task Completion rate:</p>
                <div className="relative w-[200px] h-[10px] rounded-[10px] bg-[#E9EFF7]">
                  <div
                    className={`bg-[yellow]  absolute h-[10px] rounded-[10px]`}
                    style={{ width: x }}
                  />
                </div>
              </div>
            </div>
          </div>
          <ChartTasks />
        </div>
      </div>
    </div>
  );
};

const GoalTile = ({ goal }) => {
  return (
    <div
      className={`flex-shrink-0 w-[15rem] flex  flex-col items-center justify-center gap-[5px] h-[14.625rem] rounded-lg  ${
        goal.achieved
          ? "bg-gradient-to-bl from-[#7FFF00] to-[#CFFF90] flex items-center text-white"
          : "bg-white"
      }`}
    >
      <div>
        <div className=" font-['Raleway'] text-sm flex items-center text-center font-medium leading-[normal]">
          {goal.title}
        </div>
        <div className="w-full h-full flex items-center justify-center text-center">
          {goal.achieved ? (
            <span className="text-[100px]">
              <FaCheckCircle />
            </span>
          ) : (
            <CircularProgress
              value={goal.progress}
              classNames={{
                svg: "w-[146px] h-[146px] drop-shadow-xl",
                indicator: "stroke-[#4D7CC1]",
                track: "stroke-[#E9EFF7]",
                value: "text-1xl font-semibold ",
              }}
              strokeWidth={300}
              showValueLabel={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Analytics;

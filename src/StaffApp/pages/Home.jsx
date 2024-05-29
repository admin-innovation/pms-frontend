import React from "react";
import { CiSearch } from "react-icons/ci";
// import MiniCalendar from "../../horizon-tailwind-react/src/components/calendar/MiniCalendar";
import { CircularProgress } from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import People from "../components/Peopleimg";
import ReactStars from "react-rating-stars-component";
import Date from "../components/Date";
import { Link } from "react-router-dom";
import ComplaintPopup from "../components/ComplaintPopup";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Check from "../components/Check";
import P from "../components/P";

const Home = () => {
  const [complaintPopup, setComplainPopup] = useState(false);
  const complain = () => {
    setComplainPopup(!complaintPopup);
  };

  const tasks = useSelector((state) => state.tasks.tasks);
  const [pageData, setPageData] = useState({
    completed_percentage: 0,
    number_of_tasks: 0,
    completed_tasks: 0,
  });

  useEffect(() => {
    if (tasks.lentgth > 0) {
      const completed_tasks = tasks.filter(
        (task) => task.status === "completed"
      ).length;
      const number_of_tasks = tasks.length;
      const completed_percentage = completed_tasks / number_of_tasks;
      console.log("completed percentage", completed_percentage);
      setPageData({
        completed_percentage: completed_percentage,
        completed_tasks: completed_tasks,
        number_of_tasks: number_of_tasks,
      });
    }
  }, [tasks]);

  const percentage2 = 70;

  return (
    <div className="w-full flex flex-col rounded-[10px] gap-10 overflow-x-hidden">
      {complaintPopup ? <ComplaintPopup complain={complain} /> : ""}

      <div className="w-full gap-4  mt-[10px] flex">
        <Link to="/tasks/task-history">
          <div className=" relative flex bg-white h-[160px]  rounded-[8px] items-center p-[30px] gap-6 ">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[16px] font-[700]">Overall Task Completed</p>
                <p className="font-[300] text-[12px] ">
                  <span>{pageData.completed_tasks}</span>/
                  <span>{pageData.number_of_tasks}</span> tasks completed
                </p>
              </div>
              <div className="relative w-[300px] bg-[#D9D9D9] h-[8px] rounded-full">
                <div
                  className="absolute h-full bg-[#cdc307ed] rounded-full"
                  style={{ width: `${pageData.completed_percentage * 100}%` }}
                ></div>
              </div>
              <span className="text-[20px] font-[600] ">
                {pageData.completed_percentage * 100}%
              </span>
            </div>
          </div>
        </Link>
        <Link to="/tasks/task-review">
          <div className="flex bg-white h-[160px] w-[350px] rounded-[8px] items-center p-[30px] gap-6 ">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[16px] font-[700]">Average Task Review</p>
                <p className="font-[300] text-[12px] ">
                  Reviewed by GM on 13/05/2023
                </p>
              </div>

              <ReactStars value={1} count={5} edit={false} />

              <div className="flex items-center justify-between">
                <span className="text-[30px] font-[600] ">{1}.0</span>
                <div className="text-lg font-normal text-black"></div>
              </div>
            </div>
          </div>
        </Link>
        <button>
          {" "}
          <div className="w-[430px] h-[160px] bg-white rounded-[8px]">
            {<Date />}
          </div>
        </button>
      </div>

      <div className=" w-full h-full flex  gap-x-5 ">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="w-full bg-white h-[300px] rounded-lg  flex flex-col gap-2">
            <Link to="/tasks/ongoing-tasks">
              <div className="w-full flex justify-between px-[20px] pt-[10px]">
                <span className="font-medium">Ongoing Tasks</span>
                <span className="flex justify-center items-center gap-[5px]">
                  See all <FaChevronRight />{" "}
                </span>
              </div>
            </Link>

            <div className="flex flex-col gap-1 px-[20px]">
              {tasks.map((item) => {
                return (
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Check checked={false} size="30px" />
                      <P limit={30}>{item.title}</P>
                    </span>

                    <span className="flex">
                      <People people={item.task_members} />
                    </span>
                    <p>{item.deadline_date}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full bg-white h-[200px] rounded-lg  flex flex-col gap-2">
            <Link to="/tasks/task-review">
              <div className="w-full flex justify-between px-[20px] pt-[10px]">
                <span className="font-medium">Task Review</span>
                <span className="flex justify-center items-center gap-[5px]">
                  See all <FaChevronRight />{" "}
                </span>
              </div>
            </Link>

            <div className="px-[20px]">
              {tasks.map((item, key) => {
                return (
                  <div className="flex items-center justify-between">
                    <span className="flex gap-2">
                      <Check size="30px" checked={true} />
                      <P limit="20">This is some random text</P>
                    </span>
                    <ReactStars count={5} value={item.review.score} />
                    <div
                      className={`flex  w-[100px] h-[30px] rounded-[4px] bg-green-100 text-green-500 text-center  items-center mb-[25px]`}
                    >
                      <p className="w-full h-full text-center">{item.status}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col gap-2">
          <div className="w-full bg-white h-[350px] rounded-lg flex items-center justify-center">
            {/* <ChartTasks /> */}
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Mon", "Tue", "Wed", "Thurs", "Fri", "sat", "Sun"],
                },
              ]}
              series={[{ data: [10, 12, 6, 8, 9, 13, 6], color: "#17417E" }]}
              width={500}
              height={300}
            />
          </div>
          <div className="w-full bg-white h-[150px] rounded-lg flex flex-col  gap-3 px-[20px] justify-center">
            <span className="text-[16px] font-bold">Complaints</span>
            <p className="text-[12px]">
              You can file a complaint feedback HR or your General Manager
            </p>
            <div className="flex justify-end">
              <div
                onClick={() => {
                  complain();
                }}
                className="px-[10px] py-[5px] bg-[#4D7CC1] text-[14px] text-white flex items-center justify-center rounded-[4px]  hover:bg-[#224170] cursor-pointer"
              >
                File a complaint
              </div>
            </div>
          </div>
          <div className="w-full bg-white h-[150px] rounded-lg flex flex-col  gap-3 px-[20px] justify-center">
            <span className="text-[16px] font-bold">Peer Review</span>
            <p className="text-[12px]">
              Review Colleagues you have worked with
            </p>
            <div className="flex justify-end">
              <div className="px-[10px] py-[5px] bg-[#4D7CC1] text-[14px] text-white flex items-center justify-center rounded-[4px]  hover:bg-[#224170] cursor-pointer">
                Review a Colleague
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { CiSearch } from "react-icons/ci";
import { CircularProgress } from "@nextui-org/react";
import { IoMdAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import ChartTasks from "../components/Chart";
import TaskForm from "../components/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router";
import { sendToHr } from "../../backend/api";
import { FaDropbox } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
// import loadingAnimation from
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const Home = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const task_completed = 5;
  const task_assigned = 20;
  const [openForm, setOpenForm] = useState(false);
  const data = [
    { name: "Tasks Done", value: 16 },
    { name: "Tasks Undone", value: 8 },
    { name: "Tasks Over Due", value: 4 },
  ];
  const feedbackData = [
    {
      name: "Ayodele Yakub",
      complaint: "Trouble with CAD software",
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Ayodele Yakub",
      complaint: "Insufficient material for welding job",
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Anthony Joshua",
      complaint: "New software required",
      profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ];

  return (
    <div className="w-screen min-h-[100vh]   flex flex-col rounded-[10px] mr-[20px] gap-7 ">
      {openForm && (
        <TaskForm
          close={() => {
            setOpenForm(false);
          }}
        />
      )}
      <div className="relative flex gap-4">
        <div className="h-[160px] relative w-1/4 bg-white rounded-[10px]">
          <div className="relative w-full h-full p-[20px] flex flex-col  gap-[20px]">
            <div>
              <span className="text-[16px]  font-medium">Tasks Completed</span>
              <p className="text-[12px] font-light">
                <span>
                  {task_completed}/{task_assigned}
                </span>
                <span>tasks completed</span>
              </p>
            </div>
            <div>
              <ProgressBar percentage={80} />
              <div className="text-[20px] font-medium">80%</div>
            </div>
          </div>
        </div>
        <div className="relative h-[160px] relative w-1/4 bg-white rounded-[10px]">
          <div className="relative w-full h-full p-[20px] flex items-center">
            <DonutChart data={data} />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <div className="size-[20px] bg-[#F5BA45]" />
                <span className="text-[10px] gap-2 w-full">
                  16 Tasks Undone
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="size-[20px] bg-[#74B72E]" />
                <span className="text-[10px] gap-2 w-full">30 Tasks Done</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="size-[20px] bg-[#FF6347]" />
                <span className="text-[10px] gap-2 w-full">
                  23 Tasks Overdue
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 max-h-[180px] w-2/3 bg-white rounded-[10px]">
          <Calendar className="" />
        </div>
      </div>
      <div className="relative w-full h-full  flex gap-4 mb-[200px]">
        <div className=" w-1/2 flex-1 h-full flex flex-col gap-3">
          <div className="w-full relative py-[40px] bg-[white] rounded-[8px] px-[20px] gap-2">
            <div className="text-[16px] font-medium">
              <div className="w-full flex justify-between">
                <p className="text-[16px] font-[700]">Analytics</p>
                <div className="flex gap-4">
                  <div className="w-[80px] h-[30px] text-center rounded-[4px] bg-[#6A91CB24]">
                    This week
                  </div>

                  <div className="w-[57px] h-[30px] border-[1px] border-[#17417E] rounded-[4px] text-center cursor-pointer">
                    Filter
                  </div>
                </div>
              </div>
            </div>
            <ChartTasks />
          </div>
          <div className="w-full h-[300px] bg-[white] rounded-[8px]"></div>
        </div>
        <div className="w-1/2 flex-1 h-full flex flex-col gap-4">
          <div className="w-full h-[250px] bg-[white] rounded-[8px]">
            <div className="w-full h-full px-[10px] py-[10px]">
              <div className="flex justify-between">
                <span className="text-[18px] font-medium">Assigned tasks</span>
                <div
                  className="bg-[#4D7CC1] rounded-[4px] text-white flex items-center px-[10px] py-[5px] gap-3 cursor-pointer hover:bg-[#072b61]"
                  onClick={() => {
                    setOpenForm(true);
                  }}
                >
                  <IoMdAddCircle className="text-[25px]" />{" "}
                  <span>Create Task</span>
                </div>
              </div>
              <div>
                {tasks.length > 0 &&
                  tasks
                    ?.slice(0, 3)
                    .map((task, index) => (
                      <Task
                        key={index}
                        dateCreated={task.dateCreated}
                        taskMembers={task.task_members}
                        title={task.title}
                        deadline={task.deadline}
                        assigned={task.assigned}
                      />
                    ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[260px] bg-[white] rounded-[8px]">
            <div className="w-full h-full px-[10px] py-[10px]">
              <div className="flex justify-between">
                <span className="text-[18px] font-medium">
                  Pending Task Reviews
                </span>
                <div
                  className="text-[14px]"
                  onClick={() => {
                    console.log("task created");
                  }}
                >
                  see all
                </div>
              </div>
              {/* <div>
                {tasks.map((task, index) => (
                  <TaskReview
                    key={index}
                    dateCreated={task.dateCreated}
                    taskMembers={task.taskMembers}
                    title={task.title}
                    deadline={task.deadline}
                    assigned={task.assigned}
                  />
                ))}
              </div> */}
            </div>
          </div>
          <div className="w-full min-h-[260px] bg-[white] rounded-[8px] pb-[20px]">
            <div className="w-full h-full px-[10px] py-[10px]">
              <div className="flex justify-between">
                <span className="text-[18px] font-medium">
                  Complaints/Feedback
                </span>
                <div
                  className="text-[14px]"
                  onClick={() => {
                    console.log("task created");
                  }}
                >
                  see all
                </div>
              </div>
              <div>
                {feedbackData.map((feedback, index) => (
                  <FeedbackRow
                    key={index}
                    name={feedback.name}
                    complaint={feedback.complaint}
                    profilePicture={feedback.profilePicture}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
import { PieChart, Pie, Cell, Legend } from "recharts";
const DonutChart = ({ data }) => {
  const COLORS = ["#74B72E", "#F5BA45", "#FF6347"]; // Add your colors here

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={70}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <div className="absolute">Total</div>
        </Pie>
      </PieChart>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2>28 Total</h2>
      </div>
    </div>
  );
};
export default Home;

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
      <div
        className="bg-yellow-500 h-full text-center text-black"
        style={{ width: `${percentage}%` }}
      ></div>
      {percentage}%
    </div>
  );
};

const Task = ({ dateCreated, taskMembers, title, deadline, assigned }) => {
  console.log(taskMembers);
  return (
    <div className="flex items-center h-[60px] justify-between p-4 bg-white w-full">
      <div className="flex items-center w-[100px] ">
        <AvatarGroup max={3} total={taskMembers.length} spacing="small">
          {taskMembers.map((member, index) => (
            <Avatar
              key={index}
              src={member.profile_pic}
              alt={member.first_name}
              size="10px"
              className="size-[20px]"
              style={{ objectFit: "cover" }}
            />
          ))}
        </AvatarGroup>
      </div>

      <div className="flex ml-4 w-[30%] ">
        <h3 className="text-[12px] font-semibold">{title}</h3>
        {/* <p className="text-sm text-gray-500">{dateCreated}</p> */}
      </div>
      <div className="flex items-center justify-left w-[30%] ">
        <p className="text-[10px] items-center flex text-[gray]">{deadline}</p>
      </div>
      <div className="flex items-center justify-start w-[20%]">
        {assigned ? (
          <button className="px-4 py-1 text-sm text-[#4D7CC1] border-[#4D7CC1] border-[2px] rounded-lg ">
            Assign
          </button>
        ) : (
          <button className="px-4 py-1 text-sm  text-[#4D7CC1] border-[#4D7CC1] border-[2px] rounded-lg ">
            View
          </button>
        )}
      </div>
    </div>
  );
};

const TaskReview = ({
  dateCreated,
  taskMembers,
  title,
  deadline,
  assigned,
}) => {
  return (
    <div className="flex items-center h-[60px]  p-4 bg-white w-full justify-between">
      <div className="flex items-center ">
        {taskMembers.map((member, index) => (
          <img
            key={index}
            src={member.profilePicture}
            alt={member.name}
            className="w-7 h-7 rounded-full border-white -ml-2 first:ml-0"
          />
        ))}
        <div className="flex w-full ml-4  ">
          <h3 className="text-[12px] font-semibold">{title}</h3>
        </div>
      </div>

      <div className="flex items-center justify-start ">
        <button className="px-4 py-1 text-sm text-[#4D7CC1] border-[#4D7CC1] border-[2px] rounded-lg ">
          Review
        </button>
      </div>
    </div>
  );
};

const FeedbackRow = ({ name, complaint, profilePicture }) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border-b mb-4">
      <div className="flex items-center">
        <img
          src={profilePicture}
          alt={name}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{complaint}</p>
        </div>
      </div>
      <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
        View
      </button>
    </div>
  );
};

import React, { useState } from "react";
import Minus from "../../assets/Minus.svg";
import Check from "../../assets/Check.svg";
import Warning from "../../assets/Warning.svg";
import { Tasks } from "../data/temp";
import People from "../components/Peopleimg";
import { Link } from "react-router-dom";
import Description from "./Description";
import Modal from "../components/TaskSubmit";
import Desc from "../components/TaskDescription";
import { useSelector } from "react-redux";

const OngoingTask = () => {
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === "ongoing")
  );

  return (
    <div className="">
      <div className=" w-full flex items-center bg-white text-center justify-between pl-[30px] pr-[160px] mt-[20px] text-gray-400 rounded-lg">
        <div className="flex items-center justify-center ">
          <p>Task Title</p>
        </div>
        <div className="flex items-center justify-center">
          <p>Status</p>
        </div>
        <div className="flex items-center justify-center">
          <p>Deadline</p>
        </div>
        <div className="flex items-center justify-center">
          <p>Members</p>
        </div>
      </div>

      <div className="">
        {tasks.map((item, key) => {
          return (
            <TaskRow
              title={item.title}
              status={item.status}
              date={item.date}
              deadline={item.deadline_date}
              people={item.task_members}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
};

const TaskRow = ({ title, status, deadline, people, item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [descOPen, setDescOpen] = useState(false);
  const team_lead = item.team_lead;
  const userid = useSelector((state) => state.user.id);
  console.log(team_lead, userid);
  const modal = () => {
    setIsOpen(!isOpen);
  };
  const [description, setDescription] = useState(true);

  const opendesc = () => {
    setDescOpen(!descOPen);
  };
  const [desc, setDesc] = useState(true);

  return (
    <>
      <div className="relative w-full flex flex-row items-center pl-[20px] justify-between pr-[30px] bg-white pt-[10px] border-b-[1px] border-b-[#656667]/10">
        {isOpen && <Modal title={item.title} id={item._id} modal={modal} />}
        {descOPen && (
          <Desc
            opendesc={opendesc}
            item={item}
            submit={modal}
            team_lead={team_lead}
            user={userid}
          />
        )}
        <div className="w-[18%] flex items-center gap-2.5 pb-[15px] ">
          <div className="w-[30px]  ">
            <img src={status === "Not approved" ? Warning : Minus} />
          </div>

          <button
            className=" note text-start"
            onClick={() => {
              opendesc();
            }}
          >
            <p>{title}</p>
          </button>
        </div>
        <div className=" w-[20%]  relative flex ">
          <div
            className={`flex  w-[100px] h-[30px] rounded-[4px] ${
              status === "completed"
                ? "bg-red-100 text-red-500"
                : status === "ongoing"
                ? "bg-green-100 text-green-500"
                : status === "Overdue"
                ? "bg-amber-100 text-amber-300"
                : ""
            } text-center   w-[120px] mb-[25px]`}
          >
            <p
              className={`w-full h-full text-center
			 `}
            >
              {status}
            </p>
          </div>
        </div>

        <div className="w-[16%]">
          <p>{deadline}</p>
        </div>

        <div className="flex ">
          <div className="flex ">
            <People people={people} />
          </div>
        </div>

        <div className="bg-white text-center  w-[80px] mb-[23px]   border-[1px]  ">
          <button
            onClick={modal}
            className={`w-full ${
              team_lead !== userid
                ? "cursor-not-allowed pointer-events-none bg-gray-300 text-gray-600  opacity-50 "
                : " hover:bg-blue-500 hover:text-white rounded border-gray-500"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default OngoingTask;

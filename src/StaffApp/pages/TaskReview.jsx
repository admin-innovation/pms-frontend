import React, { useState } from "react";
import { Tasks } from "../data/temp";
import People from "../components/Peopleimg";
import Minus from "../../assets/Minus.svg";
import Check from "../../assets/Check.svg";
import Warning from "../../assets/Warning.svg";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";

const Modal = ({ isOpen, onClose, children }) => {
  const [opacity, setOpacity] = useState(isOpen ? "opacity-100" : "opacity-0");
  const [pointerEvents, setPointerEvents] = useState(
    isOpen ? "pointer-events-auto" : "pointer-events-none"
  );

  const closeModal = () => {
    setOpacity("opacity-0");
    setPointerEvents("pointer-events-none");
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 ${opacity} ${pointerEvents}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="relative  w-[782px] bg-white rounded-md shadow-lg my-auto h-[690px]">
        <div className="flex items-start justify-between p-3">
          <h3 className="text-lg font-semibold">Overall Rating</h3>

          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-5 px-[20px]">{children}</div>
      </div>
    </div>
  );
};
const TaskReview = () => {
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.submitted === "true")
  );

  return (
    <div className="">
      <div className="flex items-center bg-white text-center mt-[20px] text-gray-400 rounded-lg">
        <div className="w-[400px] ">
          <p>Task Title</p>
        </div>
        <div className="w-[205px]">
          <p>Status</p>
        </div>
        <div className="w-[250px]">
          <p>Rating</p>
        </div>
        <div className="w-[170px]">
          <p>Members</p>
        </div>
      </div>

      <div className="">
        {tasks.map((item, key) => {
          return <TaskRow task={item} />;
        })}
      </div>
    </div>
  );
};

const TaskRow = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="relative w-full flex flex-row items-center px-[10px] justify-between  bg-white pt-[10px] border-b-[1px] border-b-[#656667]/10">
        <div className="w-[35%] flex items-center gap-2.5 pb-[15px] ">
          <div className="w-[30px] ">
            <img src={task.status === "Not approved" ? Warning : Check} />
          </div>
          <div className="note">
            <p>{task.title}</p>
          </div>
        </div>
        <div className="relative w-[15%] flex ">
          <div
            className={`flex  w-[100px] h-[30px] rounded-[4px] ${
              task.status === "rejected"
                ? "bg-red-100 text-red-500"
                : task.status === "pompleted"
                ? "bg-green-100 text-green-500"
                : task.status === "pending"
                ? "bg-amber-100 text-amber-300"
                : ""
            } text-center   w-[120px] mb-[25px]`}
          >
            <p className="w-full h-full text-center">{task.status}</p>
          </div>
        </div>
        <ReactStars value={task.review.score} count={5} edit={false} />
        <div className="flex w-[10%]">
          <div className="flex ">
            <People people={task.task_members} />
          </div>
        </div>
        <div className="bg-white text-center  w-[80px] mb-[23px] border-gray-500 border-[1px]  hover:bg-blue-500 hover:text-white rounded">
          <button onClick={openModal} className="w-full">
            View
          </button>
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="flex items-center gap-3">
              <div className="text-6xl">{task.review.score}</div>
              <div className="w-full ">
                <ReactStars
                  value={task.review.score}
                  count={5}
                  size={30}
                  edit={false}
                />
                <div className="text-sm font-bold">Rated by GM</div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[35px] font-bold">
              <div className="">
                <p>{task.title}</p>
              </div>
              <div className="mr-[20px]">
                <p>{task.submitted_date}</p>
              </div>
            </div>
            <div class="mt-[10px] text-sm max-h-[82px] max-w-[750px]  break-words border-1 rounded-lg text-wrap ">
              {task.description}
            </div>

            <div className="flex items-center gap-6 ">
              {task.sub_tasks.map((subtask) => (
                <div className="flex">
                  <input
                    type="checkbox"
                    className="caret-[black]"
                    checked={subtask.achieved}
                  />
                  <label>{subtask.title}</label>
                </div>
              ))}
            </div>

            <div className="font-bold mt-[10px]">
              <p>Comment by GM</p>
            </div>

            <div className="text  ">
              <p className="block min-h-[200px] px-4 py-2 mt-4 text-black rounded-md border-1 text-wrap ">
                {task.review.comment}
              </p>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default TaskReview;

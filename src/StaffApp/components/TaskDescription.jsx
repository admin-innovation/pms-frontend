import React from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import People from "./Peopleimg";
import { BsSend } from "react-icons/bs";

const Desc = ({ opendesc, item, submit, team_lead, user }) => {
  console.log(item);
  return ReactDOM.createPortal(
    <>
      <div
        className={`absolute inset-0 w-screen h-screen  z-50 flex items-center justify-center overflow-auto bg-black/20`}
      >
        <div
          className="absolute inset-0 z-10 flex items-center justify-center w-screen h-screen overflow-auto bg-black/20"
          onClick={() => {
            opendesc();
          }}
        />
        <div className="absolute w-screen z-50 h-[70%] bottom-0 bg-slate-100 rounded-lg">
          <div
            className=" absolute right-10 text-[30px] font-light"
            onClick={() => {
              opendesc(false);
            }}
          >
            <IoCloseSharp />
          </div>
          <div className="flex pt-[40px] ">
            <div className=" bg-white  h-[440px] ml-[20px] rounded-lg w-[67%] ">
              <div className="mt-3 ml-4 text-2xl font-semibold">Task Title</div>
              <div className="mt-3 ml-4 font-semibold text-l">{item.title}</div>
              <div className="mt-6 ml-4 text-xl font-semibold">Description</div>
              <div className="ml-4 text-s text-neutral-900">
                {item.description}
              </div>
              <div className="flex">
                <div className="w-[470px] h-[152px] flex  ">
                  <div className="flex ">
                    <div className="mt-6 ml-4 text-xl x">
                      {item.sub_tasks.map((sub) => (
                        <li>{sub.title}</li>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" items-center h-[210px] w-[2px] mt-3 ml-5 border border-zinc-400 border-opacity-30"></div>
                <div className="w-[306px] h-[176px]  mt-6 ml-4">
                  <div className="flex w-full ">
                    <div className="w-[50%] ">Date Assigned</div>
                    <div className="w-[50%] ml-[80px] ">
                      {item.date_created}
                    </div>
                  </div>
                  <div className="flex w-full mt-5 ">
                    <div className="w-[50%] ">Due Date</div>
                    <div className="w-[50%] ml-[80px] ">
                      {item.deadline_date}
                    </div>
                  </div>
                  <div className="flex w-full mt-5 ">
                    <div className="w-[50%] ">Status</div>
                    <div className="w-[50%] ml-[80px] bg-green-100 text-green-500 text-center rounded">
                      {item.status}
                    </div>
                  </div>
                  <div className="flex w-full mt-5 ">
                    <div className="w-[50%] ">Team members</div>
                    <div className="w-[50%] ml-[80px] flex">
                      <People people={item.task_members} />
                    </div>
                  </div>
                </div>{" "}
                <button
                  onClick={() => {
                    submit();
                    opendesc();
                  }}
                  className={`absolute bottom-10 right-[35%]  rounded w-[71px] h-[32px] ${
                    team_lead !== user
                      ? "cursor-not-allowed pointer-events-none bg-gray-300 text-gray-600  opacity-50 "
                      : " hover:bg-blue-500 hover:text-white rounded border-gray-500"
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="bg-white h-[430px] w-[28%] mt-[10px] ml-6 rounded-lg ">
              <div className="h-full flex flex-col  pl-[30px] mt-[15px] p-3">
                <div className="text-base font-bold text-black ">
                  <p>comments</p>
                </div>
                <div className="min-h-[60%] flex flex-col items-center justify-center">
                  <span className="text-[gray]">No comments</span>
                </div>

                <div className=" flex items-center ">
                  <textarea
                    placeholder="Add a comment"
                    className=" mt-[15px] w-[450px] h-[47px] bg-white rounded-[20px] border border-black border-opacity-20  text-black text-opacity-40 text-[13px] font-medium pt-[10px] pl-[10px] "
                  />
                  {/* <div className="text-10 text-[gray]">
                    <BsSend />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default Desc;

import React from "react";
import { ImCancelCircle } from "react-icons/im";
import Datepicker from "react-tailwindcss-datepicker";

const GoalForm = ({ close }) => {
  return (
    <div className="absolute inset-0 w-[100vw] h-[100vh] bg-[black]/50 z-[100] flex items-center justify-center">
      <form className=" w-[782px] h-[458px] bg-[white] rounded-[8px] p-[20px]">
        <div
          className="w-full flex justify-between items-center"
          onClick={() => {
            close();
          }}
        >
          <p className="text-[18px] font-[800]">Create Goals Outline</p>
          <span className="text-[24px] cursor-pointer">
            <ImCancelCircle />
          </span>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label for="goal" className="text-[16px] font-[600]">
              Goal Title
            </label>
            <input
              id="goal"
              className="w-full border-[1px] border-black outline-none h-[35px] rounded-[8px] flex items-center "
              placeholder="Goal Title"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label for="description" className="text-[16px] font-[600]">
              Description
            </label>
            <textarea
              id="description"
              className="h-[180px] border-[1px] border-black  outline-none rounded-[8px]"
              placeholder="write goal description here"
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[400px]flex flex-col gap-2">
              <label className="text-[16px] font-[600]">Goal Deadline</label>

              <Datepicker
                className="w-[100px]  relative outline-none border-[1px] border-black"
                asSingle={true}
                //   value={value}
                //   onChange={handleValueChange}
                //   showShortcuts={true}
              />
            </div>
            <div className="w-[77px] h-[30px] bg-[#4D7CC1] text-center text-white rounded-[4px] text-[12px] font-[600] flex justify-center items-center">
              Add goal
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GoalForm;

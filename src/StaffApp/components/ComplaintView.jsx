import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
const ComplaintView = ({ close, title, receiver, status }) => {
  return ReactDOM.createPortal(
    <div className="absolute inset-0 w-screen max-h-screen flex flex-row items-center justify-center px-[10px]  bg-black/40 pt-[10px] border-b-[1px] border-b-[#656667]/10 ">
      <div className="w-[782px] h-fit py-[30px]  bg-white rounded">
        <div className="flex mt-[24px]">
          <div className="ml-[24px] text-lg font-bold">Complaint</div>
          <div
            className="cursor-pointer text-[30px] ml-[580px]"
            onClick={() => close(false)}
          >
            <IoClose />
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div className="text-base font-semibold ml-[24px] ">Title</div>
          <div className="text-base font-semibold ml-[550px] mt-[5px] ">
            To:
          </div>
        </div>
        <div className="flex">
          <div className="ml-[24px] w-[556px] h-[38px] text-wrap rounded border border-black border-opacity-20">
            {title}
          </div>
          <div className="ml-[24px] w-[130px] bg-white rounded border border-black border-opacity-20">
            <div className="w-full h-full rounded">{receiver}</div>
          </div>
        </div>
        <div className="mt-[24px] ml-[24px] text-base font-semibold flex w-full">
          <div>status</div>
          <div
            className={`w-fit px-[5px] h-fit ${
              status === "Received"
                ? "bg-[#d4efb7] text-[#5e9425]"
                : status === "Pending"
                ? "bg-[#f7e3bb] text-[#F5BA45]"
                : ""
            }  `}
          >
            {status}
          </div>
        </div>
      </div>
    </div>,

    document.getElementById("root")
  );
};

export default ComplaintView;

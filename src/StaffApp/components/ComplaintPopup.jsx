import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { createComplaint } from "../../backend/api";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addComplaints } from "../../backend/store/ComplaintSlice";
import Cookies from "js-cookie";
const ComplaintPopup = ({ complain, dispatch }) => {
  const [receiver, setReceiver] = useState(null);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const userId = Cookies.get("userId");

  const submitComplaint = async () => {
    const response = await createComplaint(userId, {
      receiver: "HOD",
      content: content,
      _id: v4(),
      viewed: false,
      title: title,
    });
    if (response.status) {
      console.log("Complaint created, congrats you are snitch");
      dispatch(
        addComplaints({
          receiver: "HOD",
          content: content,
          _id: v4(),
          viewed: false,
          title: title,
        })
      );
    } else {
      console.log("Cry to your mama");
    }
  };
  return ReactDOM.createPortal(
    <div className="absolute inset-0 w-screen max-h-screen flex flex-row items-center justify-center px-[10px]  bg-black/40 pt-[10px] border-b-[1px] border-b-[#656667]/10 ">
      <div className="w-[782px] h-[459px] bg-white rounded">
        <div className="flex mt-[24px]">
          <div className="ml-[24px] text-lg font-bold">File a complaint</div>
          <div
            className="cursor-pointer text-[30px] ml-[580px]"
            onClick={() => complain()}
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
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
            className="ml-[24px] w-[556px] h-[38px] text-wrap rounded border border-black border-opacity-20"
            placeholder="Complaint Title..."
          ></input>
          <div className="ml-[24px] w-[130px] bg-white rounded border border-black border-opacity-20">
            <select
              name=""
              id=""
              value={receiver}
              onChange={(e) => {
                setReceiver(e.currentTarget.value);
              }}
              className="w-full h-full rounded"
            >
              <option value={"HOD"}>HOD</option>
              <option value={"HR"}>HR</option>
            </select>
          </div>
        </div>
        <div className="mt-[24px] ml-[24px] text-base font-semibold">
          <div>Report</div>
        </div>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          className="h-[200px] mt-[8px] ml-[24px] w-[712px] rounded border border-black border-opacity-20 "
        ></textarea>
        <button
          className="w-[65px] h-[30px] bg-[#4D7CC1] rounded shadow justify-center items-center ml-[700px] mt-2"
          onClick={() => {
            submitComplaint();
            complain();
          }}
        >
          <div className="text-xs font-semibold text-center text-indigo-50 ">
            Submit
          </div>
        </button>
      </div>
    </div>,

    document.getElementById("root")
  );
};

export default ComplaintPopup;

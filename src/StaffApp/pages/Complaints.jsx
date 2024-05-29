import React from "react";
import { useState, useEffect } from "react";
import { Complaintss } from "../data/temp";
import ComplaintPopup from "../components/ComplaintPopup";
import { FaCirclePlus } from "react-icons/fa6";
import ComplaintView from "../components/ComplaintView";
import { getComplaints } from "../../backend/api";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setComplaints } from "../../backend/store/ComplaintSlice";

const Complaints = () => {
  const [complaintPopup, setComplainPopup] = useState(false);
  const [complaints, setComplaintsData] = useState([]);
  const compalintsStore = useSelector((state) => state.complaints.complaints);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompalints = async () => {
      const complaintsData = await getComplaints(employee_id);
      setComplaintsData(complaintsData.complaints);

      dispatch(setComplaints(complaintsData.complaints));
    };
    const employee_id = Cookies.get("userId");
    if (compalintsStore.length != 0) {
      setComplaintsData(compalintsStore);
    } else {
      console.log("What blood hell");
      fetchCompalints(employee_id);
    }
  }, [dispatch]);
  const complain = () => {
    setComplainPopup(!complaintPopup);
  };
  return (
    <div className="bg-[white] pb-[40px]">
      {complaintPopup ? (
        <ComplaintPopup complain={complain} dispatch={dispatch} />
      ) : (
        ""
      )}
      <div className=" mt-4 w-[full] h-[46px] bg-white rounded-tl-lg rounded-tr-lg shadow flex items-center">
        <div className="text-zinc-500 text-[18px] font-bold  pl-[120px]  ">
          Title
        </div>
        <div className="text-zinc-500 text-[18px] font-bold pl-[575px] ">
          To
        </div>
        <div className="text-zinc-500 text-[18px] font-bold pl-[132px] ">
          Status
        </div>
      </div>

      <div className="">
        {complaints.map((item, key) => {
          return (
            <ComplaintRow
              title={item.title}
              viewed={item.viewed}
              receiver={item.receiver}
            />
          );
        })}
      </div>
      <div className="relative w-full flex justify-end pr-[30px] top-[20px]">
        <div
          className="w-[146px] h-[37px] px-3 py-2 bg-blue-500 rounded shadow justify-center items-center gap-2 flex relative cursor-pointer"
          onClick={complain}
        >
          <span className="text-[white]">
            <FaCirclePlus />
          </span>
          <div className="text-xs font-bold text-center text-indigo-50 ">
            File a Complaint
          </div>
        </div>
      </div>
    </div>
  );
};

const ComplaintRow = ({ title, viewed, receiver }) => {
  const [complaintView, setComplaintView] = useState();
  return (
    <div className=" w-full flex flex-col gap-[10px] cursor-pointer hover:drop-shadow-lg transition-all ease-in duration-300">
      {complaintView && (
        <ComplaintView
          close={setComplaintView}
          title={title}
          receiver={receiver}
          viewed={viewed}
        />
      )}
      <div>
        <div className="w-[full] h-[40px] bg-white shadow flex border-b-[1px] border-b-[#656667]/10 items-center ">
          <div className=" w-[6%] pl-[24px]">
            <img src="../src/assets/taskimg/Check.svg" alt="" />
          </div>
          <div className="w-[54%]  text-[16px] text-zinc-500  text-start">
            {title}
          </div>
          <div className="w-[10%]  text-[16px] text-zinc-500  text-center">
            {receiver}
          </div>
          <div className="w-[18%] relative">
            <div
              className={` ml-[65px] w-[100px] h-[30px] rounded-[4px] ${
                viewed === true
                  ? "bg-[#d4efb7] text-[#5e9425]"
                  : viewed === false
                  ? "bg-[#f7e3bb] text-[#F5BA45]"
                  : ""
              }    bg-opacity-20   `}
            >
              <div className="relative justify-start w-full h-full text-center">
                {viewed ? "Received" : "Pending"}
              </div>
            </div>
          </div>
          <div className="ml-[28px]">
            <button
              className="w-[71px] rounded border border-[#17417E] hover:bg-blue-300"
              onClick={() => {
                setComplaintView((prev) => !prev);
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;

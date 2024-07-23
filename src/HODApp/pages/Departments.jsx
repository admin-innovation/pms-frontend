import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Departments } from "../../data/temp";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

const Department = () => {
  const { department_id } = useParams();
  const data = Departments[department_id];
  const [staffView, setStaffView] = useState();
  const closeStaffView = () => {
    console.log("Clicked");
    setStaffView(false);
  };

  return (
    <div className="w-full h-full flex flex-col gap-[8px]">
      <div className="relative bg-cover w-full h-[350px] rounded-[10px]">
        <div className=" relative w-full h-[40%]">
          <img
            className="absolute z-10 w-full h-full"
            style={{ objectFit: "cover" }}
            src={`/${data.wall_paper}`}
          />
          <span className="z-50 relative top-[50%] left-[50%] text-[40px] text-white font-[700]">
            {department_id}
          </span>
        </div>
        <div className="relative w-full h-[60%] bg-[white] flex">
          <div
            className="z-[10000] absolute -top-[70px] left-[100px] w-[167px] h-[167px] rounded-full  border-[4px] border-[white] bg-cover"
            style={{ backgroundImage: `url('/${data.HOD.profile_pic}')` }}
          />
          <div className="flex px-[120px] pt-[100px] gap-[50px]">
            <div className="text-center flex flex-col gap-[3px] relative">
              <p className="text-[25px] text-black font-[700]">
                {data.HOD.name}
              </p>
              <p className="text-[14px] text-black font-[500]">
                {data.HOD.position}
              </p>
            </div>
            <div className="flex flex-col pt-[10px] gap-[8px]">
              <span className="flex items-center gap-[20px]">
                <MdOutlineMail />
                <a className="text-[14px] text-[#205BB1] cursor-pointer">
                  {data.HOD.email}
                </a>
              </span>
              <span className="flex items-center gap-[20px]">
                <FaPhoneAlt />
                <a className="text-[14px] text-[#205BB1] cursor-pointer">
                  {data.HOD.phone}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-[10px]">
        <motion.div
          transition={{ duration: 0.8, delay: 1 }}
          initial={{ width: "100%" }}
          animate={staffView ? { width: "70%" } : { width: "100%" }}
          key="expanded"
          className="relative w-full  bg-[white] rounded-[8px] px-[60px] flex flex-wrap  gap-y-[10px] gap-x-[10px] pt-[100px] "
        >
          <span className="absolute top-5 font-bold text-[18px]">
            Other Staff
          </span>
          {data.employees?.map((employee, key) => {
            return <EmployeeCard employee={employee} setStaff={setStaffView} />;
          })}
        </motion.div>

        <AnimatePresence>
          {staffView && (
            <motion.div
              initial={{ opacity: 0, top: "200px" }}
              animate={{ opacity: 1, top: "0px" }}
              exit={{ opacity: 0, top: 200 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className=" relative bg-white h-[700px] max-w-[30%] flex flex-col items-center justify-center rounded-[8px] pb-[10px]  "
            >
              <div className="w-full h-[50%] relative flex flex-col items-start">
                <div
                  className="z-[1000] w-[20px] h-[20px] absolute right-3 top-3"
                  onClick={closeStaffView}
                >
                  <IoCloseSharp className="hover:text-[red] text-[18px] cursor-pointer" />
                </div>
                <div className="w-full h-[50%] relative flex items-center justify-center gap-[10px]">
                  <div
                    className=" relative bg-cover w-[80px] h-[80px] rounded-full"
                    style={{
                      backgroundImage: `url('/${staffView.profile_pic}')`,
                    }}
                  >
                    <div
                      className={`bottom-2 right-1 absolute w-[10px] h-[10px] bg-[#74B72E] border-[3px] border-solid border-[#BACCE714] rounded-full`}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="flex flex-row">
                      <p className="text-[14px] font-[600]">
                        Average task Rating:
                      </p>
                      <ReactStars
                        count={5}
                        // FIx these stars
                        value={5}
                        isHalf={true}
                        edit={false}
                        emptyIcon={
                          <i className="far fa-star-o" aria-hidden="true"></i>
                        }
                        halfIcon={
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        }
                        fullIcon={<i className="fa fa-star"></i>}
                        size={15}
                        activeColor="#ffd700"
                      />
                    </span>
                    <span className="flex">
                      <p className="text-[14px] font-[600]">
                        Average peer Rating:
                      </p>
                      <ReactStars
                        count={5}
                        value={5}
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
                <div className="w-full flex flex-col px-[25px] gap-[10px]">
                  <span className="flex flex-col font-bold text-[16px]">
                    Name:
                    <span className="text-[14px] font-[300]">
                      {staffView.name}
                    </span>
                  </span>
                  <span className="flex flex-col font-bold text-[16px]">
                    Email Address:
                    <span className="text-[14px] font-[300]">
                      {staffView.email}
                    </span>
                  </span>
                  <span className="flex flex-col font-bold text-[16px]">
                    PhoneNumber:
                    <span className="text-[14px] font-[300]">
                      {staffView.phone}
                    </span>
                  </span>
                  <span className="flex flex-col font-bold text-[16px]">
                    Position:
                    <span className="text-[14px] font-[300]">
                      {staffView.position}
                    </span>
                  </span>
                </div>
              </div>

              <TasksView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const TasksView = ({ employee_id }) => {
  const [taskFilter, setTaskFilter] = useState("completed");
  // UseEffect to get tasks for employee with id_employee_id
  {
    /* Add loading State and empty state */
  }
  const employee_task_data = [
    "Conduct a feasibility study for expanding Nigcomsat's satellite coverage to rural areas.",
    "Develop a strategic plan for enhancing Nigcomsat's satellite communication services.",
    "Implement a customer service improvement program for Nigcomsat's clients.",
    "Conduct a market analysis to identify new business opportunities for Nigcomsat.",
    "Upgrade Nigcomsat's satellite infrastructure to improve performance and reliability.",
    "Develop a training program for Nigcomsat's staff to enhance their technical skills.",
    "Conduct a cost-benefit analysis for launching new satellite communication services.",
    "Implement a quality assurance program to ensure the reliability of Nigcomsat's satellite services.",
    "Develop a marketing campaign to promote Nigcomsat's satellite services to potential clients.",
    "Conduct a risk assessment for Nigcomsat's satellite operations and develop mitigation strategies.",
  ];

  return (
    <div className="relative w-[90%] h-[50%] rounded-[8px] px-[8px] bg-[#98B4DB]/50 overflow-hidden  ">
      <div className="relative w-full flex justify-between mt-[20px] items-center ">
        <span>Task</span>
        <div className="w-[100px] h-[30px] border-[1px] border-[#98B4DB] rounded-[4px] flex justify-between items-center text-[10px] px-[3px] py-[10px]">
          <div
            onClick={() => {
              setTaskFilter("completed");
            }}
            className={`p-[2px] rounded-[2px] test-black font-light cursor-pointer ${
              taskFilter === "completed"
                ? "bg-[#205BB1] text-white font-[700]"
                : ""
            }`}
          >
            Completed
          </div>
          <div
            onClick={() => {
              setTaskFilter("ongoing");
            }}
            className={`p-[2px] rounded-[2px] test-black font-light cursor-pointer ${
              taskFilter === "ongoing"
                ? "bg-[#205BB1] text-white font-[700]"
                : ""
            }`}
          >
            Ongoing
          </div>
        </div>
      </div>
      <div className="relative h-full mb-[30px] pt-[30px]  w-full overflow-y-scroll flex flex-col gap-[20px] ">
        {employee_task_data.map((item, key) => {
          return (
            <div className=" h-[60px] flex gap-[5px] w-full justify-center items-start">
              <div className="w-[10px] h-[10px]  bg-[#4D7CC1]" />
              <p className="text-[14px]">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EmployeeCard = ({ employee, setStaff }) => {
  const handleEmployeeCardClick = (e) => {
    setStaff({
      phone: e.currentTarget.getAttribute("data-phone"),
      email: e.currentTarget.getAttribute("data-email"),
      id: e.currentTarget.getAttribute("data-id"),
      name: e.currentTarget.getAttribute("data-name"),
      position: e.currentTarget.getAttribute("data-position"),
      profile_pic: e.currentTarget.getAttribute("data-profile_pic"),
    });
  };
  return (
    <div
      className=" transition-all duration-300 ease-in-out w-[150px] h-[150px] flex flex-col gap-[10px] items-center justify-center
    rounded-[8px] bg-[#BACCE714]/10 hover:bg-[#BACCE714]/30 cursor-pointer"
      data-phone={employee.phone}
      data-email={employee.email}
      data-id={employee.id}
      data-name={employee.name}
      data-position={employee.position}
      data-profile_pic={employee.profile_pic}
      onClick={handleEmployeeCardClick}
    >
      <div
        className=" relative bg-cover w-[50%] h-[50%] rounded-full"
        style={{ backgroundImage: `url('/${employee.profile_pic}')` }}
      >
        <div
          className={`bottom-2 right-1 absolute w-[10px] h-[10px] bg-[#74B72E] border-[3px] border-solid border-[#BACCE714] rounded-full`}
        />
      </div>
      <div>
        <p className="text-[14px] font-[700]">{employee.name}</p>
      </div>
    </div>
  );
};
export default Department;

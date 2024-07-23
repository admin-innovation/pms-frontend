import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { getDepartment, getTask } from "../../backend/api";

const Staff = () => {
  const { department_id } = useParams();
  const [employeesData, setEmployeesData] = useState([]);
  const [departmentData, setDepartmentData] = useState(null);
  const [staffView, setStaffView] = useState(null);
  const employees = useSelector((state) => state.employees.employees);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setEmployeesData(employees);
  }, [employees]);

  const closeStaffView = () => {
    setStaffView(null);
  };

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const data = await getDepartment(user.department);
        setDepartmentData(data);
      } catch (error) {
        console.error(
          `Error fetching Department Details for ${department_id}:`,
          error
        );
      }
    };

    fetchDepartmentData();
  }, [department_id, user.department]);

  if (departmentData) {
    return (
      <div className="w-full h-[100vh] overflow-y-scroll   flex flex-col gap-[8px]">
        <div className="relative bg-cover w-full h-[350px] rounded-[10px]">
          <div className=" relative w-full h-[40%]">
            <img
              className="z-10 absolute w-full h-full"
              style={{ objectFit: "cover" }}
              src={`${departmentData.wall_paper}`}
            />
            <span className="z-50 relative top-[50%] left-[50%] text-[40px] text-white font-[700]">
              {departmentData.name}
            </span>
          </div>
          <div className="relative w-full h-[60%] bg-[white] flex">
            <div
              className="z-[10000] absolute -top-[70px] left-[100px] w-[167px] h-[167px] rounded-full  border-[4px] border-[white] bg-cover"
              style={{
                backgroundImage: `url('${departmentData.head_of_department.profile_pic}')`,
              }}
            />
            <div className="flex px-[120px] pt-[100px] gap-[50px]">
              <div className="text-center flex flex-col gap-[3px] relative">
                <p className="text-[25px] text-black font-[700]">
                  {departmentData.head_of_department.last_name},
                  {departmentData.head_of_department.first_name}
                  {departmentData.head_of_department.middle_name}
                </p>
                <p className="text-[14px] text-black font-[500]">
                  General Manager
                </p>
              </div>
              <div className="flex flex-col pt-[10px] gap-[8px]">
                <span className="flex items-center gap-[20px]">
                  <MdOutlineMail />
                  <a className="text-[14px] text-[#205BB1] cursor-pointer">
                    {departmentData.head_of_department.email}
                  </a>
                </span>
                <span className="flex items-center gap-[20px]">
                  <FaPhoneAlt />
                  <a className="text-[14px] text-[#205BB1] cursor-pointer">
                    {departmentData.head_of_department.phone}
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
            {employeesData.map((employee) => {
              return (
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                  setStaff={setStaffView}
                />
              );
            })}
          </motion.div>

          <AnimatePresence>
            {staffView && (
              <motion.div
                initial={{ opacity: 0, top: "200px" }}
                animate={{ opacity: 1, top: "0px" }}
                exit={{ opacity: 0, top: 200 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className=" relative bg-white h-[700px] w-[30%] flex flex-col items-center justify-center rounded-[8px] pb-[10px]  "
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
                        backgroundImage: `url('${staffView.profile_pic}')`,
                      }}
                    >
                      <div
                        className={`bottom-2 right-1 absolute w-[10px] h-[10px]  ${
                          staffView.online ? "bg-[#74B72E] " : "bg-[red]"
                        }  border-[3px] border-solid border-[#BACCE714] rounded-full`}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="flex flex-row">
                        <p className="text-[14px] font-[600]">
                          Average task Rating:
                        </p>
                        <ReactStars
                          count={5}
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
                        {staffView?.designation}
                      </span>
                    </span>
                  </div>
                </div>

                <TasksView employee_id={staffView.id} hook={staffView} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return null; // Add a fallback if `departmentData` is not available
};

const TasksView = ({ employee_id, hook }) => {
  const [taskFilter, setTaskFilter] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTask(employee_id);
        setTasks(data);
      } catch (error) {
        console.error(`Error fetching Tasks for ${employee_id}:`, error);
      }
    };

    fetchTasks();
  }, [employee_id]);

  if (hook) {
    return (
      <div className="w-[90%] flex flex-col gap-[10px] items-center">
        <input
          type="text"
          className="bg-[#EBEBEB] text-[14px] font-[300] outline-none px-3 py-2 placeholder-[#464545]"
          placeholder="Search Task"
          value={taskFilter}
          onChange={(e) => setTaskFilter(e.target.value)}
        />
        <div className="w-full flex flex-col gap-[10px]">
          {tasks
            .filter((task) =>
              task.description.toLowerCase().includes(taskFilter.toLowerCase())
            )
            .map((task) => (
              <div key={task.id} className="p-3 bg-[#F5F5F5] rounded-[5px]">
                <p className="text-[14px]">{task.description}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return null; // Add a fallback if `hook` is not available
};

const EmployeeCard = ({ employee, setStaff }) => {
  const handleEmployeeCardClick = (e) => {
    setStaff({
      phone: e.currentTarget.getAttribute("data-phone"),
      email: e.currentTarget.getAttribute("data-email"),
      id: e.currentTarget.getAttribute("data-id"),
      name: e.currentTarget.getAttribute("data-name"),
      designation: e.currentTarget.getAttribute("data-designation"),
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
      data-name={employee.first_name}
      data-designation={employee?.designation}
      data-profile_pic={employee.profile_pic}
      data-online={employee.online}
      onClick={handleEmployeeCardClick}
    >
      <div
        className=" relative bg-cover w-[50%] h-[50%] rounded-full"
        style={{ backgroundImage: `url('${employee.profile_pic}')` }}
      >
        <div
          className={`bottom-2 right-1 absolute w-[10px] h-[10px]  ${
            employee.online ? "bg-[#74B72E] " : "bg-[red]"
          }  border-[3px] border-solid border-[#BACCE714] rounded-full`}
        />
      </div>
      <div>
        <p className="text-[10px] font-[700]">
          {employee.first_name}
          {employee.middle_name} {employee.last_name}
        </p>
      </div>
    </div>
  );
};

export default Staff;

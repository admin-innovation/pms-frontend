import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import Datepicker from "react-tailwindcss-datepicker";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { addTask } from "../../backend/api";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import { EmployeeData } from "../../data/temp";
import Select from "react-tailwindcss-select";

const TaskForm = ({ close }) => {
  const [title, setTitle] = useState("");
  const [staffs, setStaffs] = useState([]);
  const [lead, setLead] = useState();
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [loading, setLoading] = useState(false);
  const department = useSelector((state) => state.user.user.department);
  const employeeData = useSelector((state) => state.employees.employees);
  const Employeeoptions = employeeData.map((employee) => ({
    value: employee.staff_id,
    label: `${employee.first_name} ${employee.last_name}`, // String label for internal use
    renderLabel: (
      <div className="flex items-center gap-2">
        <img
          src={employee.profile_pic}
          alt={`${employee.first_name} ${employee.last_name}`}
          className="w-8 h-8 rounded-full"
        />
        <span>{`${employee.first_name} ${employee.last_name}`}</span>
      </div>
    ),
  }));
  const handleAddTask = async () => {
    setLoading(true);

    try {
      const taskMembers = staffs
        .map((staff) => {
          const employee = employeeData.find(
            (emp) => emp.staff_id === staff.value
          );
          if (!employee) return null;
          return {
            _id: employee.staff_id,
            firstname: employee.first_name,
            middlename: employee.middle_name,
            profil_pic: employee.profile_pic,
            lastname: employee.last_name,
          };
        })
        .filter((member) => member !== null);

      const task = {
        _id: uuidv4(),
        title,
        description,
        deadline,
        status: "ongoing",
        date_created: new Date().toISOString(),
        department,
        team_lead: toString(lead.value),
        task_members: taskMembers,
      };

      const response = await addTask(task);
      if (response) {
        setLoading(false);
        toast.success("Task Added successfully");
        close();
      }
    } catch (error) {
      console.error("Error adding task:", error);
      close();
      toast.error("Error adding task. Please try again.");
    }
  };

  return ReactDOM.createPortal(
    <motion.div className="absolute inset-0 w-[100vw] h-[100vh] bg-[black]/50 z-[100] flex items-center justify-center">
      <motion.form
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: easeInOut }}
        className="w-[782px] min-h-[458px] bg-white rounded-[8px] p-[20px]"
      >
        <div className="w-full flex justify-between items-center mb-5">
          <p className="text-[18px] font-[800]">Create Goals Outline</p>
          <span className="text-[24px] cursor-pointer" onClick={() => close()}>
            <ImCancelCircle />
          </span>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex gap-5">
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="goal" className="text-[16px] font-[600]">
                Task Title
              </label>
              <div className="w-full px-[30px] border-[1px] border-gray-300 rounded-[8px]">
                <input
                  id="goal"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  value={title}
                  className="w-full outline-none h-[35px] flex items-center"
                  placeholder="Task Title"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="staffs" className="text-[16px] font-[600]">
                Select Staff
              </label>
              <Select
                id="staffs"
                classNames="w-[300px] relative"
                isMultiple
                value={staffs}
                onChange={(value) => setStaffs(value)}
                options={Employeeoptions}
                formatOptionLabel={(option) => option.renderLabel}
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="staffs" className="text-[16px] font-[600]">
                Select Team Lead
              </label>
              <Select
                id="team_lead"
                classNames="w-[300px] relative"
                value={lead}
                onChange={(value) => setLead(value)}
                options={Employeeoptions}
                formatOptionLabel={(option) => option.renderLabel}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="description" className="text-[16px] font-[600]">
              Description
            </label>
            <div className="w-full px-[30px] border-[1px] border-gray-300 rounded-[8px]">
              <textarea
                id="description"
                onChange={(e) => setDescription(e.currentTarget.value)}
                value={description}
                className="h-[180px] w-full outline-none rounded-[8px]"
                placeholder="Write goal description here"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[200px] flex flex-col gap-2 mb-[50px]">
              <label className="text-[16px] font-[600]">Goal Deadline</label>
              <input
                className="outline-none border-[1px] border-gray-300 rounded-[8px] p-[10px]"
                value={deadline}
                onChange={(e) => setDeadline(e.currentTarget.value)}
                type="date"
              />
            </div>
            <div
              onClick={handleAddTask}
              className="w-[77px] h-[30px] bg-[#4D7CC1] text-center text-white rounded-[4px] text-[12px] font-[600] flex justify-center items-center cursor-pointer hover:bg-[#062b61]"
            >
              {!loading ? (
                "Assign Task"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                  width="20"
                  height="20"
                  style={{
                    shapeRendering: "auto",
                    display: "block",
                    background: "transparent",
                  }}
                >
                  <circle
                    strokeDasharray="164.93361431346415 56.97787143782138"
                    r="35"
                    strokeWidth="10"
                    stroke="#17417E"
                    fill="none"
                    cy="50"
                    cx="50"
                  >
                    <animateTransform
                      keyTimes="0;1"
                      values="0 50 50;360 50 50"
                      dur="1s"
                      repeatCount="indefinite"
                      type="rotate"
                      attributeName="transform"
                    />
                  </circle>
                </svg>
              )}
            </div>
          </div>
        </div>
        <ToastContainer />
      </motion.form>
    </motion.div>,
    document.getElementById("root")
  );
};

export default TaskForm;

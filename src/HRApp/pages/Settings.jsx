import React from "react";
import { useState, useRef } from "react";
// import { user } from "../../data/temp";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { uploadProfilePic } from "../../backend/api";
import { formControlClasses } from "@mui/base";
import { getEmployee } from "../../backend/api";
import { setUser } from "../../backend/store/UserSlice";
import { useEffect } from "react";

const Settings = () => {
  const user = useSelector((state) => state.user.user);

  const [key, setKey] = useState(0);
  const dispatch = useDispatch();
  const [activeView, setActiveView] = useState(1);
  const [firstname, setFirstname] = useState(user.first_name);
  const [middlename, setMiddleName] = useState(user.middle_name);
  const [lastname, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [profile_pic, setProfilePic] = useState(user.profile_pic);
  const [phone, setPhone] = useState(user.phone);
  const [gender, setGender] = useState(user.gender);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    console.log("refreshed");
  }, [dispatch]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const upload = async (user, file) => {
      //set loading state to true
      try {
        const data = await uploadProfilePic(user.id, file);
        // Recall the user data api
        const fetchEmployee = async () => {
          try {
            const employee = await getEmployee(user.id);

            dispatch(setUser(employee));
          } catch (error) {
            console.error("Error fetching employee:", error);
          }
        };
        if (data.msg == "ok") {
          fetchEmployee();
          //setloading state to false
        }

        return data;
      } catch (error) {
        console.error("this shit happened:", error);
      }
    };
    upload(user, file);
  };

  const handleEditPersonal = () => {
    setEditPersonal(false);
  };

  return (
    <div className="w-full  flex flex-col gap-6 mt-[50px] ">
      <div className="bg-white w-full py-[30px] rounded-[5px] flex flex-col items-center justify-center gap-[30px] ">
        <div className=" w-[90%]  border border-[#ECE9E9] rounded-[8px] flex px-[50px] py-[10px] items-center gap-[20px]">
          <div
            className=" group relative size-[120px] rounded-[50%] bg-slate-400 object-cover overflow-hidden"
            onClick={handleDivClick}
          >
            <img
              src={profile_pic}
              // src="https://storage.googleapis.com/pms-dev-faac9.appspot.com/ProfilePictures/8q5XNvw0z3gvdG8SD6G9UyX7Gz52.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
              style={{ objectFit: "cover" }}
              accept="image/*"
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="group-hover:opacity-[1] w-full h-full opacity-0 bg-[black]/10 absolute z-[100] inset-0 flex items-center  justify-center text-[70px] text-[gray]/50">
              <IoCameraOutline />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <span className="font-[700] text-[18px] text-black">
              {user.first_name} {user.middle_name} {user.last_name}
            </span>
            <span className="font-[600] text-[#666667] text-[16px]">
              {user.designation}
            </span>
            <span className="font-500] text-[#666667] text-[14px]">
              {user.department}
            </span>
          </div>
        </div>
        <div
          onClick={handleEditPersonal}
          className=" relative rounded-[8px] border-[#ECE9E9] w-[90%]   border  pt-[30px] pb-[90px] flex flex-col gap-[20px] px-[50px]"
        >
          <p className="text-black text-[20px] font-bold">
            Personal Information
          </p>
          <div className="w-full flex flex-wrap gap-x-[90px] gap-y-[30px] ">
            <span className="flex flex-col">
              <label className="text-[14px] text-[#666667] font-light">
                First Name
              </label>
              <div className="decoration-none  text-[16px] font-bold outline-none dec">
                {user.first_name}
              </div>
            </span>
            <span className="flex flex-col">
              <label className="text-[14px] text-[#666667] font-light">
                Middle Name
              </label>
              <div className="decoration-none  text-[16px] font-bold">
                {user.middle_name}
              </div>
            </span>
            <span className="flex flex-col">
              <label className="text-[14px] text-[#666667] font-light">
                Last Name
              </label>
              <div className="decoration-none  text-[16px] font-bold">
                {user.last_name}
              </div>
            </span>
            <span className="flex flex-col">
              <label className="text-[14px] text-[#666667] font-light">
                Email Address
              </label>
              <div className="decoration-none  text-[16px] font-bold">
                {user.email}
              </div>
            </span>
            <span className="flex flex-col">
              <label className="text-[14px] text-[#666667] font-light">
                Phone
              </label>
              <div className="decoration-none  text-[16px] font-bold">
                {phone}
              </div>
            </span>
            <span className="flex flex-col">
              <label className="text-[14px] text-[#666667] font-light">
                Gender
              </label>
              <div className="decoration-none  text-[16px] font-bold">
                {gender}
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

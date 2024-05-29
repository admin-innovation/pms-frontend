// eslint-disable-next-line no-unused-vars
import React from "react";

import Image from "./assets/log-in.png";
import Logo from "./assets/logo.png";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./backend/store/UserSlice";
import { signinFetch } from "./backend/api";
import { useNavigate } from "react-router";

const Signin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const domain = window.location.host;
  const handleClick = async () => {
    setLoading(true);
    const userLogin = { staff_id: staffId, password: pass };
    try {
      const userData = await signinFetch(userLogin);
      setLoading(false);
      //How about tokens
      if (userData) {
        window.location.href = `http://${domain}/`;
      }
      // if (userData.role === "management") {
      //   window.location.href = `http://${domain}/management`;
      // }
      // if (userData.role === "hod") {
      //   window.location.href = `http://${domain}/hod`;
      // }
      // if (userData.role === "hr") {
      //   window.location.href = `http://${domain}/hr`;
      // }
    } catch (error) {
      console.log(error);
    }

    // redirect the user
  };
  const [staffId, setStaffId] = useState();
  const [pass, setPass] = useState();
  return (
    <div
      className="flex w-[100%]  h-screen overflow-hidden bg-[white] flex-wrap bg-cover bg-no-repeat items-center justify-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="w-full flex flex-col gap-[20px]  h-full  items-center justify-center  ">
        <div className="w-[50%] items-center justify-center flex flex-col   ">
          <img src={Logo} className="object-contain" />
          <p className="font-[500] text-slate-500 text-[18px]">
            NIGCOMSAT Performance Management System
          </p>
        </div>

        <div className="h-[500px] w-[450px] bg-white  rounded-3xl border-[1.5px] border-black p-[30px] ">
          <h1 className="text-3xl font-semibold">Sign In To Your Account</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Enter Your Credentials used in Anomis
          </p>
          <div className="mt-8 ">
            <div>
              <label className="text-lg font-medium">Staff ID</label>
              <input
                className="w-full border-[2px] border-gray-100 rounded-xl p-[4px] mt-[1px] bg-transparent"
                placeholder="Staff ID"
                value={staffId}
                onChange={(e) => {
                  setStaffId(e.currentTarget.value);
                }}
              />
            </div>
            <div>
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-[2px] border-gray-100 rounded-xl p-[4px] mt-[1px] bg-transparent"
                placeholder="Password"
                type="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.currentTarget.value);
                }}
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div>
                <input type="checkbox" id="remeber" />
                <label className="ml-2 font-medium text-base" itemID="remeber">
                  Remember Me
                </label>
              </div>
              <button className="font-medium text-base text-blue-400">
                Forgot Password
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4 ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleClick();
                }}
                className={`active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl h-[53px] ${
                  loading ? "bg-[gray]/20" : "bg-blue-400"
                }  text-white text-lg font-bold`}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[50%] h-full px-[20px] py-[20px]"></div>
    </div>
  );
};

export default Signin;

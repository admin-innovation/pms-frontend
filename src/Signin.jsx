// eslint-disable-next-line no-unused-vars
import React from "react";
import Form from "./ManagementApp/components/Form";
import Image from "./assets/log-in.png";
import Logo from "./assets/logo.png";

const Signin = () => {
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

        <Form />
      </div>
      <div className="relative w-[50%] h-full px-[20px] py-[20px]">
        {/* <div className="w-[100%] flex flex-col h-full items-center justify-center bg-[#BACCE7] relative   rounded-[10px]">
          <img
            src={Image}
            className="w-[70%] h-[50%]"
            style={{ objectFit: "contain" }}
          />
          <div className="w-full flex flex-col items-center justify-center text-center">
            <p className="font-[500] text-[24px]">
              {" "}
              NIGCOMSAT Performance Management System
            </p>
            <p className="text-[10px] font-[200]">
              This system helps you set goals, track progress, and receive
              feedback for continuous improvement.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Signin;

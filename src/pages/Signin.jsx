// eslint-disable-next-line no-unused-vars
import React from "react";
import Form from "../components/Form";
import Image from "../assets/loginillustration.png";

const Signin = () => {
  return (
    <div className="flex w-[100%] h-screen overflow-hidden bg-[white]">
      <div className="w-[50%] flex  items-center justify-center   ">
        <Form />
      </div>
      <div className="w-[50%] relative flex flex-col h-full items-center justify-center bg-[#BACCE7] relative m-[20px]  rounded-[10px]">
        <img
          src={Image}
          className="w-[50%] h-[50%]"
          style={{ objectFit: "contain" }}
        />
        <div className=""></div>
      </div>
    </div>
  );
};

export default Signin;

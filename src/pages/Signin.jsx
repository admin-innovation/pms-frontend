// eslint-disable-next-line no-unused-vars
import React from "react";
import Form from "../components/Form";
import Image from "../assets/loginillustration.png"


const Signin = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex  items-center justify-cente  r lg:w-1/2" >
      <Form/>
      </div>
      <div className="hidden relative lg:flex h-full items-center justify-center bg-gray-200">
        <div className="w-[300px] h-[67px] top-[45px] left-[43px]" >
          <img src={Image} />
          <div className= "w-full absolute h-1/2 bg-white/10" />
        </div>
      </div>
      
    </div>
    
  );
 
}

export default Signin;

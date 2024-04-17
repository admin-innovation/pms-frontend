import React from "react";

const LoadingScreen = () => {
  return (
    <div className=" absolute w-screen h-screen bg-[blue]/10 text-[red] flex justify-center items-center z-[100000]">
      <div>Loading....</div>
    </div>
  );
};

export default LoadingScreen;

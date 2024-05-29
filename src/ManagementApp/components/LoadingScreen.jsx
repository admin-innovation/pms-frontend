import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import satellite from "../../assets/satellite.svg";
import background from "../../assets/log-in.png";
import earth from "../../assets/earth.png";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  //width of the parent div
  const speed = 0.0001;
  const sat = document.getElementById("satellite")?.getBoundingClientRect();
  const orbit = document.getElementById("orbit")?.getBoundingClientRect(); // Speed of the animation
  // const radius =
  //   (orbit.x - satellite.x) ^ (2 - (orbit.y - satellite.y)) ^ 2 ^ (1 / 2);
  const radius = orbit?.width / 2;
  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = Date.now();
      setX(radius * Math.cos(speed * time));
      setY(radius * Math.sin(speed * time));
    }, 16); // Update every frame (approximately 60fps)
    return () => clearInterval(intervalId);
  }, [radius, speed]);

  return (
    <div
      className="absolute w-screen h-screen bg-[black] bg-cover bg-no-repeat  text-[red] flex justify-center items-center z-[100000]"
      // style={{ backgroundImage: `url('${background}')` }}
    >
      <div
        id="orbit"
        className="relative size-[30vw] border-4 border-gray-700 rounded-full  flex items-center justify-center"
      >
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="absolute" />
          <img src={earth} alt="earth" className="size-[500px] " />
        </div>

        <motion.img
          src={satellite}
          alt="Satellite"
          id="satellite"
          initial={{ rotate: 0 }}
          animate={{
            x: x,
            y: y,
            rotate: 360,
          }}
          transition={{ duration: 0, repeat: Infinity, ease: "linear" }}
          className="size-[100px] absolute  "
        />
      </div>
    </div>
  );
};

export default LoadingScreen;

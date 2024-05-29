import React from "react";
import { FaCheck } from "react-icons/fa";
import { GoDash } from "react-icons/go";

const Check = ({ checked = false, size, color = "#6A91CB" }) => {
  const classstyle = checked
    ? `text-white`
    : "bg-transparent border-[1px] border-[black] text-black";
  return (
    <div
      className={`size-[${size}]  ${
        checked && "bg-[#6A91CB]"
      } rounded-lg ${classstyle} flex items-center justify-center`}
    >
      {checked ? <FaCheck /> : <GoDash />}
    </div>
  );
};

export default Check;

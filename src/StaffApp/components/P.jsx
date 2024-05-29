import React from "react";

const P = ({ limit, children }) => {
  const truncatedText =
    children.length > limit ? `${children.substring(0, limit)}...` : children;

  return <p>{truncatedText}</p>;
};
export default P;

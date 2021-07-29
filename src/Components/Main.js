import React from "react";

// components
import Banner from "./Banner";

const Main = () => {
  return (
    <div
      className="main min-h-screen w-full bg-red-300 sm:w-1/2 sm:bg-pink-200 border-r border-l border-gray-100"
      style={{ backgroundColor: "#e3e0cf" }}
    >
      <Banner />
    </div>
  );
};

export default Main;

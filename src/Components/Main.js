import React from "react";

// components
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import { categories } from "./categories";

const Main = () => {
  return (
    <div
      className="main min-h-screen w-full bg-red-300 sm:w-1/2 sm:bg-pink-200 border-r border-l border-gray-100"
      style={{ backgroundColor: "#e3e0cf" }}
    >
      <Banner />
      <div className="category-posts h-auto w-full rounded-lg bg-red-200">
        {categories.map((elm, index) => {
          return <CategorySection category={elm} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Main;
